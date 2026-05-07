
// Fit Couple Club plan logic helpers v2
// Translation-ready and compatible with the current membership structure.
// Old Starter/Premium labels are normalized to Full Access.

export const PLAN_LOGIC_TEXT = {
  en: {
    fullAccess: "Full Access",
    nutrition: "Nutrition",
    vip: "VIP",
    coaching: "Coaching",
    goal: "Goal",
    focus: "Focus",
    trainingDays: "Training days",
    bodyType: "Body type",
    experience: "Experience",
    lifestyle: "Lifestyle",
    plan: "Plan",
    workout: "Workout",
    exercises: "Exercises",
    sets: "Sets",
    reps: "Reps",
    rest: "Rest",
    intensity: "Intensity",
    notes: "Notes",
    recommendation: "Recommendation",
  },
  nl: {
    fullAccess: "Full Access",
    nutrition: "Voeding",
    vip: "VIP",
    coaching: "Coaching",
    goal: "Doel",
    focus: "Focus",
    trainingDays: "Trainingsdagen",
    bodyType: "Lichaamstype",
    experience: "Ervaring",
    lifestyle: "Lifestyle",
    plan: "Schema",
    workout: "Training",
    exercises: "Oefeningen",
    sets: "Sets",
    reps: "Herhalingen",
    rest: "Rust",
    intensity: "Intensiteit",
    notes: "Notities",
    recommendation: "Aanbeveling",
  },
};

export function normalizePlanMembership(value = "full_access") {
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

export function getPlanMembershipLabel(value = "full_access", language = "en") {
  const normalized = normalizePlanMembership(value);

  const map = {
    nutrition: PLAN_LOGIC_TEXT[language]?.nutrition || PLAN_LOGIC_TEXT.en.nutrition,
    full_access: PLAN_LOGIC_TEXT[language]?.fullAccess || PLAN_LOGIC_TEXT.en.fullAccess,
    vip: PLAN_LOGIC_TEXT[language]?.vip || PLAN_LOGIC_TEXT.en.vip,
    coaching: PLAN_LOGIC_TEXT[language]?.coaching || PLAN_LOGIC_TEXT.en.coaching,
  };

  return map[normalized] || map.full_access;
}

export function normalizeGoalValue(goal = "lose-fat") {
  const clean = String(goal || "").toLowerCase().trim();

  const map = {
    "lose fat": "lose-fat",
    "fat loss": "lose-fat",
    "lose-fat": "lose-fat",
    "fat_loss": "lose-fat",
    "build muscle": "build-muscle",
    "muscle gain": "build-muscle",
    "build-muscle": "build-muscle",
    "build_muscle": "build-muscle",
    "tone & shape body": "tone-shape-body",
    "tone shape body": "tone-shape-body",
    "tone-shape-body": "tone-shape-body",
    "maintain athletic lifestyle": "maintain-athletic-lifestyle",
    "maintain-athletic-lifestyle": "maintain-athletic-lifestyle",
    "beginner body reset": "beginner-body-reset",
    "beginner-body-reset": "beginner-body-reset",
  };

  return map[clean] || clean.replaceAll(" ", "-");
}

export function normalizeFocusValue(focus = "full-body") {
  const clean = String(focus || "").toLowerCase().trim();

  const map = {
    booty: "booty",
    glutes: "booty",
    abs: "abs",
    core: "abs",
    legs: "legs",
    "upper body": "upper-body",
    "upper-body": "upper-body",
    "full body": "full-body",
    "full-body": "full-body",
  };

  return map[clean] || clean.replaceAll(" ", "-");
}

export function translatePlanLogicText(value, language = "en") {
  if (!value || language !== "nl") return value || "";

  const exactMap = {
    "Full Access": "Full Access",
    "Full Access": "Full Access",
    "Full Access": "Full Access",
    "Nutrition": "Voeding",
    "VIP": "VIP",
    "Coaching": "Coaching",
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
    "Full Body": "Full Body",
    "Slim": "Slank",
    "Average": "Gemiddeld",
    "Curvy": "Curvy",
    "Athletic": "Atletisch",
    "Plus Size": "Plus Size",
    "Beginner": "Beginner",
    "Intermediate": "Gemiddeld",
    "Advanced": "Gevorderd",
    "Busy Schedule": "Drukke Agenda",
    "Balanced Lifestyle": "Gebalanceerde Lifestyle",
    "Highly Active": "Zeer Actief",
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

export function translatePlanLogicObject(item, language = "en") {
  if (!item || language !== "nl") return item;

  if (typeof item === "string") {
    return translatePlanLogicText(item, language);
  }

  if (Array.isArray(item)) {
    return item.map((entry) => translatePlanLogicObject(entry, language));
  }

  if (typeof item === "object") {
    const translated = {};

    Object.entries(item).forEach(([key, value]) => {
      translated[key] = translatePlanLogicObject(value, language);
    });

    return translated;
  }

  return item;
}

export function normalizePlanLogicResult(plan = {}) {
  const currentAccess =
    plan.access ||
    plan.tier ||
    plan.membership ||
    plan.requiredPlan ||
    plan.planType ||
    "full_access";

  return {
    ...plan,
    access: normalizePlanMembership(currentAccess),
    tier: normalizePlanMembership(currentAccess),
    membership: normalizePlanMembership(currentAccess),
    requiredPlan: normalizePlanMembership(currentAccess),
  };
}

export function getMobilePlanLogicMeta(plan = {}, language = "en") {
  const normalized = normalizePlanLogicResult(plan);

  return {
    ...normalized,
    title: translatePlanLogicText(normalized.title || normalized.name || "", language),
    accessLabel: getPlanMembershipLabel(normalized.access, language),
    goalLabel: translatePlanLogicText(normalized.goal || "", language),
    focusLabel: translatePlanLogicText(normalized.focus || "", language),
    intensityLabel: translatePlanLogicText(normalized.intensity || normalized.difficulty || "", language),
    levelLabel: translatePlanLogicText(normalized.level || normalized.experience || "", language),
    daysLabel: translatePlanLogicText(
      normalized.daysPerWeek
        ? `${normalized.daysPerWeek} days / week`
        : normalized.trainingDays
        ? `${normalized.trainingDays} days / week`
        : "",
      language
    ),
  };
}


export const GOALS = [
    default:
      return {
        title: "Beginner Reset Nutrition",
        description: "Simple, repeatable meals with a strong protein base and easy food choices.",
        example: [
          "Breakfast: Yogurt + fruit",
          "Lunch: Chicken + rice",
          "Snack: Protein shake",
          "Dinner: Salmon + potatoes",
        ],
      };
  }
}

function getTrainingSplit(focus, days) {
  const plans = {
    Booty: {
      2: ["Day 1 — Glutes + Legs", "Day 2 — Upper Body + Glute Finisher"],
      3: ["Day 1 — Glutes Heavy", "Day 2 — Upper Body", "Day 3 — Glutes Volume"],
      4: ["Day 1 — Glutes Heavy", "Day 2 — Upper Body", "Day 3 — Glutes Volume", "Day 4 — Lower Body Shape"],
      5: ["Day 1 — Glutes Heavy", "Day 2 — Upper Push", "Day 3 — Glutes Volume", "Day 4 — Upper Pull", "Day 5 — Lower Body + Booty Burn"],
      6: ["Day 1 — Glutes Heavy", "Day 2 — Upper Push", "Day 3 — Glutes Volume", "Day 4 — Upper Pull", "Day 5 — Lower Body", "Day 6 — Booty Finisher + Core"],
    },
    Abs: {
      2: ["Day 1 — Full Body + Core", "Day 2 — Lower Body + Abs"],
      3: ["Day 1 — Upper Body + Core", "Day 2 — Lower Body + Abs", "Day 3 — Full Body + Core"],
      4: ["Day 1 — Upper Push + Abs", "Day 2 — Lower Body", "Day 3 — Upper Pull + Core", "Day 4 — Full Body + Abs"],
      5: ["Day 1 — Push + Abs", "Day 2 — Lower Body", "Day 3 — Pull + Core", "Day 4 — Legs + Abs", "Day 5 — Full Body + Core"],
      6: ["Day 1 — Push + Abs", "Day 2 — Pull + Core", "Day 3 — Legs", "Day 4 — Shoulders + Abs", "Day 5 — Full Body + Core", "Day 6 — Conditioning + Abs"],
    },
    Legs: {
      2: ["Day 1 — Lower Body", "Day 2 — Full Body"],
      3: ["Day 1 — Legs Heavy", "Day 2 — Upper Body", "Day 3 — Legs Volume"],
      4: ["Day 1 — Legs Heavy", "Day 2 — Upper Push", "Day 3 — Legs Volume", "Day 4 — Upper Pull"],
      5: ["Day 1 — Legs Heavy", "Day 2 — Push", "Day 3 — Pull", "Day 4 — Legs Volume", "Day 5 — Full Body"],
      6: ["Day 1 — Legs Heavy", "Day 2 — Push", "Day 3 — Pull", "Day 4 — Legs Volume", "Day 5 — Upper Body", "Day 6 — Conditioning"],
    },
    "Upper Body": {
      2: ["Day 1 — Upper Push", "Day 2 — Upper Pull + Lower"],
      3: ["Day 1 — Push", "Day 2 — Pull", "Day 3 — Legs + Upper Finisher"],
      4: ["Day 1 — Push", "Day 2 — Pull", "Day 3 — Legs", "Day 4 — Shoulders + Arms"],
      5: ["Day 1 — Push", "Day 2 — Pull", "Day 3 — Legs", "Day 4 — Shoulders", "Day 5 — Arms + Upper Pump"],
      6: ["Day 1 — Push", "Day 2 — Pull", "Day 3 — Legs", "Day 4 — Shoulders", "Day 5 — Arms", "Day 6 — Upper Body Pump"],
    },
    "Full Body": {
      2: ["Day 1 — Full Body A", "Day 2 — Full Body B"],
      3: ["Day 1 — Full Body A", "Day 2 — Full Body B", "Day 3 — Full Body C"],
      4: ["Day 1 — Upper", "Day 2 — Lower", "Day 3 — Upper", "Day 4 — Lower"],
      5: ["Day 1 — Push", "Day 2 — Pull", "Day 3 — Legs", "Day 4 — Full Body", "Day 5 — Conditioning"],
      6: ["Day 1 — Push", "Day 2 — Pull", "Day 3 — Legs", "Day 4 — Upper", "Day 5 — Lower", "Day 6 — Full Body"],
    },
    "Couple Workouts": {
      2: ["Day 1 — Couple Full Body", "Day 2 — Couple Conditioning"],
      3: ["Day 1 — Couple Strength", "Day 2 — Couple Cardio", "Day 3 — Couple Lower Body"],
      4: ["Day 1 — Couple Upper Body", "Day 2 — Couple Lower Body", "Day 3 — Couple Conditioning", "Day 4 — Couple Full Body"],
      5: ["Day 1 — Couple Push", "Day 2 — Couple Pull", "Day 3 — Couple Legs", "Day 4 — Couple Conditioning", "Day 5 — Couple Full Body"],
      6: ["Day 1 — Couple Push", "Day 2 — Couple Pull", "Day 3 — Couple Legs", "Day 4 — Couple Cardio", "Day 5 — Couple Glutes/Core", "Day 6 — Couple Full Body"],
    },
  };

  return plans[focus]?.[days] || plans["Full Body"][3];
}


// Compatibility wrapper: use this when a component needs translated plan logic output.
export function getTranslatedPlanLogicResult(plan = {}, language = "en") {
  return translatePlanLogicObject(normalizePlanLogicResult(plan), language);
}
