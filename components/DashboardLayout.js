"use client";

export default function DashboardLayout({ title, subtitle, children, membershipType }) {
  const membership = String(membershipType || "").toLowerCase();

  const starterLinks = [
    ["Dashboard", "/dashboard"],
    ["Plan Builder", "/plan-builder"],
    ["Workouts", "/workouts"],
    ["Nutrition", "/nutrition"],
    ["Recipes", "/recipes"],
    ["Billing", "/billing"],
    ["Account", "/account"],
  ];

  const premiumExtra = [
    ["Programs", "/programs"],
    ["Couple Zone", "/couple-zone"],
    ["Progress", "/progress"],
  ];

  const vipExtra = [["VIP", "/vip"]];

  let navItems = [...starterLinks];

  if (membership === "premium" || membership === "vip") {
    navItems = [...starterLinks.slice(0, 5), ...premiumExtra, ...starterLinks.slice(5)];
  }

  if (membership === "vip") {
    navItems = [...starterLinks.slice(0, 5), ...premiumExtra, ...vipExtra, ...starterLinks.slice(5)];
  }

  return (
    <div style={layout}>
      <aside style={sidebar}>
        <div style={brand}>Fit Couple Club</div>
        <div style={memberTag}>{membership || "member"}</div>
        <div style={nav}>
          {navItems.map(([label, href]) => (
            <a key={label} href={href} style={navLink}>
              {label}
            </a>
          ))}
        </div>
      </aside>

      <main style={main}>
        <h1 style={pageTitle}>{title}</h1>
        {subtitle ? <p style={subtitleStyle}>{subtitle}</p> : null}
        {children}
      </main>
    </div>
  );
}

const layout = {
  display: "grid",
  gridTemplateColumns: "280px 1fr",
  minHeight: "100vh",
  background: "#060606",
  color: "white",
};

const sidebar = {
  borderRight: "1px solid rgba(255,255,255,0.08)",
  padding: "24px 18px",
  position: "sticky",
  top: 0,
  height: "100vh",
};

const brand = {
  fontSize: "28px",
  fontWeight: "900",
  marginBottom: "12px",
};

const memberTag = {
  display: "inline-block",
  padding: "8px 12px",
  borderRadius: "999px",
  background: "rgba(255,255,255,0.06)",
  border: "1px solid rgba(255,255,255,0.1)",
  textTransform: "capitalize",
  fontWeight: "800",
  marginBottom: "24px",
};

const nav = {
  display: "grid",
  gap: "10px",
};

const navLink = {
  display: "block",
  textDecoration: "none",
  color: "white",
  padding: "16px 18px",
  borderRadius: "16px",
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.06)",
  fontWeight: "800",
};

const main = {
  padding: "28px",
};

const pageTitle = {
  fontSize: "56px",
  fontWeight: "900",
  margin: 0,
};

const subtitleStyle = {
  color: "rgba(255,255,255,0.7)",
  marginTop: "12px",
  marginBottom: "28px",
  fontSize: "20px",
  lineHeight: 1.7,
  maxWidth: "900px",
};
