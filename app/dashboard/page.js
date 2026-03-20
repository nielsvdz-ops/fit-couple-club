import Navbar from "../../components/Navbar";

export default function DashboardPage() {
  return (
    <main style={main}>
      <Navbar />
      <div style={container}>
        <div style={{ marginBottom: "28px" }}>
          <div style={eyebrowStyle}>Private Member Area</div>
          <h1 style={pageTitle}>Your Fitness Journey Starts Here</h1>
          <p style={textStyle}>Build your plan, choose your goal, and follow the structure that fits your body and lifestyle.</p>
        </div>

        <div style={gridStyle}>
          {[
            ["Plan Builder", "/plan-builder", "Generate your personalized direction from goal, focus and training days"],
            ["Choose Goal", "/goals", "Select the body goal you want to work toward"],
            ["Choose Training Days", "/training-days", "Pick how many days per week you want to train"],
            ["Workouts", "/workouts", "Get your matching training structure"],
            ["Nutrition", "/nutrition", "Follow meal structures that match your goal"],
            ["Recipes", "/recipes", "Use simple high-protein meals and daily food ideas"],
            ["Programs", "/programs", "Join transformation systems and challenges"],
            ["Couple Zone", "/couple-zone", "Use the platform together with your partner"],
            ["Account", "/account", "Manage your plan and personal settings"],
          ].map(([title, link, text]) => (
            <a key={title} href={link} style={dashboardCardStyle}>
              <div style={{ fontSize: "26px", fontWeight: "700", marginBottom: "10px" }}>{title}</div>
              <div style={{ color: "rgba(255,255,255,0.65)", lineHeight: 1.7 }}>{text}</div>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}

const main = { minHeight: "100vh", background: "#0a0a0a", color: "white" };
const container = { maxWidth: "1200px", margin: "0 auto", padding: "60px 24px 80px" };
const eyebrowStyle = { fontSize: "13px", textTransform: "uppercase", letterSpacing: "0.18em", color: "rgba(255,255,255,0.5)" };
const pageTitle = { fontSize: "54px", margin: "10px 0 12px" };
const textStyle = { color: "rgba(255,255,255,0.68)", maxWidth: "760px", lineHeight: 1.8 };
const gridStyle = { display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: "20px" };
const dashboardCardStyle = { background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "22px", padding: "26px", color: "white", textDecoration: "none" };
