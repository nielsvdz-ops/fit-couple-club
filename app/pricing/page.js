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
            This is not another fitness app.  
            You get a **complete structure for training, food, groceries, and
            couple accountability** — so you never have to think “what should we
            do today?” again.
          </p>
        </div>

        {/* 🔥 COUPLE HOOK */}
        <div style={hook}>
          <div style={hookTitle}>💡 Why couples fail</div>
          <p style={hookText}>
            Most couples don’t fail because of discipline.  
            They fail because:
          </p>
          <ul style={list}>
            <li>No shared plan</li>
            <li>Food decisions happen too late</li>
            <li>One person is motivated, the other is not</li>
            <li>No structure = no consistency</li>
          </ul>

          <p style={hookHighlight}>
            This system fixes all of that.
          </p>
        </div>

        <div style={grid}>
          {/* NUTRITION */}
          <section style={card}>
            <div>
              <h2 style={planTitle}>Nutrition</h2>
              <div style={price}>€19.99<span style={priceSmall}>/mo</span></div>

              <ul style={list}>
                <li>✔ 5 body goals</li>
                <li>✔ 150 daily routines</li>
                <li>✔ Weekly recipes</li>
                <li>✔ Grocery generator</li>
                <li>✔ Works for 1 or 2 people</li>
              </ul>

              <p style={desc}>
                You never have to think about food again.  
                Just follow the structure.
              </p>
            </div>

            <a href="/signup" style={button}>Start Nutrition</a>
          </section>

          {/* FULL ACCESS */}
          <section style={{ ...card, ...featured }}>
            <div style={badge}>🔥 MOST POPULAR</div>

            <div>
              <h2 style={planTitle}>Full Access</h2>
              <div style={price}>€34.99<span style={priceSmall}>/mo</span></div>

              <ul style={list}>
                <li>✔ Everything in Nutrition</li>
                <li>✔ Full workout system</li>
                <li>✔ Step-by-step programs</li>
                <li>✔ Exercise GIF guidance</li>
                <li>✔ Plan builder</li>
                <li>✔ Progress tracking</li>
                <li>✔ Couple Zone system 🔥</li>
              </ul>

              <p style={desc}>
                Complete transformation system.  
                Training + food + structure + accountability.
              </p>
            </div>

            <a href="/signup" style={{ ...button, ...buttonFeatured }}>
              Unlock Full System
            </a>
          </section>

          {/* VIP */}
          <section style={vipCard}>
            <div>
              <h2 style={planTitle}>VIP</h2>
              <div style={price}>€90<span style={priceSmall}>/mo</span></div>

              <ul style={list}>
                <li>✔ Everything in Full Access</li>
                <li>✔ Monthly coaching call</li>
                <li>✔ Weekly check-in system</li>
                <li>✔ Personalized advice</li>
                <li>✔ Priority support</li>
              </ul>

              <p style={desc}>
                You don’t just follow a system —  
                you get guided and corrected.
              </p>

              <div style={scarcity}>
                Only limited VIP spots available.
              </div>
            </div>

            <a href="/signup" style={button}>Go VIP</a>
          </section>

          {/* COACHING */}
          <section style={coachingCard}>
            <div>
              <h2 style={planTitle}>Coaching</h2>
              <div style={price}>€340<span style={priceSmall}>/mo</span></div>

              <ul style={list}>
                <li>✔ Everything in VIP</li>
                <li>✔ Weekly 1-on-1 calls</li>
                <li>✔ Fully custom plan</li>
                <li>✔ Direct support</li>
                <li>✔ Personal coaching</li>
              </ul>

              <p style={desc}>
                Fastest possible results.  
                Full accountability. No guessing.
              </p>

              <div style={scarcity}>
                Very limited coaching spots.
              </div>
            </div>

            <a href="/signup" style={button}>Start Coaching</a>
          </section>
        </div>
      </div>
    </main>
  );
}

/* --- styles (keep yours + add these) --- */

const hook = {
  marginBottom: "40px",
  padding: "24px",
  borderRadius: "20px",
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.08)",
};

const hookTitle = { fontSize: "20px", fontWeight: "800" };
const hookText = { color: "rgba(255,255,255,0.7)" };
const hookHighlight = { fontWeight: "800", marginTop: "10px" };

const scarcity = {
  marginTop: "14px",
  fontSize: "13px",
  color: "#facc15",
};

/* keep ALL your original styles below */
