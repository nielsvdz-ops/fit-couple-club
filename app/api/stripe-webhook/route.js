import Stripe from "stripe";
import { Resend } from "resend";
import { createClient } from "@supabase/supabase-js";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
const resend = new Resend(process.env.RESEND_API_KEY);

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

  if (clean === "full access" || clean === "full-access") return "full_access";
  if (clean === "upgrade full access" || clean === "upgrade-full-access") return "upgrade_full_access";
  if (clean === "coaching call" || clean === "coaching-call") return "coaching_call";

  return clean;
}

function getPlanDetails(plan) {
  const plans = {
    nutrition: {
      name: "Nutrition",
      badge: "Nutrition Member",
      dashboardPath: "/dashboard",
      perks: [
        "Daily nutrition routines",
        "Recipe access",
        "Smart grocery planning",
        "Nutrition structure for solo or couple goals",
        "Access to the Coaching page",
      ],
    },
    full_access: {
      name: "Full Access",
      badge: "Full Access Member",
      dashboardPath: "/dashboard",
      perks: [
        "Everything from Nutrition",
        "Workout library",
        "Programs",
        "Plan Builder",
        "Progress tracking",
        "Couple Zone",
        "Access to the Coaching page",
      ],
    },
    upgrade_full_access: {
      name: "Full Access Upgrade",
      badge: "Full Access Member",
      dashboardPath: "/dashboard",
      perks: [
        "Workout library unlocked",
        "Programs unlocked",
        "Plan Builder unlocked",
        "Progress tracking unlocked",
        "Couple Zone unlocked",
      ],
    },
    coaching_call: {
      name: "Coaching Call",
      badge: "Coaching Call Purchased",
      dashboardPath: "/coaching",
      perks: [
        "1 paid coaching call",
        "Choose your preferred date and time",
        "Reschedule request option",
        "Training and nutrition review",
        "Personal guidance from Fit Couple Club",
      ],
    },
  };

  return plans[plan] || plans.full_access;
}

function escapeHtml(value) {
  return String(value || "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function buildWelcomeEmail({ plan, email }) {
  const details = getPlanDetails(plan);
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://fitcoupleclub.com";
  const dashboardUrl = `${siteUrl}${details.dashboardPath}`;

  const perksHtml = details.perks
    .map(
      (perk) => `
        <tr>
          <td style="padding:10px 0;border-bottom:1px solid rgba(255,255,255,0.08);">
            <span style="color:#facc15;font-weight:900;">✓</span>
            <span style="color:#f5f5f5;margin-left:8px;">${escapeHtml(perk)}</span>
          </td>
        </tr>
      `
    )
    .join("");

  return {
    subject: `Welcome to Fit Couple Club — ${details.name}`,
    html: `
      <div style="margin:0;padding:0;background:#050505;font-family:Arial,Helvetica,sans-serif;color:#ffffff;">
        <table width="100%" cellpadding="0" cellspacing="0" style="background:#050505;padding:32px 14px;">
          <tr>
            <td align="center">
              <table width="100%" cellpadding="0" cellspacing="0" style="max-width:680px;background:#0b0b0b;border:1px solid rgba(255,255,255,0.10);border-radius:26px;overflow:hidden;">
                
                <tr>
                  <td style="padding:34px 28px;background:linear-gradient(135deg,#050505,#111111 55%,rgba(250,204,21,0.14));">
                    <div style="display:inline-block;padding:8px 13px;border-radius:999px;background:rgba(250,204,21,0.14);border:1px solid rgba(250,204,21,0.35);color:#facc15;font-size:12px;font-weight:900;letter-spacing:0.12em;text-transform:uppercase;">
                      ${escapeHtml(details.badge)}
                    </div>

                    <h1 style="margin:22px 0 12px;font-size:38px;line-height:1.02;color:#ffffff;font-weight:950;">
                      Welcome to the Fit Couple Club team.
                    </h1>

                    <p style="margin:0;color:rgba(255,255,255,0.74);font-size:17px;line-height:1.7;">
                      We’re happy to have you with us. Your purchase is confirmed and your access is now being unlocked inside your member dashboard.
                    </p>
                  </td>
                </tr>

                <tr>
                  <td style="padding:28px;">
                    <div style="background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);border-radius:20px;padding:22px;">
                      <div style="color:rgba(255,255,255,0.48);font-size:12px;font-weight:900;letter-spacing:0.14em;text-transform:uppercase;margin-bottom:8px;">
                        You bought
                      </div>

                      <div style="font-size:30px;line-height:1.1;font-weight:950;color:#ffffff;">
                        ${escapeHtml(details.name)}
                      </div>

                      <div style="margin-top:10px;color:rgba(255,255,255,0.62);font-size:14px;">
                        Account: ${escapeHtml(email)}
                      </div>
                    </div>

                    <h2 style="margin:28px 0 12px;color:#ffffff;font-size:24px;font-weight:950;">
                      What you unlocked
                    </h2>

                    <table width="100%" cellpadding="0" cellspacing="0">
                      ${perksHtml}
                    </table>

                    <div style="text-align:center;margin:32px 0 10px;">
                      <a href="${dashboardUrl}" style="display:inline-block;background:#facc15;color:#000000;text-decoration:none;font-weight:950;font-size:16px;padding:16px 26px;border-radius:16px;">
                        Open Your Dashboard
                      </a>
                    </div>

                    <p style="margin:24px 0 0;color:rgba(255,255,255,0.68);font-size:15px;line-height:1.7;">
                      Start simple: open your dashboard, choose the section you bought access to, and follow the structure step by step. No guessing, no overthinking — just consistency.
                    </p>

                    <p style="margin:22px 0 0;color:#ffffff;font-size:15px;line-height:1.7;">
                      Welcome to the team,<br />
                      <strong>Niels & Rosanna</strong><br />
                      Fit Couple Club
                    </p>
                  </td>
                </tr>

                <tr>
                  <td style="padding:20px 28px;background:#070707;border-top:1px solid rgba(255,255,255,0.08);">
                    <p style="margin:0;color:rgba(255,255,255,0.42);font-size:12px;line-height:1.6;text-align:center;">
                      Need help? Reply to this email or contact us through Fit Couple Club.
                    </p>
                  </td>
                </tr>

              </table>
            </td>
          </tr>
        </table>
      </div>
    `,
  };
}

async function sendWelcomeEmail({ plan, email }) {
  if (!process.env.RESEND_API_KEY || !email) return;

  const emailData = buildWelcomeEmail({ plan, email });

  await resend.emails.send({
    from: "Fit Couple Club <noreply@fitcoupleclub.com>",
    to: [email],
    subject: emailData.subject,
    html: emailData.html,
  });
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

        try {
          await sendWelcomeEmail({ plan, email });
        } catch (emailError) {
          console.error("WELCOME EMAIL ERROR:", emailError);
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

      try {
        await sendWelcomeEmail({ plan, email });
      } catch (emailError) {
        console.error("WELCOME EMAIL ERROR:", emailError);
      }
    }

    return new Response("ok", { status: 200 });
  } catch (error) {
    console.error("WEBHOOK PROCESSING ERROR:", error);
    return new Response("Webhook handler failed", { status: 500 });
  }
}
