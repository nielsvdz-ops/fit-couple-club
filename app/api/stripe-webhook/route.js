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

    if (!error)