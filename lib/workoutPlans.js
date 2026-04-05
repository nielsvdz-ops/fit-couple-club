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

const BOOTY_TEMPLATES = [
  {
    name: "Booty Builder 1",
    category: "Shape & Growth",
    split: [
      {
        day: "Day 1 — Glutes Heavy",
        exercises: [
          ["Barbell Hip Thrust", "4 sets", "8-10 reps"],
          ["Romanian Deadlift", "4 sets", "8-10 reps"],
          ["Bulgarian Split Squat", "3 sets", "10-12 reps each leg"],
          ["Cable Kickback", "3 sets", "12-15 reps each leg"],
          ["Band Abductions", "3 sets", "20 reps"],
        ],
      },
      {
        day: "Day 2 — Upper Body",
        exercises: [
          ["Lat Pulldown", "4 sets", "10-12 reps"],
          ["Seated Row", "3 sets", "10-12 reps"],
          ["Shoulder Press", "3 sets", "10 reps"],
          ["Bicep Curl", "3 sets", "12 reps"],
          ["Tricep Rope Pushdown", "3 sets", "12 reps"],
        ],
      },
      {
        day: "Day 3 — Glutes Volume",
        exercises: [
          ["Smith Machine Squat", "4 sets", "10-12 reps"],
          ["Walking Lunges", "3 sets", "20 steps"],
          ["Step-Ups", "3 sets", "12 reps each leg"],
          ["Glute Bridge", "3 sets", "15 reps"],
          ["Abductor Machine", "3 sets", "20 reps"],
        ],
      },
    ],
  },
  {
    name: "Booty Builder 2",
    category: "Strength & Shape",
    split: [
      {
        day: "Day 1 — Glute Strength",
        exercises: [
          ["Hip Thrust", "5 sets", "6-8 reps"],
          ["Sumo Deadlift", "4 sets", "6-8 reps"],
          ["Reverse Lunges", "3 sets", "10 reps each leg"],
          ["Cable Pull Through", "3 sets", "12-15 reps"],
          ["Frog Pumps", "3 sets", "25 reps"],
        ],
      },
      {
        day: "Day 2 — Lower Body Shape",
        exercises: [
          ["Leg Press (high feet)", "4 sets", "10-12 reps"],
          ["Dumbbell RDL", "4 sets", "10 reps"],
          ["Curtsy Lunge", "3 sets", "12 reps each leg"],
          ["Cable Kickback", "3 sets", "15 reps each leg"],
          ["Banded Glute Burnout", "2 rounds", "30 reps"],
        ],
      },
      {
        day: "Day 3 — Upper + Core",
        exercises: [
          ["Chest Press", "3 sets", "10-12 reps"],
          ["Assisted Pull-Up", "3 sets", "8-10 reps"],
          ["Lateral Raise", "3 sets", "15 reps"],
          ["Plank", "3 sets", "45 sec"],
          ["Dead Bug", "3 sets", "12 reps each side"],
        ],
      },
    ],
  },
  {
    name: "Booty Builder 3",
    category: "Lower / Upper Split",
    split: [
      {
        day: "Day 1 — Lower Glutes",
        exercises: [
          ["Deficit Reverse Lunge", "4 sets", "10 reps each leg"],
          ["Romanian Deadlift", "4 sets", "8-10 reps"],
          ["45-Degree Hyperextension", "3 sets", "12-15 reps"],
          ["Cable Pull Through", "3 sets", "15 reps"],
          ["Standing Band Abduction", "3 sets", "20 reps"],
        ],
      },
      {
        day: "Day 2 — Upper Body",
        exercises: [
          ["Single Arm Row", "4 sets", "10 reps"],
          ["Incline Dumbbell Press", "3 sets", "10 reps"],
          ["Face Pull", "3 sets", "15 reps"],
          ["Hammer Curl", "3 sets", "12 reps"],
          ["Overhead Tricep Extension", "3 sets", "12 reps"],
        ],
      },
      {
        day: "Day 3 — Upper Glutes",
        exercises: [
          ["Hip Thrust", "4 sets", "10 reps"],
          ["Smith Machine Split Squat", "3 sets", "12 reps each leg"],
          ["Glute Bridge March", "3 sets", "16 reps"],
          ["Kickback", "3 sets", "15 reps each leg"],
          ["Seated Abduction", "3 sets", "20 reps"],
        ],
      },
    ],
  },
  {
    name: "Booty Builder 4",
    category: "Glutes + Hamstrings",
    split: [
      {
        day: "Day 1 — Glutes + Hamstrings",
        exercises: [
          ["Barbell Hip Thrust", "4 sets", "8 reps"],
          ["Seated Leg Curl", "4 sets", "10-12 reps"],
          ["RDL", "4 sets", "8-10 reps"],
          ["Cable Kickback", "3 sets", "12-15 reps"],
          ["Banded Burnout", "2 rounds", "30 reps"],
        ],
      },
      {
        day: "Day 2 — Quads + Glutes",
        exercises: [
          ["Hack Squat", "4 sets", "8-10 reps"],
          ["Walking Lunge", "3 sets", "20 steps"],
          ["Leg Extension", "3 sets", "15 reps"],
          ["Glute Bridge", "3 sets", "15 reps"],
          ["Abductor Machine", "3 sets", "20 reps"],
        ],
      },
      {
        day: "Day 3 — Upper Body",
        exercises: [
          ["Lat Pulldown", "4 sets", "10 reps"],
          ["Row", "3 sets", "10 reps"],
          ["Shoulder Press", "3 sets", "10 reps"],
          ["Curl", "3 sets", "12 reps"],
          ["Pushdown", "3 sets", "12 reps"],
        ],
      },
    ],
  },
  {
    name: "Booty Builder 5",
    category: "Pump & Shape",
    split: [
      {
        day: "Day 1 — Booty Pump",
        exercises: [
          ["Hip Thrust", "4 sets", "12 reps"],
          ["Frog Pumps", "3 sets", "30 reps"],
          ["Cable Kickback", "3 sets", "15 reps"],
          ["Side Lying Abduction", "3 sets", "20 reps"],
          ["Glute Bridge Hold", "3 sets", "30 sec"],
        ],
      },
      {
        day: "Day 2 — Full Lower Body",
        exercises: [
          ["Leg Press", "4 sets", "10 reps"],
          ["Dumbbell RDL", "4 sets", "10 reps"],
          ["Step Ups", "3 sets", "12 reps each leg"],
          ["Hamstring Curl", "3 sets", "12 reps"],
          ["Abductor Machine", "3 sets", "20 reps"],
        ],
      },
      {
        day: "Day 3 — Upper Body + Core",
        exercises: [
          ["Incline Press", "3 sets", "10 reps"],
          ["Row", "3 sets", "10 reps"],
          ["Lateral Raise", "3 sets", "15 reps"],
          ["Cable Crunch", "3 sets", "15 reps"],
          ["Plank", "3 sets", "45 sec"],
        ],
      },
    ],
  },
  {
    name: "Booty Builder 6",
    category: "Strength + Push Mix",
    split: [
      {
        day: "Day 1 — Strength Lower",
        exercises: [
          ["Sumo Deadlift", "4 sets", "6 reps"],
          ["Hip Thrust", "4 sets", "8 reps"],
          ["Bulgarian Split Squat", "3 sets", "8 reps each leg"],
          ["Kickback", "3 sets", "12 reps"],
          ["Abduction", "3 sets", "20 reps"],
        ],
      },
      {
        day: "Day 2 — Upper Push",
        exercises: [
          ["Chest Press", "4 sets", "8-10 reps"],
          ["Shoulder Press", "3 sets", "10 reps"],
          ["Lateral Raise", "3 sets", "15 reps"],
          ["Tricep Extension", "3 sets", "12 reps"],
          ["Push-Up", "2 sets", "max reps"],
        ],
      },
      {
        day: "Day 3 — Glute Shape",
        exercises: [
          ["Hip Thrust", "4 sets", "10 reps"],
          ["Smith Squat", "4 sets", "10 reps"],
          ["Reverse Lunge", "3 sets", "12 reps each leg"],
          ["Cable Kickback", "3 sets", "15 reps"],
          ["Frog Pumps", "2 sets", "30 reps"],
        ],
      },
    ],
  },
  {
    name: "Booty Builder 7",
    category: "Quad + Hamstring Balance",
    split: [
      {
        day: "Day 1 — Glutes + Quads",
        exercises: [
          ["Hack Squat", "4 sets", "8 reps"],
          ["Hip Thrust", "4 sets", "10 reps"],
          ["Leg Extension", "3 sets", "15 reps"],
          ["Walking Lunges", "3 sets", "20 steps"],
          ["Abduction", "3 sets", "20 reps"],
        ],
      },
      {
        day: "Day 2 — Back + Shoulders",
        exercises: [
          ["Pulldown", "4 sets", "10 reps"],
          ["Seated Row", "3 sets", "10 reps"],
          ["Lateral Raise", "3 sets", "15 reps"],
          ["Rear Delt Fly", "3 sets", "15 reps"],
          ["Curl", "3 sets", "12 reps"],
        ],
      },
      {
        day: "Day 3 — Glutes + Hamstrings",
        exercises: [
          ["RDL", "4 sets", "8 reps"],
          ["Seated Curl", "4 sets", "10 reps"],
          ["Glute Bridge", "3 sets", "15 reps"],
          ["Cable Kickback", "3 sets", "15 reps"],
          ["Band Burnout", "2 rounds", "25 reps"],
        ],
      },
    ],
  },
  {
    name: "Booty Builder 8",
    category: "Isolation Emphasis",
    split: [
      {
        day: "Day 1 — Glute Isolation",
        exercises: [
          ["Kickback", "4 sets", "15 reps"],
          ["Glute Bridge", "4 sets", "12 reps"],
          ["Frog Pumps", "3 sets", "25 reps"],
          ["Abductor Machine", "4 sets", "20 reps"],
          ["Bodyweight Pulse Squats", "2 rounds", "30 reps"],
        ],
      },
      {
        day: "Day 2 — Lower Body Compound",
        exercises: [
          ["Leg Press", "4 sets", "10 reps"],
          ["RDL", "4 sets", "10 reps"],
          ["Split Squat", "3 sets", "10 reps"],
          ["Hamstring Curl", "3 sets", "12 reps"],
          ["Step Up", "3 sets", "12 reps"],
        ],
      },
      {
        day: "Day 3 — Upper Body",
        exercises: [
          ["Chest Press", "3 sets", "10 reps"],
          ["Pulldown", "3 sets", "10 reps"],
          ["Shoulder Press", "3 sets", "10 reps"],
          ["Cable Crunch", "3 sets", "15 reps"],
          ["Plank", "3 sets", "45 sec"],
        ],
      },
    ],
  },
  {
    name: "Booty Builder 9",
    category: "Strength / Hypertrophy Mix",
    split: [
      {
        day: "Day 1 — Lower Strength",
        exercises: [
          ["Hip Thrust", "5 sets", "5 reps"],
          ["RDL", "4 sets", "6 reps"],
          ["Bulgarian Split Squat", "3 sets", "8 reps"],
          ["Cable Kickback", "3 sets", "12 reps"],
          ["Abductions", "3 sets", "20 reps"],
        ],
      },
      {
        day: "Day 2 — Upper Pull",
        exercises: [
          ["Pull-Up Assist", "4 sets", "8 reps"],
          ["Row", "4 sets", "10 reps"],
          ["Rear Delt Fly", "3 sets", "15 reps"],
          ["Bicep Curl", "3 sets", "12 reps"],
          ["Farmer Carry", "3 rounds", "30 sec"],
        ],
      },
      {
        day: "Day 3 — Lower Hypertrophy",
        exercises: [
          ["Smith Squat", "4 sets", "10 reps"],
          ["Glute Bridge", "4 sets", "12 reps"],
          ["Walking Lunge", "3 sets", "20 steps"],
          ["Kickback", "3 sets", "15 reps"],
          ["Band Burnout", "2 sets", "30 reps"],
        ],
      },
    ],
  },
  {
    name: "Booty Builder 10",
    category: "Dual Glute Focus",
    split: [
      {
        day: "Day 1 — Glute Focus A",
        exercises: [
          ["Hip Thrust", "4 sets", "10 reps"],
          ["RDL", "4 sets", "10 reps"],
          ["Kickback", "3 sets", "15 reps"],
          ["Abduction", "3 sets", "20 reps"],
          ["Glute Bridge Hold", "3 sets", "30 sec"],
        ],
      },
      {
        day: "Day 2 — Glute Focus B",
        exercises: [
          ["Smith Squat", "4 sets", "10 reps"],
          ["Reverse Lunge", "3 sets", "12 reps"],
          ["Step Up", "3 sets", "12 reps"],
          ["Cable Pull Through", "3 sets", "15 reps"],
          ["Frog Pumps", "3 sets", "25 reps"],
        ],
      },
      {
        day: "Day 3 — Upper + Core",
        exercises: [
          ["Row", "3 sets", "10 reps"],
          ["Press", "3 sets", "10 reps"],
          ["Shoulder Raise", "3 sets", "15 reps"],
          ["Cable Crunch", "3 sets", "15 reps"],
          ["Plank", "3 sets", "45 sec"],
        ],
      },
    ],
  },
];

const ABS_TEMPLATES = [
  {
    name: "Core Sculpt 1",
    category: "Abs + Upper",
    split: [
      {
        day: "Day 1 — Upper + Core",
        exercises: [
          ["Lat Pulldown", "4 sets", "10 reps"],
          ["Seated Row", "3 sets", "10 reps"],
          ["Cable Crunch", "4 sets", "15 reps"],
          ["Hanging Knee Raise", "3 sets", "12 reps"],
          ["Plank", "3 sets", "45 sec"],
        ],
      },
      {
        day: "Day 2 — Lower + Core",
        exercises: [
          ["Goblet Squat", "4 sets", "10 reps"],
          ["Romanian Deadlift", "4 sets", "10 reps"],
          ["Dead Bug", "3 sets", "12 each side"],
          ["Reverse Crunch", "3 sets", "15 reps"],
          ["Mountain Climbers", "3 rounds", "30 sec"],
        ],
      },
    ],
  },
  {
    name: "Core Sculpt 2",
    category: "Push + Pull Core Mix",
    split: [
      {
        day: "Day 1 — Push + Abs",
        exercises: [
          ["Chest Press", "4 sets", "10 reps"],
          ["Shoulder Press", "3 sets", "10 reps"],
          ["Cable Crunch", "4 sets", "15 reps"],
          ["Toe Reach", "3 sets", "20 reps"],
          ["Plank", "3 sets", "60 sec"],
        ],
      },
      {
        day: "Day 2 — Pull + Core",
        exercises: [
          ["Pulldown", "4 sets", "10 reps"],
          ["Single Arm Row", "3 sets", "12 reps"],
          ["Russian Twist", "3 sets", "20 reps"],
          ["Dead Bug", "3 sets", "12 each side"],
          ["Side Plank", "3 sets", "30 sec each side"],
        ],
      },
    ],
  },
  {
    name: "Core Sculpt 3",
    category: "Athletic Core",
    split: [
      {
        day: "Day 1 — Athletic Core",
        exercises: [
          ["Cable Crunch", "4 sets", "15 reps"],
          ["Dead Bug", "3 sets", "12 each side"],
          ["Plank", "3 sets", "45 sec"],
          ["Mountain Climbers", "3 rounds", "30 sec"],
          ["Toe Reach", "3 sets", "20 reps"],
        ],
      },
      {
        day: "Day 2 — Core + Legs",
        exercises: [
          ["Goblet Squat", "4 sets", "10 reps"],
          ["Walking Lunge", "3 sets", "20 steps"],
          ["Reverse Crunch", "3 sets", "15 reps"],
          ["Side Plank", "3 sets", "30 sec each side"],
          ["Dead Bug", "3 sets", "12 each side"],
        ],
      },
    ],
  },
  {
    name: "Core Sculpt 4",
    category: "Tight Waist",
    split: [
      {
        day: "Day 1 — Tighten Session",
        exercises: [
          ["Cable Crunch", "4 sets", "15 reps"],
          ["Plank", "3 sets", "45 sec"],
          ["Reverse Crunch", "3 sets", "15 reps"],
          ["Dead Bug", "3 sets", "12 each side"],
          ["Toe Reach", "3 sets", "20 reps"],
        ],
      },
      {
        day: "Day 2 — Full Body Core",
        exercises: [
          ["Push-Up", "3 sets", "max reps"],
          ["Goblet Squat", "4 sets", "10 reps"],
          ["Mountain Climbers", "3 rounds", "30 sec"],
          ["Russian Twist", "3 sets", "20 reps"],
          ["Plank", "3 sets", "60 sec"],
        ],
      },
    ],
  },
];

const LEGS_TEMPLATES = [
  {
    name: "Leg Strength 1",
    category: "Balanced Lower",
    split: [
      {
        day: "Day 1 — Quad Focus",
        exercises: [
          ["Hack Squat", "4 sets", "8-10 reps"],
          ["Leg Press", "4 sets", "10 reps"],
          ["Leg Extension", "3 sets", "15 reps"],
          ["Walking Lunges", "3 sets", "20 steps"],
          ["Calf Raise", "4 sets", "15 reps"],
        ],
      },
      {
        day: "Day 2 — Hamstrings + Glutes",
        exercises: [
          ["Romanian Deadlift", "4 sets", "8 reps"],
          ["Seated Leg Curl", "4 sets", "10 reps"],
          ["Hip Thrust", "4 sets", "10 reps"],
          ["Reverse Lunge", "3 sets", "12 reps each leg"],
          ["Calf Raise", "4 sets", "15 reps"],
        ],
      },
    ],
  },
  {
    name: "Leg Strength 2",
    category: "Classic Lower Split",
    split: [
      {
        day: "Day 1 — Lower Body A",
        exercises: [
          ["Back Squat", "4 sets", "6-8 reps"],
          ["Bulgarian Split Squat", "3 sets", "10 reps each leg"],
          ["Leg Extension", "3 sets", "15 reps"],
          ["Walking Lunge", "3 sets", "20 steps"],
          ["Standing Calf Raise", "4 sets", "15 reps"],
        ],
      },
      {
        day: "Day 2 — Lower Body B",
        exercises: [
          ["RDL", "4 sets", "8 reps"],
          ["Leg Curl", "4 sets", "10 reps"],
          ["Step Up", "3 sets", "12 reps"],
          ["Glute Bridge", "3 sets", "15 reps"],
          ["Seated Calf Raise", "4 sets", "15 reps"],
        ],
      },
    ],
  },
  {
    name: "Leg Strength 3",
    category: "Quad Builder",
    split: [
      {
        day: "Day 1 — Front Leg Focus",
        exercises: [
          ["Hack Squat", "4 sets", "8 reps"],
          ["Leg Press", "4 sets", "10 reps"],
          ["Leg Extension", "4 sets", "15 reps"],
          ["Walking Lunge", "3 sets", "20 steps"],
          ["Standing Calf Raise", "4 sets", "15 reps"],
        ],
      },
      {
        day: "Day 2 — Lower Support",
        exercises: [
          ["Goblet Squat", "4 sets", "10 reps"],
          ["Step Up", "3 sets", "12 reps"],
          ["Seated Leg Curl", "3 sets", "12 reps"],
          ["Glute Bridge", "3 sets", "15 reps"],
          ["Seated Calf Raise", "4 sets", "15 reps"],
        ],
      },
    ],
  },
  {
    name: "Leg Strength 4",
    category: "Posterior Chain",
    split: [
      {
        day: "Day 1 — Hamstring Focus",
        exercises: [
          ["Romanian Deadlift", "4 sets", "8 reps"],
          ["Seated Leg Curl", "4 sets", "10 reps"],
          ["Hip Thrust", "4 sets", "10 reps"],
          ["Reverse Lunge", "3 sets", "12 reps"],
          ["Standing Calf Raise", "4 sets", "15 reps"],
        ],
      },
      {
        day: "Day 2 — Lower Compound",
        exercises: [
          ["Back Squat", "4 sets", "6-8 reps"],
          ["Leg Press", "4 sets", "10 reps"],
          ["Walking Lunge", "3 sets", "20 steps"],
          ["Glute Bridge", "3 sets", "15 reps"],
          ["Seated Calf Raise", "4 sets", "15 reps"],
        ],
      },
    ],
  },
];

const UPPER_TEMPLATES = [
  {
    name: "Upper Focus 1",
    category: "Push / Pull Base",
    split: [
      {
        day: "Day 1 — Push",
        exercises: [
          ["Incline Dumbbell Press", "4 sets", "8-10 reps"],
          ["Shoulder Press", "4 sets", "10 reps"],
          ["Chest Fly", "3 sets", "12 reps"],
          ["Lateral Raise", "3 sets", "15 reps"],
          ["Tricep Pushdown", "3 sets", "12 reps"],
        ],
      },
      {
        day: "Day 2 — Pull",
        exercises: [
          ["Lat Pulldown", "4 sets", "10 reps"],
          ["Seated Row", "4 sets", "10 reps"],
          ["Rear Delt Fly", "3 sets", "15 reps"],
          ["Hammer Curl", "3 sets", "12 reps"],
          ["Face Pull", "3 sets", "15 reps"],
        ],
      },
    ],
  },
  {
    name: "Upper Focus 2",
    category: "Chest / Back Split",
    split: [
      {
        day: "Day 1 — Chest + Shoulders",
        exercises: [
          ["Chest Press", "4 sets", "8 reps"],
          ["Incline Press", "3 sets", "10 reps"],
          ["Shoulder Press", "3 sets", "10 reps"],
          ["Lateral Raise", "3 sets", "15 reps"],
          ["Overhead Tricep Extension", "3 sets", "12 reps"],
        ],
      },
      {
        day: "Day 2 — Back + Arms",
        exercises: [
          ["Pull-Up Assist", "4 sets", "8 reps"],
          ["Row", "4 sets", "10 reps"],
          ["Cable Curl", "3 sets", "12 reps"],
          ["Face Pull", "3 sets", "15 reps"],
          ["Rope Pushdown", "3 sets", "12 reps"],
        ],
      },
    ],
  },
  {
    name: "Upper Focus 3",
    category: "Shoulder Sculpt",
    split: [
      {
        day: "Day 1 — Shoulder Shape",
        exercises: [
          ["Shoulder Press", "4 sets", "10 reps"],
          ["Lateral Raise", "4 sets", "15 reps"],
          ["Rear Delt Fly", "3 sets", "15 reps"],
          ["Face Pull", "3 sets", "15 reps"],
          ["Hammer Curl", "3 sets", "12 reps"],
        ],
      },
      {
        day: "Day 2 — Upper Support",
        exercises: [
          ["Lat Pulldown", "4 sets", "10 reps"],
          ["Chest Press", "3 sets", "10 reps"],
          ["Incline Dumbbell Press", "3 sets", "10 reps"],
          ["Tricep Pushdown", "3 sets", "12 reps"],
          ["Cable Curl", "3 sets", "12 reps"],
        ],
      },
    ],
  },
  {
    name: "Upper Focus 4",
    category: "Lean Upper Look",
    split: [
      {
        day: "Day 1 — Lean Push",
        exercises: [
          ["Incline Dumbbell Press", "4 sets", "10 reps"],
          ["Shoulder Press", "3 sets", "10 reps"],
          ["Chest Fly", "3 sets", "12 reps"],
          ["Lateral Raise", "3 sets", "15 reps"],
          ["Tricep Rope Pushdown", "3 sets", "12 reps"],
        ],
      },
      {
        day: "Day 2 — Lean Pull",
        exercises: [
          ["Pulldown", "4 sets", "10 reps"],
          ["Single Arm Row", "3 sets", "12 reps"],
          ["Rear Delt Fly", "3 sets", "15 reps"],
          ["Hammer Curl", "3 sets", "12 reps"],
          ["Face Pull", "3 sets", "15 reps"],
        ],
      },
    ],
  },
];

const FULL_BODY_TEMPLATES = [
  {
    name: "Full Body 1",
    category: "Balanced Full Body",
    split: [
      {
        day: "Day 1 — Full Body A",
        exercises: [
          ["Goblet Squat", "4 sets", "10 reps"],
          ["Chest Press", "4 sets", "10 reps"],
          ["Lat Pulldown", "4 sets", "10 reps"],
          ["Romanian Deadlift", "3 sets", "10 reps"],
          ["Plank", "3 sets", "45 sec"],
        ],
      },
      {
        day: "Day 2 — Full Body B",
        exercises: [
          ["Leg Press", "4 sets", "10 reps"],
          ["Shoulder Press", "3 sets", "10 reps"],
          ["Seated Row", "4 sets", "10 reps"],
          ["Walking Lunges", "3 sets", "20 steps"],
          ["Cable Crunch", "3 sets", "15 reps"],
        ],
      },
    ],
  },
  {
    name: "Full Body 2",
    category: "Strength + Hypertrophy",
    split: [
      {
        day: "Day 1 — Strength",
        exercises: [
          ["Squat", "4 sets", "6-8 reps"],
          ["Bench Press", "4 sets", "6-8 reps"],
          ["Row", "4 sets", "8 reps"],
          ["RDL", "3 sets", "8 reps"],
          ["Plank", "3 sets", "45 sec"],
        ],
      },
      {
        day: "Day 2 — Hypertrophy",
        exercises: [
          ["Leg Press", "4 sets", "12 reps"],
          ["Incline Press", "3 sets", "10 reps"],
          ["Pulldown", "3 sets", "10 reps"],
          ["Lunge", "3 sets", "12 reps each leg"],
          ["Toe Reach", "3 sets", "20 reps"],
        ],
      },
    ],
  },
  {
    name: "Full Body 3",
    category: "Lean Full Body",
    split: [
      {
        day: "Day 1 — Lean A",
        exercises: [
          ["Goblet Squat", "4 sets", "12 reps"],
          ["Push-Up", "3 sets", "max reps"],
          ["Lat Pulldown", "3 sets", "10 reps"],
          ["Walking Lunge", "3 sets", "20 steps"],
          ["Plank", "3 sets", "45 sec"],
        ],
      },
      {
        day: "Day 2 — Lean B",
        exercises: [
          ["Leg Press", "4 sets", "12 reps"],
          ["Shoulder Press", "3 sets", "10 reps"],
          ["Seated Row", "3 sets", "10 reps"],
          ["RDL", "3 sets", "10 reps"],
          ["Cable Crunch", "3 sets", "15 reps"],
        ],
      },
    ],
  },
  {
    name: "Full Body 4",
    category: "Athletic Reset",
    split: [
      {
        day: "Day 1 — Athletic A",
        exercises: [
          ["Squat", "4 sets", "8 reps"],
          ["Bench Press", "4 sets", "8 reps"],
          ["Pulldown", "3 sets", "10 reps"],
          ["Walking Lunge", "3 sets", "20 steps"],
          ["Plank", "3 sets", "45 sec"],
        ],
      },
      {
        day: "Day 2 — Athletic B",
        exercises: [
          ["Leg Press", "4 sets", "10 reps"],
          ["Shoulder Press", "3 sets", "10 reps"],
          ["Row", "4 sets", "10 reps"],
          ["RDL", "3 sets", "10 reps"],
          ["Dead Bug", "3 sets", "12 each side"],
        ],
      },
    ],
  },
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
