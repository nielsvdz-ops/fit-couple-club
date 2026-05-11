import Navbar from "../../components/Navbar";

const goals = [
  {
    title: "Lose Fat",
    description:
      "Drop body fat with structured workouts, higher-protein meals, daily movement, and sustainable routines.",
  },
  {
    title: "Build Muscle",
    description:
      "Focus on progressive overload, muscle-building nutrition, recovery, and stronger gym performance.",
  },
  {
    title: "Tone & Shape Body",
    description:
      "Create a lean, athletic physique with balanced workouts, body shaping, and smarter nutrition habits.",
  },
  {
    title: "Maintain Athletic Lifestyle",
    description:
      "Stay fit, active, and healthy year-round with realistic structure that fits a busy lifestyle.",
  },
  {
    title: "Beginner Body Reset",
    description:
      "Start building confidence, consistency, and healthy habits without extreme diets or overwhelming plans.",
  },
  {
    title: "Couple Transformation",
    description:
      "Train together, stay accountable, improve consistency, and build a healthier lifestyle as a team.",
  },
];

export default function GoalsPage() {
  return (
    <main style={pageStyle}>
      <Navbar />

      <div style={containerStyle}>
        <section style={heroSection}>
          <div style={eyebrowStyle}>Choose Your Goal</div>

          <h1 style={titleStyle}>
            Start with what you want to achieve.
          </h1>

          <p style={subtitleStyle}>
            Your training, nutrition, and recovery should match your real
            goal — not random advice from social media.
          </p>
        </section>

        <section style={gridStyle}>
          {goals.map((goal) => (
            <div key={goal.title} style={cardStyle}>
              <div style={cardGlow} />

              <h2 style={cardTitle}>{goal.title}</h2>

              <p style={cardDescription}>
                {goal.description}
              </p>

              <button style={buttonStyle}>
                Select Goal
              </button>
            </div>
          ))}
        </section>
      </div>
    </main>
  );
}

const pageStyle = {
  minHeight: "100vh",
  background:
    "radial-gradient(circle at top, rgba(255,255,255,0.05), transparent 40%), #050505",
  color: "white",
};

const containerStyle = {
  maxWidth: "1240px",
  margin: "0 auto",
  padding: "72px 20px 100px",
};

const heroSection = {
  marginBottom: "42px",
};

const eyebrowStyle = {
  fontSize: "12px",
  textTransform: "uppercase",
  letterSpacing: "0.18em",
  color: "rgba(255,255,255,0.45)",
  marginBottom: "12px",
};

const titleStyle = {
  fontSize: "clamp(36px, 6vw, 64px)",
  lineHeight: 1.02,
  fontWeight: "900",
  margin: 0,
  maxWidth: "860px",
};

const subtitleStyle = {
  color: "rgba(255,255,255,0.68)",
  maxWidth: "760px",
  lineHeight: 1.9,
  marginTop: "18px",
  fontSize: "16px",
};

const gridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,320px),1fr))",
  gap: "22px",
};

const cardStyle = {
  position: "relative",
  overflow: "hidden",
  background:
    "linear-gradient(180deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.03) 100%)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: "28px",
  padding: "28px",
  display: "flex",
  flexDirection: "column",
  gap: "18px",
  backdropFilter: "blur(10px)",
  transition: "all 0.25s ease",
  minHeight: "260px",
};

const cardGlow = {
  position: "absolute",
  top: "-80px",
  right: "-80px",
  width: "180px",
  height: "180px",
  background: "rgba(255,255,255,0.05)",
  borderRadius: "999px",
  filter: "blur(30px)",
};

const cardTitle = {
  fontSize: "28px",
  fontWeight: "900",
  lineHeight: 1.1,
  margin: 0,
  position: "relative",
  zIndex: 2,
};

const cardDescription = {
  color: "rgba(255,255,255,0.72)",
  lineHeight: 1.8,
  fontSize: "15px",
  position: "relative",
  zIndex: 2,
  flex: 1,
};

const buttonStyle = {
  border: "none",
  borderRadius: "16px",
  padding: "14px 18px",
  background: "white",
  color: "#111",
  fontWeight: "900",
  fontSize: "14px",
  cursor: "pointer",
  width: "fit-content",
  position: "relative",
  zIndex: 2,
};