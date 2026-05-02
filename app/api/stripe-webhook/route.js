import Stripe from "stripe";
import { createClient } from "@supabase/supabase-js";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

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

const PRICE_MEMBERSHIP_MAP = {
  [process.env.STRIPE_PRICE_NUTRITION]: "nutrition",
  [process.env.STRIPE_PRICE_FULL_ACCESS]: "full_access",
  [process.env.STRIPE_PRICE_VIP]: "vip",
  [process.env.STRIPE_PRICE_COACHING]: "coaching",
};

async function updateProfileAccess({
  userId,
  customerId,
  email,
  membershipType,
  isActive,
}) {
  const normalizedEmail = String(email || "").toLowerCase().trim();

  const updateData = {
    membership_type: membershipType,
    is_active: isActive,
    ...(customerId ? { stripe_customer_id: customerId } : {}),
    ...(normalizedEmail ? { email: normalizedEmail } : {}),
  };

  if (userId) {
    const { error, count } = await supabase
      .from("profiles")
      .update(updateData)
      .eq("id", userId)
      .select("*", { count: "exact", head: true });

    if (!error && count > 0) return null;
    if (error) console.error("UPDATE BY USER ID ERROR:", error);
  }

  if (customerId) {
    const { error, count } = await supabase
      .from("profiles")
      .update(updateData)
      .eq("stripe_customer_id", customerId)
      .select("*", { count: "exact", head: true });

    if (!error && count > 0) return null;
    if (error) console.error("UPDATE BY CUSTOMER ID ERROR:", error);
  }

  if (normalizedEmail) {
    const { error, count } = await supabase
      .from("profiles")
      .update(updateData)
      .eq("email", normalizedEmail)
      .select("*", { count: "exact", head: true });

    if (!error && count > 0) return null;
    if (error) console.error("UPDATE BY EMAIL ERROR:", error);
  }

  if (userId) {
    const { error } = await supabase.from("profiles").upsert(
      {
        id: userId,
        email: normalizedEmail,
        membership_type: membershipType,
        is_active: isActive,
        ...(customerId ? { stripe_customer_id: customerId } : {}),
      },
      { onConflict: "id" }
    );

    if (!error) return null;
    console.error("UPSERT PROFILE ERROR:", error);
  }

  return new Error("No matching profile found to update.");
}

function getMembershipFromPlan(plan) {
  return PLAN_MEMBERSHIP_MAP[String(plan || "").toLowerCase().trim()] || null;
}

function getMembershipFromPriceId(priceId) {
  return PRICE_MEMBERSHIP_MAP[priceId] || null;
}

async function getMembershipFromSubscription(subscriptionId) {
  if (!subscriptionId) return null;

  const subscription = await stripe.subscriptions.retrieve(subscriptionId, {
    expand: ["items.data.price"],
  });

  const priceId = subscription?.items?.data?.[0]?.price?.id;
  return getMembershipFromPriceId(priceId);
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

      const customerId = String(session.customer || "").trim();
      const subscriptionId = String(session.subscription || "").trim();

      const email = String(
        session.customer_email ||
          session.customer_details?.email ||
          session.metadata?.email ||
          ""
      )
        .toLowerCase()
        .trim();

      const userId = String(
        session.metadata?.user_id || session.client_reference_id || ""
      ).trim();

      const plan = String(session.metadata?.plan || "").toLowerCase().trim();

      let membershipType = getMembershipFromPlan(plan);

      if (!membershipType && subscriptionId) {
        membershipType = await getMembershipFromSubscription(subscriptionId);
      }

      console.log("STRIPE SESSION COMPLETED:", {
        session: session.id,
        customerId,
        subscriptionId,
        userId,
        email,
        plan,
        membershipType,
      });

      if (!membershipType) {
        console.error("NO MEMBERSHIP TYPE FOUND:", session.id);
        return new Response("No membership type found", { status: 200 });
      }

      const updateError = await updateProfileAccess({
        userId,
        customerId,
        email,
        membershipType,
        isActive: true,
      });

      if (updateError) {
        console.error("SUPABASE UPDATE ERROR:", updateError.message);
        return new Response("Database update failed", { status: 500 });
      }
    }

    if (event.type === "customer.subscription.updated") {
      const subscription = event.data.object;

      const customerId = String(subscription.customer || "").trim();
      const userId = String(subscription.metadata?.user_id || "").trim();
      const email = String(subscription.metadata?.email || "")
        .toLowerCase()
        .trim();

      const plan = String(subscription.metadata?.plan || "")
        .toLowerCase()
        .trim();

      const priceId = subscription?.items?.data?.[0]?.price?.id;

      const membershipType =
        getMembershipFromPlan(plan) || getMembershipFromPriceId(priceId);

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
      }
    }

    if (event.type === "invoice.payment_failed") {
      const invoice = event.data.object;
      const customerId = String(invoice.customer || "").trim();

      if (customerId) {
        const { error } = await supabase
          .from("profiles")
          .update({ is_active: false })
          .eq("stripe_customer_id", customerId);

        if (error) {
          console.error("PAYMENT FAILED UPDATE ERROR:", error);
          return new Response("Payment failed update failed", { status: 500 });
        }
      }
    }

    if (event.type === "invoice.payment_succeeded") {
      const invoice = event.data.object;
      const customerId = String(invoice.customer || "").trim();

      if (customerId) {
        const { error } = await supabase
          .from("profiles")
          .update({ is_active: true })
          .eq("stripe_customer_id", customerId);

        if (error) {
          console.error("PAYMENT SUCCEEDED UPDATE ERROR:", error);
          return new Response("Payment succeeded update failed", {
            status: 500,
          });
        }
      }
    }

    return new Response("ok", { status: 200 });
  } catch (error) {
    console.error("WEBHOOK PROCESSING ERROR:", error);
    return new Response("Webhook handler failed", { status: 500 });
  }
}
