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
  const clean = String(goal || "").toLowerCase();

  if (clean.includes("fat") || clean.includes("loss")) {
    return goalAdjustments.fat_loss;
  }

  if (
    clean.includes("muscle") ||
    clean.includes("gain") ||
    clean.includes("build")
  ) {
    return goalAdjustments.lean_muscle;
  }

  if (clean.includes("performance")) {
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
  const label = typeof goal === "string" ? goal : goal?.label;

  if (language !== "nl") return label;

  const clean = String(label || "").toLowerCase();

  if (clean.includes("fat")) return "Vetverlies";
  if (clean.includes("muscle") || clean.includes("build")) {
    return "Spieropbouw";
  }
  if (clean.includes("performance")) return "Prestatie";
  if (clean.includes("maintenance")) return "Onderhoud";

  return label;
}

function translateMealText(value, language) {
  if (language !== "nl" || !value) return value;

  let text = String(value);

  const exactMap = {
    "Greek yogurt": "Griekse yoghurt",
"Low-fat Greek yogurt": "Magere Griekse yoghurt",
"Skyr yogurt": "Skyr yoghurt",
"Protein yogurt": "Eiwityoghurt",
"berries": "bessen",
"blueberries": "bosbessen",
"strawberries": "aardbeien",
"banana": "banaan",
"bananas": "bananen",
"apple": "appel",
"rice cakes": "rijstwafels",
"oats": "havermout",
"rice": "rijst",
"cooked rice": "gekookte rijst",
"jasmine rice": "jasmijnrijst",
"basmati rice": "basmatirijst",
"potatoes": "aardappelen",
"sweet potato": "zoete aardappel",
"sweet potatoes": "zoete aardappelen",
"pasta": "pasta",
"whole wheat pasta": "volkoren pasta",
"bread": "brood",
"whole wheat bread": "volkoren brood",
"wrap": "wrap",
"wraps": "wraps",

"chicken": "kip",
"chicken breast": "kipfilet",
"turkey": "kalkoen",
"turkey breast": "kalkoenfilet",
"lean beef": "mager rundvlees",
"lean minced beef": "mager rundergehakt",
"salmon": "zalm",
"tuna": "tonijn",
"white fish": "witte vis",
"shrimp": "garnalen",
"eggs": "eieren",
"egg whites": "ei-eiwitten",
"protein powder": "eiwitpoeder",
"whey protein": "whey eiwit",
"whey": "whey",
"protein shake": "eiwitshake",

"broccoli": "broccoli",
"spinach": "spinazie",
"green beans": "groene bonen",
"asparagus": "asperges",
"bell pepper": "paprika",
"bell peppers": "paprika's",
"tomato": "tomaat",
"tomatoes": "tomaten",
"cucumber": "komkommer",
"onion": "ui",
"mushrooms": "champignons",
"mixed vegetables": "gemengde groenten",
"salad": "salade",
"avocado": "avocado",

"chia seeds": "chiazaad",
"peanut butter": "pindakaas",
"almond butter": "amandelpasta",
"mixed nuts": "gemengde noten",
"olive oil": "olijfolie",
"milk": "melk",
"almond milk": "amandelmelk",
"water": "water",
"coffee": "koffie",

"Add all ingredients to a blender.": "Voeg alle ingrediënten toe aan een blender.",
"Blend until smooth.": "Mix tot een glad geheel.",
"Serve cold.": "Serveer koud.",
"Cook chicken with seasoning.": "Bak de kip met kruiden.",
"Steam broccoli.": "Stoom de broccoli.",
"Bake salmon until cooked through.": "Bak de zalm gaar.",
"Roast sweet potato cubes.": "Rooster blokjes zoete aardappel.",
"Steam green beans.": "Stoom de groene bonen.",
"Plate together with olive oil.": "Serveer samen met olijfolie.",
"Add Greek yogurt to a bowl.": "Doe Griekse yoghurt in een kom.",
"Top with oats and berries.": "Voeg havermout en bessen toe.",
"Add chia seeds and peanut butter.": "Voeg chiazaad en pindakaas toe.",
    "Greek yogurt": "Griekse yoghurt",
"greek yogurt": "Griekse yoghurt",

"breast": "filet",
"kip breast": "kipfilet",

"cooked rice": "gekookte rijst",
"cooked rijst": "gekookte rijst",

"whey protein": "whey eiwit",
"whey": "whey",
"protein smoothie": "eiwit smoothie",

"green beans": "groene bonen",

"Finish with olive oil.": "Werk af met olijfolie.",
"Assemble rice, chicken, broccoli, and avocado.": "Voeg rijst, kip, broccoli en avocado samen.",
"Assemble rijst, kip, broccoli, en avocado.": "Voeg rijst, kip, broccoli en avocado samen.",

"Serve together with olive oil.": "Serveer samen met olijfolie.",
"Plate together with olive oil.": "Serveer samen met olijfolie.",

"Bake salmon until cooked through.": "Bak de zalm gaar.",
"Roast sweet potato cubes.": "Rooster blokjes zoete aardappel.",
"Steam green beans.": "Stoom de groene bonen.",

"Add all ingredients to a blender.": "Voeg alle ingrediënten toe aan een blender.",
"Blend until smooth.": "Mix tot een glad geheel.",
"Serve cold.": "Serveer koud.",
    "2 eggs": "2 eieren",
"1 whole egg": "1 heel ei",
"egg whites": "eiwitten",
"whole grain bread": "volkoren brood",

"Toast the bread.": "Rooster het brood.",
"Cook eggs to preference.": "Bak de eieren naar voorkeur.",
"Mash avocado and spread on toast.": "Prak avocado en smeer op toast.",
"Top with eggs and seasoning.": "Werk af met eieren en kruiden.",

"Mix all ingredients until smooth.": "Mix alle ingrediënten tot een glad geheel.",
"Cook in a non-stick pan on medium heat.": "Bak in een anti-aanbakpan op middelhoog vuur.",
"Flip when bubbles form.": "Draai om wanneer er bubbels ontstaan.",
"Serve warm.": "Serveer warm.",

"1 scoop protein powder": "1 scoop eiwitpoeder",
"protein powder": "eiwitpoeder",

"dark chocolate": "pure chocolade",
"chopped dark chocolate": "stukjes pure chocolade",

"lean steak": "mager steak",
"lean beef": "mager rundvlees",

"Cook steak to preference.": "Bak steak naar voorkeur.",
"Sauté peppers and zucchini.": "Bak paprika en courgette.",
"Serve over rice.": "Serveer over rijst.",

"1 tortilla wrap": "1 tortilla wrap",
"lettuce": "sla",
"cucumber": "komkommer",

"Mix tuna with Greek yogurt.": "Mix tonijn met Griekse yoghurt.",
"Add vegetables to wrap.": "Voeg groenten toe aan de wrap.",
"Fill with tuna mix and fold tightly.": "Vul met tonijnmix en vouw stevig dicht.",

"Add yogurt to a bowl.": "Doe yoghurt in een kom.",
"Top with berries, honey, and chopped dark chocolate.": "Werk af met bessen, honing en stukjes pure chocolade.",

"Cook beef with taco seasoning.": "Bak rundvlees met taco kruiden.",
"Prepare rice.": "Bereid rijst.",
"Add corn, lettuce, and salsa on top.": "Voeg maïs, sla en salsa toe bovenop.",

"corn": "maïs",
"tomato salsa": "tomaten salsa",

"Mash banana in bowl.": "Prak banaan in een kom.",
"Mix with cocoa, protein, and yogurt.": "Mix met cacao, eiwit en yoghurt.",
"Serve chilled or slightly warmed.": "Serveer gekoeld of licht verwarmd.",

"cocoa powder": "cacaopoeder",

"Cook shrimp quickly in a pan.": "Bak garnalen kort in een pan.",
"Serve with rice and soy sauce.": "Serveer met rijst en sojasaus.",

"soy sauce": "sojasaus",
"shrimp": "garnalen",

"Spread yogurt on tray.": "Spreid yoghurt uit op een schaal.",
"Freeze until firm and break into pieces.": "Vries in tot stevig en breek in stukken.",

"granola": "granola",

"dry pasta": "droge pasta",
"light cream cheese": "light roomkaas",

"Cook pasta.": "Kook pasta.",
"Cook chicken and slice.": "Bak kip en snijd in stukjes.",
"Mix cream cheese and parmesan into warm pasta.": "Meng roomkaas en parmezaan door warme pasta.",
"Add spinach and chicken.": "Voeg spinazie en kip toe.",

"Salt and pepper": "Zout en peper",

"Cook chicken and slice.": "Bak kip en snijd in plakjes.",
"Add all ingredients to wrap.": "Voeg alle ingrediënten toe aan de wrap.",
"Roll tightly and slice in half.": "Rol stevig op en snijd doormidden.",

"Add ingredients to blender.": "Voeg ingrediënten toe aan de blender.",
"Blend until frothy.": "Blend tot schuimig.",
"Serve immediately.": "Serveer direct.",

"turkey meatballs": "kalkoen gehaktballen",

"Cook turkey meatballs.": "Bak kalkoen gehaktballen.",
"Warm tomato sauce and spinach.": "Verwarm tomatensaus en spinazie.",
"Combine in a bowl.": "Combineer in een kom.",

"Personalized daily food schedules based on your goal, sex, age, weight, height, and activity level.":
"Gepersonaliseerde dagelijkse voedingsschema’s gebaseerd op jouw doel, geslacht, leeftijd, gewicht, lengte en activiteitsniveau.",

"A structured weekly menu built for consistency, easy prep, and solid nutrition.":
"Een gestructureerd weekmenu gebouwd voor consistentie, makkelijke voorbereiding en sterke voeding.",

"built for consistency, easy prep, and solid nutrition.":
"gebouwd voor consistentie, makkelijke voorbereiding en sterke voeding.",
};
  if (exactMap[text]) return exactMap[text];

 const replacements = [
  ["Meal Plan", "Maaltijdplan"],
  ["meal plan", "maaltijdplan"],

  ["Daily", "Dagelijkse"],
  ["daily", "dagelijkse"],

  ["Weekly", "Wekelijkse"],
  ["weekly", "wekelijkse"],

  ["Simple", "Simpel"],
  ["simple", "simpel"],

  ["High Protein", "Eiwitrijk"],
  ["high protein", "eiwitrijk"],

  ["Fat Loss", "Vetverlies"],
  ["fat loss", "vetverlies"],

  ["Build Muscle", "Spieropbouw"],
  ["build muscle", "spieropbouw"],

  ["Lean Muscle", "Lean spieropbouw"],
  ["lean muscle", "lean spieropbouw"],

  ["Maintenance", "Onderhoud"],
  ["maintenance", "onderhoud"],

  ["Performance", "Prestatie"],
  ["performance", "prestatie"],

  ["Breakfast", "Ontbijt"],
  ["breakfast", "ontbijt"],

  ["Lunch", "Lunch"],
  ["lunch", "lunch"],

  ["Dinner", "Avondeten"],
  ["dinner", "avondeten"],

  ["Snack", "Snack"],
  ["snack", "snack"],

  ["Protein", "Eiwit"],
  ["protein", "eiwit"],

  ["Carbs", "Koolhydraten"],
  ["carbs", "koolhydraten"],

  ["Fats", "Vetten"],
  ["fats", "vetten"],

  ["Calories", "Calorieën"],
  ["calories", "calorieën"],

  ["Chicken", "Kip"],
  ["chicken", "kip"],

  ["Turkey", "Kalkoen"],
  ["turkey", "kalkoen"],

  ["Rice", "Rijst"],
  ["rice", "rijst"],

  ["Potatoes", "Aardappelen"],
  ["potatoes", "aardappelen"],

  ["Sweet potato", "Zoete aardappel"],
  ["sweet potato", "zoete aardappel"],

  ["Salmon", "Zalm"],
  ["salmon", "zalm"],

  ["Tuna", "Tonijn"],
  ["tuna", "tonijn"],

  ["Broccoli", "Broccoli"],
  ["broccoli", "broccoli"],

  ["Banana", "Banaan"],
  ["banana", "banaan"],

  ["Berries", "Bessen"],
  ["berries", "bessen"],

  ["Greek yogurt", "Griekse yoghurt"],
  ["yogurt", "yoghurt"],

  ["Milk", "Melk"],
  ["milk", "melk"],

  ["Olive oil", "Olijfolie"],
  ["olive oil", "olijfolie"],

  ["Peanut butter", "Pindakaas"],
  ["peanut butter", "pindakaas"],

  ["Cook", "Kook"],
  ["cook", "kook"],

  ["Bake", "Bak"],
  ["bake", "bak"],

  ["Steam", "Stoom"],
  ["steam", "stoom"],

  ["Roast", "Rooster"],
  ["roast", "rooster"],

  ["Blend", "Mix"],
  ["blend", "mix"],

  ["Serve", "Serveer"],
  ["serve", "serveer"],

  ["Add", "Voeg toe"],
  ["add", "voeg toe"],

  ["with", "met"],
  ["and", "en"],
  ["until", "totdat"],

  ["cold", "koud"],

  ["smooth", "glad"],

  ["through", "gaar"],

  ["together", "samen"],
   ["Greek", "Griekse"],
["greek", "Griekse"],

["breast", "filet"],

["cooked", "gekookte"],

["smoothie", "smoothie"],

["beans", "bonen"],

["Finish", "Werk af"],
["finish", "werk af"],

["Assemble", "Voeg samen"],
["assemble", "voeg samen"],

["Plate", "Serveer"],
["plate", "serveer"],

["cold", "koud"],

["Smooth", "Glad"],
["smooth", "glad"],
   ["eggs", "eieren"],
["egg", "ei"],
["whites", "eiwitten"],

["whole grain", "volkoren"],

["Toast", "Rooster"],
["toast", "rooster"],

["Mash", "Prak"],
["mash", "prak"],

["spread", "smeer"],

["seasoning", "kruiden"],

["until smooth", "tot een glad geheel"],

["non-stick pan", "anti-aanbakpan"],

["medium heat", "middelhoog vuur"],

["Flip", "Draai om"],
["flip", "draai om"],

["bubbles", "bubbels"],

["warm", "warm"],

["dark chocolate", "pure chocolade"],

["lean", "mager"],

["steak", "steak"],

["peppers", "paprika"],
["zucchini", "courgette"],

["over rice", "over rijst"],

["vegetables", "groenten"],

["wrap", "wrap"],

["fold tightly", "vouw stevig dicht"],

["yogurt", "yoghurt"],

["corn", "maïs"],

["salsa", "salsa"],

["cocoa", "cacao"],

["chilled", "gekoeld"],

["warmed", "verwarmd"],

["soy sauce", "sojasaus"],

["shrimp", "garnalen"],

["Freeze", "Vries"],
["freeze", "vries"],

["firm", "stevig"],

["pieces", "stukken"],

["cream cheese", "roomkaas"],

["slice", "snijd"],
["sliced", "gesneden"],

["Roll", "Rol"],
["roll", "rol"],

["half", "doormidden"],

["frothy", "schuimig"],

["immediately", "direct"],

["Combine", "Combineer"],
["combine", "combineer"],

["daily food schedules", "dagelijkse voedingsschema’s"],

["goal", "doel"],
["weight", "gewicht"],
["height", "lengte"],
["activity level", "activiteitsniveau"],
];

  replacements.forEach(([from, to]) => {
    text = text.split(from).join(to);
  });

  return text;
}

function translatePlanTitle(title, language) {
  return translateMealText(title, language);
}

function translatePlanDescription(description, language) {
  return translateMealText(description, language);
}

export default function RecipesClient({ membershipType }) {
  const { language } = useLanguage();

  const copy = {
    en: {
      eyebrow: "Personalized Nutrition System",
      heroTitle: "Build your daily meal plan around your body",
      heroText:
        "Enter your sex, age, weight, height, activity level, and goal.",
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
    },

    nl: {
      eyebrow: "Persoonlijk Voedingssysteem",
      heroTitle: "Bouw je dagmenu rondom jouw lichaam",
      heroText:
        "Vul je geslacht, leeftijd, gewicht, lengte, activiteit en doel in.",
      sex: "Geslacht",
      male: "Man",
      female: "Vrouw",
      age: "Leeftijd",
      weight: "Gewicht kg",
      height: "Lengte cm",
      activity: "Activiteit",
      goal: "Doel",
      dailyRoutine: "Dagelijkse routine",
      targetCalories: "Doelcalorieën",
      maintenance: "Onderhoud",
      protein: "Eiwitten",
      carbs: "Koolhydraten",
      fats: "Vetten",
      weeklySchedule: "Weekplanning",
      scaledText:
        "De porties zijn aangepast naar jouw berekende doel van",
      dailyCalories: "Dagelijkse calorieën",
      ingredients: "Ingrediënten",
      howTo: "Bereiding",
    },
  };

  const t = copy[language] || copy.en;
    const membership = String(membershipType || "").toLowerCase().trim();

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
    const targetCalories =
      maintenanceCalories + getGoalAdjustment(selectedGoal);

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
  }, [
    sex,
    age,
    weightKg,
    heightCm,
    activityLevel,
    selectedGoal,
  ]);

  const basePlanCalories =
    extractNumber(selectedPlan?.targetCalories) || 2000;

  const scale =
    personalTargets.targetCalories / basePlanCalories;

  return (
    <div style={wrap}>
      <section style={heroCard}>
        <div style={eyebrow}>{t.eyebrow}</div>

        <h2 style={heroTitle}>
          {t.heroTitle}
        </h2>

        <p style={heroText}>
          {t.heroText}
        </p>

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
                <option
                  key={item.value}
                  style={optionStyle}
                  value={item.value}
                >
                  {language === "nl"
                    ? item.nl
                    : item.label}
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
                <option
                  key={goal.value}
                  style={optionStyle}
                  value={goal.value}
                >
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
                <option
                  key={plan.id}
                  style={optionStyle}
                  value={index}
                >
                  {translatePlanTitle(
                    plan.title,
                    language
                  )}
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

          <InfoCard
            label={t.protein}
            value={personalTargets.protein}
          />

          <InfoCard
            label={t.carbs}
            value={personalTargets.carbs}
          />

          <InfoCard
            label={t.fats}
            value={personalTargets.fats}
          />
        </div>
      </section>
      <section style={panel}>
        <div style={sectionHead}>
          <div>
            <div style={eyebrow}>{t.weeklySchedule}</div>

            <h3 style={sectionTitle}>
              {translatePlanTitle(selectedPlan?.title, language)}
            </h3>

            <p style={sectionText}>
              {translatePlanDescription(
                selectedPlan?.description,
                language
              )}{" "}
              {t.scaledText} {personalTargets.targetCalories} kcal.
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
                  background: active
                    ? "white"
                    : "rgba(255,255,255,0.04)",
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

              <SummaryCard
                label={t.protein}
                value={personalTargets.protein}
              />

              <SummaryCard
                label={t.carbs}
                value={personalTargets.carbs}
              />

              <SummaryCard
                label={t.fats}
                value={personalTargets.fats}
              />
            </div>

            <div style={mealGrid}>
              {selectedDayPlan.meals.map((meal) => (
                <div key={meal.mealName} style={mealCard}>
                  <div style={mealTop}>
                    <div style={mealTitleWrap}>
                      <div style={mealTime}>{meal.time}</div>

                      <h4 style={mealTitle}>
                        {translateMealText(meal.mealName, language)}
                      </h4>
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
                        <li key={item}>
                          {translateMealText(item, language)}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div style={detailBlock}>
                    <div style={miniLabel}>{t.howTo}</div>

                    <ol style={orderedList}>
                      {meal.steps.map((step) => (
                        <li key={step}>
                          {translateMealText(step, language)}
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>
              ))}
            </div>
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
  width: "100%",
  maxWidth: "100%",
  overflowX: "hidden",
};

const heroCard = {
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: "clamp(18px, 4vw, 24px)",
  padding: "clamp(18px, 4vw, 28px)",
  boxSizing: "border-box",
  minWidth: 0,
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
  overflowWrap: "anywhere",
};

const heroText = {
  color: "rgba(255,255,255,0.7)",
  lineHeight: 1.8,
  maxWidth: "850px",
  fontSize: "clamp(15px, 3.8vw, 16px)",
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
  minWidth: 0,
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
  minWidth: 0,
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
  minWidth: 0,
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
  overflowWrap: "anywhere",
};

const panel = {
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: "clamp(18px, 4vw, 24px)",
  padding: "clamp(18px, 4vw, 24px)",
  boxSizing: "border-box",
  minWidth: 0,
};

const sectionHead = {
  display: "flex",
  justifyContent: "space-between",
  gap: "16px",
  flexWrap: "wrap",
  marginBottom: "18px",
  minWidth: 0,
};

const sectionTitle = {
  margin: 0,
  fontSize: "clamp(24px, 6vw, 32px)",
  fontWeight: "900",
  lineHeight: 1.1,
  overflowWrap: "anywhere",
};

const sectionText = {
  color: "rgba(255,255,255,0.68)",
  lineHeight: 1.8,
  fontSize: "clamp(15px, 3.8vw, 16px)",
};

const dayTabs = {
  display: "flex",
  gap: "10px",
  overflowX: "auto",
  paddingBottom: "8px",
  WebkitOverflowScrolling: "touch",
};

const dayTab = {
  flex: "0 0 auto",
  padding: "12px 14px",
  borderRadius: "12px",
  border: "1px solid rgba(255,255,255,0.1)",
  fontWeight: "900",
  cursor: "pointer",
  fontSize: "14px",
};
const mealSection = {
  display: "grid",
  gap: "18px",
  marginTop: "18px",
};

const summaryGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,150px),1fr))",
  gap: "12px",
};

const summaryCard = {
  background: "rgba(255,255,255,0.03)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: "16px",
  padding: "16px",
  minWidth: 0,
};

const summaryValue = {
  fontSize: "clamp(18px, 4vw, 20px)",
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
  padding: "clamp(16px, 4vw, 18px)",
  boxSizing: "border-box",
  minWidth: 0,
};

const mealTop = {
  display: "flex",
  justifyContent: "space-between",
  gap: "12px",
  alignItems: "start",
  flexWrap: "wrap",
};

const mealTitleWrap = {
  minWidth: 0,
  flex: "1 1 180px",
};

const mealTime = {
  color: "rgba(255,255,255,0.5)",
  fontSize: "13px",
  marginBottom: "6px",
};

const mealTitle = {
  margin: 0,
  fontSize: "clamp(20px, 5vw, 22px)",
  fontWeight: "900",
  lineHeight: 1.15,
  overflowWrap: "anywhere",
};

const calorieBadge = {
  padding: "8px 10px",
  borderRadius: "999px",
  background: "rgba(255,255,255,0.08)",
  fontWeight: "900",
  whiteSpace: "nowrap",
};

const macroRow = {
  display: "flex",
  gap: "8px",
  flexWrap: "wrap",
  color: "rgba(255,255,255,0.72)",
  marginTop: "14px",
  fontSize: "14px",
};

const detailBlock = {
  marginTop: "16px",
};

const bulletList = {
  paddingLeft: "18px",
  lineHeight: 1.8,
  color: "rgba(255,255,255,0.76)",
  overflowWrap: "anywhere",
};

const orderedList = {
  paddingLeft: "18px",
  lineHeight: 1.8,
  color: "rgba(255,255,255,0.76)",
  overflowWrap: "anywhere",
};


