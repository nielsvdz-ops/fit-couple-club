export const GOALS = [
  "Lose Fat",
  "Build Muscle",
  "Tone & Shape Body",
  "Maintain Athletic Lifestyle",
  "Beginner Body Reset",
];

export const FOCUS_AREAS = [
  "Booty",
  "Abs",
  "Legs",
  "Upper Body",
  "Full Body",
];

export const TRAINING_DAYS = [2, 3, 4, 5, 6, 7];

export const BODY_TYPES = [
  "Slim",
  "Average",
  "Curvy",
  "Athletic",
  "Plus Size",
];

export const EXPERIENCE_LEVELS = [
  "Beginner",
  "Intermediate",
  "Advanced",
];

export const LIFESTYLES = [
  "Busy Schedule",
  "Balanced Lifestyle",
  "Highly Active",
];

const DEFAULT_REST_RULES = {
  "Lose Fat": "45–75 sec rest between most sets",
  "Build Muscle": "60–90 sec rest between most sets",
  "Tone & Shape Body": "45–75 sec rest with controlled tempo",
  "Maintain Athletic Lifestyle": "60–90 sec rest with optional conditioning",
  "Beginner Body Reset": "60–90 sec rest and focus on form",
};

const BODY_TYPE_NOTES = {
  Slim: "Emphasize progressive overload, recovery, and enough food intake for visible shape changes.",
  Average: "Use balanced progression with enough intensity and consistency to improve shape and strength.",
  Curvy: "Prioritize shape-focused lower body training, controlled tempo, and recovery to bring out lines and lift.",
  Athletic: "Use stronger progression, higher work capacity, and athletic structure to improve performance and physique together.",
  "Plus Size": "Focus on consistency, lower joint stress where needed, controlled reps, and sustainable weekly training.",
};

const LEVEL_RULES = {
  Beginner: {
    setRange: "3–4 sets",
    repRange: "10–15 reps",
    intensity: "Moderate",
    note: "Focus on form, consistency, and learning the movement patterns.",
  },
  Intermediate: {
    setRange: "3–5 sets",
    repRange: "8–12 reps",
    intensity: "Moderate to High",
    note: "Push progression weekly and use cleaner exercise execution.",
  },
  Advanced: {
    setRange: "4–5 sets",
    repRange: "6–12 reps",
    intensity: "High",
    note: "Train close to technical failure on key movements and track progression more seriously.",
  },
};

const GOAL_RULES = {
  "Lose Fat": {
    emphasis: "Higher movement density, shorter rest, optional cardio finishers",
    nutritionHint: "Small calorie deficit with high protein",
  },
  "Build Muscle": {
    emphasis: "Progressive overload, more tension, enough recovery",
    nutritionHint: "Small calorie surplus with high protein",
  },
  "Tone & Shape Body": {
    emphasis: "Controlled tempo, moderate volume, shape-focused exercise selection",
    nutritionHint: "Maintenance or slight deficit with high protein",
  },
  "Maintain Athletic Lifestyle": {
    emphasis: "Balanced strength, movement quality, and work capacity",
    nutritionHint: "Maintenance calories and consistent hydration",
  },
  "Beginner Body Reset": {
    emphasis: "Simple structure, form, mobility, and consistency",
    nutritionHint: "Simple high-protein structure and routine building",
  },
};

const E = {
  // Glutes / lower
  HIP_THRUST: "Hip Thrust",
  BARBELL_HIP_THRUST: "Barbell Hip Thrust",
  SMITH_HIP_THRUST: "Smith Machine Hip Thrust",
  GLUTE_BRIDGE: "Glute Bridge",
  GLUTE_BRIDGE_MARCH: "Glute Bridge March",
  GLUTE_BRIDGE_HOLD: "Glute Bridge Hold",
  FROG_PUMPS: "Frog Pumps",
  CABLE_KICKBACK: "Cable Kickback",
  KICKBACK: "Kickback",
  CABLE_PULL_THROUGH: "Cable Pull Through",
  ABDUCTION: "Abduction",
  BAND_ABDUCTIONS: "Band Abductions",
  STANDING_BAND_ABDUCTION: "Standing Band Abduction",
  SEATED_ABDUCTION: "Seated Abduction",
  ABDUCTOR_MACHINE: "Abductor Machine",
  BODYWEIGHT_PULSE_SQUATS: "Bodyweight Pulse Squats",

  // Legs
  ROMANIAN_DEADLIFT: "Romanian Deadlift",
  DUMBBELL_RDL: "Dumbbell RDL",
  RDL: "RDL",
  SUMO_DEADLIFT: "Sumo Deadlift",
  SEATED_LEG_CURL: "Seated Leg Curl",
  LEG_CURL: "Leg Curl",
  HAMSTRING_CURL: "Hamstring Curl",
  LEG_PRESS: "Leg Press",
  HACK_SQUAT: "Hack Squat",
  SQUAT: "Squat",
  BACK_SQUAT: "Back Squat",
  SMITH_SQUAT: "Smith Squat",
  GOBLET_SQUAT: "Goblet Squat",
  BULGARIAN_SPLIT_SQUAT: "Bulgarian Split Squat",
  SMITH_SPLIT_SQUAT: "Smith Machine Split Squat",
  SPLIT_SQUAT: "Split Squat",
  REVERSE_LUNGE: "Reverse Lunge",
  CURTSY_LUNGE: "Curtsy Lunge",
  WALKING_LUNGE: "Walking Lunge",
  WALKING_LUNGES: "Walking Lunges",
  LUNGE: "Lunge",
  STEP_UP: "Step Up",
  STEP_UPS: "Step Ups",
  LEG_EXTENSION: "Leg Extension",
  CALF_RAISE: "Calf Raise",
  STANDING_CALF_RAISE: "Standing Calf Raise",
  SEATED_CALF_RAISE: "Seated Calf Raise",
  DEFICIT_REVERSE_LUNGE: "Deficit Reverse Lunge",
  HYPEREXTENSION_45: "45-Degree Hyperextension",

  // Upper push
  BENCH_PRESS: "Bench Press",
  INCLINE_PRESS: "Incline Press",
  CHEST_PRESS: "Chest Press",
  DUMBBELL_PRESS: "Dumbbell Press",
  INCLINE_DUMBBELL_PRESS: "Incline Dumbbell Press",
  CHEST_FLY: "Chest Fly",
  CABLE_FLY: "Cable Fly",
  PUSH_UP: "Push-Up",
  SHOULDER_PRESS: "Shoulder Press",
  DUMBBELL_SHOULDER_PRESS: "Dumbbell Shoulder Press",
  ARNOLD_PRESS: "Arnold Press",
  LATERAL_RAISE: "Lateral Raise",
  FRONT_RAISE: "Front Raise",
  REAR_DELT_FLY: "Rear Delt Fly",

  // Upper pull / arms
  LAT_PULLDOWN: "Lat Pulldown",
  PULLDOWN: "Pulldown",
  ASSISTED_PULL_UP: "Assisted Pull-Up",
  PULL_UP_ASSIST: "Pull-Up Assist",
  SEATED_ROW: "Seated Row",
  ROW: "Row",
  SINGLE_ARM_ROW: "Single Arm Row",
  BARBELL_ROW: "Barbell Row",
  DUMBBELL_ROW: "Dumbbell Row",
  FACE_PULL: "Face Pull",
  STRAIGHT_ARM_PULLDOWN: "Straight Arm Pulldown",
  BICEP_CURL: "Bicep Curl",
  CABLE_CURL: "Cable Curl",
  HAMMER_CURL: "Hammer Curl",
  TRICEP_PUSHDOWN: "Tricep Pushdown",
  TRICEP_ROPE_PUSHDOWN: "Tricep Rope Pushdown",
  ROPE_PUSHDOWN: "Rope Pushdown",
  OVERHEAD_TRICEP_EXTENSION: "Overhead Tricep Extension",
  TRICEP_EXTENSION: "Tricep Extension",
  SKULLCRUSHER: "Skullcrusher",
  FARMER_CARRY: "Farmer Carry",

  // Core
  CABLE_CRUNCH: "Cable Crunch",
  PLANK: "Plank",
  SIDE_PLANK: "Side Plank",
  DEAD_BUG: "Dead Bug",
  REVERSE_CRUNCH: "Reverse Crunch",
  HANGING_KNEE_RAISE: "Hanging Knee Raise",
  TOE_REACH: "Toe Reach",
  MOUNTAIN_CLIMBERS: "Mountain Climbers",
  RUSSIAN_TWIST: "Russian Twist",
  HOLLOW_HOLD: "Hollow Hold",
  LEG_RAISE: "Leg Raise",
};

const ex = (name, sets, reps) => [name, sets, reps];

const makePlan = (name, category, split) => ({ name, category, split });

const BOOTY_TEMPLATES = [
  makePlan("Booty Builder 1", "Shape & Growth", [
    {
      day: "Day 1 — Glutes Heavy",
      exercises: [
        ex(E.BARBELL_HIP_THRUST, "4 sets", "8-10 reps"),
        ex(E.ROMANIAN_DEADLIFT, "4 sets", "8-10 reps"),
        ex(E.BULGARIAN_SPLIT_SQUAT, "3 sets", "10-12 reps each leg"),
        ex(E.CABLE_KICKBACK, "3 sets", "12-15 reps each leg"),
        ex(E.BAND_ABDUCTIONS, "3 sets", "20 reps"),
      ],
    },
    {
      day: "Day 2 — Upper Body",
      exercises: [
        ex(E.LAT_PULLDOWN, "4 sets", "10-12 reps"),
        ex(E.SEATED_ROW, "3 sets", "10-12 reps"),
        ex(E.SHOULDER_PRESS, "3 sets", "10 reps"),
        ex(E.BICEP_CURL, "3 sets", "12 reps"),
        ex(E.TRICEP_ROPE_PUSHDOWN, "3 sets", "12 reps"),
      ],
    },
    {
      day: "Day 3 — Glutes Volume",
      exercises: [
        ex(E.SMITH_SQUAT, "4 sets", "10-12 reps"),
        ex(E.WALKING_LUNGES, "3 sets", "20 steps"),
        ex(E.STEP_UPS, "3 sets", "12 reps each leg"),
        ex(E.GLUTE_BRIDGE, "3 sets", "15 reps"),
        ex(E.ABDUCTOR_MACHINE, "3 sets", "20 reps"),
      ],
    },
  ]),

  makePlan("Booty Builder 2", "Strength & Shape", [
    {
      day: "Day 1 — Glute Strength",
      exercises: [
        ex(E.HIP_THRUST, "5 sets", "6-8 reps"),
        ex(E.SUMO_DEADLIFT, "4 sets", "6-8 reps"),
        ex(E.REVERSE_LUNGE, "3 sets", "10 reps each leg"),
        ex(E.CABLE_PULL_THROUGH, "3 sets", "12-15 reps"),
        ex(E.FROG_PUMPS, "3 sets", "25 reps"),
      ],
    },
    {
      day: "Day 2 — Lower Body Shape",
      exercises: [
        ex(E.LEG_PRESS, "4 sets", "10-12 reps"),
        ex(E.DUMBBELL_RDL, "4 sets", "10 reps"),
        ex(E.CURTSY_LUNGE, "3 sets", "12 reps each leg"),
        ex(E.CABLE_KICKBACK, "3 sets", "15 reps each leg"),
        ex(E.BAND_ABDUCTIONS, "2 rounds", "30 reps"),
      ],
    },
    {
      day: "Day 3 — Upper + Core",
      exercises: [
        ex(E.CHEST_PRESS, "3 sets", "10-12 reps"),
        ex(E.ASSISTED_PULL_UP, "3 sets", "8-10 reps"),
        ex(E.LATERAL_RAISE, "3 sets", "15 reps"),
        ex(E.PLANK, "3 sets", "45 sec"),
        ex(E.DEAD_BUG, "3 sets", "12 reps each side"),
      ],
    },
  ]),

  makePlan("Booty Builder 3", "Lower / Upper Split", [
    {
      day: "Day 1 — Lower Glutes",
      exercises: [
        ex(E.DEFICIT_REVERSE_LUNGE, "4 sets", "10 reps each leg"),
        ex(E.ROMANIAN_DEADLIFT, "4 sets", "8-10 reps"),
        ex(E.HYPEREXTENSION_45, "3 sets", "12-15 reps"),
        ex(E.CABLE_PULL_THROUGH, "3 sets", "15 reps"),
        ex(E.STANDING_BAND_ABDUCTION, "3 sets", "20 reps"),
      ],
    },
    {
      day: "Day 2 — Upper Body",
      exercises: [
        ex(E.SINGLE_ARM_ROW, "4 sets", "10 reps"),
        ex(E.INCLINE_DUMBBELL_PRESS, "3 sets", "10 reps"),
        ex(E.FACE_PULL, "3 sets", "15 reps"),
        ex(E.HAMMER_CURL, "3 sets", "12 reps"),
        ex(E.OVERHEAD_TRICEP_EXTENSION, "3 sets", "12 reps"),
      ],
    },
    {
      day: "Day 3 — Upper Glutes",
      exercises: [
        ex(E.HIP_THRUST, "4 sets", "10 reps"),
        ex(E.SMITH_SPLIT_SQUAT, "3 sets", "12 reps each leg"),
        ex(E.GLUTE_BRIDGE_MARCH, "3 sets", "16 reps"),
        ex(E.KICKBACK, "3 sets", "15 reps each leg"),
        ex(E.SEATED_ABDUCTION, "3 sets", "20 reps"),
      ],
    },
  ]),

  makePlan("Booty Builder 4", "Glutes + Hamstrings", [
    {
      day: "Day 1 — Glutes + Hamstrings",
      exercises: [
        ex(E.BARBELL_HIP_THRUST, "4 sets", "8 reps"),
        ex(E.SEATED_LEG_CURL, "4 sets", "10-12 reps"),
        ex(E.RDL, "4 sets", "8-10 reps"),
        ex(E.CABLE_KICKBACK, "3 sets", "12-15 reps"),
        ex(E.BAND_ABDUCTIONS, "2 rounds", "30 reps"),
      ],
    },
    {
      day: "Day 2 — Quads + Glutes",
      exercises: [
        ex(E.HACK_SQUAT, "4 sets", "8-10 reps"),
        ex(E.WALKING_LUNGE, "3 sets", "20 steps"),
        ex(E.LEG_EXTENSION, "3 sets", "15 reps"),
        ex(E.GLUTE_BRIDGE, "3 sets", "15 reps"),
        ex(E.ABDUCTOR_MACHINE, "3 sets", "20 reps"),
      ],
    },
    {
      day: "Day 3 — Upper Body",
      exercises: [
        ex(E.LAT_PULLDOWN, "4 sets", "10 reps"),
        ex(E.ROW, "3 sets", "10 reps"),
        ex(E.SHOULDER_PRESS, "3 sets", "10 reps"),
        ex(E.BICEP_CURL, "3 sets", "12 reps"),
        ex(E.TRICEP_PUSHDOWN, "3 sets", "12 reps"),
      ],
    },
  ]),

  makePlan("Booty Builder 5", "Pump & Shape", [
    {
      day: "Day 1 — Booty Pump",
      exercises: [
        ex(E.HIP_THRUST, "4 sets", "12 reps"),
        ex(E.FROG_PUMPS, "3 sets", "30 reps"),
        ex(E.CABLE_KICKBACK, "3 sets", "15 reps"),
        ex(E.STANDING_BAND_ABDUCTION, "3 sets", "20 reps"),
        ex(E.GLUTE_BRIDGE_HOLD, "3 sets", "30 sec"),
      ],
    },
    {
      day: "Day 2 — Full Lower Body",
      exercises: [
        ex(E.LEG_PRESS, "4 sets", "10 reps"),
        ex(E.DUMBBELL_RDL, "4 sets", "10 reps"),
        ex(E.STEP_UPS, "3 sets", "12 reps each leg"),
        ex(E.HAMSTRING_CURL, "3 sets", "12 reps"),
        ex(E.ABDUCTOR_MACHINE, "3 sets", "20 reps"),
      ],
    },
    {
      day: "Day 3 — Upper Body + Core",
      exercises: [
        ex(E.INCLINE_PRESS, "3 sets", "10 reps"),
        ex(E.ROW, "3 sets", "10 reps"),
        ex(E.LATERAL_RAISE, "3 sets", "15 reps"),
        ex(E.CABLE_CRUNCH, "3 sets", "15 reps"),
        ex(E.PLANK, "3 sets", "45 sec"),
      ],
    },
  ]),

  makePlan("Booty Builder 6", "Strength + Push Mix", [
    {
      day: "Day 1 — Strength Lower",
      exercises: [
        ex(E.SUMO_DEADLIFT, "4 sets", "6 reps"),
        ex(E.HIP_THRUST, "4 sets", "8 reps"),
        ex(E.BULGARIAN_SPLIT_SQUAT, "3 sets", "8 reps each leg"),
        ex(E.KICKBACK, "3 sets", "12 reps"),
        ex(E.ABDUCTION, "3 sets", "20 reps"),
      ],
    },
    {
      day: "Day 2 — Upper Push",
      exercises: [
        ex(E.CHEST_PRESS, "4 sets", "8-10 reps"),
        ex(E.SHOULDER_PRESS, "3 sets", "10 reps"),
        ex(E.LATERAL_RAISE, "3 sets", "15 reps"),
        ex(E.TRICEP_EXTENSION, "3 sets", "12 reps"),
        ex(E.PUSH_UP, "2 sets", "max reps"),
      ],
    },
    {
      day: "Day 3 — Glute Shape",
      exercises: [
        ex(E.HIP_THRUST, "4 sets", "10 reps"),
        ex(E.SMITH_SQUAT, "4 sets", "10 reps"),
        ex(E.REVERSE_LUNGE, "3 sets", "12 reps each leg"),
        ex(E.CABLE_KICKBACK, "3 sets", "15 reps"),
        ex(E.FROG_PUMPS, "2 sets", "30 reps"),
      ],
    },
  ]),

  makePlan("Booty Builder 7", "Quad + Hamstring Balance", [
    {
      day: "Day 1 — Glutes + Quads",
      exercises: [
        ex(E.HACK_SQUAT, "4 sets", "8 reps"),
        ex(E.HIP_THRUST, "4 sets", "10 reps"),
        ex(E.LEG_EXTENSION, "3 sets", "15 reps"),
        ex(E.WALKING_LUNGES, "3 sets", "20 steps"),
        ex(E.ABDUCTION, "3 sets", "20 reps"),
      ],
    },
    {
      day: "Day 2 — Back + Shoulders",
      exercises: [
        ex(E.PULLDOWN, "4 sets", "10 reps"),
        ex(E.SEATED_ROW, "3 sets", "10 reps"),
        ex(E.LATERAL_RAISE, "3 sets", "15 reps"),
        ex(E.REAR_DELT_FLY, "3 sets", "15 reps"),
        ex(E.BICEP_CURL, "3 sets", "12 reps"),
      ],
    },
    {
      day: "Day 3 — Glutes + Hamstrings",
      exercises: [
        ex(E.RDL, "4 sets", "8 reps"),
        ex(E.SEATED_LEG_CURL, "4 sets", "10 reps"),
        ex(E.GLUTE_BRIDGE, "3 sets", "15 reps"),
        ex(E.CABLE_KICKBACK, "3 sets", "15 reps"),
        ex(E.BAND_ABDUCTIONS, "2 rounds", "25 reps"),
      ],
    },
  ]),

  makePlan("Booty Builder 8", "Isolation Emphasis", [
    {
      day: "Day 1 — Glute Isolation",
      exercises: [
        ex(E.KICKBACK, "4 sets", "15 reps"),
        ex(E.GLUTE_BRIDGE, "4 sets", "12 reps"),
        ex(E.FROG_PUMPS, "3 sets", "25 reps"),
        ex(E.ABDUCTOR_MACHINE, "4 sets", "20 reps"),
        ex(E.BODYWEIGHT_PULSE_SQUATS, "2 rounds", "30 reps"),
      ],
    },
    {
      day: "Day 2 — Lower Body Compound",
      exercises: [
        ex(E.LEG_PRESS, "4 sets", "10 reps"),
        ex(E.RDL, "4 sets", "10 reps"),
        ex(E.SPLIT_SQUAT, "3 sets", "10 reps"),
        ex(E.HAMSTRING_CURL, "3 sets", "12 reps"),
        ex(E.STEP_UP, "3 sets", "12 reps"),
      ],
    },
    {
      day: "Day 3 — Upper Body",
      exercises: [
        ex(E.CHEST_PRESS, "3 sets", "10 reps"),
        ex(E.PULLDOWN, "3 sets", "10 reps"),
        ex(E.SHOULDER_PRESS, "3 sets", "10 reps"),
        ex(E.CABLE_CRUNCH, "3 sets", "15 reps"),
        ex(E.PLANK, "3 sets", "45 sec"),
      ],
    },
  ]),

  makePlan("Booty Builder 9", "Strength / Hypertrophy Mix", [
    {
      day: "Day 1 — Lower Strength",
      exercises: [
        ex(E.HIP_THRUST, "5 sets", "5 reps"),
        ex(E.RDL, "4 sets", "6 reps"),
        ex(E.BULGARIAN_SPLIT_SQUAT, "3 sets", "8 reps"),
        ex(E.CABLE_KICKBACK, "3 sets", "12 reps"),
        ex(E.BAND_ABDUCTIONS, "3 sets", "20 reps"),
      ],
    },
    {
      day: "Day 2 — Upper Pull",
      exercises: [
        ex(E.PULL_UP_ASSIST, "4 sets", "8 reps"),
        ex(E.ROW, "4 sets", "10 reps"),
        ex(E.REAR_DELT_FLY, "3 sets", "15 reps"),
        ex(E.BICEP_CURL, "3 sets", "12 reps"),
        ex(E.FARMER_CARRY, "3 rounds", "30 sec"),
      ],
    },
    {
      day: "Day 3 — Lower Hypertrophy",
      exercises: [
        ex(E.SMITH_SQUAT, "4 sets", "10 reps"),
        ex(E.GLUTE_BRIDGE, "4 sets", "12 reps"),
        ex(E.WALKING_LUNGE, "3 sets", "20 steps"),
        ex(E.KICKBACK, "3 sets", "15 reps"),
        ex(E.BAND_ABDUCTIONS, "2 sets", "30 reps"),
      ],
    },
  ]),

  makePlan("Booty Builder 10", "Dual Glute Focus", [
    {
      day: "Day 1 — Glute Focus A",
      exercises: [
        ex(E.HIP_THRUST, "4 sets", "10 reps"),
        ex(E.RDL, "4 sets", "10 reps"),
        ex(E.KICKBACK, "3 sets", "15 reps"),
        ex(E.ABDUCTION, "3 sets", "20 reps"),
        ex(E.GLUTE_BRIDGE_HOLD, "3 sets", "30 sec"),
      ],
    },
    {
      day: "Day 2 — Glute Focus B",
      exercises: [
        ex(E.SMITH_SQUAT, "4 sets", "10 reps"),
        ex(E.REVERSE_LUNGE, "3 sets", "12 reps"),
        ex(E.STEP_UP, "3 sets", "12 reps"),
        ex(E.CABLE_PULL_THROUGH, "3 sets", "15 reps"),
        ex(E.FROG_PUMPS, "3 sets", "25 reps"),
      ],
    },
    {
      day: "Day 3 — Upper + Core",
      exercises: [
        ex(E.ROW, "3 sets", "10 reps"),
        ex(E.DUMBBELL_PRESS, "3 sets", "10 reps"),
        ex(E.LATERAL_RAISE, "3 sets", "15 reps"),
        ex(E.CABLE_CRUNCH, "3 sets", "15 reps"),
        ex(E.PLANK, "3 sets", "45 sec"),
      ],
    },
  ]),
];

const ABS_TEMPLATES = [
  makePlan("Core Sculpt 1", "Abs + Upper", [
    {
      day: "Day 1 — Upper + Core",
      exercises: [
        ex(E.LAT_PULLDOWN, "4 sets", "10 reps"),
        ex(E.SEATED_ROW, "3 sets", "10 reps"),
        ex(E.CABLE_CRUNCH, "4 sets", "15 reps"),
        ex(E.HANGING_KNEE_RAISE, "3 sets", "12 reps"),
        ex(E.PLANK, "3 sets", "45 sec"),
      ],
    },
    {
      day: "Day 2 — Lower + Core",
      exercises: [
        ex(E.GOBLET_SQUAT, "4 sets", "10 reps"),
        ex(E.ROMANIAN_DEADLIFT, "4 sets", "10 reps"),
        ex(E.DEAD_BUG, "3 sets", "12 each side"),
        ex(E.REVERSE_CRUNCH, "3 sets", "15 reps"),
        ex(E.MOUNTAIN_CLIMBERS, "3 rounds", "30 sec"),
      ],
    },
  ]),

  makePlan("Core Sculpt 2", "Push + Pull Core Mix", [
    {
      day: "Day 1 — Push + Abs",
      exercises: [
        ex(E.CHEST_PRESS, "4 sets", "10 reps"),
        ex(E.SHOULDER_PRESS, "3 sets", "10 reps"),
        ex(E.CABLE_CRUNCH, "4 sets", "15 reps"),
        ex(E.TOE_REACH, "3 sets", "20 reps"),
        ex(E.PLANK, "3 sets", "60 sec"),
      ],
    },
    {
      day: "Day 2 — Pull + Core",
      exercises: [
        ex(E.PULLDOWN, "4 sets", "10 reps"),
        ex(E.SINGLE_ARM_ROW, "3 sets", "12 reps"),
        ex(E.RUSSIAN_TWIST, "3 sets", "20 reps"),
        ex(E.DEAD_BUG, "3 sets", "12 each side"),
        ex(E.SIDE_PLANK, "3 sets", "30 sec each side"),
      ],
    },
  ]),

  makePlan("Core Sculpt 3", "Athletic Core", [
    {
      day: "Day 1 — Athletic Core",
      exercises: [
        ex(E.CABLE_CRUNCH, "4 sets", "15 reps"),
        ex(E.DEAD_BUG, "3 sets", "12 each side"),
        ex(E.PLANK, "3 sets", "45 sec"),
        ex(E.MOUNTAIN_CLIMBERS, "3 rounds", "30 sec"),
        ex(E.TOE_REACH, "3 sets", "20 reps"),
      ],
    },
    {
      day: "Day 2 — Core + Legs",
      exercises: [
        ex(E.GOBLET_SQUAT, "4 sets", "10 reps"),
        ex(E.WALKING_LUNGE, "3 sets", "20 steps"),
        ex(E.REVERSE_CRUNCH, "3 sets", "15 reps"),
        ex(E.SIDE_PLANK, "3 sets", "30 sec each side"),
        ex(E.DEAD_BUG, "3 sets", "12 each side"),
      ],
    },
  ]),

  makePlan("Core Sculpt 4", "Tight Waist", [
    {
      day: "Day 1 — Tighten Session",
      exercises: [
        ex(E.CABLE_CRUNCH, "4 sets", "15 reps"),
        ex(E.PLANK, "3 sets", "45 sec"),
        ex(E.REVERSE_CRUNCH, "3 sets", "15 reps"),
        ex(E.DEAD_BUG, "3 sets", "12 each side"),
        ex(E.TOE_REACH, "3 sets", "20 reps"),
      ],
    },
    {
      day: "Day 2 — Full Body Core",
      exercises: [
        ex(E.PUSH_UP, "3 sets", "max reps"),
        ex(E.GOBLET_SQUAT, "4 sets", "10 reps"),
        ex(E.MOUNTAIN_CLIMBERS, "3 rounds", "30 sec"),
        ex(E.RUSSIAN_TWIST, "3 sets", "20 reps"),
        ex(E.PLANK, "3 sets", "60 sec"),
      ],
    },
  ]),

  makePlan("Core Sculpt 5", "Lower Abs Focus", [
    {
      day: "Day 1 — Lower Abs",
      exercises: [
        ex(E.HANGING_KNEE_RAISE, "4 sets", "12 reps"),
        ex(E.REVERSE_CRUNCH, "4 sets", "15 reps"),
        ex(E.LEG_RAISE, "3 sets", "12 reps"),
        ex(E.PLANK, "3 sets", "45 sec"),
        ex(E.TOE_REACH, "3 sets", "20 reps"),
      ],
    },
    {
      day: "Day 2 — Support Core",
      exercises: [
        ex(E.DEAD_BUG, "3 sets", "12 each side"),
        ex(E.HOLLOW_HOLD, "3 sets", "30 sec"),
        ex(E.SIDE_PLANK, "3 sets", "30 sec each side"),
        ex(E.MOUNTAIN_CLIMBERS, "3 rounds", "30 sec"),
        ex(E.CABLE_CRUNCH, "3 sets", "15 reps"),
      ],
    },
  ]),

  makePlan("Core Sculpt 6", "Core Endurance", [
    {
      day: "Day 1 — Endurance A",
      exercises: [
        ex(E.PLANK, "4 sets", "60 sec"),
        ex(E.SIDE_PLANK, "3 sets", "40 sec each side"),
        ex(E.TOE_REACH, "3 sets", "25 reps"),
        ex(E.MOUNTAIN_CLIMBERS, "4 rounds", "30 sec"),
        ex(E.DEAD_BUG, "3 sets", "12 each side"),
      ],
    },
    {
      day: "Day 2 — Endurance B",
      exercises: [
        ex(E.CABLE_CRUNCH, "4 sets", "15 reps"),
        ex(E.RUSSIAN_TWIST, "3 sets", "20 reps"),
        ex(E.REVERSE_CRUNCH, "3 sets", "15 reps"),
        ex(E.HOLLOW_HOLD, "3 sets", "30 sec"),
        ex(E.PLANK, "3 sets", "45 sec"),
      ],
    },
  ]),

  makePlan("Core Sculpt 7", "Athletic Midline", [
    {
      day: "Day 1 — Midline A",
      exercises: [
        ex(E.CABLE_CRUNCH, "4 sets", "15 reps"),
        ex(E.DEAD_BUG, "3 sets", "12 each side"),
        ex(E.HOLLOW_HOLD, "3 sets", "30 sec"),
        ex(E.PLANK, "3 sets", "45 sec"),
        ex(E.MOUNTAIN_CLIMBERS, "3 rounds", "30 sec"),
      ],
    },
    {
      day: "Day 2 — Midline B",
      exercises: [
        ex(E.TOE_REACH, "3 sets", "20 reps"),
        ex(E.SIDE_PLANK, "3 sets", "30 sec each side"),
        ex(E.RUSSIAN_TWIST, "3 sets", "20 reps"),
        ex(E.HANGING_KNEE_RAISE, "3 sets", "12 reps"),
        ex(E.CABLE_CRUNCH, "3 sets", "15 reps"),
      ],
    },
  ]),

  makePlan("Core Sculpt 8", "Abs + Upper Athletic", [
    {
      day: "Day 1 — Pull + Core",
      exercises: [
        ex(E.LAT_PULLDOWN, "4 sets", "10 reps"),
        ex(E.SEATED_ROW, "3 sets", "10 reps"),
        ex(E.CABLE_CRUNCH, "4 sets", "15 reps"),
        ex(E.REVERSE_CRUNCH, "3 sets", "15 reps"),
        ex(E.PLANK, "3 sets", "45 sec"),
      ],
    },
    {
      day: "Day 2 — Push + Core",
      exercises: [
        ex(E.CHEST_PRESS, "4 sets", "10 reps"),
        ex(E.SHOULDER_PRESS, "3 sets", "10 reps"),
        ex(E.TOE_REACH, "3 sets", "20 reps"),
        ex(E.SIDE_PLANK, "3 sets", "30 sec each side"),
        ex(E.DEAD_BUG, "3 sets", "12 each side"),
      ],
    },
  ]),

  makePlan("Core Sculpt 9", "Tight Waist Plus", [
    {
      day: "Day 1 — Tighten A",
      exercises: [
        ex(E.CABLE_CRUNCH, "4 sets", "15 reps"),
        ex(E.PLANK, "3 sets", "60 sec"),
        ex(E.REVERSE_CRUNCH, "3 sets", "15 reps"),
        ex(E.SIDE_PLANK, "3 sets", "30 sec each side"),
        ex(E.HOLLOW_HOLD, "3 sets", "30 sec"),
      ],
    },
    {
      day: "Day 2 — Tighten B",
      exercises: [
        ex(E.TOE_REACH, "3 sets", "20 reps"),
        ex(E.DEAD_BUG, "3 sets", "12 each side"),
        ex(E.RUSSIAN_TWIST, "3 sets", "20 reps"),
        ex(E.MOUNTAIN_CLIMBERS, "3 rounds", "30 sec"),
        ex(E.PLANK, "3 sets", "45 sec"),
      ],
    },
  ]),

  makePlan("Core Sculpt 10", "Core Reset", [
    {
      day: "Day 1 — Reset A",
      exercises: [
        ex(E.PLANK, "3 sets", "30-45 sec"),
        ex(E.DEAD_BUG, "3 sets", "10 each side"),
        ex(E.CABLE_CRUNCH, "3 sets", "12 reps"),
        ex(E.TOE_REACH, "3 sets", "15 reps"),
        ex(E.REVERSE_CRUNCH, "3 sets", "12 reps"),
      ],
    },
    {
      day: "Day 2 — Reset B",
      exercises: [
        ex(E.SIDE_PLANK, "3 sets", "20-30 sec each side"),
        ex(E.MOUNTAIN_CLIMBERS, "3 rounds", "20 sec"),
        ex(E.HANGING_KNEE_RAISE, "3 sets", "10 reps"),
        ex(E.RUSSIAN_TWIST, "3 sets", "16 reps"),
        ex(E.DEAD_BUG, "3 sets", "10 each side"),
      ],
    },
  ]),
];

const LEGS_TEMPLATES = [
  makePlan("Leg Strength 1", "Balanced Lower", [
    {
      day: "Day 1 — Quad Focus",
      exercises: [
        ex(E.HACK_SQUAT, "4 sets", "8-10 reps"),
        ex(E.LEG_PRESS, "4 sets", "10 reps"),
        ex(E.LEG_EXTENSION, "3 sets", "15 reps"),
        ex(E.WALKING_LUNGES, "3 sets", "20 steps"),
        ex(E.CALF_RAISE, "4 sets", "15 reps"),
      ],
    },
    {
      day: "Day 2 — Hamstrings + Glutes",
      exercises: [
        ex(E.ROMANIAN_DEADLIFT, "4 sets", "8 reps"),
        ex(E.SEATED_LEG_CURL, "4 sets", "10 reps"),
        ex(E.HIP_THRUST, "4 sets", "10 reps"),
        ex(E.REVERSE_LUNGE, "3 sets", "12 reps each leg"),
        ex(E.CALF_RAISE, "4 sets", "15 reps"),
      ],
    },
  ]),

  makePlan("Leg Strength 2", "Classic Lower Split", [
    {
      day: "Day 1 — Lower Body A",
      exercises: [
        ex(E.BACK_SQUAT, "4 sets", "6-8 reps"),
        ex(E.BULGARIAN_SPLIT_SQUAT, "3 sets", "10 reps each leg"),
        ex(E.LEG_EXTENSION, "3 sets", "15 reps"),
        ex(E.WALKING_LUNGE, "3 sets", "20 steps"),
        ex(E.STANDING_CALF_RAISE, "4 sets", "15 reps"),
      ],
    },
    {
      day: "Day 2 — Lower Body B",
      exercises: [
        ex(E.RDL, "4 sets", "8 reps"),
        ex(E.LEG_CURL, "4 sets", "10 reps"),
        ex(E.STEP_UP, "3 sets", "12 reps"),
        ex(E.GLUTE_BRIDGE, "3 sets", "15 reps"),
        ex(E.SEATED_CALF_RAISE, "4 sets", "15 reps"),
      ],
    },
  ]),

  makePlan("Leg Strength 3", "Quad Builder", [
    {
      day: "Day 1 — Front Leg Focus",
      exercises: [
        ex(E.HACK_SQUAT, "4 sets", "8 reps"),
        ex(E.LEG_PRESS, "4 sets", "10 reps"),
        ex(E.LEG_EXTENSION, "4 sets", "15 reps"),
        ex(E.WALKING_LUNGE, "3 sets", "20 steps"),
        ex(E.STANDING_CALF_RAISE, "4 sets", "15 reps"),
      ],
    },
    {
      day: "Day 2 — Lower Support",
      exercises: [
        ex(E.GOBLET_SQUAT, "4 sets", "10 reps"),
        ex(E.STEP_UP, "3 sets", "12 reps"),
        ex(E.SEATED_LEG_CURL, "3 sets", "12 reps"),
        ex(E.GLUTE_BRIDGE, "3 sets", "15 reps"),
        ex(E.SEATED_CALF_RAISE, "4 sets", "15 reps"),
      ],
    },
  ]),

  makePlan("Leg Strength 4", "Posterior Chain", [
    {
      day: "Day 1 — Hamstring Focus",
      exercises: [
        ex(E.ROMANIAN_DEADLIFT, "4 sets", "8 reps"),
        ex(E.SEATED_LEG_CURL, "4 sets", "10 reps"),
        ex(E.HIP_THRUST, "4 sets", "10 reps"),
        ex(E.REVERSE_LUNGE, "3 sets", "12 reps"),
        ex(E.STANDING_CALF_RAISE, "4 sets", "15 reps"),
      ],
    },
    {
      day: "Day 2 — Lower Compound",
      exercises: [
        ex(E.BACK_SQUAT, "4 sets", "6-8 reps"),
        ex(E.LEG_PRESS, "4 sets", "10 reps"),
        ex(E.WALKING_LUNGE, "3 sets", "20 steps"),
        ex(E.GLUTE_BRIDGE, "3 sets", "15 reps"),
        ex(E.SEATED_CALF_RAISE, "4 sets", "15 reps"),
      ],
    },
  ]),

  makePlan("Leg Strength 5", "Strength & Calves", [
    {
      day: "Day 1 — Heavy Legs",
      exercises: [
        ex(E.SQUAT, "4 sets", "6-8 reps"),
        ex(E.LEG_PRESS, "4 sets", "10 reps"),
        ex(E.LEG_EXTENSION, "3 sets", "15 reps"),
        ex(E.STANDING_CALF_RAISE, "4 sets", "15 reps"),
        ex(E.SEATED_CALF_RAISE, "3 sets", "15 reps"),
      ],
    },
    {
      day: "Day 2 — Posterior Support",
      exercises: [
        ex(E.RDL, "4 sets", "8 reps"),
        ex(E.LEG_CURL, "4 sets", "10 reps"),
        ex(E.BULGARIAN_SPLIT_SQUAT, "3 sets", "10 reps each leg"),
        ex(E.GLUTE_BRIDGE, "3 sets", "15 reps"),
        ex(E.CALF_RAISE, "4 sets", "15 reps"),
      ],
    },
  ]),

  makePlan("Leg Strength 6", "Athletic Lower", [
    {
      day: "Day 1 — Athletic A",
      exercises: [
        ex(E.GOBLET_SQUAT, "4 sets", "10 reps"),
        ex(E.WALKING_LUNGES, "3 sets", "20 steps"),
        ex(E.STEP_UPS, "3 sets", "12 reps each leg"),
        ex(E.LEG_EXTENSION, "3 sets", "15 reps"),
        ex(E.CALF_RAISE, "4 sets", "15 reps"),
      ],
    },
    {
      day: "Day 2 — Athletic B",
      exercises: [
        ex(E.RDL, "4 sets", "10 reps"),
        ex(E.SEATED_LEG_CURL, "4 sets", "10 reps"),
        ex(E.REVERSE_LUNGE, "3 sets", "12 reps each leg"),
        ex(E.HIP_THRUST, "3 sets", "10 reps"),
        ex(E.SEATED_CALF_RAISE, "4 sets", "15 reps"),
      ],
    },
  ]),

  makePlan("Leg Strength 7", "Quad & Glute Blend", [
    {
      day: "Day 1 — Quad Drive",
      exercises: [
        ex(E.HACK_SQUAT, "4 sets", "8 reps"),
        ex(E.LEG_PRESS, "4 sets", "10 reps"),
        ex(E.LEG_EXTENSION, "4 sets", "15 reps"),
        ex(E.STEP_UP, "3 sets", "12 reps each leg"),
        ex(E.STANDING_CALF_RAISE, "4 sets", "15 reps"),
      ],
    },
    {
      day: "Day 2 — Glute Support",
      exercises: [
        ex(E.HIP_THRUST, "4 sets", "10 reps"),
        ex(E.BULGARIAN_SPLIT_SQUAT, "3 sets", "10 reps each leg"),
        ex(E.WALKING_LUNGE, "3 sets", "20 steps"),
        ex(E.SEATED_LEG_CURL, "3 sets", "12 reps"),
        ex(E.SEATED_CALF_RAISE, "4 sets", "15 reps"),
      ],
    },
  ]),

  makePlan("Leg Strength 8", "Machine Lower Body", [
    {
      day: "Day 1 — Machine A",
      exercises: [
        ex(E.HACK_SQUAT, "4 sets", "10 reps"),
        ex(E.LEG_PRESS, "4 sets", "12 reps"),
        ex(E.LEG_EXTENSION, "3 sets", "15 reps"),
        ex(E.SEATED_LEG_CURL, "3 sets", "12 reps"),
        ex(E.SEATED_CALF_RAISE, "4 sets", "15 reps"),
      ],
    },
    {
      day: "Day 2 — Machine B",
      exercises: [
        ex(E.LEG_PRESS, "4 sets", "10 reps"),
        ex(E.LEG_EXTENSION, "4 sets", "15 reps"),
        ex(E.LEG_CURL, "4 sets", "10 reps"),
        ex(E.GLUTE_BRIDGE, "3 sets", "15 reps"),
        ex(E.STANDING_CALF_RAISE, "4 sets", "15 reps"),
      ],
    },
  ]),

  makePlan("Leg Strength 9", "Beginner Lower Reset", [
    {
      day: "Day 1 — Simple Lower A",
      exercises: [
        ex(E.GOBLET_SQUAT, "4 sets", "10 reps"),
        ex(E.LEG_PRESS, "3 sets", "10 reps"),
        ex(E.LEG_EXTENSION, "3 sets", "12 reps"),
        ex(E.WALKING_LUNGE, "3 sets", "16 steps"),
        ex(E.CALF_RAISE, "3 sets", "15 reps"),
      ],
    },
    {
      day: "Day 2 — Simple Lower B",
      exercises: [
        ex(E.RDL, "3 sets", "10 reps"),
        ex(E.SEATED_LEG_CURL, "3 sets", "10 reps"),
        ex(E.GLUTE_BRIDGE, "3 sets", "15 reps"),
        ex(E.STEP_UP, "3 sets", "10 reps each leg"),
        ex(E.SEATED_CALF_RAISE, "3 sets", "15 reps"),
      ],
    },
  ]),

  makePlan("Leg Strength 10", "Strength Peak Lower", [
    {
      day: "Day 1 — Peak A",
      exercises: [
        ex(E.BACK_SQUAT, "5 sets", "5-6 reps"),
        ex(E.HACK_SQUAT, "4 sets", "8 reps"),
        ex(E.LEG_EXTENSION, "3 sets", "12 reps"),
        ex(E.STANDING_CALF_RAISE, "4 sets", "15 reps"),
        ex(E.SEATED_CALF_RAISE, "3 sets", "15 reps"),
      ],
    },
    {
      day: "Day 2 — Peak B",
      exercises: [
        ex(E.ROMANIAN_DEADLIFT, "5 sets", "6 reps"),
        ex(E.SEATED_LEG_CURL, "4 sets", "10 reps"),
        ex(E.HIP_THRUST, "4 sets", "8 reps"),
        ex(E.REVERSE_LUNGE, "3 sets", "10 reps each leg"),
        ex(E.CALF_RAISE, "4 sets", "15 reps"),
      ],
    },
  ]),
];

const UPPER_TEMPLATES = [
  makePlan("Upper Focus 1", "Push / Pull Base", [
    {
      day: "Day 1 — Push",
      exercises: [
        ex(E.INCLINE_DUMBBELL_PRESS, "4 sets", "8-10 reps"),
        ex(E.SHOULDER_PRESS, "4 sets", "10 reps"),
        ex(E.CHEST_FLY, "3 sets", "12 reps"),
        ex(E.LATERAL_RAISE, "3 sets", "15 reps"),
        ex(E.TRICEP_PUSHDOWN, "3 sets", "12 reps"),
      ],
    },
    {
      day: "Day 2 — Pull",
      exercises: [
        ex(E.LAT_PULLDOWN, "4 sets", "10 reps"),
        ex(E.SEATED_ROW, "4 sets", "10 reps"),
        ex(E.REAR_DELT_FLY, "3 sets", "15 reps"),
        ex(E.HAMMER_CURL, "3 sets", "12 reps"),
        ex(E.FACE_PULL, "3 sets", "15 reps"),
      ],
    },
  ]),

  makePlan("Upper Focus 2", "Chest / Back Split", [
    {
      day: "Day 1 — Chest + Shoulders",
      exercises: [
        ex(E.CHEST_PRESS, "4 sets", "8 reps"),
        ex(E.INCLINE_PRESS, "3 sets", "10 reps"),
        ex(E.SHOULDER_PRESS, "3 sets", "10 reps"),
        ex(E.LATERAL_RAISE, "3 sets", "15 reps"),
        ex(E.OVERHEAD_TRICEP_EXTENSION, "3 sets", "12 reps"),
      ],
    },
    {
      day: "Day 2 — Back + Arms",
      exercises: [
        ex(E.PULL_UP_ASSIST, "4 sets", "8 reps"),
        ex(E.ROW, "4 sets", "10 reps"),
        ex(E.CABLE_CURL, "3 sets", "12 reps"),
        ex(E.FACE_PULL, "3 sets", "15 reps"),
        ex(E.ROPE_PUSHDOWN, "3 sets", "12 reps"),
      ],
    },
  ]),

  makePlan("Upper Focus 3", "Shoulder Sculpt", [
    {
      day: "Day 1 — Shoulder Shape",
      exercises: [
        ex(E.SHOULDER_PRESS, "4 sets", "10 reps"),
        ex(E.LATERAL_RAISE, "4 sets", "15 reps"),
        ex(E.REAR_DELT_FLY, "3 sets", "15 reps"),
        ex(E.FACE_PULL, "3 sets", "15 reps"),
        ex(E.HAMMER_CURL, "3 sets", "12 reps"),
      ],
    },
    {
      day: "Day 2 — Upper Support",
      exercises: [
        ex(E.LAT_PULLDOWN, "4 sets", "10 reps"),
        ex(E.CHEST_PRESS, "3 sets", "10 reps"),
        ex(E.INCLINE_DUMBBELL_PRESS, "3 sets", "10 reps"),
        ex(E.TRICEP_PUSHDOWN, "3 sets", "12 reps"),
        ex(E.CABLE_CURL, "3 sets", "12 reps"),
      ],
    },
  ]),

  makePlan("Upper Focus 4", "Lean Upper Look", [
    {
      day: "Day 1 — Lean Push",
      exercises: [
        ex(E.INCLINE_DUMBBELL_PRESS, "4 sets", "10 reps"),
        ex(E.SHOULDER_PRESS, "3 sets", "10 reps"),
        ex(E.CHEST_FLY, "3 sets", "12 reps"),
        ex(E.LATERAL_RAISE, "3 sets", "15 reps"),
        ex(E.TRICEP_ROPE_PUSHDOWN, "3 sets", "12 reps"),
      ],
    },
    {
      day: "Day 2 — Lean Pull",
      exercises: [
        ex(E.PULLDOWN, "4 sets", "10 reps"),
        ex(E.SINGLE_ARM_ROW, "3 sets", "12 reps"),
        ex(E.REAR_DELT_FLY, "3 sets", "15 reps"),
        ex(E.HAMMER_CURL, "3 sets", "12 reps"),
        ex(E.FACE_PULL, "3 sets", "15 reps"),
      ],
    },
  ]),

  makePlan("Upper Focus 5", "Push Strength", [
    {
      day: "Day 1 — Heavy Push",
      exercises: [
        ex(E.BENCH_PRESS, "4 sets", "6-8 reps"),
        ex(E.DUMBBELL_SHOULDER_PRESS, "4 sets", "8 reps"),
        ex(E.CHEST_FLY, "3 sets", "12 reps"),
        ex(E.LATERAL_RAISE, "3 sets", "15 reps"),
        ex(E.SKULLCRUSHER, "3 sets", "12 reps"),
      ],
    },
    {
      day: "Day 2 — Pull Support",
      exercises: [
        ex(E.LAT_PULLDOWN, "4 sets", "10 reps"),
        ex(E.SEATED_ROW, "4 sets", "10 reps"),
        ex(E.FACE_PULL, "3 sets", "15 reps"),
        ex(E.BICEP_CURL, "3 sets", "12 reps"),
        ex(E.ROPE_PUSHDOWN, "3 sets", "12 reps"),
      ],
    },
  ]),

  makePlan("Upper Focus 6", "Back Dominance", [
    {
      day: "Day 1 — Width",
      exercises: [
        ex(E.LAT_PULLDOWN, "4 sets", "10 reps"),
        ex(E.PULL_UP_ASSIST, "4 sets", "8 reps"),
        ex(E.STRAIGHT_ARM_PULLDOWN, "3 sets", "12 reps"),
        ex(E.FACE_PULL, "3 sets", "15 reps"),
        ex(E.HAMMER_CURL, "3 sets", "12 reps"),
      ],
    },
    {
      day: "Day 2 — Thickness",
      exercises: [
        ex(E.BARBELL_ROW, "4 sets", "8 reps"),
        ex(E.SEATED_ROW, "4 sets", "10 reps"),
        ex(E.SINGLE_ARM_ROW, "3 sets", "12 reps"),
        ex(E.REAR_DELT_FLY, "3 sets", "15 reps"),
        ex(E.CABLE_CURL, "3 sets", "12 reps"),
      ],
    },
  ]),

  makePlan("Upper Focus 7", "Chest Emphasis", [
    {
      day: "Day 1 — Chest Heavy",
      exercises: [
        ex(E.BENCH_PRESS, "4 sets", "6-8 reps"),
        ex(E.INCLINE_PRESS, "4 sets", "8-10 reps"),
        ex(E.CHEST_FLY, "3 sets", "12 reps"),
        ex(E.CABLE_FLY, "3 sets", "12 reps"),
        ex(E.TRICEP_PUSHDOWN, "3 sets", "12 reps"),
      ],
    },
    {
      day: "Day 2 — Pull Balance",
      exercises: [
        ex(E.LAT_PULLDOWN, "4 sets", "10 reps"),
        ex(E.ROW, "4 sets", "10 reps"),
        ex(E.FACE_PULL, "3 sets", "15 reps"),
        ex(E.HAMMER_CURL, "3 sets", "12 reps"),
        ex(E.REAR_DELT_FLY, "3 sets", "15 reps"),
      ],
    },
  ]),

  makePlan("Upper Focus 8", "Arms + Shoulders", [
    {
      day: "Day 1 — Shoulders",
      exercises: [
        ex(E.ARNOLD_PRESS, "4 sets", "10 reps"),
        ex(E.LATERAL_RAISE, "4 sets", "15 reps"),
        ex(E.FRONT_RAISE, "3 sets", "12 reps"),
        ex(E.REAR_DELT_FLY, "3 sets", "15 reps"),
        ex(E.FACE_PULL, "3 sets", "15 reps"),
      ],
    },
    {
      day: "Day 2 — Arms",
      exercises: [
        ex(E.BICEP_CURL, "4 sets", "12 reps"),
        ex(E.HAMMER_CURL, "3 sets", "12 reps"),
        ex(E.CABLE_CURL, "3 sets", "12 reps"),
        ex(E.TRICEP_PUSHDOWN, "4 sets", "12 reps"),
        ex(E.OVERHEAD_TRICEP_EXTENSION, "3 sets", "12 reps"),
      ],
    },
  ]),

  makePlan("Upper Focus 9", "Athletic Upper", [
    {
      day: "Day 1 — Athletic Push",
      exercises: [
        ex(E.PUSH_UP, "3 sets", "max reps"),
        ex(E.DUMBBELL_PRESS, "4 sets", "10 reps"),
        ex(E.SHOULDER_PRESS, "3 sets", "10 reps"),
        ex(E.LATERAL_RAISE, "3 sets", "15 reps"),
        ex(E.TRICEP_ROPE_PUSHDOWN, "3 sets", "12 reps"),
      ],
    },
    {
      day: "Day 2 — Athletic Pull",
      exercises: [
        ex(E.PULLDOWN, "4 sets", "10 reps"),
        ex(E.DUMBBELL_ROW, "4 sets", "10 reps"),
        ex(E.STRAIGHT_ARM_PULLDOWN, "3 sets", "12 reps"),
        ex(E.FACE_PULL, "3 sets", "15 reps"),
        ex(E.HAMMER_CURL, "3 sets", "12 reps"),
      ],
    },
  ]),

  makePlan("Upper Focus 10", "Beginner Upper Reset", [
    {
      day: "Day 1 — Simple Push",
      exercises: [
        ex(E.CHEST_PRESS, "3 sets", "10 reps"),
        ex(E.SHOULDER_PRESS, "3 sets", "10 reps"),
        ex(E.LATERAL_RAISE, "3 sets", "12 reps"),
        ex(E.TRICEP_PUSHDOWN, "3 sets", "12 reps"),
        ex(E.PUSH_UP, "2 sets", "max reps"),
      ],
    },
    {
      day: "Day 2 — Simple Pull",
      exercises: [
        ex(E.LAT_PULLDOWN, "3 sets", "10 reps"),
        ex(E.SEATED_ROW, "3 sets", "10 reps"),
        ex(E.REAR_DELT_FLY, "3 sets", "12 reps"),
        ex(E.BICEP_CURL, "3 sets", "12 reps"),
        ex(E.FACE_PULL, "3 sets", "12 reps"),
      ],
    },
  ]),
];

const FULL_BODY_TEMPLATES = [
  makePlan("Full Body 1", "Balanced Full Body", [
    {
      day: "Day 1 — Full Body A",
      exercises: [
        ex(E.GOBLET_SQUAT, "4 sets", "10 reps"),
        ex(E.CHEST_PRESS, "4 sets", "10 reps"),
        ex(E.LAT_PULLDOWN, "4 sets", "10 reps"),
        ex(E.ROMANIAN_DEADLIFT, "3 sets", "10 reps"),
        ex(E.PLANK, "3 sets", "45 sec"),
      ],
    },
    {
      day: "Day 2 — Full Body B",
      exercises: [
        ex(E.LEG_PRESS, "4 sets", "10 reps"),
        ex(E.SHOULDER_PRESS, "3 sets", "10 reps"),
        ex(E.SEATED_ROW, "4 sets", "10 reps"),
        ex(E.WALKING_LUNGES, "3 sets", "20 steps"),
        ex(E.CABLE_CRUNCH, "3 sets", "15 reps"),
      ],
    },
  ]),

  makePlan("Full Body 2", "Strength + Hypertrophy", [
    {
      day: "Day 1 — Strength",
      exercises: [
        ex(E.SQUAT, "4 sets", "6-8 reps"),
        ex(E.BENCH_PRESS, "4 sets", "6-8 reps"),
        ex(E.ROW, "4 sets", "8 reps"),
        ex(E.RDL, "3 sets", "8 reps"),
        ex(E.PLANK, "3 sets", "45 sec"),
      ],
    },
    {
      day: "Day 2 — Hypertrophy",
      exercises: [
        ex(E.LEG_PRESS, "4 sets", "12 reps"),
        ex(E.INCLINE_PRESS, "3 sets", "10 reps"),
        ex(E.PULLDOWN, "3 sets", "10 reps"),
        ex(E.LUNGE, "3 sets", "12 reps each leg"),
        ex(E.TOE_REACH, "3 sets", "20 reps"),
      ],
    },
  ]),

  makePlan("Full Body 3", "Lean Full Body", [
    {
      day: "Day 1 — Lean A",
      exercises: [
        ex(E.GOBLET_SQUAT, "4 sets", "12 reps"),
        ex(E.PUSH_UP, "3 sets", "max reps"),
        ex(E.LAT_PULLDOWN, "3 sets", "10 reps"),
        ex(E.WALKING_LUNGE, "3 sets", "20 steps"),
        ex(E.PLANK, "3 sets", "45 sec"),
      ],
    },
    {
      day: "Day 2 — Lean B",
      exercises: [
        ex(E.LEG_PRESS, "4 sets", "12 reps"),
        ex(E.SHOULDER_PRESS, "3 sets", "10 reps"),
        ex(E.SEATED_ROW, "3 sets", "10 reps"),
        ex(E.RDL, "3 sets", "10 reps"),
        ex(E.CABLE_CRUNCH, "3 sets", "15 reps"),
      ],
    },
  ]),

  makePlan("Full Body 4", "Athletic Reset", [
    {
      day: "Day 1 — Athletic A",
      exercises: [
        ex(E.SQUAT, "4 sets", "8 reps"),
        ex(E.BENCH_PRESS, "4 sets", "8 reps"),
        ex(E.PULLDOWN, "3 sets", "10 reps"),
        ex(E.WALKING_LUNGE, "3 sets", "20 steps"),
        ex(E.PLANK, "3 sets", "45 sec"),
      ],
    },
    {
      day: "Day 2 — Athletic B",
      exercises: [
        ex(E.LEG_PRESS, "4 sets", "10 reps"),
        ex(E.SHOULDER_PRESS, "3 sets", "10 reps"),
        ex(E.ROW, "4 sets", "10 reps"),
        ex(E.RDL, "3 sets", "10 reps"),
        ex(E.DEAD_BUG, "3 sets", "12 each side"),
      ],
    },
  ]),

  makePlan("Full Body 5", "Glute-Biased Full Body", [
    {
      day: "Day 1 — Full A",
      exercises: [
        ex(E.HIP_THRUST, "4 sets", "10 reps"),
        ex(E.CHEST_PRESS, "3 sets", "10 reps"),
        ex(E.LAT_PULLDOWN, "3 sets", "10 reps"),
        ex(E.GOBLET_SQUAT, "3 sets", "10 reps"),
        ex(E.PLANK, "3 sets", "45 sec"),
      ],
    },
    {
      day: "Day 2 — Full B",
      exercises: [
        ex(E.LEG_PRESS, "4 sets", "10 reps"),
        ex(E.SHOULDER_PRESS, "3 sets", "10 reps"),
        ex(E.SEATED_ROW, "3 sets", "10 reps"),
        ex(E.CABLE_KICKBACK, "3 sets", "15 reps"),
        ex(E.CABLE_CRUNCH, "3 sets", "15 reps"),
      ],
    },
  ]),

  makePlan("Full Body 6", "Upper-Biased Full Body", [
    {
      day: "Day 1 — Upper Bias A",
      exercises: [
        ex(E.BENCH_PRESS, "4 sets", "8 reps"),
        ex(E.LAT_PULLDOWN, "4 sets", "10 reps"),
        ex(E.GOBLET_SQUAT, "3 sets", "10 reps"),
        ex(E.LATERAL_RAISE, "3 sets", "15 reps"),
        ex(E.PLANK, "3 sets", "45 sec"),
      ],
    },
    {
      day: "Day 2 — Upper Bias B",
      exercises: [
        ex(E.SHOULDER_PRESS, "3 sets", "10 reps"),
        ex(E.SEATED_ROW, "4 sets", "10 reps"),
        ex(E.LEG_PRESS, "3 sets", "10 reps"),
        ex(E.HAMMER_CURL, "3 sets", "12 reps"),
        ex(E.CABLE_CRUNCH, "3 sets", "15 reps"),
      ],
    },
  ]),

  makePlan("Full Body 7", "Lower-Biased Full Body", [
    {
      day: "Day 1 — Lower Bias A",
      exercises: [
        ex(E.SQUAT, "4 sets", "8 reps"),
        ex(E.CHEST_PRESS, "3 sets", "10 reps"),
        ex(E.LAT_PULLDOWN, "3 sets", "10 reps"),
        ex(E.HIP_THRUST, "3 sets", "10 reps"),
        ex(E.PLANK, "3 sets", "45 sec"),
      ],
    },
    {
      day: "Day 2 — Lower Bias B",
      exercises: [
        ex(E.LEG_PRESS, "4 sets", "10 reps"),
        ex(E.SEATED_ROW, "3 sets", "10 reps"),
        ex(E.RDL, "3 sets", "10 reps"),
        ex(E.REVERSE_LUNGE, "3 sets", "12 reps each leg"),
        ex(E.DEAD_BUG, "3 sets", "12 each side"),
      ],
    },
  ]),

  makePlan("Full Body 8", "Machine Full Body", [
    {
      day: "Day 1 — Machine A",
      exercises: [
        ex(E.LEG_PRESS, "4 sets", "10 reps"),
        ex(E.CHEST_PRESS, "4 sets", "10 reps"),
        ex(E.LAT_PULLDOWN, "4 sets", "10 reps"),
        ex(E.LEG_EXTENSION, "3 sets", "15 reps"),
        ex(E.CABLE_CRUNCH, "3 sets", "15 reps"),
      ],
    },
    {
      day: "Day 2 — Machine B",
      exercises: [
        ex(E.SEATED_LEG_CURL, "4 sets", "10 reps"),
        ex(E.SHOULDER_PRESS, "3 sets", "10 reps"),
        ex(E.SEATED_ROW, "4 sets", "10 reps"),
        ex(E.ABDUCTOR_MACHINE, "3 sets", "20 reps"),
        ex(E.PLANK, "3 sets", "45 sec"),
      ],
    },
  ]),

  makePlan("Full Body 9", "Dumbbell Full Body", [
    {
      day: "Day 1 — Dumbbell A",
      exercises: [
        ex(E.GOBLET_SQUAT, "4 sets", "10 reps"),
        ex(E.DUMBBELL_PRESS, "4 sets", "10 reps"),
        ex(E.DUMBBELL_ROW, "4 sets", "10 reps"),
        ex(E.DUMBBELL_RDL, "3 sets", "10 reps"),
        ex(E.TOE_REACH, "3 sets", "20 reps"),
      ],
    },
    {
      day: "Day 2 — Dumbbell B",
      exercises: [
        ex(E.STEP_UP, "3 sets", "12 reps each leg"),
        ex(E.ARNOLD_PRESS, "3 sets", "10 reps"),
        ex(E.SINGLE_ARM_ROW, "3 sets", "10 reps"),
        ex(E.BULGARIAN_SPLIT_SQUAT, "3 sets", "10 reps each leg"),
        ex(E.PLANK, "3 sets", "45 sec"),
      ],
    },
  ]),

  makePlan("Full Body 10", "Beginner Full Body Reset", [
    {
      day: "Day 1 — Reset A",
      exercises: [
        ex(E.GOBLET_SQUAT, "3 sets", "10 reps"),
        ex(E.CHEST_PRESS, "3 sets", "10 reps"),
        ex(E.LAT_PULLDOWN, "3 sets", "10 reps"),
        ex(E.GLUTE_BRIDGE, "3 sets", "12 reps"),
        ex(E.PLANK, "3 sets", "30-45 sec"),
      ],
    },
    {
      day: "Day 2 — Reset B",
      exercises: [
        ex(E.LEG_PRESS, "3 sets", "10 reps"),
        ex(E.SHOULDER_PRESS, "3 sets", "10 reps"),
        ex(E.SEATED_ROW, "3 sets", "10 reps"),
        ex(E.STEP_UP, "3 sets", "10 reps each leg"),
        ex(E.DEAD_BUG, "3 sets", "10 each side"),
      ],
    },
  ]),
];

function pickTemplates(focus) {
  switch (focus) {
    case "Booty":
      return BOOTY_TEMPLATES;
    case "Abs":
      return ABS_TEMPLATES;
    case "Legs":
      return LEGS_TEMPLATES;
    case "Upper Body":
      return UPPER_TEMPLATES;
    default:
      return FULL_BODY_TEMPLATES;
  }
}

function adjustSplitToDays(split, days) {
  const result = [];

  for (let i = 0; i < days; i++) {
    result.push(split[i % split.length]);
  }

  return result.map((item, index) => {
    const titlePart = item.day.includes("—")
      ? item.day.split("—")[1].trim()
      : item.day;

    return {
      ...item,
      day: `Day ${index + 1} — ${titlePart}`,
    };
  });
}

function inferTrainingStyle(goal, focus, bodyType) {
  if (goal === "Build Muscle") return "Muscle Building";
  if (goal === "Lose Fat") return "Fat Loss";
  if (goal === "Tone & Shape Body") return "Shaping";
  if (goal === "Maintain Athletic Lifestyle") return "Athletic Balance";
  if (goal === "Beginner Body Reset") return "Beginner Reset";
  if (focus === "Booty" && bodyType === "Curvy") return "Shaping";
  return "Balanced Training";
}

function inferNutritionStyle(goal) {
  if (goal === "Build Muscle") return "High protein + calorie surplus";
  if (goal === "Lose Fat") return "High protein + mild calorie deficit";
  if (goal === "Tone & Shape Body")
    return "High protein + controlled maintenance";
  if (goal === "Beginner Body Reset")
    return "Simple high-protein structure";
  return "Balanced maintenance nutrition";
}

function inferCardioRecommendation(goal, lifestyle) {
  if (goal === "Lose Fat")
    return "Optional cardio 3–4x/week for 20–30 minutes";
  if (goal === "Maintain Athletic Lifestyle")
    return "Optional cardio 2–3x/week";
  if (lifestyle === "Highly Active")
    return "Keep cardio moderate to protect recovery";
  return "Optional light cardio 1–2x/week";
}

function rotateTemplateIndex({
  templateIndex = 0,
  goal,
  focus,
  days,
  bodyType,
  level,
  lifestyle,
}) {
  const seed =
    String(goal).length +
    String(focus).length +
    Number(days) +
    String(bodyType).length +
    String(level).length +
    String(lifestyle).length +
    Number(templateIndex);

  return seed;
}

function normalizeExercise(exercise, goal, level) {
  const [name, sets, reps] = exercise;

  let adjustedSets = sets;
  let adjustedReps = reps;

  if (goal === "Lose Fat") {
    adjustedReps =
      reps.includes("sec") || reps.includes("round")
        ? reps
        : reps.replace("6-8", "10-12").replace("8-10", "12-15");
  }

  if (goal === "Build Muscle") {
    adjustedSets = sets.replace("3 sets", "4 sets");
  }

  if (level === "Beginner") {
    adjustedSets = adjustedSets.replace("5 sets", "4 sets");
    adjustedReps = adjustedReps.replace("6-8", "8-10");
  }

  return [name, adjustedSets, adjustedReps];
}

function applyProfileLogicToSplit(split, profile) {
  return split.map((dayBlock) => ({
    ...dayBlock,
    exercises: dayBlock.exercises.map((exercise) =>
      normalizeExercise(exercise, profile.goal, profile.level)
    ),
  }));
}

export function createAutoProfile({
  goal,
  focus,
  days,
  bodyType = "Average",
  level = "Beginner",
  lifestyle = "Balanced Lifestyle",
}) {
  return {
    goal,
    focus,
    days: Number(days),
    bodyType,
    level,
    lifestyle,
    trainingStyle: inferTrainingStyle(goal, focus, bodyType),
    nutritionStyle: inferNutritionStyle(goal),
    cardioRecommendation: inferCardioRecommendation(goal, lifestyle),
    restRule: DEFAULT_REST_RULES[goal] || "60–90 sec rest",
    bodyTypeNote: BODY_TYPE_NOTES[bodyType] || "",
    levelRule: LEVEL_RULES[level] || LEVEL_RULES.Beginner,
    goalRule: GOAL_RULES[goal] || GOAL_RULES["Tone & Shape Body"],
  };
}

export function generateWorkoutSystem({
  goal,
  focus,
  days,
  templateIndex = 0,
  bodyType = "Average",
  level = "Beginner",
  lifestyle = "Balanced Lifestyle",
}) {
  const profile = createAutoProfile({
    goal,
    focus,
    days,
    bodyType,
    level,
    lifestyle,
  });

  const templates = pickTemplates(focus);
  const rotatedIndex =
    rotateTemplateIndex({
      templateIndex,
      goal,
      focus,
      days,
      bodyType,
      level,
      lifestyle,
    }) % templates.length;

  const chosen = templates[rotatedIndex];
  const adjustedSplit = adjustSplitToDays(chosen.split, Number(days));
  const profiledSplit = applyProfileLogicToSplit(adjustedSplit, profile);

  return {
    title: chosen.name,
    category: chosen.category,
    goal,
    focus,
    days: Number(days),
    bodyType,
    level,
    lifestyle,
    profile,
    split: profiledSplit,
    note:
      goal === "Lose Fat"
        ? "Shorter rest times, strong weekly consistency, and optional cardio 3–4x/week."
        : goal === "Build Muscle"
        ? "Progressive overload, recovery, and enough food intake are the main priorities."
        : goal === "Tone & Shape Body"
        ? "Controlled tempo, moderate rest, and clean execution will shape the physique best."
        : goal === "Beginner Body Reset"
        ? "Focus on learning movement patterns, routine, and recovery first."
        : "Train consistently, recover well, and maintain athletic output.",
    recoveryNote:
      level === "Advanced"
        ? "Use 1–2 low stress recovery days per week."
        : "Prioritize sleep, hydration, and consistent weekly movement.",
    nutritionHint: profile.nutritionStyle,
    cardioHint: profile.cardioRecommendation,
  };
}

export function getRecommendedDefaults({ goal, focus, bodyType, level }) {
  let recommendedDays = 3;

  if (goal === "Build Muscle") recommendedDays = 4;
  if (goal === "Lose Fat") recommendedDays = 4;
  if (goal === "Beginner Body Reset") recommendedDays = 3;
  if (focus === "Booty" && level !== "Beginner") recommendedDays = 4;
  if (bodyType === "Plus Size" && goal === "Beginner Body Reset")
    recommendedDays = 3;

  return {
    recommendedDays,
    recommendedTemplateIndex: 0,
  };
}
