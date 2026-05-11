"use client";

import { useMemo, useState } from "react";
import nutritionPlans, {
  MEAL_GOALS,
  WEEK_DAYS,
  getMealPlanAccessLimit,
} from "../lib/mealPlans";
import { useLanguage } from "../lib/useLanguage";

const ui = {
  en: {
    pageEyebrow: "Nutrition system",
    pageTitle: "Personalized meal routines",
    pageSubtitle:
      "Choose your goal and routine. Every routine is built from the recipe database and turns into a supermarket shopping list.",
    goal: "Goal",
    routine: "Daily routine",
    weekDay: "Day",
    macros: "Daily macros",
    calories: "Calories",
    protein: "Protein",
    carbs: "Carbs",
    fats: "Fats",
    meals: "Meals",
    ingredients: "Ingredients",
    preparation: "Preparation",
    supermarket: "Supermarket generator",
    supermarketText:
      "This list combines all ingredients from the selected day so you know what to buy.",
    weeklySupermarket: "Weekly supermarket list",
    weeklyText:
      "This combines the selected routine for all seven days into one bigger grocery list.",
    selectedDay: "Selected day",
    fullWeek: "Full week",
    grams: "g",
    noPlan: "No plan found for this goal.",
    routineLocked:
      "This routine is locked for your current membership.",
    accessText:
      "Nutrition, Full Access, VIP and Coaching memberships unlock all nutrition routines.",
  },
  nl: {
    pageEyebrow: "Voedingssysteem",
    pageTitle: "Persoonlijke maaltijd routines",
    pageSubtitle:
      "Kies je doel en routine. Elke routine is gemaakt vanuit de recepten database en wordt omgezet naar een supermarkt boodschappenlijst.",
    goal: "Doel",
    routine: "Dagelijkse routine",
    weekDay: "Dag",
    macros: "Dagelijkse macro’s",
    calories: "Calorieën",
    protein: "Eiwitten",
    carbs: "Koolhydraten",
    fats: "Vetten",
    meals: "Maaltijden",
    ingredients: "Ingrediënten",
    preparation: "Bereiding",
    supermarket: "Supermarkt generator",
    supermarketText:
      "Deze lijst combineert alle ingrediënten van de geselecteerde dag zodat je weet wat je moet kopen.",
    weeklySupermarket: "Wekelijkse supermarkt lijst",
    weeklyText:
      "Dit combineert de geselecteerde routine voor alle zeven dagen in één grotere boodschappenlijst.",
    selectedDay: "Geselecteerde dag",
    fullWeek: "Volledige week",
    grams: "g",
    noPlan: "Geen plan gevonden voor dit doel.",
    routineLocked:
      "Deze routine is vergrendeld voor je huidige membership.",
    accessText:
      "Nutrition, Full Access, VIP en Coaching memberships ontgrendelen alle voedingsroutines.",
  },
};

function t(language, key) {
  return ui[language]?.[key] || ui.en[key] || key;
}

function safeNumber(value) {
  const match = String(value || "").match(/\d+/);
  return match ? Number(match[0]) : 0;
}

function translateGoal(goal, language) {
  if (language === "nl") {
    return goal?.nl || goal?.label || goal?.value || "";
  }

  return goal?.label || goal?.en || goal?.value || "";
}

function translateDay(day, language) {
  if (language !== "nl") return day;

  const map = {
    Monday: "Maandag",
    Tuesday: "Dinsdag",
    Wednesday: "Woensdag",
    Thursday: "Donderdag",
    Friday: "Vrijdag",
    Saturday: "Zaterdag",
    Sunday: "Zondag",
  };

  return map[day] || day;
}

function normalizeGoalValue(value) {
  const clean = String(value || "").toLowerCase().trim();

  if (clean === "lose-fat") return "fat-loss";
  if (clean === "build-muscle") return "muscle-gain";

  return clean || "fat-loss";
}

function translateFoodText(text, language) {
  if (language !== "nl") return text;

  const replacements = [
    ["Chicken breast", "kipfilet"],
    ["Chicken", "kip"],
    ["Turkey", "kalkoen"],
    ["Lean minced beef", "mager rundergehakt"],
    ["Beef", "rundvlees"],
    ["Steak", "steak"],
    ["Salmon", "zalm"],
    ["Cod", "kabeljauw"],
    ["Shrimp", "garnalen"],
    ["Tuna", "tonijn"],
    ["Tofu", "tofu"],
    ["Tempeh", "tempeh"],
    ["Seitan", "seitan"],
    ["Egg whites", "eiwitten"],
    ["Eggs", "eieren"],
    ["Greek yogurt", "Griekse yoghurt"],
    ["Low-fat quark", "magere kwark"],
    ["Skyr", "skyr"],
    ["Cottage cheese", "hüttenkäse"],
    ["Protein yogurt", "eiwityoghurt"],
    ["Whey protein", "whey eiwit"],
    ["Rice", "rijst"],
    ["Cooked rice", "gekookte rijst"],
    ["Brown rice", "zilvervliesrijst"],
    ["Basmati rice", "basmatirijst"],
    ["Quinoa", "quinoa"],
    ["Potatoes", "aardappelen"],
    ["Sweet potato", "zoete aardappel"],
    ["Pasta", "pasta"],
    ["Wrap", "wrap"],
    ["Couscous", "couscous"],
    ["Noodles", "noedels"],
    ["Oats", "havermout"],
    ["Granola", "granola"],
    ["Banana", "banaan"],
    ["Apple", "appel"],
    ["Berries", "bessen"],
    ["Strawberries", "aardbeien"],
    ["Blueberries", "blauwe bessen"],
    ["Mango", "mango"],
    ["Pineapple", "ananas"],
    ["Broccoli", "broccoli"],
    ["Spinach", "spinazie"],
    ["Green beans", "groene bonen"],
    ["Bell pepper", "paprika"],
    ["Zucchini", "courgette"],
    ["Mushrooms", "champignons"],
    ["Lettuce", "sla"],
    ["Tomatoes", "tomaten"],
    ["Cucumber", "komkommer"],
    ["Carrots", "wortelen"],
    ["Olive oil", "olijfolie"],
    ["Avocado", "avocado"],
    ["Peanut butter", "pindakaas"],
    ["Almonds", "amandelen"],
    ["Honey", "honing"],
    ["Cinnamon", "kaneel"],
    ["Soy sauce", "sojasaus"],
    ["Salsa", "salsa"],
    ["Tomato sauce", "tomatensaus"],
    ["Yogurt dressing", "yoghurt dressing"],
    ["Hot sauce", "hete saus"],
  ];

  let output = String(text || "");

  replacements.forEach(([en, nl]) => {
    output = output.replaceAll(en, nl);
  });

  return output;
}

function normalizeIngredientName(raw) {
  return String(raw || "")
    .replace(/^\d+\s*g\s+/i, "")
    .replace(/^\d+\s*ml\s+/i, "")
    .trim();
}

function buildShoppingListFromDay(day, language) {
  const map = {};

  (day?.meals || []).forEach((meal) => {
    (meal?.ingredients || []).forEach((ingredient) => {
      const grams = safeNumber(ingredient);
      const name = normalizeIngredientName(ingredient);
      const key = name.toLowerCase();

      if (!map[key]) {
        map[key] = {
          name: translateFoodText(name, language),
          grams: 0,
          usedIn: [],
        };
      }

      map[key].grams += grams;
      map[key].usedIn.push(translateFoodText(meal.mealName, language));
    });
  });

  return Object.values(map).sort((a, b) => a.name.localeCompare(b.name));
}

function buildShoppingListFromWeek(plan, language) {
  const map = {};

  (plan?.days || []).forEach((day) => {
    const dayList = buildShoppingListFromDay(day, language);

    dayList.forEach((item) => {
      const key = item.name.toLowerCase();

      if (!map[key]) {
        map[key] = {
          name: item.name,
          grams: 0,
          usedIn: [],
        };
      }

      map[key].grams += item.grams;
      map[key].usedIn.push(translateDay(day.day, language));
    });
  });

  return Object.values(map).sort((a, b) => a.name.localeCompare(b.name));
}

function formatAmount(grams, language) {
  const amount = Math.round(Number(grams || 0));

  if (amount >= 1000) {
    const kg = (amount / 1000).toFixed(amount % 1000 === 0 ? 0 : 1);
    return `${kg} kg`;
  }

  return `${amount}${t(language, "grams")}`;
}

export default function NutritionClient({ membershipType }) {
  const { language } = useLanguage();

  const [selectedGoal, setSelectedGoal] = useState("fat-loss");
  const [selectedRoutine, setSelectedRoutine] = useState(0);
  const [selectedDay, setSelectedDay] = useState(0);
  const [listMode, setListMode] = useState("day");

  const copy = ui[language] || ui.en;

  const accessLimit = getMealPlanAccessLimit
    ? getMealPlanAccessLimit(membershipType)
    : 999;

  const normalizedGoal = normalizeGoalValue(selectedGoal);
  const currentPlans = nutritionPlans?.[normalizedGoal] || [];
  const selectedPlan = currentPlans?.[selectedRoutine] || currentPlans?.[0] || null;
  const currentDay = selectedPlan?.days?.[selectedDay] || selectedPlan?.days?.[0] || null;
  const locked = selectedRoutine >= accessLimit;

  const dayShoppingList = useMemo(
    () => buildShoppingListFromDay(currentDay, language),
    [currentDay, language]
  );

  const weekShoppingList = useMemo(
    () => buildShoppingListFromWeek(selectedPlan, language),
    [selectedPlan, language]
  );

  const activeShoppingList =
    listMode === "week" ? weekShoppingList : dayShoppingList;

  function handleGoalChange(event) {
    setSelectedGoal(normalizeGoalValue(event.target.value));
    setSelectedRoutine(0);
    setSelectedDay(0);
  }

  function handleRoutineChange(event) {
    setSelectedRoutine(Number(event.target.value || 0));
    setSelectedDay(0);
  }

  if (!selectedPlan || !currentDay) {
    return (
      <div style={page}>
        <div style={emptyCard}>{copy.noPlan}</div>
      </div>
    );
  }

  return (
    <div style={page}>
      <section style={hero}>
        <div style={eyebrow}>{copy.pageEyebrow}</div>
        <h1 style={title}>{copy.pageTitle}</h1>
        <p style={subtitle}>{copy.pageSubtitle}</p>
      </section>

      <section style={controlsGrid}>
        <label style={field}>
          <span style={label}>{copy.goal}</span>
          <select value={selectedGoal} onChange={handleGoalChange} style={select}>
            {MEAL_GOALS.map((goal) => (
              <option key={goal.value} value={normalizeGoalValue(goal.value)}>
                {translateGoal(goal, language)}
              </option>
            ))}
          </select>
        </label>

        <label style={field}>
          <span style={label}>{copy.routine}</span>
          <select
            value={selectedRoutine}
            onChange={handleRoutineChange}
            style={select}
          >
            {currentPlans.map((plan, index) => (
              <option key={plan.id || index} value={index}>
                {language === "nl"
                  ? `${translateGoal(
                      MEAL_GOALS.find(
                        (g) => normalizeGoalValue(g.value) === normalizedGoal
                      ),
                      "nl"
                    )} Routine ${index + 1}`
                  : plan.title || `Routine ${index + 1}`}
              </option>
            ))}
          </select>
        </label>

        <label style={field}>
          <span style={label}>{copy.weekDay}</span>
          <select
            value={selectedDay}
            onChange={(event) => setSelectedDay(Number(event.target.value || 0))}
            style={select}
          >
            {(selectedPlan.days || WEEK_DAYS || []).map((day, index) => (
              <option key={day.day || day || index} value={index}>
                {translateDay(day.day || day, language)}
              </option>
            ))}
          </select>
        </label>
      </section>

      {locked && (
        <section style={lockedCard}>
          <strong>{copy.routineLocked}</strong>
          <p style={muted}>{copy.accessText}</p>
        </section>
      )}

      {!locked && (
        <>
          <section style={summaryGrid}>
            <div style={summaryCard}>
              <span style={smallLabel}>{copy.calories}</span>
              <strong>{currentDay.totalCalories}</strong>
            </div>
            <div style={summaryCard}>
              <span style={smallLabel}>{copy.protein}</span>
              <strong>{currentDay.totalProtein}</strong>
            </div>
            <div style={summaryCard}>
              <span style={smallLabel}>{copy.carbs}</span>
              <strong>{currentDay.totalCarbs}</strong>
            </div>
            <div style={summaryCard}>
              <span style={smallLabel}>{copy.fats}</span>
              <strong>{currentDay.totalFats}</strong>
            </div>
          </section>

          <section style={sectionBlock}>
            <div style={sectionHeader}>
              <div>
                <div style={eyebrow}>{copy.meals}</div>
                <h2 style={sectionTitle}>
                  {translateDay(currentDay.day, language)}
                </h2>
              </div>
            </div>

            <div style={mealGrid}>
              {(currentDay.meals || []).map((meal, index) => (
                <article key={`${meal.time}-${meal.mealName}-${index}`} style={mealCard}>
                  <div style={time}>{meal.time}</div>
                  <h3 style={mealTitle}>
                    {translateFoodText(meal.mealName, language)}
                  </h3>

                  <div style={kcalBadge}>{meal.calories}</div>

                  <p style={macroLine}>
                    {copy.protein}: {meal.protein} &nbsp; {copy.carbs}:{" "}
                    {meal.carbs}
                    <br />
                    {copy.fats}: {meal.fats}
                  </p>

                  <div style={miniLabel}>{copy.ingredients}</div>
                  <ul style={list}>
                    {(meal.ingredients || []).map((ingredient) => (
                      <li key={ingredient}>
                        {translateFoodText(ingredient, language)}
                      </li>
                    ))}
                  </ul>

                  <div style={miniLabel}>{copy.preparation}</div>
                  <ol style={orderedList}>
                    {(meal.steps || []).map((step) => (
                      <li key={step}>{translateFoodText(step, language)}</li>
                    ))}
                  </ol>
                </article>
              ))}
            </div>
          </section>

          <section style={sectionBlock}>
            <div style={sectionHeader}>
              <div>
                <div style={eyebrow}>
                  {listMode === "week" ? copy.weeklySupermarket : copy.supermarket}
                </div>
                <h2 style={sectionTitle}>
                  {listMode === "week" ? copy.fullWeek : copy.selectedDay}
                </h2>
                <p style={muted}>
                  {listMode === "week" ? copy.weeklyText : copy.supermarketText}
                </p>
              </div>

              <div style={toggleWrap}>
                <button
                  type="button"
                  onClick={() => setListMode("day")}
                  style={toggleButton(listMode === "day")}
                >
                  {copy.selectedDay}
                </button>
                <button
                  type="button"
                  onClick={() => setListMode("week")}
                  style={toggleButton(listMode === "week")}
                >
                  {copy.fullWeek}
                </button>
              </div>
            </div>

            <div style={shoppingGrid}>
              {activeShoppingList.map((item) => (
                <div key={item.name} style={shoppingItem}>
                  <strong>{item.name}</strong>
                  <span>{formatAmount(item.grams, language)}</span>
                  <small>
                    {Array.from(new Set(item.usedIn)).slice(0, 3).join(", ")}
                  </small>
                </div>
              ))}
            </div>
          </section>
        </>
      )}
    </div>
  );
}

const page = {
  display: "grid",
  gap: "28px",
  width: "100%",
  maxWidth: "1480px",
  margin: "0 auto",
};

const hero = {
  display: "grid",
  gap: "10px",
};

const eyebrow = {
  fontSize: "13px",
  textTransform: "uppercase",
  letterSpacing: "0.18em",
  color: "rgba(255,255,255,0.48)",
  fontWeight: "800",
};

const title = {
  margin: 0,
  fontSize: "clamp(40px, 7vw, 86px)",
  lineHeight: 0.95,
  fontWeight: "950",
};

const subtitle = {
  margin: 0,
  maxWidth: "920px",
  color: "rgba(255,255,255,0.72)",
  fontSize: "clamp(16px, 2.2vw, 24px)",
  lineHeight: 1.5,
};

const controlsGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
  gap: "16px",
};

const field = {
  display: "grid",
  gap: "8px",
};

const label = {
  fontSize: "13px",
  textTransform: "uppercase",
  letterSpacing: "0.16em",
  color: "rgba(255,255,255,0.5)",
  fontWeight: "800",
};

const select = {
  width: "100%",
  minHeight: "56px",
  borderRadius: "16px",
  border: "1px solid rgba(255,255,255,0.14)",
  background: "#151515",
  color: "white",
  padding: "0 18px",
  fontSize: "16px",
  fontWeight: "800",
  outline: "none",
};

const lockedCard = {
  border: "1px solid rgba(250,204,21,0.35)",
  background: "rgba(250,204,21,0.08)",
  borderRadius: "22px",
  padding: "22px",
};

const emptyCard = {
  border: "1px solid rgba(255,255,255,0.12)",
  background: "rgba(255,255,255,0.04)",
  borderRadius: "22px",
  padding: "22px",
};

const muted = {
  color: "rgba(255,255,255,0.64)",
  lineHeight: 1.7,
  margin: "8px 0 0",
};

const summaryGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
  gap: "14px",
};

const summaryCard = {
  border: "1px solid rgba(255,255,255,0.1)",
  background: "rgba(255,255,255,0.045)",
  borderRadius: "20px",
  padding: "20px",
  display: "grid",
  gap: "8px",
};

const smallLabel = {
  color: "rgba(255,255,255,0.56)",
  fontSize: "14px",
};

const sectionBlock = {
  border: "1px solid rgba(255,255,255,0.1)",
  background: "rgba(255,255,255,0.035)",
  borderRadius: "28px",
  padding: "clamp(18px, 3vw, 32px)",
  display: "grid",
  gap: "22px",
};

const sectionHeader = {
  display: "flex",
  justifyContent: "space-between",
  gap: "16px",
  alignItems: "flex-start",
  flexWrap: "wrap",
};

const sectionTitle = {
  margin: "6px 0 0",
  fontSize: "clamp(28px, 4vw, 48px)",
  lineHeight: 1,
};

const mealGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
  gap: "18px",
};

const mealCard = {
  border: "1px solid rgba(255,255,255,0.1)",
  background: "rgba(255,255,255,0.045)",
  borderRadius: "24px",
  padding: "22px",
  display: "grid",
  gap: "14px",
};

const time = {
  color: "rgba(255,255,255,0.56)",
  fontWeight: "800",
};

const mealTitle = {
  margin: 0,
  fontSize: "clamp(24px, 3vw, 34px)",
  lineHeight: 1.1,
};

const kcalBadge = {
  width: "fit-content",
  borderRadius: "999px",
  background: "rgba(255,255,255,0.09)",
  padding: "8px 14px",
  fontWeight: "950",
  fontSize: "20px",
};

const macroLine = {
  color: "rgba(255,255,255,0.78)",
  lineHeight: 1.6,
  margin: 0,
};

const miniLabel = {
  textTransform: "uppercase",
  letterSpacing: "0.16em",
  color: "rgba(255,255,255,0.5)",
  fontSize: "13px",
  fontWeight: "900",
};

const list = {
  margin: 0,
  paddingLeft: "20px",
  color: "rgba(255,255,255,0.82)",
  lineHeight: 1.8,
};

const orderedList = {
  margin: 0,
  paddingLeft: "20px",
  color: "rgba(255,255,255,0.82)",
  lineHeight: 1.8,
};

const toggleWrap = {
  display: "flex",
  gap: "8px",
  flexWrap: "wrap",
};

const toggleButton = (active) => ({
  border: "1px solid rgba(255,255,255,0.14)",
  background: active ? "white" : "rgba(255,255,255,0.05)",
  color: active ? "black" : "white",
  borderRadius: "999px",
  padding: "10px 14px",
  cursor: "pointer",
  fontWeight: "900",
});

const shoppingGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
  gap: "12px",
};

const shoppingItem = {
  border: "1px solid rgba(255,255,255,0.1)",
  background: "rgba(255,255,255,0.045)",
  borderRadius: "18px",
  padding: "16px",
  display: "grid",
  gap: "6px",
};
