"use client";

import { useMemo, useState } from "react";
import Navbar from "../../components/Navbar";
import {
  GOALS,
  FOCUS_AREAS,
  TRAINING_DAYS,
  generateWorkoutSystem,
} from "../../lib/workoutPlans";

export default function PlanBuilderPage() {
  const [goal, setGoal] = useState("Build Muscle");
  const [focus, setFocus] = useState("Booty");
  const [days, setDays] = useState(3);
  const [templateIndex, setTemplateIndex] = useState(0);

  const plan = useMemo(() => {
    return generateWorkoutSystem({
      goal,
      focus,
      days,
      templateIndex,
    });
  }, [goal, focus, days, templateIndex]);

  return (
    <main style={main}>
      <Navbar />

      <div style={container}>
        <div style={{ marginBottom: "28px" }}>
          <div style={eyebrow}>Plan Builder</div>
          <h1 style={title}>Your complete training system</h1>
          <p style={subtitle}>
            Choose your goal, focus area, and training days. Then rotate through different workout templates so you do not repeat the same routine every time.
          </p>
        </div>

        <div style={grid}>
          <div style={panel}>
            <h2 style={panelTitle}>Your setup</h2>

            <label style={label}>Goal</label>
            <select value={goal} onChange={(e) => setGoal(e.target.value)} style={input}>
              {GOALS.map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>

            <label style={label}>Focus Area</label>
            <select value={focus} onChange={(e) => setFocus(e.target.value)} style={input}>
              {FOCUS_AREAS.map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>

            <label style={label}>Training Days</label>
            <select value={days} onChange={(e) => setDays(Number(e.target.value))} style={input}>
              {TRAINING_DAYS.map((item) => (
                <option key={item} value={item}>
                  {item} days per week
                </option>
              ))}
            </select>

            <label style={label}>Workout Variation</label>
            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginTop: "10px" }}>
              {[0,1,2,3,4,5,6,7,8,9].map((i) => (
                <button
                  key={i}
                  onClick={() => setTemplateIndex(i)}
                  style={{
                    ...variationButton,
                    background: templateIndex === i ? "white" : "transparent",
                    color: templateIndex === i ? "black" : "white",
                  }}
                >
                  Plan {i + 1}
                </button>
              ))}
            </div>
          </div>

          <div style={panel}>
            <h2 style={panelTitle}>{plan.title}</h2>
            <p style={subtitle}>{plan.note}</p>

            <div style={{ display: "grid", gap: "18px", marginTop: "22px" }}>
              {plan.split.map((dayBlock) => (
                <div key={dayBlock.day} style={dayCard}>
                  <div style={dayTitle}>{dayBlock.day}</div>
                  <div style={{ display: "grid", gap: "10px", marginTop: "14px" }}>
                    {dayBlock.exercises.map(([exercise, sets, reps]) => (
                      <div key={exercise} style={exerciseRow}>
                        <div style={{ fontWeight: "700" }}>{exercise}</div>
                        <div style={{ color: "rgba(255,255,255,0.7)", marginTop: "4px" }}>
                          {sets} · {reps}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
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
  maxWidth: "1250px",
  margin: "0 auto",
  padding: "60px 24px 90px",
};

const eyebrow = {
  fontSize: "13px",
  textTransform: "uppercase",
  letterSpacing: "0.18em",
  color: "rgba(255,255,255,0.5)",
};

const title = {
  fontSize: "54px",
  margin: "10px 0 12px",
};

const subtitle = {
  color: "rgba(255,255,255,0.7)",
  lineHeight: 1.8,
  maxWidth: "900px",
};

const grid = {
  display: "grid",
  gridTemplateColumns: "minmax(320px, 380px) minmax(0, 1fr)",
  gap: "24px",
};

const panel = {
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: "24px",
  padding: "26px",
};

const panelTitle = {
  fontSize: "28px",
  margin: "0 0 18px",
};

const label = {
  display: "block",
  marginTop: "16px",
  marginBottom: "8px",
  color: "rgba(255,255,255,0.75)",
  fontSize: "14px",
};

const input = {
  width: "100%",
  padding: "14px 16px",
  borderRadius: "12px",
  border: "1px solid rgba(255,255,255,0.15)",
  background: "#111",
  color: "white",
  fontSize: "16px",
};

const variationButton = {
  padding: "10px 14px",
  borderRadius: "12px",
  border: "1px solid rgba(255,255,255,0.18)",
  cursor: "pointer",
  fontWeight: "700",
};

const dayCard = {
  background: "rgba(255,255,255,0.03)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: "20px",
  padding: "20px",
};

const dayTitle = {
  fontSize: "22px",
  fontWeight: "800",
};

const exerciseRow = {
  padding: "12px 14px",
  borderRadius: "14px",
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.06)",
};
