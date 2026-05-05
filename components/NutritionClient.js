"use client";

import { useMemo, useState } from "react";
import { nutritionPlans } from "../lib/mealPlans";
import { useLanguage } from "../lib/useLanguage";

const activityOptions = [
  { value: "sedentary", label: "Sedentary", nl: "Zittend", multiplier: 1.2 },
  { value: "light", label: "Light activity", nl: "Lichte activiteit", multiplier: 1.375 },
  { value: "moderate", label: "Moderate activity", nl: "Gemiddelde activiteit", multiplier: 1.55 },
  { value: "active", label: "Active", nl: "Actief", multiplier: 1.725 },
];

const europeanSupermarkets = [
  "Albert Heijn",
  "Jumbo",
  "Lidl",
  "Aldi",
  "Carrefour",
  "Delhaize",
  "Colruyt",
  "Okay",
  "Spar",
  "Plus",
  "Dirk",
  "Vomar",
  "Hoogvliet",
  "Edeka",
  "Rewe",
  "Kaufland",
  "Tesco",
  "Sainsbury's",
  "Auchan",
];

const productDatabase = {
  protein: [
    { name: "Chicken breast", stores: ["all"], goals: ["Fat Loss", "Build Muscle", "Performance", "Maintenance"] },
    { name: "Turkey breast", stores: ["all"], goals: ["Fat Loss", "Maintenance"] },
    { name: "Lean minced beef", stores: ["all"], goals: ["Build Muscle", "Performance", "Maintenance"] },
    { name: "Tuna in water", stores: ["all"], goals: ["Fat Loss", "Maintenance"] },
    { name: "White fish", stores: ["all"], goals: ["Fat Loss", "Performance"] },
    { name: "Eggs", stores: ["all"], goals: ["Build Muscle", "Performance", "Maintenance"] },
    { name: "Egg whites", stores: ["all"], goals: ["Fat Loss"] },
    { name: "Low-fat quark", stores: ["Albert Heijn", "Jumbo", "Lidl", "Aldi", "Carrefour", "Delhaize", "Colruyt", "Vomar", "Plus", "Dirk"], goals: ["Fat Loss", "Build Muscle", "Maintenance"] },
    { name: "Natural skyr", stores: ["Albert Heijn", "Jumbo", "Lidl", "Carrefour", "Delhaize", "Vomar", "Plus"], goals: ["Fat Loss", "Build Muscle", "Performance"] },
    { name: "Cottage cheese", stores: ["Albert Heijn", "Jumbo", "Carrefour", "Delhaize", "Rewe", "Edeka", "Tesco", "Sainsbury's"], goals: ["Build Muscle", "Maintenance"] },
    { name: "Protein powder", stores: ["all"], goals: ["Build Muscle", "Performance", "Fat Loss"] },
    { name: "Tofu", stores: ["all"], goals: ["Fat Loss", "Maintenance"] },
    { name: "Tempeh", stores: ["Albert Heijn", "Jumbo", "Carrefour", "Delhaize", "Edeka", "Rewe"], goals: ["Build Muscle", "Maintenance"] },
    { name: "Salmon", stores: ["all"], goals: ["Build Muscle", "Performance", "Maintenance"] },
  ],
  carbs: [
    { name: "Oats", stores: ["all"], goals: ["Fat Loss", "Build Muscle", "Performance", "Maintenance"] },
    { name: "Rice", stores: ["all"], goals: ["Build Muscle", "Performance", "Maintenance"] },
    { name: "Brown rice", stores: ["all"], goals: ["Fat Loss", "Maintenance"] },
    { name: "Potatoes", stores: ["all"], goals: ["Fat Loss", "Build Muscle", "Maintenance"] },
    { name: "Sweet potatoes", stores: ["all"], goals: ["Fat Loss", "Performance"] },
    { name: "Whole-wheat wraps", stores: ["all"], goals: ["Fat Loss", "Build Muscle", "Maintenance"] },
    { name: "Whole-grain bread", stores: ["all"], goals: ["Fat Loss", "Build Muscle", "Maintenance"] },
    { name: "Pasta", stores: ["all"], goals: ["Build Muscle", "Performance"] },
    { name: "Bananas", stores: ["all"], goals: ["Build Muscle", "Performance", "Maintenance"] },
    { name: "Beans", stores: ["all"], goals: ["Fat Loss", "Maintenance"] },
    { name: "Lentils", stores: ["all"], goals: ["Fat Loss", "Maintenance"] },
    { name: "Low-sugar muesli", stores: ["Albert Heijn", "Jumbo", "Delhaize", "Carrefour", "Edeka", "Rewe"], goals: ["Build Muscle", "Maintenance"] },
    { name: "Breakfast cereal around hard training", stores: ["all"], goals: ["Performance"] },
  ],
  fats: [
    { name: "Olive oil", stores: ["all"], goals: ["Fat Loss", "Build Muscle", "Performance", "Maintenance"] },
    { name: "Avocado", stores: ["all"], goals: ["Fat Loss", "Build Muscle", "Maintenance"] },
    { name: "100% peanut butter", stores: ["all"], goals: ["Build Muscle", "Maintenance"] },
    { name: "Mixed nuts", stores: ["all"], goals: ["Build Muscle", "Maintenance"] },
    { name: "Almonds", stores: ["all"], goals: ["Build Muscle", "Performance"] },
    { name: "Cashews", stores: ["all"], goals: ["Build Muscle"] },
    { name: "Salmon", stores: ["all"], goals: ["Build Muscle", "Performance", "Maintenance"] },
    { name: "Whole eggs", stores: ["all"], goals: ["Build Muscle", "Maintenance"] },
  ],
  vegetables: [
    { name: "Broccoli", stores: ["all"], goals: ["Fat Loss", "Build Muscle", "Performance", "Maintenance"] },
    { name: "Spinach", stores: ["all"], goals: ["Fat Loss", "Build Muscle", "Performance", "Maintenance"] },
    { name: "Cucumber", stores: ["all"], goals: ["Fat Loss", "Maintenance"] },
    { name: "Tomatoes", stores: ["all"], goals: ["Fat Loss", "Maintenance"] },
    { name: "Bell peppers", stores: ["all"], goals: ["Build Muscle", "Performance", "Maintenance"] },
    { name: "Carrots", stores: ["all"], goals: ["Performance", "Maintenance"] },
    { name: "Zucchini", stores: ["all"], goals: ["Fat Loss"] },
    { name: "Mushrooms", stores: ["all"], goals: ["Fat Loss", "Maintenance"] },
    { name: "Frozen vegetables", stores: ["Lidl", "Aldi", "Colruyt", "Kaufland", "Tesco"], goals: ["Fat Loss", "Maintenance"] },
    { name: "Stir-fry vegetables", stores: ["all"], goals: ["Fat Loss", "Build Muscle", "Performance", "Maintenance"] },
    { name: "Mixed salad", stores: ["all"], goals: ["Fat Loss", "Maintenance"] },
    { name: "Cauliflower rice", stores: ["Albert Heijn", "Jumbo", "Carrefour", "Delhaize", "Tesco", "Sainsbury's"], goals: ["Fat Loss"] },
  ],
  drinks: [
    { name: "Water", stores: ["all"], goals: ["Fat Loss", "Build Muscle", "Performance", "Maintenance"] },
    { name: "Sparkling water", stores: ["all"], goals: ["Fat Loss", "Maintenance"] },
    { name: "Coffee", stores: ["all"], goals: ["Fat Loss", "Build Muscle", "Performance", "Maintenance"] },
    { name: "Tea", stores: ["all"], goals: ["Fat Loss", "Maintenance"] },
    { name: "Zero-sugar soft drinks", stores: ["all"], goals: ["Fat Loss", "Maintenance"] },
    { name: "Sugar-free electrolytes", stores: ["all"], goals: ["Fat Loss", "Performance"] },
    { name: "Electrolytes for training or hot days", stores: ["all"], goals: ["Build Muscle", "Performance"] },
    { name: "Protein shake", stores: ["all"], goals: ["Build Muscle", "Performance", "Fat Loss"] },
    { name: "Semi-skimmed milk", stores: ["all"], goals: ["Build Muscle"] },
    { name: "Coconut water occasionally", stores: ["Carrefour", "Delhaize", "Albert Heijn", "Jumbo", "Tesco", "Sainsbury's"], goals: ["Performance"] },
  ],
};

const groceryGuide = {
  "Fat Loss": {
    focus:
      "High-protein, high-volume foods, low-calorie drinks, simple supermarket choices, and easy meal structure.",
    nl:
      "Eiwitrijk, veel volume, caloriearme drankjes, simpele supermarktkeuzes en een makkelijke structuur.",
    avoid: [
      "Liquid calories",
      "Large portions of nuts without measuring",
      "Cream sauces and high-calorie dressings",
      "Fried snacks",
      "Sugary coffee drinks",
    ],
  },
  "Build Muscle": {
    focus:
      "Higher protein, enough carbs, convenient calories, and foods that support progressive training.",
    nl:
      "Meer eiwitten, genoeg koolhydraten, handige calorieën en voeding die progressieve training ondersteunt.",
    avoid: [
      "Bulking only with junk food",
      "Too little protein at breakfast",
      "Too few carbs around training",
      "Too many sugary drinks",
    ],
  },
  Performance: {
    focus:
      "Enough carbs, hydration, electrolytes, protein recovery, and smart food timing around training.",
    nl:
      "Genoeg koolhydraten, hydratatie, elektrolyten, eiwitherstel en slimme timing rondom training.",
    avoid: [
      "Training hard while under-eating",
      "Too little salt when sweating a lot",
      "Very low-carb days before hard sessions",
      "Alcohol close to performance days",
    ],
  },
  Maintenance: {
    focus:
      "Balanced foods, stable routine, flexible supermarket choices, and enough protein without overcomplicating.",
    nl:
      "Gebalanceerde voeding, stabiele routine, flexibele supermarktkeuzes en genoeg eiwitten zonder overcomplicatie.",
    avoid: [
      "Random snacking without structure",
      "Skipping protein",
      "Drinking too many calories",
      "Weekend eating that erases weekday consistency",
    ],
  },
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

function roundDecimal(value, decimals = 1) {
  return Number(value).toFixed(decimals);
}

function detectGoalKey(goal) {
  const clean = String(goal || "").toLowerCase();

  if (clean.includes("fat") || clean.includes("loss") || clean.includes("shred")) return "Fat Loss";
  if (clean.includes("muscle") || clean.includes("build") || clean.includes("gain")) return "Build Muscle";
  if (clean.includes("performance") || clean.includes("athletic")) return "Performance";

  return "Maintenance";
}

function formatGoalLabel(goal, language) {
  const goalKey = detectGoalKey(goal);

  const labels = {
    en: {
      "Fat Loss": "Fat Loss",
      "Build Muscle": "Build Muscle",
      Performance: "Performance",
      Maintenance: "Maintenance",
    },
    nl: {
      "Fat Loss": "Vetverlies",
      "Build Muscle": "Spieropbouw",
      Performance: "Prestatie",
      Maintenance: "Onderhoud",
    },
  };

  return labels[language]?.[goalKey] || goal;
}

function getGoalAdjustment(goal) {
  const goalKey = detectGoalKey(goal);
  if (goalKey === "Fat Loss") return -400;
  if (goalKey === "Build Muscle") return 250;
  if (goalKey === "Performance") return 150;
  return 0;
}

function getPersonTargets({ sex, age, weightKg, heightCm, activityLevel, selectedGoal }) {
  const cleanAge = parseNumber(age, 35);
  const cleanWeight = parseNumber(weightKg, 85);
  const cleanHeight = parseNumber(heightCm, 180);

  const activity = activityOptions.find((item) => item.value === activityLevel) || activityOptions[2];

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
  const carbs = Math.max(60, (targetCalories - protein * 4 - fats * 9) / 4);
  const waterLiters = Math.max(2, cleanWeight * 0.04);

  return {
    cleanWeight,
    bmr: roundToNearest(bmr),
    maintenance: roundToNearest(maintenance),
    targetCalories: roundToNearest(targetCalories),
    proteinGrams: Math.round(protein),
    carbsGrams: Math.round(carbs),
    fatsGrams: Math.round(fats),
    waterLiters,
  };
}

function buildWeeklyGroceryAmounts({ peopleTargets, goalKey }) {
  const totalProteinGrams = peopleTargets.reduce((sum, person) => sum + person.proteinGrams, 0);
  const totalCarbsGrams = peopleTargets.reduce((sum, person) => sum + person.carbsGrams, 0);
  const totalFatsGrams = peopleTargets.reduce((sum, person) => sum + person.fatsGrams, 0);
  const totalWaterLiters = peopleTargets.reduce((sum, person) => sum + person.waterLiters, 0);

  const proteinKg = (totalProteinGrams * 7) / 1000;
  const carbKg = (totalCarbsGrams * 7) / 1000;
  const fatKg = (totalFatsGrams * 7) / 1000;

  const vegetableMultiplier = goalKey === "Fat Loss" ? 0.075 : 0.055;
  const vegetableKg = peopleTargets.reduce(
    (sum, person) => sum + person.cleanWeight * vegetableMultiplier,
    0
  );

  const fruitKg =
    goalKey === "Build Muscle" || goalKey === "Performance"
      ? peopleTargets.length * 2.5
      : peopleTargets.length * 1.5;

  return {
    proteinFood: `${roundDecimal(proteinKg * 0.85)}–${roundDecimal(proteinKg * 1.25)}kg lean protein/week`,
    carbFood: `${roundDecimal(carbKg * 0.6)}–${roundDecimal(carbKg * 0.95)}kg carb sources/week`,
    fatFood: `${roundDecimal(fatKg * 0.35)}–${roundDecimal(fatKg * 0.55)}kg fat sources/week`,
    vegetables: `${roundDecimal(vegetableKg)}kg vegetables/week`,
    fruit: `${roundDecimal(fruitKg)}kg fruit/week`,
    water: `${roundDecimal(totalWaterLiters * 7)}L water/week`,
  };
}

function productFitsStore(product, selectedSupermarket) {
  return product.stores.includes("all") || product.stores.includes(selectedSupermarket);
}

function productFitsGoal(product, goalKey) {
  return product.goals.includes(goalKey) || product.goals.includes("Maintenance");
}

function rotateArray(items, seed) {
  if (!items.length) return [];
  const offset = seed % items.length;
  return items.slice(offset).concat(items.slice(0, offset));
}

function getSmartProducts({ category, selectedSupermarket, goalKey, refreshKey, count }) {
  const products = productDatabase[category] || [];

  const exact = products.filter(
    (product) => productFitsStore(product, selectedSupermarket) && productFitsGoal(product, goalKey)
  );

  const fallback = products.filter(
    (product) => product.stores.includes("all") && productFitsGoal(product, goalKey)
  );

  const combined = Array.from(
    new Map([...exact, ...fallback].map((product) => [product.name, product])).values()
  );

  return rotateArray(combined, refreshKey).slice(0, count).map((item) => item.name);
}

function generateWeeklyShoppingList({
  weeklyAmounts,
  peopleCount,
  goalKey,
  selectedSupermarket,
  refreshKey,
  quickMode,
  labels,
}) {
  const counts = quickMode
    ? { protein: 3, carbs: 2, fats: 2, vegetables: 3, drinks: 2 }
    : { protein: 6, carbs: 5, fats: 4, vegetables: 6, drinks: 4 };

  return [
    {
      category: labels.protein,
      items: [
        weeklyAmounts.proteinFood,
        ...getSmartProducts({ category: "protein", selectedSupermarket, goalKey, refreshKey, count: counts.protein }),
      ],
    },
    {
      category: labels.carbs,
      items: [
        weeklyAmounts.carbFood,
        ...getSmartProducts({ category: "carbs", selectedSupermarket, goalKey, refreshKey: refreshKey + 1, count: counts.carbs }),
      ],
    },
    {
      category: labels.fats,
      items: [
        weeklyAmounts.fatFood,
        ...getSmartProducts({ category: "fats", selectedSupermarket, goalKey, refreshKey: refreshKey + 2, count: counts.fats }),
      ],
    },
    {
      category: labels.vegetablesFruit,
      items: [
        weeklyAmounts.vegetables,
        weeklyAmounts.fruit,
        ...getSmartProducts({ category: "vegetables", selectedSupermarket, goalKey, refreshKey: refreshKey + 3, count: counts.vegetables }),
      ],
    },
    {
      category: labels.drinks,
      items: [
        weeklyAmounts.water,
        ...getSmartProducts({ category: "drinks", selectedSupermarket, goalKey, refreshKey: refreshKey + 4, count: counts.drinks }),
        peopleCount > 1 ? labels.electrolytesCouple : labels.electrolytesSingle,
      ],
    },
  ];
}

function getGuideItems(category, goalKey) {
  return productDatabase[category]
    .filter((item) => productFitsGoal(item, goalKey))
    .slice(0, 10)
    .map((item) => item.name);
}

export default function NutritionClient({ membershipType }) {
  const { language } = useLanguage();

  const t = {
    en: {
      command: "Nutrition Command Center",
      heroTitle: "Smart supermarket grocery generator",
      heroText:
        "Choose your supermarket, goal, body stats and shopping mode. The grocery engine creates a weekly product list for one person or a couple, using goal-based product pools and automatic macro targets.",
      couple: "Generate groceries for 2 people / couple",
      quick: "Quick shopping mode",
      supermarket: "Preferred supermarket",
      person1: "Person 1",
      person2: "Person 2",
      sex: "Sex",
      male: "Male",
      female: "Female",
      age: "Age",
      weight: "Weight kg",
      height: "Height cm",
      activity: "Activity",
      goal: "Goal",
      totalCalories: "Total calories",
      totalProtein: "Total protein",
      totalCarbs: "Total carbs",
      totalFats: "Total fats",
      water: "Water",
      people: "People",
      onePerson: "1 person",
      twoPeople: "2 people",
      weekly: "Weekly grocery generator",
      quickList: "Quick shopping list",
      fullGuide: "Full shopping guide",
      for: "for",
      basedOn: "Based on",
      bothProfiles: "both profiles",
      yourProfile: "your profile",
      andGoal: "goal",
      aimFor: "aim for around",
      refresh: "Generate different list",
      strategy: "Goal-based grocery strategy",
      drinksDay: "Drinks during the day",
      whatDrink: "What to drink",
      startWith: "Start with",
      perDay: "per day for",
      combined: "both people combined",
      you: "you",
      drinkNote: "Add electrolytes when sweating a lot, training hard, or during hot days.",
      limit: "Limit these",
      blockers: "Common progress blockers",
      daily: "Daily structure",
      rules: "Simple food rules",
      locked: "Nutrition access locked",
      lockedText: "Upgrade your membership to unlock full nutrition guidance and grocery tools.",
      upgrade: "Upgrade Now",
      protein: "Protein",
      carbs: "Carbs",
      fats: "Fats",
      vegetablesFruit: "Vegetables & fruit",
      drinks: "Drinks",
      electrolytesCouple: "Electrolytes for training or hot days",
      electrolytesSingle: "Electrolytes if needed",
    },
    nl: {
      command: "Voeding Command Center",
      heroTitle: "Slimme supermarkt boodschappen generator",
      heroText:
        "Kies je supermarkt, doel, lichaamsgegevens en shopping mode. De generator maakt een wekelijkse boodschappenlijst voor één persoon of een koppel, gebaseerd op doelen en macro’s.",
      couple: "Genereer boodschappen voor 2 personen / koppel",
      quick: "Snelle boodschappenlijst",
      supermarket: "Voorkeurssupermarkt",
      person1: "Persoon 1",
      person2: "Persoon 2",
      sex: "Geslacht",
      male: "Man",
      female: "Vrouw",
      age: "Leeftijd",
      weight: "Gewicht kg",
      height: "Lengte cm",
      activity: "Activiteit",
      goal: "Doel",
      totalCalories: "Totale calorieën",
      totalProtein: "Totale eiwitten",
      totalCarbs: "Totale koolhydraten",
      totalFats: "Totale vetten",
      water: "Water",
      people: "Personen",
      onePerson: "1 persoon",
      twoPeople: "2 personen",
      weekly: "Wekelijkse boodschappen generator",
      quickList: "Snelle boodschappenlijst",
      fullGuide: "Volledige boodschappen gids",
      for: "voor",
      basedOn: "Gebaseerd op",
      bothProfiles: "beide profielen",
      yourProfile: "jouw profiel",
      andGoal: "doel",
      aimFor: "richt je op ongeveer",
      refresh: "Genereer andere lijst",
      strategy: "Doelgerichte boodschappenstrategie",
      drinksDay: "Drinken gedurende de dag",
      whatDrink: "Wat drink je",
      startWith: "Start met",
      perDay: "per dag voor",
      combined: "beide personen samen",
      you: "jou",
      drinkNote: "Voeg elektrolyten toe als je veel zweet, hard traint of op warme dagen.",
      limit: "Beperk dit",
      blockers: "Veelvoorkomende progressieblokkers",
      daily: "Dagelijkse structuur",
      rules: "Simpele voedingsregels",
      locked: "Voeding toegang vergrendeld",
      lockedText: "Upgrade je membership om volledige voedingsbegeleiding en boodschappen tools te ontgrendelen.",
      upgrade: "Upgrade Nu",
      protein: "Eiwitten",
      carbs: "Koolhydraten",
      fats: "Vetten",
      vegetablesFruit: "Groenten & fruit",
      drinks: "Drinken",
      electrolytesCouple: "Elektrolyten voor training of warme dagen",
      electrolytesSingle: "Elektrolyten indien nodig",
    },
  }[language];

  const membership = String(membershipType || "").toLowerCase().trim();

  const hasNutritionAccess =
    membership === "nutrition" ||
    membership === "full_access" ||
    membership === "vip" ||
    membership === "coaching";

  const importedGoals = Object.keys(nutritionPlans || {});
  const fallbackGoals = ["Fat Loss", "Build Muscle", "Performance", "Maintenance"];
  const goalOptions = importedGoals.length ? importedGoals : fallbackGoals;

  const defaultGoal = goalOptions.includes("Fat Loss") ? "Fat Loss" : goalOptions[0] || "Fat Loss";

  const [selectedGoal, setSelectedGoal] = useState(defaultGoal);
  const [selectedSupermarket, setSelectedSupermarket] = useState("Albert Heijn");
  const [quickMode, setQuickMode] = useState(false);
  const [refreshKey, setRefreshKey] = useState(0);

  const [sex, setSex] = useState("male");
  const [age, setAge] = useState("35");
  const [weightKg, setWeightKg] = useState("95");
  const [heightCm, setHeightCm] = useState("188");
  const [activityLevel, setActivityLevel] = useState("light");

  const [coupleMode, setCoupleMode] = useState(false);
  const [partnerSex, setPartnerSex] = useState("female");
  const [partnerAge, setPartnerAge] = useState("32");
  const [partnerWeightKg, setPartnerWeightKg] = useState("65");
  const [partnerHeightCm, setPartnerHeightCm] = useState("168");
  const [partnerActivityLevel, setPartnerActivityLevel] = useState("moderate");

  const goalKey = detectGoalKey(selectedGoal);
  const guide = groceryGuide[goalKey] || groceryGuide.Maintenance;

  const personOneTargets = useMemo(
    () => getPersonTargets({ sex, age, weightKg, heightCm, activityLevel, selectedGoal }),
    [sex, age, weightKg, heightCm, activityLevel, selectedGoal]
  );

  const personTwoTargets = useMemo(
    () =>
      getPersonTargets({
        sex: partnerSex,
        age: partnerAge,
        weightKg: partnerWeightKg,
        heightCm: partnerHeightCm,
        activityLevel: partnerActivityLevel,
        selectedGoal,
      }),
    [partnerSex, partnerAge, partnerWeightKg, partnerHeightCm, partnerActivityLevel, selectedGoal]
  );

  const peopleTargets = coupleMode ? [personOneTargets, personTwoTargets] : [personOneTargets];

  const combinedTargets = useMemo(() => {
    const totalCalories = peopleTargets.reduce((sum, person) => sum + person.targetCalories, 0);
    const totalProtein = peopleTargets.reduce((sum, person) => sum + person.proteinGrams, 0);
    const totalCarbs = peopleTargets.reduce((sum, person) => sum + person.carbsGrams, 0);
    const totalFats = peopleTargets.reduce((sum, person) => sum + person.fatsGrams, 0);
    const totalWater = peopleTargets.reduce((sum, person) => sum + person.waterLiters, 0);

    return {
      targetCalories: totalCalories,
      protein: totalProtein,
      carbs: totalCarbs,
      fats: totalFats,
      water: totalWater,
    };
  }, [peopleTargets]);

  const weeklyAmounts = useMemo(
    () => buildWeeklyGroceryAmounts({ peopleTargets, goalKey }),
    [peopleTargets, goalKey]
  );

  const weeklyShoppingList = useMemo(
    () =>
      generateWeeklyShoppingList({
        weeklyAmounts,
        peopleCount: peopleTargets.length,
        goalKey,
        selectedSupermarket,
        refreshKey,
        quickMode,
        labels: t,
      }),
    [weeklyAmounts, peopleTargets.length, goalKey, selectedSupermarket, refreshKey, quickMode, t]
  );

  return (
    <div style={pageWrap}>
      <section style={heroCard}>
        <div style={eyebrow}>{t.command}</div>
        <h2 style={heroTitle}>{t.heroTitle}</h2>
        <p style={heroText}>{t.heroText}</p>

        <div style={topControls}>
          <label style={coupleToggle}>
            <input type="checkbox" checked={coupleMode} onChange={(e) => setCoupleMode(e.target.checked)} />
            <span>{t.couple}</span>
          </label>

          <label style={coupleToggle}>
            <input type="checkbox" checked={quickMode} onChange={(e) => setQuickMode(e.target.checked)} />
            <span>{t.quick}</span>
          </label>

          <Field label={t.supermarket}>
            <select value={selectedSupermarket} onChange={(e) => setSelectedSupermarket(e.target.value)} style={input}>
              {europeanSupermarkets.map((market) => (
                <option key={market} value={market} style={optionStyle}>
                  {market}
                </option>
              ))}
            </select>
          </Field>
        </div>

        <div style={profileGrid}>
          <ProfileForm
            title={t.person1}
            t={t}
            language={language}
            sex={sex}
            setSex={setSex}
            age={age}
            setAge={setAge}
            weightKg={weightKg}
            setWeightKg={setWeightKg}
            heightCm={heightCm}
            setHeightCm={setHeightCm}
            activityLevel={activityLevel}
            setActivityLevel={setActivityLevel}
            selectedGoal={selectedGoal}
            setSelectedGoal={setSelectedGoal}
            goalOptions={goalOptions}
            showGoal
          />

          {coupleMode && (
            <ProfileForm
              title={t.person2}
              t={t}
              language={language}
              sex={partnerSex}
              setSex={setPartnerSex}
              age={partnerAge}
              setAge={setPartnerAge}
              weightKg={partnerWeightKg}
              setWeightKg={setPartnerWeightKg}
              heightCm={partnerHeightCm}
              setHeightCm={setPartnerHeightCm}
              activityLevel={partnerActivityLevel}
              setActivityLevel={setPartnerActivityLevel}
              selectedGoal={selectedGoal}
              setSelectedGoal={setSelectedGoal}
              goalOptions={goalOptions}
              showGoal={false}
            />
          )}
        </div>

        <div style={macroGrid}>
          <MacroCard label={t.totalCalories} value={`${roundToNearest(combinedTargets.targetCalories)} kcal/day`} />
          <MacroCard label={t.totalProtein} value={`${combinedTargets.protein}g/day`} />
          <MacroCard label={t.totalCarbs} value={`${combinedTargets.carbs}g/day`} />
          <MacroCard label={t.totalFats} value={`${combinedTargets.fats}g/day`} />
          <MacroCard label={t.water} value={`${roundDecimal(combinedTargets.water)}L/day`} />
          <MacroCard label={t.people} value={coupleMode ? t.twoPeople : t.onePerson} />
        </div>
      </section>

      <section style={sectionCard}>
        <div style={sectionTop}>
          <div style={eyebrow}>{t.weekly}</div>
          <h3 style={sectionTitle}>
            {quickMode ? t.quickList : t.fullGuide} {t.for} {selectedSupermarket}
          </h3>

          <p style={muted}>
            {t.basedOn} {coupleMode ? t.bothProfiles : t.yourProfile} and the{" "}
            <strong>{formatGoalLabel(goalKey, language)}</strong> {t.andGoal}, {t.aimFor}{" "}
            <strong>{weeklyAmounts.proteinFood}</strong>, <strong>{weeklyAmounts.vegetables}</strong>,{" "}
            <strong>{weeklyAmounts.fruit}</strong>, and <strong>{weeklyAmounts.water}</strong>.
          </p>

          <button type="button" onClick={() => setRefreshKey((value) => value + 1)} style={refreshButton}>
            {t.refresh}
          </button>
        </div>

        <div style={shoppingGrid}>
          {weeklyShoppingList.map((group) => (
            <div key={group.category} style={shoppingCategoryCard}>
              <h4 style={shoppingCategoryTitle}>{group.category}</h4>
              <div style={checklistGrid}>
                {group.items.map((item) => (
                  <label key={`${group.category}-${item}`} style={checkItem}>
                    <input type="checkbox" />
                    <span>{item}</span>
                  </label>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section style={sectionCard}>
        <div style={sectionTop}>
          <div style={eyebrow}>{t.strategy}</div>
          <h3 style={sectionTitle}>{formatGoalLabel(goalKey, language)}</h3>
          <p style={muted}>{language === "nl" ? guide.nl : guide.focus}</p>
        </div>

        <div style={categoryGrid}>
          <FoodCategory title={t.protein} items={getGuideItems("protein", goalKey)} />
          <FoodCategory title={t.carbs} items={getGuideItems("carbs", goalKey)} />
          <FoodCategory title={t.fats} items={getGuideItems("fats", goalKey)} />
          <FoodCategory title={t.vegetablesFruit} items={getGuideItems("vegetables", goalKey)} />
        </div>
      </section>

      <section style={twoColumnGrid}>
        <div style={sectionCard}>
          <div style={eyebrow}>{t.drinksDay}</div>
          <h3 style={sectionTitleSmall}>{t.whatDrink}</h3>
          <p style={muted}>
            {t.startWith} {roundDecimal(combinedTargets.water)}L {t.perDay}{" "}
            {coupleMode ? t.combined : t.you}. {t.drinkNote}
          </p>
          <ul style={list}>
            {getGuideItems("drinks", goalKey).map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div style={sectionCard}>
          <div style={eyebrow}>{t.limit}</div>
          <h3 style={sectionTitleSmall}>{t.blockers}</h3>
          <ul style={list}>
            {guide.avoid.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section style={sectionCard}>
        <div style={eyebrow}>{t.daily}</div>
        <h3 style={sectionTitle}>{t.rules}</h3>

        <div style={rulesGrid}>
          <RuleCard title="Every main meal" text="Add a protein source first, then build carbs and fats around the goal." />
          <RuleCard title="Quick shopping mode" text="Use quick mode when you want a smaller list with fewer products and less decision fatigue." />
          <RuleCard title="For fat loss" text="Use lean protein, high-volume vegetables, water, zero drinks, and controlled portions of fats." />
          <RuleCard title="For muscle gain" text="Add rice, oats, bread, pasta, potatoes, bananas, and extra protein around training." />
        </div>
      </section>

      {!hasNutritionAccess && (
        <section style={lockedCard}>
          <div style={lockedTitle}>{t.locked}</div>
          <p style={muted}>{t.lockedText}</p>
          <a href="/billing" style={unlockButton}>
            {t.upgrade}
          </a>
        </section>
      )}
    </div>
  );
}

function ProfileForm({
  title,
  t,
  language,
  sex,
  setSex,
  age,
  setAge,
  weightKg,
  setWeightKg,
  heightCm,
  setHeightCm,
  activityLevel,
  setActivityLevel,
  selectedGoal,
  setSelectedGoal,
  goalOptions,
  showGoal,
}) {
  return (
    <div style={profileCard}>
      <div style={profileTitle}>{title}</div>

      <div style={calculatorGrid}>
        <Field label={t.sex}>
          <select value={sex} onChange={(e) => setSex(e.target.value)} style={input}>
            <option style={optionStyle} value="male">{t.male}</option>
            <option style={optionStyle} value="female">{t.female}</option>
          </select>
        </Field>

        <Field label={t.age}>
          <input value={age} onChange={(e) => setAge(e.target.value)} style={input} inputMode="numeric" />
        </Field>

        <Field label={t.weight}>
          <input value={weightKg} onChange={(e) => setWeightKg(e.target.value)} style={input} inputMode="numeric" />
        </Field>

        <Field label={t.height}>
          <input value={heightCm} onChange={(e) => setHeightCm(e.target.value)} style={input} inputMode="numeric" />
        </Field>

        <Field label={t.activity}>
          <select value={activityLevel} onChange={(e) => setActivityLevel(e.target.value)} style={input}>
            {activityOptions.map((item) => (
              <option key={item.value} value={item.value} style={optionStyle}>
                {language === "nl" ? item.nl : item.label}
              </option>
            ))}
          </select>
        </Field>

        {showGoal && (
          <Field label={t.goal}>
            <select value={selectedGoal} onChange={(e) => setSelectedGoal(e.target.value)} style={input}>
              {goalOptions.map((goal) => (
                <option key={goal} value={goal} style={optionStyle}>
                  {formatGoalLabel(goal, language)}
                </option>
              ))}
            </select>
          </Field>
        )}
      </div>
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

function FoodCategory({ title, items }) {
  return (
    <div style={foodCard}>
      <h4 style={foodTitle}>{title}</h4>
      <ul style={list}>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

function RuleCard({ title, text }) {
  return (
    <div style={ruleCard}>
      <div style={ruleTitle}>{title}</div>
      <p style={ruleText}>{text}</p>
    </div>
  );
}

const pageWrap = { display: "grid", gap: "22px" };

const heroCard = {
  background:
    "linear-gradient(180deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.03) 100%)",
  border: "1px solid rgba(255,255,255,0.09)",
  borderRadius: "24px",
  padding: "clamp(18px, 4vw, 28px)",
};

const sectionCard = {
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: "22px",
  padding: "clamp(18px, 4vw, 24px)",
};

const lockedCard = {
  background: "rgba(255,255,255,0.03)",
  border: "1px dashed rgba(255,255,255,0.2)",
  borderRadius: "22px",
  padding: "24px",
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
  color: "rgba(255,255,255,0.72)",
  lineHeight: 1.8,
  marginTop: "12px",
  maxWidth: "880px",
};

const topControls = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,260px),1fr))",
  gap: "14px",
  marginTop: "22px",
};

const coupleToggle = {
  display: "flex",
  gap: "10px",
  alignItems: "center",
  background: "rgba(255,255,255,0.03)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: "14px",
  padding: "14px",
  color: "white",
  fontWeight: "800",
};

const profileGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,320px),1fr))",
  gap: "14px",
  marginTop: "18px",
};

const profileCard = {
  background: "rgba(255,255,255,0.025)",
  border: "1px solid rgba(255,255,255,0.07)",
  borderRadius: "18px",
  padding: "18px",
};

const profileTitle = {
  fontSize: "20px",
  fontWeight: "900",
  marginBottom: "14px",
};

const calculatorGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,160px),1fr))",
  gap: "14px",
};

const fieldWrap = { display: "grid", gap: "8px" };

const input = {
  width: "100%",
  boxSizing: "border-box",
  padding: "14px",
  borderRadius: "12px",
  background: "#111",
  color: "white",
  border: "1px solid rgba(255,255,255,0.14)",
  outline: "none",
  fontSize: "16px",
};

const optionStyle = {
  background: "#111",
  color: "white",
};

const macroGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,160px),1fr))",
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
  fontWeight: "900",
  lineHeight: 1.6,
};

const sectionTop = { marginBottom: "14px" };

const sectionTitle = {
  margin: 0,
  fontSize: "clamp(24px, 6vw, 30px)",
  fontWeight: "900",
};

const sectionTitleSmall = {
  margin: 0,
  fontSize: "24px",
  fontWeight: "900",
};

const muted = {
  color: "rgba(255,255,255,0.68)",
  lineHeight: 1.8,
};

const refreshButton = {
  marginTop: "14px",
  border: "none",
  borderRadius: "12px",
  padding: "12px 16px",
  background: "white",
  color: "black",
  fontWeight: "900",
  cursor: "pointer",
  width: "100%",
};

const shoppingGrid = {
  display: "grid",
  gap: "16px",
};

const shoppingCategoryCard = {
  background: "rgba(255,255,255,0.025)",
  border: "1px solid rgba(255,255,255,0.07)",
  borderRadius: "18px",
  padding: "18px",
};

const shoppingCategoryTitle = {
  marginTop: 0,
  marginBottom: "12px",
  fontSize: "20px",
  fontWeight: "900",
};

const checklistGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,220px),1fr))",
  gap: "12px",
};

const checkItem = {
  display: "flex",
  gap: "10px",
  alignItems: "center",
  background: "rgba(255,255,255,0.03)",
  border: "1px solid rgba(255,255,255,0.06)",
  borderRadius: "14px",
  padding: "12px 14px",
  color: "rgba(255,255,255,0.82)",
  fontWeight: "700",
};

const categoryGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,240px),1fr))",
  gap: "14px",
};

const foodCard = {
  background: "rgba(255,255,255,0.03)",
  border: "1px solid rgba(255,255,255,0.06)",
  borderRadius: "18px",
  padding: "18px",
};

const foodTitle = {
  marginTop: 0,
  marginBottom: "12px",
  fontSize: "20px",
  fontWeight: "900",
};

const twoColumnGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,320px),1fr))",
  gap: "22px",
};

const list = {
  margin: 0,
  paddingLeft: "18px",
  color: "rgba(255,255,255,0.78)",
  lineHeight: 1.8,
};

const rulesGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,240px),1fr))",
  gap: "14px",
  marginTop: "16px",
};

const ruleCard = {
  background: "rgba(255,255,255,0.03)",
  border: "1px solid rgba(255,255,255,0.06)",
  borderRadius: "18px",
  padding: "18px",
};

const ruleTitle = {
  fontSize: "18px",
  fontWeight: "900",
};

const ruleText = {
  color: "rgba(255,255,255,0.7)",
  lineHeight: 1.7,
};

const miniHeading = {
  fontSize: "12px",
  textTransform: "uppercase",
  letterSpacing: "0.12em",
  color: "rgba(255,255,255,0.5)",
  marginBottom: "8px",
};

const lockedTitle = {
  fontSize: "24px",
  fontWeight: "900",
  marginBottom: "10px",
};

const unlockButton = {
  display: "inline-block",
  marginTop: "14px",
  padding: "14px 18px",
  background: "white",
  color: "black",
  borderRadius: "12px",
  fontWeight: "900",
  textDecoration: "none",
};