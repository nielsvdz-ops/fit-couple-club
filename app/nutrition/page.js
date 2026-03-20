import Navbar from "../../components/Navbar";

export default function NutritionPage() {
  return (
    <main style={main}>
      <Navbar />
      <div style={container}>
        <h1 style={title}>Nutrition Plans</h1>
        <p style={subtitle}>Eat according to your goal with simple structures that are realistic to follow.</p>

        {[
          ["Fat Loss Plan", "High protein, controlled calories, and simple meals that help create consistency."],
          ["Muscle Gain Plan", "Higher calories, more carbs around training, and meals that support recovery and growth."],
          ["Balanced Lifestyle Plan", "For staying lean, athletic, and energized without overcomplicating food."],
          ["Couple Meal Plan", "A shared food structure for partners who want to stay on track together."],
        ].map(([plan, desc]) => (
          <div key={plan} style={card}>
            <div style={{ fontWeight: "700", fontSize: "22px", marginBottom: "8px" }}>{plan}</div>
            <div style={{ color: "rgba(255,255,255,0.72)", lineHeight: 1.8 }}>{desc}</div>
          </div>
        ))}
      </div>
    </main>
  );
}

const main = { minHeight: "100vh", background: "#0a0a0a", color: "white" };
const container = { maxWidth: "1000px", margin: "0 auto", padding: "60px 24px" };
const title = { fontSize: "42px", marginBottom: "10px" };
const subtitle = { color: "rgba(255,255,255,0.7)", marginBottom: "30px", lineHeight: 1.8 };
const card = { background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "18px", padding: "24px", marginBottom: "16px" };
