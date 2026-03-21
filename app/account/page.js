import DashboardLayout from "../../components/DashboardLayout";

export default function AccountPage() {
  return (
    <DashboardLayout
      title="Account"
      subtitle="Manage your membership, settings, and billing details."
    >
      <div style={{ display: "grid", gap: "16px", maxWidth: "800px" }}>
        {[
          ["Current Plan", "Premium"],
          ["Billing Status", "Active"],
          ["Password & Security", "Change password and manage login settings"],
          ["Membership Controls", "Pause or cancel your subscription later"],
        ].map(([title, text]) => (
          <div
            key={title}
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "18px",
              padding: "22px",
            }}
          >
            <div style={{ fontWeight: "800", fontSize: "20px", marginBottom: "8px" }}>
              {title}
            </div>
            <div style={{ color: "rgba(255,255,255,0.68)", lineHeight: 1.8 }}>
              {text}
            </div>
          </div>
        ))}
      </div>
    </DashboardLayout>
  );
}
