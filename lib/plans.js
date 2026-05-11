
// Fit Couple Club plans helpers v2
// Removes old Starter/Premium wording and adds EN/NL translation-ready access labels.

export const PLAN_ACCESS_LEVELS = {
  nutrition: {
    en: "Nutrition",
    nl: "Voeding",
  },
  full_access: {
    en: "Full Access",
    nl: "Full Access",
  },
  vip: {
    en: "VIP",
    nl: "VIP",
  },
  coaching: {
    en: "Coaching",
    nl: "Coaching",
  },
};

export function normalizePlanAccess(value = "full_access") {
  const clean = String(value || "").toLowerCase().trim();

  if (
    clean === "starter" ||
    clean === "premium" ||
    clean === "fitness" ||
    clean === "workouts"
  ) {
    return "full_access";
  }

  if (clean === "full access" || clean === "full-access" || clean === "full_access") {
    return "full_access";
  }

  if (clean === "nutrition") return "nutrition";
  if (clean === "vip") return "vip";
  if (clean === "coaching") return "coaching";

  return "full_access";
}

export function getPlanAccessLabel(value = "full_access", language = "en") {
  const normalized = normalizePlanAccess(value);
  return PLAN_ACCESS_LEVELS?.[normalized]?.[language] || PLAN_ACCESS_LEVELS.full_access.en;
}

export function translatePlanText(value, language = "en") {
  if (!value || language !== "nl") return value || "";

  const exactMap = {
    "Full Access": "Full Access",
    "Full Access": "Full Access",
    "Full Access": "Full Access",
    "Nutrition": "Voeding",
    "VIP": "VIP",
    "Coaching": "Coaching",
    "Glute Foundation": "Glute Foundation",
    "Curves & Control": "Curves & Control",
    "Glutes + Hamstrings": "Billen + Hamstrings",
    "Lift & Shape": "Lift & Shape",
    "Elite Glute Density": "Elite Glute Density",
    "Heavy Glute Strength": "Heavy Glute Strength",
    "Glute Volume Phase": "Glute Volume Fase",
    "Glute Lift Premium": "Glute Lift Premium",
    "Moderate Intensity": "Gemiddelde Intensiteit",
    "High Intensity": "Hoge Intensiteit",
    "Low Intensity": "Lage Intensiteit",
    "Beginner": "Beginner",
    "Intermediate": "Gemiddeld",
    "Advanced": "Gevorderd",
  };

  if (exactMap[value]) return exactMap[value];

  const replacements = [
    ["Full Access", "Full Access"],
    ["Full Access", "Full Access"],
    ["Workout", "Training"],
    ["Workouts", "Trainingen"],
    ["Program", "Programma"],
    ["Plan", "Schema"],
    ["Routine", "Routine"],
    ["Glutes", "Billen"],
    ["Glute", "Bil"],
    ["Booty", "Billen"],
    ["Hamstrings", "Hamstrings"],
    ["Legs", "Benen"],
    ["Upper Body", "Bovenlichaam"],
    ["Lower Body", "Onderlichaam"],
    ["Full Body", "Full Body"],
    ["Abs", "Buikspieren"],
    ["Core", "Core"],
    ["Strength", "Kracht"],
    ["Volume", "Volume"],
    ["Density", "Dichtheid"],
    ["Foundation", "Basis"],
    ["Beginner", "Beginner"],
    ["Intermediate", "Gemiddeld"],
    ["Advanced", "Gevorderd"],
    ["Moderate Intensity", "Gemiddelde Intensiteit"],
    ["High Intensity", "Hoge Intensiteit"],
    ["Low Intensity", "Lage Intensiteit"],
    ["days / week", "dagen / week"],
    ["day / week", "dag / week"],
    ["days per week", "dagen per week"],
    ["day per week", "dag per week"],
    ["Sets", "Sets"],
    ["Reps", "Herhalingen"],
    ["Rest", "Rust"],
    ["Notes", "Notities"],
    ["Warm-up", "Warming-up"],
    ["Cooldown", "Cooling-down"],
  ];

  let output = String(value);

  replacements.forEach(([from, to]) => {
    output = output.split(from).join(to);
  });

  return output;
}

export function translatePlanObject(item, language = "en") {
  if (!item || language !== "nl") return item;

  if (typeof item === "string") {
    return translatePlanText(item, language);
  }

  if (Array.isArray(item)) {
    return item.map((entry) => translatePlanObject(entry, language));
  }

  if (typeof item === "object") {
    const translated = {};

    Object.entries(item).forEach(([key, value]) => {
      translated[key] = translatePlanObject(value, language);
    });

    return translated;
  }

  return item;
}

export function normalizePlanItem(plan = {}) {
  const currentAccess =
    plan.access ||
    plan.tier ||
    plan.level ||
    plan.membership ||
    plan.planType ||
    "full_access";

  return {
    ...plan,
    access: normalizePlanAccess(currentAccess),
    tier: normalizePlanAccess(currentAccess),
    membership: normalizePlanAccess(currentAccess),
  };
}

export function normalizePlansList(plans = []) {
  return plans.map((plan) => normalizePlanItem(plan));
}


export const MEMBERSHIP_PLANS = [
  {
    id: "nutrition",
    name: "Nutrition Only",
    price: "€19.99/mo",
    features: [
      "Full nutrition system",
      "Recipe library",
      "Meal planning tools",
      "Calorie & macro tracking"
    ],
    stripePriceId: process.env.NEXT_PUBLIC_STRIPE_PRICE_NUTRITION,
  },
  {
    id: "full_access",
    name: "Full Access",
    price: "€29.99/mo",
    features: [
      "All workouts & programs",
      "Nutrition + recipes",
      "Plan builder",
      "Progress tracking",
      "Couple Zone access"
    ],
    stripePriceId: process.env.NEXT_PUBLIC_STRIPE_PRICE_FULL_ACCESS,
  },
  {
    id: "vip",
    name: "VIP",
    price: "€99/mo",
    features: [
      "Everything in Full Access",
      "Monthly 1-on-1 video call",
      "Priority support"
    ],
    stripePriceId: process.env.NEXT_PUBLIC_STRIPE_PRICE_VIP,
  },
  {
    id: "coaching",
    name: "Coaching",
    price: "€349/mo",
    features: [
      "Everything in VIP",
      "Weekly 1-on-1 calls",
      "Fully custom plan",
      "Direct support access",
      "Coaching by Niels & Rosanna"
    ],
    stripePriceId: process.env.NEXT_PUBLIC_STRIPE_PRICE_COACHING,
  }
];


// Translation-ready accessors for client components.
export function getTranslatedPlans(language = "en") {
  return translatePlanObject(normalizePlansList(plans || workoutPlans || programs || []), language);
}

export function getMobilePlanCardMeta(plan = {}, language = "en") {
  const normalized = normalizePlanItem(plan);

  return {
    ...normalized,
    title: translatePlanText(normalized.title || normalized.name || "", language),
    accessLabel: getPlanAccessLabel(normalized.access, language),
    intensityLabel: translatePlanText(normalized.intensity || normalized.difficulty || "", language),
    levelLabel: translatePlanText(normalized.level || normalized.experience || "", language),
    daysLabel: translatePlanText(
      normalized.daysPerWeek
        ? `${normalized.daysPerWeek} days / week`
        : normalized.days
        ? `${normalized.days} days / week`
        : "",
      language
    ),
  };
}
