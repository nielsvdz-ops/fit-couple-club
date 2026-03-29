export const dynamic = "force-dynamic";

import { getVipCounter } from "../../lib/vipCounter";

export default async function PricingPage() {
  const vip = await getVipCounter();

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
            <button style={buttonPrimary}>Choose Starter</button>
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
            <button style={buttonPrimary}>Choose Premium</button>
          </section>

          <section style={vipCard}>
            <div style={vipTopRow}>
              <div style={planLabel}>VIP</div>
              <div style={vipBadge}>
                {vip.isSoldOut ? "Sold Out" : `${vip.remaining} spots left`}
              </div>
            </div>

            <h2 style={planTitle}>VIP</h2>
            <div style={price}>€99<span style={priceSmall}>/month</span></div>

            <p style={vipText}>
              Premium support with <strong>1 monthly progress video call</strong>.
              This VIP option is capped to keep it personal.
            </p>

            <div style={counterBox}>
              <div style={counterNumber}>{vip.sold}/{vip.max}</div>
              <div style={counterText}>VIP spots claimed</div>

              <div style={barTrack}>
                <div
                  style={{
                    ...barFill,
                    width: `${(vip.sold / vip.max) * 100}%`,
                  }}
                />
              </div>
            </div>

            <ul style={list}>
              <li>Everything in Premium</li>
              <li>1 monthly progress video call</li>
              <li>Monthly evaluation and adjustments</li>
              <li>More personal accountability</li>
              <li>Limited to 150 total VIP members</li>
            </ul>

            <button
              style={{
                ...buttonPrimary,
                opacity: vip.isSoldOut ? 0.5 : 1,
                cursor: vip.isSoldOut ? "not-allowed" : "pointer",
              }}
              disabled={vip.isSoldOut}
            >
              {vip.isSoldOut ? "VIP Sold Out" : "Choose VIP"}
            </button>
          </section>
        </div>
      </div>
    </main>
  );
}

const eyebrow = {
  fontSize: "12px",
  textTransform: "uppercase",
  letterSpacing: "0.16em",
  color: "rgba(255,255,255,0.45)",
  marginBottom: "10px",
};

const title = {
  fontSize: "54px",
  fontWeight: "800",
  margin: "0 0 12px 0",
};

const subtitle = {
  color: "rgba(255,255,255,0.7)",
  fontSize: "18px",
  maxWidth: "720px",
  lineHeight: 1.7,
};

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
  gap: "22px",
};

const card = {
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: "24px",
  padding: "24px",
};

const vipCard = {
  background: "linear-gradient(180deg, rgba(255,255,255,0.08), rgba(255,255,255,0.04))",
  border: "1px solid rgba(255,255,255,0.14)",
  borderRadius: "24px",
  padding: "24px",
};

const planLabel = {
  fontSize: "12px",
  textTransform: "uppercase",
  letterSpacing: "0.14em",
  color: "rgba(255,255,255,0.5)",
};

const planTitle = {
  fontSize: "30px",
  fontWeight: "800",
  margin: "0 0 12px 0",
};

const price = {
  fontSize: "44px",
  fontWeight: "900",
  marginBottom: "14px",
};

const priceSmall = {
  fontSize: "18px",
  fontWeight: "500",
  opacity: 0.8,
};

const list = {
  paddingLeft: "18px",
  lineHeight: 1.9,
  color: "rgba(255,255,255,0.78)",
  marginBottom: "20px",
};

const buttonPrimary = {
  width: "100%",
  padding: "14px 18px",
  background: "white",
  color: "black",
  borderRadius: "12px",
  fontWeight: "800",
  border: "none",
};

const vipTopRow = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "12px",
};

const vipBadge = {
  fontSize: "14px",
  fontWeight: "700",
  background: "rgba(255,255,255,0.1)",
  border: "1px solid rgba(255,255,255,0.14)",
  borderRadius: "999px",
  padding: "8px 12px",
};

const vipText = {
  color: "rgba(255,255,255,0.78)",
  lineHeight: 1.7,
  marginBottom: "18px",
};

const counterBox = {
  background: "rgba(255,255,255,0.05)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: "20px",
  padding: "18px",
  marginBottom: "18px",
};

const counterNumber = {
  fontSize: "28px",
  fontWeight: "900",
  marginBottom: "6px",
};

const counterText = {
  color: "rgba(255,255,255,0.68)",
  marginBottom: "12px",
};

const barTrack = {
  width: "100%",
  height: "10px",
  background: "rgba(255,255,255,0.12)",
  borderRadius: "999px",
  overflow: "hidden",
};

const barFill = {
  height: "100%",
  background: "white",
  borderRadius: "999px",
};
