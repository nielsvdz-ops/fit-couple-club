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
