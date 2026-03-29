export const dynamic = "force-dynamic";

import { redirect } from "next/navigation";
import DashboardLayout from "../../components/DashboardLayout";
import { getCurrentUserAndProfile } from "../../lib/getProfile";
import { canAccessVipPage } from "../../lib/access";

export default async function VipPage() {
  const { user, profile } = await getCurrentUserAndProfile();

  if (!user) redirect("/login");
  if (!canAccessVipPage(profile)) redirect("/billing");

  return (
    <DashboardLayout
      title="VIP"
      subtitle="VIP-only access with monthly progress call support and exclusive member tools."
      membershipType={profile?.membership_type}
    >
      <div style={{ display: "grid", gap: "22px" }}>
        <section style={card}>
          <div style={eyebrow}>VIP Benefit</div>
          <h2 style={title}>1 monthly progress video call</h2>
          <p style={text}>Use this VIP area for monthly call requests, accountability, evaluation, and next-step adjustments.</p>
          <button style={button}>Request Monthly Call</button>
        </section>

        <section style={grid}>
          <div style={card}><div style={cardTitle}>Monthly Evaluation</div><div style={text}>Track what changed this month and what to focus on next.</div></div>
          <div style={card}><div style={cardTitle}>Priority Accountability</div><div style={text}>VIP-only touchpoint for a more personal support level.</div></div>
          <div style={card}><div style={cardTitle}>VIP Notes</div><div style={text}>Store notes from calls, changes, and action points.</div></div>
        </section>
      </div>
    </DashboardLayout>
  );
}

const card = { background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "22px", padding: "24px" };
const grid = { display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: "18px" };
const eyebrow = { fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.16em", color: "rgba(255,255,255,0.45)", marginBottom: "8px" };
const title = { margin: 0, fontSize: "30px", fontWeight: "800" };
const cardTitle = { fontSize: "24px", fontWeight: "800", marginBottom: "8px" };
const text = { color: "rgba(255,255,255,0.68)", lineHeight: 1.8 };
const button = { marginTop: "16px", padding: "12px 16px", borderRadius: "12px", border: "none", background: "white", color: "black", fontWeight: "800", cursor: "pointer" };
