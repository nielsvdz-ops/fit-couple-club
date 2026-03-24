"use client";

import { useState } from "react";
import DashboardLayout from "./DashboardLayout";

const plans = {
  "Build Muscle": [
    ["Monday", ["Bench Press 4x8", "Incline DB Press 3x10", "Triceps Pushdown 3x12"]],
    ["Tuesday", ["Pull-ups 4x8", "Barbell Row 3x10", "Bicep Curl 3x12"]],
    ["Wednesday", ["Squat 4x8", "Leg Press 3x10", "Calf Raises 3x15"]],
    ["Thursday", ["Shoulder Press 4x8", "Lateral Raises 3x12", "Abs 3x15"]],
    ["Friday", ["Deadlift 4x6", "Hamstring Curl 3x12", "Glute Bridge 3x12"]],
    ["Saturday", ["HIIT 20 min", "Core Work"]],
    ["Sunday", ["Rest / Recovery"]],
  ],
  "Lose Fat": [
    ["Monday", ["Full Body Circuit", "Burpees", "Squats"]],
    ["Tuesday", ["HIIT + Core"]],
    ["Wednesday", ["Upper Body"]],
    ["Thursday", ["Cardio + Abs"]],
    ["Friday", ["Lower Body"]],
    ["Saturday", ["HIIT"]],
    ["Sunday", ["Rest"]],
  ],
};

export default function PlanBuilderClient({ isPaid }) {
  const [goal, setGoal] = useState("Build Muscle");
  const plan = plans[goal];

  return (
    <DashboardLayout
      title="Plan Builder"
      subtitle="Generate your personal training plan based on your goal"
    >
      <div style={{ display: "grid", gap: "20px" }}>
        
        {/* GOAL SELECT */}
        <select value={goal} onChange={(e) => setGoal(e.target.value)}>
          {Object.keys(plans).map((g) => (
            <option key={g}>{g}</option>
          ))}
        </select>

        {/* PLAN OUTPUT */}
        <div style={{ display: "grid", gap: "16px" }}>
          {(isPaid ? plan : plan.slice(0, 1)).map(([day, exercises]) => (
            <div key={day} style={card}>
              <h3>{day}</h3>
              <ul>
                {exercises.map((ex) => (
                  <li key={ex}>{ex}</li>
                ))}
              </ul>
            </div>
          ))}

          {/* LOCKED CONTENT */}
          {!isPaid && (
            <div style={lockedBox}>
              <h3>🔒 Unlock Full Plan</h3>
              <p>
                Get your full weekly plan, multiple programs, and structured progression.
              </p>

              <a href="/pricing" style={unlockButton}>
                Unlock Full Plan → €59/month
              </a>
            </div>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
}

const card = {
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: "16px",
  padding: "16px",
};

const lockedBox = {
  background: "rgba(255,255,255,0.03)",
  border: "1px dashed rgba(255,255,255,0.2)",
  borderRadius: "16px",
  padding: "20px",
  textAlign: "center",
};

const unlockButton = {
  display: "inline-block",
  marginTop: "10px",
  padding: "12px 16px",
  background: "white",
  color: "black",
  borderRadius: "10px",
  fontWeight: "700",
  textDecoration: "none",
};
