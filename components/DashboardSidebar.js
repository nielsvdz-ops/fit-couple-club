export default function DashboardSidebar({ membershipType }) {
  const membership = String(membershipType || "").toLowerCase().trim();

  const canAccessNutrition =
    membership === "nutrition" ||
    membership === "full_access" ||
    membership === "vip" ||
    membership === "coaching";

  const canAccessFitness =
    membership === "full_access" ||
    membership === "vip" ||
    membership === "coaching";

  const canAccessVip =
    membership === "vip" || membership === "coaching";

  const links = [
    ["Dashboard", "/dashboard"],
    ...(canAccessNutrition ? [["Nutrition", "/nutrition"], ["Recipes", "/recipes"]] : []),
    ...(canAccessFitness
      ? [
          ["Plan Builder", "/plan-builder"],
          ["Workouts", "/workouts"],
          ["Programs", "/programs"],
          ["Couple Zone", "/couple-zone"],
          ["Progress", "/progress"],
        ]
      : []),
    ...(canAccessVip ? [["VIP", "/vip"]] : []),
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
          marginBottom: "18px",
        }}
      >
        Fit Couple Club
      </a>

      <div
        style={{
          display: "inline-block",
          padding: "8px 12px",
          borderRadius: "999px",
          background: "rgba(255,255,255,0.06)",
          border: "1px solid rgba(255,255,255,0.1)",
          fontWeight: "800",
          marginBottom: "20px",
        }}
      >
        {formatMembershipLabel(membership)}
      </div>

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

function formatMembershipLabel(membership) {
  if (membership === "nutrition") return "Nutrition";
  if (membership === "full_access") return "Full Access";
  if (membership === "vip") return "VIP";
  if (membership === "coaching") return "Coaching";
  return "Member";
}
