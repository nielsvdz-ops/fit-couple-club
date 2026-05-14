"use client";

import { useEffect, useMemo, useState } from "react";
import { createClient } from "../lib/supabase/client";
import nutritionPlans, {
  MEAL_GOALS,
  WEEK_DAYS,
  getMealPlanAccessLimit,
  buildMealPlansForGoal,
} from "../lib/mealPlans";
import { useLanguage } from "../lib/useLanguage";

const ui = {
  en: {
    pageEyebrow: "Personalized nutrition system",
    pageTitle: "Fuel your transformation.",
    pageSubtitle:
      "Your meal routines, macros, fasting setup, and grocery lists adapt around your goal and preferences.",
    goal: "Goal",
    routine: "Daily routine",
    weekDay: "Day",
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
    routineLocked: "This routine is locked for your current membership.",
    accessText:
      "Nutrition and Full Access memberships unlock all nutrition routines.",
    preferences: "Your setup",
    fasting: "Fasting",
    diet: "Diet",
    allergies: "Allergies",
    editPreferences: "Edit Preferences",
  },

  nl: {
    pageEyebrow: "Persoonlijk voedingssysteem",
    pageTitle: "Fuel je transformatie.",
    pageSubtitle:
      "Je maaltijdroutines, macro’s, fasting setup en boodschappenlijsten passen zich aan jouw doel en voorkeuren aan.",
    goal: "Doel",
    routine: "Dagelijkse routine",
    weekDay: "Dag",
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
    routineLocked: "Deze routine is vergrendeld voor je huidige membership.",
    accessText:
      "Nutrition en Full Access memberships ontgrendelen alle voedingsroutines.",
    preferences: "Jouw setup",
    fasting: "Fasting",
    diet: "Dieet",
    allergies: "Allergieën",
    editPreferences: "Voorkeuren aanpassen",
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

  if (clean === "lose fat") return "fat-loss";
  if (clean === "lose-fat") return "fat-loss";
  if (clean === "fat loss") return "fat-loss";
  if (clean === "build muscle") return "muscle-gain";
  if (clean === "build-muscle") return "muscle-gain";
  if (clean === "muscle gain") return "muscle-gain";
  if (clean === "booty builder") return "muscle-gain";
  if (clean === "tone & shape") return "fat-loss";
  if (clean === "athletic performance") return "muscle-gain";

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

  (day?.meals || []).filter(Boolean).forEach((meal) => {
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
  const supabase = createClient();

  const [preferences, setPreferences] = useState(null);
  const [selectedGoal, setSelectedGoal] = useState("fat-loss");
  const [selectedRoutine, setSelectedRoutine] = useState(0);
  const [selectedDay, setSelectedDay] = useState(0);
  const [listMode, setListMode] = useState("day");

  const copy = ui[language] || ui.en;

  useEffect(() => {
    async function loadPreferences() {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) return;

      const { data } = await supabase
        .from("member_preferences")
        .select("*")
        .eq("user_id", user.id)
        .maybeSingle();

      if (data) {
        setPreferences(data);

        if (data.goal) {
          setSelectedGoal(normalizeGoalValue(data.goal));
        }
      }
    }

    loadPreferences();
  }, [supabase]);

  const accessLimit = getMealPlanAccessLimit
    ? getMealPlanAccessLimit(membershipType)
    : 999;

  const normalizedGoal = normalizeGoalValue(selectedGoal);

const preferenceFilters = useMemo(() => {
  const dietType = String(preferences?.diet_type || "").toLowerCase();

  return {
    vegan: preferences?.vegan || dietType === "vegan",
    vegetarian:
      preferences?.vegetarian ||
      dietType === "vegetarian" ||
      dietType === "vegan",
    gluten_free: preferences?.gluten_free,
    lactose_free: preferences?.lactose_free,
    nut_free: preferences?.nut_free || preferences?.nuts_free,
    shellfish_free: preferences?.shellfish_free,
  };
}, [preferences]);

const currentPlans = useMemo(() => {
  return buildMealPlansForGoal(normalizedGoal, preferenceFilters);
}, [normalizedGoal, preferenceFilters]);

const selectedPlan =
  currentPlans?.[selectedRoutine] || currentPlans?.[0] || null;
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

  const preferenceBadges = [
  preferences?.goal ? `Goal: ${preferences.goal}` : null,
  preferences?.diet_type ? `Diet: ${preferences.diet_type}` : null,
  preferences?.fasting_enabled
    ? `Fasting: ${preferences.fasting_window || "On"}`
    : null,
  preferences?.gluten_free ? "Gluten Free" : null,
  preferences?.lactose_free ? "Lactose Free" : null,
  preferences?.nut_free || preferences?.nuts_free ? "Nut Free" : null,
  preferences?.shellfish_free ? "Shellfish Free" : null,
  preferences?.vegan ? "Vegan" : null,
  preferences?.vegetarian ? "Vegetarian" : null,
  preferences?.booty_focus ? "Booty Focus" : null,
].filter(Boolean);

  return (
    <div style={page}>
      <section style={hero}>
        <img src="/images/background.png" alt="" style={heroImage} />
        <div style={heroOverlay} />

        <div style={heroContent}>
          <div style={eyebrowRed}>{copy.pageEyebrow}</div>
          <h1 style={title}>{copy.pageTitle}</h1>
          <p style={subtitle}>{copy.pageSubtitle}</p>

          <div style={badgeRow}>
            {preferenceBadges.length > 0 ? (
              preferenceBadges.map((badge) => (
                <span key={badge} style={preferenceBadge}>
                  {badge}
                </span>
              ))
            ) : (
              <a href="/preferences" style={preferenceLink}>
                Complete your preferences
              </a>
            )}
          </div>

          <a href="/preferences" style={editButton}>
            {copy.editPreferences}
          </a>
        </div>
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
                <div style={eyebrowRed}>{copy.meals}</div>
                <h2 style={sectionTitle}>
                  {translateDay(currentDay.day, language)}
                </h2>
              </div>
            </div>

            <div style={mealGrid}>
              {safeMeals.map((meal, index) => (
                <article key={`${meal.time}-${meal.mealName}-${index}`} style={mealCard}>
                  <div style={time}>{meal.time}</div>
                  <h3 style={mealTitle}>
                    {translateFoodText(meal.mealName, language)}
                  </h3>

                 <div style={kcalBadge}>{meal.calories || "0 kcal"}</div>

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
                <div style={eyebrowRed}>
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
  position: "relative",
  overflow: "hidden",
  minHeight: "360px",
  border: "1px solid rgba(255,255,255,0.10)",
  background: "#050505",
};

const heroImage = {
  position: "absolute",
  inset: 0,
  width: "100%",
  height: "100%",
  objectFit: "cover",
  filter: "grayscale(1) brightness(0.28) contrast(1.18)",
};

const heroOverlay = {
  position: "absolute",
  inset: 0,
  background:
    "linear-gradient(90deg, rgba(0,0,0,0.96), rgba(0,0,0,0.78), rgba(100,0,0,0.42))",
  zIndex: 1,
};

const heroContent = {
  position: "relative",
  zIndex: 2,
  padding: "clamp(24px, 5vw, 42px)",
};

const eyebrowRed = {
  fontSize: "13px",
  textTransform: "uppercase",
  letterSpacing: "0.18em",
  color: "#ef4444",
  fontWeight: "950",
};

const title = {
  margin: "12px 0 0",
  fontSize: "clamp(42px, 8vw, 86px)",
  lineHeight: 0.9,
  fontWeight: "950",
  letterSpacing: "-0.06em",
  textTransform: "uppercase",
};

const subtitle = {
  marginTop: "18px",
  maxWidth: "920px",
  color: "rgba(255,255,255,0.72)",
  fontSize: "clamp(16px, 2.2vw, 21px)",
  lineHeight: 1.6,
};

const badgeRow = {
  display: "flex",
  flexWrap: "wrap",
  gap: "10px",
  marginTop: "24px",
};

const preferenceBadge = {
  background: "rgba(176,0,0,0.18)",
  border: "1px solid rgba(176,0,0,0.42)",
  color: "white",
  padding: "10px 13px",
  fontWeight: "900",
  textTransform: "uppercase",
  fontSize: "12px",
};

const preferenceLink = {
  color: "white",
  background: "#b00000",
  padding: "12px 16px",
  textDecoration: "none",
  fontWeight: "950",
  textTransform: "uppercase",
};

const editButton = {
  display: "inline-flex",
  marginTop: "22px",
  background: "#b00000",
  color: "white",
  padding: "14px 18px",
  textDecoration: "none",
  fontWeight: "950",
  textTransform: "uppercase",
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
  fontWeight: "900",
};

const select = {
  width: "100%",
  minHeight: "56px",
  border: "1px solid rgba(255,255,255,0.14)",
  background: "#090909",
  color: "white",
  padding: "0 18px",
  fontSize: "16px",
  fontWeight: "900",
  outline: "none",
};

const lockedCard = {
  border: "1px solid rgba(176,0,0,0.35)",
  background: "rgba(176,0,0,0.12)",
  padding: "22px",
};

const emptyCard = {
  border: "1px solid rgba(255,255,255,0.12)",
  background: "rgba(255,255,255,0.04)",
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
  border: "1px solid rgba(255,255,255,0.10)",
  borderLeft: "3px solid #b00000",
  background: "#060606",
  padding: "20px",
  display: "grid",
  gap: "8px",
};

const smallLabel = {
  color: "rgba(255,255,255,0.56)",
  fontSize: "14px",
  textTransform: "uppercase",
  fontWeight: "900",
};

const sectionBlock = {
  border: "1px solid rgba(255,255,255,0.10)",
  background: "rgba(255,255,255,0.035)",
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
  fontSize: "clamp(30px, 5vw, 52px)",
  lineHeight: 0.95,
  fontWeight: "950",
  textTransform: "uppercase",
  letterSpacing: "-0.04em",
};

const mealGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
  gap: "18px",
};

const mealCard = {
  border: "1px solid rgba(255,255,255,0.10)",
  borderTop: "3px solid #b00000",
  background: "#060606",
  padding: "22px",
  display: "grid",
  gap: "14px",
};

const time = {
  color: "rgba(255,255,255,0.56)",
  fontWeight: "900",
};

const mealTitle = {
  margin: 0,
  fontSize: "clamp(24px, 3vw, 34px)",
  lineHeight: 1.05,
  fontWeight: "950",
  textTransform: "uppercase",
};

const kcalBadge = {
  width: "fit-content",
  background: "rgba(176,0,0,0.18)",
  border: "1px solid rgba(176,0,0,0.35)",
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
  color: "#ef4444",
  fontSize: "13px",
  fontWeight: "950",
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
  border: active
    ? "1px solid rgba(176,0,0,0.75)"
    : "1px solid rgba(255,255,255,0.14)",
  background: active ? "#b00000" : "rgba(255,255,255,0.05)",
  color: "white",
  padding: "10px 14px",
  cursor: "pointer",
  fontWeight: "950",
  textTransform: "uppercase",
});

const shoppingGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
  gap: "12px",
};

const shoppingItem = {
  border: "1px solid rgba(255,255,255,0.10)",
  borderLeft: "3px solid #b00000",
  background: "#060606",
  padding: "16px",
  display: "grid",
  gap: "6px",
};
