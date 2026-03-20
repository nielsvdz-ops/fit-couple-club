export default function LoginPage() {
  return (
    <main style={{ minHeight: "100vh", padding: "80px 24px", background: "#0a0a0a", color: "white" }}>
      <div style={{ maxWidth: "420px", margin: "0 auto" }}>
        <h1 style={{ fontSize: "42px", marginBottom: "20px" }}>Login</h1>
        <div style={{ display: "grid", gap: "16px" }}>
          <input placeholder="Email" style={inputStyle} />
          <input placeholder="Password" type="password" style={inputStyle} />
          <button style={buttonStyle}>Login</button>
        </div>
      </div>
    </main>
  );
}

const inputStyle = {
  padding: "14px 16px",
  borderRadius: "12px",
  border: "1px solid rgba(255,255,255,0.15)",
  background: "#111",
  color: "white",
};

const buttonStyle = {
  padding: "14px 16px",
  borderRadius: "12px",
  border: "none",
  background: "white",
  color: "black",
  fontWeight: "700",
  cursor: "pointer",
};
