export default function UpgradeLockScreen({
  title = "Upgrade required",
  text = "Your current plan does not include access to this section.",
  requiredPlan = "Full Access",
  buttonLabel = "See Upgrade Options",
  href = "/billing",
}) {
  return (
    <div style={wrap}>
      <div style={card}>
        <div style={badge}>Locked Content</div>
        <h1 style={titleStyle}>{title}</h1>
        <p style={textStyle}>{text}</p>

        <div style={planBox}>
          <div style={planLabel}>Required plan</div>
          <div style={planValue}>{requiredPlan}</div>
        </div>

        <div style={featureList}>
          <div style={featureItem}>✔ Unlock access instantly</div>
          <div style={featureItem}>✔ Keep your current account</div>
          <div style={featureItem}>✔ Upgrade in one step from billing</div>
        </div>

        <div style={buttonRow}>
          <a href={href} style={primaryButton}>
            {buttonLabel}
          </a>
          <a href="/dashboard" style={secondaryButton}>
            Back to Dashboard
          </a>
        </div>
      </div>
    </div>
  );
}

const wrap = {
  minHeight: "70vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "24px",
};

const card = {
  width: "100%",
  maxWidth: "720px",
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: "24px",
  padding: "32px",
};

const badge = {
  display: "inline-block",
  padding: "8px 12px",
  borderRadius: "999px",
  background: "rgba(250,204,21,0.12)",
  border: "1px solid rgba(250,204,21,0.35)",
  color: "#facc15",
  fontSize: "13px",
  fontWeight: "700",
  marginBottom: "18px",
};

const titleStyle = {
  fontSize: "40px",
  lineHeight: 1.05,
  margin: "0 0 14px",
  fontWeight: "800",
};

const textStyle = {
  color: "rgba(255,255,255,0.72)",
  lineHeight: 1.8,
  marginBottom: "24px",
  fontSize: "18px",
};

const planBox = {
  padding: "18px",
  borderRadius: "18px",
  background: "rgba(255,255,255,0.03)",
  border: "1px solid rgba(255,255,255,0.08)",
  marginBottom: "22px",
};

const planLabel = {
  fontSize: "12px",
  textTransform: "uppercase",
  letterSpacing: "0.14em",
  color: "rgba(255,255,255,0.45)",
  marginBottom: "8px",
};

const planValue = {
  fontSize: "28px",
  fontWeight: "800",
};

const featureList = {
  display: "grid",
  gap: "10px",
  marginBottom: "26px",
};

const featureItem = {
  color: "rgba(255,255,255,0.78)",
  lineHeight: 1.6,
};

const buttonRow = {
  display: "flex",
  gap: "12px",
  flexWrap: "wrap",
};

const primaryButton = {
  display: "inline-block",
  padding: "14px 20px",
  borderRadius: "14px",
  background: "#facc15",
  color: "black",
  textDecoration: "none",
  fontWeight: "800",
};

const secondaryButton = {
  display: "inline-block",
  padding: "14px 20px",
  borderRadius: "14px",
  border: "1px solid rgba(255,255,255,0.14)",
  color: "white",
  textDecoration: "none",
  fontWeight: "700",
};
