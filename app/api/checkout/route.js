import Stripe from "stripe";
import { NextResponse } from "next/server";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const PLAN_PRICE_MAP = {
  nutrition: process.env.STRIPE_PRICE_NUTRITION,
  full_access: process.env.STRIPE_PRICE_FULL_ACCESS,
  vip: process.env.STRIPE_PRICE_VIP,
  coaching: process.env.STRIPE_PRICE_COACHING,
};

export async function POST(req) {
  try {
    const { plan, email } = await req.json();

    if (!plan) {
      return NextResponse.json(
        { error: "Missing plan" },
        { status: 400 }
      );
    }

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

    const priceId = PLAN_PRICE_MAP[plan];

    if (!priceId) {
      return NextResponse.json(
        { error: `Invalid plan: ${plan}` },
        { status: 400 }
      );
    }

    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      customer_email: email || undefined,
      customer_creation: "always",
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
        email: email || "",
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
