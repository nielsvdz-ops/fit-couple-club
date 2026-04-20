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

function escapeHtml(value = "") {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
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
      console.error("SUPABASE INSERT ERROR:", error);

      return NextResponse.json(
        { error: `Supabase insert failed: ${error.message}` },
        { status: 500 }
      );
    }

    if (!process.env.VIP_NOTIFICATION_EMAIL) {
      return NextResponse.json({
        ok: true,
        warning: "Request saved, but VIP_NOTIFICATION_EMAIL is missing",
        request: data,
      });
    }

    if (!resend) {
      return NextResponse.json({
        ok: true,
        warning: "Request saved, but RESEND_API_KEY is missing",
        request: data,
      });
    }

    const safeName = escapeHtml(fullName || "Unknown");
    const safeEmail = escapeHtml(email || "Unknown");
    const safeUserId = escapeHtml(userId);
    const safePreferredDate = escapeHtml(preferredDate || "Not set");
    const safeNotes = escapeHtml(notes || "No notes").replace(/\n/g, "<br />");

    const { data: emailData, error: emailError } = await resend.emails.send({
      from: "Fit Couple Club <onboarding@resend.dev>",
      to: process.env.VIP_NOTIFICATION_EMAIL,
      subject: "New VIP call request",
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2>New VIP call request</h2>
          <p><strong>Name:</strong> ${safeName}</p>
          <p><strong>Email:</strong> ${safeEmail}</p>
          <p><strong>User ID:</strong> ${safeUserId}</p>
          <p><strong>Preferred date:</strong> ${safePreferredDate}</p>
          <p><strong>Notes:</strong></p>
          <div style="padding: 12px; background: #f5f5f5; border-radius: 8px;">
            ${safeNotes}
          </div>
        </div>
      `,
    });

    if (emailError) {
      console.error("RESEND ERROR:", emailError);

      return NextResponse.json({
        ok: true,
        warning: `Saved to database, but email failed: ${emailError.message}`,
        request: data,
      });
    }

    return NextResponse.json({
      ok: true,
      request: data,
      emailId: emailData?.id || null,
    });
  } catch (error) {
    console.error("VIP REQUEST API ERROR:", error);

    return NextResponse.json(
      { error: error.message || "Unexpected error" },
      { status: 500 }
    );
  }
}
