import DashboardLayout from "../../components/DashboardLayout";

export default function ProgramsPage() {
  const programs = [
    [
      "30-Day Lean Couple Challenge",
      "Build momentum and routine with a structured challenge month.",
    ],
    [
      "Summer Shred",
      "A fat-loss focused direction for getting leaner and sharper.",
    ],
    [
      "Lean Bulk Blueprint",
      "A muscle-building system with heavier training and more food.",
    ],
    [
      "Beginner Reset",
      "A lower-friction structure for people restarting their routine.",
    ],
  ];

  return (
    <DashboardLayout
      title="Programs"
      subtitle="Transformation systems designed to create clear direction, consistency, and visible progress."
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
          gap: "20px",
        }}
      >
        {programs.map(([name, desc]) => (
          <div
            key={name}
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "18px",
              padding: "22px",
            }}
          >
            <div style={{ fontSize: "20px", fontWeight: "800", marginBottom: "8px" }}>
              {name}
            </div>
            <div style={{ color: "rgba(255,255,255,0.68)", lineHeight: 1.8 }}>
              {desc}
            </div>
          </div>
        ))}
      </div>
    </DashboardLayout>
  );
}
