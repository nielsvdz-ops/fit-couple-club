export const WEEK_DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

export const MEAL_GOALS = [
  { value: "fat-loss", label: "Lose Fat" },
  { value: "muscle-gain", label: "Build Muscle" },
  { value: "tone-shape", label: "Tone & Shape Body" },
  { value: "maintenance", label: "Maintain Athletic Lifestyle" },
  { value: "beginner-reset", label: "Beginner Body Reset" },
];

const mealTemplates = {
  breakfast: [
    {
      mealName: "High Protein Yogurt Bowl",
      ingredients: [
        "250g Greek yogurt",
        "40g oats",
        "80g berries",
        "10g chia seeds",
        "15g peanut butter",
      ],
      steps: [
        "Add Greek yogurt to a bowl.",
        "Top with oats and berries.",
        "Add chia seeds and peanut butter.",
        "Serve cold.",
      ],
      calories: "430 kcal",
      protein: "34g",
      carbs: "35g",
      fats: "14g",
    },
    {
      mealName: "Protein Pancakes",
      ingredients: [
        "2 eggs",
        "40g oats",
        "1 banana",
        "1 scoop protein powder",
        "5g cinnamon",
      ],
      steps: [
        "Blend all ingredients until smooth.",
        "Cook in a non-stick pan on medium heat.",
        "Flip when bubbles form.",
        "Serve warm.",
      ],
      calories: "510 kcal",
      protein: "38g",
      carbs: "48g",
      fats: "16g",
    },
    {
      mealName: "Avocado Egg Toast",
      ingredients: [
        "2 eggs",
        "2 slices whole grain bread",
        "70g avocado",
        "Salt and pepper",
      ],
      steps: [
        "Toast the bread.",
        "Cook eggs to preference.",
        "Mash avocado and spread on toast.",
        "Top with eggs and seasoning.",
      ],
      calories: "470 kcal",
      protein: "22g",
      carbs: "32g",
      fats: "24g",
    },
    {
      mealName: "Berry Oat Power Bowl",
      ingredients: [
        "50g oats",
        "200ml milk",
        "100g berries",
        "20g whey protein",
        "10g almond butter",
      ],
      steps: [
        "Cook oats with milk.",
        "Stir in protein powder.",
        "Top with berries and almond butter.",
      ],
      calories: "450 kcal",
      protein: "30g",
      carbs: "46g",
      fats: "12g",
    },
    {
      mealName: "Egg White Veggie Wrap",
      ingredients: [
        "200g egg whites",
        "1 whole egg",
        "1 tortilla wrap",
        "50g spinach",
        "50g tomato",
      ],
      steps: [
        "Cook egg whites and egg in a pan.",
        "Add spinach and tomato.",
        "Place in tortilla and wrap tightly.",
      ],
      calories: "390 kcal",
      protein: "32g",
      carbs: "26g",
      fats: "12g",
    },
  ],

  lunch: [
    {
      mealName: "Chicken Power Bowl",
      ingredients: [
        "150g chicken breast",
        "150g cooked rice",
        "100g broccoli",
        "50g avocado",
        "10ml olive oil",
      ],
      steps: [
        "Cook chicken with seasoning.",
        "Steam broccoli.",
        "Assemble rice, chicken, broccoli, and avocado.",
        "Finish with olive oil.",
      ],
      calories: "620 kcal",
      protein: "48g",
      carbs: "52g",
      fats: "20g",
    },
    {
      mealName: "Tuna Crunch Wrap",
      ingredients: [
        "1 tortilla wrap",
        "120g tuna",
        "30g Greek yogurt",
        "50g lettuce",
        "50g cucumber",
      ],
      steps: [
        "Mix tuna with Greek yogurt.",
        "Add vegetables to wrap.",
        "Fill with tuna mix and fold tightly.",
      ],
      calories: "420 kcal",
      protein: "35g",
      carbs: "28g",
      fats: "14g",
    },
    {
      mealName: "Chicken Caesar Wrap",
      ingredients: [
        "1 wrap",
        "130g chicken breast",
        "60g romaine lettuce",
        "20g parmesan",
        "20g light Caesar dressing",
      ],
      steps: [
        "Cook and slice chicken.",
        "Add all ingredients to wrap.",
        "Roll tightly and slice in half.",
      ],
      calories: "510 kcal",
      protein: "39g",
      carbs: "30g",
      fats: "22g",
    },
    {
      mealName: "Mediterranean Chicken Plate",
      ingredients: [
        "150g chicken breast",
        "120g potatoes",
        "80g cucumber",
        "80g tomatoes",
        "30g feta",
      ],
      steps: [
        "Cook chicken breast.",
        "Roast or boil potatoes.",
        "Plate with cucumber, tomato, and feta.",
      ],
      calories: "560 kcal",
      protein: "44g",
      carbs: "38g",
      fats: "20g",
    },
    {
      mealName: "Healthy Taco Bowl",
      ingredients: [
        "150g lean beef",
        "120g rice",
        "50g corn",
        "50g tomato salsa",
        "40g lettuce",
      ],
      steps: [
        "Cook beef with taco seasoning.",
        "Prepare rice.",
        "Add corn, lettuce, and salsa on top.",
      ],
      calories: "610 kcal",
      protein: "40g",
      carbs: "50g",
      fats: "24g",
    },
  ],

  dinner: [
    {
      mealName: "Salmon Sweet Potato Bowl",
      ingredients: [
        "150g salmon",
        "180g sweet potato",
        "100g green beans",
        "10ml olive oil",
      ],
      steps: [
        "Bake salmon until cooked through.",
        "Roast sweet potato cubes.",
        "Steam green beans.",
        "Plate together with olive oil.",
      ],
      calories: "640 kcal",
      protein: "39g",
      carbs: "42g",
      fats: "30g",
    },
    {
      mealName: "Steak Rice Bowl",
      ingredients: [
        "150g lean steak",
        "140g cooked rice",
        "100g peppers",
        "100g zucchini",
      ],
      steps: [
        "Cook steak to preference.",
        "Sauté peppers and zucchini.",
        "Serve over rice.",
      ],
      calories: "590 kcal",
      protein: "42g",
      carbs: "44g",
      fats: "22g",
    },
    {
      mealName: "Turkey Meatball Bowl",
      ingredients: [
        "160g turkey meatballs",
        "130g rice",
        "80g spinach",
        "100g tomato sauce",
      ],
      steps: [
        "Bake turkey meatballs.",
        "Cook rice.",
        "Warm tomato sauce and spinach.",
        "Combine in a bowl.",
      ],
      calories: "560 kcal",
      protein: "43g",
      carbs: "46g",
      fats: "17g",
    },
    {
      mealName: "Creamy Protein Pasta",
      ingredients: [
        "75g dry pasta",
        "140g chicken breast",
        "60g light cream cheese",
        "80g spinach",
        "20g parmesan",
      ],
      steps: [
        "Cook pasta.",
        "Cook chicken and slice.",
        "Mix cream cheese and parmesan into warm pasta.",
        "Add spinach and chicken.",
      ],
      calories: "690 kcal",
      protein: "48g",
      carbs: "58g",
      fats: "24g",
    },
    {
      mealName: "Shrimp Rice Bowl",
      ingredients: [
        "160g shrimp",
        "130g cooked rice",
        "100g broccoli",
        "10ml soy sauce",
      ],
      steps: [
        "Cook shrimp quickly in a pan.",
        "Steam broccoli.",
        "Serve with rice and soy sauce.",
      ],
      calories: "500 kcal",
      protein: "38g",
      carbs: "44g",
      fats: "10g",
    },
  ],

  snack: [
    {
      mealName: "Protein Smoothie",
      ingredients: [
        "1 scoop whey protein",
        "1 banana",
        "250ml milk",
        "10g peanut butter",
      ],
      steps: [
        "Add all ingredients to a blender.",
        "Blend until smooth.",
        "Serve cold.",
      ],
      calories: "320 kcal",
      protein: "29g",
      carbs: "28g",
      fats: "9g",
    },
    {
      mealName: "Greek Yogurt Dessert Cup",
      ingredients: [
        "200g Greek yogurt",
        "10g dark chocolate",
        "10g honey",
        "50g berries",
      ],
      steps: [
        "Add yogurt to a bowl.",
        "Top with berries, honey, and chopped dark chocolate.",
      ],
      calories: "260 kcal",
      protein: "22g",
      carbs: "22g",
      fats: "8g",
    },
    {
      mealName: "Protein Coffee Shake",
      ingredients: [
        "1 scoop vanilla protein",
        "150ml cold coffee",
        "150ml milk",
        "Ice cubes",
      ],
      steps: [
        "Add ingredients to blender.",
        "Blend until frothy.",
        "Serve immediately.",
      ],
      calories: "210 kcal",
      protein: "25g",
      carbs: "10g",
      fats: "5g",
    },
    {
      mealName: "Frozen Yogurt Bark",
      ingredients: [
        "200g Greek yogurt",
        "50g berries",
        "10g honey",
        "10g granola",
      ],
      steps: [
        "Spread yogurt on tray.",
        "Top with berries, honey, and granola.",
        "Freeze until firm and break into pieces.",
      ],
      calories: "240 kcal",
      protein: "19g",
      carbs: "26g",
      fats: "6g",
    },
    {
      mealName: "High Protein Brownie Bowl",
      ingredients: [
        "1 scoop chocolate protein",
        "10g cocoa powder",
        "50g Greek yogurt",
        "1 banana",
      ],
      steps: [
        "Mash banana in bowl.",
        "Mix with cocoa, protein, and yogurt.",
        "Serve chilled or slightly warmed.",
      ],
      calories: "280 kcal",
      protein: "24g",
      carbs: "28g",
      fats: "5g",
    },
  ],
};

const goalProfiles = {
  "fat-loss": {
    goalLabel: "Lose Fat",
    targetCalories: "1700–1900 kcal",
    proteinTarget: "130–160g",
    styleNote: "Higher protein, controlled calories, easy repeatability",
  },
  "muscle-gain": {
    goalLabel: "Build Muscle",
    targetCalories: "2300–2700 kcal",
    proteinTarget: "160–200g",
    styleNote: "Higher calories, stronger recovery support, more carbs",
  },
  "tone-shape": {
    goalLabel: "Tone & Shape Body",
    targetCalories: "1900–2200 kcal",
    proteinTarget: "140–170g",
    styleNote: "Balanced calories, shape-friendly meals, clean structure",
  },
  maintenance: {
    goalLabel: "Maintain Athletic Lifestyle",
    targetCalories: "2100–2400 kcal",
    proteinTarget: "140–180g",
    styleNote: "Balanced fuel, easy long-term routine",
  },
  "beginner-reset": {
    goalLabel: "Beginner Body Reset",
    targetCalories: "1800–2100 kcal",
    proteinTarget: "120–150g",
    styleNote: "Simple meals, easy prep, low friction",
  },
};

function rotateItem(arr, index) {
  return arr[index % arr.length];
}

function dailyMacroSummary(goal, dayIndex) {
  const presets = {
    "fat-loss": [
      ["1780 kcal", "145g", "155g", "58g"],
      ["1810 kcal", "150g", "160g", "55g"],
      ["1750 kcal", "140g", "150g", "57g"],
      ["1840 kcal", "152g", "162g", "56g"],
      ["1795 kcal", "148g", "158g", "58g"],
      ["1825 kcal", "150g", "165g", "55g"],
      ["1770 kcal", "143g", "152g", "57g"],
    ],
    "muscle-gain": [
      ["2460 kcal", "182g", "265g", "72g"],
      ["2520 kcal", "188g", "272g", "74g"],
      ["2410 kcal", "176g", "258g", "70g"],
      ["2550 kcal", "190g", "278g", "73g"],
      ["2485 kcal", "184g", "268g", "72g"],
      ["2590 kcal", "192g", "282g", "75g"],
      ["2440 kcal", "180g", "262g", "71g"],
    ],
    "tone-shape": [
      ["2040 kcal", "152g", "198g", "64g"],
      ["1985 kcal", "148g", "190g", "62g"],
      ["2070 kcal", "155g", "202g", "65g"],
      ["2015 kcal", "150g", "194g", "63g"],
      ["2090 kcal", "157g", "205g", "64g"],
      ["2035 kcal", "151g", "196g", "63g"],
      ["1995 kcal", "149g", "192g", "62g"],
    ],
    maintenance: [
      ["2240 kcal", "160g", "230g", "72g"],
      ["2190 kcal", "154g", "224g", "70g"],
      ["2280 kcal", "162g", "236g", "73g"],
      ["2215 kcal", "156g", "228g", "71g"],
      ["2295 kcal", "164g", "238g", "73g"],
      ["2235 kcal", "158g", "232g", "72g"],
      ["2205 kcal", "155g", "226g", "71g"],
    ],
    "beginner-reset": [
      ["1880 kcal", "132g", "182g", "61g"],
      ["1910 kcal", "136g", "186g", "60g"],
      ["1840 kcal", "128g", "178g", "59g"],
      ["1935 kcal", "138g", "188g", "61g"],
      ["1875 kcal", "131g", "181g", "60g"],
      ["1905 kcal", "135g", "185g", "60g"],
      ["1855 kcal", "129g", "179g", "59g"],
    ],
  };

  const [calories, protein, carbs, fats] = presets[goal][dayIndex % 7];

  return {
    totalCalories: calories,
    totalProtein: protein,
    totalCarbs: carbs,
    totalFats: fats,
  };
}

function buildDayMeals(goal, dayIndex, planIndex) {
  const breakfast = rotateItem(mealTemplates.breakfast, dayIndex + planIndex);
  const lunch = rotateItem(mealTemplates.lunch, dayIndex + planIndex * 2);
  const dinner = rotateItem(mealTemplates.dinner, dayIndex + planIndex * 3);
  const snack = rotateItem(mealTemplates.snack, dayIndex + planIndex * 4);

  const meals = [
    { ...breakfast, time: "08:00" },
    { ...lunch, time: "13:00" },
    { ...snack, time: "16:30" },
    { ...dinner, time: "19:30" },
  ];

  if (goal === "muscle-gain") {
    meals.push({
      mealName: "Late Protein Meal",
      time: "21:30",
      ingredients: ["250g Greek yogurt", "20g peanut butter", "1 banana"],
      steps: [
        "Add yogurt to bowl.",
        "Top with peanut butter and sliced banana.",
        "Serve cold.",
      ],
      calories: "320 kcal",
      protein: "24g",
      carbs: "24g",
      fats: "12g",
    });
  }

  return meals;
}

function buildSinglePlan(goal, planIndex) {
  const profile = goalProfiles[goal];

  return {
    id: `${goal}-${planIndex + 1}`,
    title: `${profile.goalLabel} Routine ${planIndex + 1}`,
    goalLabel: profile.goalLabel,
    targetCalories: profile.targetCalories,
    proteinTarget: profile.proteinTarget,
    styleNote: profile.styleNote,
    description:
      planIndex % 2 === 0
        ? "A structured weekly menu built for consistency, easy prep, and solid nutrition."
        : "A slightly different weekly food rhythm for variety while staying aligned with your goal.",
    days: WEEK_DAYS.map((day, dayIndex) => ({
      day,
      ...dailyMacroSummary(goal, dayIndex),
      meals: buildDayMeals(goal, dayIndex, planIndex),
    })),
  };
}

export function buildMealPlansForGoal(goal) {
  return Array.from({ length: 30 }, (_, i) => buildSinglePlan(goal, i));
}

export function getMealPlanAccessLimit(membership) {
  const m = String(membership || "").toLowerCase().trim();

  if (
    m === "nutrition" ||
    m === "full_access" ||
    m === "vip" ||
    m === "coaching"
  ) {
    return 999;
  }

  return 1;
}

export const nutritionPlans = {
  "fat-loss": buildMealPlansForGoal("fat-loss"),
  "muscle-gain": buildMealPlansForGoal("muscle-gain"),
  "tone-shape": buildMealPlansForGoal("tone-shape"),
  maintenance: buildMealPlansForGoal("maintenance"),
  "beginner-reset": buildMealPlansForGoal("beginner-reset"),
};
