export const dynamic = "force-dynamic";

import Navbar from "../../components/Navbar";

export default function PricingPage() {
  return (
    <main style={main}>
      <Navbar />

      <div style={container}>
        <div style={header}>
          <div style={eyebrow}>Couple Transformation System</div>
          <h1 style={title}>
            Stop starting over. <br /> Build a system that actually works.
          </h1>

          <p style={subtitle}>
            This is not another fitness app. You get a complete structure for
            training, food, groceries, and couple accountability — so you never
            have to think “what should we do today?” again.
          </p>
        </div>

        <div style={hook}>
          <div style={hookTitle}>💡 Why couples fail</div>
          <p style={hookText}>
            Most couples do not fail because of discipline. They fail because
            there is no shared plan, food decisions happen too late, and one
            person often carries the motivation alone.
          </p>

          <ul style={list}>
            <li>No shared plan</li>
            <li>Food decisions happen too late</li>
            <li>One person is motivated, the other is not</li>
            <li>No structure means no consistency</li>
          </ul>

          <p style={hookHighlight}>This system fixes all of that.</p>
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
                <li>✔ 150 daily routines</li>
                <li>✔ Weekly recipes</li>
                <li>✔ Smart grocery generator</li>
                <li>✔ Works for 1 or 2 people</li>
              </ul>

              <p style={desc}>
                You never have to think about food again. Just follow the
                structure.
              </p>
            </div>

            <a href="/signup" style={button}>
              Start Nutrition
            </a>
          </section>

          <section style={{ ...card, ...featured }}>
            <div style={badge}>🔥 Most Popular</div>

            <div>
              <h2 style={planTitle}>Full Access</h2>
              <div style={price}>
                €34.99<span style={priceSmall}>/mo</span>
              </div>

              <ul style={list}>
                <li>✔ Everything in Nutrition</li>
                <li>✔ Full workout system</li>
                <li>✔ Step-by-step programs</li>
                <li>✔ Exercise GIF guidance</li>
                <li>✔ Plan builder</li>
                <li>✔ Progress tracking</li>
                <li>✔ Couple Zone system</li>
              </ul>

              <p style={desc}>
                Complete transformation system. Training, food, structure, and
                accountability.
              </p>
            </div>

            <a href="/signup" style={{ ...button, ...buttonFeatured }}>
              Unlock Full System
            </a>
          </section>

          <section style={vipCard}>
            <div>
              <h2 style={planTitle}>VIP</h2>
              <div style={price}>
                €90<span style={priceSmall}>/mo</span>
              </div>

              <ul style={list}>
                <li>✔ Everything in Full Access</li>
                <li>✔ Monthly coaching call</li>
                <li>✔ Weekly check-in system</li>
                <li>✔ Personalized advice</li>
                <li>✔ Priority support</li>
                <li>✔ Strategy adjustments</li>
              </ul>

              <p style={desc}>
                You do not just follow a system — you get guided and corrected.
              </p>

              <div style={scarcity}>14/90 VIP spots taken — 76 left</div>
            </div>

            <a href="/signup" style={button}>
              Go VIP
            </a>
          </section>

          <section style={coachingCard}>
            <div>
              <h2 style={planTitle}>Coaching</h2>
              <div style={price}>
                €340<span style={priceSmall}>/mo</span>
              </div>

              <ul style={list}>
                <li>✔ Everything in VIP</li>
                <li>✔ Weekly 1-on-1 calls</li>
                <li>✔ Fully custom training plan</li>
                <li>✔ Fully custom nutrition direction</li>
                <li>✔ Direct support</li>
                <li>✔ Coaching by Niels & Rosanna</li>
              </ul>

              <p style={desc}>
                Fastest possible results. Full accountability. No guessing.
              </p>

              <div style={scarcity}>2/12 coaching spots taken — 10 left</div>
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
  maxWidth: "780px",
};

const hook = {
  marginBottom: "40px",
  padding: "24px",
  borderRadius: "20px",
  background: "rgba(250,204,21,0.06)",
  border: "1px solid rgba(250,204,21,0.22)",
};

const hookTitle = {
  fontSize: "22px",
  fontWeight: "900",
  marginBottom: "10px",
};

const hookText = {
  color: "rgba(255,255,255,0.72)",
  lineHeight: 1.8,
  maxWidth: "850px",
};

const hookHighlight = {
  fontWeight: "900",
  marginTop: "14px",
  color: "#facc15",
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
  minHeight: "520px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  position: "relative",
};

const featured = {
  border: "1px solid rgba(250,204,21,0.5)",
  background: "rgba(250,204,21,0.08)",
};

const vipCard = {
  ...card,
  background: "rgba(96,165,250,0.08)",
  border: "1px solid rgba(96,165,250,0.28)",
};

const coachingCard = {
  ...card,
  background:
    "linear-gradient(135deg, rgba(255,255,255,0.11), rgba(255,255,255,0.04))",
  border: "1px solid rgba(255,255,255,0.22)",
};

const badge = {
  position: "absolute",
  top: "-10px",
  right: "12px",
  background: "#facc15",
  color: "black",
  fontSize: "12px",
  fontWeight: "900",
  padding: "5px 10px",
  borderRadius: "8px",
};

const planTitle = {
  fontSize: "26px",
  fontWeight: "900",
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

const scarcity = {
  marginTop: "14px",
  fontSize: "13px",
  color: "#facc15",
  fontWeight: "900",
};

const button = {
  marginTop: "28px",
  padding: "14px 18px",
  borderRadius: "12px",
  background: "white",
  color: "black",
  textAlign: "center",
  textDecoration: "none",
  fontWeight: "900",
  display: "block",
};

const buttonFeatured = {
  background: "#facc15",
};
