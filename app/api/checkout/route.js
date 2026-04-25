import Stripe from "stripe";
import { NextResponse } from "next/server";
import { createClient } from "../../../lib/supabase/server";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const PLAN_PRICE_MAP = {
  nutrition: process.env.STRIPE_PRICE_NUTRITION,
  full_access: process.env.STRIPE_PRICE_FULL_ACCESS,
  vip: process.env.STRIPE_PRICE_VIP,
  coaching: process.env.STRIPE_PRICE_COACHING,
};

async function getOrCreateCustomer(user, email) {
  const supabase = await createClient();

  const { data: profile } = await supabase
    .from("profiles")
    .select("stripe_customer_id")
    .eq("id", user.id)
    .single();

  if (profile?.stripe_customer_id) {
    return profile.stripe_customer_id;
  }

  const customer = await stripe.customers.create({
    email,
    metadata: {
      user_id: user.id,
    },
  });

  await supabase
    .from("profiles")
    .update({
      stripe_customer_id: customer.id,
    })
    .eq("id", user.id);

  return customer.id;
}

export async function POST(req) {
  try {
    const supabase = await createClient();

    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      return NextResponse.json(
        { error: "Not authenticated" },
        { status: 401 }
      );
    }

    const { plan } = await req.json();

    if (!plan) {
      return NextResponse.json(
        { error: "Missing plan" },
        { status: 400 }
      );
    }

    const priceId = PLAN_PRICE_MAP[plan];

    if (!priceId) {
      return NextResponse.json(
        { error: `Invalid plan: ${plan}` },
        { status: 400 }
      );
    }

    const userEmail = String(user.email || "").toLowerCase().trim();

    const customerId = await getOrCreateCustomer(user, userEmail);

    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      customer: customerId, // ✅ FIXED
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/billing?success=1`,
      cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/billing?canceled=1`,
      metadata: {
        plan,
        user_id: user.id,
        email: userEmail,
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
