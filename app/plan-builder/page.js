"use client";

import { useState } from "react";

export default function PlanBuilderPage() {
  const [goal, setGoal] = useState("");
  const [days, setDays] = useState(3);
  const [result, setResult] = useState(null);

  function generatePlan() {
    const workouts = {
      3: ["Full Body", "Rest", "Full Body", "Rest", "Full Body"],
      4: ["Upper", "Lower", "Rest", "Upper", "Lower"],
      5: ["Push", "Pull", "Legs", "Rest", "Full Body"],
    };

    const nutrition = {
      fatloss: "High protein, calorie deficit meals",
      muscle: "High protein, calorie surplus meals",
      maintain: "Balanced macro meals",
    };

    setResult({
      workout: workouts[days] || workouts[3],
      nutrition: nutrition[goal] || "Choose a goal",
    });
  }

  return (
    <main style={{ padding: 40, color: "white", background: "#0a0a0a", minHeight: "100vh" }}>
      <h1>Plan Builder</h1>

      <div style={{ marginTop: 20 }}>
        <h3>Select Goal</h3>
        <select onChange={(e) => setGoal(e.target.value)}>
          <option value="">Choose</option>
          <option value="fatloss">Fat Loss</option>
          <option value="muscle">Muscle Gain</option>
          <option value="maintain">Maintain</option>
        </select>
      </div>

      <div style={{ marginTop: 20 }}>
        <h3>Training Days</h3>
        <select onChange={(e) => setDays(Number(e.target.value))}>
          <option value={3}>3 Days</option>
          <option value={4}>4 Days</option>
          <option value={5}>5 Days</option>
        </select>
      </div>

      <button
        onClick={generatePlan}
        style={{
          marginTop: 20,
          padding: "10px 20px",
          background: "white",
          color: "black",
          borderRadius: 8,
        }}
      >
        Generate Plan
      </button>

      {result && (
        <div style={{ marginTop: 30 }}>
          <h2>Your Plan</h2>

          <h3>Workout Split:</h3>
          <ul>
            {result.workout.map((w, i) => (
              <li key={i}>{w}</li>
            ))}
          </ul>

          <h3>Nutrition:</h3>
          <p>{result.nutrition}</p>
        </div>
      )}
    </main>
  );
}
