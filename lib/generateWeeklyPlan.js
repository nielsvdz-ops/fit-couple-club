import { generateAdvancedWorkout } from "./advancedWorkoutGenerator";

// Fit Couple Club weekly plan generator helpers v2
// Adds EN/NL translation support, current membership labels, and mobile-friendly metadata.
// Old Full Access/Full Access wording is normalized to Full Access.

export const WEEKLY_PLAN_TEXT = {
  en: {
    week: "Week",
    day: "Day",
    workout: "Workout",
    restDay: "Rest Day",
    activeRecovery: "Active Recovery",
    exercises: "Exercises",
    sets: "Sets",
    reps: "Reps",
    rest: "Rest",
    tempo: "Tempo",
    notes: "Notes",
    warmup: "Warm-up",
    cooldown: "Cooldown",
    fullAccess: "Full Access",
    nutrition: "Nutrition",
    vip: "VIP",
    coaching: "Coaching",
    daysPerWeek: "days / week",
    moderateIntensity: "Moderate Intensity",
    highIntensity: "High Intensity",
    lowIntensity: "Low Intensity",
  },
  nl: {
    week: "Week",
    day: "Dag",
    workout: "Training",
    restDay: "Rustdag",
    activeRecovery: "Actief herstel",
    exercises: "Oefeningen",
    sets: "Sets",
    reps: "Herhalingen",
    rest: "Rust",
    tempo: "Tempo",
    notes: "Notities",
    warmup: "Warming-up",
    cooldown: "Cooling-down",
    fullAccess: "Full Access",
    nutrition: "Voeding",
    vip: "VIP",
    coaching: "Coaching",
    daysPerWeek: "dagen / week",
    moderateIntensity: "Gemiddelde Intensiteit",
    highIntensity: "Hoge Intensiteit",
    lowIntensity: "Lage Intensiteit",
  },
};

export const WEEK_DAY_TRANSLATIONS = {
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

export function getWeeklyPlanText(key, language = "en") {
  return WEEKLY_PLAN_TEXT?.[language]?.[key] || WEEKLY_PLAN_TEXT.en[key] || key;
}

export function translateWeekDay(day, language = "en") {
  return WEEK_DAY_TRANSLATIONS?.[language]?.[day] || day;
}

export function normalizeWeeklyPlanMembership(value = "full_access") {
  const clean = String(value || "").toLowerCase().trim();

  if (
    clean === "starter" ||
    clean === "premium" ||
    clean === "fitness" ||
    clean === "workouts" ||
    clean === "full access" ||
    clean === "full-access" ||
    clean === "full_access"
  ) {
    return "full_access";
  }

  if (clean === "nutrition") return "nutrition";
  if (clean === "vip") return "vip";
  if (clean === "coaching") return "coaching";

  return "full_access";
}

export function translateWeeklyPlanText(value, language = "en") {
  if (!value || language !== "nl") return value || "";

  const exactMap = {
    "Full Access": "Full Access",
    "Full Access": "Full Access",
    "Full Access": "Full Access",
    "Nutrition": "Voeding",
    "VIP": "VIP",
    "Coaching": "Coaching",
    "Monday": "Maandag",
    "Tuesday": "Dinsdag",
    "Wednesday": "Woensdag",
    "Thursday": "Donderdag",
    "Friday": "Vrijdag",
    "Saturday": "Zaterdag",
    "Sunday": "Zondag",
    "Rest Day": "Rustdag",
    "Active Recovery": "Actief herstel",
    "Lose Fat": "Vetverlies",
    "Fat Loss": "Vetverlies",
    "Build Muscle": "Spieropbouw",
    "Muscle Gain": "Spieropbouw",
    "Tone & Shape Body": "Tonen & Vormen",
    "Maintain Athletic Lifestyle": "Atletische Lifestyle Behouden",
    "Beginner Body Reset": "Beginner Body Reset",
    "Booty": "Billen",
    "Abs": "Buikspieren",
    "Legs": "Benen",
    "Upper Body": "Bovenlichaam",
    "Lower Body": "Onderlichaam",
    "Full Body": "Full Body",
    "Beginner": "Beginner",
    "Intermediate": "Gemiddeld",
    "Advanced": "Gevorderd",
    "Moderate Intensity": "Gemiddelde Intensiteit",
    "High Intensity": "Hoge Intensiteit",
    "Low Intensity": "Lage Intensiteit",
  };

  if (exactMap[value]) return exactMap[value];

  const replacements = [
    ["Full Access", "Full Access"],
    ["Full Access", "Full Access"],
    ["Workout", "Training"],
    ["Workouts", "Trainingen"],
    ["Exercise", "Oefening"],
    ["Exercises", "Oefeningen"],
    ["Plan", "Schema"],
    ["Program", "Programma"],
    ["Routine", "Routine"],
    ["Day", "Dag"],
    ["Week", "Week"],
    ["Goal", "Doel"],
    ["Focus", "Focus"],
    ["Training days", "Trainingsdagen"],
    ["Body type", "Lichaamstype"],
    ["Experience", "Ervaring"],
    ["Lifestyle", "Lifestyle"],
    ["Sets", "Sets"],
    ["Reps", "Herhalingen"],
    ["Rest", "Rust"],
    ["Intensity", "Intensiteit"],
    ["Notes", "Notities"],
    ["Recommendation", "Aanbeveling"],
    ["Warm-up", "Warming-up"],
    ["Cooldown", "Cooling-down"],
    ["Fat Loss", "Vetverlies"],
    ["Lose Fat", "Vetverlies"],
    ["Build Muscle", "Spieropbouw"],
    ["Muscle Gain", "Spieropbouw"],
    ["Tone", "Tonen"],
    ["Shape", "Vormen"],
    ["Strength", "Kracht"],
    ["Endurance", "Conditie"],
    ["Conditioning", "Conditie"],
    ["Recovery", "Herstel"],
    ["Mobility", "Mobiliteit"],
    ["Glutes", "Billen"],
    ["Glute", "Bil"],
    ["Booty", "Billen"],
    ["Chest", "Borst"],
    ["Back", "Rug"],
    ["Shoulders", "Schouders"],
    ["Arms", "Armen"],
    ["Core", "Core"],
    ["Controlled", "Gecontroleerd"],
    ["Optional", "Optioneel"],
    ["Recommended", "Aanbevolen"],
    ["days / week", "dagen / week"],
    ["day / week", "dag / week"],
  ];

  let output = String(value);

  replacements.forEach(([from, to]) => {
    output = output.split(from).join(to);
  });

  return output;
}

export function translateWeeklyPlanObject(item, language = "en") {
  if (!item || language !== "nl") return item;

  if (typeof item === "string") {
    return translateWeeklyPlanText(item, language);
  }

  if (Array.isArray(item)) {
    return item.map((entry) => translateWeeklyPlanObject(entry, language));
  }

  if (typeof item === "object") {
    const translated = {};

    Object.entries(item).forEach(([key, value]) => {
      translated[key] = translateWeeklyPlanObject(value, language);
    });

    return translated;
  }

  return item;
}

export function normalizeGeneratedWeeklyPlan(plan = {}) {
  const currentAccess =
    plan.access ||
    plan.tier ||
    plan.membership ||
    plan.requiredPlan ||
    plan.requiredMembership ||
    "full_access";

  return {
    ...plan,
    access: normalizeWeeklyPlanMembership(currentAccess),
    tier: normalizeWeeklyPlanMembership(currentAccess),
    membership: normalizeWeeklyPlanMembership(currentAccess),
    requiredPlan: normalizeWeeklyPlanMembership(currentAccess),
  };
}

export function getMobileWeeklyPlanMeta(plan = {}, language = "en") {
  const normalized = normalizeGeneratedWeeklyPlan(plan);

  return {
    ...normalized,
    title: translateWeeklyPlanText(normalized.title || normalized.name || "", language),
    subtitle: translateWeeklyPlanText(normalized.subtitle || normalized.description || "", language),
    goalLabel: translateWeeklyPlanText(normalized.goal || "", language),
    focusLabel: translateWeeklyPlanText(normalized.focus || "", language),
    intensityLabel: translateWeeklyPlanText(normalized.intensity || normalized.difficulty || "", language),
    levelLabel: translateWeeklyPlanText(normalized.level || normalized.experience || "", language),
    daysLabel: translateWeeklyPlanText(
      normalized.daysPerWeek
        ? `${normalized.daysPerWeek} days / week`
        : normalized.trainingDays
        ? `${normalized.trainingDays} days / week`
        : "",
      language
    ),
  };
}



export function generateWeeklyPlan(profile) {
  const days = [];

  for (let i = 0; i < profile.training_days; i++) {
    days.push({
      day: `Day ${i + 1}`,
      exercises: generateAdvancedWorkout(profile),
    });
  }

  return days;
}


// Compatibility wrapper for components that need translated generated plans.
export function getTranslatedWeeklyPlan(plan = {}, language = "en") {
  return translateWeeklyPlanObject(normalizeGeneratedWeeklyPlan(plan), language);
}

export function getTranslatedWeeklyPlans(plans = [], language = "en") {
  return plans.map((plan) => getTranslatedWeeklyPlan(plan, language));
}
