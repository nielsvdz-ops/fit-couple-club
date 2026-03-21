import DashboardLayout from "../../components/DashboardLayout";

export default function RecipesPage() {
  const recipes = [
    ["Chicken Power Bowl", "15 min · high protein lunch"],
    ["High Protein Breakfast", "10 min · eggs, yogurt, fruit"],
    ["Salmon & Veggies", "20 min · clean dinner option"],
    ["Protein Smoothie", "5 min · easy post-workout"],
    ["Greek Yogurt Dessert", "5 min · lighter sweet option"],
    ["Couple Date Night Meal", "Healthy meal idea for two"],
  ];

  return (
    <DashboardLayout
      title="Recipes"
      subtitle="Simple meals you can actually repeat without making healthy eating feel complicated."
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
          gap: "20px",
        }}
      >
        {recipes.map(([name, meta]) => (
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
            <div style={{ color: "rgba(255,255,255,0.68)", lineHeight: 1.7 }}>
              {meta}
            </div>
          </div>
        ))}
      </div>
    </DashboardLayout>
  );
}
