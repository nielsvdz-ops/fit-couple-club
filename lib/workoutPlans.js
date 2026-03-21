"use client";

import { useState } from "react";
import Navbar from "../../components/Navbar";
import {
  GOALS,
  FOCUS_AREAS,
  TRAINING_DAYS,
  generateWorkoutSystem,
} from "../../lib/workoutPlans";

// goal → allowed focus mapping
const FOCUS_BY_GOAL = {
  "Lose Fat": ["Full Body", "Abs"],
  "Build Muscle": ["Booty", "Legs", "Upper Body", "Full Body"],
  "Tone & Shape Body": ["Booty", "Abs", "Full Body"],
  "Maintain Athletic Lifestyle": ["Full Body", "Upper Body", "Legs"],
  "Beginner Body Reset": ["Full Body"],
};

export default function PlanBuilderPage() {
  const [goal, setGoal] = useState("Build Muscle");
  const [focus, setFocus] = useState("Booty");
  const [days, setDays] = useState(3);
  const [templateIndex, setTemplateIndex] = useState(0);

  const [plan, setPlan] = useState(null);

  const allowedFocus = FOCUS_BY_GOAL[goal];

  function generatePlan() {
    const newPlan = generateWorkoutSystem({
      goal,
      focus,
      days,
      templateIndex,
    });

    setPlan(newPlan);
  }

  return (
    <main style={main}>
      <Navbar />

      <div style={container}>
        <h1 style={title}>Build your personal plan</h1>

        <div style={grid}>
          <div style={panel}>
            <h2>Setup</h2>

            <label style={label}>Goal</label>
            <select
              value={goal}
              onChange={(e) => {
                const newGoal = e.target.value;
                setGoal(newGoal);

                // auto-fix focus if invalid
                if (!FOCUS_BY_GOAL[newGoal].includes(focus)) {
                  setFocus(FOCUS_BY_GOAL[newGoal][0]);
                }
              }}
              style={input}
            >
              {GOALS.map((g) => (
                <option key={g}>{g}</option>
              ))}
            </select>

            <label style={label}>Focus Area</label>
            <select
              value={focus}
              onChange={(e) => setFocus(e.target.value)}
              style={input}
            >
              {allowedFocus.map((f) => (
                <option key={f}>{f}</option>
              ))}
            </select>

            <label style={label}>Training Days</label>
            <select
              value={days}
              onChange={(e) => setDays(Number(e.target.value))}
              style={input}
            >
              {TRAINING_DAYS.map((d) => (
                <option key={d} value={d}>
                  {d} days per week
                </option>
              ))}
            </select>

            <label style={label}>Workout Variation</label>
            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
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
                  {i + 1}
                </button>
              ))}
            </div>

            <button onClick={generatePlan} style={generateBtn}>
              Generate Plan
            </button>
          </div>

          <div style={panel}>
            {!plan && <p>Select options and click Generate</p>}

            {plan && (
              <>
                <h2>{plan.title}</h2>
                <p style={subtitle}>{plan.note}</p>

                {plan.split.map((day) => (
                  <div key={day.day} style={dayCard}>
                    <h3>{day.day}</h3>

                    {day.exercises.map(([name, sets, reps]) => (
                      <div key={name} style={exerciseRow}>
                        <strong>{name}</strong>
                        <div>{sets} • {reps}</div>
                      </div>
                    ))}
                  </div>
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

const generateBtn = {
  marginTop: "20px",
  padding: "14px",
  width: "100%",
  borderRadius: "12px",
  background: "white",
  color: "black",
  fontWeight: "700",
  cursor: "pointer",
};

const main = { minHeight: "100vh", background: "#0a0a0a", color: "white" };
const container = { maxWidth: "1200px", margin: "0 auto", padding: "60px 20px" };
const grid = { display: "grid", gridTemplateColumns: "350px 1fr", gap: "20px" };
const panel = { background: "#111", padding: "20px", borderRadius: "16px" };
const label = { marginTop: "12px", display: "block" };
const input = { width: "100%", padding: "10px", marginTop: "6px" };
const variationButton = { padding: "8px 10px", borderRadius: "8px", border: "1px solid #444" };
const dayCard = { marginTop: "16px", padding: "16px", background: "#1a1a1a", borderRadius: "12px" };
const exerciseRow = { marginTop: "8px" };
const title = { fontSize: "42px", marginBottom: "20px" };
const subtitle = { color: "#aaa" };
