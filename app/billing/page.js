export const dynamic = "force-dynamic";

import { redirect } from "next/navigation";
import DashboardLayout from "../../components/DashboardLayout";
import { getCurrentUserAndProfile } from "../../lib/getProfile";
import { canAccessStarterPages } from "../../lib/access";

export default async function BillingPage() {
  const { user, profile } = await getCurrentUserAndProfile();

  if (!user) redirect("/login");
  if (!canAccessStarterPages(profile)) redirect("/pricing");

  // 🔥 scarcity logic (fake for now, later connect to DB)
  const takenSpots = 2;
  const maxSpots = 10;
  const spotsLeft = maxSpots - takenSpots;
  const percentage = (takenSpots / maxSpots) * 100;

  return (
    <DashboardLayout
      title="Billing"
      subtitle="Manage your plan and upgrade your results."
      membershipType={profile?.membership_type}
    >
      <div style={{ display: "grid", gap: "22px", maxWidth: "1000px" }}>
        
        {/* CURRENT PLAN */}
        <section style={statusCard}>
          <div>
            <div style={eyebrow}>Current Membership</div>
            <h2 style={title}>{profile?.membership_type}</h2>
            <p style={text}>Status: Active</p>
          </div>
        </section>

        {/* PLANS */}
        <section style={grid}>
          
          {/* STARTER */}
          <div style={card}>
            <div style={cardTitle}>Starter — €19.99</div>
            <div style={text}>
              ✔ Dashboard<br/>
              ✔ Plan Builder<br/>
              ✔ Workouts<br/>
              ✔ Nutrition & Recipes<br/><br/>
              Perfect to get started with structure.
            </div>
          </div>

          {/* PREMIUM */}
          <div style={card}>
            <div style={cardTitle}>Premium — €39.99</div>
            <div style={text}>
              ✔ Everything in Starter<br/>
              ✔ Programs & Rotations<br/>
              ✔ Couple Zone<br/>
              ✔ Progress Tracking<br/>
              ✔ Saved Plans<br/><br/>
              Built for serious transformation.
            </div>
          </div>

          {/* VIP */}
          <div style={vipCard}>
            <div style={cardTitle}>VIP — €99</div>
            <div style={text}>
              ✔ Everything in Premium<br/>
              ✔ 1 Monthly Video Call<br/>
              ✔ Priority Support<br/>
              ✔ Custom Adjustments<br/><br/>
              Coaching with guidance.
            </div>
          </div>

          {/* COACHING */}
          <div style={coachingCard}>
            <div style={cardTitle}>Coaching — €349</div>

            <div style={text}>
              ✔ Everything in VIP<br/>
              ✔ Weekly 1-on-1 Calls<br/>
              ✔ Fully Custom Plan<br/>
              ✔ Direct Support Access<br/><br/>
              Highest level transformation.
            </div>

            {/* 🔥 SCARCITY */}
            <div style={scarcityBox}>
              <div style={scarcityText}>
                {takenSpots}/{maxSpots} spots taken — {spotsLeft} left
              </div>

              <div style={progressBar}>
                <div
                  style={{
                    ...progressFill,
                    width: `${percentage}%`,
                  }}
                />
              </div>
            </div>

            <button style={applyButton}>
              Apply for Coaching
            </button>
          </div>

        </section>
      </div>
    </DashboardLayout>
  );
}

/* STYLES */

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
  background: "rgba(255,255,255,0.07)",
  border: "1px solid rgba(255,255,255,0.14)",
  borderRadius: "20px",
  padding: "20px",
};

const coachingCard = {
  background: "linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.04))",
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

const progressBar = {
  height: "6px",
  background: "rgba(255,255,255,0.1)",
  borderRadius: "10px",
  overflow: "hidden",
};

const progressFill = {
  height: "100%",
  background: "#facc15",
};

const applyButton = {
  marginTop: "16px",
  padding: "12px",
  borderRadius: "10px",
  background: "#facc15",
  color: "black",
  fontWeight: "800",
  border: "none",
  cursor: "pointer",
};
