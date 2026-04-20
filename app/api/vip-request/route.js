import { NextResponse } from "next/server";
import { Resend } from "resend";
import { createClient } from "@supabase/supabase-js";

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

function getAdminClient() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.SUPABASE_SERVICE_ROLE_KEY
  );
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { userId, email, fullName, preferredDate, notes } = body || {};

    if (!userId) {
      return NextResponse.json(
        { error: "Missing userId" },
        { status: 400 }
      );
    }

    if (!process.env.NEXT_PUBLIC_SUPABASE_URL) {
      return NextResponse.json(
        { error: "Missing NEXT_PUBLIC_SUPABASE_URL" },
        { status: 500 }
      );
    }

    if (!process.env.SUPABASE_SERVICE_ROLE_KEY) {
      return NextResponse.json(
        { error: "Missing SUPABASE_SERVICE_ROLE_KEY" },
        { status: 500 }
      );
    }

    const supabase = getAdminClient();

    const { data, error } = await supabase
      .from("vip_requests")
      .insert({
        user_id: userId,
        preferred_date: preferredDate || null,
        notes: notes || null,
        status: "pending",
      })
      .select("*")
      .single();

    if (error) {
      return NextResponse.json(
        { error: `Supabase insert failed: ${error.message}` },
        { status: 500 }
      );
    }

    if (process.env.VIP_NOTIFICATION_EMAIL && resend) {
      const emailResult = await resend.emails.send({
        from: "Fit Couple Club <onboarding@resend.dev>",
        to: process.env.VIP_NOTIFICATION_EMAIL,
        subject: "New VIP call request",
        html: `
          <div style="font-family: Arial, sans-serif; line-height: 1.6;">
            <h2>New VIP call request</h2>
            <p><strong>Name:</strong> ${fullName || "Unknown"}</p>
            <p><strong>Email:</strong> ${email || "Unknown"}</p>
            <p><strong>User ID:</strong> ${userId}</p>
            <p><strong>Preferred date:</strong> ${preferredDate || "Not set"}</p>
            <p><strong>Notes:</strong></p>
            <div style="padding: 12px; background: #f5f5f5; border-radius: 8px;">
              ${notes ? notes.replace(/\n/g, "<br/>") : "No notes"}
            </div>
          </div>
        `,
      });

      if (emailResult?.error) {
        return NextResponse.json(
          {
            ok: true,
            warning: `Saved to database, but email failed: ${emailResult.error.message}`,
            request: data,
          },
          { status: 200 }
        );
      }
    }

    return NextResponse.json({ ok: true, request: data });
  } catch (error) {
    return NextResponse.json(
      { error: error.message || "Unexpected error" },
      { status: 500 }
    );
  }
}
