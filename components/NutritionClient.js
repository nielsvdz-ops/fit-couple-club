"use client";

import { useMemo, useState } from "react";
import { nutritionPlans } from "../lib/mealPlans";

const activityOptions = [
  { value: "sedentary", label: "Sedentary", multiplier: 1.2 },
  { value: "light", label: "Light activity", multiplier: 1.375 },
  { value: "moderate", label: "Moderate activity", multiplier: 1.55 },
  { value: "active", label: "Active", multiplier: 1.725 },
];

const groceryGuide = {
  "Build Muscle": {
    focus: "Higher protein, enough carbs, easy calories, and foods that support progressive training.",
    proteins: [
      "Chicken breast or chicken thighs",
      "Lean minced beef",
      "Eggs and egg whites",
      "Greek yogurt",
      "Cottage cheese",
      "Tuna or salmon",
      "Protein powder",
      "Tofu or tempeh",
    ],
    carbs: [
      "Rice",
      "Oats",
      "Potatoes",
      "Sweet potatoes",
      "Whole-wheat bread",
      "Pasta",
      "Bananas",
      "Wraps",
    ],
    fats: [
      "Avocado",
      "Olive oil",
      "Peanut butter",
      "Almonds or cashews",
      "Whole eggs",
      "Fatty fish",
    ],
    vegetables: [
      "Broccoli",
      "Spinach",
      "Bell peppers",
      "Carrots",
      "Green beans",
      "Mixed salad",
    ],
    drinks: [
      "Water",
      "Electrolytes during hot days or heavy sweating",
      "Black coffee before training if tolerated",
      "Zero-sugar drinks when cravings are high",
      "Protein shake when food protein is too low",
    ],
    avoid: [
      "Skipping protein at breakfast",
      "Trying to bulk only with junk food",
      "Too many liquid calories from sugary drinks",
      "Very low-carb eating when training hard",
    ],
  },

  "Fat Loss": {
    focus: "High-protein, high-volume foods, simple meals, low-calorie drinks, and easy supermarket choices.",
    proteins: [
      "Chicken breast",
      "Turkey",
      "White fish",
      "Tuna",
      "Egg whites",
      "Greek yogurt",
      "Lean beef",
      "Protein powder",
      "Tofu or tempeh",
    ],
    carbs: [
      "Potatoes",
      "Sweet potatoes",
      "Rice in controlled portions",
      "Oats",
      "Fruit",
      "Whole-grain bread",
      "Beans or lentils",
    ],
    fats: [
      "Avocado in small portions",
      "Olive oil measured",
      "Nuts in small portions",
      "Whole eggs",
      "Salmon",
    ],
    vegetables: [
      "Cucumber",
      "Lettuce",
      "Broccoli",
      "Zucchini",
      "Spinach",
      "Mushrooms",
      "Tomatoes",
      "Cauliflower",
    ],
    drinks: [
      "Water",
      "Sparkling water",
      "Black coffee",
      "Unsweetened tea",
      "Zero-calorie drinks if needed",
      "Electrolytes without sugar",
    ],
    avoid: [
      "Liquid calories",
      "Big handfuls of nuts without tracking",
      "Sauces with hidden calories",
      "Fried snacks",
      "Sugary coffee drinks",
    ],
  },

  "Performance": {
    focus: "Enough carbs, hydration, electrolytes, protein recovery, and food timing around training.",
    proteins: [
      "Chicken",
      "Lean beef",
      "Eggs",
      "Greek yogurt",
      "Fish",
      "Protein powder",
      "Tempeh",
    ],
    carbs: [
      "Rice",
      "Pasta",
      "Oats",
      "Bananas",
      "Potatoes",
      "Bread",
      "Cereal around training",
      "Fruit juice only around hard sessions if needed",
    ],
    fats: [
      "Olive oil",
      "Avocado",
      "Nuts",
      "Eggs",
      "Salmon",
    ],
    vegetables: [
      "Spinach",
      "Peppers",
      "Carrots",
      "Broccoli",
      "Mixed greens",
    ],
    drinks: [
      "Water",
      "Electrolytes",
      "Coffee pre-workout",
      "Coconut water occasionally",
      "Protein shake post-workout if needed",
    ],
    avoid: [
      "Training hard while under-eating",
      "Too little salt in hot climates",
      "Very low-carb days before hard sessions",
      "Alcohol close to performance days",
    ],
  },

  "Maintenance": {
    focus: "Balanced foods, stable routine, flexible choices, and enough protein without overcomplicating.",
    proteins: [
      "Chicken",
      "Eggs",
      "Greek yogurt",
      "Fish",
      "Lean beef",
      "Tofu",
      "Protein powder",
    ],
    carbs: [
      "Rice",
      "Potatoes",
      "Oats",
      "Fruit",
      "Bread",
      "Pasta",
      "Beans",
    ],
    fats: [
      "Avocado",
      "Olive oil",
      "Nuts",
      "Eggs",
      "Salmon",
    ],
    vegetables: [
      "Mixed vegetables",
      "Spinach",
      "Broccoli",
      "Carrots",
      "Tomatoes",
      "Cucumber",
    ],
    drinks: [
      "Water",
      "Coffee",
      "Tea",
      "Sparkling water",
      "Occasional zero-sugar drinks",
    ],
    avoid: [
      "Random snacking without structure",
      "Skipping protein",
      "Drinking too many calories",
      "Letting weekends erase weekday consistency",
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

export default function NutritionClient({ membershipType }) {
  const membership = String(membershipType || "").toLowerCase().trim();

  const hasNutritionAccess =
    membership === "nutrition" ||
    membership === "full_access" ||
    membership === "vip" ||
    membership === "coaching";

  const importedGoals = Object.keys(nutritionPlans || {});
  const goalOptions = importedGoals.length
    ? importedGoals
    : ["Fat Loss", "Build Muscle", "Performance", "Maintenance"];

  const defaultGoal = goalOptions.includes("Fat Loss")
    ? "Fat Loss"
    : goalOptions[0] || "Fat Loss";

  const [selectedGoal, setSelectedGoal] = useState(defaultGoal);
  const [sex, setSex] = useState("male");
  const [age, setAge] = useState("35");
  const [weightKg, setWeightKg] = useState("85");
  const [heightCm, setHeightCm] = useState("180");
  const [activityLevel, setActivityLevel] = useState("moderate");

  const goalKey = detectGoalKey(selectedGoal);
  const guide = groceryGuide[goalKey] || groceryGuide.Maintenance;

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
      water: `${Math.max(2, Math.round(cleanWeight * 0.04 * 10) / 10)}L`,
      shoppingProtein:
        cleanWeight >= 85 ? "1.5–2.2kg lean protein/week" : "1–1.6kg lean protein/week",
      vegetables:
        cleanWeight >= 85 ? "3–5kg vegetables/week" : "2–4kg vegetables/week",
    };
  }, [sex, age, weightKg, heightCm, activityLevel, selectedGoal]);

  const supermarketList = useMemo(() => {
    return [
      ...guide.proteins.slice(0, 5),
      ...guide.carbs.slice(0, 4),
      ...guide.fats.slice(0, 3),
      ...guide.vegetables.slice(0, 5),
      ...guide.drinks.slice(0, 3),
    ];
  }, [guide]);

  return (
    <div style={pageWrap}>
      <section style={heroCard}>
        <div style={eyebrow}>Nutrition Command Center</div>
        <h2 style={heroTitle}>Know what to buy, eat, and drink every day</h2>
        <p style={heroText}>
          This page is your grocery and nutrition guide. Use it to calculate
          your target calories, then build a supermarket list with the right
          protein, carbs, fats, vegetables, and drinks for your goal.
        </p>

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

        <div style={macroGrid}>
          <MacroCard label="Target calories" value={`${targets.targetCalories} kcal`} />
          <MacroCard label="Maintenance" value={`${targets.maintenance} kcal`} />
          <MacroCard label="Protein" value={targets.protein} />
          <MacroCard label="Carbs" value={targets.carbs} />
          <MacroCard label="Fats" value={targets.fats} />
          <MacroCard label="Water" value={`${targets.water}/day`} />
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
            Start with {targets.water} water per day. Add electrolytes when you
            sweat a lot, train hard, or live in a hot climate.
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
        <div style={sectionTop}>
          <div style={eyebrow}>Supermarket helper</div>
          <h3 style={sectionTitle}>Simple shopping checklist</h3>
          <p style={muted}>
            For your current profile, aim for around{" "}
            <strong>{targets.shoppingProtein}</strong> and{" "}
            <strong>{targets.vegetables}</strong>. Choose foods from each
            section below and keep your kitchen stocked.
          </p>
        </div>

        <div style={checklistGrid}>
          {supermarketList.map((item) => (
            <label key={item} style={checkItem}>
              <input type="checkbox" />
              <span>{item}</span>
            </label>
          ))}
        </div>
      </section>

      <section style={sectionCard}>
        <div style={eyebrow}>Daily structure</div>
        <h3 style={sectionTitle}>Simple food rules</h3>

        <div style={rulesGrid}>
          <RuleCard
            title="Every main meal"
            text="Add a clear protein source first, then add carbs and fats based on your goal."
          />
          <RuleCard
            title="Before shopping"
            text="Buy protein, carbs, fats, vegetables, fruit, and drinks separately so your meals stay easy."
          />
          <RuleCard
            title="For fat loss"
            text="Use more vegetables, lean protein, water, and low-calorie drinks to control hunger."
          />
          <RuleCard
            title="For muscle gain"
            text="Do not fear carbs. Add rice, oats, potatoes, pasta, and fruit around your training."
          />
        </div>
      </section>

      {!hasNutritionAccess && (
        <section style={lockedCard}>
          <div style={lockedTitle}>Nutrition access locked</div>
          <p style={muted}>
            Upgrade your membership to unlock full nutrition guidance and
            grocery tools.
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
  background: "linear-gradient(180deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.03) 100%)",
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
  maxWidth: "850px",
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
