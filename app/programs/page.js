import Navbar from "../../components/Navbar";

export default function ProgramsPage() {
  return (
    <main style={main}>
      <Navbar />
      <div style={container}>
        <h1 style={title}>Programs</h1>
        <p style={subtitle}>Transformation-based systems designed to create clear direction and momentum.</p>

        <div style={grid}>
          {[
            ["30-Day Lean Couple Challenge", "Build routine and momentum with a structured transformation month."],
            ["Summer Shred", "A fat-loss focused system for getting leaner and sharper."],
            ["Lean Bulk Blueprint", "A muscle-building direction with heavier training and higher food intake."],
            ["Beginner Reset", "A lower-friction start for people getting back into routine."],
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
