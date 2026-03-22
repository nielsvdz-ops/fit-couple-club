import DashboardLayout from "../../components/DashboardLayout";

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
