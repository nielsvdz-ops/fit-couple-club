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
          {/* NUTRITION */}
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

            <a href="/signup" style={button}>Start Nutrition</a>
          </section>

          {/* FULL ACCESS */}
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

          {/* VIP */}
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

            <a href="/signup" style={button}>Go VIP</a>
          </section>

          {/* COACHING */}
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
                <li>✔ Coaching by you</li>
              </ul>

              <p style={desc}>
                Fastest possible results. Fully guided.
              </p>
            </div>

            <a href="/signup" style={button}>Start Coaching</a>
          </section>
        </div>
      </div>
    </main>
  );
}
