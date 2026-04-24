"use client";

import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

const goalCards = [
  {
    title: "Lose Fat",
    text: "Drop body fat with structure, high-protein meals, and training that fits real life.",
  },
  {
    title: "Build Muscle",
    text: "Progressive workouts and nutrition support for a stronger, more athletic physique.",
  },
  {
    title: "Tone & Shape",
    text: "A balanced route for visible shape, better consistency, and a more confident body.",
  },
  {
    title: "Couple Transformation",
    text: "Train, eat, and stay accountable together with a system designed for couples.",
  },
];

const pricingPlans = [
  {
    name: "Nutrition",
    price: "€19.99/mo",
    points: ["Meal plans", "Recipes", "Nutrition guidance", "Perfect without gym focus"],
    cta: "Start Nutrition",
    featured: false,
  },
  {
    name: "Full Access",
    price: "€29.99/mo",
    points: ["Everything in Nutrition", "Workouts & programs", "Plan builder", "Progress tracking"],
    cta: "Unlock Everything",
    featured: true,
  },
  {
    name: "VIP",
    price: "€99/mo",
    points: ["Everything in Full Access", "Monthly coaching call", "Priority support"],
    cta: "Go VIP",
    featured: false,
  },
  {
    name: "Coaching",
    price: "€349/mo",
    points: ["Everything in VIP", "Weekly 1-on-1 calls", "Direct support", "Coaching by Niels & Rosanna"],
    cta: "Start Coaching",
    featured: false,
  },
];

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main style={main}>
      <style jsx global>{`
        @keyframes floatImage {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }

        @keyframes softGlow {
          0% { opacity: 0.55; }
          50% { opacity: 0.9; }
          100% { opacity: 0.55; }
        }
      `}</style>

      <Navbar />

      <section
        style={{
          ...heroWrap,
          opacity: loaded ? 1 : 0,
          transform: loaded ? "translateY(0px)" : "translateY(40px)",
          transition: "all 1s ease",
        }}
      >
        <div>
          <div style={badgeStyle}>Premium fitness system for individuals and couples</div>

          <h1 style={heroTitle}>
            Build the body, confidence, and routine you actually want.
          </h1>

          <p style={heroText}>
            Fit Couple Club combines training, nutrition, recipes, progress tools,
            and couple accountability into one clear lifestyle system.
          </p>

          <div style={heroButtonRow}>
            <a href="/signup" style={primaryButton}>Start Your Journey</a>
            <a href="#pricing" style={secondaryButton}>View Plans</a>
          </div>

          <div style={trustRow}>
            <span>12+ years together</span>
            <span>Gym lifestyle</span>
            <span>Nutrition focused</span>
          </div>
        </div>

        <div style={heroImageWrap}>
          <div style={heroGlow} />

          <img
            src="/couple-pictures/DJI-0579.jpg"
            alt=""
            style={heroBgImage}
          />

          <img
            src="/couple-pictures/DJI-0579.jpg"
            alt="Fit Couple Club"
            style={heroMainImage}
          />

          <div style={imageOverlay}>
            <div style={overlayTitle}>Solo or together</div>
            <div style={overlayText}>
              Built around real life, real discipline, and real routines.
            </div>
          </div>
        </div>
      </section>

      <section id="features" style={sectionWrap}>
        <div style={sectionHeader}>
          <div style={eyebrow}>How It Works</div>
          <h2 style={sectionTitle}>Simple structure. Stronger results.</h2>
        </div>

        <div style={featureGrid}>
          {[
            ["01", "Choose your goal", "Lose fat, build muscle, tone, reset, or transform as a couple."],
            ["02", "Follow the system", "Get workouts, food structure, recipes, and progress tools."],
            ["03", "Stay consistent", "Use the platform to remove guessing and stay on track."],
            ["04", "Upgrade support", "Choose higher accountability when you want more guidance."],
          ].map(([number, title, text]) => (
            <div key={title} style={featureCard}>
              <div style={featureNumber}>{number}</div>
              <h3 style={featureTitle}>{title}</h3>
              <p style={featureText}>{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={splitSection}>
        <div style={luxuryImageCard}>
          <img
            src="/couple-pictures/DJI-0697.jpg"
            alt="Niels and Rosanna"
            style={sectionImage}
          />
        </div>

        <div>
          <div style={eyebrow}>About Us</div>
          <h2 style={sectionTitle}>Built from real experience, not theory.</h2>
          <p style={sectionText}>
            We have been together for over 12 years. We train together, eat together,
            and built our bodies and lifestyle side by side.
          </p>
          <p style={sectionText}>
            Rosanna’s journey gave her deep real-world knowledge about food,
            balance, healthy eating, and recovery.
          </p>
          <p style={sectionText}>
            Niels has trained since he was 15 and built years of discipline,
            structure, and athletic lifestyle experience.
          </p>
        </div>
      </section>

      <section style={sectionWrap}>
        <div style={sectionHeader}>
          <div style={eyebrow}>Choose Your Goal</div>
          <h2 style={sectionTitle}>Plans built around what people actually want.</h2>
        </div>

        <div style={goalGrid}>
          {goalCards.map((goal) => (
            <div key={goal.title} style={goalCard}>
              <h3 style={goalTitle}>{goal.title}</h3>
              <p style={goalText}>{goal.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={splitSection}>
        <div>
          <div style={eyebrow}>Couple Mode</div>
          <h2 style={sectionTitle}>The journey is easier together.</h2>
          <p style={sectionText}>
            For couples who want to train together, eat better together, and keep
            each other accountable, Couple Mode makes the process more enjoyable
            and more consistent.
          </p>
          <p style={sectionText}>
            It turns fitness into a shared lifestyle instead of random workouts
            and disconnected meal plans.
          </p>
        </div>

        <div style={luxuryImageCard}>
          <img
            src="/couple-pictures/DJI-0773.jpg"
            alt="Couple transformation"
            style={sectionImage}
          />
        </div>
      </section>

      <section id="pricing" style={sectionWrap}>
        <div style={sectionHeader}>
          <div style={eyebrow}>Membership Plans</div>
          <h2 style={sectionTitle}>Start where you are.</h2>
          <p style={sectionIntro}>
            Choose nutrition only, unlock the full platform, or get higher-touch support.
          </p>
        </div>

        <div style={pricingGrid}>
          {pricingPlans.map((plan) => (
            <div
              key={plan.name}
              style={{
                ...pricingCard,
                ...(plan.featured ? pricingCardFeatured : {}),
              }}
            >
              {plan.featured && <div style={bestValue}>🔥 Best Value</div>}

              <div>
                <h3 style={pricingTitle}>{plan.name}</h3>
                <div style={pricingPrice}>{plan.price}</div>

                <ul style={pricingList}>
                  {plan.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>

              <a
                href="/signup"
                style={{
                  ...pricingButton,
                  ...(plan.featured ? pricingButtonFeatured : {}),
                }}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </section>

      <footer style={footer}>
        © Fit Couple Club — Build your body, health, and lifestyle solo or as a team.
      </footer>
    </main>
  );
}

const main = {
  minHeight: "100vh",
  background: "#050505",
  color: "white",
};

const heroWrap = {
  maxWidth: "1220px",
  margin: "0 auto",
  padding: "100px 24px 110px",
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
  gap: "54px",
  alignItems: "center",
};

const badgeStyle = {
  display: "inline-block",
  padding: "10px 16px",
  border: "1px solid rgba(250,204,21,0.35)",
  borderRadius: "999px",
  color: "#facc15",
  fontSize: "13px",
  fontWeight: "800",
  marginBottom: "22px",
};

const heroTitle = {
  fontSize: "clamp(46px, 7vw, 82px)",
  lineHeight: 0.98,
  letterSpacing: "-0.04em",
  margin: "0 0 24px",
  fontWeight: "950",
};

const heroText = {
  fontSize: "20px",
  lineHeight: 1.75,
  color: "rgba(255,255,255,0.72)",
  maxWidth: "720px",
  marginBottom: "34px",
};

const heroButtonRow = {
  display: "flex",
  gap: "14px",
  flexWrap: "wrap",
  marginBottom: "24px",
};

const primaryButton = {
  background: "#facc15",
  color: "black",
  padding: "16px 26px",
  borderRadius: "14px",
  textDecoration: "none",
  fontWeight: "900",
};

const secondaryButton = {
  border: "1px solid rgba(255,255,255,0.18)",
  color: "white",
  padding: "16px 26px",
  borderRadius: "14px",
  textDecoration: "none",
  fontWeight: "800",
  background: "rgba(255,255,255,0.04)",
};

const trustRow = {
  display: "flex",
  gap: "12px",
  flexWrap: "wrap",
  color: "rgba(255,255,255,0.62)",
  fontSize: "14px",
};

const heroImageWrap = {
  height: "560px",
  borderRadius: "34px",
  overflow: "hidden",
  position: "relative",
  border: "1px solid rgba(255,255,255,0.12)",
  boxShadow: "0 30px 100px rgba(0,0,0,0.55)",
  background: "radial-gradient(circle at center, rgba(250,204,21,0.1), transparent 70%)",
};

const heroGlow = {
  position: "absolute",
  inset: 0,
  background:
    "radial-gradient(circle at 50% 45%, rgba(250,204,21,0.18), transparent 48%)",
  animation: "softGlow 5s ease-in-out infinite",
  zIndex: 1,
};

const heroBgImage = {
  position: "absolute",
  inset: 0,
  width: "100%",
  height: "100%",
  objectFit: "cover",
  filter: "blur(32px) brightness(0.55)",
  transform: "scale(1.22)",
  zIndex: 0,
};

const heroMainImage = {
  position: "relative",
  zIndex: 2,
  width: "78%",
  height: "88%",
  objectFit: "cover",
  borderRadius: "26px",
  margin: "34px auto 0",
  display: "block",
  boxShadow: "0 24px 70px rgba(0,0,0,0.65)",
  animation: "floatImage 6s ease-in-out infinite",
};

const imageOverlay = {
  position: "absolute",
  zIndex: 3,
  left: "22px",
  right: "22px",
  bottom: "22px",
  padding: "18px",
  borderRadius: "20px",
  background: "rgba(0,0,0,0.58)",
  border: "1px solid rgba(255,255,255,0.14)",
  backdropFilter: "blur(10px)",
};

const overlayTitle = {
  fontSize: "22px",
  fontWeight: "900",
  marginBottom: "6px",
};

const overlayText = {
  color: "rgba(255,255,255,0.72)",
  lineHeight: 1.6,
};

const sectionWrap = {
  maxWidth: "1220px",
  margin: "0 auto",
  padding: "0 24px 110px",
};

const sectionHeader = {
  maxWidth: "850px",
  marginBottom: "34px",
};

const eyebrow = {
  fontSize: "13px",
  textTransform: "uppercase",
  letterSpacing: "0.18em",
  color: "rgba(255,255,255,0.45)",
  marginBottom: "10px",
};

const sectionTitle = {
  fontSize: "clamp(34px, 4vw, 52px)",
  lineHeight: 1.05,
  margin: 0,
  fontWeight: "950",
  letterSpacing: "-0.03em",
};

const sectionIntro = {
  color: "rgba(255,255,255,0.68)",
  lineHeight: 1.8,
  marginTop: "16px",
  fontSize: "18px",
};

const featureGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
  gap: "20px",
};

const featureCard = {
  background:
    "linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.03))",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: "26px",
  padding: "28px",
};

const featureNumber = {
  color: "#facc15",
  fontSize: "13px",
  fontWeight: "900",
  letterSpacing: "0.14em",
  marginBottom: "18px",
};

const featureTitle = {
  fontSize: "24px",
  margin: "0 0 12px",
  fontWeight: "900",
};

const featureText = {
  color: "rgba(255,255,255,0.68)",
  lineHeight: 1.75,
  margin: 0,
};

const splitSection = {
  maxWidth: "1220px",
  margin: "0 auto",
  padding: "0 24px 110px",
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
  gap: "46px",
  alignItems: "center",
};

const luxuryImageCard = {
  height: "500px",
  borderRadius: "34px",
  overflow: "hidden",
  border: "1px solid rgba(255,255,255,0.12)",
  boxShadow: "0 24px 80px rgba(0,0,0,0.38)",
};

const sectionImage = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  display: "block",
};

const sectionText = {
  color: "rgba(255,255,255,0.72)",
  lineHeight: 1.85,
  fontSize: "17px",
};

const goalGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
  gap: "20px",
};

const goalCard = {
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: "26px",
  padding: "28px",
  minHeight: "180px",
};

const goalTitle = {
  fontSize: "24px",
  fontWeight: "900",
  margin: "0 0 12px",
};

const goalText = {
  color: "rgba(255,255,255,0.68)",
  lineHeight: 1.75,
  margin: 0,
};

const pricingGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
  gap: "20px",
  alignItems: "stretch",
};

const pricingCard = {
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: "26px",
  padding: "30px",
  minHeight: "470px",
  position: "relative",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
};

const pricingCardFeatured = {
  background: "rgba(250,204,21,0.08)",
  border: "1px solid rgba(250,204,21,0.45)",
};

const bestValue = {
  position: "absolute",
  top: "-11px",
  right: "14px",
  background: "#facc15",
  color: "black",
  fontSize: "12px",
  fontWeight: "900",
  padding: "6px 10px",
  borderRadius: "9px",
};

const pricingTitle = {
  fontSize: "28px",
  margin: "0 0 10px",
  fontWeight: "900",
};

const pricingPrice = {
  fontSize: "42px",
  fontWeight: "950",
  marginBottom: "22px",
  lineHeight: 1.15,
};

const pricingList = {
  paddingLeft: "18px",
  lineHeight: 1.9,
  margin: 0,
  color: "rgba(255,255,255,0.78)",
};

const pricingButton = {
  display: "block",
  width: "100%",
  textAlign: "center",
  textDecoration: "none",
  padding: "14px 18px",
  borderRadius: "14px",
  fontWeight: "900",
  background: "white",
  color: "black",
  marginTop: "28px",
  boxSizing: "border-box",
};

const pricingButtonFeatured = {
  background: "#facc15",
};

const footer = {
  borderTop: "1px solid rgba(255,255,255,0.08)",
  padding: "30px 24px",
  color: "rgba(255,255,255,0.58)",
  textAlign: "center",
};
