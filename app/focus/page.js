import Navbar from "../../components/Navbar";

export default function FocusPage() {
  return (
    <main style={{ minHeight: "100vh", background: "#0a0a0a", color: "white" }}>
      <Navbar />

      <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "60px 24px" }}>
        <h1 style={{ fontSize: "48px", marginBottom: "10px" }}>
          Choose your focus area
        </h1>

        <p style={{ color: "rgba(255,255,255,0.7)", marginBottom: "30px" }}>
          This determines which body parts get extra attention in your workouts.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: "20px" }}>
          {[
            "Booty 🍑",
            "Abs",
            "Legs",
            "Upper Body",
            "Full Body",
            "Couple Workouts"
          ].map((focus) => (
            <div key={focus} style={cardStyle}>
              {focus}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

const cardStyle = {
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: "22px",
  padding: "26px",
  fontSize: "20px",
  fontWeight: "700",
  textAlign: "center",
};
