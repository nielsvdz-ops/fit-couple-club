import Stripe from "stripe";
import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { createClient as createServerSupabaseClient } from "../../../lib/supabase/server";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const adminSupabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

export async function POST() {
  try {
    if (!process.env.STRIPE_SECRET_KEY) {
      return NextResponse.json(
        { error: "Missing STRIPE_SECRET_KEY" },
        { status: 500 }
      );
    }

    if (!process.env.NEXT_PUBLIC_SITE_URL) {
      return NextResponse.json(
        { error: "Missing NEXT_PUBLIC_SITE_URL" },
        { status: 500 }
      );
    }

    const supabase = await createServerSupabaseClient();

    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      return NextResponse.json(
        { error: "Not authenticated" },
        { status: 401 }
      );
    }

    const email = String(user.email || "").toLowerCase().trim();

    if (!email) {
      return NextResponse.json(
        { error: "Missing user email" },
        { status: 400 }
      );
    }

    // 🔍 Get profile (prefer id match)
    const { data: profile, error: profileError } = await adminSupabase
      .from("profiles")
      .select("stripe_customer_id")
      .eq("id", user.id)
      .maybeSingle();

    if (profileError) {
      console.error("PROFILE LOOKUP ERROR:", profileError);
      return NextResponse.json(
        { error: "Failed to load profile" },
        { status: 500 }
      );
    }

    let customerId = profile?.stripe_customer_id || null;

    // 🔁 Fallback: find Stripe customer by email
    if (!customerId) {
      const customers = await stripe.customers.list({
        email,
        limit: 1,
      });

      const customer = customers.data[0];

      if (customer && !customer.deleted) {
        customerId = customer.id;
      }
    }

    if (!customerId) {
      return NextResponse.json(
        { error: "No Stripe customer found for this account." },
        { status: 400 }
      );
    }

    // 💾 Save customer id if missing
    if (!profile?.stripe_customer_id) {
      const { error: updateError } = await adminSupabase
        .from("profiles")
        .update({ stripe_customer_id: customerId })
        .eq("id", user.id);

      if (updateError) {
        console.error("FAILED TO SAVE STRIPE CUSTOMER ID:", updateError);
      }
    }

    // 🚀 Create portal session
    const session = await stripe.billingPortal.sessions.create({
      customer: customerId,
      return_url: `${process.env.NEXT_PUBLIC_SITE_URL}/billing`,
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("STRIPE PORTAL ERROR:", error);
    return NextResponse.json(
      { error: error?.message || "Failed to create billing portal session" },
      { status: 500 }
    );
  }
}
