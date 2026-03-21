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

export const TRAINING_DAYS = [2, 3, 4, 5];

const BOOTY_TEMPLATES = [
  {
    name: "Booty Builder 1",
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
];

const LEGS_TEMPLATES = [
  {
    name: "Leg Strength 1",
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
];

const UPPER_TEMPLATES = [
  {
    name: "Upper Focus 1",
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
];

const FULL_BODY_TEMPLATES = [
  {
    name: "Full Body 1",
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

export function generateWorkoutSystem({ goal, focus, days, templateIndex }) {
  const templates = pickTemplates(focus);
  const chosen = templates[templateIndex % templates.length];

  const split = chosen.split.slice(0, Number(days));

  return {
    title: chosen.name,
    goal,
    focus,
    days: Number(days),
    split,
    note:
      goal === "Lose Fat"
        ? "Keep rest times moderate and add light cardio after 2 sessions per week."
        : goal === "Build Muscle"
        ? "Progress load over time and focus on strong recovery and food intake."
        : "Train with good form, strong consistency, and controlled execution.",
  };
}
