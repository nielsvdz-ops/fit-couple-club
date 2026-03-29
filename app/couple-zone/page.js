export const dynamic = "force-dynamic";

import { redirect } from "next/navigation";
import DashboardLayout from "../../components/DashboardLayout";
import { getCurrentUserAndProfile } from "../../lib/getProfile";
import { canAccessPremiumPages } from "../../lib/access";

const tools = [
  "Partner Workout of the Week",
  "Shared Grocery Focus",
  "Couple Check-In",
  "Date-Night Healthy Meals",
];

export default async function CoupleZonePage() {
  const { user, profile } = await getCurrentUserAndProfile();

  if (!user) redirect("/login");
  if (!canAccessPremiumPages(profile)) redirect("/pricing");

  return (
    <DashboardLayout
      title="Couple Zone"
      subtitle="Premium and VIP members can use shared couple tools and accountability features."
      membershipType={profile?.membership_type}
    >
      <div style={{ display: "grid", gap: "22px" }}>
        <section style={heroCard}>
          <div style={eyebrow}>Shared Mission</div>
          <h2 style={title}>Your couple challenge this week</h2>
          <p style={text}>
            Complete 4 workouts together, cook 3 healthy dinners, and do 1 Sunday reflection talk.
          </p>
        </section>

        <section style={grid}>
          {tools.map((tool) => (
            <div key={tool} style={card}>
              <div style={cardTitle}>{tool}</div>
              <div style={text}>
                Use this area to build shared routines and stronger accountability.
              </div>
            </div>
          ))}
        </section>
      </div>
    </DashboardLayout>
  );
}

const heroCard = {
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
  gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))",
  gap: "18px",
};

const card = {
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: "20px",
  padding: "20px",
};

const cardTitle = {
  fontSize: "22px",
  fontWeight: "800",
  marginBottom: "8px",
};
