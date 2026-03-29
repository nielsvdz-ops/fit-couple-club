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
        <section style={card}>
          <div style={cardTitle}>Name</div>
          <div style={cardText}>{profile?.full_name || "Not set"}</div>
        </section>

        <section style={card}>
          <div style={cardTitle}>Email</div>
          <div style={cardText}>{profile?.email || user.email}</div>
        </section>

        <section style={card}>
          <div style={cardTitle}>Membership</div>
          <div style={cardText}>{profile?.membership_type}</div>
        </section>
      </div>
    </DashboardLayout>
  );
}

const card = {
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: "20px",
  padding: "20px",
};

const cardTitle = {
  fontSize: "24px",
  fontWeight: "800",
  marginBottom: "8px",
};

const cardText = {
  color: "rgba(255,255,255,0.68)",
  lineHeight: 1.7,
};
