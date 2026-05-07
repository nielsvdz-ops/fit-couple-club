// /lib/mealPlans.js
// Fit Couple Club Meal Plans System v2
// Uses recipes from /lib/recipes.js and ingredients/macros from /lib/foodDatabase.js
// Creates scalable routines, weekly plans, calorie matching, grocery lists, EN/NL labels,
// and cleaner helpers for RecipesClient/NutritionClient.

import {
  recipes,
  getRecipeMacros,
  getRecipeIngredients,
  getRecipeTitle,
  getRecipeDescription,
  getRecipeSteps,
} from "./recipes";

import {
  getFoodName,
  calculateIngredientMacros,
} from "./foodDatabase";

export const PLAN_GOALS = {
  fat_loss: {
    en: "Fat Loss",
    nl: "Vetverlies",
    description: {
      en: "Lower calorie, high-protein routines built for fat loss and control.",
      nl: "Lagere calorie, eiwitrijke routines voor vetverlies en controle.",
    },
  },
  build_muscle: {
    en: "Build Muscle",
    nl: "Spieropbouw",
    description: {
      en: "Higher calorie, high-protein routines built for muscle growth.",
      nl: "Hogere calorie, eiwitrijke routines voor spieropbouw.",
    },
  },
  maintenance: {
    en: "Maintenance",
    nl: "Onderhoud",
    description: {
      en: "Balanced routines to maintain weight, energy, and consistency.",
      nl: "Gebalanceerde routines om gewicht, energie en consistentie te behouden.",
    },
  },
  performance: {
    en: "Performance",
    nl: "Prestatie",
    description: {
      en: "Fuel-focused routines for training performance and recovery.",
      nl: "Voedingsroutines gericht op trainingsprestatie en herstel.",
    },
  },
};

export const MEAL_TIMES = {
  breakfast: "08:00",
  snack1: "11:00",
  lunch: "13:30",
  snack2: "16:30",
  dinner: "19:30",
  lateSnack: "21:30",
};

export const WEEK_DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

export const WEEK_DAY_LABELS = {
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

export const ACTIVITY_LEVELS = {
  sedentary: {
    multiplier: 1.2,
    en: "Sedentary",
    nl: "Zittend",
  },
  light: {
    multiplier: 1.375,
    en: "Light activity",
    nl: "Lichte activiteit",
  },
  moderate: {
    multiplier: 1.55,
    en: "Moderate activity",
    nl: "Gemiddelde activiteit",
  },
  active: {
    multiplier: 1.725,
    en: "Active",
    nl: "Actief",
  },
  very_active: {
    multiplier: 1.9,
    en: "Very active",
    nl: "Zeer actief",
  },
};

export const DEFAULT_ROUTINES_PER_GOAL = 60;

function normalizeGoal(goal) {
  const clean = String(goal || "").toLowerCase();

  if (clean.includes("fat") || clean.includes("loss") || clean.includes("cut")) {
    return "fat_loss";
  }

  if (
    clean.includes("muscle") ||
    clean.includes("build") ||
    clean.includes("bulk") ||
    clean.includes("gain")
  ) {
    return "build_muscle";
  }

  if (clean.includes("performance") || clean.includes("athletic")) {
    return "performance";
  }

  return "maintenance";
}

function round(value) {
  return Math.round(Number(value || 0));
}

function getRecipesByMealType(goal, mealType) {
  const normalizedGoal = normalizeGoal(goal);

  return recipes.filter(
    (recipe) =>
      recipe.mealType === mealType &&
      recipe.goals?.includes(normalizedGoal)
  );
}

function getAnyRecipesByMealType(mealType) {
  return recipes.filter((recipe) => recipe.mealType === mealType);
}

function pickRecipe(list, index) {
  if (!list?.length) return null;
  return list[Math.abs(index) % list.length];
}

function calculateMealsTotals(meals = []) {
  return meals.reduce(
    (acc, meal) => {
      if (!meal) return acc;

      const macros = getRecipeMacros(meal);

      acc.calories += Number(macros?.calories || 0);
      acc.protein += Number(macros?.protein || 0);
      acc.carbs += Number(macros?.carbs || 0);
      acc.fats += Number(macros?.fats || 0);

      return acc;
    },
    {
      calories: 0,
      protein: 0,
      carbs: 0,
      fats: 0,
    }
  );
}

function addTimeToMeal(recipe, key, language = "en") {
  if (!recipe) return null;

  const macros = getRecipeMacros(recipe);

  return {
    key,
    time: MEAL_TIMES[key],
    recipeId: recipe.id,
    mealType: recipe.mealType,
    title: getRecipeTitle(recipe, language),
    description: getRecipeDescription(recipe, language),
    ingredients: getRecipeIngredients(recipe, language),
    steps: getRecipeSteps(recipe, language),
    macros,
    raw: recipe,
  };
}

export function buildRoutine({
  goal = "maintenance",
  index = 0,
  mealsPerDay = 5,
  language = "en",
} = {}) {
  const normalizedGoal = normalizeGoal(goal);

  const breakfasts =
    getRecipesByMealType(normalizedGoal, "breakfast").length
      ? getRecipesByMealType(normalizedGoal, "breakfast")
      : getAnyRecipesByMealType("breakfast");

  const lunches =
    getRecipesByMealType(normalizedGoal, "lunch").length
      ? getRecipesByMealType(normalizedGoal, "lunch")
      : getAnyRecipesByMealType("lunch");

  const dinners =
    getRecipesByMealType(normalizedGoal, "dinner").length
      ? getRecipesByMealType(normalizedGoal, "dinner")
      : getAnyRecipesByMealType("dinner");

  const snacks =
    getRecipesByMealType(normalizedGoal, "snack").length
      ? getRecipesByMealType(normalizedGoal, "snack")
      : getAnyRecipesByMealType("snack");

  const breakfast = pickRecipe(breakfasts, index);
  const snack1 = pickRecipe(snacks, index + 11);
  const lunch = pickRecipe(lunches, index + 23);
  const snack2 = pickRecipe(snacks, index + 37);
  const dinner = pickRecipe(dinners, index + 53);
  const lateSnack = pickRecipe(snacks, index + 71);

  const mealList =
    mealsPerDay >= 6
      ? [breakfast, snack1, lunch, snack2, dinner, lateSnack]
      : [breakfast, snack1, lunch, snack2, dinner];

  const totals = calculateMealsTotals(mealList);

  return {
    id: `${normalizedGoal}_routine_${index + 1}`,
    goal: normalizedGoal,
    routineNumber: index + 1,
    mealsPerDay,
    label: {
      en: `${PLAN_GOALS[normalizedGoal]?.en || normalizedGoal} Routine ${index + 1}`,
      nl: `${PLAN_GOALS[normalizedGoal]?.nl || normalizedGoal} Routine ${index + 1}`,
    },
    summary: {
      en: PLAN_GOALS[normalizedGoal]?.description?.en || "",
      nl: PLAN_GOALS[normalizedGoal]?.description?.nl || "",
    },
    meals: {
      breakfast: addTimeToMeal(breakfast, "breakfast", language),
      snack1: addTimeToMeal(snack1, "snack1", language),
      lunch: addTimeToMeal(lunch, "lunch", language),
      snack2: addTimeToMeal(snack2, "snack2", language),
      dinner: addTimeToMeal(dinner, "dinner", language),
      lateSnack:
        mealsPerDay >= 6
          ? addTimeToMeal(lateSnack, "lateSnack", language)
          : null,
    },
    totals: {
      calories: round(totals.calories),
      protein: round(totals.protein),
      carbs: round(totals.carbs),
      fats: round(totals.fats),
    },
  };
}

export function buildGoalPlans({
  goal = "maintenance",
  count = DEFAULT_ROUTINES_PER_GOAL,
  mealsPerDay = 5,
  language = "en",
} = {}) {
  return Array.from({ length: count }, (_, index) =>
    buildRoutine({
      goal,
      index,
      mealsPerDay,
      language,
    })
  );
}

export function buildAllMealPlans({
  countPerGoal = DEFAULT_ROUTINES_PER_GOAL,
  mealsPerDay = 5,
  language = "en",
} = {}) {
  return [
    ...buildGoalPlans({
      goal: "fat_loss",
      count: countPerGoal,
      mealsPerDay,
      language,
    }),
    ...buildGoalPlans({
      goal: "build_muscle",
      count: countPerGoal,
      mealsPerDay,
      language,
    }),
    ...buildGoalPlans({
      goal: "maintenance",
      count: countPerGoal,
      mealsPerDay,
      language,
    }),
    ...buildGoalPlans({
      goal: "performance",
      count: countPerGoal,
      mealsPerDay,
      language,
    }),
  ];
}

export const FAT_LOSS_PLANS = buildGoalPlans({
  goal: "fat_loss",
  count: DEFAULT_ROUTINES_PER_GOAL,
});

export const BUILD_MUSCLE_PLANS = buildGoalPlans({
  goal: "build_muscle",
  count: DEFAULT_ROUTINES_PER_GOAL,
});

export const MAINTENANCE_PLANS = buildGoalPlans({
  goal: "maintenance",
  count: DEFAULT_ROUTINES_PER_GOAL,
});

export const PERFORMANCE_PLANS = buildGoalPlans({
  goal: "performance",
  count: DEFAULT_ROUTINES_PER_GOAL,
});

export const ALL_MEAL_PLANS = [
  ...FAT_LOSS_PLANS,
  ...BUILD_MUSCLE_PLANS,
  ...MAINTENANCE_PLANS,
  ...PERFORMANCE_PLANS,
];

export function getMealPlanById(id) {
  return ALL_MEAL_PLANS.find((plan) => plan.id === id) || null;
}

export function getMealPlansByGoal(goal) {
  const normalizedGoal = normalizeGoal(goal);

  return ALL_MEAL_PLANS.filter((plan) => plan.goal === normalizedGoal);
}

export function calculateBmr({
  sex = "male",
  age = 25,
  weight = 80,
  height = 180,
} = {}) {
  const cleanAge = Number(age || 25);
  const cleanWeight = Number(weight || 80);
  const cleanHeight = Number(height || 180);

  if (sex === "female") {
    return Math.round(
      10 * cleanWeight + 6.25 * cleanHeight - 5 * cleanAge - 161
    );
  }

  return Math.round(
    10 * cleanWeight + 6.25 * cleanHeight - 5 * cleanAge + 5
  );
}

export function getRecommendedCalories({
  sex = "male",
  age = 25,
  weight = 80,
  height = 180,
  activity = "moderate",
  goal = "maintenance",
} = {}) {
  const normalizedGoal = normalizeGoal(goal);
  const bmr = calculateBmr({
    sex,
    age,
    weight,
    height,
  });

  const activityMultiplier =
    ACTIVITY_LEVELS[activity]?.multiplier ||
    ACTIVITY_LEVELS.moderate.multiplier;

  const maintenance = bmr * activityMultiplier;

  if (normalizedGoal === "fat_loss") {
    return Math.round(maintenance - 400);
  }

  if (normalizedGoal === "build_muscle") {
    return Math.round(maintenance + 300);
  }

  if (normalizedGoal === "performance") {
    return Math.round(maintenance + 150);
  }

  return Math.round(maintenance);
}

export function getMacroTargets({
  calories = 2500,
  weight = 80,
  goal = "maintenance",
} = {}) {
  const normalizedGoal = normalizeGoal(goal);
  const cleanWeight = Number(weight || 80);

  const proteinPerKg =
    normalizedGoal === "fat_loss"
      ? 2.2
      : normalizedGoal === "build_muscle"
      ? 2
      : 1.8;

  const fatPerKg =
    normalizedGoal === "fat_loss"
      ? 0.7
      : 0.8;

  const protein = Math.round(cleanWeight * proteinPerKg);
  const fats = Math.round(cleanWeight * fatPerKg);

  const proteinCalories = protein * 4;
  const fatCalories = fats * 9;
  const carbs = Math.max(
    50,
    Math.round((calories - proteinCalories - fatCalories) / 4)
  );

  return {
    calories: Math.round(calories),
    protein,
    carbs,
    fats,
  };
}

export function scorePlanAgainstTargets(plan, targets) {
  if (!plan || !targets) return Infinity;

  const calorieDiff = Math.abs(plan.totals.calories - targets.calories);
  const proteinDiff = Math.abs(plan.totals.protein - targets.protein) * 4;
  const carbDiff = Math.abs(plan.totals.carbs - targets.carbs) * 1.2;
  const fatDiff = Math.abs(plan.totals.fats - targets.fats) * 2;

  return calorieDiff + proteinDiff + carbDiff + fatDiff;
}

export function getClosestMealPlans({
  targetCalories = 2500,
  targetProtein = null,
  targetCarbs = null,
  targetFats = null,
  goal = "maintenance",
  limit = 10,
  language = "en",
} = {}) {
  const normalizedGoal = normalizeGoal(goal);

  const targets = {
    calories: Number(targetCalories || 2500),
    protein: Number(targetProtein || 0),
    carbs: Number(targetCarbs || 0),
    fats: Number(targetFats || 0),
  };

  const plans = buildGoalPlans({
    goal: normalizedGoal,
    count: DEFAULT_ROUTINES_PER_GOAL,
    language,
  });

  return [...plans]
    .sort((a, b) => {
      if (!targetProtein && !targetCarbs && !targetFats) {
        return (
          Math.abs(a.totals.calories - targetCalories) -
          Math.abs(b.totals.calories - targetCalories)
        );
      }

      return (
        scorePlanAgainstTargets(a, targets) -
        scorePlanAgainstTargets(b, targets)
      );
    })
    .slice(0, limit);
}

export function buildPersonalizedMealPlan({
  sex = "male",
  age = 25,
  weight = 80,
  height = 180,
  activity = "moderate",
  goal = "maintenance",
  language = "en",
} = {}) {
  const normalizedGoal = normalizeGoal(goal);

  const targetCalories = getRecommendedCalories({
    sex,
    age,
    weight,
    height,
    activity,
    goal: normalizedGoal,
  });

  const targets = getMacroTargets({
    calories: targetCalories,
    weight,
    goal: normalizedGoal,
  });

  const [bestPlan] = getClosestMealPlans({
    targetCalories: targets.calories,
    targetProtein: targets.protein,
    targetCarbs: targets.carbs,
    targetFats: targets.fats,
    goal: normalizedGoal,
    limit: 1,
    language,
  });

  return {
    targetCalories,
    targets,
    plan: bestPlan || null,
  };
}

export function getWeeklyMealPlan({
  goal = "maintenance",
  startIndex = 0,
  language = "en",
  mealsPerDay = 5,
} = {}) {
  const normalizedGoal = normalizeGoal(goal);

  return WEEK_DAYS.map((day, index) => {
    const routine = buildRoutine({
      goal: normalizedGoal,
      index: startIndex + index,
      language,
      mealsPerDay,
    });

    return {
      day,
      dayLabel: WEEK_DAY_LABELS[language]?.[day] || day,
      ...routine,
    };
  });
}

export function getPersonalizedWeeklyMealPlan({
  sex = "male",
  age = 25,
  weight = 80,
  height = 180,
  activity = "moderate",
  goal = "maintenance",
  language = "en",
  startIndex = 0,
} = {}) {
  const personalized = buildPersonalizedMealPlan({
    sex,
    age,
    weight,
    height,
    activity,
    goal,
    language,
  });

  const week = getWeeklyMealPlan({
    goal,
    startIndex,
    language,
  });

  return {
    ...personalized,
    week,
  };
}

export function getMealPlanShoppingList(plan, language = "en") {
  if (!plan) return [];

  const ingredientMap = {};

  Object.values(plan.meals || {}).forEach((meal) => {
    if (!meal?.raw?.ingredients) return;

    meal.raw.ingredients.forEach((ingredient) => {
      if (!ingredientMap[ingredient.foodId]) {
        ingredientMap[ingredient.foodId] = {
          foodId: ingredient.foodId,
          grams: 0,
          name: getFoodName(ingredient.foodId, language),
          macros: {
            calories: 0,
            protein: 0,
            carbs: 0,
            fats: 0,
          },
        };
      }

      ingredientMap[ingredient.foodId].grams += Number(ingredient.grams || 0);

      const macros = calculateIngredientMacros(
        ingredient.foodId,
        ingredient.grams
      );

      ingredientMap[ingredient.foodId].macros.calories += macros.calories;
      ingredientMap[ingredient.foodId].macros.protein += macros.protein;
      ingredientMap[ingredient.foodId].macros.carbs += macros.carbs;
      ingredientMap[ingredient.foodId].macros.fats += macros.fats;
    });
  });

  return Object.values(ingredientMap).map((item) => ({
    ...item,
    grams: Math.round(item.grams),
    label: `${Math.round(item.grams)}g ${item.name}`,
    macros: {
      calories: Math.round(item.macros.calories),
      protein: Math.round(item.macros.protein),
      carbs: Math.round(item.macros.carbs),
      fats: Math.round(item.macros.fats),
    },
  }));
}

export function getWeeklyShoppingList(week = [], language = "en") {
  const ingredientMap = {};

  week.forEach((plan) => {
    const list = getMealPlanShoppingList(plan, language);

    list.forEach((ingredient) => {
      if (!ingredientMap[ingredient.foodId]) {
        ingredientMap[ingredient.foodId] = {
          ...ingredient,
          grams: 0,
          macros: {
            calories: 0,
            protein: 0,
            carbs: 0,
            fats: 0,
          },
        };
      }

      ingredientMap[ingredient.foodId].grams += ingredient.grams;
      ingredientMap[ingredient.foodId].macros.calories +=
        ingredient.macros.calories;
      ingredientMap[ingredient.foodId].macros.protein +=
        ingredient.macros.protein;
      ingredientMap[ingredient.foodId].macros.carbs +=
        ingredient.macros.carbs;
      ingredientMap[ingredient.foodId].macros.fats +=
        ingredient.macros.fats;
    });
  });

  return Object.values(ingredientMap).map((item) => ({
    ...item,
    grams: Math.round(item.grams),
    label: `${Math.round(item.grams)}g ${item.name}`,
    macros: {
      calories: Math.round(item.macros.calories),
      protein: Math.round(item.macros.protein),
      carbs: Math.round(item.macros.carbs),
      fats: Math.round(item.macros.fats),
    },
  }));
}

export function getPlanDisplay(plan, language = "en") {
  if (!plan) return null;

  return {
    id: plan.id,
    goal: plan.goal,
    routineNumber: plan.routineNumber,
    label: plan.label?.[language] || plan.label?.en || plan.id,
    summary: plan.summary?.[language] || plan.summary?.en || "",
    totals: plan.totals,
    meals: Object.values(plan.meals || {}).filter(Boolean),
  };
}

export default ALL_MEAL_PLANS;
