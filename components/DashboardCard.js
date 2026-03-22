export default function DashboardCard({ title, text, href }) {
  return (
    <a
      href={href}
      style={{
        textDecoration: "none",
        color: "white",
        background: "rgba(255,255,255,0.04)",
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: "20px",
        padding: "24px",
        display: "block",
      }}
    >
      <div style={{ fontSize: "24px", fontWeight: "800", marginBottom: "10px" }}>
        {title}
      </div>
      <div style={{ color: "rgba(255,255,255,0.68)", lineHeight: 1.7 }}>{text}</div>
    </a>
  );
}
