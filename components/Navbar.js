export default function Navbar() {
  return (
    <header
      style={{
        padding: "18px 28px",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        position: "sticky",
        top: 0,
        background: "rgba(10,10,10,0.9)",
        backdropFilter: "blur(10px)",
        zIndex: 50,
      }}
    >
      <a
        href="/"
        style={{
          fontSize: "24px",
          fontWeight: "800",
          color: "white",
          textDecoration: "none",
          letterSpacing: "-0.02em",
        }}
      >
        Fit Couple Club
      </a>

      <nav style={{ display: "flex", gap: "18px", alignItems: "center", flexWrap: "wrap" }}>
        <a href="/about" style={navLink}>About</a>
        <a href="/plan-builder" style={navLink}>Plan Builder</a>
        <a href="/#features" style={navLink}>Features</a>
        <a href="/#pricing" style={navLink}>Pricing</a>
        <a href="/login" style={navLink}>Login</a>
        <a href="/signup" style={ctaLink}>Join Now</a>
      </nav>
    </header>
  );
}

const navLink = {
  color: "white",
  textDecoration: "none",
  fontSize: "15px",
  opacity: 0.9,
};

const ctaLink = {
  background: "white",
  color: "black",
  padding: "10px 16px",
  borderRadius: "12px",
  textDecoration: "none",
  fontWeight: "700",
};
