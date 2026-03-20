import Navbar from "../../../components/Navbar";

export default function BootyWorkoutPage() {
  return (
    <main style={main}>
      <Navbar />
      <div style={container}>
        <h1 style={title}>Booty Focus Workouts</h1>
        <p style={subtitle}>Example structure for members who want more glute-focused training.</p>

        {[
          {
            title: "Day 1 — Glutes Heavy",
            items: ["Hip Thrust — 4x10", "Bulgarian Split Squat — 3x12", "Romanian Deadlift — 3x10", "Glute Bridge Hold — 3x30 sec"],
          },
          {
            title: "Day 3 — Glutes Volume",
            items: ["Kickbacks — 4x12", "Walking Lunges — 3x20", "Step-ups — 3x12", "Band Abductions — 3x20"],
          },
        ].map((block) => (
          <div key={block.title} style={card}>
            <h2 style={{ fontSize: "28px", marginBottom: "14px" }}>{block.title}</h2>
            <ul style={{ paddingLeft: "18px", lineHeight: 1.9 }}>
              {block.items.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </main>
  );
}

const main = { minHeight: "100vh", background: "#0a0a0a", color: "white" };
const container = { maxWidth: "900px", margin: "0 auto", padding: "60px 24px 80px" };
const title = { fontSize: "48px", marginBottom: "12px" };
const subtitle = { color: "rgba(255,255,255,0.68)", marginBottom: "28px", lineHeight: 1.8 };
const card = { background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "20px", padding: "24px", marginBottom: "20px" };
