import Stripe from "stripe";
import { NextResponse } from "next/server";
import { createClient } from "../../../lib/supabase/server";

export const dynamic = "force-dynamic";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const PLAN_PRICE_MAP = {
  nutrition: process.env.STRIPE_PRICE_NUTRITION,
  full_access: process.env.STRIPE_PRICE_FULL_ACCESS,
  upgrade_full_access: process.env.STRIPE_PRICE_UPGRADE_FULL_ACCESS,
  coaching_call: process.env.STRIPE_PRICE_COACHING_CALL,
};

function normalizePlan(plan) {
  const clean = String(plan || "").toLowerCase().trim();

  if (clean === "full access" || clean === "full-access") {
    return "full_access";
  }

  if (clean === "upgrade full access" || clean === "upgrade-full-access") {
    return "upgrade_full_access";
  }

  if (clean === "coaching call" || clean === "coaching-call") {
    return "coaching_call";
  }

  return clean;
}

async function getOrCreateCustomer(user, email) {
  const supabase = await createClient();

  const { data: profile, error } = await supabase
    .from("profiles")
    .select("stripe_customer_id")
    .eq("id", user.id)
    .maybeSingle();

  if (error) {
    console.error("PROFILE CUSTOMER LOOKUP ERROR:", error);
  }

  if (profile?.stripe_customer_id) {
    return profile.stripe_customer_id;
  }

  const customer = await stripe.customers.create({
    email,
    metadata: {
      user_id: user.id,
      email,
    },
  });

  const { error: updateError } = await supabase.from("profiles").upsert(
    {
      id: user.id,
      email,
      stripe_customer_id: customer.id,
    },
    { onConflict: "id" }
  );

  if (updateError) {
    console.error("SAVE STRIPE CUSTOMER ERROR:", updateError);
  }

  return customer.id;
}

export async function POST(req) {
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

    const supabase = await createClient();

    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser();

    if (userError) {
      console.error("SUPABASE USER ERROR:", userError);
    }

    if (!user) {
      return NextResponse.json(
        { error: "Not authenticated" },
        { status: 401 }
      );
    }

    const body = await req.json();
    const normalizedPlan = normalizePlan(body?.plan);

    if (!normalizedPlan) {
      return NextResponse.json(
        { error: "Missing plan" },
        { status: 400 }
      );
    }

    const priceId = PLAN_PRICE_MAP[normalizedPlan];

    if (!priceId) {
      return NextResponse.json(
        { error: `Invalid plan or missing Stripe price env: ${normalizedPlan}` },
        { status: 400 }
      );
    }

    const userEmail = String(user.email || "").toLowerCase().trim();

    if (!userEmail) {
      return NextResponse.json(
        { error: "Missing user email" },
        { status: 400 }
      );
    }

    if (normalizedPlan === "upgrade_full_access") {
      const { data: profile } = await supabase
        .from("profiles")
        .select("membership_type,is_active")
        .eq("id", user.id)
        .maybeSingle();

      if (
        !profile?.is_active ||
        String(profile?.membership_type || "").toLowerCase() !== "nutrition"
      ) {
        return NextResponse.json(
          { error: "Upgrade is only available for active Nutrition members." },
          { status: 403 }
        );
      }
    }

    const customerId = await getOrCreateCustomer(user, userEmail);

    const metadata = {
      plan: normalizedPlan,
      user_id: user.id,
      email: userEmail,
    };

    console.log("CREATING ONE-TIME CHECKOUT SESSION:", {
      user_id: user.id,
      email: userEmail,
      plan: normalizedPlan,
      customer: customerId,
      priceId,
    });

    const successPath =
      normalizedPlan === "coaching_call"
        ? "/coaching?success=1"
        : "/billing?success=1";

    const cancelPath =
      normalizedPlan === "coaching_call"
        ? "/coaching?canceled=1"
        : "/billing?canceled=1";

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      customer: customerId,
      client_reference_id: user.id,

      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],

      success_url: `${process.env.NEXT_PUBLIC_SITE_URL}${successPath}&plan=${normalizedPlan}`,
      cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}${cancelPath}`,

      metadata,
      payment_intent_data: {
        metadata,
      },
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("STRIPE CHECKOUT ERROR:", error);

    return NextResponse.json(
      { error: error?.message || "Stripe error" },
      { status: 500 }
    );
  }
}