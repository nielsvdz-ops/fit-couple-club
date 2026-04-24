"use client";

import { useMemo, useState } from "react";
import {
  MEAL_GOALS,
  WEEK_DAYS,
  buildMealPlansForGoal,
  getMealPlanAccessLimit,
} from "../lib/mealPlans";

export default function RecipesClient({ membershipType }) {
  const membership = String(membershipType || "").toLowerCase().trim();

  const hasNutritionAccess =
    membership === "nutrition" ||
    membership === "full_access" ||
    membership === "vip" ||
    membership === "coaching";

  const [selectedGoal, setSelectedGoal] = useState(MEAL_GOALS[0].value);
  const [selectedPlanIndex, setSelectedPlanIndex] = useState(0);
  const [selectedDay, setSelectedDay] = useState("Monday");

  const allPlans = useMemo(
    () => buildMealPlansForGoal(selectedGoal),
    [selectedGoal]
  );

  const visibleCount = getMealPlanAccessLimit(membership);
  const visiblePlans = allPlans.slice(0, visibleCount);

  const selectedPlan =
    visiblePlans[selectedPlanIndex] || visiblePlans[0] || allPlans[0];

  const selectedDayPlan =
    selectedPlan?.days.find((d) => d.day === selectedDay) ||
    selectedPlan?.days?.[0];

  return (
    <div style={wrap}>
      <section style={heroCard}>
        <div style={eyebrow}>Nutrition System</div>
        <h2 style={heroTitle}>
          Choose your goal and get a full daily food routine
        </h2>
        <p style={heroText}>
          Pick your goal and browse complete meal schedules from Monday to Sunday.
          Every day includes meals, calories, macros, ingredients, and instructions.
        </p>

        <div style={filterRow}>
          <div style={fieldWrap}>
            <div style={miniLabel}>Goal</div>
            <select
              value={selectedGoal}
              onChange={(e) => {
                setSelectedGoal(e.target.value);
                setSelectedPlanIndex(0);
                setSelectedDay("Monday");
              }}
              style={input}
            >
              {MEAL_GOALS.map((goal) => (
                <option key={goal.value} value={goal.value}>
                  {goal.label}
                </option>
              ))}
            </select>
          </div>

          <div style={fieldWrap}>
            <div style={miniLabel}>Daily Routine</div>
            <select
              value={selectedPlanIndex}
              onChange={(e) => {
                setSelectedPlanIndex(Number(e.target.value));
                setSelectedDay("Monday");
              }}
              style={input}
            >
              {visiblePlans.map((plan, index) => (
                <option key={plan.id} value={index}>
                  {plan.title}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div style={goalInfoGrid}>
          <InfoCard label="Goal" value={selectedPlan?.goalLabel} />
          <InfoCard label="Target Calories" value={selectedPlan?.targetCalories} />
          <InfoCard label="Protein Target" value={selectedPlan?.proteinTarget} />
          <InfoCard label="Style" value={selectedPlan?.styleNote} />
        </div>
      </section>

      <section style={panel}>
        <div style={sectionHead}>
          <div>
            <div style={eyebrow}>Weekly Schedule</div>
            <h3 style={sectionTitle}>{selectedPlan?.title}</h3>
            <p style={sectionText}>{selectedPlan?.description}</p>
          </div>
        </div>

        <div style={dayTabs}>
          {WEEK_DAYS.map((day) => {
            const active = selectedDay === day;
            return (
              <button
                key={day}
                onClick={() => setSelectedDay(day)}
                style={{
                  ...dayTab,
                  background: active ? "white" : "rgba(255,255,255,0.04)",
                  color: active ? "black" : "white",
                }}
              >
                {day}
              </button>
            );
          })}
        </div>

        {selectedDayPlan && (
          <div style={{ display: "grid", gap: "18px", marginTop: "18px" }}>
            <div style={summaryGrid}>
              <SummaryCard label="Daily Calories" value={selectedDayPlan.totalCalories} />
              <SummaryCard label="Protein" value={selectedDayPlan.totalProtein} />
              <SummaryCard label="Carbs" value={selectedDayPlan.totalCarbs} />
              <SummaryCard label="Fats" value={selectedDayPlan.totalFats} />
            </div>

            <div style={mealGrid}>
              {selectedDayPlan.meals.map((meal) => (
                <div key={meal.mealName} style={mealCard}>
                  <div style={mealTop}>
                    <div>
                      <div style={mealTime}>{meal.time}</div>
                      <h4 style={mealTitle}>{meal.mealName}</h4>
                    </div>
                    <div style={calorieBadge}>{meal.calories}</div>
                  </div>

                  <div style={macroRow}>
                    <span>Protein: {meal.protein}</span>
                    <span>Carbs: {meal.carbs}</span>
                    <span>Fats: {meal.fats}</span>
                  </div>

                  <div style={detailBlock}>
                    <div style={miniLabel}>Ingredients</div>
                    <ul style={bulletList}>
                      {meal.ingredients.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <div style={detailBlock}>
                    <div style={miniLabel}>How to make it</div>
                    <ol style={orderedList}>
                      {meal.steps.map((step) => (
                        <li key={step}>{step}</li>
                      ))}
                    </ol>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {!hasNutritionAccess && (
          <div style={lockedBox}>
            <div style={lockedTitle}>Recipe access locked</div>
            <p style={lockedText}>
              Upgrade your membership to unlock the full recipe library,
              complete meal plans, and advanced nutrition guidance.
            </p>
            <a href="/billing" style={unlockButton}>
              Upgrade Now
            </a>
          </div>
        )}
      </section>
    </div>
  );
}
function InfoCard({ label, value }) {
  return (
    <div style={infoCard}>
      <div style={infoLabel}>{label}</div>
      <div style={infoValue}>{value || "—"}</div>
    </div>
  );
}

function SummaryCard({ label, value }) {
  return (
    <div style={summaryCard}>
      <div style={infoLabel}>{label}</div>
      <div style={summaryValue}>{value || "—"}</div>
    </div>
  );
}

const wrap = { display: "grid", gap: "22px" };

const heroCard = {
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: "24px",
  padding: "28px",
};

const eyebrow = {
  fontSize: "12px",
  textTransform: "uppercase",
  letterSpacing: "0.16em",
  color: "rgba(255,255,255,0.45)",
  marginBottom: "8px",
};

const heroTitle = {
  margin: 0,
  fontSize: "clamp(28px, 4vw, 42px)",
  fontWeight: "900",
};

const heroText = {
  color: "rgba(255,255,255,0.7)",
  lineHeight: 1.8,
  maxWidth: "850px",
};

const filterRow = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))",
  gap: "14px",
  marginTop: "22px",
};

const fieldWrap = { display: "grid", gap: "8px" };

const miniLabel = {
  fontSize: "12px",
  textTransform: "uppercase",
  letterSpacing: "0.12em",
  color: "rgba(255,255,255,0.5)",
};

const input = {
  width: "100%",
  padding: "14px",
  borderRadius: "12px",
  background: "rgba(255,255,255,0.06)",
  color: "white",
  border: "1px solid rgba(255,255,255,0.12)",
};

const goalInfoGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))",
  gap: "14px",
  marginTop: "22px",
};

const infoCard = {
  background: "rgba(255,255,255,0.03)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: "16px",
  padding: "16px",
};

const infoLabel = {
  color: "rgba(255,255,255,0.5)",
  fontSize: "13px",
  marginBottom: "8px",
};

const infoValue = {
  color: "white",
  fontWeight: "800",
  lineHeight: 1.5,
};

const panel = {
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: "24px",
  padding: "24px",
};

const sectionHead = {
  display: "flex",
  justifyContent: "space-between",
  gap: "16px",
  flexWrap: "wrap",
  marginBottom: "18px",
};

const sectionTitle = {
  margin: 0,
  fontSize: "30px",
  fontWeight: "900",
};

const sectionText = {
  color: "rgba(255,255,255,0.68)",
  lineHeight: 1.8,
};

const dayTabs = {
  display: "flex",
  gap: "10px",
  flexWrap: "wrap",
};

const dayTab = {
  padding: "12px 14px",
  borderRadius: "12px",
  border: "1px solid rgba(255,255,255,0.1)",
  fontWeight: "800",
  cursor: "pointer",
};

const summaryGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(160px,1fr))",
  gap: "12px",
};

const summaryCard = {
  background: "rgba(255,255,255,0.03)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: "16px",
  padding: "16px",
};

const summaryValue = {
  fontSize: "20px",
  fontWeight: "900",
};

const mealGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
  gap: "16px",
};

const mealCard = {
  background: "rgba(255,255,255,0.03)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: "20px",
  padding: "18px",
};

const mealTop = {
  display: "flex",
  justifyContent: "space-between",
  gap: "12px",
  alignItems: "start",
};

const mealTime = {
  color: "rgba(255,255,255,0.5)",
  fontSize: "13px",
  marginBottom: "6px",
};

const mealTitle = {
  margin: 0,
  fontSize: "22px",
  fontWeight: "900",
};

const calorieBadge = {
  padding: "8px 10px",
  borderRadius: "999px",
  background: "rgba(255,255,255,0.08)",
  fontWeight: "800",
};

const macroRow = {
  display: "flex",
  gap: "8px",
  flexWrap: "wrap",
  color: "rgba(255,255,255,0.72)",
  marginTop: "14px",
};

const detailBlock = {
  marginTop: "16px",
};

const bulletList = {
  paddingLeft: "18px",
  lineHeight: 1.8,
  color: "rgba(255,255,255,0.76)",
};

const orderedList = {
  paddingLeft: "18px",
  lineHeight: 1.8,
  color: "rgba(255,255,255,0.76)",
};

const lockedBox = {
  marginTop: "24px",
  border: "1px dashed rgba(255,255,255,0.2)",
  borderRadius: "18px",
  padding: "20px",
};

const lockedTitle = {
  fontSize: "24px",
  fontWeight: "900",
};

const lockedText = {
  color: "rgba(255,255,255,0.68)",
  lineHeight: 1.8,
};

const unlockButton = {
  display: "inline-block",
  marginTop: "12px",
  padding: "12px 16px",
  borderRadius: "12px",
  background: "white",
  color: "black",
  textDecoration: "none",
  fontWeight: "900",
};
