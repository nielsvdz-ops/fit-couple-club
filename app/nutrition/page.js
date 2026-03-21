import DashboardLayout from "../../components/DashboardLayout";

export default function NutritionPage() {
  const plans = [
    [
      "Fat Loss Plan",
      "High protein, controlled calories, simple repeatable meals.",
    ],
    [
      "Muscle Gain Plan",
      "Higher calories, more carbs around training, stronger recovery support.",
    ],
    [
      "Balanced Lifestyle Plan",
      "For staying lean, healthy, and energized long term.",
    ],
    [
      "Couple Meal Plan",
      "A simple shared structure for couples who want to stay on track together.",
    ],
  ];

  return (
    <DashboardLayout
      title="Nutrition"
      subtitle="Choose the eating direction that matches your body goal and lifestyle."
    >
      <div style={{ display: "grid", gap: "16px" }}>
        {plans.map(([title, text]) => (
          <div
            key={title}
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "18px",
              padding: "22px",
            }}
          >
            <div style={{ fontSize: "22px", fontWeight: "800", marginBottom: "8px" }}>
              {title}
            </div>
            <div style={{ color: "rgba(255,255,255,0.7)", lineHeight: 1.8 }}>
              {text}
            </div>
          </div>
        ))}
      </div>
    </DashboardLayout>
  );
}
