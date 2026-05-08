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
  upgrade_full_access: "full_access",
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

async function updateProfileAccess({
  userId,
  customerId,
  email,
  membershipType,
}) {
  const normalizedEmail = String(email || "").toLowerCase().trim();

  const updateData = {
    membership_type: membershipType,
    is_active: true,
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
        is_active: true,
        ...(customerId ? { stripe_customer_id: customerId } : {}),
      },
      { onConflict: "id" }
    );

    if (!error) return null;
    console.error("UPSERT PROFILE ERROR:", error);
  }

  return new Error("No matching profile found to update.");
}

async function createCoachingCallCredit({
  userId,
  customerId,
  email,
  stripeSessionId,
}) {
  const normalizedEmail = String(email || "").toLowerCase().trim();

  const { error } = await supabase.from("coaching_calls").insert({
    user_id: userId || null,
    email: normalizedEmail || null,
    stripe_customer_id: customerId || null,
    stripe_session_id: stripeSessionId,
    status: "paid_unscheduled",
  });

  if (error) {
    console.error("CREATE COACHING CALL CREDIT ERROR:", error);
    return error;
  }

  return null;
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

      const plan = normalizePlan(session.metadata?.plan);

      console.log("STRIPE ONE-TIME SESSION COMPLETED:", {
        session: session.id,
        customerId,
        userId,
        email,
        plan,
        paymentStatus: session.payment_status,
      });

      if (session.payment_status !== "paid") {
        console.log("SESSION NOT PAID YET:", session.id);
        return new Response("Session not paid", { status: 200 });
      }

      if (plan === "coaching_call") {
        const coachingError = await createCoachingCallCredit({
          userId,
          customerId,
          email,
          stripeSessionId: session.id,
        });

        if (coachingError) {
          return new Response("Coaching call credit failed", { status: 500 });
        }

        return new Response("ok", { status: 200 });
      }

      const membershipType = PLAN_MEMBERSHIP_MAP[plan];

      if (!membershipType) {
        console.error("NO MEMBERSHIP TYPE FOUND:", {
          session: session.id,
          plan,
        });

        return new Response("No membership type found", { status: 200 });
      }

      const updateError = await updateProfileAccess({
        userId,
        customerId,
        email,
        membershipType,
      });

      if (updateError) {
        console.error("SUPABASE UPDATE ERROR:", updateError.message);
        return new Response("Database update failed", { status: 500 });
      }
    }

    return new Response("ok", { status: 200 });
  } catch (error) {
    console.error("WEBHOOK PROCESSING ERROR:", error);
    return new Response("Webhook handler failed", { status: 500 });
  }
}