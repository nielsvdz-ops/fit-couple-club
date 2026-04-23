export const dynamic = "force-dynamic";

import ManageSubscriptionButton from "../../components/ManageSubscriptionButton";
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

  const vipTaken = 14;
  const vipMax = 99;
  const vipLeft = vipMax - vipTaken;
  const vipPercentage = (vipTaken / vipMax) * 100;

  const coachingTaken = 2;
  const coachingMax = 15;
  const coachingLeft = coachingMax - coachingTaken;
  const coachingPercentage = (coachingTaken / coachingMax) * 100;

  return (
    <DashboardLayout
      title="Billing"
      subtitle="Choose your plan and upgrade your results."
      membershipType={profile?.membership_type}
    >
      <div style={{ display: "grid", gap: "22px", maxWidth: "1000px" }}>
        <section style={statusCard}>
          <div>
            <div style={eyebrow}>Current Membership</div>
            <h2 style={title}>{profile?.membership_type || "Free"}</h2>
            <p style={text}>Status: Active</p>
          </div>
        </section>

        <section style={grid}>
          <div style={card}>
            <div style={cardTitle}>Nutrition — €19.99</div>
            <div style={text}>
              ✔ Meal plans
              <br />
              ✔ Recipes
              <br />
              ✔ Nutrition guidance
              <br />
              <br />
              Perfect if you want results without going to the gym.
            </div>

            <CheckoutButton
              plan="nutrition"
              label="Get Nutrition"
              email={userEmail}
              variant="green"
            />
          </div>

          <div style={highlightCard}>
            <div style={bestValue}>🔥 Best Value</div>
            <div style={cardTitle}>Full Access — €29.99</div>
            <div style={text}>
              ✔ Workouts
              <br />
              ✔ Nutrition
              <br />
              ✔ Programs
              <br />
              ✔ Progress tracking
              <br />
              ✔ Everything included
              <br />
              <br />
              Complete system for total transformation.
            </div>

            <CheckoutButton
              plan="full_access"
              label="Unlock Everything"
              email={userEmail}
              variant="yellow"
            />
          </div>

          <div style={vipCard}>
            <div style={cardTitle}>VIP — €99</div>
            <div style={text}>
              ✔ Everything in Full Access
              <br />
              ✔ Monthly coaching call
              <br />
              ✔ Priority support
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
                  style={{ ...progressFillBlue, width: `${vipPercentage}%` }}
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
              ✔ Weekly 1-on-1 calls
              <br />
              ✔ Fully customized plan
              <br />
              ✔ Direct support
              <br />
              ✔ Coaching by Niels & Rosanna
              <br />
              <br />
              Maximum results with personal guidance.
            </div>

            <div style={scarcityBox}>
              <div style={scarcityText}>
                {coachingTaken}/{coachingMax} spots taken — {coachingLeft} left
              </div>

              <div style={progressBar}>
                <div
                  style={{ ...progressFillYellow, width: `${coachingPercentage}%` }}
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

const highlightCard = {
  background: "rgba(250,204,21,0.08)",
  border: "1px solid rgba(250,204,21,0.4)",
  borderRadius: "20px",
  padding: "20px",
  position: "relative",
};

const bestValue = {
  position: "absolute",
  top: "-10px",
  right: "10px",
  background: "#facc15",
  color: "black",
  fontSize: "12px",
  fontWeight: "800",
  padding: "4px 8px",
  borderRadius: "6px",
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
