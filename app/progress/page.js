export const dynamic = "force-dynamic";

import { redirect } from "next/navigation";
import DashboardLayout from "../../components/DashboardLayout";
import { getCurrentUserAndProfile } from "../../lib/getProfile";
import { canAccessPremiumPages } from "../../lib/access";

export default async function ProgressPage() {
  const { user, profile } = await getCurrentUserAndProfile();

  if (!user) redirect("/login");
  if (!canAccessPremiumPages(profile)) redirect("/pricing");

  return (
    <DashboardLayout
      title="Progress"
      subtitle="Premium and VIP members can track measurements, consistency, and check-ins here."
      membershipType={profile?.membership_type}
    >
      <div style={{ display: "grid", gap: "18px" }}>
        <section style={card}><div style={cardTitle}>Weekly Check-In</div><div style={cardText}>Track weight, waist, energy, mood, and adherence.</div></section>
        <section style={card}><div style={cardTitle}>Progress History</div><div style={cardText}>Review previous weeks and compare your momentum over time.</div></section>
      </div>
    </DashboardLayout>
  );
}

const card = { background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "20px", padding: "20px" };
const cardTitle = { fontSize: "24px", fontWeight: "800", marginBottom: "8px" };
const cardText = { color: "rgba(255,255,255,0.68)", lineHeight: 1.7 };
