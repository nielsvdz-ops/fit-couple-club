// app/onboarding/page.js
// Put this file in: app/onboarding/page.js
//
// Required images:
// public/images/profile-types/men.png
// public/images/profile-types/female.png
// public/images/profile-types/couple.png
// public/images/body-types/slim.png
// public/images/body-types/athletic.png
// public/images/body-types/average.png
// public/images/body-types/heavy-set.png

"use client";

import { useMemo, useState } from "react";
import { createClient } from "../../lib/supabase/client";

const PROFILE_TYPES = [
  {
    value: "men",
    title: "Men",
    image: "/images/profile-types/men.png",
    text: "A personal physique plan for men.",
  },
  {
    value: "female",
    title: "Female",
    image: "/images/profile-types/female.png",
    text: "A personal physique plan for women.",
  },
  {
    value: "couple",
    title: "Couple",
    image: "/images/profile-types/couple.png",
    text: "A shared transformation system for two partners.",
  },
];

const GOALS = [
  {
    value: "lose-fat",
    title: "Lose Fat",
    text: "Lower body fat, better condition and a leaner look.",
  },
  {
    value: "build-muscle",
    title: "Build Muscle",
    text: "Gain muscle, strength and shape with progressive structure.",
  },
  {
    value: "tone-shape",
    title: "Tone & Shape",
    text: "Improve shape, waistline, posture and definition.",
  },
  {
    value: "athletic-performance",
    title: "Athletic Performance",
    text: "Build fitness, strength, stamina and athletic habits.",
  },
];

const BODY_TYPES = [
  {
    value: "slim",
    title: "Slim",
    image: "/images/body-types/slim.png",
    text: "Naturally lighter. Usually needs muscle, shape and healthy structure.",
    bmiOffset: -1.2,
    timelineMultiplier: 1.05,
  },
  {
    value: "athletic",
    title: "Athletic",
    image: "/images/body-types/athletic.png",
    text: "Sporty or muscular. BMI can look higher because muscle weighs more.",
    bmiOffset: -2.2,
    timelineMultiplier: 0.9,
  },
  {
    value: "average",
    title: "Average",
    image: "/images/body-types/average.png",
    text: "Normal starting point. Good for fat loss, tone or muscle goals.",
    bmiOffset: 0,
    timelineMultiplier: 1,
  },
  {
    value: "heavy-set",
    title: "Heavy Set",
    image: "/images/body-types/heavy-set.png",
    text: "Higher body fat/bodyweight. Plan starts safer and more gradual.",
    bmiOffset: 1.5,
    timelineMultiplier: 1.15,
  },
];

const DIETS = [
  { value: "balanced", title: "Balanced" },
  { value: "high-protein", title: "High Protein" },
  { value: "vegan", title: "Vegan" },
  { value: "vegetarian", title: "Vegetarian" },
];

const ALLERGIES = [
  { value: "gluten_free", title: "Gluten Free" },
  { value: "lactose_free", title: "Lactose Free" },
  { value: "nut_free", title: "Nut Free" },
  { value: "shellfish_free", title: "Shellfish Free" },
];

const WORKOUT_TYPES = [
  { value: "training-food", title: "Training + Food" },
  { value: "food-only", title: "Food Only" },
  { value: "training-only", title: "Training Only" },
];

const TRAINING_LOCATIONS = ["Gym", "Home", "Hybrid"];
const EXPERIENCE_LEVELS = ["Beginner", "Intermediate", "Advanced"];
const FASTING_WINDOWS = ["12:12", "14:10", "16:8", "18:6", "20:4"];

const WEEK_DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

function numberValue(value) {
  const number = Number(String(value || "").replace(",", "."));
  return Number.isFinite(number) ? number : 0;
}

function round1(value) {
  return Math.round(Number(value || 0) * 10) / 10;
}

function getTitle(options, value) {
  return options.find((item) => item.value === value)?.title || value || "";
}

function calculateBmi(weightKg, heightCm) {
  const weight = numberValue(weightKg);
  const height = numberValue(heightCm) / 100;

  if (!weight || !height) return null;

  return round1(weight / (height * height));
}

function getAdjustedBmi(rawBmi, bodyType) {
  if (!rawBmi) return null;
  const type = BODY_TYPES.find((item) => item.value === bodyType);
  return round1(rawBmi + (type?.bmiOffset || 0));
}

function getBmiLabel(rawBmi, bodyType) {
  const adjusted = getAdjustedBmi(rawBmi, bodyType);
  const value = adjusted || rawBmi;

  if (!value) return "Complete weight and height";

  if (bodyType === "athletic") {
    if (value < 20) return "Lean athletic range";
    if (value < 26) return "Athletic / muscular range";
    if (value < 29) return "High muscle or body mass";
    return "Very high body mass";
  }

  if (bodyType === "slim") {
    if (value < 18.5) return "Very slim range";
    if (value < 24) return "Slim healthy range";
    return "This may not match Slim well";
  }

  if (bodyType === "heavy-set") {
    if (value < 23) return "This may not match Heavy Set well";
    if (value < 30) return "Higher bodyweight range";
    return "High bodyweight range";
  }

  if (value < 18.5) return "Lean / underweight range";
  if (value < 25) return "Healthy range";
  if (value < 30) return "Overweight range";
  return "High bodyweight range";
}

function getBodyTypeWarning(bodyType, rawBmi) {
  if (!bodyType || !rawBmi) return "";

  if (bodyType === "slim" && rawBmi >= 27) {
    return "Slim usually does not match this BMI. Check weight/height or choose Average/Athletic.";
  }

  if (bodyType === "athletic" && rawBmi >= 32) {
    return "Athletic can have a higher BMI, but this is very high. Check stats or choose another body type.";
  }

  if (bodyType === "heavy-set" && rawBmi < 23) {
    return "Heavy Set usually does not match this BMI. Check stats or choose another body type.";
  }

  return "";
}

function getGoalConflictMessage({ goal, weight, targetWeight }) {
  if (!goal) return "";

  const current = numberValue(weight);
  const target = numberValue(targetWeight);

  if (!current || !target) return "";

  const difference = round1(Math.abs(target - current));

  if (goal === "lose-fat" && target >= current) {
    return `Your target is ${difference} kg higher than your current weight. That does not usually match Lose Fat. Keep this target if you want, but Build Muscle, Tone & Shape or Athletic Performance fits it better.`;
  }

  if (goal === "build-muscle" && target <= current) {
    return `Your target is ${difference} kg lower than your current weight. That does not usually match Build Muscle. Keep this target if you want, but Lose Fat or Tone & Shape fits it better.`;
  }

  if (goal === "tone-shape" && difference > 12) {
    return "Tone & Shape is normally a recomposition goal. Your target change is large, so the roadmap becomes longer and more gradual.";
  }

  if (goal === "athletic-performance" && difference > 10) {
    return "Athletic Performance is mostly about strength, cardio and habits. Because your target change is large, the roadmap will combine performance with body composition.";
  }

  return "";
}

function getExperienceMultiplier(experience) {
  if (experience === "Advanced") return 0.9;
  if (experience === "Intermediate") return 1;
  return 1.15;
}

function getWorkoutMultiplier(workoutType) {
  if (workoutType === "food-only") return 1.35;
  if (workoutType === "training-only") return 1.25;
  return 1;
}

function getBodyMultiplier(bodyType) {
  return BODY_TYPES.find((item) => item.value === bodyType)?.timelineMultiplier || 1;
}

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
    // Normal fat loss pace. If the user chose a higher target, treat it as recomposition/incorrect-goal timeline instead of changing their target.
    weeks = isLowerTarget ? kgChange / 0.55 : kgChange / 0.25 + 8;
  }

  if (goal === "build-muscle") {
    const pace =
      experience === "Advanced" ? 0.16 : experience === "Intermediate" ? 0.23 : 0.32;
    weeks = isHigherTarget ? kgChange / pace : kgChange / 0.35 + 8;
  }

  if (goal === "tone-shape") {
    // Tone is slower because scale weight may not move much.
    weeks = kgChange <= 3 ? 10 : kgChange / 0.35 + 6;
  }

  if (goal === "athletic-performance") {
    weeks = kgChange <= 5 ? 12 : kgChange / 0.45 + 8;
  }

  const total = weeks * getBodyMultiplier(bodyType) * getExperienceMultiplier(experience) * getWorkoutMultiplier(workoutType);

  return Math.max(4, Math.min(78, Math.ceil(total)));
}

function buildEstimatedText(weeks, goal) {
  if (!goal) return "Select your goal to calculate timeline";
  if (!weeks) return "Complete your stats to calculate timeline";
  return `${weeks} weeks / about ${Math.ceil(weeks / 4)} months`;
}

function getGoalPhase(goal, weekNumber, totalWeeks) {
  if (!goal) return "Foundation";

  const progress = totalWeeks ? weekNumber / totalWeeks : 0;

  if (progress < 0.25) return "Foundation";
  if (progress < 0.65) return goal === "athletic-performance" ? "Performance Build" : "Progress Build";
  if (progress < 0.9) return "Push Phase";
  return "Final Shape";
}

function workoutForDay({ dayIndex, goal, workoutType, trainingLocation, experience }) {
  if (workoutType === "food-only") return "No workout — nutrition focus day";

  const level = experience || "Beginner";
  const location = trainingLocation || "Hybrid";

  if (dayIndex % 7 === 2 || dayIndex % 7 === 6) {
    return "Recovery, mobility and steps";
  }

  if (goal === "build-muscle") {
    return `${location} hypertrophy workout (${level})`;
  }

  if (goal === "athletic-performance") {
    return `${location} strength + conditioning (${level})`;
  }

  if (goal === "tone-shape") {
    return `${location} full body tone + core (${level})`;
  }

  return `${location} fat loss strength circuit (${level})`;
}

function cardioForDay({ dayIndex, goal, bodyType, workoutType }) {
  if (workoutType === "training-only") return "Nutrition not included — train and track steps";
  if (workoutType === "food-only") return "8,000–12,000 steps";

  if (goal === "lose-fat") {
    return bodyType === "heavy-set"
      ? "30–45 min incline walk or zone 2 cardio"
      : "20–35 min zone 2 cardio + 10,000 steps";
  }

  if (goal === "build-muscle") {
    return dayIndex % 2 === 0 ? "6,000–9,000 steps" : "Optional light recovery cardio";
  }

  if (goal === "athletic-performance") {
    return dayIndex % 3 === 0 ? "Intervals or conditioning" : "10,000–14,000 steps";
  }

  return "8,000–12,000 steps";
}

function nutritionForDay({ goal, dietType, workoutType }) {
  if (workoutType === "training-only") return "Training only selected — nutrition plan not included";

  const diet = getTitle(DIETS, dietType) || "Balanced";

  if (goal === "lose-fat") return `${diet} meal plan in a controlled calorie deficit`;
  if (goal === "build-muscle") return `${diet} high protein meal plan with calorie surplus`;
  if (goal === "athletic-performance") return `${diet} performance fuel with carbs around training`;

  return `${diet} recomposition meal plan with high protein`;
}

function addDays(date, days) {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

function formatDate(date) {
  return date.toISOString().slice(0, 10);
}

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
}) {
  const weeks = Math.max(1, numberValue(estimatedWeeks) || 4);
  const days = Math.min(weeks * 7, 365);
  const start = new Date();

  return Array.from({ length: days }, (_, index) => {
    const date = addDays(start, index);
    const weekNumber = Math.floor(index / 7) + 1;
    const dayName = WEEK_DAYS[index % 7];

    return {
      date: formatDate(date),
      day: dayName,
      week: weekNumber,
      phase: getGoalPhase(goal, weekNumber, weeks),
      workout: workoutForDay({
        dayIndex: index,
        goal,
        workoutType,
        trainingLocation,
        experience,
      }),
      cardio: cardioForDay({
        dayIndex: index,
        goal,
        bodyType,
        workoutType,
      }),
      nutrition: nutritionForDay({
        goal,
        dietType,
        workoutType,
      }),
      fasting: fastingEnabled ? `Fasting window ${fastingWindow || "16:8"}` : "No fasting",
      accountability: partner
        ? `Couple check-in with ${partner.name || "partner"}`
        : "Daily check-in: training, steps, nutrition and mood",
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
    proteins = proteins.filter(
      (item) => !["Greek yogurt", "cottage cheese"].includes(item)
    );
    proteins.push("lactose-free protein option");
  }

  if (allergyValues.includes("shellfish_free")) {
    proteins = proteins.filter((item) => item !== "shrimp");
  }

  const carbs =
    goal === "build-muscle" || partnerGoal === "build-muscle"
      ? ["rice", "oats", "potatoes", "pasta", "bananas"]
      : ["rice", "oats", "sweet potato", "berries", "vegetables"];

  const fats = allergyValues.includes("nut_free")
    ? ["olive oil", "avocado", "seeds"]
    : ["olive oil", "avocado", "almonds", "peanut butter"];

  const base = [
    ...proteins,
    ...carbs,
    ...fats,
    "broccoli",
    "spinach",
    "cucumber",
    "tomatoes",
  ];

  if (profileType === "couple") {
    base.push("extra shared meal prep containers", "couple snack options");
  }

  return Array.from(new Set(base));
}

function buildRoadmap({ goal, estimatedWeeks, bodyType }) {
  const weeks = numberValue(estimatedWeeks) || 8;

  return [
    {
      title: "Foundation",
      weeks: `Week 1–${Math.max(2, Math.ceil(weeks * 0.25))}`,
      text: "Build routine, steps, food structure and baseline training form.",
    },
    {
      title: "Progress Build",
      weeks: `Week ${Math.max(3, Math.ceil(weeks * 0.25))}–${Math.ceil(weeks * 0.65)}`,
      text:
        goal === "build-muscle"
          ? "Increase volume, protein consistency and recovery."
          : "Increase consistency, calorie control and visible progress habits.",
    },
    {
      title: "Push Phase",
      weeks: `Week ${Math.ceil(weeks * 0.65)}–${weeks}`,
      text:
        bodyType === "heavy-set"
          ? "Keep intensity safe while improving conditioning and weekly adherence."
          : "Push performance, shape and consistency toward the target.",
    },
  ];
}

function buildAccountabilitySystem(profileType) {
  return {
    mode: profileType === "couple" ? "couple" : "solo",
    checkins: ["weight", "steps", "training", "nutrition", "mood"],
    scoring:
      profileType === "couple"
        ? "Combined weekly couple score plus individual score"
        : "Individual weekly score",
    streaks:
      profileType === "couple"
        ? "Shared streak when both partners complete check-ins"
        : "Solo streak for completed check-ins",
  };
}

export default function OnboardingPage() {
  const supabase = createClient();

  const [loading, setLoading] = useState(false);

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

  const [partnerName, setPartnerName] = useState("");
  const [partnerAge, setPartnerAge] = useState("");
  const [partnerWeight, setPartnerWeight] = useState("");
  const [partnerHeight, setPartnerHeight] = useState("");
  const [partnerTargetWeight, setPartnerTargetWeight] = useState("");
  const [partnerGoal, setPartnerGoal] = useState("");
  const [partnerBodyType, setPartnerBodyType] = useState("");
  const [partnerExperience, setPartnerExperience] = useState("");

  const isCoupleMode = profileType === "couple";
  const gender = profileType === "men" ? "Male" : profileType === "female" ? "Female" : null;
  const mode = isCoupleMode ? "Couple Mode" : "Solo";

  const bmi = useMemo(() => calculateBmi(weight, height), [weight, height]);
  const adjustedBmi = useMemo(() => getAdjustedBmi(bmi, bodyType), [bmi, bodyType]);

  const partnerBmi = useMemo(
    () => calculateBmi(partnerWeight, partnerHeight),
    [partnerWeight, partnerHeight]
  );

  const partnerAdjustedBmi = useMemo(
    () => getAdjustedBmi(partnerBmi, partnerBodyType),
    [partnerBmi, partnerBodyType]
  );

  const goalConflictMessage = useMemo(
    () => getGoalConflictMessage({ goal, weight, targetWeight }),
    [goal, weight, targetWeight]
  );

  const partnerGoalConflictMessage = useMemo(
    () =>
      getGoalConflictMessage({
        goal: partnerGoal,
        weight: partnerWeight,
        targetWeight: partnerTargetWeight,
      }),
    [partnerGoal, partnerWeight, partnerTargetWeight]
  );

  const estimatedWeeks = useMemo(
    () =>
      estimateTransformationWeeks({
        goal,
        weight,
        targetWeight,
        bodyType,
        experience: experienceLevel,
        workoutType,
      }),
    [goal, weight, targetWeight, bodyType, experienceLevel, workoutType]
  );

  const partnerEstimatedWeeks = useMemo(
    () =>
      estimateTransformationWeeks({
        goal: partnerGoal,
        weight: partnerWeight,
        targetWeight: partnerTargetWeight,
        bodyType: partnerBodyType,
        experience: partnerExperience,
        workoutType,
      }),
    [partnerGoal, partnerWeight, partnerTargetWeight, partnerBodyType, partnerExperience, workoutType]
  );

  const combinedEstimatedWeeks = useMemo(() => {
    if (!isCoupleMode) return estimatedWeeks;
    return Math.max(numberValue(estimatedWeeks), numberValue(partnerEstimatedWeeks)) || null;
  }, [isCoupleMode, estimatedWeeks, partnerEstimatedWeeks]);

  const groceryList = useMemo(
    () =>
      buildGroceryList({
        goal,
        dietType,
        allergies,
        profileType,
        partnerGoal,
      }),
    [goal, dietType, allergies, profileType, partnerGoal]
  );

  const fullCalendarPlan = useMemo(
    () =>
      buildCalendarPlan({
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
      }),
    [
      goal,
      workoutType,
      trainingLocation,
      fastingEnabled,
      fastingWindow,
      combinedEstimatedWeeks,
      dietType,
      bodyType,
      experienceLevel,
      isCoupleMode,
      partnerName,
      partnerGoal,
    ]
  );

  const roadmap = useMemo(
    () => buildRoadmap({ goal, estimatedWeeks: combinedEstimatedWeeks, bodyType }),
    [goal, combinedEstimatedWeeks, bodyType]
  );

  const accountabilitySystem = useMemo(
    () => buildAccountabilitySystem(profileType),
    [profileType]
  );

  const bodyTypeWarning = getBodyTypeWarning(bodyType, bmi);
  const partnerBodyTypeWarning = getBodyTypeWarning(partnerBodyType, partnerBmi);

  function toggleAllergy(value) {
    setAllergies((prev) =>
      prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
    );
  }

  function validateBeforeSave() {
    if (!profileType) return "Choose Men, Female or Couple.";
    if (!age || !weight || !height || !targetWeight) {
      return "Fill in your age, weight, height and target weight.";
    }
    if (!bodyType) return "Choose your current body type.";
    if (!goal) return "Choose your goal.";
    if (workoutType !== "food-only" && !trainingLocation) {
      return "Choose your training location.";
    }
    if (workoutType !== "food-only" && !experienceLevel) {
      return "Choose your training experience.";
    }

    if (isCoupleMode) {
      if (!partnerName) return "Fill in partner name.";
      if (!partnerAge || !partnerWeight || !partnerHeight || !partnerTargetWeight) {
        return "Fill in partner age, weight, height and target weight.";
      }
      if (!partnerBodyType) return "Choose partner current body type.";
      if (!partnerGoal) return "Choose partner goal.";
      if (workoutType !== "food-only" && !partnerExperience) {
        return "Choose partner training experience.";
      }
    }

    return "";
  }

  function buildOnboardingPayload(userId = null) {
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
      bmi_label: getBmiLabel(bmi, bodyType),

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

      partner_profile: isCoupleMode
        ? {
            name: partnerName,
            age: partnerAge ? Number(partnerAge) : null,
            weight_kg: partnerWeight ? Number(partnerWeight) : null,
            height_cm: partnerHeight ? Number(partnerHeight) : null,
            target_weight_kg: partnerTargetWeight ? Number(partnerTargetWeight) : null,
            bmi: partnerBmi ? Number(partnerBmi) : null,
            adjusted_bmi: partnerAdjustedBmi ? Number(partnerAdjustedBmi) : null,
            bmi_label: getBmiLabel(partnerBmi, partnerBodyType),
            goal: partnerGoal,
            body_type: partnerBodyType,
            experience_level: partnerExperience,
            estimated_weeks: partnerEstimatedWeeks,
          }
        : null,

      grocery_list: groceryList,
      calendar_plan: fullCalendarPlan,
      transformation_roadmap: roadmap,
      accountability_system: accountabilitySystem,
    };
  }

  async function handleSave() {
    try {
      const validationMessage = validateBeforeSave();

      if (validationMessage) {
        alert(validationMessage);
        return;
      }

      setLoading(true);

      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        const pendingPayload = buildOnboardingPayload();

        localStorage.setItem(
          "fit_onboarding_pending",
          JSON.stringify({
            saved_at: new Date().toISOString(),
            data: pendingPayload,
          })
        );

        window.location.href = "/signup?from=onboarding";
        return;
      }

      const payload = buildOnboardingPayload(user.id);

      const { error } = await supabase.from("member_preferences").upsert(payload);

      if (error) {
        console.error(error);
        alert(error.message);
        return;
      }

      localStorage.removeItem("fit_onboarding_pending");
      window.location.href = "/dashboard";
    } catch (error) {
      console.error(error);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main style={main}>
      <div style={overlay} />

      <section style={card}>
        <div style={eyebrow}>FIT COUPLE CLUB</div>

        <h1 style={title}>Build your personalized system.</h1>

        <p style={subtitle}>
          Your nutrition, workouts, fasting structure and transformation timeline adapt
          to your profile, body type, goal, target weight, training setup and Couple Mode.
        </p>

        <div style={section}>
          <h3 style={sectionTitle}>Your Profile</h3>
          <p style={miniDescription}>
            Choose one. This replaces the old Male/Female and Solo/Couple buttons.
          </p>

          <div style={profileGrid}>
            {PROFILE_TYPES.map((item) => (
              <button
                key={item.value}
                type="button"
                onClick={() => setProfileType(item.value)}
                style={imageCard(profileType === item.value)}
              >
                <img src={item.image} alt={item.title} style={profileImage} />
                <strong>{item.title}</strong>
                <small>{item.text}</small>
              </button>
            ))}
          </div>
        </div>

        <div style={section}>
          <h3 style={sectionTitle}>Body Stats</h3>

          <div style={inputGrid}>
            <label style={field}>
              Age
              <input
                style={input}
                value={age}
                onChange={(event) => setAge(event.target.value)}
                placeholder="36"
                inputMode="numeric"
              />
            </label>

            <label style={field}>
              Weight kg
              <input
                style={input}
                value={weight}
                onChange={(event) => setWeight(event.target.value)}
                placeholder="93"
                inputMode="decimal"
              />
            </label>

            <label style={field}>
              Height cm
              <input
                style={input}
                value={height}
                onChange={(event) => setHeight(event.target.value)}
                placeholder="188"
                inputMode="decimal"
              />
            </label>

            <label style={field}>
              Target weight kg
              <input
                style={input}
                value={targetWeight}
                onChange={(event) => setTargetWeight(event.target.value)}
                placeholder="86"
                inputMode="decimal"
              />
            </label>
          </div>

          {goalConflictMessage && <p style={warningText}>{goalConflictMessage}</p>}
        </div>

        <div style={resultGrid}>
          <div style={resultCard}>
            <span style={smallLabel}>BMI</span>
            <strong style={resultNumber}>{bmi || "—"}</strong>
            <small style={mutedText}>{getBmiLabel(bmi, bodyType)}</small>
            {bodyType && bmi && (
              <small style={mutedText}>
                Body-type adjusted BMI: {adjustedBmi}
              </small>
            )}
            {bodyTypeWarning && <small style={warningText}>{bodyTypeWarning}</small>}
          </div>

          <div style={resultCard}>
            <span style={smallLabel}>Estimated Time</span>
            <strong style={resultNumber}>{buildEstimatedText(estimatedWeeks, goal)}</strong>
            <small style={mutedText}>
              Uses your goal, current weight, target weight, body type, training type and experience.
            </small>
          </div>
        </div>

        <div style={section}>
          <h3 style={sectionTitle}>Goal</h3>
          <p style={miniDescription}>
            Choose the goal that best matches your target. The app warns you if the target and goal do not match, but it never changes your target.
          </p>

          <div style={choiceGrid}>
            {GOALS.map((item) => (
              <button
                key={item.value}
                type="button"
                onClick={() => setGoal(item.value)}
                style={option(goal === item.value)}
              >
                <strong>{item.title}</strong>
                <small>{item.text}</small>
              </button>
            ))}
          </div>
        </div>

        <div style={section}>
          <h3 style={sectionTitle}>Training, food or both?</h3>

          <div style={grid}>
            {WORKOUT_TYPES.map((item) => (
              <button
                key={item.value}
                type="button"
                onClick={() => setWorkoutType(item.value)}
                style={option(workoutType === item.value)}
              >
                {item.title}
              </button>
            ))}
          </div>
        </div>

        <div style={section}>
          <h3 style={sectionTitle}>Diet Style</h3>

          <div style={grid}>
            {DIETS.map((item) => (
              <button
                key={item.value}
                type="button"
                onClick={() => setDietType(item.value)}
                style={option(dietType === item.value)}
              >
                {item.title}
              </button>
            ))}
          </div>
        </div>

        <div style={section}>
          <h3 style={sectionTitle}>Allergies & Filters</h3>
          <p style={miniDescription}>Only select what you really need to avoid.</p>

          <div style={grid}>
            {ALLERGIES.map((item) => (
              <button
                key={item.value}
                type="button"
                onClick={() => toggleAllergy(item.value)}
                style={option(allergies.includes(item.value))}
              >
                {item.title}
              </button>
            ))}
          </div>
        </div>

        <div style={section}>
          <h3 style={sectionTitle}>Intermittent Fasting</h3>

          <label style={toggle}>
            <input
              type="checkbox"
              checked={fastingEnabled}
              onChange={(event) => setFastingEnabled(event.target.checked)}
            />
            Enable fasting mode
          </label>

          {fastingEnabled && (
            <div style={gridWithTop}>
              {FASTING_WINDOWS.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setFastingWindow(item)}
                  style={option(fastingWindow === item)}
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>

        {workoutType !== "food-only" && (
          <>
            <div style={section}>
              <h3 style={sectionTitle}>Training Location</h3>

              <div style={grid}>
                {TRAINING_LOCATIONS.map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setTrainingLocation(item)}
                    style={option(trainingLocation === item)}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            <div style={section}>
              <h3 style={sectionTitle}>Experience</h3>

              <div style={grid}>
                {EXPERIENCE_LEVELS.map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setExperienceLevel(item)}
                    style={option(experienceLevel === item)}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          </>
        )}

        <div style={section}>
          <h3 style={sectionTitle}>Current Body Type</h3>
          <p style={miniDescription}>
            Pick the picture that looks closest to your current body. This changes BMI interpretation, timeline and calendar intensity.
          </p>

          <div style={bodyTypeGrid}>
            {BODY_TYPES.map((item) => (
              <button
                key={item.value}
                type="button"
                onClick={() => setBodyType(item.value)}
                style={imageCard(bodyType === item.value)}
              >
                <img src={item.image} alt={item.title} style={bodyTypeImage} />
                <strong>{item.title}</strong>
                <small>{item.text}</small>
              </button>
            ))}
          </div>
        </div>

        {isCoupleMode && (
          <div style={partnerSection}>
            <h3 style={sectionTitle}>Partner Profile</h3>
            <p style={miniDescription}>
              Couple Mode uses separate stats, body type, goal and timeline for your partner,
              then combines both into one shared calendar and accountability system.
            </p>

            <div style={inputGrid}>
              <label style={field}>
                Partner name
                <input
                  style={input}
                  value={partnerName}
                  onChange={(event) => setPartnerName(event.target.value)}
                  placeholder="Partner name"
                />
              </label>

              <label style={field}>
                Partner age
                <input
                  style={input}
                  value={partnerAge}
                  onChange={(event) => setPartnerAge(event.target.value)}
                  placeholder="28"
                  inputMode="numeric"
                />
              </label>

              <label style={field}>
                Partner weight kg
                <input
                  style={input}
                  value={partnerWeight}
                  onChange={(event) => setPartnerWeight(event.target.value)}
                  placeholder="65"
                  inputMode="decimal"
                />
              </label>

              <label style={field}>
                Partner height cm
                <input
                  style={input}
                  value={partnerHeight}
                  onChange={(event) => setPartnerHeight(event.target.value)}
                  placeholder="170"
                  inputMode="decimal"
                />
              </label>

              <label style={field}>
                Partner target weight kg
                <input
                  style={input}
                  value={partnerTargetWeight}
                  onChange={(event) => setPartnerTargetWeight(event.target.value)}
                  placeholder="60"
                  inputMode="decimal"
                />
              </label>
            </div>

            {partnerGoalConflictMessage && (
              <p style={warningText}>{partnerGoalConflictMessage}</p>
            )}

            <div style={subBlock}>
              <h4 style={subTitle}>Partner Goal</h4>
              <div style={choiceGrid}>
                {GOALS.map((item) => (
                  <button
                    key={item.value}
                    type="button"
                    onClick={() => setPartnerGoal(item.value)}
                    style={option(partnerGoal === item.value)}
                  >
                    <strong>{item.title}</strong>
                    <small>{item.text}</small>
                  </button>
                ))}
              </div>
            </div>

            <div style={subBlock}>
              <h4 style={subTitle}>Partner Body Type</h4>
              <div style={bodyTypeGrid}>
                {BODY_TYPES.map((item) => (
                  <button
                    key={item.value}
                    type="button"
                    onClick={() => setPartnerBodyType(item.value)}
                    style={imageCard(partnerBodyType === item.value)}
                  >
                    <img src={item.image} alt={item.title} style={bodyTypeImage} />
                    <strong>{item.title}</strong>
                    <small>{item.text}</small>
                  </button>
                ))}
              </div>
            </div>

            {workoutType !== "food-only" && (
              <div style={subBlock}>
                <h4 style={subTitle}>Partner Experience</h4>
                <div style={grid}>
                  {EXPERIENCE_LEVELS.map((item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() => setPartnerExperience(item)}
                      style={option(partnerExperience === item)}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div style={resultGrid}>
              <div style={resultCard}>
                <span style={smallLabel}>Partner BMI</span>
                <strong style={resultNumber}>{partnerBmi || "—"}</strong>
                <small style={mutedText}>{getBmiLabel(partnerBmi, partnerBodyType)}</small>
                {partnerBodyType && partnerBmi && (
                  <small style={mutedText}>
                    Body-type adjusted BMI: {partnerAdjustedBmi}
                  </small>
                )}
                {partnerBodyTypeWarning && (
                  <small style={warningText}>{partnerBodyTypeWarning}</small>
                )}
              </div>

              <div style={resultCard}>
                <span style={smallLabel}>Partner Estimated Time</span>
                <strong style={resultNumber}>
                  {buildEstimatedText(partnerEstimatedWeeks, partnerGoal)}
                </strong>
                <small style={mutedText}>
                  The couple calendar uses the longer timeline so both partners stay aligned.
                </small>
              </div>
            </div>
          </div>
        )}

        <div style={lockedPreviewCard}>
          <h3 style={lockedPreviewTitle}>Unlock Your Full Transformation System</h3>

          <p style={lockedPreviewText}>
            After signup your full plan creates the transformation roadmap, calendar,
            grocery list, daily tasks and accountability system. These member features are
            saved to Supabase and unlocked inside the dashboard.
          </p>

          <div style={lockedFeatureGrid}>
            <span style={lockedFeature}>Transformation roadmap</span>
            <span style={lockedFeature}>Member calendar</span>
            <span style={lockedFeature}>Combined grocery list</span>
            <span style={lockedFeature}>Daily check-ins</span>
            <span style={lockedFeature}>Couple accountability</span>
            <span style={lockedFeature}>Progress tracking</span>
          </div>
        </div>

        <button type="button" onClick={handleSave} disabled={loading} style={saveBtn}>
          {loading ? "Saving..." : "Create Account & Save Plan"}
        </button>
      </section>
    </main>
  );
}

const main = {
  minHeight: "100vh",
  background: "url('/images/background.png') center/cover no-repeat",
  padding: "40px 20px",
  position: "relative",
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
};

const eyebrow = {
  color: "#ff2b2b",
  fontWeight: "900",
  letterSpacing: "0.2em",
  marginBottom: "14px",
};

const title = {
  fontSize: "clamp(42px,7vw,74px)",
  lineHeight: 0.95,
  marginBottom: "18px",
  fontWeight: "900",
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
  fontSize: "clamp(28px,4vw,42px)",
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
  fontSize: "clamp(28px,4vw,42px)",
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
};

const lockedPreviewTitle = {
  margin: "0 0 14px",
  fontSize: "clamp(30px,5vw,54px)",
  lineHeight: 0.95,
  fontWeight: "950",
  textTransform: "uppercase",
};

const lockedPreviewText = {
  color: "rgba(255,255,255,0.72)",
  lineHeight: 1.7,
  maxWidth: "820px",
  margin: "0 auto 22px",
};

const lockedFeatureGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
  gap: "10px",
};

const lockedFeature = {
  border: "1px solid rgba(255,255,255,0.10)",
  background: "rgba(0,0,0,0.28)",
  borderRadius: "14px",
  padding: "14px",
  fontWeight: "900",
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
