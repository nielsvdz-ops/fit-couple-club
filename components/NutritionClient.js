"use client";

import { useState } from "react";

const nutritionPlans = {
  "Lose Fat": {
    summary: "Prioritize a calorie deficit, high protein, repeatable meals, and fewer random snacks.",
    calories: "Start around bodyweight-based moderate deficit",
    protein: "1.8–2.2g protein per kg bodyweight",
    carbs: "Moderate carbs around training",
    fats: "Moderate fats from whole-food sources",
    hydration: "2.5–3.5L water daily",
    timing: ["Protein in every meal", "Bigger meals around training if preferred", "Keep late-night snacking controlled", "Use simple meals you can repeat"],
    grocery: ["Chicken breast or thigh", "Lean beef or turkey", "Eggs / egg whites", "Greek yogurt", "Rice / potatoes / oats", "Fruit", "Frozen vegetables", "Avocados / olive oil / nuts in moderation"],
    sampleDay: ["Breakfast — Greek yogurt bowl with berries and chia", "Lunch — Chicken rice bowl with vegetables", "Snack — Protein shake + apple", "Dinner — Salmon, potatoes, greens"],
  },
  "Build Muscle": {
    summary: "Prioritize strong protein intake, enough calories, higher carbs around training, and recovery.",
    calories: "Start around slight calorie surplus",
    protein: "1.8–2.2g protein per kg bodyweight",
    carbs: "Higher carbs around training",
    fats: "Moderate fats for hormones and satiety",
    hydration: "3L+ water daily",
    timing: ["Eat before and after training", "Use carb-heavy meals around sessions", "Do not under-eat on hard training days", "Keep protein consistent across the day"],
    grocery: ["Chicken / steak / lean beef", "Salmon / tuna", "Greek yogurt / cottage cheese", "Oats / rice / pasta / potatoes", "Fruit", "Nut butter", "Avocado / olive oil", "Wraps / bagels / easy carbs"],
    sampleDay: ["Breakfast — Oats with whey, banana, peanut butter", "Lunch — Beef rice bowl with avocado", "Snack — Greek yogurt + granola", "Dinner — Chicken pasta bowl"],
  },
  "Tone & Shape Body": {
    summary: "Use balanced calories, strong protein, controlled portions, and consistent training support.",
    calories: "Maintenance or light deficit depending on current body composition",
    protein: "High protein daily",
    carbs: "Moderate carbs around training and active days",
    fats: "Balanced fats from quality sources",
    hydration: "2.5–3L water daily",
    timing: ["Keep meals structured and repeatable", "Protein in every meal", "Avoid high-chaos weekends", "Use simple meals during busy days"],
    grocery: ["Chicken / turkey / fish", "Eggs / egg whites", "Greek yogurt", "Rice / potatoes / oats", "Berries / bananas / apples", "Salad vegetables / greens", "Olive oil / nuts"],
    sampleDay: ["Breakfast — Eggs, toast, fruit", "Lunch — Chicken wrap + salad", "Snack — Protein smoothie", "Dinner — Fish, sweet potato, vegetables"],
  },
};

export default function NutritionClient({ membershipType }) {
  const membership = String(membershipType || "").toLowerCase();
  const isStarter = membership === "starter";
  const [selectedGoal, setSelectedGoal] = useState("Build Muscle");
  const plan = nutritionPlans[selectedGoal];

  return (
    <div style={{ display: "grid", gap: "22px" }}>
      <section style={sectionCard}>
        <div style={eyebrow}>Choose Goal</div>
        <div style={goalTabs}>
          {Object.keys(nutritionPlans).map((goal) => (
            <button
              key={goal}
              onClick={() => setSelectedGoal(goal)}
              style={{ ...goalTab, background: selectedGoal === goal ? "white" : "rgba(255,255,255,0.04)", color: selectedGoal === goal ? "black" : "white" }}
            >
              {goal}
            </button>
          ))}
        </div>
      </section>

      <section style={sectionCard}>
        <div style={sectionTop}><div><div style={eyebrow}>Nutrition Direction</div><h2 style={sectionTitle}>{selectedGoal}</h2></div></div>
        <p style={muted}>{plan.summary}</p>
        <div style={macroGrid}>
          <div style={macroCard}><div style={macroLabel}>Calories</div><div style={macroValue}>{plan.calories}</div></div>
          <div style={macroCard}><div style={macroLabel}>Protein</div><div style={macroValue}>{plan.protein}</div></div>
          <div style={macroCard}><div style={macroLabel}>Carbs</div><div style={macroValue}>{plan.carbs}</div></div>
          <div style={macroCard}><div style={macroLabel}>Fats</div><div style={macroValue}>{plan.fats}</div></div>
          <div style={macroCard}><div style={macroLabel}>Hydration</div><div style={macroValue}>{plan.hydration}</div></div>
        </div>
      </section>

      <section style={twoColGrid}>
        <div style={sectionCard}><div style={eyebrow}>Meal Timing</div><h2 style={sectionTitle}>How to structure your day</h2><ul style={list}>{plan.timing.map((item) => <li key={item}>{item}</li>)}</ul></div>
        <div style={sectionCard}><div style={eyebrow}>Grocery Base</div><h2 style={sectionTitle}>What to keep in the house</h2><ul style={list}>{plan.grocery.map((item) => <li key={item}>{item}</li>)}</ul></div>
      </section>

      <section style={sectionCard}>
        <div style={eyebrow}>Sample Day</div>
        <h2 style={sectionTitle}>Example eating day</h2>
        <div style={{ display: "grid", gap: "12px" }}>{plan.sampleDay.map((meal) => <div key={meal} style={mealCard}>{meal}</div>)}</div>
      </section>

      {isStarter && (
        <section style={lockedCard}>
          <div style={lockedTitle}>Starter nutrition access</div>
          <p style={muted}>Starter gives you a full usable nutrition foundation. Premium and VIP unlock deeper personalized tracking and richer connected tools later.</p>
        </section>
      )}
    </div>
  );
}

const sectionCard = { background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "22px", padding: "24px" };
const lockedCard = { background: "rgba(255,255,255,0.03)", border: "1px dashed rgba(255,255,255,0.2)", borderRadius: "22px", padding: "24px" };
const lockedTitle = { fontSize: "24px", fontWeight: "800", marginBottom: "8px" };
const eyebrow = { fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.16em", color: "rgba(255,255,255,0.45)", marginBottom: "8px" };
const sectionTop = { marginBottom: "14px" };
const sectionTitle = { margin: 0, fontSize: "28px", fontWeight: "800" };
const muted = { color: "rgba(255,255,255,0.68)", lineHeight: 1.8 };
const goalTabs = { display: "flex", gap: "10px", flexWrap: "wrap" };
const goalTab = { padding: "12px 14px", borderRadius: "12px", border: "1px solid rgba(255,255,255,0.12)", fontWeight: "700", cursor: "pointer" };
const macroGrid = { display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))", gap: "14px", marginTop: "18px" };
const macroCard = { background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "16px", padding: "18px" };
const macroLabel = { color: "rgba(255,255,255,0.56)", marginBottom: "8px" };
const macroValue = { fontWeight: "800", lineHeight: 1.6 };
const twoColGrid = { display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))", gap: "22px" };
const list = { paddingLeft: "18px", lineHeight: 1.9, color: "rgba(255,255,255,0.72)" };
const mealCard = { background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "14px", padding: "14px 16px" };
