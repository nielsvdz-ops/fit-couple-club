import Navbar from "../../components/Navbar";

export default function GoalsPage() {
  return (
    <main style={{ minHeight: "100vh", background: "#0a0a0a", color: "white" }}>
      <Navbar />
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "60px 24px 80px" }}>
        <div style={{ marginBottom: "28px" }}>
          <div style={eyebrowStyle}>Choose Your Goal</div>
          <h1 style={{ fontSize: "52px", margin: "10px 0 12px" }}>Start with what you want to achieve.</h1>
          <p style={{ color: "rgba(255,255,255,0.68)", maxWidth: "760px", lineHeight: 1.8 }}>
            Your meal structure and workout routine should follow your goal, not random advice.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: "20px" }}>
          {[
            "Lose Fat",
            "Build Muscle",
            "Tone & Shape Body",
            "Maintain Athletic Lifestyle",
            "Beginner Body Reset",
            "Couple Transformation",
          ].map((goal) => (
            <div key={goal} style={cardStyle}>{goal}</div>
          ))}
        </div>
      </div>
    </main>
  );
}

const eyebrowStyle = {
  fontSize: "13px",
  textTransform: "uppercase",
  letterSpacing: "0.18em",
  color: "rgba(255,255,255,0.5)",
};

const cardStyle = {
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: "22px",
  padding: "26px",
  fontSize: "22px",
  fontWeight: "700",
};
