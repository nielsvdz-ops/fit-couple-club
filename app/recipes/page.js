import Navbar from "../../components/Navbar";

export default function RecipesPage() {
  return (
    <main style={main}>
      <Navbar />
      <div style={container}>
        <h1 style={title}>Recipes</h1>
        <p style={subtitle}>Simple high-protein meals that are easy to repeat and fit real life.</p>

        <div style={grid}>
          {[
            ["Chicken Power Bowl", "15 min · high protein lunch"],
            ["High Protein Breakfast", "10 min · eggs, yogurt, fruit"],
            ["Salmon & Veggies", "20 min · clean dinner option"],
            ["Protein Smoothie", "5 min · easy post-workout"],
            ["Greek Yogurt Dessert", "5 min · lighter sweet option"],
            ["Couple Date Night Meal", "healthy meal idea for two"],
          ].map(([name, meta]) => (
            <div key={name} style={card}>
              <div style={{ fontWeight: "700", fontSize: "20px", marginBottom: "8px" }}>{name}</div>
              <div style={{ color: "rgba(255,255,255,0.68)", lineHeight: 1.8 }}>{meta}</div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

const main = { minHeight: "100vh", background: "#0a0a0a", color: "white" };
const container = { maxWidth: "1100px", margin: "0 auto", padding: "60px 24px" };
const title = { fontSize: "42px", marginBottom: "10px" };
const subtitle = { color: "rgba(255,255,255,0.7)", marginBottom: "30px", lineHeight: 1.8 };
const grid = { display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: "20px" };
const card = { background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "18px", padding: "24px" };
