export const dynamic = "force-dynamic";

import Navbar from "../../components/Navbar";

export default function PricingPage() {
  return (
    <main style={main}>
      <Navbar />

      <div style={container}>
        <div style={header}>
          <div style={eyebrow}>Transform Your Body</div>
          <h1 style={title}>Stop guessing. Follow a system.</h1>
          <p style={subtitle}>
            Get exact daily routines, groceries, workouts, and structure.
            Built for real life — not fitness influencers.
          </p>
        </div>

        <div style={grid}>
          <section style={card}>
            <div>
              <h2 style={planTitle}>Nutrition</h2>
              <div style={price}>
                €19.99<span style={priceSmall}>/mo</span>
              </div>

              <ul style={list}>
                <li>✔ 5 body goals</li>
                <li>✔ 150 daily nutrition routines</li>
                <li>✔ Weekly recipes & structure</li>
                <li>✔ Personalized calories & macros</li>
                <li>✔ Smart grocery generator</li>
                <li>✔ Works for 1 or 2 people</li>
              </ul>

              <p style={desc}>
                Know exactly what to eat and what to buy — every day.
              </p>
            </div>

            <a href="/signup" style={button}>
              Start Nutrition
            </a>
          </section>

          <section style={{ ...card, ...featured }}>
            <div style={badge}>🔥 Best Value</div>

            <div>
              <h2 style={planTitle}>Full Access</h2>
              <div style={price}>
                €29.99<span style={priceSmall}>/mo</span>
              </div>

              <ul style={list}>
                <li>✔ Everything in Nutrition</li>
                <li>✔ Full workout system</li>
                <li>✔ Step-by-step programs</li>
                <li>✔ Exercise GIF guidance</li>
                <li>✔ Plan builder</li>
                <li>✔ Progress tracking</li>
              </ul>

              <p style={desc}>
                Full transformation system — training + nutrition combined.
              </p>
            </div>

            <a href="/signup" style={{ ...button, ...buttonFeatured }}>
              Unlock Everything
            </a>
          </section>

          <section style={card}>
            <div>
              <h2 style={planTitle}>VIP</h2>
              <div style={price}>
                €99<span style={priceSmall}>/mo</span>
              </div>

              <ul style={list}>
                <li>✔ Everything in Full Access</li>
                <li>✔ Monthly coaching call</li>
                <li>✔ Priority support</li>
                <li>✔ Strategy adjustments</li>
              </ul>

              <p style={desc}>
                For people who want guidance and accountability.
              </p>
            </div>

            <a href="/signup" style={button}>
              Go VIP
            </a>
          </section>

          <section style={card}>
            <div>
              <h2 style={planTitle}>Coaching</h2>
              <div style={price}>
                €349<span style={priceSmall}>/mo</span>
              </div>

              <ul style={list}>
                <li>✔ Everything in VIP</li>
                <li>✔ Weekly 1-on-1 calls</li>
                <li>✔ Fully custom plan</li>
                <li>✔ Direct support</li>
                <li>✔ Coaching by Niels & Rosanna</li>
              </ul>

              <p style={desc}>Fastest possible results. Fully guided.</p>
            </div>

            <a href="/signup" style={button}>
              Start Coaching
            </a>
          </section>
        </div>
      </div>
    </main>
  );
}

const main = {
  minHeight: "100vh",
  background: "#0a0a0a",
  color: "white",
};

const container = {
  maxWidth: "1200px",
  margin: "0 auto",
  padding: "60px 24px 90px",
};

const header = {
  marginBottom: "40px",
};

const eyebrow = {
  fontSize: "12px",
  textTransform: "uppercase",
  letterSpacing: "0.16em",
  color: "rgba(255,255,255,0.45)",
  marginBottom: "10px",
};

const title = {
  fontSize: "52px",
  fontWeight: "900",
  margin: "0 0 10px 0",
  lineHeight: 1.05,
};

const subtitle = {
  color: "rgba(255,255,255,0.7)",
  fontSize: "18px",
  lineHeight: 1.7,
  maxWidth: "720px",
};

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
  gap: "22px",
  alignItems: "stretch",
};

const card = {
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: "24px",
  padding: "26px",
  minHeight: "420px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  position: "relative",
};

const featured = {
  border: "1px solid rgba(250,204,21,0.5)",
  background: "rgba(250,204,21,0.08)",
};

const badge = {
  position: "absolute",
  top: "-10px",
  right: "12px",
  background: "#facc15",
  color: "black",
  fontSize: "12px",
  fontWeight: "800",
  padding: "5px 10px",
  borderRadius: "8px",
};

const planTitle = {
  fontSize: "26px",
  fontWeight: "800",
  margin: "0 0 10px 0",
};

const price = {
  fontSize: "42px",
  fontWeight: "900",
  marginBottom: "18px",
  lineHeight: 1.15,
};

const priceSmall = {
  fontSize: "16px",
  opacity: 0.7,
  fontWeight: "500",
};

const list = {
  paddingLeft: "18px",
  lineHeight: 1.9,
  color: "rgba(255,255,255,0.78)",
  margin: 0,
};

const desc = {
  marginTop: "18px",
  color: "rgba(255,255,255,0.66)",
  lineHeight: 1.7,
};

const button = {
  marginTop: "28px",
  padding: "14px 18px",
  borderRadius: "12px",
  background: "white",
  color: "black",
  textAlign: "center",
  textDecoration: "none",
  fontWeight: "800",
  display: "block",
};

const buttonFeatured = {
  background: "#facc15",
};
