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
      return NextResponse.json({ error: "Missing STRIPE_SECRET_KEY" }, { status: 500 });
    }

    if (!process.env.NEXT_PUBLIC_SITE_URL) {
      return NextResponse.json({ error: "Missing NEXT_PUBLIC_SITE_URL" }, { status: 500 });
    }

    const supabase = await createServerSupabaseClient();

    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
    }

    const normalizedEmail = String(user.email || "").toLowerCase().trim();

    if (!normalizedEmail) {
      return NextResponse.json({ error: "Missing user email" }, { status: 400 });
    }

    const { data: profile, error: profileError } = await adminSupabase
      .from("profiles")
      .select("stripe_customer_id, email")
      .or(`id.eq.${user.id},email.eq.${normalizedEmail}`)
      .limit(1)
      .maybeSingle();

    if (profileError) {
      console.error("PROFILE LOOKUP ERROR:", profileError);
      return NextResponse.json({ error: "Failed to load profile" }, { status: 500 });
    }

    let customerId = profile?.stripe_customer_id || null;

    if (!customerId) {
      const customers = await stripe.customers.list({
        email: normalizedEmail,
        limit: 1,
      });

      customerId = customers.data[0]?.id || null;
    }

    if (!customerId) {
      return NextResponse.json(
        { error: "No Stripe customer found for this account yet." },
        { status: 400 }
      );
    }

    if (!profile?.stripe_customer_id) {
      const { error: updateCustomerError } = await adminSupabase
        .from("profiles")
        .update({ stripe_customer_id: customerId })
        .eq("id", user.id);

      if (updateCustomerError) {
        console.error("FAILED TO SAVE STRIPE CUSTOMER ID:", updateCustomerError);
      }
    }

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
