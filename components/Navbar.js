# Fit Couple Club — Refined Full Build Pack

This is the fine-tuned version of everything so far.

It includes:

* stronger homepage positioning
* clearer couple-story branding
* cleaner navigation
* better member-area structure
* more premium page copy
* logic system direction
* member pages refined so they feel more like a real platform
* image placeholders where you can later replace with your own couple photos

Use this as your new master version.

---

# 1) `components/Navbar.js`

```javascript
export default function Navbar() {
  return (
    <header
      style={{
        padding: "18px 28px",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        position: "sticky",
        top: 0,
        background: "rgba(10,10,10,0.9)",
        backdropFilter: "blur(10px)",
        zIndex: 50,
      }}
    >
      <a
        href="/"
        style={{
          fontSize: "24px",
          fontWeight: "800",
          color: "white",
          textDecoration: "none",
          letterSpacing: "-0.02em",
        }}
      >
        Fit Couple Club
      </a>

      <nav style={{ display: "flex", gap: "18px", alignItems: "center", flexWrap: "wrap" }}>
        <a href="/about" style={navLink}>About</a>
        <a href="/plan-builder" style={navLink}>Plan Builder</a>
        <a href="/#features" style={navLink}>Features</a>
        <a href="/#pricing" style={navLink}>Pricing</a>
        <a href="/login" style={navLink}>Login</a>
        <a href="/signup" style={ctaLink}>Join Now</a>
      </nav>
    </header>
  );
}

const navLink = {
  color: "white",
  textDecoration: "none",
  fontSize: "15px",
  opacity: 0.9,
};

const ctaLink = {
  background: "white",
  color: "black",
  padding: "10px 16px",
  borderRadius: "12px",
  textDecoration: "none",
  fontWeight: "700",
};
```

---

# 2) `app/layout.js`

```javascript
export const metadata = {
  title: "Fit Couple Club",
  description: "Train together. Eat better. Build your dream body solo or as a team.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          fontFamily: "Arial, sans-serif",
          background: "#0a0a0a",
          color: "white",
        }}
      >
        {children}
      </body>
    </html>
  );
}
```

---

# 3) `app/page.js`

```javascript
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <main style={{ minHeight: "100vh", background: "#0a0a0a", color: "white" }}>
      <Navbar />

      <section
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "90px 24px 70px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "40px",
          alignItems: "center",
        }}
      >
        <div>
          <div style={badgeStyle}>Built for individuals and couples</div>
          <h1 style={heroTitleStyle}>
            Build your dream body. Solo or as a team.
          </h1>
          <p style={heroTextStyle}>
            Fit Couple Club helps people choose their goal, choose how many days per week they want to train, and follow a workout and nutrition structure that matches their body and lifestyle.
          </p>

          <div style={{ display: "flex", gap: "14px", flexWrap: "wrap", marginBottom: "24px" }}>
            <a href="/signup" style={primaryButton}>Start Your Journey</a>
            <a href="/plan-builder" style={secondaryButton}>Build Your Plan</a>
          </div>

          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            {[
              "Solo & Couple Mode",
              "Goal-Based Plans",
              "Choose Training Days",
              "Meal Structures & Recipes",
            ].map((item) => (
              <div key={item} style={pillStyle}>{item}</div>
            ))}
          </div>
        </div>

        <div style={imagePlaceholderStyle}>
          <div style={imageLabelStyle}>ADD_HERO_COUPLE_IMAGE</div>
        </div>
      </section>

      <section id="features" style={sectionWrap}>
        <div style={{ marginBottom: "28px" }}>
          <div style={eyebrowStyle}>How It Works</div>
          <h2 style={sectionTitleStyle}>A fitness system built around real life.</h2>
        </div>

        <div style={gridStyle}>
          {[
            {
              title: "Choose your goal",
              text: "Lose fat, build muscle, tone and shape your body, maintain a healthy athletic lifestyle, or start with a beginner reset.",
            },
            {
              title: "Choose solo or couple mode",
              text: "Use the platform alone or with your partner to stay accountable and motivated together.",
            },
            {
              title: "Choose your training days",
              text: "Select how many days per week you want to train and your workout structure adapts to that schedule.",
            },
            {
              title: "Follow your plan",
              text: "Get your matching workout direction, meal structure, recipes, and transformation systems.",
            },
          ].map((item) => (
            <div key={item.title} style={cardStyle}>
              <h3 style={{ fontSize: "24px", marginBottom: "12px" }}>{item.title}</h3>
              <p style={{ color: "rgba(255,255,255,0.7)", lineHeight: 1.8 }}>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={sectionWrapTwoCol}>
        <div style={imagePlaceholderStyle}>
          <div style={imageLabelStyle}>ADD_ABOUT_COUPLE_IMAGE</div>
        </div>

        <div>
          <div style={eyebrowStyle}>About Us</div>
          <h2 style={sectionTitleStyle}>Built from real experience.</h2>
          <p style={sectionTextStyle}>
            We have been together for over 12 years. We train together, eat together, and built our bodies and lifestyle side by side.
          </p>
          <p style={sectionTextStyle}>
            Rosanna overcame anorexia after struggling with an eating disorder for 7 years when she was younger. That journey gave her deep practical knowledge about food, healthy eating, balance, and recovery.
          </p>
          <p style={sectionTextStyle}>
            Niels has been in the gym since he was 15 years old and never stopped. Over the years, we built strong athletic physiques and a healthy lifestyle with more energy, power, confidence, and discipline.
          </p>
          <p style={sectionTextStyle}>
            Now we want to help individuals and couples start their own journey and achieve the body and lifestyle they want — alone or as a team.
          </p>
        </div>
      </section>

      <section style={sectionWrap}>
        <div style={{ marginBottom: "28px" }}>
          <div style={eyebrowStyle}>Choose Your Goal</div>
          <h2 style={sectionTitleStyle}>Plans built around what people actually want.</h2>
        </div>

        <div style={gridStyle}>
          {[
            "Lose Fat",
            "Build Muscle",
            "Tone & Shape Body",
            "Maintain Athletic Lifestyle",
            "Beginner Body Reset",
            "Couple Transformation",
          ].map((goal) => (
            <div key={goal} style={cardStyle}>{goal}</div>
          ))}
        </div>
      </section>

      <section style={sectionWrap}>
        <div style={{ marginBottom: "28px" }}>
          <div style={eyebrowStyle}>Body Focus</div>
          <h2 style={sectionTitleStyle}>Extra focus where people want it most.</h2>
        </div>

        <div style={gridStyle}>
          {["Booty", "Abs", "Legs", "Upper Body", "Full Body", "Couple Workouts"].map((focus) => (
            <div key={focus} style={cardStyle}>{focus}</div>
          ))}
        </div>
      </section>

      <section id="pricing" style={sectionWrap}>
        <div style={{ marginBottom: "28px" }}>
          <div style={eyebrowStyle}>Membership Plans</div>
          <h2 style={sectionTitleStyle}>Start where you are.</h2>
        </div>

        <div style={pricingGridStyle}>
          {[
            {
              name: "Starter",
              price: "€19/mo",
              points: ["Basic workout access", "Nutrition guides", "Starter recipe access"],
            },
            {
              name: "Premium",
              price: "€39/mo",
              points: ["Everything in Starter", "Goal-based plans", "Couple mode", "Programs & challenges"],
            },
            {
              name: "VIP",
              price: "€99/mo",
              points: ["Everything in Premium", "Priority support", "Higher-level accountability"],
            },
          ].map((plan) => (
            <div
              key={plan.name}
              style={{
                background: plan.name === "Premium" ? "white" : "rgba(255,255,255,0.04)",
                color: plan.name === "Premium" ? "black" : "white",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "24px",
                padding: "30px",
              }}
            >
              <h3 style={{ fontSize: "28px", marginBottom: "10px" }}>{plan.name}</h3>
              <div style={{ fontSize: "42px", fontWeight: "800", marginBottom: "20px" }}>{plan.price}</div>
              <ul style={{ paddingLeft: "18px", lineHeight: 1.9, marginBottom: "24px" }}>
                {plan.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
              <a href="/signup" style={{
                display: "block",
                width: "100%",
                textAlign: "center",
                textDecoration: "none",
                padding: "14px 18px",
                borderRadius: "14px",
                fontWeight: "700",
                background: plan.name === "Premium" ? "black" : "white",
                color: plan.name === "Premium" ? "white" : "black",
              }}>
                Choose Plan
              </a>
            </div>
          ))}
        </div>
      </section>

      <section style={sectionWrapTwoCol}>
        <div>
          <div style={eyebrowStyle}>Couple Mode</div>
          <h2 style={sectionTitleStyle}>The journey is easier together.</h2>
          <p style={sectionTextStyle}>
            For couples who want to train together, eat better together, and keep each other accountable, Couple Mode makes the process more enjoyable and more consistent.
          </p>
          <p style={sectionTextStyle}>
            This is what makes Fit Couple Club different from normal fitness websites. It becomes a lifestyle system instead of just random workouts.
          </p>
        </div>

        <div style={imagePlaceholderStyle}>
          <div style={imageLabelStyle}>ADD_COUPLE_MODE_IMAGE</div>
        </div>
      </section>

      <footer style={{ borderTop: "1px solid rgba(255,255,255,0.08)", padding: "30px 24px", color: "rgba(255,255,255,0.58)", textAlign: "center" }}>
        © Fit Couple Club — Build your dream body solo or as a team.
      </footer>
    </main>
  );
}

const badgeStyle = {
  display: "inline-block",
  padding: "10px 18px",
  border: "1px solid rgba(255,255,255,0.15)",
  borderRadius: "999px",
  fontSize: "14px",
  color: "rgba(255,255,255,0.8)",
  marginBottom: "24px",
};

const eyebrowStyle = {
  fontSize: "13px",
  textTransform: "uppercase",
  letterSpacing: "0.18em",
  color: "rgba(255,255,255,0.5)",
};

const heroTitleStyle = {
  fontSize: "clamp(42px, 7vw, 76px)",
  lineHeight: 1.02,
  margin: "0 0 24px",
  maxWidth: "960px",
  fontWeight: "800",
  letterSpacing: "-0.03em",
};

const heroTextStyle = {
  fontSize: "20px",
  lineHeight: 1.7,
  color: "rgba(255,255,255,0.72)",
  maxWidth: "780px",
  marginBottom: "36px",
};

const sectionTitleStyle = {
  fontSize: "44px",
  margin: "10px 0 0",
};

const sectionTextStyle = {
  color: "rgba(255,255,255,0.72)",
  lineHeight: 1.8,
  marginBottom: "14px",
};

const primaryButton = {
  background: "white",
  color: "black",
  padding: "16px 28px",
  borderRadius: "14px",
  textDecoration: "none",
  fontWeight: "700",
};

const secondaryButton = {
  border: "1px solid rgba(255,255,255,0.2)",
  color: "white",
  padding: "16px 28px",
  borderRadius: "14px",
  textDecoration: "none",
  fontWeight: "700",
};

const pillStyle = {
  border: "1px solid rgba(255,255,255,0.08)",
  background: "rgba(255,255,255,0.04)",
  padding: "12px 16px",
  borderRadius: "999px",
  color: "rgba(255,255,255,0.78)",
  fontSize: "14px",
};

const cardStyle = {
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: "22px",
  padding: "28px",
};

const gridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
  gap: "20px",
};

const pricingGridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
  gap: "20px",
};

const imagePlaceholderStyle = {
  background: "rgba(255,255,255,0.04)",
  border: "1px dashed rgba(255,255,255,0.18)",
  borderRadius: "28px",
  minHeight: "420px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  padding: "20px",
};

const imageLabelStyle = {
  color: "rgba(255,255,255,0.45)",
  fontSize: "18px",
  letterSpacing: "0.08em",
};

const sectionWrap = {
  maxWidth: "1200px",
  margin: "0 auto",
  padding: "0 24px 90px",
};

const sectionWrapTwoCol = {
  maxWidth: "1200px",
  margin: "0 auto",
  padding: "0 24px 90px",
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
  gap: "30px",
  alignItems: "center",
};
```

---

# 4) `app/about/page.js`

```javascript
import Navbar from "../../components/Navbar";

export default function AboutPage() {
  return (
    <main style={main}>
      <Navbar />
      <section style={twoColWrap}>
        <div>
          <div style={eyebrowStyle}>About Us</div>
          <h1 style={pageTitle}>This platform comes from real life.</h1>
          <p style={textStyle}>We have been together for over 12 years. We train together, eat together, and do everything together.</p>
          <p style={textStyle}>Rosanna struggled with an eating disorder for 7 years when she was younger and beat anorexia. That journey gave her deep real-world knowledge about food, healthy eating, balance, and recovery.</p>
          <p style={textStyle}>Niels has been in the gym since he was 15 and never stopped. Over the years, we built strong athletic physiques and a healthy lifestyle that gives us more energy, discipline, strength, and confidence.</p>
          <p style={textStyle}>Now we want to help individuals and couples start their own journey and achieve their dream body — alone or together.</p>
        </div>
        <div style={imagePlaceholderStyle}><div style={imageLabelStyle}>ADD_ABOUT_COUPLE_IMAGE</div></div>
      </section>
    </main>
  );
}

const main = { minHeight: "100vh", background: "#0a0a0a", color: "white" };
const twoColWrap = { maxWidth: "1100px", margin: "0 auto", padding: "80px 24px 100px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "36px", alignItems: "center" };
const eyebrowStyle = { fontSize: "13px", textTransform: "uppercase", letterSpacing: "0.18em", color: "rgba(255,255,255,0.5)" };
const pageTitle = { fontSize: "54px", margin: "10px 0 20px" };
const textStyle = { color: "rgba(255,255,255,0.72)", lineHeight: 1.85, marginBottom: "14px" };
const imagePlaceholderStyle = { background: "rgba(255,255,255,0.04)", border: "1px dashed rgba(255,255,255,0.18)", borderRadius: "28px", minHeight: "420px", display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "20px" };
const imageLabelStyle = { color: "rgba(255,255,255,0.45)", fontSize: "18px", letterSpacing: "0.08em" };
```

---

# 5) `lib/planLogic.js`

```javascript
export const GOALS = [
  "Lose Fat",
  "Build Muscle",
  "Tone & Shape Body",
  "Maintain Athletic Lifestyle",
  "Beginner Body Reset",
];

export const MODES = ["Solo", "Couple"];

export const FOCUS_AREAS = [
  "Booty",
  "Abs",
  "Legs",
  "Upper Body",
  "Full Body",
  "Couple Workouts",
];

export const TRAINING_DAYS = [2, 3, 4, 5, 6];

export function generatePlan({ goal, mode, focus, days }) {
  const parsedDays = Number(days);
  return {
    goal,
    mode,
    focus,
    days: parsedDays,
    summary: `This ${parsedDays}-day ${mode.toLowerCase()} plan is built for ${goal.toLowerCase()} with extra focus on ${focus.toLowerCase()}.`,
    trainingSplit: getTrainingSplit(focus, parsedDays),
    nutrition: getNutritionDirection(goal),
  };
}

function getNutritionDirection(goal) {
  switch (goal) {
    case "Lose Fat":
      return {
        title: "Fat Loss Nutrition",
        description: "High protein, controlled calories, simple meals, and consistency-focused food choices.",
        example: [
          "Breakfast: Greek yogurt, berries, chia",
          "Lunch: Chicken, rice, vegetables",
          "Snack: Fruit + protein shake",
          "Dinner: Salmon, potatoes, greens",
        ],
      };
    case "Build Muscle":
      return {
        title: "Muscle Gain Nutrition",
        description: "Higher calories, strong protein base, more carbs around training, and better recovery support.",
        example: [
          "Breakfast: Oats, whey, banana, peanut butter",
          "Lunch: Beef, rice, avocado",
          "Snack: Greek yogurt + granola",
          "Dinner: Chicken pasta bowl",
        ],
      };
    case "Tone & Shape Body":
      return {
        title: "Tone & Shape Nutrition",
        description: "Balanced eating with enough protein and clean meals to support body composition and energy.",
        example: [
          "Breakfast: Eggs, sourdough, avocado",
          "Lunch: Chicken wrap + salad",
          "Snack: Protein smoothie",
          "Dinner: Fish, sweet potato, greens",
        ],
      };
    case "Maintain Athletic Lifestyle":
      return {
        title: "Athletic Lifestyle Nutrition",
        description: "Balanced structure that supports performance, energy, and long-term consistency.",
        example: [
          "Breakfast: Eggs + fruit",
          "Lunch: Chicken bowl",
          "Snack: Yogurt + nuts",
          "Dinner: Lean protein, rice, vegetables",
        ],
      };
    default:
      return {
        title: "Beginner Reset Nutrition",
        description: "Simple, repeatable meals with a strong protein base and easy food choices.",
        example: [
          "Breakfast: Yogurt + fruit",
          "Lunch: Chicken + rice",
          "Snack: Protein shake",
          "Dinner: Salmon + potatoes",
        ],
      };
  }
}

function getTrainingSplit(focus, days) {
  const plans = {
    Booty: {
      2: ["Day 1 — Glutes + Legs", "Day 2 — Upper Body + Glute Finisher"],
      3: ["Day 1 — Glutes Heavy", "Day 2 — Upper Body", "Day 3 — Glutes Volume"],
      4: ["Day 1 — Glutes Heavy", "Day 2 — Upper Body", "Day 3 — Glutes Volume", "Day 4 — Lower Body Shape"],
      5: ["Day 1 — Glutes Heavy", "Day 2 — Upper Push", "Day 3 — Glutes Volume", "Day 4 — Upper Pull", "Day 5 — Lower Body + Booty Burn"],
      6: ["Day 1 — Glutes Heavy", "Day 2 — Upper Push", "Day 3 — Glutes Volume", "Day 4 — Upper Pull", "Day 5 — Lower Body", "Day 6 — Booty Finisher + Core"],
    },
    Abs: {
      2: ["Day 1 — Full Body + Core", "Day 2 — Lower Body + Abs"],
      3: ["Day 1 — Upper Body + Core", "Day 2 — Lower Body + Abs", "Day 3 — Full Body + Core"],
      4: ["Day 1 — Upper Push + Abs", "Day 2 — Lower Body", "Day 3 — Upper Pull + Core", "Day 4 — Full Body + Abs"],
      5: ["Day 1 — Push + Abs", "Day 2 — Lower Body", "Day 3 — Pull + Core", "Day 4 — Legs + Abs", "Day 5 — Full Body + Core"],
      6: ["Day 1 — Push + Abs", "Day 2 — Pull + Core", "Day 3 — Legs", "Day 4 — Shoulders + Abs", "Day 5 — Full Body + Core", "Day 6 — Conditioning + Abs"],
    },
    Legs: {
      2: ["Day 1 — Lower Body", "Day 2 — Full Body"],
      3: ["Day 1 — Legs Heavy", "Day 2 — Upper Body", "Day 3 — Legs Volume"],
      4: ["Day 1 — Legs Heavy", "Day 2 — Upper Push", "Day 3 — Legs Volume", "Day 4 — Upper Pull"],
      5: ["Day 1 — Legs Heavy", "Day 2 — Push", "Day 3 — Pull", "Day 4 — Legs Volume", "Day 5 — Full Body"],
      6: ["Day 1 — Legs Heavy", "Day 2 — Push", "Day 3 — Pull", "Day 4 — Legs Volume", "Day 5 — Upper Body", "Day 6 — Conditioning"],
    },
    "Upper Body": {
      2: ["Day 1 — Upper Push", "Day 2 — Upper Pull + Lower"],
      3: ["Day 1 — Push", "Day 2 — Pull", "Day 3 — Legs + Upper Finisher"],
      4: ["Day 1 — Push", "Day 2 — Pull", "Day 3 — Legs", "Day 4 — Shoulders + Arms"],
      5: ["Day 1 — Push", "Day 2 — Pull", "Day 3 — Legs", "Day 4 — Shoulders", "Day 5 — Arms + Upper Pump"],
      6: ["Day 1 — Push", "Day 2 — Pull", "Day 3 — Legs", "Day 4 — Shoulders", "Day 5 — Arms", "Day 6 — Upper Body Pump"],
    },
    "Full Body": {
      2: ["Day 1 — Full Body A", "Day 2 — Full Body B"],
      3: ["Day 1 — Full Body A", "Day 2 — Full Body B", "Day 3 — Full Body C"],
      4: ["Day 1 — Upper", "Day 2 — Lower", "Day 3 — Upper", "Day 4 — Lower"],
      5: ["Day 1 — Push", "Day 2 — Pull", "Day 3 — Legs", "Day 4 — Full Body", "Day 5 — Conditioning"],
      6: ["Day 1 — Push", "Day 2 — Pull", "Day 3 — Legs", "Day 4 — Upper", "Day 5 — Lower", "Day 6 — Full Body"],
    },
    "Couple Workouts": {
      2: ["Day 1 — Couple Full Body", "Day 2 — Couple Conditioning"],
      3: ["Day 1 — Couple Strength", "Day 2 — Couple Cardio", "Day 3 — Couple Lower Body"],
      4: ["Day 1 — Couple Upper Body", "Day 2 — Couple Lower Body", "Day 3 — Couple Conditioning", "Day 4 — Couple Full Body"],
      5: ["Day 1 — Couple Push", "Day 2 — Couple Pull", "Day 3 — Couple Legs", "Day 4 — Couple Conditioning", "Day 5 — Couple Full Body"],
      6: ["Day 1 — Couple Push", "Day 2 — Couple Pull", "Day 3 — Couple Legs", "Day 4 — Couple Cardio", "Day 5 — Couple Glutes/Core", "Day 6 — Couple Full Body"],
    },
  };

  return plans[focus]?.[days] || plans["Full Body"][3];
}
```

---

# 6) `app/plan-builder/page.js`

```javascript
"use client";

import { useMemo, useState } from "react";
import Navbar from "../../components/Navbar";
import { GOALS, MODES, FOCUS_AREAS, TRAINING_DAYS, generatePlan } from "../../lib/planLogic";

export default function PlanBuilderPage() {
  const [goal, setGoal] = useState("Build Muscle");
  const [mode, setMode] = useState("Solo");
  const [focus, setFocus] = useState("Booty");
  const [days, setDays] = useState(4);

  const plan = useMemo(() => generatePlan({ goal, mode, focus, days }), [goal, mode, focus, days]);

  return (
    <main style={main}>
      <Navbar />
      <div style={container}>
        <div style={{ marginBottom: "30px" }}>
          <div style={eyebrowStyle}>Plan Builder</div>
          <h1 style={pageTitle}>Build your personalized plan</h1>
          <p style={textStyle}>Choose your goal, whether you train solo or as a couple, your body focus, and how many days per week you want to train.</p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))", gap: "24px" }}>
          <div style={panelStyle}>
            <h2 style={panelTitleStyle}>Your Choices</h2>

            <label style={labelStyle}>Goal</label>
            <select value={goal} onChange={(e) => setGoal(e.target.value)} style={inputStyle}>
              {GOALS.map((item) => <option key={item}>{item}</option>)}
            </select>

            <label style={labelStyle}>Mode</label>
            <select value={mode} onChange={(e) => setMode(e.target.value)} style={inputStyle}>
              {MODES.map((item) => <option key={item}>{item}</option>)}
            </select>

            <label style={labelStyle}>Focus Area</label>
            <select value={focus} onChange={(e) => setFocus(e.target.value)} style={inputStyle}>
              {FOCUS_AREAS.map((item) => <option key={item}>{item}</option>)}
            </select>

            <label style={labelStyle}>Training Days</label>
            <select value={days} onChange={(e) => setDays(Number(e.target.value))} style={inputStyle}>
              {TRAINING_DAYS.map((item) => <option key={item} value={item}>{item} days per week</option>)}
            </select>
          </div>

          <div style={panelStyle}>
            <h2 style={panelTitleStyle}>Recommended Plan</h2>
            <p style={{ color: "rgba(255,255,255,0.72)", lineHeight: 1.8 }}>{plan.summary}</p>

            <div style={{ marginTop: "24px" }}>
              <div style={sectionSmallTitle}>Training Split</div>
              <div style={{ display: "grid", gap: "12px", marginTop: "12px" }}>
                {plan.trainingSplit.map((item) => <div key={item} style={itemBoxStyle}>{item}</div>)}
              </div>
            </div>

            <div style={{ marginTop: "24px" }}>
              <div style={sectionSmallTitle}>{plan.nutrition.title}</div>
              <p style={{ color: "rgba(255,255,255,0.68)", lineHeight: 1.8, marginTop: "10px" }}>{plan.nutrition.description}</p>
              <div style={{ marginTop: "12px", display: "grid", gap: "10px" }}>
                {plan.nutrition.example.map((meal) => <div key={meal} style={itemBoxStyle}>{meal}</div>)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

const main = { minHeight: "100vh", background: "#0a0a0a", color: "white" };
const container = { maxWidth: "1200px", margin: "0 auto", padding: "60px 24px 90px" };
const eyebrowStyle = { fontSize: "13px", textTransform: "uppercase", letterSpacing: "0.18em", color: "rgba(255,255,255,0.5)" };
const pageTitle = { fontSize: "54px", margin: "10px 0 12px" };
const textStyle = { color: "rgba(255,255,255,0.68)", maxWidth: "760px", lineHeight: 1.8 };
const panelStyle = { background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "26px", padding: "28px" };
const panelTitleStyle = { fontSize: "28px", margin: "0 0 20px" };
const labelStyle = { display: "block", fontSize: "14px", color: "rgba(255,255,255,0.7)", marginBottom: "8px", marginTop: "16px" };
const inputStyle = { width: "100%", padding: "14px 16px", borderRadius: "12px", border: "1px solid rgba(255,255,255,0.15)", background: "#111", color: "white", fontSize: "16px" };
const sectionSmallTitle = { fontSize: "18px", fontWeight: "700" };
const itemBoxStyle = { background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "14px", padding: "14px 16px", color: "rgba(255,255,255,0.82)" };
```

---

# 7) `app/dashboard/page.js`

```javascript
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
```

---

# 8) Full member pages

## `app/workouts/page.js`

```javascript
import Navbar from "../../components/Navbar";

export default function WorkoutsPage() {
  return (
    <main style={main}>
      <Navbar />
      <div style={container}>
        <h1 style={title}>Your Workouts</h1>
        <p style={subtitle}>Structured weekly training based on your goals, body focus, and training days.</p>

        {[
          { day: "Monday", focus: "Chest + Triceps" },
          { day: "Tuesday", focus: "Back + Biceps" },
          { day: "Wednesday", focus: "Legs + Glutes" },
          { day: "Thursday", focus: "Shoulders + Abs" },
          { day: "Friday", focus: "Full Body" },
          { day: "Saturday", focus: "Conditioning / HIIT" },
          { day: "Sunday", focus: "Recovery" },
        ].map((d) => (
          <div key={d.day} style={card}>
            <strong>{d.day}</strong>
            <div style={{ marginTop: "6px", color: "rgba(255,255,255,0.72)" }}>{d.focus}</div>
          </div>
        ))}
      </div>
    </main>
  );
}

const main = { minHeight: "100vh", background: "#0a0a0a", color: "white" };
const container = { maxWidth: "1000px", margin: "0 auto", padding: "60px 24px" };
const title = { fontSize: "42px", marginBottom: "10px" };
const subtitle = { color: "rgba(255,255,255,0.7)", marginBottom: "30px", lineHeight: 1.8 };
const card = { background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "18px", padding: "20px", marginBottom: "16px" };
```

## `app/nutrition/page.js`

```javascript
import Navbar from "../../components/Navbar";

export default function NutritionPage() {
  return (
    <main style={main}>
      <Navbar />
      <div style={container}>
        <h1 style={title}>Nutrition Plans</h1>
        <p style={subtitle}>Eat according to your goal with simple structures that are realistic to follow.</p>

        {[
          ["Fat Loss Plan", "High protein, controlled calories, and simple meals that help create consistency."],
          ["Muscle Gain Plan", "Higher calories, more carbs around training, and meals that support recovery and growth."],
          ["Balanced Lifestyle Plan", "For staying lean, athletic, and energized without overcomplicating food."],
          ["Couple Meal Plan", "A shared food structure for partners who want to stay on track together."],
        ].map(([plan, desc]) => (
          <div key={plan} style={card}>
            <div style={{ fontWeight: "700", fontSize: "22px", marginBottom: "8px" }}>{plan}</div>
            <div style={{ color: "rgba(255,255,255,0.72)", lineHeight: 1.8 }}>{desc}</div>
          </div>
        ))}
      </div>
    </main>
  );
}

const main = { minHeight: "100vh", background: "#0a0a0a", color: "white" };
const container = { maxWidth: "1000px", margin: "0 auto", padding: "60px 24px" };
const title = { fontSize: "42px", marginBottom: "10px" };
const subtitle = { color: "rgba(255,255,255,0.7)", marginBottom: "30px", lineHeight: 1.8 };
const card = { background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "18px", padding: "24px", marginBottom: "16px" };
```

## `app/recipes/page.js`

```javascript
import Navbar from "../../components/Navbar";

export default function RecipesPage() {
  return (
    <main style={main}>
      <Navbar />
      <div style={container}>
        <h1 style={title}>Recipes</h1>
        <p style={subtitle}>Simple high-protein meals that are easy to repeat and fit real life.</p>

        <div style={grid}>
          {[
            ["Chicken Power Bowl", "15 min · high protein lunch"],
            ["High Protein Breakfast", "10 min · eggs, yogurt, fruit"],
            ["Salmon & Veggies", "20 min · clean dinner option"],
            ["Protein Smoothie", "5 min · easy post-workout"],
            ["Greek Yogurt Dessert", "5 min · lighter sweet option"],
            ["Couple Date Night Meal", "healthy meal idea for two"],
          ].map(([name, meta]) => (
            <div key={name} style={card}>
              <div style={{ fontWeight: "700", fontSize: "20px", marginBottom: "8px" }}>{name}</div>
              <div style={{ color: "rgba(255,255,255,0.68)", lineHeight: 1.8 }}>{meta}</div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

const main = { minHeight: "100vh", background: "#0a0a0a", color: "white" };
const container = { maxWidth: "1100px", margin: "0 auto", padding: "60px 24px" };
const title = { fontSize: "42px", marginBottom: "10px" };
const subtitle = { color: "rgba(255,255,255,0.7)", marginBottom: "30px", lineHeight: 1.8 };
const grid = { display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: "20px" };
const card = { background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "18px", padding: "24px" };
```

## `app/programs/page.js`

```javascript
import Navbar from "../../components/Navbar";

export default function ProgramsPage() {
  return (
    <main style={main}>
      <Navbar />
      <div style={container}>
        <h1 style={title}>Programs</h1>
        <p style={subtitle}>Transformation-based systems designed to create clear direction and momentum.</p>

        <div style={grid}>
          {[
            ["30-Day Lean Couple Challenge", "Build routine and momentum with a structured transformation month."],
            ["Summer Shred", "A fat-loss focused system for getting leaner and sharper."],
            ["Lean Bulk Blueprint", "A muscle-building direction with heavier training and higher food intake."],
            ["Beginner Reset", "A lower-friction start for people getting back into routine."],
          ].map(([name, desc]) => (
            <div key={name} style={card}>
              <div style={{ fontWeight: "700", fontSize: "20px", marginBottom: "8px" }}>{name}</div>
              <div style={{ color: "rgba(255,255,255,0.68)", lineHeight: 1.8 }}>{desc}</div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

const main = { minHeight: "100vh", background: "#0a0a0a", color: "white" };
const container = { maxWidth: "1100px", margin: "0 auto", padding: "60px 24px" };
const title = { fontSize: "42px", marginBottom: "10px" };
const subtitle = { color: "rgba(255,255,255,0.7)", marginBottom: "30px", lineHeight: 1.8 };
const grid = { display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: "20px" };
const card = { background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "18px", padding: "24px" };
```

## `app/couple-zone/page.js`

```javascript
import Navbar from "../../components/Navbar";

export default function CoupleZonePage() {
  return (
    <main style={main}>
      <Navbar />
      <div style={container}>
        <h1 style={title}>Couple Zone ❤️</h1>
        <p style={subtitle}>Train together, stay accountable, and build a stronger healthier lifestyle side by side.</p>

        <div style={grid}>
          {[
            ["Partner Workouts", "Workout ideas and structures for two people."],
            ["Shared Meal Plans", "Meal structure you can follow together."],
            ["Weekly Challenges", "Simple challenges that keep both of you engaged."],
            ["Accountability System", "Use teamwork to stay more consistent."],
            ["Date-Night Healthy Meals", "Meals that support your goals without feeling boring."],
            ["Couple Transformation Flow", "A stronger shared route from starting point to visible progress."],
          ].map(([name, desc]) => (
            <div key={name} style={card}>
              <div style={{ fontWeight: "700", fontSize: "20px", marginBottom: "8px" }}>{name}</div>
              <div style={{ color: "rgba(255,255,255,0.68)", lineHeight: 1.8 }}>{desc}</div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

const main = { minHeight: "100vh", background: "#0a0a0a", color: "white" };
const container = { maxWidth: "1100px", margin: "0 auto", padding: "60px 24px" };
const title = { fontSize: "42px", marginBottom: "10px" };
const subtitle = { color: "rgba(255,255,255,0.7)", marginBottom: "30px", lineHeight: 1.8 };
const grid = { display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: "20px" };
const card = { background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "18px", padding: "24px" };
```

## `app/account/page.js`

```javascript
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
```

---

# 9) `app/workouts/booty/page.js`

```javascript
import Navbar from "../../../components/Navbar";

export default function BootyWorkoutPage() {
  return (
    <main style={main}>
      <Navbar />
      <div style={container}>
        <h1 style={title}>Booty Focus Workouts</h1>
        <p style={subtitle}>Example structure for members who want more glute-focused training.</p>

        {[
          {
            title: "Day 1 — Glutes Heavy",
            items: ["Hip Thrust — 4x10", "Bulgarian Split Squat — 3x12", "Romanian Deadlift — 3x10", "Glute Bridge Hold — 3x30 sec"],
          },
          {
            title: "Day 3 — Glutes Volume",
            items: ["Kickbacks — 4x12", "Walking Lunges — 3x20", "Step-ups — 3x12", "Band Abductions — 3x20"],
          },
        ].map((block) => (
          <div key={block.title} style={card}>
            <h2 style={{ fontSize: "28px", marginBottom: "14px" }}>{block.title}</h2>
            <ul style={{ paddingLeft: "18px", lineHeight: 1.9 }}>
              {block.items.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </main>
  );
}

const main = { minHeight: "100vh", background: "#0a0a0a", color: "white" };
const container = { maxWidth: "900px", margin: "0 auto", padding: "60px 24px 80px" };
const title = { fontSize: "48px", marginBottom: "12px" };
const subtitle = { color: "rgba(255,255,255,0.68)", marginBottom: "28px", lineHeight: 1.8 };
const card = { background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "20px", padding: "24px", marginBottom: "20px" };
```

---

# What to do next

Use this order:

1. replace `components/Navbar.js`
2. replace `app/page.js`
3. replace `app/about/page.js`
4. create `lib/planLogic.js`
5. create `app/plan-builder/page.js`
6. replace `app/dashboard/page.js`
7. replace your member pages
8. add `app/workouts/booty/page.js`

Then commit the changes.

After that your platform will feel much more premium, clear, and branded.

The next major upgrade after this is:

* Supabase login
* protected member content
* Stripe memberships
* saving user choices from the plan builder
