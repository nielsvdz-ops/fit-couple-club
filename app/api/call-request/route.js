import { NextResponse } from "next/server";
import { Resend } from "resend";
import { getCurrentUserAndProfile } from "../../../lib/getProfile";

const resend = new Resend(process.env.RESEND_API_KEY);

async function sendCallRequestEmail({ user, profile, body, existing }) {
  if (!process.env.RESEND_API_KEY) return;

  const fullName = profile?.full_name || user?.email || "Member";
  const action = existing ? "Updated" : "New";

  await resend.emails.send({
    from: "Fit Couple Club <noreply@fitcoupleclub.com>",
    to: ["fitcoupleclub1@gmail.com"],
    subject: `${action} Coaching Call Request`,
    html: `
      <h2>${action} Coaching Call Request</h2>
      <p><strong>Name:</strong> ${fullName}</p>
      <p><strong>Email:</strong> ${user?.email || ""}</p>
      <p><strong>Preferred date:</strong> ${body.preferredDate || "Not set"}</p>
      <p><strong>Preferred time:</strong> ${body.preferredTime || "Not set"}</p>
      <p><strong>Notes:</strong></p>
      <p>${body.notes || "No notes"}</p>
    `,
  });
}

async function getActiveCoachingCall({ supabase, userId, email }) {
  let query = supabase
    .from("coaching_calls")
    .select("*")
    .in("status", [
      "paid_unscheduled",
      "pending",
      "scheduled",
      "reschedule_requested",
    ])
    .order("created_at", { ascending: false })
    .limit(1);

  if (userId) {
    query = query.eq("user_id", userId);
  } else {
    query = query.eq("email", email);
  }

  const { data, error } = await query.maybeSingle();

  if (error) {
    return { call: null, error };
  }

  return { call: data || null, error: null };
}

export async function GET() {
  const { user, profile, supabase } = await getCurrentUserAndProfile();

  if (!user) {
    return NextResponse.json(
      { error: "Not authenticated" },
      { status: 401 }
    );
  }

  const email = String(user.email || "").toLowerCase().trim();

  const { call, error } = await getActiveCoachingCall({
    supabase,
    userId: user.id,
    email,
  });

  if (error) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }

  return NextResponse.json({
    request: call,
    canEdit: Boolean(call) && call.status !== "completed",
    limitText: call
      ? "You have a paid coaching call. Choose your preferred date and time."
      : "Buy a coaching call first to unlock scheduling.",
  });
}

export async function POST(req) {
  const { user, profile, supabase } = await getCurrentUserAndProfile();

  if (!user) {
    return NextResponse.json(
      { error: "Not authenticated" },
      { status: 401 }
    );
  }

  const body = await req.json();
  const email = String(user.email || "").toLowerCase().trim();

  const { call, error: callError } = await getActiveCoachingCall({
    supabase,
    userId: user.id,
    email,
  });

  if (callError) {
    return NextResponse.json(
      { error: callError.message },
      { status: 500 }
    );
  }

  if (!call) {
    return NextResponse.json(
      { error: "No paid coaching call found. Please buy a coaching call first." },
      { status: 403 }
    );
  }

  if (call.status === "completed") {
    return NextResponse.json(
      { error: "This coaching call is completed and cannot be changed." },
      { status: 403 }
    );
  }

  const nextStatus =
    call.status === "scheduled"
      ? "reschedule_requested"
      : "pending";

  const payload = {
    preferred_date: body.preferredDate || "",
    preferred_time: body.preferredTime || "",
    notes: body.notes || "",
    status: nextStatus,
    updated_at: new Date().toISOString(),
  };

  const { data, error } = await supabase
    .from("coaching_calls")
    .update(payload)
    .eq("id", call.id)
    .select()
    .single();

  if (error) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }

  try {
    await sendCallRequestEmail({
      user,
      profile,
      body,
      existing: call,
    });
  } catch (emailError) {
    console.error("COACHING CALL EMAIL ERROR:", emailError);
  }

  return NextResponse.json({
    request: data,
  });
}
