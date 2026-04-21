import Stripe from "stripe";
import { createClient } from "@supabase/supabase-js";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

export async function POST(req) {
  const body = await req.text();
  const signature = req.headers.get("stripe-signature");

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

      const customerEmail = session.customer_email;
      const plan = session.metadata?.plan;

      if (!customerEmail || !plan) {
        return new Response("Missing customer email or plan", { status: 200 });
      }

      const membershipType =
        plan === "starter"
          ? "starter"
          : plan === "premium"
          ? "premium"
          : plan === "vip"
          ? "vip"
          : plan === "coaching"
          ? "coaching"
          : null;

      if (!membershipType) {
        return new Response("Invalid membership type", { status: 200 });
      }

      const { error } = await supabase
        .from("profiles")
        .update({ membership_type: membershipType })
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
