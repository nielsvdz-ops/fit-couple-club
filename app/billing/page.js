import DashboardLayout from "../../components/DashboardLayout";
import { MEMBERSHIP_PLANS } from "../../lib/plans";

export default function BillingPage() {
  return (
    <DashboardLayout
      title="Billing & Membership"
      subtitle="This page should clearly explain value, next billing status, and especially why VIP is worth more."
    >
      <div style={{ display: "grid", gap: "22px" }}>
        <section style={statusCard}>
          <div>
            <div style={eyebrow}>Current Membership</div>
            <h2 style={sectionTitle}>Premium • Active</h2>
            <p style={muted}>Next billing date: 14 April 2026</p>
          </div>
          <div style={statusBadge}>Active</div>
        </section>

        <section style={grid}>
          {MEMBERSHIP_PLANS.map((plan) => (
            <div key={plan.id} style={planCard}>
              <div style={{ fontSize: "24px", fontWeight: "800", marginBottom: "6px" }}>{plan.name}</div>
              <div style={{ fontSize: "34px", fontWeight: "800", marginBottom: "14px" }}>{plan.price}</div>
              <ul style={list}>
                {plan.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
              <button style={primaryButton}>Select Plan</button>
            </div>
          ))}
        </section>

        <section style={vipCard}>
          <div style={eyebrow}>VIP Value</div>
          <h2 style={sectionTitle}>Why VIP should feel premium</h2>
          <div style={vipGrid}>
            <div style={vipItem}><strong>Weekly video call</strong><div style={muted}>A personal check-in focused on progress, consistency, and next actions.</div></div>
            <div style={vipItem}><strong>Progress evaluation</strong><div style={muted}>Review measurements, photos, adherence, and training performance.</div></div>
            <div style={vipItem}><strong>Plan adjustments</strong><div style={muted}>Use the weekly evaluation to change the next week’s focus where needed.</div></div>
            <div style={vipItem}><strong>Stronger accountability</strong><div style={muted}>Higher-touch support is the main reason some users will pay more.</div></div>
          </div>
        </section>
      </div>
    </DashboardLayout>
  );
}

const statusCard = { display: "flex", justifyContent: "space-between", gap: "12px", alignItems: "center", flexWrap: "wrap", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "22px", padding: "24px" };
const statusBadge = { padding: "10px 14px", borderRadius: "12px", background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.1)", fontWeight: "800" };
const eyebrow = { fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.16em", color: "rgba(255,255,255,0.45)", marginBottom: "8px" };
const sectionTitle = { margin: 0, fontSize: "28px", fontWeight: "800" };
const muted = { color: "rgba(255,255,255,0.68)", lineHeight: 1.8 };
const grid = { display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: "20px" };
const planCard = { background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "22px", padding: "22px" };
const list = { paddingLeft: "18px", lineHeight: 1.9, color: "rgba(255,255,255,0.72)" };
const primaryButton = { marginTop: "16px", width: "100%", padding: "12px 16px", borderRadius: "12px", border: "none", background: "white", color: "black", fontWeight: "700", cursor: "pointer" };
const vipCard = { background: "linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.03))", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "22px", padding: "24px" };
const vipGrid = { display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: "16px", marginTop: "16px" };
const vipItem = { background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "16px", padding: "18px" };
