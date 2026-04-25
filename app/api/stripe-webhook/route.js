import Stripe from "stripe";
import { createClient } from "@supabase/supabase-js";

export const dynamic = "force-dynamic";

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

async function updateProfileAccess({
  userId,
  customerId,
  email,
  membershipType,
  isActive,
}) {
  const normalizedEmail = String(email || "").toLowerCase().trim();

  if (userId) {
    const { error, count } = await supabase
      .from("profiles")
      .update({
        membership_type: membershipType,
        is_active: isActive,
        ...(customerId ? { stripe_customer_id: customerId } : {}),
      })
      .eq("id", userId)
      .select("*", { count: "exact", head: true });

    if (!error && count > 0) return null;
    if (error) console.error("UPDATE BY USER ID ERROR:", error);
  }

  if (customerId) {
    const { error, count } = await supabase
      .from("profiles")
      .update({
        membership_type: membershipType,
        is_active: isActive,
        stripe_customer_id: customerId,
      })
      .eq("stripe_customer_id", customerId)
      .select("*", { count: "exact", head: true });

    if (!error && count > 0) return null;
    if (error) console.error("UPDATE BY CUSTOMER ID ERROR:", error);
  }

  if (normalizedEmail) {
    const { error, count } = await supabase
      .from("profiles")
      .update({
        membership_type: membershipType,
        is_active: isActive,
        ...(customerId ? { stripe_customer_id: customerId } : {}),
      })
      .eq("email", normalizedEmail)
      .select("*", { count: "exact", head: true });

    if (!error && count > 0) return null;
    if (error) console.error("UPDATE BY EMAIL ERROR:", error);
  }

  return new Error("No matching profile found to update.");
}

export async function POST(req) {
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

      const customerEmail = String(
        session.customer_email ||
          session.customer_details?.email ||
          session.metadata?.email ||
          ""
      )
        .toLowerCase()
        .trim();

      const plan = String(session.metadata?.plan || "")
        .toLowerCase()
        .trim();

      const userId = String(
        session.metadata?.user_id || session.client_reference_id || ""
      ).trim();

      const customerId = String(session.customer || "").trim();

      console.log("STRIPE SESSION COMPLETED:", {
        id: session.id,
        customer: customerId,
        customer_email: session.customer_email,
        customer_details_email: session.customer_details?.email,
        client_reference_id: session.client_reference_id,
        metadata: session.metadata,
      });

      if (!plan) {
        console.error("MISSING PLAN IN STRIPE SESSION:", session.id);
        return new Response("Missing plan", { status: 200 });
      }

      const membershipType = PLAN_MEMBERSHIP_MAP[plan];

      if (!membershipType) {
        console.error("INVALID PLAN FROM STRIPE:", plan);
        return new Response("Invalid membership type", { status: 200 });
      }

      const updateError = await updateProfileAccess({
        userId,
        customerId,
        email: customerEmail,
        membershipType,
        isActive: true,
      });

      if (updateError) {
        console.error("SUPABASE UPDATE ERROR:", updateError.message);
        return new Response("Database update failed", { status: 500 });
      }

      console.log(
        `Updated profile to ${membershipType} | userId=${
          userId || "none"
        } | email=${customerEmail || "none"} | customer=${
          customerId || "none"
        }`
      );
    }

    if (event.type === "customer.subscription.updated") {
      const subscription = event.data.object;
      const customerId = String(subscription.customer || "").trim();

      const plan = String(subscription.metadata?.plan || "")
        .toLowerCase()
        .trim();

      const userId = String(subscription.metadata?.user_id || "").trim();
      const email = String(subscription.metadata?.email || "")
        .toLowerCase()
        .trim();

      const membershipType = PLAN_MEMBERSHIP_MAP[plan];

      if (customerId && membershipType) {
        const updateError = await updateProfileAccess({
          userId,
          customerId,
          email,
          membershipType,
          isActive: subscription.status === "active",
        });

        if (updateError) {
          console.error("SUBSCRIPTION UPDATE ERROR:", updateError.message);
          return new Response("Subscription update failed", { status: 500 });
        }
      }
    }

    if (event.type === "customer.subscription.deleted") {
      const subscription = event.data.object;
      const customerId = String(subscription.customer || "").trim();

      if (customerId) {
        const { error } = await supabase
          .from("profiles")
          .update({
            membership_type: "free",
            is_active: false,
          })
          .eq("stripe_customer_id", customerId);

        if (error) {
          console.error("SUBSCRIPTION DELETE UPDATE ERROR:", error);
          return new Response("Subscription delete update failed", {
            status: 500,
          });
        }

        console.log(`Deactivated profile for customer=${customerId}`);
      }
    }

    if (event.type === "invoice.payment_failed") {
      const invoice = event.data.object;
      const customerId = String(invoice.customer || "").trim();

      if (customerId) {
        const { error } = await supabase
          .from("profiles")
          .update({
            is_active: false,
          })
          .eq("stripe_customer_id", customerId);

        if (error) {
          console.error("PAYMENT FAILED UPDATE ERROR:", error);
          return new Response("Payment failed update failed", { status: 500 });
        }

        console.log(`Marked inactive for failed payment customer=${customerId}`);
      }
    }

    if (event.type === "invoice.payment_succeeded") {
      const invoice = event.data.object;
      const customerId = String(invoice.customer || "").trim();

      if (customerId) {
        const { error } = await supabase
          .from("profiles")
          .update({
            is_active: true,
          })
          .eq("stripe_customer_id", customerId);

        if (error) {
          console.error("PAYMENT SUCCEEDED UPDATE ERROR:", error);
          return new Response("Payment succeeded update failed", {
            status: 500,
          });
        }

        console.log(`Marked active for customer=${customerId}`);
      }
    }

    return new Response("ok", { status: 200 });
  } catch (error) {
    console.error("WEBHOOK PROCESSING ERROR:", error);
    return new Response("Webhook handler failed", { status: 500 });
  }
}
