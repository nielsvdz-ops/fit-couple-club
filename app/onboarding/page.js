// app/onboarding/page.js
"use client";

import { useMemo, useState, useEffect, useCallback } from "react";
import { createClient } from "../../lib/supabase/client";
import { useLanguage, createTranslationObject } from "../../lib/useLanguage";

// ============================================================================
// BASE DATA WITH TRANSLATIONS
// ============================================================================

const PROFILE_TYPES_BASE = [
  {
    value: "men",
    titleTranslations: createTranslationObject("Men", "Mannen"),
    image: "/images/profile-types/men.webp",
    textTranslations: createTranslationObject(
      "A personal physique plan for men.",
      "Een persoonlijk fysiek plan voor mannen."
    ),
  },
  {
    value: "female",
    titleTranslations: createTranslationObject("Female", "Vrouwen"),
    image: "/images/profile-types/female.webp",
    textTranslations: createTranslationObject(
      "A personal physique plan for women.",
      "Een persoonlijk fysiek plan voor vrouwen."
    ),
  },
  {
    value: "couple",
    titleTranslations: createTranslationObject("Couple", "Koppel"),
    image: "/images/profile-types/couple.webp",
    textTranslations: createTranslationObject(
      "A shared transformation system for two partners.",
      "Een gedeeld transformatiesysteem voor twee partners."
    ),
  },
];

const GOALS_BASE = [
  {
    value: "lose-fat",
    titleTranslations: createTranslationObject("Lose Fat", "Vet Verliezen"),
    textTranslations: createTranslationObject(
      "Lower body fat, better condition and a leaner look.",
      "Lagere lichaamsvet, betere conditie en een slankere uitstraling."
    ),
  },
  {
    value: "build-muscle",
    titleTranslations: createTranslationObject("Build Muscle", "Spieren Opbouwen"),
    textTranslations: createTranslationObject(
      "Gain muscle, strength and shape with progressive structure.",
      "Spieren, kracht en vorm opbouwen met progressieve structuur."
    ),
  },
  {
    value: "tone-shape",
    titleTranslations: createTranslationObject("Tone & Shape", "Vormgeven & Definiëren"),
    textTranslations: createTranslationObject(
      "Improve shape, waistline, posture and definition.",
      "Verbeter vorm, taille, houding en definitie."
    ),
  },
  {
    value: "athletic-performance",
    titleTranslations: createTranslationObject("Athletic Performance", "Atletische Prestaties"),
    textTranslations: createTranslationObject(
      "Build fitness, strength, stamina and athletic habits.",
      "Bouw fitness, kracht, uithoudingsvermogen en atletische gewoonten op."
    ),
  },
];

const BODY_TYPES_BASE = [
  {
    value: "slim",
    titleTranslations: createTranslationObject("Slim", "Slank"),
    image: "/images/body-types/slim.webp",
    textTranslations: createTranslationObject(
      "Naturally lighter. Usually needs muscle, shape and healthy structure.",
      "Natuurlijk lichter. Heeft meestal spiermassa, vorm en gezonde structuur nodig."
    ),
    bmiOffset: -1.2,
    timelineMultiplier: 1.05,
  },
  {
    value: "athletic",
    titleTranslations: createTranslationObject("Athletic", "Atletisch"),
    image: "/images/body-types/athletic.webp",
    textTranslations: createTranslationObject(
      "Sporty or muscular. BMI can look higher because muscle weighs more.",
      "Sportief of gespierd. BMI kan hoger lijken omdat spieren meer wegen."
    ),
    bmiOffset: -2.2,
    timelineMultiplier: 0.9,
  },
  {
    value: "average",
    titleTranslations: createTranslationObject("Average", "Gemiddeld"),
    image: "/images/body-types/average.webp",
    textTranslations: createTranslationObject(
      "Normal starting point. Good for fat loss, tone or muscle goals.",
      "Normaal startpunt. Goed voor vetverlies, vorm of spierdoelen."
    ),
    bmiOffset: 0,
    timelineMultiplier: 1,
  },
  {
    value: "heavy-set",
    titleTranslations: createTranslationObject("Heavy Set", "Zwaar Gebouwd"),
    image: "/images/body-types/heavy-set.webp",
    textTranslations: createTranslationObject(
      "Higher body fat/bodyweight. Plan starts safer and more gradual.",
      "Hoger lichaamsvet/lichaamsgewicht. Plan start veiliger en geleidelijker."
    ),
    bmiOffset: 1.5,
    timelineMultiplier: 1.15,
  },
];

const DIETS_BASE = [
  { value: "balanced", titleTranslations: createTranslationObject("Balanced", "Gebalanceerd") },
  { value: "high-protein", titleTranslations: createTranslationObject("High Protein", "Hoog Eiwit") },
  { value: "vegan", titleTranslations: createTranslationObject("Vegan", "Veganistisch") },
  { value: "vegetarian", titleTranslations: createTranslationObject("Vegetarian", "Vegetarisch") },
];

const ALLERGIES_BASE = [
  { value: "gluten_free", titleTranslations: createTranslationObject("Gluten Free", "Glutenvrij") },
  { value: "lactose_free", titleTranslations: createTranslationObject("Lactose Free", "Lactosevrij") },
  { value: "nut_free", titleTranslations: createTranslationObject("Nut Free", "Notenvrij") },
  { value: "shellfish_free", titleTranslations: createTranslationObject("Shellfish Free", "Schaladierenvrij") },
];

const WORKOUT_TYPES_BASE = [
  { value: "training-food", titleTranslations: createTranslationObject("Training + Food", "Training + Voeding") },
  { value: "food-only", titleTranslations: createTranslationObject("Food Only", "Alleen Voeding") },
  { value: "training-only", titleTranslations: createTranslationObject("Training Only", "Alleen Training") },
];

const TRAINING_LOCATIONS_BASE = [
  { value: "Gym", titleTranslations: createTranslationObject("Gym", "Sportschool") },
  { value: "Home", titleTranslations: createTranslationObject("Home", "Thuis") },
  { value: "Hybrid", titleTranslations: createTranslationObject("Hybrid", "Hybride") },
];

const EXPERIENCE_LEVELS_BASE = [
  { value: "Beginner", titleTranslations: createTranslationObject("Beginner", "Beginner") },
  { value: "Intermediate", titleTranslations: createTranslationObject("Intermediate", "Gevorderd") },
  { value: "Advanced", titleTranslations: createTranslationObject("Advanced", "Expert") },
];

const FASTING_WINDOWS = ["12:12", "14:10", "16:8", "18:6", "20:4"];

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

function numberValue(value) {
  const number = Number(String(value || "").replace(",", "."));
  return Number.isFinite(number) ? number : 0;
}

function round1(value) {
  return Math.round(Number(value || 0) * 10) / 10;
}

function calculateBmi(weightKg, heightCm) {
  const weight = numberValue(weightKg);
  const height = numberValue(heightCm) / 100;
  if (!weight || !height) return null;
  return round1(weight / (height * height));
}

function getAdjustedBmi(rawBmi, bodyType) {
  if (!rawBmi) return null;
  const type = BODY_TYPES_BASE.find((item) => item.value === bodyType);
  return round1(rawBmi + (type?.bmiOffset || 0));
}

function getWorkoutMultiplier(workoutType) {
  if (workoutType === "food-only") return 1.35;
  if (workoutType === "training-only") return 1.25;
  return 1;
}

function getBodyMultiplier(bodyType) {
  return BODY_TYPES_BASE.find((item) => item.value === bodyType)?.timelineMultiplier || 1;
}

// ============================================================================
// FIXED: CORRECT TIMELINE CALCULATION
// Higher experience = FASTER progress (lower multiplier, higher weekly rate)
// ============================================================================

// Experience timeline multiplier (applied at the end)
// Lower number = FASTER completion
function getExperienceMultiplier(experience) {
  if (experience === "Advanced") return 0.85;      // EXPERT: 15% FASTER
  if (experience === "Intermediate") return 1.0;   // INTERMEDIATE: NORMAL
  return 1.25;                                      // BEGINNER: 25% SLOWER
}

// Weekly progress rates (kg per week)
// Higher number = FASTER progress
const WEEKLY_RATES = {
  // FAT LOSS: Higher number = lose fat faster
  loseFat: {
    Beginner: 0.4,        // 0.4 kg per week (slowest)
    Intermediate: 0.55,   // 0.55 kg per week
    Advanced: 0.7,        // 0.7 kg per week (fastest)
  },
  // MUSCLE GAIN: Higher number = gain muscle faster
  buildMuscle: {
    Beginner: 0.12,       // 0.12 kg per week (slowest)
    Intermediate: 0.22,   // 0.22 kg per week
    Advanced: 0.35,       // 0.35 kg per week (fastest)
  },
  // TONE & SHAPE: Multiplier based on experience
  toneShape: {
    Beginner: 1.35,
    Intermediate: 1.0,
    Advanced: 0.8,
  },
  // ATHLETIC PERFORMANCE: Multiplier based on experience
  athleticPerformance: {
    Beginner: 1.3,
    Intermediate: 1.0,
    Advanced: 0.8,
  },
};

function estimateTransformationWeeks({
  goal,
  weight,
  targetWeight,
  bodyType,
  experience,
  workoutType,
}) {
  if (!goal) return null;

  const current = numberValue(weight);
  const target = numberValue(targetWeight);

  if (!current || !target) return null;

  const kgChange = Math.abs(target - current);
  const isHigherTarget = target > current;
  const isLowerTarget = target < current;

  let weeks = 10;

  if (goal === "lose-fat") {
    // Use experience-based weekly loss rate
    const rate = WEEKLY_RATES.loseFat[experience] || WEEKLY_RATES.loseFat.Intermediate;
    if (isLowerTarget) {
      weeks = kgChange / rate;
    } else {
      // Gaining weight while trying to lose fat - slower
      weeks = kgChange / 0.25 + 8;
    }
  } 
  else if (goal === "build-muscle") {
    // Use experience-based weekly gain rate
    const rate = WEEKLY_RATES.buildMuscle[experience] || WEEKLY_RATES.buildMuscle.Intermediate;
    if (isHigherTarget) {
      weeks = kgChange / rate;
    } else {
      // Losing weight while trying to gain muscle - body recomposition
      weeks = kgChange / 0.35 + 8;
    }
  } 
  else if (goal === "tone-shape") {
    // Body recomposition - experience affects speed
    const multiplier = WEEKLY_RATES.toneShape[experience] || WEEKLY_RATES.toneShape.Intermediate;
    const baseWeeks = kgChange <= 3 ? 10 : kgChange / 0.35 + 6;
    weeks = baseWeeks * multiplier;
  } 
  else if (goal === "athletic-performance") {
    // Performance goals - experience affects speed
    const multiplier = WEEKLY_RATES.athleticPerformance[experience] || WEEKLY_RATES.athleticPerformance.Intermediate;
    const baseWeeks = kgChange <= 5 ? 12 : kgChange / 0.45 + 8;
    weeks = baseWeeks * multiplier;
  }

  // Apply body type and workout multipliers
  const total = weeks * getBodyMultiplier(bodyType) * getWorkoutMultiplier(workoutType) * getExperienceMultiplier(experience);
  
  return Math.max(4, Math.min(78, Math.ceil(total)));
}

function getGoalPhase(goal, weekNumber, totalWeeks, t) {
  if (!goal) return t(createTranslationObject("Foundation", "Basis"));

  const progress = totalWeeks ? weekNumber / totalWeeks : 0;

  if (progress < 0.25) return t(createTranslationObject("Foundation", "Basis"));
  if (progress < 0.65) {
    if (goal === "athletic-performance") {
      return t(createTranslationObject("Performance Build", "Prestatie Opbouw"));
    }
    return t(createTranslationObject("Progress Build", "Voortgang Opbouw"));
  }
  if (progress < 0.9) return t(createTranslationObject("Push Phase", "Push Fase"));
  return t(createTranslationObject("Final Shape", "Eindvorm"));
}

function addDays(date, days) {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

function formatDate(date) {
  return date.toISOString().slice(0, 10);
}

// ============================================================================
// TRANSLATED UI HELPER FUNCTIONS
// ============================================================================

function getTranslatedBmiLabel(rawBmi, bodyType, t) {
  const adjusted = getAdjustedBmi(rawBmi, bodyType);
  const value = adjusted || rawBmi;

  if (!value) {
    return t(createTranslationObject("Complete weight and height", "Vul gewicht en lengte in"));
  }

  if (bodyType === "athletic") {
    if (value < 20) return t(createTranslationObject("Lean athletic range", "Spierslank bereik"));
    if (value < 26) return t(createTranslationObject("Athletic / muscular range", "Atletisch / gespierd bereik"));
    if (value < 29) return t(createTranslationObject("High muscle or body mass", "Hoge spiermassa of lichaamsmassa"));
    return t(createTranslationObject("Very high body mass", "Zeer hoge lichaamsmassa"));
  }

  if (bodyType === "slim") {
    if (value < 18.5) return t(createTranslationObject("Very slim range", "Zeer slank bereik"));
    if (value < 24) return t(createTranslationObject("Slim healthy range", "Slank gezond bereik"));
    return t(createTranslationObject("This may not match Slim well", "Dit past mogelijk niet goed bij Slank"));
  }

  if (bodyType === "heavy-set") {
    if (value < 23) return t(createTranslationObject("This may not match Heavy Set well", "Dit past mogelijk niet goed bij Zwaar Gebouwd"));
    if (value < 30) return t(createTranslationObject("Higher bodyweight range", "Hoger lichaamsgewicht bereik"));
    return t(createTranslationObject("High bodyweight range", "Hoog lichaamsgewicht bereik"));
  }

  if (value < 18.5) return t(createTranslationObject("Lean / underweight range", "Slank / ondergewicht bereik"));
  if (value < 25) return t(createTranslationObject("Healthy range", "Gezond bereik"));
  if (value < 30) return t(createTranslationObject("Overweight range", "Overgewicht bereik"));
  return t(createTranslationObject("High bodyweight range", "Hoog lichaamsgewicht bereik"));
}

function getTranslatedBodyTypeWarning(bodyType, rawBmi, t) {
  if (!bodyType || !rawBmi) return "";

  if (bodyType === "slim" && rawBmi >= 27) {
    return t(createTranslationObject(
      "Slim usually does not match this BMI. Check weight/height or choose Average/Athletic.",
      "Slank past meestal niet bij deze BMI. Controleer gewicht/lengte of kies Gemiddeld/Atletisch."
    ));
  }

  if (bodyType === "athletic" && rawBmi >= 32) {
    return t(createTranslationObject(
      "Athletic can have a higher BMI, but this is very high. Check stats or choose another body type.",
      "Atletisch kan een hogere BMI hebben, maar dit is erg hoog. Controleer statistieken of kies een ander lichaamstype."
    ));
  }

  if (bodyType === "heavy-set" && rawBmi < 23) {
    return t(createTranslationObject(
      "Heavy Set usually does not match this BMI. Check stats or choose another body type.",
      "Zwaar Gebouwd past meestal niet bij deze BMI. Controleer statistieken of kies een ander lichaamstype."
    ));
  }

  return "";
}

function getTranslatedGoalConflictMessage({ goal, weight, targetWeight }, t) {
  if (!goal) return "";

  const current = numberValue(weight);
  const target = numberValue(targetWeight);

  if (!current || !target) return "";

  const difference = round1(Math.abs(target - current));

  if (goal === "lose-fat" && target >= current) {
    return t(createTranslationObject(
      `Your target is ${difference} kg higher than your current weight. That does not usually match Lose Fat. Keep this target if you want, but Build Muscle, Tone & Shape or Athletic Performance fits it better.`,
      `Je streefgewicht is ${difference} kg hoger dan je huidige gewicht. Dat past meestal niet bij Vet Verliezen. Houd dit doel als je wilt, maar Spieren Opbouwen, Vormgeven & Definiëren of Atletische Prestaties past er beter bij.`
    ));
  }

  if (goal === "build-muscle" && target <= current) {
    return t(createTranslationObject(
      `Your target is ${difference} kg lower than your current weight. That does not usually match Build Muscle. Keep this target if you want, but Lose Fat or Tone & Shape fits it better.`,
      `Je streefgewicht is ${difference} kg lager dan je huidige gewicht. Dat past meestal niet bij Spieren Opbouwen. Houd dit doel als je wilt, maar Vet Verliezen of Vormgeven & Definiëren past er beter bij.`
    ));
  }

  if (goal === "tone-shape" && difference > 12) {
    return t(createTranslationObject(
      "Tone & Shape is normally a recomposition goal. Your target change is large, so the roadmap becomes longer and more gradual.",
      "Vormgeven & Definiëren is normaal een recompositiedoel. Je streefverandering is groot, dus de routekaart wordt langer en geleidelijker."
    ));
  }

  if (goal === "athletic-performance" && difference > 10) {
    return t(createTranslationObject(
      "Athletic Performance is mostly about strength, cardio and habits. Because your target change is large, the roadmap will combine performance with body composition.",
      "Atletische Prestaties gaan meestal over kracht, cardio en gewoonten. Omdat je streefverandering groot is, combineert de routekaart prestaties met lichaamssamenstelling."
    ));
  }

  return "";
}

function getTranslatedEstimatedText(weeks, goal, t) {
  if (!goal) {
    return t(createTranslationObject("Select your goal to calculate timeline", "Selecteer je doel om tijdlijn te berekenen"));
  }
  if (!weeks) {
    return t(createTranslationObject("Complete your stats to calculate timeline", "Vul je statistieken in om tijdlijn te berekenen"));
  }
  
  const weeksText = t(createTranslationObject("weeks", "weken"));
  const aboutText = t(createTranslationObject("about", "ongeveer"));
  const monthsText = t(createTranslationObject("months", "maanden"));
  
  return `${weeks} ${weeksText} / ${aboutText} ${Math.ceil(weeks / 4)} ${monthsText}`;
}

function getTranslatedWorkoutForDay({ dayIndex, goal, workoutType, trainingLocation, experience, t }) {
  if (workoutType === "food-only") {
    return t(createTranslationObject("No workout — nutrition focus day", "Geen training — voedingsfocus dag"));
  }

  const level = experience || "Beginner";
  let location = trainingLocation || "Hybrid";
  
  let locationTranslated = location;
  if (location === "Gym") locationTranslated = t(createTranslationObject("Gym", "Sportschool"));
  else if (location === "Home") locationTranslated = t(createTranslationObject("Home", "Thuis"));
  else if (location === "Hybrid") locationTranslated = t(createTranslationObject("Hybrid", "Hybride"));

  if (dayIndex % 7 === 2 || dayIndex % 7 === 6) {
    return t(createTranslationObject("Recovery, mobility and steps", "Herstel, mobiliteit en stappen"));
  }

  const levelTranslated = t(level === "Beginner" ? createTranslationObject("Beginner", "Beginner") :
                            level === "Intermediate" ? createTranslationObject("Intermediate", "Gevorderd") :
                            createTranslationObject("Advanced", "Expert"));

  if (goal === "build-muscle") {
    return t(createTranslationObject(
      `${locationTranslated} hypertrophy workout (${levelTranslated})`,
      `${locationTranslated} hypertrofie training (${levelTranslated})`
    ));
  }

  if (goal === "athletic-performance") {
    return t(createTranslationObject(
      `${locationTranslated} strength + conditioning (${levelTranslated})`,
      `${locationTranslated} kracht + conditionering (${levelTranslated})`
    ));
  }

  if (goal === "tone-shape") {
    return t(createTranslationObject(
      `${locationTranslated} full body tone + core (${levelTranslated})`,
      `${locationTranslated} full body vorm + core (${levelTranslated})`
    ));
  }

  return t(createTranslationObject(
    `${locationTranslated} fat loss strength circuit (${levelTranslated})`,
    `${locationTranslated} vetverlies krachtcircuit (${levelTranslated})`
  ));
}

function getTranslatedCardioForDay({ dayIndex, goal, bodyType, workoutType, t }) {
  if (workoutType === "training-only") {
    return t(createTranslationObject("Nutrition not included — train and track steps", "Voeding niet inbegrepen — train en volg stappen"));
  }
  if (workoutType === "food-only") {
    return t(createTranslationObject("8,000–12,000 steps", "8.000–12.000 stappen"));
  }

  if (goal === "lose-fat") {
    if (bodyType === "heavy-set") {
      return t(createTranslationObject("30–45 min incline walk or zone 2 cardio", "30–45 min hellingwandeling of zone 2 cardio"));
    }
    return t(createTranslationObject("20–35 min zone 2 cardio + 10,000 steps", "20–35 min zone 2 cardio + 10.000 stappen"));
  }

  if (goal === "build-muscle") {
    if (dayIndex % 2 === 0) {
      return t(createTranslationObject("6,000–9,000 steps", "6.000–9.000 stappen"));
    }
    return t(createTranslationObject("Optional light recovery cardio", "Optionele lichte herstel cardio"));
  }

  if (goal === "athletic-performance") {
    if (dayIndex % 3 === 0) {
      return t(createTranslationObject("Intervals or conditioning", "Intervallen of conditionering"));
    }
    return t(createTranslationObject("10,000–14,000 steps", "10.000–14.000 stappen"));
  }

  return t(createTranslationObject("8,000–12,000 steps", "8.000–12.000 stappen"));
}

function getTranslatedNutritionForDay({ goal, dietType, workoutType, t }) {
  if (workoutType === "training-only") {
    return t(createTranslationObject("Training only selected — nutrition plan not included", "Alleen training geselecteerd — voedingsplan niet inbegrepen"));
  }

  let diet = "";
  if (dietType === "balanced") diet = t(createTranslationObject("Balanced", "Gebalanceerd"));
  else if (dietType === "high-protein") diet = t(createTranslationObject("High Protein", "Hoog Eiwit"));
  else if (dietType === "vegan") diet = t(createTranslationObject("Vegan", "Veganistisch"));
  else diet = t(createTranslationObject("Vegetarian", "Vegetarisch"));

  if (goal === "lose-fat") {
    return t(createTranslationObject(`${diet} meal plan in a controlled calorie deficit`, `${diet} maaltijdplan in een gecontroleerd calorietekort`));
  }
  if (goal === "build-muscle") {
    return t(createTranslationObject(`${diet} high protein meal plan with calorie surplus`, `${diet} hoog eiwit maaltijdplan met calorieoverschot`));
  }
  if (goal === "athletic-performance") {
    return t(createTranslationObject(`${diet} performance fuel with carbs around training`, `${diet} prestatiebrandstof met koolhydraten rond training`));
  }

  return t(createTranslationObject(`${diet} recomposition meal plan with high protein`, `${diet} recompositie maaltijdplan met hoog eiwit`));
}

function getTranslatedFastingText(fastingEnabled, fastingWindow, t) {
  if (!fastingEnabled) {
    return t(createTranslationObject("No fasting", "Geen vasten"));
  }
  return t(createTranslationObject(`Fasting window ${fastingWindow || "16:8"}`, `Vastenvenster ${fastingWindow || "16:8"}`));
}

function getTranslatedAccountabilityText(partner, t) {
  if (partner?.name) {
    return t(createTranslationObject(`Couple check-in with ${partner.name || "partner"}`, `Koppel check-in met ${partner.name || "partner"}`));
  }
  return t(createTranslationObject("Daily check-in: training, steps, nutrition and mood", "Dagelijkse check-in: training, stappen, voeding en stemming"));
}

// ============================================================================
// DATA BUILDERS
// ============================================================================

function buildCalendarPlan({
  goal,
  workoutType,
  trainingLocation,
  fastingEnabled,
  fastingWindow,
  estimatedWeeks,
  dietType,
  bodyType,
  experience,
  partner,
  t,
}) {
  const weeks = Math.max(1, numberValue(estimatedWeeks) || 4);
  const days = Math.min(weeks * 7, 365);
  const start = new Date();

  return Array.from({ length: days }, (_, index) => {
    const date = addDays(start, index);
    const weekNumber = Math.floor(index / 7) + 1;

    return {
      date: formatDate(date),
      day: index % 7,
      week: weekNumber,
      phase: getGoalPhase(goal, weekNumber, weeks, t),
      workout: getTranslatedWorkoutForDay({
        dayIndex: index,
        goal,
        workoutType,
        trainingLocation,
        experience,
        t,
      }),
      cardio: getTranslatedCardioForDay({
        dayIndex: index,
        goal,
        bodyType,
        workoutType,
        t,
      }),
      nutrition: getTranslatedNutritionForDay({
        goal,
        dietType,
        workoutType,
        t,
      }),
      fasting: getTranslatedFastingText(fastingEnabled, fastingWindow, t),
      accountability: getTranslatedAccountabilityText(partner, t),
    };
  });
}

function buildGroceryList({ goal, dietType, allergies, profileType, partnerGoal }) {
  const allergyValues = allergies || [];
  const isVegan = dietType === "vegan";
  const isVegetarian = dietType === "vegetarian" || isVegan;

  let proteins = isVegan
    ? ["tofu", "tempeh", "lentils", "vegan protein"]
    : isVegetarian
    ? ["eggs", "Greek yogurt", "cottage cheese", "tofu"]
    : ["chicken breast", "eggs", "Greek yogurt", "lean beef", "salmon"];

  if (allergyValues.includes("lactose_free")) {
    proteins = proteins.filter((item) => !["Greek yogurt", "cottage cheese"].includes(item));
    proteins.push("lactose-free protein option");
  }

  if (allergyValues.includes("shellfish_free")) {
    proteins = proteins.filter((item) => item !== "shrimp");
  }

  const carbs = goal === "build-muscle" || partnerGoal === "build-muscle"
    ? ["rice", "oats", "potatoes", "pasta", "bananas"]
    : ["rice", "oats", "sweet potato", "berries", "vegetables"];

  const fats = allergyValues.includes("nut_free")
    ? ["olive oil", "avocado", "seeds"]
    : ["olive oil", "avocado", "almonds", "peanut butter"];

  const base = [...proteins, ...carbs, ...fats, "broccoli", "spinach", "cucumber", "tomatoes"];

  if (profileType === "couple") {
    base.push("extra shared meal prep containers", "couple snack options");
  }

  return Array.from(new Set(base));
}

function buildRoadmap({ goal, estimatedWeeks, bodyType, t }) {
  const weeks = numberValue(estimatedWeeks) || 8;

  return [
    {
      title: t(createTranslationObject("Foundation", "Basis")),
      weeks: t(createTranslationObject(`Week 1–${Math.max(2, Math.ceil(weeks * 0.25))}`, `Week 1–${Math.max(2, Math.ceil(weeks * 0.25))}`)),
      text: t(createTranslationObject(
        "Build routine, steps, food structure and baseline training form.",
        "Bouw routine, stappen, voedselstructuur en basis trainingsvorm op."
      )),
    },
    {
      title: t(createTranslationObject("Progress Build", "Voortgang Opbouw")),
      weeks: t(createTranslationObject(
        `Week ${Math.max(3, Math.ceil(weeks * 0.25))}–${Math.ceil(weeks * 0.65)}`,
        `Week ${Math.max(3, Math.ceil(weeks * 0.25))}–${Math.ceil(weeks * 0.65)}`
      )),
      text: goal === "build-muscle"
        ? t(createTranslationObject("Increase volume, protein consistency and recovery.", "Verhoog volume, eiwitconsistentie en herstel."))
        : t(createTranslationObject("Increase consistency, calorie control and visible progress habits.", "Verhoog consistentie, caloriecontrole en zichtbare voortgangsgewoonten.")),
    },
    {
      title: t(createTranslationObject("Push Phase", "Push Fase")),
      weeks: t(createTranslationObject(`Week ${Math.ceil(weeks * 0.65)}–${weeks}`, `Week ${Math.ceil(weeks * 0.65)}–${weeks}`)),
      text: bodyType === "heavy-set"
        ? t(createTranslationObject("Keep intensity safe while improving conditioning and weekly adherence.", "Houd intensiteit veilig terwijl je conditionering en wekelijkse naleving verbetert."))
        : t(createTranslationObject("Push performance, shape and consistency toward the target.", "Stuw prestaties, vorm en consistentie naar het doel.")),
    },
  ];
}

function buildAccountabilitySystem(profileType, t) {
  return {
    mode: profileType === "couple" ? "couple" : "solo",
    checkins: ["weight", "steps", "training", "nutrition", "mood"],
    scoring: profileType === "couple"
      ? t(createTranslationObject("Combined weekly couple score plus individual score", "Gecombineerde wekelijkse koppelscore plus individuele score"))
      : t(createTranslationObject("Individual weekly score", "Individuele wekelijkse score")),
    streaks: profileType === "couple"
      ? t(createTranslationObject("Shared streak when both partners complete check-ins", "Gedeelde streak wanneer beide partners check-ins voltooien"))
      : t(createTranslationObject("Solo streak for completed check-ins", "Solo streak voor voltooide check-ins")),
  };
}

// ============================================================================
// MAIN COMPONENT
// ============================================================================

export default function OnboardingPage() {
  const supabase = createClient();
  const { t, hydrated } = useLanguage();

  const [loading, setLoading] = useState(false);

  // User state
  const [profileType, setProfileType] = useState("");
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [targetWeight, setTargetWeight] = useState("");
  const [goal, setGoal] = useState("");
  const [workoutType, setWorkoutType] = useState("training-food");
  const [dietType, setDietType] = useState("balanced");
  const [allergies, setAllergies] = useState([]);
  const [fastingEnabled, setFastingEnabled] = useState(false);
  const [fastingWindow, setFastingWindow] = useState("16:8");
  const [trainingLocation, setTrainingLocation] = useState("");
  const [experienceLevel, setExperienceLevel] = useState("");
  const [bodyType, setBodyType] = useState("");

  // Partner state
  const [partnerName, setPartnerName] = useState("");
  const [partnerAge, setPartnerAge] = useState("");
  const [partnerWeight, setPartnerWeight] = useState("");
  const [partnerHeight, setPartnerHeight] = useState("");
  const [partnerTargetWeight, setPartnerTargetWeight] = useState("");
  const [partnerGoal, setPartnerGoal] = useState("");
  const [partnerBodyType, setPartnerBodyType] = useState("");
  const [partnerExperience, setPartnerExperience] = useState("");

  // Get translated arrays
  const PROFILE_TYPES = useMemo(() => 
    PROFILE_TYPES_BASE.map(item => ({
      ...item,
      title: t(item.titleTranslations),
      text: t(item.textTranslations)
    })), [t]);

  const GOALS = useMemo(() => 
    GOALS_BASE.map(item => ({
      ...item,
      title: t(item.titleTranslations),
      text: t(item.textTranslations)
    })), [t]);

  const BODY_TYPES = useMemo(() => 
    BODY_TYPES_BASE.map(item => ({
      ...item,
      title: t(item.titleTranslations),
      text: t(item.textTranslations)
    })), [t]);

  const DIETS = useMemo(() => 
    DIETS_BASE.map(item => ({
      ...item,
      title: t(item.titleTranslations)
    })), [t]);

  const ALLERGIES = useMemo(() => 
    ALLERGIES_BASE.map(item => ({
      ...item,
      title: t(item.titleTranslations)
    })), [t]);

  const WORKOUT_TYPES = useMemo(() => 
    WORKOUT_TYPES_BASE.map(item => ({
      ...item,
      title: t(item.titleTranslations)
    })), [t]);

  const TRAINING_LOCATIONS = useMemo(() => 
    TRAINING_LOCATIONS_BASE.map(item => ({
      value: item.value,
      title: t(item.titleTranslations)
    })), [t]);

  const EXPERIENCE_LEVELS = useMemo(() => 
    EXPERIENCE_LEVELS_BASE.map(item => ({
      value: item.value,
      title: t(item.titleTranslations)
    })), [t]);

  // Computed values
  const isCoupleMode = profileType === "couple";
  const gender = profileType === "men" ? "Male" : profileType === "female" ? "Female" : null;
  const mode = isCoupleMode ? "Couple Mode" : "Solo";

  const bmi = useMemo(() => calculateBmi(weight, height), [weight, height]);
  const adjustedBmi = useMemo(() => getAdjustedBmi(bmi, bodyType), [bmi, bodyType]);

  const partnerBmi = useMemo(() => calculateBmi(partnerWeight, partnerHeight), [partnerWeight, partnerHeight]);
  const partnerAdjustedBmi = useMemo(() => getAdjustedBmi(partnerBmi, partnerBodyType), [partnerBmi, partnerBodyType]);

  const goalConflictMessage = useMemo(() => getTranslatedGoalConflictMessage({ goal, weight, targetWeight }, t), [goal, weight, targetWeight, t]);
  const partnerGoalConflictMessage = useMemo(() => getTranslatedGoalConflictMessage({ goal: partnerGoal, weight: partnerWeight, targetWeight: partnerTargetWeight }, t), [partnerGoal, partnerWeight, partnerTargetWeight, t]);

  const estimatedWeeks = useMemo(() => estimateTransformationWeeks({ goal, weight, targetWeight, bodyType, experience: experienceLevel, workoutType }), [goal, weight, targetWeight, bodyType, experienceLevel, workoutType]);
  const partnerEstimatedWeeks = useMemo(() => estimateTransformationWeeks({ goal: partnerGoal, weight: partnerWeight, targetWeight: partnerTargetWeight, bodyType: partnerBodyType, experience: partnerExperience, workoutType }), [partnerGoal, partnerWeight, partnerTargetWeight, partnerBodyType, partnerExperience, workoutType]);

  const combinedEstimatedWeeks = useMemo(() => {
    if (!isCoupleMode) return estimatedWeeks;
    return Math.max(numberValue(estimatedWeeks), numberValue(partnerEstimatedWeeks)) || null;
  }, [isCoupleMode, estimatedWeeks, partnerEstimatedWeeks]);

  const groceryList = useMemo(() => buildGroceryList({ goal, dietType, allergies, profileType, partnerGoal }), [goal, dietType, allergies, profileType, partnerGoal]);

  const fullCalendarPlan = useMemo(() => buildCalendarPlan({
    goal,
    workoutType,
    trainingLocation,
    fastingEnabled,
    fastingWindow,
    estimatedWeeks: combinedEstimatedWeeks,
    dietType,
    bodyType,
    experience: experienceLevel,
    partner: isCoupleMode ? { name: partnerName, goal: partnerGoal } : null,
    t,
  }), [goal, workoutType, trainingLocation, fastingEnabled, fastingWindow, combinedEstimatedWeeks, dietType, bodyType, experienceLevel, isCoupleMode, partnerName, partnerGoal, t]);

  const roadmap = useMemo(() => buildRoadmap({ goal, estimatedWeeks: combinedEstimatedWeeks, bodyType, t }), [goal, combinedEstimatedWeeks, bodyType, t]);

  const accountabilitySystem = useMemo(() => buildAccountabilitySystem(profileType, t), [profileType, t]);

  const translatedBodyTypeWarning = useMemo(() => getTranslatedBodyTypeWarning(bodyType, bmi, t), [bodyType, bmi, t]);
  const translatedPartnerBodyTypeWarning = useMemo(() => getTranslatedBodyTypeWarning(partnerBodyType, partnerBmi, t), [partnerBodyType, partnerBmi, t]);

  // CSS injection
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @media (max-width: 768px) {
        .locked-feature-grid { grid-template-columns: repeat(2, 1fr) !important; }
        .body-type-grid { grid-template-columns: 1fr !important; }
        .profile-grid { grid-template-columns: 1fr !important; }
        .choice-grid { grid-template-columns: 1fr !important; }
        .result-grid { grid-template-columns: 1fr !important; }
      }
      @media (max-width: 480px) {
        .locked-feature-grid { grid-template-columns: 1fr !important; }
      }
      * { max-width: 100%; word-break: break-word; box-sizing: border-box; }
      button { white-space: normal !important; word-wrap: break-word !important; }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  // Helper functions
  const toggleAllergy = useCallback((value) => {
    setAllergies((prev) => prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]);
  }, []);

  const validateBeforeSave = useCallback(() => {
    if (!profileType) return t(createTranslationObject("Choose Men, Female or Couple.", "Kies Mannen, Vrouwen of Koppel."));
    if (!age || !weight || !height || !targetWeight) {
      return t(createTranslationObject("Fill in your age, weight, height and target weight.", "Vul je leeftijd, gewicht, lengte en streefgewicht in."));
    }
    if (!bodyType) return t(createTranslationObject("Choose your current body type.", "Kies je huidige lichaamstype."));
    if (!goal) return t(createTranslationObject("Choose your goal.", "Kies je doel."));
    
    if (workoutType !== "food-only") {
      if (!trainingLocation) return t(createTranslationObject("Choose your training location.", "Kies je trainingslocatie."));
      if (!experienceLevel) return t(createTranslationObject("Choose your training experience.", "Kies je trainingservaring."));
    }

    if (isCoupleMode) {
      if (!partnerName) return t(createTranslationObject("Fill in partner name.", "Vul de naam van je partner in."));
      if (!partnerAge || !partnerWeight || !partnerHeight || !partnerTargetWeight) {
        return t(createTranslationObject("Fill in partner age, weight, height and target weight.", "Vul de leeftijd, gewicht, lengte en streefgewicht van je partner in."));
      }
      if (!partnerBodyType) return t(createTranslationObject("Choose partner current body type.", "Kies het huidige lichaamstype van je partner."));
      if (!partnerGoal) return t(createTranslationObject("Choose partner goal.", "Kies het doel van je partner."));
      if (workoutType !== "food-only" && !partnerExperience) {
        return t(createTranslationObject("Choose partner training experience.", "Kies de trainingservaring van je partner."));
      }
    }

    return "";
  }, [profileType, age, weight, height, targetWeight, bodyType, goal, workoutType, trainingLocation, experienceLevel, isCoupleMode, partnerName, partnerAge, partnerWeight, partnerHeight, partnerTargetWeight, partnerBodyType, partnerGoal, partnerExperience, t]);

  const buildOnboardingPayload = useCallback((userId = null) => {
    return {
      ...(userId ? { user_id: userId } : {}),
      profile_type: profileType,
      gender,
      mode,
      age: age ? Number(age) : null,
      weight_kg: weight ? Number(weight) : null,
      height_cm: height ? Number(height) : null,
      target_weight_kg: targetWeight ? Number(targetWeight) : null,
      bmi: bmi ? Number(bmi) : null,
      adjusted_bmi: adjustedBmi ? Number(adjustedBmi) : null,
      bmi_label: getTranslatedBmiLabel(bmi, bodyType, t),
      goal,
      workout_type: workoutType,
      diet_type: dietType,
      allergies,
      fasting_enabled: fastingEnabled,
      fasting_window: fastingEnabled ? fastingWindow : null,
      training_location: trainingLocation,
      experience_level: experienceLevel,
      body_type: bodyType,
      vegan: dietType === "vegan",
      vegetarian: dietType === "vegetarian" || dietType === "vegan",
      gluten_free: allergies.includes("gluten_free"),
      lactose_free: allergies.includes("lactose_free"),
      nut_free: allergies.includes("nut_free"),
      shellfish_free: allergies.includes("shellfish_free"),
      estimated_weeks: estimatedWeeks,
      combined_estimated_weeks: combinedEstimatedWeeks,
      partner_profile: isCoupleMode ? {
        name: partnerName,
        age: partnerAge ? Number(partnerAge) : null,
        weight_kg: partnerWeight ? Number(partnerWeight) : null,
        height_cm: partnerHeight ? Number(partnerHeight) : null,
        target_weight_kg: partnerTargetWeight ? Number(partnerTargetWeight) : null,
        bmi: partnerBmi ? Number(partnerBmi) : null,
        adjusted_bmi: partnerAdjustedBmi ? Number(partnerAdjustedBmi) : null,
        bmi_label: getTranslatedBmiLabel(partnerBmi, partnerBodyType, t),
        goal: partnerGoal,
        body_type: partnerBodyType,
        experience_level: partnerExperience,
        estimated_weeks: partnerEstimatedWeeks,
      } : null,
      grocery_list: groceryList,
      calendar_plan: fullCalendarPlan,
      transformation_roadmap: roadmap,
      accountability_system: accountabilitySystem,
    };
  }, [profileType, gender, mode, age, weight, height, targetWeight, bmi, adjustedBmi, bodyType, t, goal, workoutType, dietType, allergies, fastingEnabled, fastingWindow, trainingLocation, experienceLevel, estimatedWeeks, combinedEstimatedWeeks, isCoupleMode, partnerName, partnerAge, partnerWeight, partnerHeight, partnerTargetWeight, partnerBmi, partnerAdjustedBmi, partnerGoal, partnerBodyType, partnerExperience, partnerEstimatedWeeks, groceryList, fullCalendarPlan, roadmap, accountabilitySystem]);

  const handleSave = useCallback(async () => {
    try {
      const validationMessage = validateBeforeSave();
      if (validationMessage) {
        alert(validationMessage);
        return;
      }

      setLoading(true);
      const { data: { user } } = await supabase.auth.getUser();

      if (!user) {
        localStorage.setItem("fit_onboarding_pending", JSON.stringify({
          saved_at: new Date().toISOString(),
          data: buildOnboardingPayload(),
        }));
        window.location.href = "/signup?from=onboarding";
        return;
      }

      const { error } = await supabase.from("member_preferences").upsert(buildOnboardingPayload(user.id));
      if (error) throw error;

      localStorage.removeItem("fit_onboarding_pending");
      window.location.href = "/dashboard";
    } catch (error) {
      console.error(error);
      alert(error.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  }, [validateBeforeSave, supabase, buildOnboardingPayload]);

  // Loading state
  if (!hydrated) {
    return (
      <main style={main}>
        <div style={overlay} />
        <section style={card}>
          <div style={{ textAlign: "center", padding: "60px", color: "white" }}>Loading...</div>
        </section>
      </main>
    );
  }

  // Main render
  return (
    <main style={main}>
      <div style={overlay} />
      <section style={card}>
        <div style={eyebrow}>FIT COUPLE CLUB</div>
        <h1 style={title}>{t(createTranslationObject("Build your personalized system.", "Bouw jouw persoonlijke systeem."))}</h1>
        <p style={subtitle}>
          {t(createTranslationObject(
            "Your nutrition, workouts, fasting structure and transformation timeline adapt to your profile, body type, goal, target weight, training setup and Couple Mode.",
            "Jouw voeding, trainingen, vastenstructuur en transformatietijdlijn passen zich aan jouw profiel, lichaamstype, doel, streefgewicht, trainingsopzet en Koppelmodus aan."
          ))}
        </p>

        {/* Profile Section */}
        <div style={section}>
          <h3 style={sectionTitle}>{t(createTranslationObject("Your Profile", "Jouw Profiel"))}</h3>
          <p style={miniDescription}>
            {t(createTranslationObject("Choose one. This replaces the old Male/Female and Solo/Couple buttons.", "Kies er een. Dit vervangt de oude Man/Vrouw en Solo/Koppel knoppen."))}
          </p>
          <div style={profileGrid} className="profile-grid">
            {PROFILE_TYPES.map((item) => (
              <button key={item.value} type="button" onClick={() => setProfileType(item.value)} style={imageCard(profileType === item.value)}>
                <img src={item.image} alt={item.title} style={profileImage} />
                <strong>{item.title}</strong>
                <small>{item.text}</small>
              </button>
            ))}
          </div>
        </div>

        {/* Body Stats Section */}
        <div style={section}>
          <h3 style={sectionTitle}>{t(createTranslationObject("Body Stats", "Lichaamsgegevens"))}</h3>
          <div style={inputGrid}>
            <label style={field}>
              {t(createTranslationObject("Age", "Leeftijd"))}
              <input style={input} value={age} onChange={(e) => setAge(e.target.value)} placeholder="36" inputMode="numeric" />
            </label>
            <label style={field}>
              {t(createTranslationObject("Weight kg", "Gewicht kg"))}
              <input style={input} value={weight} onChange={(e) => setWeight(e.target.value)} placeholder="93" inputMode="decimal" />
            </label>
            <label style={field}>
              {t(createTranslationObject("Height cm", "Lengte cm"))}
              <input style={input} value={height} onChange={(e) => setHeight(e.target.value)} placeholder="188" inputMode="decimal" />
            </label>
            <label style={field}>
              {t(createTranslationObject("Target weight kg", "Streefgewicht kg"))}
              <input style={input} value={targetWeight} onChange={(e) => setTargetWeight(e.target.value)} placeholder="86" inputMode="decimal" />
            </label>
          </div>
          {goalConflictMessage && <p style={warningText}>{goalConflictMessage}</p>}
        </div>

        {/* BMI Results */}
        <div style={resultGrid} className="result-grid">
          <div style={resultCard}>
            <span style={smallLabel}>{t(createTranslationObject("BMI", "BMI"))}</span>
            <strong style={resultNumber}>{bmi || "—"}</strong>
            <small style={mutedText}>{getTranslatedBmiLabel(bmi, bodyType, t)}</small>
            {bodyType && bmi && (
              <small style={mutedText}>
                {t(createTranslationObject("Body-type adjusted BMI:", "Lichaamstype aangepaste BMI:"))} {adjustedBmi}
              </small>
            )}
            {translatedBodyTypeWarning && <small style={warningText}>{translatedBodyTypeWarning}</small>}
          </div>
          <div style={resultCard}>
            <span style={smallLabel}>{t(createTranslationObject("Estimated Time", "Geschatte Tijd"))}</span>
            <strong style={resultNumber}>{getTranslatedEstimatedText(estimatedWeeks, goal, t)}</strong>
            <small style={mutedText}>
              {t(createTranslationObject("Uses your goal, current weight, target weight, body type, training type and experience.", "Gebruikt je doel, huidige gewicht, streefgewicht, lichaamstype, trainingstype en ervaring."))}
            </small>
          </div>
        </div>

        {/* Goal Section */}
        <div style={section}>
          <h3 style={sectionTitle}>{t(createTranslationObject("Goal", "Doel"))}</h3>
          <p style={miniDescription}>
            {t(createTranslationObject("Choose the goal that best matches your target. The app warns you if the target and goal do not match, but it never changes your target.", "Kies het doel dat het beste bij jouw streefdoel past. De app waarschuwt als het doel en streefgewicht niet overeenkomen, maar verandert nooit jouw streefgewicht."))}
          </p>
          <div style={choiceGrid} className="choice-grid">
            {GOALS.map((item) => (
              <button key={item.value} type="button" onClick={() => setGoal(item.value)} style={option(goal === item.value)}>
                <strong>{item.title}</strong>
                <small>{item.text}</small>
              </button>
            ))}
          </div>
        </div>

        {/* Workout Type */}
        <div style={section}>
          <h3 style={sectionTitle}>{t(createTranslationObject("Training, food or both?", "Training, voeding of beide?"))}</h3>
          <div style={grid}>
            {WORKOUT_TYPES.map((item) => (
              <button key={item.value} type="button" onClick={() => setWorkoutType(item.value)} style={option(workoutType === item.value)}>
                {item.title}
              </button>
            ))}
          </div>
        </div>

        {/* Diet Style */}
        <div style={section}>
          <h3 style={sectionTitle}>{t(createTranslationObject("Diet Style", "Dieetstijl"))}</h3>
          <div style={grid}>
            {DIETS.map((item) => (
              <button key={item.value} type="button" onClick={() => setDietType(item.value)} style={option(dietType === item.value)}>
                {item.title}
              </button>
            ))}
          </div>
        </div>

        {/* Allergies */}
        <div style={section}>
          <h3 style={sectionTitle}>{t(createTranslationObject("Allergies & Filters", "Allergieën & Filters"))}</h3>
          <p style={miniDescription}>{t(createTranslationObject("Only select what you really need to avoid.", "Selecteer alleen wat je echt moet vermijden."))}</p>
          <div style={grid}>
            {ALLERGIES.map((item) => (
              <button key={item.value} type="button" onClick={() => toggleAllergy(item.value)} style={option(allergies.includes(item.value))}>
                {item.title}
              </button>
            ))}
          </div>
        </div>

        {/* Intermittent Fasting */}
        <div style={section}>
          <h3 style={sectionTitle}>{t(createTranslationObject("Intermittent Fasting", "Intermittent Fasting"))}</h3>
          <label style={toggle}>
            <input type="checkbox" checked={fastingEnabled} onChange={(e) => setFastingEnabled(e.target.checked)} />
            {t(createTranslationObject("Enable fasting mode", "Activeer vastenmodus"))}
          </label>
          {fastingEnabled && (
            <div style={gridWithTop}>
              {FASTING_WINDOWS.map((item) => (
                <button key={item} type="button" onClick={() => setFastingWindow(item)} style={option(fastingWindow === item)}>
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Training Location & Experience (only if not food-only) */}
        {workoutType !== "food-only" && (
          <>
            <div style={section}>
              <h3 style={sectionTitle}>{t(createTranslationObject("Training Location", "Trainingslocatie"))}</h3>
              <div style={grid}>
                {TRAINING_LOCATIONS.map((item) => (
                  <button key={item.value} type="button" onClick={() => setTrainingLocation(item.value)} style={option(trainingLocation === item.value)}>
                    {item.title}
                  </button>
                ))}
              </div>
            </div>
            <div style={section}>
              <h3 style={sectionTitle}>{t(createTranslationObject("Experience", "Ervaring"))}</h3>
              <div style={grid}>
                {EXPERIENCE_LEVELS.map((item) => (
                  <button key={item.value} type="button" onClick={() => setExperienceLevel(item.value)} style={option(experienceLevel === item.value)}>
                    {item.title}
                  </button>
                ))}
              </div>
            </div>
          </>
        )}

        {/* Body Type */}
        <div style={section}>
          <h3 style={sectionTitle}>{t(createTranslationObject("Current Body Type", "Huidig Lichaamstype"))}</h3>
          <p style={miniDescription}>
            {t(createTranslationObject("Pick the picture that looks closest to your current body. This changes BMI interpretation, timeline and calendar intensity.", "Kies de afbeelding die het meest op jouw huidige lichaam lijkt. Dit verandert de BMI-interpretatie, tijdlijn en kalenderintensiteit."))}
          </p>
          <div style={bodyTypeGrid} className="body-type-grid">
            {BODY_TYPES.map((item) => (
              <button key={item.value} type="button" onClick={() => setBodyType(item.value)} style={imageCard(bodyType === item.value)}>
                <img src={item.image} alt={item.title} style={bodyTypeImage} />
                <strong>{item.title}</strong>
                <small>{item.text}</small>
              </button>
            ))}
          </div>
        </div>

        {/* Partner Section */}
        {isCoupleMode && (
          <div style={partnerSection}>
            <h3 style={sectionTitle}>{t(createTranslationObject("Partner Profile", "Partner Profiel"))}</h3>
            <p style={miniDescription}>
              {t(createTranslationObject("Couple Mode uses separate stats, body type, goal and timeline for your partner, then combines both into one shared calendar and accountability system.", "Koppelmodus gebruikt aparte statistieken, lichaamstype, doel en tijdlijn voor jouw partner, en combineert beide in één gedeelde kalender en verantwoordingssysteem."))}
            </p>
            <div style={inputGrid}>
              <label style={field}>
                {t(createTranslationObject("Partner name", "Naam partner"))}
                <input style={input} value={partnerName} onChange={(e) => setPartnerName(e.target.value)} placeholder="Partner name" />
              </label>
              <label style={field}>
                {t(createTranslationObject("Partner age", "Leeftijd partner"))}
                <input style={input} value={partnerAge} onChange={(e) => setPartnerAge(e.target.value)} placeholder="28" inputMode="numeric" />
              </label>
              <label style={field}>
                {t(createTranslationObject("Partner weight kg", "Gewicht partner kg"))}
                <input style={input} value={partnerWeight} onChange={(e) => setPartnerWeight(e.target.value)} placeholder="65" inputMode="decimal" />
              </label>
              <label style={field}>
                {t(createTranslationObject("Partner height cm", "Lengte partner cm"))}
                <input style={input} value={partnerHeight} onChange={(e) => setPartnerHeight(e.target.value)} placeholder="170" inputMode="decimal" />
              </label>
              <label style={field}>
                {t(createTranslationObject("Partner target weight kg", "Streefgewicht partner kg"))}
                <input style={input} value={partnerTargetWeight} onChange={(e) => setPartnerTargetWeight(e.target.value)} placeholder="60" inputMode="decimal" />
              </label>
            </div>
            {partnerGoalConflictMessage && <p style={warningText}>{partnerGoalConflictMessage}</p>}

            <div style={subBlock}>
              <h4 style={subTitle}>{t(createTranslationObject("Partner Goal", "Partner Doel"))}</h4>
              <div style={choiceGrid}>
                {GOALS.map((item) => (
                  <button key={item.value} type="button" onClick={() => setPartnerGoal(item.value)} style={option(partnerGoal === item.value)}>
                    <strong>{item.title}</strong>
                    <small>{item.text}</small>
                  </button>
                ))}
              </div>
            </div>

            <div style={subBlock}>
              <h4 style={subTitle}>{t(createTranslationObject("Partner Body Type", "Partner Lichaamstype"))}</h4>
              <div style={bodyTypeGrid}>
                {BODY_TYPES.map((item) => (
                  <button key={item.value} type="button" onClick={() => setPartnerBodyType(item.value)} style={imageCard(partnerBodyType === item.value)}>
                    <img src={item.image} alt={item.title} style={bodyTypeImage} />
                    <strong>{item.title}</strong>
                    <small>{item.text}</small>
                  </button>
                ))}
              </div>
            </div>

            {workoutType !== "food-only" && (
              <div style={subBlock}>
                <h4 style={subTitle}>{t(createTranslationObject("Partner Experience", "Partner Ervaring"))}</h4>
                <div style={grid}>
                  {EXPERIENCE_LEVELS.map((item) => (
                    <button key={item.value} type="button" onClick={() => setPartnerExperience(item.value)} style={option(partnerExperience === item.value)}>
                      {item.title}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div style={resultGrid}>
              <div style={resultCard}>
                <span style={smallLabel}>{t(createTranslationObject("Partner BMI", "Partner BMI"))}</span>
                <strong style={resultNumber}>{partnerBmi || "—"}</strong>
                <small style={mutedText}>{getTranslatedBmiLabel(partnerBmi, partnerBodyType, t)}</small>
                {partnerBodyType && partnerBmi && (
                  <small style={mutedText}>
                    {t(createTranslationObject("Body-type adjusted BMI:", "Lichaamstype aangepaste BMI:"))} {partnerAdjustedBmi}
                  </small>
                )}
                {translatedPartnerBodyTypeWarning && <small style={warningText}>{translatedPartnerBodyTypeWarning}</small>}
              </div>
              <div style={resultCard}>
                <span style={smallLabel}>{t(createTranslationObject("Partner Estimated Time", "Partner Geschatte Tijd"))}</span>
                <strong style={resultNumber}>{getTranslatedEstimatedText(partnerEstimatedWeeks, partnerGoal, t)}</strong>
                <small style={mutedText}>
                  {t(createTranslationObject("The couple calendar uses the longer timeline so both partners stay aligned.", "De koppelkalender gebruikt de langere tijdlijn zodat beide partners op elkaar afgestemd blijven."))}
                </small>
              </div>
            </div>
          </div>
        )}

        {/* Locked Preview Card */}
        <div style={lockedPreviewCard}>
          <h3 style={lockedPreviewTitle}>
            {t(createTranslationObject("🔓 UNLOCK YOUR FULL TRANSFORMATION SYSTEM", "🔓 ONTGRENDEL JOUW VOLLEDIGE TRANSFORMATIESYSTEEM"))}
          </h3>
          <p style={lockedPreviewText}>
            {t(createTranslationObject("After signup, your full plan creates the transformation roadmap, calendar, grocery list, daily tasks and accountability system. These member features are saved to Supabase and unlocked inside the dashboard.", "Na aanmelding creëert jouw volledige plan de transformatieroutekaart, kalender, boodschappenlijst, dagelijkse taken en verantwoordingssysteem. Deze ledenfuncties worden opgeslagen in Supabase en ontgrendeld in het dashboard."))}
          </p>
          <div style={lockedFeatureGrid} className="locked-feature-grid">
            <span style={lockedFeature}>📋 {t(createTranslationObject("Transformation roadmap", "Transformatieroutekaart"))}</span>
            <span style={lockedFeature}>📅 {t(createTranslationObject("Member calendar", "Ledenkalender"))}</span>
            <span style={lockedFeature}>🛒 {t(createTranslationObject("Combined grocery list", "Gecombineerde boodschappenlijst"))}</span>
            <span style={lockedFeature}>✅ {t(createTranslationObject("Daily check-ins", "Dagelijkse check-ins"))}</span>
            <span style={lockedFeature}>👫 {t(createTranslationObject("Couple accountability", "Koppel verantwoording"))}</span>
            <span style={lockedFeature}>📊 {t(createTranslationObject("Progress tracking", "Voortgangsregistratie"))}</span>
          </div>
        </div>

        {/* Save Button */}
        <button type="button" onClick={handleSave} disabled={loading} style={saveBtn}>
          {loading ? t(createTranslationObject("Saving...", "Opslaan...")) : t(createTranslationObject("🚀 CREATE MY PLAN", "🚀 MAAK MIJN PLAN"))}
        </button>
      </section>
    </main>
  );
}

// ============================================================================
// STYLES
// ============================================================================

const main = {
  minHeight: "100vh",
  background: "url('/images/background.webp') center/cover no-repeat",
  padding: "40px 20px",
  position: "relative",
  overflow: "auto",
};

const overlay = {
  position: "absolute",
  inset: 0,
  background: "rgba(0,0,0,0.82)",
};

const card = {
  position: "relative",
  zIndex: 2,
  maxWidth: "1180px",
  margin: "0 auto",
  background: "rgba(10,10,10,0.92)",
  border: "1px solid rgba(255,0,0,0.18)",
  borderRadius: "30px",
  padding: "clamp(22px, 4vw, 40px)",
  color: "white",
  backdropFilter: "blur(14px)",
  wordBreak: "break-word",
  overflow: "hidden",
};

const eyebrow = {
  color: "#ff2b2b",
  fontWeight: "900",
  letterSpacing: "0.2em",
  marginBottom: "14px",
};

const title = {
  fontSize: "clamp(36px, 7vw, 74px)",
  lineHeight: 1.1,
  marginBottom: "18px",
  fontWeight: "900",
  wordBreak: "break-word",
};

const subtitle = {
  color: "rgba(255,255,255,0.7)",
  lineHeight: 1.7,
  marginBottom: "40px",
  maxWidth: "860px",
};

const section = {
  marginBottom: "36px",
};

const sectionTitle = {
  margin: "0 0 14px",
  fontSize: "clamp(28px, 4vw, 42px)",
  fontWeight: "950",
};

const miniDescription = {
  color: "rgba(255,255,255,0.68)",
  lineHeight: 1.7,
  marginTop: 0,
  marginBottom: "18px",
};

const grid = {
  display: "flex",
  flexWrap: "wrap",
  gap: "12px",
};

const gridWithTop = {
  ...grid,
  marginTop: "14px",
};

const profileGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
  gap: "18px",
};

const bodyTypeGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
  gap: "18px",
};

const choiceGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))",
  gap: "12px",
};

const option = (active) => ({
  padding: "16px 18px",
  borderRadius: "16px",
  border: active ? "1px solid #ff2b2b" : "1px solid rgba(255,255,255,0.10)",
  background: active ? "rgba(255,0,0,0.16)" : "rgba(255,255,255,0.04)",
  color: "white",
  fontWeight: "900",
  cursor: "pointer",
  display: "grid",
  gap: "7px",
  textAlign: "left",
});

const imageCard = (active) => ({
  minHeight: "280px",
  padding: "20px",
  borderRadius: "22px",
  border: active ? "1px solid #ff2b2b" : "1px solid rgba(255,255,255,0.10)",
  background: active ? "rgba(255,0,0,0.16)" : "rgba(255,255,255,0.04)",
  color: "white",
  cursor: "pointer",
  display: "grid",
  justifyItems: "center",
  alignContent: "start",
  gap: "12px",
  textAlign: "center",
});

const profileImage = {
  width: "190px",
  height: "210px",
  objectFit: "contain",
};

const bodyTypeImage = {
  width: "170px",
  height: "210px",
  objectFit: "contain",
};

const inputGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
  gap: "14px",
};

const field = {
  display: "grid",
  gap: "8px",
  color: "rgba(255,255,255,0.72)",
  fontWeight: "900",
};

const input = {
  width: "100%",
  minHeight: "54px",
  border: "1px solid rgba(255,255,255,0.10)",
  background: "rgba(255,255,255,0.05)",
  color: "white",
  borderRadius: "14px",
  padding: "0 14px",
  fontSize: "16px",
  fontWeight: "900",
  outline: "none",
};

const resultGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
  gap: "14px",
  marginBottom: "36px",
};

const resultCard = {
  border: "1px solid rgba(255,255,255,0.10)",
  borderLeft: "4px solid #ff2b2b",
  background: "rgba(255,255,255,0.04)",
  borderRadius: "18px",
  padding: "20px",
  display: "grid",
  gap: "8px",
};

const smallLabel = {
  color: "#ff4d4d",
  fontWeight: "950",
  textTransform: "uppercase",
  letterSpacing: "0.12em",
  fontSize: "12px",
};

const resultNumber = {
  fontSize: "clamp(28px, 4vw, 42px)",
  fontWeight: "950",
};

const mutedText = {
  color: "rgba(255,255,255,0.62)",
  lineHeight: 1.5,
};

const warningText = {
  color: "#fbbf24",
  lineHeight: 1.5,
  fontWeight: "900",
  marginTop: "16px",
};

const toggle = {
  display: "flex",
  gap: "10px",
  alignItems: "center",
  fontWeight: "800",
};

const partnerSection = {
  marginBottom: "36px",
  padding: "24px",
  borderRadius: "24px",
  border: "1px solid rgba(255,43,43,0.28)",
  background: "rgba(255,0,0,0.06)",
};

const subBlock = {
  marginTop: "26px",
};

const subTitle = {
  margin: "0 0 12px",
  fontSize: "22px",
  fontWeight: "950",
};

const lockedPreviewCard = {
  marginBottom: "34px",
  padding: "34px",
  borderRadius: "26px",
  border: "1px solid rgba(255,43,43,0.28)",
  background: "linear-gradient(135deg, rgba(255,0,0,0.12), rgba(255,255,255,0.035))",
  textAlign: "center",
  wordBreak: "break-word",
  overflowWrap: "break-word",
};

const lockedPreviewTitle = {
  margin: "0 0 14px",
  fontSize: "clamp(24px, 5vw, 54px)",
  lineHeight: 1.2,
  fontWeight: "950",
  textTransform: "uppercase",
  wordBreak: "break-word",
};

const lockedPreviewText = {
  color: "rgba(255,255,255,0.72)",
  lineHeight: 1.7,
  maxWidth: "820px",
  margin: "0 auto 22px",
  wordBreak: "break-word",
};

const lockedFeatureGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
  gap: "10px",
};

const lockedFeature = {
  border: "1px solid rgba(255,255,255,0.10)",
  background: "rgba(0,0,0,0.28)",
  borderRadius: "14px",
  padding: "10px 8px",
  fontWeight: "900",
  fontSize: "clamp(11px, 3vw, 14px)",
  textAlign: "center",
};

const saveBtn = {
  width: "100%",
  padding: "18px",
  borderRadius: "18px",
  border: "none",
  background: "linear-gradient(90deg,#ff0000,#ff4d4d)",
  color: "white",
  fontWeight: "950",
  fontSize: "18px",
  cursor: "pointer",
};