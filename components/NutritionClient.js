"use client";

import { useMemo, useState } from "react";
import { nutritionPlans } from "../lib/mealPlans";

const activityOptions = [
  { value: "sedentary", label: "Sedentary", multiplier: 1.2 },
  { value: "light", label: "Light activity", multiplier: 1.375 },
  { value: "moderate", label: "Moderate activity", multiplier: 1.55 },
  { value: "active", label: "Active", multiplier: 1.725 },
];

const dutchSupermarkets = [
  "Albert Heijn",
  "Jumbo",
  "Lidl",
  "Aldi",
  "Plus",
  "Dirk",
  "Vomar",
  "Coop",
  "Hoogvliet",
];

const groceryGuide = {
  "Fat Loss": {
    focus:
      "High-protein, high-volume foods, low-calorie drinks, easy Dutch supermarket choices, and simple meal structure.",
    proteins: [
      "Kipfilet",
      "Kalkoenfilet",
      "Mager rundergehakt",
      "Tonijn in water",
      "Witte vis",
      "Skyr naturel",
      "Magere kwark",
      "Eiwitten",
      "Tofu",
      "Tempeh",
    ],
    carbs: [
      "Aardappelen",
      "Zoete aardappelen",
      "Havermout",
      "Zilvervliesrijst",
      "Volkoren wraps",
      "Volkoren brood",
      "Bonen",
      "Linzen",
      "Fruit",
    ],
    fats: [
      "Avocado",
      "Olijfolie",
      "Eieren",
      "Zalm",
      "Noten in kleine porties",
      "Pindakaas 100%",
    ],
    vegetables: [
      "Komkommer",
      "Sla",
      "Broccoli",
      "Courgette",
      "Spinazie",
      "Tomaten",
      "Champignons",
      "Bloemkoolrijst",
      "Wokgroenten",
    ],
    drinks: [
      "Water",
      "Spa rood",
      "Zwarte koffie",
      "Ongezoete thee",
      "Zero frisdrank indien nodig",
      "Suikervrije elektrolyten",
    ],
    avoid: [
      "Vloeibare calorieën",
      "Grote porties noten zonder meten",
      "Roomsaus en calorierijke dressings",
      "Gefrituurde snacks",
      "Suikerrijke koffiedranken",
    ],
  },

  "Build Muscle": {
    focus:
      "Higher protein, enough carbs, convenient calories, and foods that support progressive training.",
    proteins: [
      "Kipfilet of kippendijen",
      "Mager rundergehakt",
      "Eieren",
      "Magere kwark",
      "Skyr naturel",
      "Hüttenkäse",
      "Tonijn",
      "Zalm",
      "Proteïnepoeder",
      "Tofu",
      "Tempeh",
    ],
    carbs: [
      "Rijst",
      "Havermout",
      "Aardappelen",
      "Zoete aardappelen",
      "Volkoren brood",
      "Pasta",
      "Bananen",
      "Wraps",
      "Muesli zonder veel suiker",
    ],
    fats: [
      "Avocado",
      "Olijfolie",
      "Pindakaas 100%",
      "Amandelen",
      "Cashewnoten",
      "Hele eieren",
      "Zalm",
    ],
    vegetables: [
      "Broccoli",
      "Spinazie",
      "Paprika",
      "Wortels",
      "Sperziebonen",
      "Gemengde salade",
      "Wokgroenten",
    ],
    drinks: [
      "Water",
      "Elektrolyten bij veel zweten",
      "Zwarte koffie voor training indien gewenst",
      "Proteïneshake wanneer eiwit laag is",
      "Halfvolle melk indien extra calorieën nodig zijn",
    ],
    avoid: [
      "Bulken met alleen junkfood",
      "Te weinig eiwit bij ontbijt",
      "Te weinig koolhydraten rond training",
      "Te veel suikerdranken",
    ],
  },

  Performance: {
    focus:
      "Enough carbs, hydration, electrolytes, protein recovery, and smart food timing around training.",
    proteins: [
      "Kipfilet",
      "Mager rundvlees",
      "Eieren",
      "Magere kwark",
      "Skyr",
      "Vis",
      "Proteïnepoeder",
      "Tempeh",
    ],
    carbs: [
      "Rijst",
      "Pasta",
      "Havermout",
      "Bananen",
      "Aardappelen",
      "Brood",
      "Ontbijtgranen rond zware training",
      "Fruit",
    ],
    fats: [
      "Olijfolie",
      "Avocado",
      "Noten",
      "Eieren",
      "Zalm",
    ],
    vegetables: [
      "Spinazie",
      "Paprika",
      "Wortels",
      "Broccoli",
      "Gemengde groenten",
      "Wokgroenten",
    ],
    drinks: [
      "Water",
      "Elektrolyten",
      "Koffie pre-workout",
      "Kokoswater af en toe",
      "Proteïneshake na training indien nodig",
    ],
    avoid: [
      "Hard trainen met te weinig eten",
      "Te weinig zout bij veel zweten",
      "Zeer lage koolhydraatdagen voor zware sessies",
      "Alcohol dicht bij prestatiedagen",
    ],
  },

  Maintenance: {
    focus:
      "Balanced foods, stable routine, flexible supermarket choices, and enough protein without overcomplicating.",
    proteins: [
      "Kipfilet",
      "Eieren",
      "Magere kwark",
      "Skyr",
      "Vis",
      "Mager rundvlees",
      "Tofu",
      "Proteïnepoeder",
    ],
    carbs: [
      "Rijst",
      "Aardappelen",
      "Havermout",
      "Fruit",
      "Volkoren brood",
      "Pasta",
      "Bonen",
    ],
    fats: [
      "Avocado",
      "Olijfolie",
      "Noten",
      "Eieren",
      "Zalm",
    ],
    vegetables: [
      "Gemengde groenten",
      "Spinazie",
      "Broccoli",
      "Wortels",
      "Tomaten",
      "Komkommer",
    ],
    drinks: [
      "Water",
      "Koffie",
      "Thee",
      "Spa rood",
      "Af en toe zero frisdrank",
    ],
    avoid: [
      "Random snacken zonder structuur",
      "Eiwit overslaan",
      "Te veel calorieën drinken",
      "Weekend eten dat je hele week terugdraait",
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

  if (clean.includes("fat") || clean.includes("loss") || clean.includes("shred")) {
    return "Fat Loss";
  }

  if (clean.includes("muscle") || clean.includes("build") || clean.includes("gain")) {
    return "Build Muscle";
  }

  if (clean.includes("performance") || clean.includes("athletic")) {
    return "Performance";
  }

  return "Maintenance";
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
  const totalProteinGrams = peopleTargets.reduce(
    (sum, person) => sum + person.proteinGrams,
    0
  );

  const totalCarbsGrams = peopleTargets.reduce(
    (sum, person) => sum + person.carbsGrams,
    0
  );

  const totalFatsGrams = peopleTargets.reduce(
    (sum, person) => sum + person.fatsGrams,
    0
  );

  const totalWaterLiters = peopleTargets.reduce(
    (sum, person) => sum + person.waterLiters,
    0
  );

  const proteinKg = (totalProteinGrams * 7) / 1000;
  const carbKg = (totalCarbsGrams * 7) / 1000;
  const fatKg = (totalFatsGrams * 7) / 1000;

  const proteinFoodMin = proteinKg * 0.85;
  const proteinFoodMax = proteinKg * 1.25;

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
    proteinFood: `${roundDecimal(proteinFoodMin)}–${roundDecimal(
      proteinFoodMax
    )}kg lean protein/week`,
    carbFood: `${roundDecimal(carbKg * 0.6)}–${roundDecimal(
      carbKg * 0.95
    )}kg carb sources/week`,
    fatFood: `${roundDecimal(fatKg * 0.35)}–${roundDecimal(
      fatKg * 0.55
    )}kg fat sources/week`,
    vegetables: `${roundDecimal(vegetableKg)}kg vegetables/week`,
    fruit: `${roundDecimal(fruitKg)}kg fruit/week`,
    water: `${roundDecimal(totalWaterLiters * 7)}L water/week`,
  };
}

function generateWeeklyShoppingList({ guide, weeklyAmounts, peopleCount, goalKey }) {
  const base = [
    {
      category: "Protein",
      items: [
        `${weeklyAmounts.proteinFood}`,
        "Kipfilet",
        "Magere kwark / Skyr",
        goalKey === "Build Muscle" ? "Eieren" : "Eiwitten",
        "Tonijn of witte vis",
        "Tofu of tempeh",
      ],
    },
    {
      category: "Carbs",
      items: [
        `${weeklyAmounts.carbFood}`,
        goalKey === "Fat Loss" ? "Aardappelen" : "Rijst",
        "Havermout",
        "Volkoren wraps of brood",
        "Bananen",
      ],
    },
    {
      category: "Fats",
      items: [
        `${weeklyAmounts.fatFood}`,
        "Olijfolie",
        "Avocado",
        "Eieren",
        "Noten of pindakaas 100%",
      ],
    },
    {
      category: "Vegetables & fruit",
      items: [
        `${weeklyAmounts.vegetables}`,
        `${weeklyAmounts.fruit}`,
        "Broccoli",
        "Spinazie",
        "Komkommer",
        "Wokgroenten",
        "Tomaten of paprika",
      ],
    },
    {
      category: "Drinks",
      items: [
        `${weeklyAmounts.water}`,
        "Spa rood / bruiswater",
        "Koffie",
        "Thee",
        peopleCount > 1 ? "Elektrolyten voor training of warme dagen" : "Elektrolyten indien nodig",
      ],
    },
  ];

  return base.map((group) => ({
    ...group,
    items: Array.from(new Set(group.items.concat(guide[group.category?.toLowerCase()] || []))),
  }));
}

export default function NutritionClient({ membershipType }) {
  const membership = String(membershipType || "").toLowerCase().trim();

  const hasNutritionAccess =
    membership === "nutrition" ||
    membership === "full_access" ||
    membership === "vip" ||
    membership === "coaching";

  const importedGoals = Object.keys(nutritionPlans || {});
  const fallbackGoals = ["Fat Loss", "Build Muscle", "Performance", "Maintenance"];
  const goalOptions = importedGoals.length ? importedGoals : fallbackGoals;

  const defaultGoal = goalOptions.includes("Fat Loss")
    ? "Fat Loss"
    : goalOptions[0] || "Fat Loss";

  const [selectedGoal, setSelectedGoal] = useState(defaultGoal);
  const [selectedSupermarket, setSelectedSupermarket] = useState("Albert Heijn");

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
    () =>
      getPersonTargets({
        sex,
        age,
        weightKg,
        heightCm,
        activityLevel,
        selectedGoal,
      }),
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
    [
      partnerSex,
      partnerAge,
      partnerWeightKg,
      partnerHeightCm,
      partnerActivityLevel,
      selectedGoal,
    ]
  );

  const peopleTargets = coupleMode
    ? [personOneTargets, personTwoTargets]
    : [personOneTargets];

  const combinedTargets = useMemo(() => {
    const totalCalories = peopleTargets.reduce(
      (sum, person) => sum + person.targetCalories,
      0
    );
    const totalProtein = peopleTargets.reduce(
      (sum, person) => sum + person.proteinGrams,
      0
    );
    const totalCarbs = peopleTargets.reduce(
      (sum, person) => sum + person.carbsGrams,
      0
    );
    const totalFats = peopleTargets.reduce(
      (sum, person) => sum + person.fatsGrams,
      0
    );
    const totalWater = peopleTargets.reduce(
      (sum, person) => sum + person.waterLiters,
      0
    );

    return {
      targetCalories: totalCalories,
      protein: totalProtein,
      carbs: totalCarbs,
      fats: totalFats,
      water: totalWater,
    };
  }, [peopleTargets]);

  const weeklyAmounts = useMemo(
    () =>
      buildWeeklyGroceryAmounts({
        peopleTargets,
        goalKey,
      }),
    [peopleTargets, goalKey]
  );

  const weeklyShoppingList = useMemo(
    () =>
      generateWeeklyShoppingList({
        guide,
        weeklyAmounts,
        peopleCount: peopleTargets.length,
        goalKey,
      }),
    [guide, weeklyAmounts, peopleTargets.length, goalKey]
  );

  return (
    <div style={pageWrap}>
      <section style={heroCard}>
        <div style={eyebrow}>Nutrition Command Center</div>
        <h2 style={heroTitle}>Dutch supermarket grocery generator</h2>
        <p style={heroText}>
          Built for Dutch customers shopping at places like Albert Heijn, Jumbo,
          Lidl, Aldi, Plus and Dirk. Enter your stats, choose your goal, and
          generate a weekly grocery guide for one person or a couple.
        </p>

        <div style={topControls}>
          <label style={coupleToggle}>
            <input
              type="checkbox"
              checked={coupleMode}
              onChange={(e) => setCoupleMode(e.target.checked)}
            />
            <span>Generate groceries for 2 people / couple</span>
          </label>

          <Field label="Preferred supermarket">
            <select
              value={selectedSupermarket}
              onChange={(e) => setSelectedSupermarket(e.target.value)}
              style={input}
            >
              {dutchSupermarkets.map((market) => (
                <option key={market} value={market} style={optionStyle}>
                  {market}
                </option>
              ))}
            </select>
          </Field>
        </div>

        <div style={profileGrid}>
          <div style={profileCard}>
            <div style={profileTitle}>Person 1</div>

            <div style={calculatorGrid}>
              <Field label="Sex">
                <select value={sex} onChange={(e) => setSex(e.target.value)} style={input}>
                  <option style={optionStyle} value="male">Male</option>
                  <option style={optionStyle} value="female">Female</option>
                </select>
              </Field>

              <Field label="Age">
                <input value={age} onChange={(e) => setAge(e.target.value)} style={input} inputMode="numeric" />
              </Field>

              <Field label="Weight kg">
                <input value={weightKg} onChange={(e) => setWeightKg(e.target.value)} style={input} inputMode="numeric" />
              </Field>

              <Field label="Height cm">
                <input value={heightCm} onChange={(e) => setHeightCm(e.target.value)} style={input} inputMode="numeric" />
              </Field>

              <Field label="Activity">
                <select value={activityLevel} onChange={(e) => setActivityLevel(e.target.value)} style={input}>
                  {activityOptions.map((item) => (
                    <option key={item.value} value={item.value} style={optionStyle}>
                      {item.label}
                    </option>
                  ))}
                </select>
              </Field>

              <Field label="Goal">
                <select value={selectedGoal} onChange={(e) => setSelectedGoal(e.target.value)} style={input}>
                  {goalOptions.map((goal) => (
                    <option key={goal} value={goal} style={optionStyle}>
                      {goal}
                    </option>
                  ))}
                </select>
              </Field>
            </div>
          </div>

          {coupleMode && (
            <div style={profileCard}>
              <div style={profileTitle}>Person 2</div>

              <div style={calculatorGrid}>
                <Field label="Sex">
                  <select value={partnerSex} onChange={(e) => setPartnerSex(e.target.value)} style={input}>
                    <option style={optionStyle} value="male">Male</option>
                    <option style={optionStyle} value="female">Female</option>
                  </select>
                </Field>

                <Field label="Age">
                  <input value={partnerAge} onChange={(e) => setPartnerAge(e.target.value)} style={input} inputMode="numeric" />
                </Field>

                <Field label="Weight kg">
                  <input value={partnerWeightKg} onChange={(e) => setPartnerWeightKg(e.target.value)} style={input} inputMode="numeric" />
                </Field>

                <Field label="Height cm">
                  <input value={partnerHeightCm} onChange={(e) => setPartnerHeightCm(e.target.value)} style={input} inputMode="numeric" />
                </Field>

                <Field label="Activity">
                  <select value={partnerActivityLevel} onChange={(e) => setPartnerActivityLevel(e.target.value)} style={input}>
                    {activityOptions.map((item) => (
                      <option key={item.value} value={item.value} style={optionStyle}>
                        {item.label}
                      </option>
                    ))}
                  </select>
                </Field>
              </div>
            </div>
          )}
        </div>

        <div style={macroGrid}>
          <MacroCard label="Total calories" value={`${roundToNearest(combinedTargets.targetCalories)} kcal/day`} />
          <MacroCard label="Total protein" value={`${combinedTargets.protein}g/day`} />
          <MacroCard label="Total carbs" value={`${combinedTargets.carbs}g/day`} />
          <MacroCard label="Total fats" value={`${combinedTargets.fats}g/day`} />
          <MacroCard label="Water" value={`${roundDecimal(combinedTargets.water)}L/day`} />
          <MacroCard label="People" value={coupleMode ? "2 people" : "1 person"} />
        </div>
      </section>

      <section style={sectionCard}>
        <div style={sectionTop}>
          <div style={eyebrow}>Weekly grocery generator</div>
          <h3 style={sectionTitle}>
            Shopping guide for {selectedSupermarket}
          </h3>
          <p style={muted}>
            Based on {coupleMode ? "both profiles" : "your profile"} and the{" "}
            <strong>{goalKey}</strong> goal, aim for around{" "}
            <strong>{weeklyAmounts.proteinFood}</strong>,{" "}
            <strong> {weeklyAmounts.vegetables}</strong>,{" "}
            <strong>{weeklyAmounts.fruit}</strong>, and{" "}
            <strong>{weeklyAmounts.water}</strong>.
          </p>
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
          <div style={eyebrow}>Goal-based grocery strategy</div>
          <h3 style={sectionTitle}>{goalKey}</h3>
          <p style={muted}>{guide.focus}</p>
        </div>

        <div style={categoryGrid}>
          <FoodCategory title="Protein sources" items={guide.proteins} />
          <FoodCategory title="Carb sources" items={guide.carbs} />
          <FoodCategory title="Fat sources" items={guide.fats} />
          <FoodCategory title="Vegetables & fruit" items={guide.vegetables} />
        </div>
      </section>

      <section style={twoColumnGrid}>
        <div style={sectionCard}>
          <div style={eyebrow}>Drinks during the day</div>
          <h3 style={sectionTitleSmall}>What to drink</h3>
          <p style={muted}>
            Start with {roundDecimal(combinedTargets.water)}L water per day for{" "}
            {coupleMode ? "both people combined" : "you"}. Add electrolytes
            when sweating a lot, training hard, or during hot days.
          </p>
          <ul style={list}>
            {guide.drinks.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div style={sectionCard}>
          <div style={eyebrow}>Limit these</div>
          <h3 style={sectionTitleSmall}>Common progress blockers</h3>
          <ul style={list}>
            {guide.avoid.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section style={sectionCard}>
        <div style={eyebrow}>Daily structure</div>
        <h3 style={sectionTitle}>Simple food rules</h3>

        <div style={rulesGrid}>
          <RuleCard
            title="Every main meal"
            text="Add a protein source first, then build carbs and fats around the goal."
          />
          <RuleCard
            title="Dutch supermarket habit"
            text="Buy kwark/skyr, lean protein, potatoes/rice/oats, vegetables, fruit, and zero-calorie drinks first."
          />
          <RuleCard
            title="For fat loss"
            text="Use lean protein, high-volume vegetables, water, zero drinks, and controlled portions of fats."
          />
          <RuleCard
            title="For muscle gain"
            text="Add rice, oats, bread, pasta, potatoes, bananas, and extra protein around training."
          />
        </div>
      </section>

      {!hasNutritionAccess && (
        <section style={lockedCard}>
          <div style={lockedTitle}>Nutrition access locked</div>
          <p style={muted}>
            Upgrade your membership to unlock full nutrition guidance and grocery tools.
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
  maxWidth: "880px",
};

const topControls = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
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
  gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
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
  gridTemplateColumns: "repeat(auto-fit,minmax(160px,1fr))",
  gap: "14px",
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
  gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
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
  gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))",
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
  fontWeight: "800",
};

const twoColumnGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
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
  gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))",
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
  fontWeight: "800",
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
