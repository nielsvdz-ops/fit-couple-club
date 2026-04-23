import Stripe from "stripe";
import { createClient } from "@supabase/supabase-js";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

const PLAN_MEMBERSHIP_MAP = {
  nutrition: "nutrition",
  full_access: "full_access",
  vip: "vip",
  coaching: "coaching",
};

export async function POST(req) {
  if (!process.env.STRIPE_SECRET_KEY) {
    return new Response("Missing STRIPE_SECRET_KEY", { status: 500 });
  }

  if (!process.env.STRIPE_WEBHOOK_SECRET) {
    return new Response("Missing STRIPE_WEBHOOK_SECRET", { status: 500 });
  }

  if (!process.env.NEXT_PUBLIC_SUPABASE_URL) {
    return new Response("Missing NEXT_PUBLIC_SUPABASE_URL", { status: 500 });
  }

  if (!process.env.SUPABASE_SERVICE_ROLE_KEY) {
    return new Response("Missing SUPABASE_SERVICE_ROLE_KEY", { status: 500 });
  }

  const body = await req.text();
  const signature = req.headers.get("stripe-signature");

  if (!signature) {
    return new Response("Missing stripe-signature header", { status: 400 });
  }

  let event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (error) {
    console.error("WEBHOOK SIGNATURE ERROR:", error.message);
    return new Response(`Webhook Error: ${error.message}`, { status: 400 });
  }

  try {
    if (event.type === "checkout.session.completed") {
      const session = event.data.object;

      const customerEmail = String(session.customer_email || "")
        .toLowerCase()
        .trim();

      const plan = String(session.metadata?.plan || "")
        .toLowerCase()
        .trim();

      if (!customerEmail || !plan) {
        console.error("MISSING CUSTOMER EMAIL OR PLAN:", {
          customerEmail,
          plan,
        });
        return new Response("Missing customer email or plan", { status: 200 });
      }

      const membershipType = PLAN_MEMBERSHIP_MAP[plan];

      if (!membershipType) {
        console.error("INVALID PLAN FROM STRIPE:", plan);
        return new Response("Invalid membership type", { status: 200 });
      }

      const { error } = await supabase
        .from("profiles")
        .update({
          membership_type: membershipType,
          is_active: true,
        })
        .eq("email", customerEmail);

      if (error) {
        console.error("SUPABASE UPDATE ERROR:", error);
        return new Response("Database update failed", { status: 500 });
      }

      console.log(`Updated ${customerEmail} to ${membershipType}`);
    }

    return new Response("ok", { status: 200 });
  } catch (error) {
    console.error("WEBHOOK PROCESSING ERROR:", error);
    return new Response("Webhook handler failed", { status: 500 });
  }
}
