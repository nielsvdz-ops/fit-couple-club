"use client";

import { useMemo, useState } from "react";

const nutritionPlans = {
  "Lose Fat": {
    summary:
      "Prioritize a calorie deficit, high protein, repeatable meals, and fewer random snacks. Meals stay filling, simple, and easy to stick to.",
    calories: "Moderate calorie deficit based on bodyweight and activity",
    protein: "1.8–2.2g protein per kg bodyweight",
    carbs: "Moderate carbs around training and active periods",
    fats: "Moderate fats from whole-food sources",
    hydration: "2.5–3.5L water daily",
    timing: [
      "Protein in every meal",
      "Keep high-calorie snacks planned instead of random",
      "Use bigger meals around training if that helps adherence",
      "Choose high-volume foods to stay fuller for longer",
    ],
    grocery: [
      "Chicken breast or thigh",
      "Lean beef or turkey",
      "Eggs / egg whites",
      "Greek yogurt / skyr",
      "Rice / potatoes / oats",
      "Berries / apples / bananas",
      "Frozen vegetables / salad mixes",
      "Olive oil / avocado / nuts in moderation",
    ],
    sampleDays: [
      {
        title: "Day 1 — Balanced deficit",
        meals: [
          "Breakfast — Greek yogurt bowl with berries, chia, and a small handful of granola",
          "Lunch — Chicken rice bowl with cucumber, carrots, and light yogurt sauce",
          "Snack — Protein shake + apple",
          "Dinner — Salmon, roasted potatoes, and green beans",
        ],
      },
      {
        title: "Day 2 — Higher volume",
        meals: [
          "Breakfast — Egg white omelet with spinach, mushrooms, and toast",
          "Lunch — Turkey wrap with salad and light dressing",
          "Snack — Cottage cheese + pineapple",
          "Dinner — Lean beef stir-fry with vegetables and jasmine rice",
        ],
      },
      {
        title: "Day 3 — Simple office day",
        meals: [
          "Breakfast — Overnight oats with whey and blueberries",
          "Lunch — Chicken pasta salad with light dressing",
          "Snack — Boiled eggs + fruit",
          "Dinner — White fish, mashed sweet potato, and broccoli",
        ],
      },
      {
        title: "Day 4 — Lower calorie comfort day",
        meals: [
          "Breakfast — Protein smoothie with banana, spinach, whey, and almond milk",
          "Lunch — Tuna rice bowl with corn, cucumber, and lettuce",
          "Snack — Greek yogurt",
          "Dinner — Chicken burger bowl with potatoes and salad",
        ],
      },
      {
        title: "Day 5 — Training support",
        meals: [
          "Breakfast — Oats with whey, cinnamon, and strawberries",
          "Lunch — Lean beef rice bowl with mixed vegetables",
          "Snack — Rice cakes with cottage cheese",
          "Dinner — Chicken fajita bowl with peppers and avocado",
        ],
      },
      {
        title: "Day 6 — Fast prep day",
        meals: [
          "Breakfast — Scrambled eggs, toast, and kiwi",
          "Lunch — Prepped chicken, potatoes, and greens",
          "Snack — Protein pudding",
          "Dinner — Turkey meatballs with tomato sauce and zucchini noodles",
        ],
      },
      {
        title: "Day 7 — Weekend structure",
        meals: [
          "Breakfast — Yogurt parfait with berries and flax seeds",
          "Lunch — Grilled chicken sandwich on thin bread with side salad",
          "Snack — Protein bar + orange",
          "Dinner — Shrimp rice bowl with vegetables",
        ],
      },
      {
        title: "Day 8 — Higher satiety day",
        meals: [
          "Breakfast — Veggie omelet with avocado on toast",
          "Lunch — Lean beef burrito bowl with lettuce and salsa",
          "Snack — Skyr + berries",
          "Dinner — Baked cod, potatoes, and asparagus",
        ],
      },
      {
        title: "Day 9 — Light but filling",
        meals: [
          "Breakfast — Chia protein pudding with fruit",
          "Lunch — Chicken Caesar wrap, lighter dressing",
          "Snack — Edamame + protein shake",
          "Dinner — Turkey chili with rice",
        ],
      },
      {
        title: "Day 10 — Controlled restaurant-style day",
        meals: [
          "Breakfast — Oatmeal with whey and banana",
          "Lunch — Grilled chicken bowl with rice and vegetables",
          "Snack — Greek yogurt + apple",
          "Dinner — Steak, roasted vegetables, and small baked potato",
        ],
      },
      {
        title: "Day 11 — Easy repeat day",
        meals: [
          "Breakfast — Eggs, fruit, and one slice of toast",
          "Lunch — Tuna potato salad bowl",
          "Snack — Cottage cheese + berries",
          "Dinner — Chicken stir-fry with rice and broccoli",
        ],
      },
    ],
  },

  "Build Muscle": {
    summary:
      "Prioritize strong protein intake, enough calories, higher carbs around training, and recovery. Meals are built to support performance and steady growth.",
    calories: "Slight calorie surplus",
    protein: "1.8–2.2g protein per kg bodyweight",
    carbs: "Higher carbs around training",
    fats: "Moderate fats for hormones and satiety",
    hydration: "3L+ water daily",
    timing: [
      "Eat before and after training",
      "Use carb-heavy meals around hard sessions",
      "Do not under-eat on heavy training days",
      "Keep protein consistent across the day",
    ],
    grocery: [
      "Chicken / steak / lean beef",
      "Salmon / tuna",
      "Greek yogurt / cottage cheese",
      "Oats / rice / pasta / potatoes",
      "Fruit",
      "Nut butter",
      "Avocado / olive oil",
      "Wraps / bagels / easy carbs",
    ],
    sampleDays: [
      {
        title: "Day 1 — Classic muscle gain day",
        meals: [
          "Breakfast — Oats with whey, banana, and peanut butter",
          "Lunch — Beef rice bowl with avocado",
          "Snack — Greek yogurt + granola",
          "Dinner — Chicken pasta bowl",
        ],
      },
      {
        title: "Day 2 — Heavier carb day",
        meals: [
          "Breakfast — Bagel with eggs and turkey slices",
          "Lunch — Chicken, rice, and roasted vegetables",
          "Snack — Protein shake + banana + rice cakes",
          "Dinner — Salmon, potatoes, and greens",
        ],
      },
      {
        title: "Day 3 — Easy bulking day",
        meals: [
          "Breakfast — Greek yogurt bowl with oats, berries, and honey",
          "Lunch — Steak wrap with fries or potatoes",
          "Snack — Cottage cheese + fruit + nut butter",
          "Dinner — Beef pasta with tomato sauce",
        ],
      },
      {
        title: "Day 4 — Post-workout focused",
        meals: [
          "Breakfast — Overnight oats with whey and banana",
          "Lunch — Chicken burrito bowl with rice, beans, and salsa",
          "Snack — Chocolate milk + protein bar",
          "Dinner — Teriyaki salmon with jasmine rice",
        ],
      },
      {
        title: "Day 5 — Strong appetite day",
        meals: [
          "Breakfast — Eggs, toast, avocado, and fruit",
          "Lunch — Double chicken rice bowl",
          "Snack — Smoothie with whey, oats, banana, and peanut butter",
          "Dinner — Lean beef burgers with potatoes",
        ],
      },
      {
        title: "Day 6 — Higher protein build day",
        meals: [
          "Breakfast — Protein pancakes with berries and honey",
          "Lunch — Tuna pasta salad",
          "Snack — Greek yogurt + cereal",
          "Dinner — Chicken thighs, sweet potato, and vegetables",
        ],
      },
      {
        title: "Day 7 — Weekend muscle support",
        meals: [
          "Breakfast — French toast with eggs and fruit",
          "Lunch — Steak rice bowl with avocado",
          "Snack — Cottage cheese + granola",
          "Dinner — Chicken pesto pasta",
        ],
      },
      {
        title: "Day 8 — Fast prep gain day",
        meals: [
          "Breakfast — Oats with whey and almond butter",
          "Lunch — Meal-prep turkey rice boxes",
          "Snack — Bagel + protein shake",
          "Dinner — Beef chili with rice",
        ],
      },
      {
        title: "Day 9 — Performance support",
        meals: [
          "Breakfast — Scrambled eggs, bagel, and banana",
          "Lunch — Chicken noodles with vegetables",
          "Snack — Yogurt bowl with cereal",
          "Dinner — Salmon sushi-style rice bowl",
        ],
      },
      {
        title: "Day 10 — Clean bulk day",
        meals: [
          "Breakfast — Smoothie with whey, oats, berries, and peanut butter",
          "Lunch — Lean beef burrito bowl",
          "Snack — Rice cakes with cottage cheese and jam",
          "Dinner — Chicken breast, pasta, and garlic vegetables",
        ],
      },
      {
        title: "Day 11 — Simple repeat gain day",
        meals: [
          "Breakfast — Greek yogurt, oats, banana, and honey",
          "Lunch — Chicken wrap with potatoes",
          "Snack — Protein shake + trail mix",
          "Dinner — Steak, rice, and broccoli",
        ],
      },
    ],
  },

  "Tone & Shape Body": {
    summary:
      "Use balanced calories, strong protein, controlled portions, and consistent training support. Meals are structured to help improve shape without feeling overly restrictive.",
    calories: "Maintenance or light deficit depending on body composition",
    protein: "High protein daily",
    carbs: "Moderate carbs around training and active days",
    fats: "Balanced fats from quality sources",
    hydration: "2.5–3L water daily",
    timing: [
      "Keep meals structured and repeatable",
      "Protein in every meal",
      "Avoid high-chaos weekends",
      "Use simple meals during busy days",
    ],
    grocery: [
      "Chicken / turkey / fish",
      "Eggs / egg whites",
      "Greek yogurt",
      "Rice / potatoes / oats",
      "Berries / bananas / apples",
      "Salad vegetables / greens",
      "Olive oil / nuts",
    ],
    sampleDays: [
      {
        title: "Day 1 — Balanced shaping day",
        meals: [
          "Breakfast — Eggs, toast, and fruit",
          "Lunch — Chicken wrap + salad",
          "Snack — Protein smoothie",
          "Dinner — Fish, sweet potato, and vegetables",
        ],
      },
      {
        title: "Day 2 — Lean and simple",
        meals: [
          "Breakfast — Greek yogurt with berries and oats",
          "Lunch — Turkey rice bowl with cucumber and greens",
          "Snack — Cottage cheese + fruit",
          "Dinner — Chicken stir-fry with jasmine rice",
        ],
      },
      {
        title: "Day 3 — Office-friendly structure",
        meals: [
          "Breakfast — Overnight oats with whey",
          "Lunch — Tuna pasta salad",
          "Snack — Protein bar + apple",
          "Dinner — Salmon, potatoes, and broccoli",
        ],
      },
      {
        title: "Day 4 — Light and polished",
        meals: [
          "Breakfast — Smoothie with banana, whey, spinach, and almond milk",
          "Lunch — Chicken Caesar-style salad wrap",
          "Snack — Greek yogurt",
          "Dinner — Turkey meatballs with rice and greens",
        ],
      },
      {
        title: "Day 5 — Active day support",
        meals: [
          "Breakfast — Omelet with mushrooms and toast",
          "Lunch — Beef rice bowl with vegetables",
          "Snack — Rice cakes + cottage cheese",
          "Dinner — White fish tacos with salad",
        ],
      },
      {
        title: "Day 6 — Weekend control day",
        meals: [
          "Breakfast — Yogurt bowl with chia and berries",
          "Lunch — Chicken sandwich with side salad",
          "Snack — Protein shake + banana",
          "Dinner — Shrimp pasta with vegetables",
        ],
      },
      {
        title: "Day 7 — Higher protein shaping day",
        meals: [
          "Breakfast — Scrambled eggs, avocado toast, and kiwi",
          "Lunch — Turkey burrito bowl",
          "Snack — Skyr + fruit",
          "Dinner — Grilled salmon with potatoes and asparagus",
        ],
      },
      {
        title: "Day 8 — Quick prep day",
        meals: [
          "Breakfast — Oats with whey and strawberries",
          "Lunch — Prepped chicken, rice, and vegetables",
          "Snack — Boiled eggs + orange",
          "Dinner — Beef mince bowl with sweet potato",
        ],
      },
      {
        title: "Day 9 — Lean routine day",
        meals: [
          "Breakfast — Protein pancakes with berries",
          "Lunch — Tuna wrap with cucumber salad",
          "Snack — Cottage cheese + pineapple",
          "Dinner — Chicken breast, roasted potatoes, and greens",
        ],
      },
      {
        title: "Day 10 — Shape-focused day",
        meals: [
          "Breakfast — Yogurt parfait with oats and banana",
          "Lunch — Salmon rice bowl with avocado",
          "Snack — Protein pudding",
          "Dinner — Turkey chili with vegetables",
        ],
      },
      {
        title: "Day 11 — Easy repeat shape day",
        meals: [
          "Breakfast — Eggs, oats, and berries",
          "Lunch — Chicken salad bowl with rice",
          "Snack — Greek yogurt + apple",
          "Dinner — White fish, sweet potato, and green vegetables",
        ],
      },
    ],
  },
};

export default function NutritionClient({ membershipType }) {
  const membership = String(membershipType || "").toLowerCase();
  const isStarter = membership === "starter";

  const goals = Object.keys(nutritionPlans);
  const [selectedGoal, setSelectedGoal] = useState("Build Muscle");
  const [selectedDay, setSelectedDay] = useState(0);

  const plan = nutritionPlans[selectedGoal];
  const activeDay = useMemo(() => {
    return plan.sampleDays[selectedDay] || plan.sampleDays[0];
  }, [plan, selectedDay]);

  function handleGoalChange(goal) {
    setSelectedGoal(goal);
    setSelectedDay(0);
  }

  return (
    <div style={pageWrap}>
      <section style={heroCard}>
        <div style={eyebrow}>Nutrition Plans</div>
        <h1 style={heroTitle}>Choose your goal and build your eating day</h1>
        <p style={heroText}>
          Switch between goals and compare multiple sample days so members can
          choose a structure that actually fits their lifestyle, training, and
          appetite.
        </p>

        <div style={goalTabs}>
          {goals.map((goal) => {
            const active = selectedGoal === goal;
            return (
              <button
                key={goal}
                onClick={() => handleGoalChange(goal)}
                style={{
                  ...goalTab,
                  background: active ? "#ffffff" : "rgba(255,255,255,0.04)",
                  color: active ? "#111111" : "#ffffff",
                  border: active
                    ? "1px solid rgba(255,255,255,0.95)"
                    : "1px solid rgba(255,255,255,0.12)",
                }}
              >
                {goal}
              </button>
            );
          })}
        </div>
      </section>

      <section style={sectionCard}>
        <div style={sectionTop}>
          <div style={eyebrow}>Nutrition Direction</div>
          <h2 style={sectionTitle}>{selectedGoal}</h2>
        </div>

        <p style={muted}>{plan.summary}</p>

        <div style={macroGrid}>
          <div style={macroCard}>
            <div style={macroLabel}>Calories</div>
            <div style={macroValue}>{plan.calories}</div>
          </div>
          <div style={macroCard}>
            <div style={macroLabel}>Protein</div>
            <div style={macroValue}>{plan.protein}</div>
          </div>
          <div style={macroCard}>
            <div style={macroLabel}>Carbs</div>
            <div style={macroValue}>{plan.carbs}</div>
          </div>
          <div style={macroCard}>
            <div style={macroLabel}>Fats</div>
            <div style={macroValue}>{plan.fats}</div>
          </div>
          <div style={macroCard}>
            <div style={macroLabel}>Hydration</div>
            <div style={macroValue}>{plan.hydration}</div>
          </div>
        </div>
      </section>

      <section style={twoColGrid}>
        <div style={sectionCard}>
          <div style={eyebrow}>Meal Timing</div>
          <h2 style={sectionTitleSmall}>How to structure your day</h2>
          <ul style={list}>
            {plan.timing.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div style={sectionCard}>
          <div style={eyebrow}>Grocery Base</div>
          <h2 style={sectionTitleSmall}>What to keep in the house</h2>
          <ul style={list}>
            {plan.grocery.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section style={sectionCard}>
        <div style={sampleHeader}>
          <div>
            <div style={eyebrow}>Sample Days</div>
            <h2 style={sectionTitle}>Choose a full example day</h2>
            <p style={mutedCompact}>
              {plan.sampleDays.length} sample days available for {selectedGoal}.
            </p>
          </div>
        </div>

        <div style={dayTabs}>
          {plan.sampleDays.map((day, index) => {
            const active = selectedDay === index;
            return (
              <button
                key={day.title}
                onClick={() => setSelectedDay(index)}
                style={{
                  ...dayTab,
                  background: active ? "rgba(255,255,255,0.14)" : "rgba(255,255,255,0.03)",
                  border: active
                    ? "1px solid rgba(255,255,255,0.22)"
                    : "1px solid rgba(255,255,255,0.08)",
                }}
              >
                Day {index + 1}
              </button>
            );
          })}
        </div>

        <div style={featuredDayCard}>
          <div style={featuredDayTitle}>{activeDay.title}</div>
          <div style={mealsGrid}>
            {activeDay.meals.map((meal) => (
              <div key={meal} style={mealCard}>
                {meal}
              </div>
            ))}
          </div>
        </div>
      </section>

      {isStarter && (
        <section style={lockedCard}>
          <div style={lockedTitle}>Starter nutrition access</div>
          <p style={muted}>
            Starter gives a strong nutrition base with multiple usable day
            templates. Premium and VIP can later unlock more advanced tracking,
            personalization, and connected planning tools.
          </p>
        </section>
      )}
    </div>
  );
}

const pageWrap = {
  display: "grid",
  gap: "22px",
};

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
  maxWidth: "780px",
};

const sectionTop = {
  marginBottom: "14px",
};

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

const mutedCompact = {
  color: "rgba(255,255,255,0.62)",
  lineHeight: 1.6,
  marginTop: "6px",
};

const goalTabs = {
  display: "flex",
  gap: "10px",
  flexWrap: "wrap",
  marginTop: "18px",
};

const goalTab = {
  padding: "12px 14px",
  borderRadius: "12px",
  fontWeight: "700",
  cursor: "pointer",
};

const macroGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))",
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

const twoColGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
  gap: "22px",
};

const list = {
  paddingLeft: "18px",
  lineHeight: 1.9,
  color: "rgba(255,255,255,0.72)",
};

const sampleHeader = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
  gap: "16px",
  marginBottom: "18px",
};

const dayTabs = {
  display: "flex",
  flexWrap: "wrap",
  gap: "10px",
  marginBottom: "18px",
};

const dayTab = {
  padding: "10px 14px",
  borderRadius: "12px",
  color: "white",
  fontWeight: "700",
  cursor: "pointer",
};

const featuredDayCard = {
  background: "rgba(255,255,255,0.03)",
  border: "1px solid rgba(255,255,255,0.06)",
  borderRadius: "18px",
  padding: "18px",
};

const featuredDayTitle = {
  fontSize: "20px",
  fontWeight: "800",
  marginBottom: "14px",
};

const mealsGrid = {
  display: "grid",
  gap: "12px",
};

const mealCard = {
  background: "rgba(255,255,255,0.03)",
  border: "1px solid rgba(255,255,255,0.06)",
  borderRadius: "14px",
  padding: "14px 16px",
  lineHeight: 1.7,
};

const lockedTitle = {
  fontSize: "24px",
  fontWeight: "800",
  marginBottom: "8px",
};
