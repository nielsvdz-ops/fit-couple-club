export const dynamic = "force-dynamic";

import ManageSubscriptionButton from "../../components/ManageSubscriptionButton";
import { redirect } from "next/navigation";
import DashboardLayout from "../../components/DashboardLayout";
import CheckoutButton from "../../components/CheckoutButton";
import { getCurrentUserAndProfile } from "../../lib/getProfile";

export default async function BillingPage() {
  const { user, profile } = await getCurrentUserAndProfile();

  if (!user) redirect("/login");

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
      subtitle="Choose your system level — from simple nutrition to full transformation and coaching."
      membershipType={profile?.membership_type}
    >
      <div style={pageWrap}>
        <section style={statusCard}>
          <div>
            <div style={eyebrow}>Current Membership</div>
            <h2 style={title}>{formatMembership(profile?.membership_type)}</h2>
            <p style={text}>
              Status: {profile?.is_active ? "Active" : "No active plan"}
            </p>
          </div>

          {profile?.stripe_customer_id && (
            <ManageSubscriptionButton label="Manage Subscription" />
          )}
        </section>

        <section style={grid}>
          <div style={card}>
            <div>
              <div style={cardTitle}>Nutrition — €19.99</div>
              <div style={text}>
                ✔ 5 body goals
                <br />
                ✔ 150 daily nutrition routines
                <br />
                ✔ Weekly recipes & structure
                <br />
                ✔ Smart grocery generator
                <br />
                ✔ Personalized calories & macros
                <br />
                ✔ Couple grocery mode
                <br />
                <br />
                Know exactly what to eat and what to buy.
              </div>
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

            <div>
              <div style={cardTitle}>Full Access — €29.99</div>
              <div style={text}>
                ✔ Everything in Nutrition
                <br />
                ✔ Full workout system
                <br />
                ✔ Step-by-step programs
                <br />
                ✔ Exercise GIF guidance
                <br />
                ✔ Plan builder
                <br />
                ✔ Progress tracking
                <br />
                <br />
                Complete transformation system.
              </div>
            </div>

            <CheckoutButton
              plan="full_access"
              label="Unlock Everything"
              email={userEmail}
              variant="yellow"
            />
          </div>

          <div style={vipCard}>
            <div>
              <div style={cardTitle}>VIP — €99</div>
              <div style={text}>
                ✔ Everything in Full Access
                <br />
                ✔ Monthly coaching call
                <br />
                ✔ Priority support
                <br />
                ✔ Strategy adjustments
                <br />
                <br />
                You don’t just follow — you get guided.
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
            </div>

            <CheckoutButton
              plan="vip"
              label="Go VIP"
              email={userEmail}
              variant="blue"
            />
          </div>

          <div style={coachingCard}>
            <div>
              <div style={cardTitle}>Coaching — €349</div>
              <div style={text}>
                ✔ Everything in VIP
                <br />
                ✔ Weekly 1-on-1 calls
                <br />
                ✔ Fully custom plan
                <br />
                ✔ Direct support
                <br />
                ✔ Coaching by Niels & Rosanna
                <br />
                <br />
                Maximum results with full accountability.
              </div>

              <div style={scarcityBox}>
                <div style={scarcityText}>
                  {coachingTaken}/{coachingMax} spots taken —{" "}
                  {coachingLeft} left
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

function formatMembership(type) {
  const m = String(type || "").toLowerCase().trim();

  if (m === "nutrition") return "Nutrition";
  if (m === "full_access") return "Full Access";
  if (m === "vip") return "VIP";
  if (m === "coaching") return "Coaching";

  return "Free";
}

const pageWrap = {
  display: "grid",
  gap: "22px",
  maxWidth: "1100px",
};

const statusCard = {
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: "22px",
  padding: "24px",
  display: "grid",
  gap: "14px",
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
  color: "rgba(255,255,255,0.72)",
  lineHeight: 1.8,
};

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
  gap: "18px",
  alignItems: "stretch",
};

const card = {
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: "20px",
  padding: "22px",
  minHeight: "430px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  position: "relative",
};

const highlightCard = {
  ...card,
  background: "rgba(250,204,21,0.08)",
  border: "1px solid rgba(250,204,21,0.4)",
};

const bestValue = {
  position: "absolute",
  top: "-10px",
  right: "10px",
  background: "#facc15",
  color: "black",
  fontSize: "12px",
  fontWeight: "800",
  padding: "5px 10px",
  borderRadius: "8px",
};

const vipCard = {
  ...card,
  background: "rgba(96,165,250,0.08)",
  border: "1px solid rgba(96,165,250,0.25)",
};

const coachingCard = {
  ...card,
  background:
    "linear-gradient(135deg, rgba(255,255,255,0.10), rgba(255,255,255,0.04))",
  border: "1px solid rgba(255,255,255,0.2)",
};

const cardTitle = {
  fontSize: "24px",
  fontWeight: "800",
  marginBottom: "12px",
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
