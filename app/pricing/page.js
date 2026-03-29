export const dynamic = "force-dynamic";

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
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ marginBottom: "30px" }}>
          <div style={eyebrow}>Membership Plans</div>
          <h1 style={title}>Choose your access level</h1>
          <p style={subtitle}>
            Unlock the member area, guided plans, recipes, programs, and premium support.
          </p>
        </div>

        <div style={grid}>
          <section style={card}>
            <div style={planLabel}>Starter</div>
            <h2 style={planTitle}>Starter</h2>
            <div style={price}>€29<span style={priceSmall}>/month</span></div>
            <ul style={list}>
              <li>Dashboard</li>
              <li>Plan Builder</li>
              <li>Workouts</li>
              <li>Nutrition</li>
              <li>Recipes</li>
            </ul>
          </section>

          <section style={card}>
            <div style={planLabel}>Most Popular</div>
            <h2 style={planTitle}>Premium</h2>
            <div style={price}>€59<span style={priceSmall}>/month</span></div>
            <ul style={list}>
              <li>Everything in Starter</li>
              <li>Programs</li>
              <li>Couple Zone</li>
              <li>Progress</li>
              <li>Saved Plans</li>
            </ul>
          </section>

          <section style={vipCard}>
            <div style={planLabel}>VIP</div>
            <h2 style={planTitle}>VIP</h2>
            <div style={price}>€99<span style={priceSmall}>/month</span></div>
            <ul style={list}>
              <li>Everything in Premium</li>
              <li>VIP page access</li>
              <li>1 monthly progress video call</li>
              <li>Higher-touch accountability</li>
            </ul>
          </section>
        </div>
      </div>
    </main>
  );
}

const eyebrow = { fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.16em", color: "rgba(255,255,255,0.45)", marginBottom: "10px" };
const title = { fontSize: "54px", fontWeight: "800", margin: "0 0 12px 0" };
const subtitle = { color: "rgba(255,255,255,0.7)", fontSize: "18px", maxWidth: "720px", lineHeight: 1.7 };
const grid = { display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: "22px" };
const card = { background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "24px", padding: "24px" };
const vipCard = { background: "linear-gradient(180deg, rgba(255,255,255,0.08), rgba(255,255,255,0.04))", border: "1px solid rgba(255,255,255,0.14)", borderRadius: "24px", padding: "24px" };
const planLabel = { fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.14em", color: "rgba(255,255,255,0.5)" };
const planTitle = { fontSize: "30px", fontWeight: "800", margin: "0 0 12px 0" };
const price = { fontSize: "44px", fontWeight: "900", marginBottom: "14px" };
const priceSmall = { fontSize: "18px", fontWeight: "500", opacity: 0.8 };
const list = { paddingLeft: "18px", lineHeight: 1.9, color: "rgba(255,255,255,0.78)", marginBottom: "20px" };
