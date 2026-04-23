export const dynamic = "force-dynamic";

import Navbar from "../../components/Navbar";

export default function PricingPage() {
  return (
    <main style={main}>
      <Navbar />

      <div style={container}>
        <div style={header}>
          <div style={eyebrow}>Membership Plans</div>
          <h1 style={title}>Choose your access level</h1>
          <p style={subtitle}>
            Start simple or unlock the full system. Upgrade anytime.
          </p>
        </div>

        <div style={grid}>
          {/* NUTRITION */}
          <section style={card}>
            <h2 style={planTitle}>Nutrition</h2>
            <div style={price}>€19.99<span style={priceSmall}>/mo</span></div>

            <ul style={list}>
              <li>Meal plans</li>
              <li>Recipes</li>
              <li>Nutrition guidance</li>
              <li>No gym required</li>
            </ul>

            <a href="/signup" style={button}>
              Start Nutrition
            </a>
          </section>

          {/* FULL ACCESS */}
          <section style={{ ...card, ...featured }}>
            <div style={badge}>🔥 Best Value</div>

            <h2 style={planTitle}>Full Access</h2>
            <div style={price}>€29.99<span style={priceSmall}>/mo</span></div>

            <ul style={list}>
              <li>Everything in Nutrition</li>
              <li>Workouts & programs</li>
              <li>Plan builder</li>
              <li>Progress tracking</li>
            </ul>

            <a href="/signup" style={{ ...button, ...buttonFeatured }}>
              Unlock Everything
            </a>
          </section>

          {/* VIP */}
          <section style={card}>
            <h2 style={planTitle}>VIP</h2>
            <div style={price}>€99<span style={priceSmall}>/mo</span></div>

            <ul style={list}>
              <li>Everything in Full Access</li>
              <li>Monthly coaching call</li>
              <li>Priority support</li>
            </ul>

            <a href="/signup" style={button}>
              Go VIP
            </a>
          </section>

          {/* COACHING */}
          <section style={card}>
            <h2 style={planTitle}>Coaching</h2>
            <div style={price}>€349<span style={priceSmall}>/mo</span></div>

            <ul style={list}>
              <li>Everything in VIP</li>
              <li>Weekly 1-on-1 calls</li>
              <li>Direct support</li>
              <li>Fully custom plan</li>
            </ul>

            <a href="/signup" style={button}>
              Start Coaching
            </a>
          </section>
        </div>
      </div>
    </main>
  );
}
