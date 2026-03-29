export const dynamic = "force-dynamic";

import { redirect } from "next/navigation";
import DashboardLayout from "../../components/DashboardLayout";
import { getCurrentUserAndProfile } from "../../lib/getProfile";
import { canAccessStarterPages } from "../../lib/access";

export default async function BillingPage() {
  const { user, profile } = await getCurrentUserAndProfile();

  if (!user) redirect("/login");
  if (!canAccessStarterPages(profile)) redirect("/pricing");

  return (
    <DashboardLayout
      title="Billing"
      subtitle="Manage your plan and see what each membership unlocks."
      membershipType={profile?.membership_type}
    >
      <div style={{ display: "grid", gap: "22px", maxWidth: "900px" }}>
        <section style={statusCard}>
          <div>
            <div style={eyebrow}>Current Membership</div>
            <h2 style={title}>{profile?.membership_type}</h2>
            <p style={text}>Status: Active</p>
          </div>
        </section>

        <section style={grid}>
          <div style={card}><div style={cardTitle}>Starter — €29</div><div style={text}>Dashboard, plan builder, workouts, nutrition, recipes, billing, account. Full plan builder output, but no saved plans or advanced rotations.</div></div>
          <div style={card}><div style={cardTitle}>Premium — €59</div><div style={text}>Everything in Starter plus programs, couple zone, progress, saved plans, deeper progression, and all workout variations.</div></div>
          <div style={vipCard}><div style={cardTitle}>VIP — €99</div><div style={text}>Everything in Premium plus VIP page access and 1 monthly progress video call.</div></div>
        </section>
      </div>
    </DashboardLayout>
  );
}

const statusCard = { background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "22px", padding: "24px" };
const eyebrow = { fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.16em", color: "rgba(255,255,255,0.45)", marginBottom: "8px" };
const title = { margin: 0, fontSize: "30px", fontWeight: "800" };
const text = { color: "rgba(255,255,255,0.68)", lineHeight: 1.8 };
const grid = { display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: "18px" };
const card = { background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "20px", padding: "20px" };
const vipCard = { background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.14)", borderRadius: "20px", padding: "20px" };
const cardTitle = { fontSize: "24px", fontWeight: "800", marginBottom: "8px" };
