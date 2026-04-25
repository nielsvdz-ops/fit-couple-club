"use client";

import { useMemo, useState } from "react";
import { nutritionPlans } from "../lib/mealPlans";

const activityOptions = [
  { value: "sedentary", label: "Sedentary", multiplier: 1.2 },
  { value: "light", label: "Light activity", multiplier: 1.375 },
  { value: "moderate", label: "Moderate activity", multiplier: 1.55 },
  { value: "active", label: "Active", multiplier: 1.725 },
];

const fallbackPlan = {
  summary:
    "Personalized nutrition guidance will appear here once meal plan data is available.",
  timing: [],
  grocery: [],
  sampleDays: [],
};

function calculateBmr({ sex, weightKg, heightCm, age }) {
  if (sex === "male") return 10 * weightKg + 6.25 * heightCm - 5 * age + 5;
  return 10 * weightKg + 6.25 * heightCm - 5 * age - 161;
}

function parseNumber(value, fallback) {
  const number = Number(value);
  return Number.isFinite(number) && number > 0 ? number : fallback;
}

function roundToNearest(value, nearest = 10) {
  return Math.round(value / nearest) * nearest;
}

function getGoalAdjustment(goal) {
  const clean = String(goal || "").toLowerCase();

  if (clean.includes("fat") || clean.includes("shred") || clean.includes("loss")) {
    return -400;
  }

  if (clean.includes("muscle") || clean.includes("build") || clean.includes("gain")) {
    return 250;
  }

  if (clean.includes("performance") || clean.includes("athletic")) {
    return 150;
  }

  return 0;
}

export default function NutritionClient({ membershipType }) {
  const membership = String(membershipType || "").toLowerCase().trim();

  const hasNutritionAccess =
    membership === "nutrition" ||
    membership === "full_access" ||
    membership === "vip" ||
    membership === "coaching";

  const goals = Object.keys(nutritionPlans || {});
  const defaultGoal = goals.includes("Build Muscle")
    ? "Build Muscle"
    : goals[0] || "Custom Nutrition";

  const [selectedGoal, setSelectedGoal] = useState(defaultGoal);
  const [selectedDay, setSelectedDay] = useState(0);

  const [sex, setSex] = useState("male");
  const [age, setAge] = useState("35");
  const [weightKg, setWeightKg] = useState("85");
  const [heightCm, setHeightCm] = useState("180");
  const [activityLevel, setActivityLevel] = useState("moderate");

  const plan =
    nutritionPlans?.[selectedGoal] ||
    nutritionPlans?.[defaultGoal] ||
    fallbackPlan;

  const safeSampleDays = Array.isArray(plan?.sampleDays)
    ? plan.sampleDays
    : [];

  const safeTiming = Array.isArray(plan?.timing) ? plan.timing : [];
  const safeGrocery = Array.isArray(plan?.grocery) ? plan.grocery : [];

  const targets = useMemo(() => {
    const cleanAge = parseNumber(age, 35);
    const cleanWeight = parseNumber(weightKg, 85);
    const cleanHeight = parseNumber(heightCm, 180);

    const activity =
      activityOptions.find((item) => item.value === activityLevel) ||
      activityOptions[2];

    const bmr = calculateBmr({
      sex,
      weightKg: cleanWeight,
      heightCm: cleanHeight,
      age: cleanAge,
    });

    const maintenance = bmr * activity.multiplier;
    const targetCalories = maintenance + getGoalAdjustment(selectedGoal);

    const protein = cleanWeight * 2;
    const fats = cleanWeight * 0.8;
    const carbs = Math.max(
      60,
      (targetCalories - protein * 4 - fats * 9) / 4
    );

    return {
      bmr: roundToNearest(bmr),
      maintenance: roundToNearest(maintenance),
      targetCalories: roundToNearest(targetCalories),
      protein: `${Math.round(protein)}g`,
      carbs: `${Math.round(carbs)}g`,
      fats: `${Math.round(fats)}g`,
      hydration: `${Math.max(
        2,
        Math.round(cleanWeight * 0.04 * 10) / 10
      )}L water/day`,
    };
  }, [sex, age, weightKg, heightCm, activityLevel, selectedGoal]);

  const activeDay = useMemo(() => {
    return safeSampleDays[selectedDay] || safeSampleDays[0] || null;
  }, [safeSampleDays, selectedDay]);

  const profileKey = sex === "male" ? "men" : "women";

  const currentVariant =
    activeDay?.variants?.[profileKey] ||
    activeDay?.variants?.men ||
    activeDay?.variants?.women ||
    {
      totalCalories: "—",
      totalProtein: "—",
      meals: [],
    };

  const safeMeals = Array.isArray(currentVariant?.meals)
    ? currentVariant.meals
    : [];

  function handleGoalChange(goal) {
    setSelectedGoal(goal);
    setSelectedDay(0);
  }

  return (
    <div style={pageWrap}>
      <section style={heroCard}>
        <div style={eyebrow}>Personalized Nutrition Guidance</div>
        <h2 style={heroTitle}>Build your food structure around your body</h2>
        <p style={heroText}>
          Enter your sex, age, weight, height, activity level, and goal. The
          system calculates a realistic calorie and macro target first, then
          shows sample meal structures you can match to that target.
        </p>

        <div style={calculatorGrid}>
          <Field label="Sex">
            <select
              value={sex}
              onChange={(e) => setSex(e.target.value)}
              style={input}
            >
              <option style={optionStyle} value="male">
                Male
              </option>
              <option style={optionStyle} value="female">
                Female
              </option>
            </select>
          </Field>

          <Field label="Age">
            <input
              value={age}
              onChange={(e) => setAge(e.target.value)}
              style={input}
              inputMode="numeric"
            />
          </Field>

          <Field label="Weight kg">
            <input
              value={weightKg}
              onChange={(e) => setWeightKg(e.target.value)}
              style={input}
              inputMode="numeric"
            />
          </Field>

          <Field label="Height cm">
            <input
              value={heightCm}
              onChange={(e) => setHeightCm(e.target.value)}
              style={input}
              inputMode="numeric"
            />
          </Field>

          <Field label="Activity">
            <select
              value={activityLevel}
              onChange={(e) => setActivityLevel(e.target.value)}
              style={input}
            >
              {activityOptions.map((item) => (
                <option key={item.value} value={item.value} style={optionStyle}>
                  {item.label}
                </option>
              ))}
            </select>
          </Field>

          <Field label="Goal">
            <select
              value={selectedGoal}
              onChange={(e) => handleGoalChange(e.target.value)}
              style={input}
            >
              {goals.length > 0 ? (
                goals.map((goal) => (
                  <option key={goal} value={goal} style={optionStyle}>
                    {goal}
                  </option>
                ))
              ) : (
                <option value="Custom Nutrition" style={optionStyle}>
                  Custom Nutrition
                </option>
              )}
            </select>
          </Field>
        </div>

        <div style={macroGrid}>
          <MacroCard
            label="Target Calories"
            value={`${targets.targetCalories} kcal`}
          />
          <MacroCard label="Maintenance" value={`${targets.maintenance} kcal`} />
          <MacroCard label="Protein" value={targets.protein} />
          <MacroCard label="Carbs" value={targets.carbs} />
          <MacroCard label="Fats" value={targets.fats} />
          <MacroCard label="Hydration" value={targets.hydration} />
        </div>
      </section>

      <section style={sectionCard}>
        <div style={sectionTop}>
          <div style={eyebrow}>Overview</div>
          <h3 style={sectionTitle}>{selectedGoal}</h3>
          <p style={muted}>{plan?.summary || fallbackPlan.summary}</p>
        </div>

        <div style={sectionTop}>
          <h3 style={sectionTitleSmall}>Nutrition timing reminders</h3>
        </div>

        {safeTiming.length > 0 ? (
          <ul style={ingredientsList}>
            {safeTiming.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        ) : (
          <p style={muted}>
            Timing guidance will show here when this plan has timing data.
          </p>
        )}

        <div style={{ marginTop: "20px" }}>
          <h3 style={sectionTitleSmall}>Core grocery list</h3>

          {safeGrocery.length > 0 ? (
            <ul style={ingredientsList}>
              {safeGrocery.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          ) : (
            <p style={muted}>
              Grocery guidance will show here when this plan has grocery data.
            </p>
          )}
        </div>
      </section>

      <section style={sectionCard}>
        <div style={sectionTop}>
          <div style={eyebrow}>Sample days</div>
          <h3 style={sectionTitle}>14-day nutrition structure</h3>
          <p style={muted}>
            These are sample meal structures. Use the calculated calorie and
            macro targets above to scale portions up or down for your body.
          </p>
        </div>

        {safeSampleDays.length > 0 ? (
          <>
            <div style={dayTabs}>
              {safeSampleDays.map((day, index) => {
                const active = selectedDay === index;

                return (
                  <button
                    key={day?.title || `day-${index}`}
                    onClick={() => setSelectedDay(index)}
                    style={{
                      ...dayTab,
                      background: active
                        ? "rgba(255,255,255,0.14)"
                        : "rgba(255,255,255,0.03)",
                      border: active
                        ? "1px solid rgba(255,255,255,0.22)"
                        : "1px solid rgba(255,255,255,0.08)",
                      color: "white",
                    }}
                  >
                    Day {index + 1}
                  </button>
                );
              })}
            </div>

            <div style={featuredDayCard}>
              <div style={featuredDayTop}>
                <div>
                  <div style={featuredDayTitle}>
                    {activeDay?.title || `Day ${selectedDay + 1}`} —{" "}
                    {sex === "male" ? "Male" : "Female"} sample
                  </div>
                  <div style={featuredDayMeta}>
                    <span style={featuredMetaPill}>
                      Calculated target: {targets.targetCalories} kcal
                    </span>
                    <span style={featuredMetaPill}>
                      Protein: {targets.protein}
                    </span>
                  </div>
                </div>
              </div>

              {safeMeals.length > 0 ? (
                <div style={mealsGrid}>
                  {safeMeals.map((meal, index) => (
                    <MealCard
                      key={`${activeDay?.title || "day"}-${sex}-${
                        meal?.label || index
                      }-${meal?.title || index}`}
                      meal={meal}
                    />
                  ))}
                </div>
              ) : (
                <p style={muted}>
                  No meals found for this day yet. Add meals under this plan in
                  <code style={inlineCode}> lib/mealPlans.js</code>.
                </p>
              )}
            </div>
          </>
        ) : (
          <div style={emptyBox}>
            No sample days found yet. Add <code style={inlineCode}>sampleDays</code>{" "}
            to this goal inside <code style={inlineCode}>lib/mealPlans.js</code>.
          </div>
        )}
      </section>

      {!hasNutritionAccess && (
        <section style={lockedCard}>
          <div style={lockedTitle}>Nutrition access locked</div>
          <p style={muted}>
            Upgrade your membership to unlock full nutrition guidance,
            goal-based meal structures, and complete sample day support.
          </p>
          <a href="/billing" style={unlockButton}>
            Upgrade Now
          </a>
        </section>
      )}
    </div>
  );
}

function Field({ label, children }) {
  return (
    <div style={fieldWrap}>
      <div style={miniHeading}>{label}</div>
      {children}
    </div>
  );
}

function MacroCard({ label, value }) {
  return (
    <div style={macroCard}>
      <div style={macroLabel}>{label}</div>
      <div style={macroValue}>{value}</div>
    </div>
  );
}

function MealCard({ meal }) {
  const ingredients = Array.isArray(meal?.ingredients) ? meal.ingredients : [];

  return (
    <div style={mealCard}>
      <div style={mealTopRow}>
        <div>
          <div style={mealLabel}>{meal?.label || "Meal"}</div>
          <div style={mealTitle}>{meal?.title || "Untitled meal"}</div>
        </div>

        <div style={mealStats}>
          {meal?.calories ? (
            <span style={mealStatPill}>{meal.calories}</span>
          ) : null}
          {meal?.protein ? (
            <span style={mealStatPill}>{meal.protein}</span>
          ) : null}
        </div>
      </div>

      <div style={mealSection}>
        <div style={miniHeading}>Ingredients</div>
        {ingredients.length > 0 ? (
          <ul style={ingredientsList}>
            {ingredients.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        ) : (
          <p style={mealMethod}>Ingredients not added yet.</p>
        )}
      </div>

      <div style={mealSection}>
        <div style={miniHeading}>Method</div>
        <p style={mealMethod}>{meal?.method || "Method not added yet."}</p>
      </div>
    </div>
  );
}

const pageWrap = { display: "grid", gap: "22px" };

const heroCard = {
  background:
    "linear-gradient(180deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.03) 100%)",
  border: "1px solid rgba(255,255,255,0.09)",
  borderRadius: "24px",
  padding: "28px",
};

const sectionCard = {
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: "22px",
  padding: "24px",
};

const lockedCard = {
  background: "rgba(255,255,255,0.03)",
  border: "1px dashed rgba(255,255,255,0.2)",
  borderRadius: "22px",
  padding: "24px",
};

const emptyBox = {
  background: "rgba(255,255,255,0.03)",
  border: "1px dashed rgba(255,255,255,0.16)",
  borderRadius: "18px",
  padding: "18px",
  color: "rgba(255,255,255,0.72)",
  lineHeight: 1.7,
};

const inlineCode = {
  background: "rgba(255,255,255,0.08)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: "8px",
  padding: "2px 6px",
  color: "white",
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
  fontWeight: "800",
  lineHeight: 1.08,
};

const heroText = {
  color: "rgba(255,255,255,0.72)",
  lineHeight: 1.8,
  marginTop: "12px",
  maxWidth: "820px",
};

const calculatorGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))",
  gap: "14px",
  marginTop: "22px",
};

const fieldWrap = { display: "grid", gap: "8px" };

const input = {
  width: "100%",
  padding: "14px",
  borderRadius: "12px",
  background: "#111",
  color: "white",
  border: "1px solid rgba(255,255,255,0.14)",
  outline: "none",
};

const optionStyle = {
  background: "#111",
  color: "white",
};

const sectionTop = { marginBottom: "14px" };

const sectionTitle = {
  margin: 0,
  fontSize: "28px",
  fontWeight: "800",
};

const sectionTitleSmall = {
  margin: 0,
  fontSize: "24px",
  fontWeight: "800",
};

const muted = {
  color: "rgba(255,255,255,0.68)",
  lineHeight: 1.8,
};

const macroGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(160px,1fr))",
  gap: "14px",
  marginTop: "18px",
};

const macroCard = {
  background: "rgba(255,255,255,0.03)",
  border: "1px solid rgba(255,255,255,0.06)",
  borderRadius: "16px",
  padding: "18px",
};

const macroLabel = {
  color: "rgba(255,255,255,0.56)",
  marginBottom: "8px",
};

const macroValue = {
  fontWeight: "800",
  lineHeight: 1.6,
};

const dayTabs = {
  display: "flex",
  gap: "10px",
  flexWrap: "wrap",
};

const dayTab = {
  padding: "12px 14px",
  borderRadius: "12px",
  fontWeight: "700",
  cursor: "pointer",
};

const featuredDayCard = {
  marginTop: "18px",
  background: "rgba(255,255,255,0.03)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: "20px",
  padding: "20px",
};

const featuredDayTop = {
  display: "flex",
  justifyContent: "space-between",
  gap: "12px",
  alignItems: "center",
  flexWrap: "wrap",
  marginBottom: "16px",
};

const featuredDayTitle = {
  fontSize: "24px",
  fontWeight: "800",
};

const featuredDayMeta = {
  display: "flex",
  gap: "10px",
  flexWrap: "wrap",
  marginTop: "10px",
};

const featuredMetaPill = {
  padding: "8px 12px",
  borderRadius: "999px",
  background: "rgba(255,255,255,0.08)",
  border: "1px solid rgba(255,255,255,0.1)",
  fontWeight: "800",
};

const mealsGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
  gap: "16px",
};

const mealCard = {
  background: "rgba(255,255,255,0.03)",
  border: "1px solid rgba(255,255,255,0.06)",
  borderRadius: "18px",
  padding: "18px",
};

const mealTopRow = {
  display: "flex",
  justifyContent: "space-between",
  gap: "12px",
  alignItems: "start",
  marginBottom: "14px",
};

const mealLabel = {
  fontSize: "12px",
  textTransform: "uppercase",
  letterSpacing: "0.12em",
  color: "rgba(255,255,255,0.48)",
  marginBottom: "8px",
};

const mealTitle = {
  fontSize: "22px",
  fontWeight: "800",
};

const mealStats = {
  display: "flex",
  gap: "8px",
  flexWrap: "wrap",
};

const mealStatPill = {
  padding: "8px 10px",
  borderRadius: "999px",
  background: "rgba(255,255,255,0.08)",
  border: "1px solid rgba(255,255,255,0.1)",
  fontWeight: "700",
};

const mealSection = {
  marginTop: "12px",
};

const miniHeading = {
  fontSize: "12px",
  textTransform: "uppercase",
  letterSpacing: "0.12em",
  color: "rgba(255,255,255,0.5)",
  marginBottom: "8px",
};

const ingredientsList = {
  margin: 0,
  paddingLeft: "18px",
  color: "rgba(255,255,255,0.78)",
  lineHeight: 1.8,
};

const mealMethod = {
  color: "rgba(255,255,255,0.74)",
  lineHeight: 1.8,
  margin: 0,
};

const lockedTitle = {
  fontSize: "24px",
  fontWeight: "800",
  marginBottom: "10px",
};

const unlockButton = {
  display: "inline-block",
  marginTop: "14px",
  padding: "14px 18px",
  background: "white",
  color: "black",
  borderRadius: "12px",
  fontWeight: "800",
  textDecoration: "none",
};
