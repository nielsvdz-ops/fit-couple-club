import DashboardLayout from "../../components/DashboardLayout";

export default function ProgressPage() {
  const stats = [
    ["Current Weight", "72.4 kg"],
    ["Starting Weight", "76.0 kg"],
    ["Weekly Check-Ins", "4 completed"],
    ["Current Streak", "12 days"],
  ];

  return (
    <DashboardLayout
      title="Progress Tracker"
      subtitle="This page becomes very valuable later when connected to real user accounts and saved data."
    >
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: "18px", marginBottom: "24px" }}>
        {stats.map(([label, value]) => (
          <div key={label} style={card}>
            <div style={{ color: "rgba(255,255,255,0.6)", marginBottom: "8px" }}>{label}</div>
            <div style={{ fontSize: "28px", fontWeight: "800" }}>{value}</div>
          </div>
        ))}
      </div>

      <div style={card}>
        <h3 style={{ marginTop: 0 }}>Manual Weekly Check-In</h3>
        <p style={muted}>Later this should save to Supabase so members can track weight, waist, photos, and workout consistency.</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: "16px" }}>
          <input placeholder="Current weight" style={input} />
          <input placeholder="Waist measurement" style={input} />
          <input placeholder="Energy score /10" style={input} />
          <input placeholder="Mood / recovery" style={input} />
        </div>
        <button style={button}>Save Check-In</button>
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

const muted = { color: "rgba(255,255,255,0.68)", lineHeight: 1.7 };
const input = { width: "100%", padding: "12px 14px", borderRadius: "12px", border: "1px solid rgba(255,255,255,0.14)", background: "#111", color: "white" };
const button = { marginTop: "18px", padding: "12px 18px", borderRadius: "12px", border: "none", background: "white", color: "black", fontWeight: "700", cursor: "pointer" };
