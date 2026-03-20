import Navbar from "../../components/Navbar";

export default function WorkoutsPage() {
  return (
    <main style={main}>
      <Navbar />
      <div style={container}>
        <h1 style={title}>Your Workouts</h1>
        <p style={subtitle}>Structured weekly training based on your goals, body focus, and training days.</p>

        {[
          { day: "Monday", focus: "Chest + Triceps" },
          { day: "Tuesday", focus: "Back + Biceps" },
          { day: "Wednesday", focus: "Legs + Glutes" },
          { day: "Thursday", focus: "Shoulders + Abs" },
          { day: "Friday", focus: "Full Body" },
          { day: "Saturday", focus: "Conditioning / HIIT" },
          { day: "Sunday", focus: "Recovery" },
        ].map((d) => (
          <div key={d.day} style={card}>
            <strong>{d.day}</strong>
            <div style={{ marginTop: "6px", color: "rgba(255,255,255,0.72)" }}>{d.focus}</div>
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
const card = { background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "18px", padding: "20px", marginBottom: "16px" };
