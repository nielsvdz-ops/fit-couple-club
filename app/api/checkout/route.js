import Stripe from "stripe";
import { NextResponse } from "next/server";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(req) {
  try {
    const { plan, email } = await req.json();

    let priceId = "";

    if (plan === "starter") priceId = process.env.STRIPE_PRICE_STARTER;
    if (plan === "premium") priceId = process.env.STRIPE_PRICE_PREMIUM;
    if (plan === "vip") priceId = process.env.STRIPE_PRICE_VIP;
    if (plan === "coaching") priceId = process.env.STRIPE_PRICE_COACHING;

    if (!priceId) {
      return NextResponse.json({ error: "Invalid plan" }, { status: 400 });
    }

    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      customer_email: email || undefined,
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
      },
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("STRIPE CHECKOUT ERROR:", error);
    return NextResponse.json({ error: "Stripe error" }, { status: 500 });
  }
}
