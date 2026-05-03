import { NextResponse } from "next/server";
import { createClient } from "../../lib/supabase/server";
import { getCurrentUserAndProfile } from "../../lib/getProfile";

function getPeriodKey(membershipType) {
  const now = new Date();
  const year = now.getUTCFullYear();

  if (membershipType === "coaching") {
    const firstDay = new Date(Date.UTC(year, 0, 1));
    const days = Math.floor((now - firstDay) / 86400000);
    const week = Math.ceil((days + firstDay.getUTCDay() + 1) / 7);
    return `coaching-${year}-week-${week}`;
  }

  const month = String(now.getUTCMonth() + 1).padStart(2, "0");
  return `vip-${year}-${month}`;
}

export async function GET() {
  const { user, profile, supabase } = await getCurrentUserAndProfile();

  if (!user) {
    return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
  }

  const membership = String(profile?.membership_type || "").toLowerCase();

  if (membership !== "vip" && membership !== "coaching") {
    return NextResponse.json({ error: "No call access" }, { status: 403 });
  }

  const periodKey = getPeriodKey(membership);

  const { data, error } = await supabase
    .from("call_requests")
    .select("*")
    .eq("user_id", user.id)
    .eq("period_key", periodKey)
    .maybeSingle();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({
    request: data || null,
    periodKey,
    canEdit: !data || data.status !== "completed",
    limitText:
      membership === "coaching"
        ? "You can request 1 coaching call per week."
        : "You can request 1 VIP call per month.",
  });
}

export async function POST(req) {
  const { user, profile, supabase } = await getCurrentUserAndProfile();

  if (!user) {
    return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
  }

  const membership = String(profile?.membership_type || "").toLowerCase();

  if (membership !== "vip" && membership !== "coaching") {
    return NextResponse.json({ error: "No call access" }, { status: 403 });
  }

  const body = await req.json();
  const periodKey = getPeriodKey(membership);

  const { data: existing } = await supabase
    .from("call_requests")
    .select("*")
    .eq("user_id", user.id)
    .eq("period_key", periodKey)
    .maybeSingle();

  if (existing?.status === "completed") {
    return NextResponse.json(
      { error: "This call request is already completed and cannot be edited." },
      { status: 403 }
    );
  }

  const payload = {
    user_id: user.id,
    membership_type: membership,
    period_key: periodKey,
    preferred_date: body.preferredDate || "",
    preferred_time: body.preferredTime || "",
    topic: body.topic || "",
    notes: body.notes || "",
    status: existing?.status || "pending",
    updated_at: new Date().toISOString(),
  };

  const { data, error } = await supabase
    .from("call_requests")
    .upsert(payload, { onConflict: "user_id,period_key" })
    .select()
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ request: data });
}
