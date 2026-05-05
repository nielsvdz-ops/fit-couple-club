"use client";

import { useMemo, useState } from "react";
import { useLanguage } from "../lib/useLanguage";
import {
  MEAL_GOALS,
  WEEK_DAYS,
  buildMealPlansForGoal,
  getMealPlanAccessLimit,
} from "../lib/mealPlans";

const activityOptions = [
  { value: "sedentary", label: "Sedentary", nl: "Zittend", multiplier: 1.2 },
  {
    value: "light",
    label: "Light activity",
    nl: "Lichte activiteit",
    multiplier: 1.375,
  },
  {
    value: "moderate",
    label: "Moderate activity",
    nl: "Gemiddelde activiteit",
    multiplier: 1.55,
  },
  { value: "active", label: "Active", nl: "Actief", multiplier: 1.725 },
];

const goalAdjustments = {
  fat_loss: -400,
  lean_muscle: 250,
  maintenance: 0,
  performance: 150,
};

const dayLabels = {
  en: {
    Monday: "Monday",
    Tuesday: "Tuesday",
    Wednesday: "Wednesday",
    Thursday: "Thursday",
    Friday: "Friday",
    Saturday: "Saturday",
    Sunday: "Sunday",
  },
  nl: {
    Monday: "Maandag",
    Tuesday: "Dinsdag",
    Wednesday: "Woensdag",
    Thursday: "Donderdag",
    Friday: "Vrijdag",
    Saturday: "Zaterdag",
    Sunday: "Zondag",
  },
};

function calculateBmr({ sex, weightKg, heightCm, age }) {
  if (sex === "male") {
    return 10 * weightKg + 6.25 * heightCm - 5 * age + 5;
  }

  return 10 * weightKg + 6.25 * heightCm - 5 * age - 161;
}

function getGoalAdjustment(goal) {
  if (goal.includes("fat") || goal.includes("loss") || goal.includes("shred")) {
    return goalAdjustments.fat_loss;
  }

  if (
    goal.includes("muscle") ||
    goal.includes("gain") ||
    goal.includes("build")
  ) {
    return goalAdjustments.lean_muscle;
  }

  if (goal.includes("performance")) {
    return goalAdjustments.performance;
  }

  return goalAdjustments.maintenance;
}

function parseNumber(value) {
  const number = Number(value);
  return Number.isFinite(number) ? number : 0;
}

function roundToNearest(value, nearest = 10) {
  return Math.round(value / nearest) * nearest;
}

function extractNumber(value) {
  if (!value) return 0;
  const match = String(value).match(/\d+/);
  return match ? Number(match[0]) : 0;
}

function scaleMacro(value, scale) {
  const number = extractNumber(value);
  if (!number) return value || "—";
  return `${Math.max(1, Math.round(number * scale))}g`;
}

function scaleCalories(value, scale) {
  const number = extractNumber(value);
  if (!number) return value || "—";
  return `${Math.max(1, Math.round(number * scale))} kcal`;
}

function translateGoalLabel(goal, language) {
  if (language !== "nl") return goal.label;

  const clean = String(goal.label || "").toLowerCase();

  if (clean.includes("fat") || clean.includes("loss") || clean.includes("shred")) {
    return "Vetverlies";
  }

  if (clean.includes("muscle") || clean.includes("gain") || clean.includes("build")) {
    return "Spieropbouw";
  }

  if (clean.includes("performance")) {
    return "Prestatie";
  }

  if (clean.includes("maintenance")) {
    return "Onderhoud";
  }

  return goal.label;
}

export default function RecipesClient({ membershipType }) {
  const { language } = useLanguage();

  const t = {
    en: {
      eyebrow: "Personalized Nutrition System",
      heroTitle: "Build your daily meal plan around your body",
      heroText:
        "Enter your sex, age, weight, height, activity level, and goal. The system calculates your calorie target and adjusts the meal plan so it fits men and women more realistically.",
      sex: "Sex",
      male: "Male",
      female: "Female",
      age: "Age",
      weight: "Weight kg",
      height: "Height cm",
      activity: "Activity",
      goal: "Goal",
      dailyRoutine: "Daily Routine",
      targetCalories: "Target Calories",
      maintenance: "Maintenance",
      protein: "Protein",
      carbs: "Carbs",
      fats: "Fats",
      weeklySchedule: "Weekly Schedule",
      scaledText: "The portions are scaled toward your calculated target of",
      dailyCalories: "Daily Calories",
      ingredients: "Ingredients",
      howTo: "How to make it",
      lockedTitle: "Recipe access locked",
      lockedText:
        "Upgrade your membership to unlock the full recipe library, complete meal plans, and advanced nutrition guidance.",
      upgrade: "Upgrade Now",
    },
    nl: {
      eyebrow: "Persoonlijk Voedingssysteem",
      heroTitle: "Bouw je dagmenu rondom jouw lichaam",
      heroText:
        "Vul je geslacht, leeftijd, gewicht, lengte, activiteit en doel in. Het systeem berekent je caloriebehoefte en past het maaltijdplan realistischer aan.",
      sex: "Geslacht",
      male: "Man",
      female: "Vrouw",
      age: "Leeftijd",
      weight: "Gewicht kg",
      height: "Lengte cm",
      activity: "Activiteit",
      goal: "Doel",
      dailyRoutine: "Dagelijkse Routine",
      targetCalories: "Doel Calorieën",
      maintenance: "Onderhoud",
      protein: "Eiwitten",
      carbs: "Koolhydraten",
      fats: "Vetten",
      weeklySchedule: "Weekplanning",
      scaledText: "De porties zijn aangepast naar jouw berekende doel van",
      dailyCalories: "Dagelijkse Calorieën",
      ingredients: "Ingrediënten",
      howTo: "Bereiding",
      lockedTitle: "Recepten toegang vergrendeld",
      lockedText:
        "Upgrade je membership om de volledige receptenbibliotheek, complete maaltijdplannen en geavanceerde voedingsbegeleiding te ontgrendelen.",
      upgrade: "Upgrade Nu",
    },
  }[language];

  const membership = String(membershipType || "").toLowerCase().trim();

  const hasNutritionAccess =
    membership === "nutrition" ||
    membership === "full_access" ||
    membership === "vip" ||
    membership === "coaching";

  const [selectedGoal, setSelectedGoal] = useState(MEAL_GOALS[0].value);
  const [selectedPlanIndex, setSelectedPlanIndex] = useState(0);
  const [selectedDay, setSelectedDay] = useState("Monday");

  const [sex, setSex] = useState("male");
  const [age, setAge] = useState("35");
  const [weightKg, setWeightKg] = useState("85");
  const [heightCm, setHeightCm] = useState("180");
  const [activityLevel, setActivityLevel] = useState("moderate");

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

  const personalTargets = useMemo(() => {
    const cleanAge = parseNumber(age);
    const cleanWeight = parseNumber(weightKg);
    const cleanHeight = parseNumber(heightCm);

    const activity =
      activityOptions.find((item) => item.value === activityLevel) ||
      activityOptions[2];

    const bmr = calculateBmr({
      sex,
      weightKg: cleanWeight,
      heightCm: cleanHeight,
      age: cleanAge,
    });

    const maintenanceCalories = bmr * activity.multiplier;
    const targetCalories = maintenanceCalories + getGoalAdjustment(selectedGoal);

    const protein = cleanWeight * 2;
    const fats = cleanWeight * 0.8;
    const proteinCalories = protein * 4;
    const fatCalories = fats * 9;
    const carbs = Math.max(
      60,
      (targetCalories - proteinCalories - fatCalories) / 4
    );

    return {
      bmr: roundToNearest(bmr),
      maintenanceCalories: roundToNearest(maintenanceCalories),
      targetCalories: roundToNearest(targetCalories),
      protein: `${Math.round(protein)}g`,
      carbs: `${Math.round(carbs)}g`,
      fats: `${Math.round(fats)}g`,
    };
  }, [sex, age, weightKg, heightCm, activityLevel, selectedGoal]);

  const basePlanCalories = extractNumber(selectedPlan?.targetCalories) || 2000;
  const scale = personalTargets.targetCalories / basePlanCalories;

  return (
    <div style={wrap}>
      <section style={heroCard}>
        <div style={eyebrow}>{t.eyebrow}</div>
        <h2 style={heroTitle}>{t.heroTitle}</h2>
        <p style={heroText}>{t.heroText}</p>

        <div style={filterRow}>
          <Field label={t.sex}>
            <select
              value={sex}
              onChange={(e) => setSex(e.target.value)}
              style={input}
            >
              <option style={optionStyle} value="male">
                {t.male}
              </option>
              <option style={optionStyle} value="female">
                {t.female}
              </option>
            </select>
          </Field>

          <Field label={t.age}>
            <input
              value={age}
              onChange={(e) => setAge(e.target.value)}
              style={input}
              inputMode="numeric"
            />
          </Field>

          <Field label={t.weight}>
            <input
              value={weightKg}
              onChange={(e) => setWeightKg(e.target.value)}
              style={input}
              inputMode="numeric"
            />
          </Field>

          <Field label={t.height}>
            <input
              value={heightCm}
              onChange={(e) => setHeightCm(e.target.value)}
              style={input}
              inputMode="numeric"
            />
          </Field>

          <Field label={t.activity}>
            <select
              value={activityLevel}
              onChange={(e) => setActivityLevel(e.target.value)}
              style={input}
            >
              {activityOptions.map((item) => (
                <option key={item.value} style={optionStyle} value={item.value}>
                  {language === "nl" ? item.nl : item.label}
                </option>
              ))}
            </select>
          </Field>

          <Field label={t.goal}>
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
                <option key={goal.value} style={optionStyle} value={goal.value}>
                  {translateGoalLabel(goal, language)}
                </option>
              ))}
            </select>
          </Field>

          <Field label={t.dailyRoutine}>
            <select
              value={selectedPlanIndex}
              onChange={(e) => {
                setSelectedPlanIndex(Number(e.target.value));
                setSelectedDay("Monday");
              }}
              style={input}
            >
              {visiblePlans.map((plan, index) => (
                <option key={plan.id} style={optionStyle} value={index}>
                  {plan.title}
                </option>
              ))}
            </select>
          </Field>
        </div>

        <div style={goalInfoGrid}>
          <InfoCard
            label={t.targetCalories}
            value={`${personalTargets.targetCalories} kcal`}
          />
          <InfoCard
            label={t.maintenance}
            value={`${personalTargets.maintenanceCalories} kcal`}
          />
          <InfoCard label={t.protein} value={personalTargets.protein} />
          <InfoCard label={t.carbs} value={personalTargets.carbs} />
          <InfoCard label={t.fats} value={personalTargets.fats} />
        </div>
      </section>

      <section style={panel}>
        <div style={sectionHead}>
          <div>
            <div style={eyebrow}>{t.weeklySchedule}</div>
            <h3 style={sectionTitle}>{selectedPlan?.title}</h3>
            <p style={sectionText}>
              {selectedPlan?.description} {t.scaledText}{" "}
              {personalTargets.targetCalories} kcal.
            </p>
          </div>
        </div>

        <div style={dayTabs}>
          {WEEK_DAYS.map((day) => {
            const active = selectedDay === day;

            return (
              <button
                type="button"
                key={day}
                onClick={() => setSelectedDay(day)}
                style={{
                  ...dayTab,
                  background: active ? "white" : "rgba(255,255,255,0.04)",
                  color: active ? "black" : "white",
                }}
              >
                {dayLabels[language]?.[day] || day}
              </button>
            );
          })}
        </div>

        {selectedDayPlan && (
          <div style={mealSection}>
            <div style={summaryGrid}>
              <SummaryCard
                label={t.dailyCalories}
                value={`${personalTargets.targetCalories} kcal`}
              />
              <SummaryCard label={t.protein} value={personalTargets.protein} />
              <SummaryCard label={t.carbs} value={personalTargets.carbs} />
              <SummaryCard label={t.fats} value={personalTargets.fats} />
            </div>

            <div style={mealGrid}>
              {selectedDayPlan.meals.map((meal) => (
                <div key={meal.mealName} style={mealCard}>
                  <div style={mealTop}>
                    <div>
                      <div style={mealTime}>{meal.time}</div>
                      <h4 style={mealTitle}>{meal.mealName}</h4>
                    </div>

                    <div style={calorieBadge}>
                      {scaleCalories(meal.calories, scale)}
                    </div>
                  </div>

                  <div style={macroRow}>
                    <span>
                      {t.protein}: {scaleMacro(meal.protein, scale)}
                    </span>
                    <span>
                      {t.carbs}: {scaleMacro(meal.carbs, scale)}
                    </span>
                    <span>
                      {t.fats}: {scaleMacro(meal.fats, scale)}
                    </span>
                  </div>

                  <div style={detailBlock}>
                    <div style={miniLabel}>{t.ingredients}</div>
                    <ul style={bulletList}>
                      {meal.ingredients.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <div style={detailBlock}>
                    <div style={miniLabel}>{t.howTo}</div>
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
            <div style={lockedTitle}>{t.lockedTitle}</div>
            <p style={lockedText}>{t.lockedText}</p>

            <a href="/billing" style={unlockButton}>
              {t.upgrade}
            </a>
          </div>
        )}
      </section>
    </div>
  );
}

function Field({ label, children }) {
  return (
    <div style={fieldWrap}>
      <div style={miniLabel}>{label}</div>
      {children}
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

const wrap = {
  display: "grid",
  gap: "22px",
};

const heroCard = {
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: "24px",
  padding: "clamp(18px, 4vw, 28px)",
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
  fontSize: "clamp(28px, 7vw, 42px)",
  fontWeight: "900",
  lineHeight: 1.08,
};

const heroText = {
  color: "rgba(255,255,255,0.7)",
  lineHeight: 1.8,
  maxWidth: "850px",
};

const filterRow = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,180px),1fr))",
  gap: "14px",
  marginTop: "22px",
};

const fieldWrap = {
  display: "grid",
  gap: "8px",
};

const miniLabel = {
  fontSize: "12px",
  textTransform: "uppercase",
  letterSpacing: "0.12em",
  color: "rgba(255,255,255,0.5)",
};

const input = {
  width: "100%",
  boxSizing: "border-box",
  padding: "14px",
  borderRadius: "12px",
  background: "#111",
  color: "white",
  border: "1px solid rgba(255,255,255,0.12)",
  outline: "none",
  fontSize: "16px",
};

const optionStyle = {
  background: "#111",
  color: "white",
};

const goalInfoGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,160px),1fr))",
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
  fontWeight: "900",
  lineHeight: 1.5,
};

const panel = {
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: "24px",
  padding: "clamp(18px, 4vw, 24px)",
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
  fontSize: "clamp(24px, 6vw, 32px)",
  fontWeight: "900",
  lineHeight: 1.1,
};

const sectionText = {
  color: "rgba(255,255,255,0.68)",
  lineHeight: 1.8,
};

const dayTabs = {
  display: "flex",
  gap: "10px",
  overflowX: "auto",
  paddingBottom: "4px",
};

const dayTab = {
  flex: "0 0 auto",
  padding: "12px 14px",
  borderRadius: "12px",
  border: "1px solid rgba(255,255,255,0.1)",
  fontWeight: "900",
  cursor: "pointer",
};

const mealSection = {
  display: "grid",
  gap: "18px",
  marginTop: "18px",
};

const summaryGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,160px),1fr))",
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
  gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,300px),1fr))",
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
  flexWrap: "wrap",
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
  fontWeight: "900",
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