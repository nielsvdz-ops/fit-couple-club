import Navbar from "../../components/Navbar";

export default function AccountPage() {
  return (
    <main style={main}>
      <Navbar />
      <div style={container}>
        <h1 style={title}>Your Account</h1>
        <p style={subtitle}>Manage your membership, settings, and billing details.</p>

        <div style={card}><strong>Current Plan:</strong><div style={detail}>Premium</div></div>
        <div style={card}><strong>Billing Status:</strong><div style={detail}>Active</div></div>
        <div style={card}><strong>Password & Security</strong><div style={detail}>Change password and manage login settings</div></div>
        <div style={card}><strong>Membership Controls</strong><div style={detail}>Pause or cancel your subscription later</div></div>
      </div>
    </main>
  );
}

const main = { minHeight: "100vh", background: "#0a0a0a", color: "white" };
const container = { maxWidth: "900px", margin: "0 auto", padding: "60px 24px" };
const title = { fontSize: "42px", marginBottom: "10px" };
const subtitle = { color: "rgba(255,255,255,0.7)", marginBottom: "30px", lineHeight: 1.8 };
const card = { background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "18px", padding: "24px", marginBottom: "16px" };
const detail = { marginTop: "8px", color: "rgba(255,255,255,0.68)" };
