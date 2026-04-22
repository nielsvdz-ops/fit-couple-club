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

      <nav style={navWrap}>
        <a href="/#features" style={navLink}>Features</a>
        <a href="/#pricing" style={navLink}>Pricing</a>
        <a href="/about" style={navLink}>About</a>

        <a href="/login" style={navLink}>Login</a>

        <a href="/signup" style={ctaPrimary}>
          Start Now
        </a>
      </nav>
    </header>
  );
}
