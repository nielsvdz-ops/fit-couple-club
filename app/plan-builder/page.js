"use client";

import { useMemo, useState } from "react";
import Navbar from "../../components/Navbar";
import {
  GOALS,
  MODES,
  FOCUS_AREAS,
  TRAINING_DAYS,
  generatePlan,
} from "../../lib/planLogic";

export default function PlanBuilderPage() {
  const [goal, setGoal] = useState("Build Muscle");
  const [mode, setMode] = useState("Solo");
  const [focus, setFocus] = useState("Booty");
  const [days, setDays] = useState(4);

  const plan = useMemo(
    () => generatePlan({ goal, mode, focus, days }),
    [goal, mode, focus, days]
  );

  return (
    <main style={main}>
      <Navbar />

      <div style={container}>
        <div style={{ marginBottom: "30px" }}>
          <div style={eyebrowStyle}>Plan Builder</div>
          <h1 style={pageTitle}>Build your personalized plan</h1>
          <p style={textStyle}>
            Choose your goal, whether you train solo or as a couple, your body
            focus, and how many days per week you want to train.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
            gap: "24px",
          }}
        >
          <div style={panelStyle}>
            <h2 style={panelTitleStyle}>Your Choices</h2>

            <label style={labelStyle}>Goal</label>
            <select
              value={goal}
              onChange={(e) => setGoal(e.target.value)}
              style={inputStyle}
            >
              {GOALS.map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>

            <label style={labelStyle}>Mode</label>
            <select
              value={mode}
              onChange={(e) => setMode(e.target.value)}
              style={inputStyle}
            >
              {MODES.map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>

            <label style={labelStyle}>Focus Area</label>
            <select
              value={focus}
              onChange={(e) => setFocus(e.target.value)}
              style={inputStyle}
            >
              {FOCUS_AREAS.map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>

            <label style={labelStyle}>Training Days</label>
            <select
              value={days}
              onChange={(e) => setDays(Number(e.target.value))}
              style={inputStyle}
            >
              {TRAINING_DAYS.map((item) => (
                <option key={item} value={item}>
                  {item} days per week
                </option>
              ))}
            </select>
          </div>

          <div style={panelStyle}>
            <h2 style={panelTitleStyle}>Recommended Plan</h2>
            <p style={{ color: "rgba(255,255,255,0.72)", lineHeight: 1.8 }}>
              {plan.summary}
            </p>

            <div style={{ marginTop: "24px" }}>
              <div style={sectionSmallTitle}>Training Split</div>
              <div style={{ display: "grid", gap: "12px", marginTop: "12px" }}>
                {plan.trainingSplit.map((item) => (
                  <div key={item} style={itemBoxStyle}>
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div style={{ marginTop: "24px" }}>
              <div style={sectionSmallTitle}>{plan.nutrition.title}</div>
              <p
                style={{
                  color: "rgba(255,255,255,0.68)",
                  lineHeight: 1.8,
                  marginTop: "10px",
                }}
              >
                {plan.nutrition.description}
              </p>

              <div style={{ marginTop: "12px", display: "grid", gap: "10px" }}>
                {plan.nutrition.example.map((meal) => (
                  <div key={meal} style={itemBoxStyle}>
                    {meal}
                  </div>
                ))}
              </div>
            </div>

            <div
              style={{
                display: "flex",
                gap: "12px",
                flexWrap: "wrap",
                marginTop: "28px",
              }}
            >
              <a href="/workouts" style={primaryButton}>
                View Workouts
              </a>
              <a href="/nutrition" style={secondaryButton}>
                View Nutrition
              </a>
            </div>
          </div>
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

const eyebrowStyle = {
  fontSize: "13px",
  textTransform: "uppercase",
  letterSpacing: "0.18em",
  color: "rgba(255,255,255,0.5)",
};

const pageTitle = {
  fontSize: "54px",
  margin: "10px 0 12px",
};

const textStyle = {
  color: "rgba(255,255,255,0.68)",
  maxWidth: "760px",
  lineHeight: 1.8,
};

const panelStyle = {
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: "26px",
  padding: "28px",
};

const panelTitleStyle = {
  fontSize: "28px",
  margin: "0 0 20px",
};

const labelStyle = {
  display: "block",
  fontSize: "14px",
  color: "rgba(255,255,255,0.7)",
  marginBottom: "8px",
  marginTop: "16px",
};

const inputStyle = {
  width: "100%",
  padding: "14px 16px",
  borderRadius: "12px",
  border: "1px solid rgba(255,255,255,0.15)",
  background: "#111",
  color: "white",
  fontSize: "16px",
};

const sectionSmallTitle = {
  fontSize: "18px",
  fontWeight: "700",
};

const itemBoxStyle = {
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: "14px",
  padding: "14px 16px",
  color: "rgba(255,255,255,0.82)",
};

const primaryButton = {
  background: "white",
  color: "black",
  padding: "14px 22px",
  borderRadius: "14px",
  textDecoration: "none",
  fontWeight: "700",
};

const secondaryButton = {
  border: "1px solid rgba(255,255,255,0.2)",
  color: "white",
  padding: "14px 22px",
  borderRadius: "14px",
  textDecoration: "none",
  fontWeight: "700",
};
