export default function DashboardCard({
  title,
  description,
  href,
}) {
  return (
    <a
      href={href}
      style={card}
    >
      <div style={overlay} />

      <div style={content}>
        <div style={eyebrow}>
          FitCoupleClub
        </div>

        <h3 style={titleStyle}>
          {title}
        </h3>

        <p style={descriptionStyle}>
          {description}
        </p>

        <div style={button}>
          Open System →
        </div>
      </div>
    </a>
  );
}

const card = {
  position: "relative",
  overflow: "hidden",
  textDecoration: "none",
  color: "white",
  background:
    "linear-gradient(135deg, rgba(255,255,255,0.04), rgba(127,29,29,0.18))",
  border: "1px solid rgba(255,255,255,0.10)",
  borderLeft: "3px solid #b00000",
  minHeight: "260px",
  padding: "28px",
  display: "flex",
  transition: "all 0.25s ease",
};

const overlay = {
  position: "absolute",
  inset: 0,
  background:
    "radial-gradient(circle at top right, rgba(176,0,0,0.16), transparent 42%)",
};

const content = {
  position: "relative",
  zIndex: 2,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  width: "100%",
};

const eyebrow = {
  fontSize: "11px",
  textTransform: "uppercase",
  letterSpacing: "0.16em",
  color: "#ef4444",
  fontWeight: "950",
  marginBottom: "18px",
};

const titleStyle = {
  margin: 0,
  fontSize: "clamp(28px, 5vw, 40px)",
  lineHeight: 0.95,
  fontWeight: "950",
  textTransform: "uppercase",
  letterSpacing: "-0.04em",
};

const descriptionStyle = {
  marginTop: "18px",
  color: "rgba(255,255,255,0.72)",
  lineHeight: 1.8,
  fontSize: "15px",
  maxWidth: "90%",
};

const button = {
  marginTop: "28px",
  width: "fit-content",
  padding: "12px 16px",
  background: "rgba(176,0,0,0.18)",
  border: "1px solid rgba(176,0,0,0.38)",
  color: "white",
  fontWeight: "900",
  textTransform: "uppercase",
  letterSpacing: "0.06em",
  fontSize: "12px",
};