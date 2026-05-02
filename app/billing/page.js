export const dynamic = "force-dynamic";

import ManageSubscriptionButton from "../../components/ManageSubscriptionButton";
import { redirect } from "next/navigation";
import DashboardLayout from "../../components/DashboardLayout";
import CheckoutButton from "../../components/CheckoutButton";
import { getCurrentUserAndProfile } from "../../lib/getProfile";

export default async function BillingPage({ searchParams }) {
  const { user, profile } = await getCurrentUserAndProfile();

  if (!user) redirect("/login");

  const userEmail = user?.email || "";
  const success = searchParams?.success === "1";

  const membership = String(profile?.membership_type || "free");

  const missingFeatures = {
    nutrition: [
      "Workouts & programs",
      "Couple Zone system",
      "Progress tracking",
      "VIP coaching system",
    ],
    full_access: [
      "Monthly coaching call",
      "Weakness detection system",
      "Priority support",
    ],
  };

  const vipTaken = 14;
  const vipMax = 90;
  const vipLeft = vipMax - vipTaken;
  const vipPercentage = (vipTaken / vipMax) * 100;
  const vipUrgency = vipLeft < 20 ? "⚠️ Almost full" : "Limited spots";

  const coachingTaken = 2;
  const coachingMax = 12;
  const coachingLeft = coachingMax - coachingTaken;
  const coachingPercentage = (coachingTaken / coachingMax) * 100;

  return (
    <DashboardLayout
      title="Billing"
      subtitle="Choose your system level — from nutrition to full transformation and coaching."
      membershipType={profile?.membership_type}
    >
      <div style={pageWrap}>

        {success && (
          <div style={successBox}>
            ✅ Payment successful — your membership is now active
          </div>
        )}

        <section style={statusCard}>
          <div>
            <div style={eyebrow}>Current Membership</div>
            <h2 style={title}>
              {profile?.is_active
                ? formatMembership(profile?.membership_type)
                : "Free"}
            </h2>
            <p style={text}>
              Status: {profile?.is_active ? "Active" : "No active plan"}
            </p>
          </div>

          {profile?.stripe_customer_id && (
            <ManageSubscriptionButton label="Manage Subscription" />
          )}
        </section>

        {membership !== "coaching" && (
          <section style={lockCard}>
            <div style={eyebrow}>You are currently missing</div>

            <ul style={list}>
              {(missingFeatures[membership] || []).map((f) => (
                <li key={f}>🔒 {f}</li>
              ))}
            </ul>

            <div style={upgradeText}>
              Upgrade to unlock full system
            </div>
          </section>
        )}

        <section style={heroUpsellCard}>
          <div style={eyebrow}>Why upgrade?</div>
          <h2 style={heroTitle}>Stop guessing. Follow a system.</h2>
          <p style={text}>
            The full system combines nutrition, groceries, workouts, tracking,
            and Couple Zone accountability so you stop restarting every week.
          </p>
        </section>

        <section style={grid}>

          {/* NUTRITION */}
          <div style={card}>
            {membership === "nutrition" && (
              <div style={currentBadge}>Your Plan</div>
            )}

            <div>
              <div style={cardTitle}>Nutrition — €19.99</div>
              <div style={planTag}>Food structure</div>

              <div style={text}>
                ✔ 150 daily routines
                <br />✔ Weekly recipes
                <br />✔ Grocery generator
                <br />✔ Calories & macros
              </div>
            </div>

            {membership === "nutrition" ? (
              <button style={disabledBtn}>Already Active</button>
            ) : (
              <CheckoutButton
                plan="nutrition"
                label="Start Nutrition"
                email={userEmail}
              />
            )}
          </div>

          {/* FULL ACCESS */}
          <div style={highlightCard}>
            {membership === "full_access" && (
              <div style={currentBadge}>Your Plan</div>
            )}

            <div style={bestValue}>🔥 Best Value</div>

            <div>
              <div style={cardTitle}>Full Access — €34.99</div>
              <div style={planTag}>Complete system</div>

              <div style={text}>
                ✔ Everything in Nutrition
                <br />✔ Workouts & programs
                <br />✔ Plan builder
                <br />✔ Couple Zone
              </div>
            </div>

            {membership === "full_access" ? (
              <button style={disabledBtn}>Already Active</button>
            ) : (
              <CheckoutButton
                plan="full_access"
                label={
                  membership === "nutrition"
                    ? "Upgrade to Full Access"
                    : "Unlock Full System"
                }
                email={userEmail}
              />
            )}
          </div>

          {/* VIP */}
          <div style={vipCard}>
            {membership === "vip" && (
              <div style={currentBadge}>Your Plan</div>
            )}

            <div>
              <div style={cardTitle}>VIP — €90</div>
              <div style={planTag}>Guided accountability</div>

              <div style={text}>
                ✔ Everything in Full Access
                <br />✔ Monthly coaching call
                <br />✔ Weakness detection
                <br />✔ Priority support
              </div>

              <div style={scarcityBox}>
                <div style={vipScarcityText}>
                  {vipTaken}/{vipMax} spots taken — {vipLeft} left
                </div>
                <div>{vipUrgency}</div>

                <div style={progressBar}>
                  <div
                    style={{ ...progressFillBlue, width: `${vipPercentage}%` }}
                  />
                </div>
              </div>
            </div>

            {membership === "vip" ? (
              <button style={disabledBtn}>Already Active</button>
            ) : (
              <CheckoutButton
                plan="vip"
                label="Go VIP"
                email={userEmail}
              />
            )}
          </div>

          {/* COACHING */}
          <div style={coachingCard}>
            {membership === "coaching" && (
              <div style={currentBadge}>Your Plan</div>
            )}

            <div>
              <div style={cardTitle}>Coaching — €340</div>
              <div style={planTag}>Maximum results</div>

              <div style={text}>
                ✔ Everything in VIP
                <br />✔ Weekly 1-on-1 calls
                <br />✔ Fully custom plan
              </div>

              <div style={scarcityBox}>
                <div style={scarcityText}>
                  {coachingTaken}/{coachingMax} taken — {coachingLeft} left
                </div>

                <div style={progressBar}>
                  <div
                    style={{
                      ...progressFillYellow,
                      width: `${coachingPercentage}%`,
                    }}
                  />
                </div>
              </div>
            </div>

            {membership === "coaching" ? (
              <button style={disabledBtn}>Already Active</button>
            ) : (
              <CheckoutButton
                plan="coaching"
                label="Start Coaching"
                email={userEmail}
              />
            )}
          </div>

        </section>

        <div style={trust}>
          ✔ Secure Stripe payments · Cancel anytime · Instant access
        </div>

      </div>
    </DashboardLayout>
  );
}

function formatMembership(type) {
  const m = String(type || "").toLowerCase().trim();
  if (m === "nutrition") return "Nutrition";
  if (m === "full_access") return "Full Access";
  if (m === "vip") return "VIP";
  if (m === "coaching") return "Coaching";
  return "Free";
}

const successBox = {
  background: "#16a34a",
  padding: "14px",
  borderRadius: "10px",
  fontWeight: "700",
};

const lockCard = {
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: "20px",
  padding: "20px",
};

const upgradeText = {
  marginTop: "10px",
  fontWeight: "800",
  color: "#facc15",
};

const disabledBtn = {
  padding: "12px",
  borderRadius: "10px",
  background: "#444",
  color: "#aaa",
};

const currentBadge = {
  position: "absolute",
  top: "-10px",
  left: "10px",
  background: "#16a34a",
  padding: "5px 8px",
  borderRadius: "6px",
  fontSize: "11px",
};

const trust = {
  marginTop: "20px",
  textAlign: "center",
  color: "rgba(255,255,255,0.6)",
};
