export const dynamic = "force-dynamic";

import { redirect } from "next/navigation";
import DashboardLayout from "../../components/DashboardLayout";
import { getCurrentUserAndProfile } from "../../lib/getProfile";
import { canAccessStarterPages } from "../../lib/access";

export default async function AccountPage() {
  const { user, profile } = await getCurrentUserAndProfile();

  if (!user) redirect("/login");
  if (!canAccessStarterPages(profile)) redirect("/pricing");

  return (
    <DashboardLayout
      title="Account"
      subtitle="Your member account details and plan status."
      membershipType={profile?.membership_type}
    >
      <div style={{ display: "grid", gap: "18px", maxWidth: "700px" }}>
        <section style={card}><div style={cardTitle}>Name</div><div style={cardText}>{profile?.full_name || "Not set"}</div></section>
        <section style={card}><div style={cardTitle}>Email</div><div style={cardText}>{profile?.email || user.email}</div></section>
        <section style={card}><div style={cardTitle}>Membership</div><div style={cardText}>{profile?.membership_type}</div></section>
      </div>
    </DashboardLayout>
  );
}

const card = { background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "20px", padding: "20px" };
const cardTitle = { fontSize: "24px", fontWeight: "800", marginBottom: "8px" };
const cardText = { color: "rgba(255,255,255,0.68)", lineHeight: 1.7 };import DashboardLayout from "../../components/DashboardLayout";

export default function AccountPage() {
  const rows = [
    ["Profile Name", "Niels"],
    ["Email", "member@example.com"],
    ["Current Plan", "Premium"],
    ["Status", "Active"],
  ];

  return (
    <DashboardLayout
      title="Account"
      subtitle="This page is the base for profile, security, and member settings."
    >
      <div style={{ display: "grid", gap: "16px", maxWidth: "800px" }}>
        {rows.map(([label, value]) => (
          <div key={label} style={card}>
            <div style={{ color: "rgba(255,255,255,0.6)", marginBottom: "6px" }}>{label}</div>
            <div style={{ fontSize: "20px", fontWeight: "800" }}>{value}</div>
          </div>
        ))}

        <div style={card}>
          <div style={{ fontSize: "20px", fontWeight: "800", marginBottom: "8px" }}>Security</div>
          <div style={{ color: "rgba(255,255,255,0.68)", lineHeight: 1.7 }}>Later connect this to Supabase auth so members can change password and manage sessions.</div>
        </div>
      </div>
    </DashboardLayout>
  );
}

const card = {
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: "18px",
  padding: "22px",
};
