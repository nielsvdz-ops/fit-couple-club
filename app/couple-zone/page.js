import DashboardLayout from "../../components/DashboardLayout";

export default function CoupleZonePage() {
  const items = [
    ["Partner Workouts", "Workout ideas and structures for two people."],
    ["Shared Meal Plans", "A food structure you can follow together."],
    ["Weekly Challenges", "Simple shared challenges to stay engaged."],
    ["Accountability System", "Use teamwork to stay more consistent."],
    ["Date-Night Healthy Meals", "Meals that support your goals without being boring."],
    ["Couple Transformation Flow", "A stronger shared route from start to visible progress."],
  ];

  return (
    <DashboardLayout
      title="Couple Zone"
      subtitle="This is your unique angle: training, eating, and growing together as a team."
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
          gap: "20px",
        }}
      >
        {items.map(([name, desc]) => (
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
