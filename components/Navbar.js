export default function Navbar() {
  return (
    <header
      style={{
        padding: "20px 32px",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        position: "sticky",
        top: 0,
        background: "#0a0a0a",
        zIndex: 10,
      }}
    >
      <div style={{ fontSize: "24px", fontWeight: "700" }}>Fit Couple Club</div>

      <nav style={{ display: "flex", gap: "18px", alignItems: "center" }}>
        <a href="#features" style={{ color: "white", textDecoration: "none" }}>Features</a>
        <a href="#pricing" style={{ color: "white", textDecoration: "none" }}>Pricing</a>
        <a href="/login" style={{ color: "white", textDecoration: "none" }}>Login</a>
        <a
          href="/signup"
          style={{
            background: "white",
            color: "black",
            padding: "10px 16px",
            borderRadius: "12px",
            textDecoration: "none",
            fontWeight: "700",
          }}
        >
          Join Now
        </a>
      </nav>
    </header>
  );
}
