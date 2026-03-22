export default function DashboardSidebar() {
  const links = [
    ["Dashboard", "/dashboard"],
    ["Plan Builder", "/plan-builder"],
    ["Workouts", "/workouts"],
    ["Nutrition", "/nutrition"],
    ["Recipes", "/recipes"],
    ["Programs", "/programs"],
    ["Couple Zone", "/couple-zone"],
    ["Progress", "/progress"],
    ["Billing", "/billing"],
    ["Account", "/account"],
  ];

  return (
    <aside
      style={{
        width: "260px",
        minHeight: "100vh",
        background: "#0f0f0f",
        borderRight: "1px solid rgba(255,255,255,0.08)",
        padding: "28px 20px",
        boxSizing: "border-box",
      }}
    >
      <a
        href="/"
        style={{
          display: "block",
          color: "white",
          textDecoration: "none",
          fontSize: "24px",
          fontWeight: "800",
          marginBottom: "30px",
        }}
      >
        Fit Couple Club
      </a>

      <div
        style={{
          fontSize: "12px",
          textTransform: "uppercase",
          letterSpacing: "0.16em",
          color: "rgba(255,255,255,0.45)",
          marginBottom: "14px",
        }}
      >
        Member Area
      </div>

      <nav style={{ display: "grid", gap: "10px" }}>
        {links.map(([label, href]) => (
          <a
            key={label}
            href={href}
            style={{
              color: "white",
              textDecoration: "none",
              padding: "12px 14px",
              borderRadius: "12px",
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.06)",
              fontWeight: "600",
            }}
          >
            {label}
          </a>
        ))}
      </nav>
    </aside>
  );
}
