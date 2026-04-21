export const dynamic = "force-dynamic";

import { redirect } from "next/navigation";
import DashboardLayout from "../../components/DashboardLayout";
import CheckoutButton from "../../components/CheckoutButton";
import { getCurrentUserAndProfile } from "../../lib/getProfile";
import { canAccessStarterPages } from "../../lib/access";

export default async function BillingPage() {
  const { user, profile } = await getCurrentUserAndProfile();

  if (!user) redirect("/login");
  if (!canAccessStarterPages(profile)) redirect("/pricing");

  const userEmail = user?.email || "";

  // VIP scarcity
  const vipTaken = 14;
  const vipMax = 99;
  const vipLeft = vipMax - vipTaken;
  const vipPercentage = (vipTaken / vipMax) * 100;

  // Coaching scarcity
  const coachingTaken = 2;
  const coachingMax = 15;
  const coachingLeft = coachingMax - coachingTaken;
  const coachingPercentage = (coachingTaken / coachingMax) * 100;

  return (
    <DashboardLayout
      title="Billing"
      subtitle="Manage your plan and upgrade your results."
      membershipType={profile?.membership_type}
    >
      <div style={{ display: "grid", gap: "22px", maxWidth: "1000px" }}>
        <section style={statusCard}>
          <div>
            <div style={eyebrow}>Current Membership</div>
            <h2 style={title}>{profile?.membership_type || "Starter"}</h2>
            <p style={text}>Status: Active</p>
          </div>
        </section>

        <section style={grid}>
          <div style={card}>
            <div style={cardTitle}>Starter — €19.99</div>
            <div style={text}>
              ✔ Dashboard
              <br />
              ✔ Plan Builder
              <br />
              ✔ Workouts
              <br />
              ✔ Nutrition & Recipes
              <br />
              <br />
              Perfect to get started with structure.
            </div>

            <CheckoutButton
              plan="starter"
              label="Choose Starter"
              email={userEmail}
              variant="green"
            />
          </div>

          <div style={card}>
            <div style={cardTitle}>Premium — €39.99</div>
            <div style={text}>
              ✔ Everything in Starter
              <br />
              ✔ Programs & Rotations
              <br />
              ✔ Couple Zone
              <br />
              ✔ Progress Tracking
              <br />
              ✔ Saved Plans
              <br />
              <br />
              Built for serious transformation.
            </div>

            <CheckoutButton
              plan="premium"
              label="Upgrade to Premium"
              email={userEmail}
              variant="green"
            />
          </div>

          <div style={vipCard}>
            <div style={cardTitle}>VIP — €99</div>
            <div style={text}>
              ✔ Everything in Premium
              <br />
              ✔ 1 Monthly Video Call
              <br />
              ✔ Priority Support
              <br />
              ✔ Custom Adjustments
              <br />
              <br />
              Coaching with guidance.
            </div>

            <div style={scarcityBox}>
              <div style={vipScarcityText}>
                {vipTaken}/{vipMax} members — {vipLeft} spots left
              </div>

              <div style={progressBar}>
                <div
                  style={{
                    ...progressFillBlue,
                    width: `${vipPercentage}%`,
                  }}
                />
              </div>
            </div>

            <CheckoutButton
              plan="vip"
              label="Go VIP"
              email={userEmail}
              variant="blue"
            />
          </div>

          <div style={coachingCard}>
            <div style={cardTitle}>Coaching — €349</div>

            <div style={text}>
              ✔ Everything in VIP
              <br />
              ✔ Weekly 1-on-1 Calls
              <br />
              ✔ Fully Custom Plan
              <br />
              ✔ Direct Support Access
              <br />
              ✔ Coaching by Niels & Rosanna
              <br />
              <br />
              Highest level transformation with direct guidance.
            </div>

            <div style={scarcityBox}>
              <div style={scarcityText}>
                {coachingTaken}/{coachingMax} spots taken — {coachingLeft} left
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

            <CheckoutButton
              plan="coaching"
              label="Start Coaching"
              email={userEmail}
              variant="yellow"
            />
          </div>
        </section>
      </div>
    </DashboardLayout>
  );
}

const statusCard = {
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: "22px",
  padding: "24px",
};

const eyebrow = {
  fontSize: "12px",
  textTransform: "uppercase",
  letterSpacing: "0.16em",
  color: "rgba(255,255,255,0.45)",
  marginBottom: "8px",
};

const title = {
  margin: 0,
  fontSize: "30px",
  fontWeight: "800",
};

const text = {
  color: "rgba(255,255,255,0.68)",
  lineHeight: 1.8,
};

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
  gap: "18px",
};

const card = {
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: "20px",
  padding: "20px",
};

const vipCard = {
  background: "rgba(96,165,250,0.08)",
  border: "1px solid rgba(96,165,250,0.25)",
  borderRadius: "20px",
  padding: "20px",
};

const coachingCard = {
  background:
    "linear-gradient(135deg, rgba(255,255,255,0.10), rgba(255,255,255,0.04))",
  border: "1px solid rgba(255,255,255,0.2)",
  borderRadius: "20px",
  padding: "20px",
};

const cardTitle = {
  fontSize: "24px",
  fontWeight: "800",
  marginBottom: "10px",
};

const scarcityBox = {
  marginTop: "16px",
};

const scarcityText = {
  fontSize: "13px",
  marginBottom: "6px",
  color: "#facc15",
};

const vipScarcityText = {
  fontSize: "13px",
  marginBottom: "6px",
  color: "#60a5fa",
};

const progressBar = {
  height: "6px",
  background: "rgba(255,255,255,0.1)",
  borderRadius: "10px",
  overflow: "hidden",
};

const progressFillYellow = {
  height: "100%",
  background: "#facc15",
};

const progressFillBlue = {
  height: "100%",
  background: "#60a5fa",
};
