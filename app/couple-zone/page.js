import Navbar from "../../components/Navbar";

export default function CoupleZonePage() {
  return (
    <main style={main}>
      <Navbar />
      <div style={container}>
        <h1 style={title}>Couple Zone ❤️</h1>
        <p style={subtitle}>Train together, stay accountable, and build a stronger healthier lifestyle side by side.</p>

        <div style={grid}>
          {[
            ["Partner Workouts", "Workout ideas and structures for two people."],
            ["Shared Meal Plans", "Meal structure you can follow together."],
            ["Weekly Challenges", "Simple challenges that keep both of you engaged."],
            ["Accountability System", "Use teamwork to stay more consistent."],
            ["Date-Night Healthy Meals", "Meals that support your goals without feeling boring."],
            ["Couple Transformation Flow", "A stronger shared route from starting point to visible progress."],
          ].map(([name, desc]) => (
            <div key={name} style={card}>
              <div style={{ fontWeight: "700", fontSize: "20px", marginBottom: "8px" }}>{name}</div>
              <div style={{ color: "rgba(255,255,255,0.68)", lineHeight: 1.8 }}>{desc}</div>
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
