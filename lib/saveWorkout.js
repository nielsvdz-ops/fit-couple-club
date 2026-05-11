import { createClient } from "@supabase/supabase-js";

// Translation helpers for saved workouts.
// This keeps save logic compatible while making messages and saved workout labels EN/NL ready.

export const SAVE_WORKOUT_TEXT = {
  en: {
    saved: SAVE_WORKOUT_TEXT.en.saved,
    updated: SAVE_WORKOUT_TEXT.en.updated,
    failed: SAVE_WORKOUT_TEXT.en.failed,
    missingUser: SAVE_WORKOUT_TEXT.en.missingUser,
    missingWorkout: SAVE_WORKOUT_TEXT.en.missingWorkout,
    savedWorkout: "Saved workout",
    customWorkout: "Custom workout",
    planBuilderWorkout: "Plan Builder workout",
    startWorkout: "Start workout",
    continueWorkout: "Continue workout",
    deleteWorkout: "Delete workout",
    workoutName: "Workout name",
    createdAt: "Created at",
    goal: "Goal",
    focus: "Focus",
    trainingDays: "Training days",
    bodyType: "Body type",
    experience: "Experience",
    lifestyle: "Lifestyle",
  },
  nl: {
    saved: "Training succesvol opgeslagen.",
    updated: "Training succesvol bijgewerkt.",
    failed: "Training kon niet worden opgeslagen. Probeer het opnieuw.",
    missingUser: "Je moet ingelogd zijn om een training op te slaan.",
    missingWorkout: "Geen training geselecteerd.",
    savedWorkout: "Opgeslagen training",
    customWorkout: "Aangepaste training",
    planBuilderWorkout: "Plan Bouwer training",
    startWorkout: "Start training",
    continueWorkout: "Ga verder met training",
    deleteWorkout: "Verwijder training",
    workoutName: "Naam training",
    createdAt: "Aangemaakt op",
    goal: "Doel",
    focus: "Focus",
    trainingDays: "Trainingsdagen",
    bodyType: "Lichaamstype",
    experience: "Ervaring",
    lifestyle: "Lifestyle",
  },
};

export function getSaveWorkoutText(key, language = "en") {
  return SAVE_WORKOUT_TEXT?.[language]?.[key] || SAVE_WORKOUT_TEXT.en[key] || key;
}

export function translateSavedWorkoutText(value, language = "en") {
  if (!value || language !== "nl") return value || "";

  const exactMap = {
    SAVE_WORKOUT_TEXT.en.saved: "Training succesvol opgeslagen.",
    SAVE_WORKOUT_TEXT.en.updated: "Training succesvol bijgewerkt.",
    SAVE_WORKOUT_TEXT.en.failed: "Training kon niet worden opgeslagen. Probeer het opnieuw.",
    SAVE_WORKOUT_TEXT.en.missingUser: "Je moet ingelogd zijn om een training op te slaan.",
    SAVE_WORKOUT_TEXT.en.missingWorkout: "Geen training geselecteerd.",
    "Saved workout": "Opgeslagen training",
    "Custom workout": "Aangepaste training",
    "Plan Builder workout": "Plan Bouwer training",
    "Start workout": "Start training",
    "Continue workout": "Ga verder met training",
    "Delete workout": "Verwijder training",
    "Lose Fat": "Vetverlies",
    "Build Muscle": "Spieropbouw",
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
  };

  if (exactMap[value]) return exactMap[value];

  const replacements = [
    ["Workout", "Training"],
    ["Workouts", "Trainingen"],
    ["Plan Builder", "Plan Bouwer"],
    ["Saved", "Opgeslagen"],
    ["Custom", "Aangepaste"],
    ["Goal", "Doel"],
    ["Focus", "Focus"],
    ["Training days", "Trainingsdagen"],
    ["Body type", "Lichaamstype"],
    ["Experience", "Ervaring"],
    ["Lifestyle", "Lifestyle"],
    ["Exercises", "Oefeningen"],
    ["Sets", "Sets"],
    ["Reps", "Herhalingen"],
    ["Rest", "Rust"],
    ["Notes", "Notities"],
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
    ["Recovery", "Herstel"],
    ["Mobility", "Mobiliteit"],
    ["Glutes", "Billen"],
    ["Booty", "Billen"],
    ["Chest", "Borst"],
    ["Back", "Rug"],
    ["Shoulders", "Schouders"],
    ["Arms", "Armen"],
    ["Core", "Core"],
    ["Controlled", "Gecontroleerd"],
    ["Optional", "Optioneel"],
    ["Recommended", "Aanbevolen"],
  ];

  let output = String(value);

  replacements.forEach(([from, to]) => {
    output = output.split(from).join(to);
  });

  return output;
}

export function translateSavedWorkoutObject(item, language = "en") {
  if (!item || language !== "nl") return item;

  if (typeof item === "string") {
    return translateSavedWorkoutText(item, language);
  }

  if (Array.isArray(item)) {
    return item.map((entry) => translateSavedWorkoutObject(entry, language));
  }

  if (typeof item === "object") {
    const translated = {};

    Object.entries(item).forEach(([key, value]) => {
      translated[key] = translateSavedWorkoutObject(value, language);
    });

    return translated;
  }

  return item;
}

export function normalizeSavedWorkoutPayload(workout = {}) {
  return {
    ...workout,
    savedAt: workout.savedAt || workout.createdAt || new Date().toISOString(),
    source: workout.source || "plan-builder",
    type: workout.type || "workout",
  };
}

export function getSavedWorkoutCardMeta(workout = {}, language = "en") {
  const normalized = normalizeSavedWorkoutPayload(workout);

  return {
    title: translateSavedWorkoutText(
      normalized.title || normalized.name || SAVE_WORKOUT_TEXT.en.savedWorkout,
      language
    ),
    subtitle: translateSavedWorkoutText(
      normalized.goal || normalized.focus || normalized.type || "",
      language
    ),
    sourceLabel: translateSavedWorkoutText(
      normalized.source === "plan-builder"
        ? SAVE_WORKOUT_TEXT.en.planBuilderWorkout
        : SAVE_WORKOUT_TEXT.en.customWorkout,
      language
    ),
    createdAt: normalized.savedAt,
  };
}



const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export async function saveWorkout(userId, workout) {
  return await supabase.from("user_workouts").insert([
    {
      user_id: userId,
      week: new Date().getWeek?.() || 1,
      workout,
    },
  ]);
}


// Optional helper: use this before saving if your component builds workout objects manually.
export function prepareWorkoutForSave(workout = {}) {
  return normalizeSavedWorkoutPayload(workout);
}
