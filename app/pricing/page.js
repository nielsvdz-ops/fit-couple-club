export default function PricingPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#0a0a0a",
        color: "white",
        padding: "40px",
      }}
    >
      <h1>Choose Your Plan</h1>
      <p>You need an active subscription to access the member area.</p>

      <div style={{ display: "grid", gap: "16px", maxWidth: "800px", marginTop: "24px" }}>
        <div style={card}>
          <h2>Starter</h2>
          <p>Basic access</p>
          <button style={button}>Choose Starter</button>
        </div>

        <div style={card}>
          <h2>Premium</h2>
          <p>Full member access</p>
          <button style={button}>Choose Premium</button>
        </div>

        <div style={card}>
          <h2>VIP</h2>
          <p>Includes weekly progress/evaluation call</p>
          <button style={button}>Choose VIP</button>
        </div>
      </div>
    </main>
  );
}

const card = {
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: "16px",
  padding: "20px",
};

const button = {
  marginTop: "12px",
  padding: "12px 16px",
  borderRadius: "10px",
  border: "none",
  background: "white",
  color: "black",
  fontWeight: "700",
  cursor: "pointer",
};
