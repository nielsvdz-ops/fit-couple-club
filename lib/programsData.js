export const programs = [
  {
    slug: "30-day-lean-reset",
    title: "30-Day Lean Reset",
    category: "Fat Loss",
    level: "Beginner",
    duration: "4 weeks",
    schedule: "4 training days / week",
    equipment: "Gym or home dumbbells",
    goal: "Lose fat, rebuild routine, improve consistency",
    idealFor:
      "Members who want a clean reset and a structured starting point.",
    result:
      "Best for creating momentum, improving eating structure, and seeing early body composition changes.",
    heroSummary:
      "A practical 4-week reset focused on consistency, basic training structure, daily movement, and simple nutrition habits.",
    heroGif: "/gifs/programs/30-day-lean-reset.gif",
    includes: [
      "4 weekly workouts",
      "Walking / cardio targets",
      "Simple nutrition habits",
      "Weekly progression focus",
    ],
    weeklyPlan: [
      {
        week: "Week 1",
        focus: "Routine and consistency",
        notes:
          "Start with manageable intensity. Focus on showing up, learning movement patterns, and building momentum.",
        days: [
          {
            day: "Day 1",
            title: "Full Body Strength A",
            type: "workout",
            focus: "Foundation strength",
            gif: "/gifs/workouts/full-body-strength-a.gif",
            description:
              "A full-body beginner-friendly strength session focused on movement quality, balance, and consistency.",
            warmup: [
              "5 minutes incline treadmill walk or light bike",
              "10 bodyweight squats",
              "10 glute bridges",
              "10 arm circles forward and backward",
              "1 light warm-up set before each first main exercise",
            ],
            steps: [
              {
                exercise: "Goblet Squat",
                sets: "3",
                reps: "10–12",
                rest: "60–75 sec",
                notes:
                  "Keep chest up, brace your core, and lower with control. Use a dumbbell you can move cleanly.",
              },
              {
                exercise: "Dumbbell Romanian Deadlift",
                sets: "3",
                reps: "10–12",
                rest: "60–75 sec",
                notes:
                  "Push hips back, keep your back neutral, and feel the stretch in your hamstrings.",
              },
              {
                exercise: "Dumbbell Bench Press or Push-Ups",
                sets: "3",
                reps: "8–12",
                rest: "60 sec",
                notes:
                  "Use a full range of motion and keep shoulders stable instead of rushing reps.",
              },
              {
                exercise: "Seated Cable Row or Dumbbell Row",
                sets: "3",
                reps: "10–12",
                rest: "60 sec",
                notes:
                  "Pull elbows back and squeeze your upper back instead of yanking with momentum.",
              },
              {
                exercise: "Walking Lunges or Split Squats",
                sets: "2",
                reps: "10 each leg",
                rest: "60 sec",
                notes:
                  "Take controlled steps and keep your front foot planted.",
              },
              {
                exercise: "Plank",
                sets: "3",
                reps: "30–45 sec",
                rest: "45 sec",
                notes:
                  "Keep ribs down and core braced. Do not let the lower back sag.",
              },
            ],
            finisher: [
              "Optional 8 minutes incline walk",
              "Cool down with light breathing and hip stretch",
            ],
          },
          {
            day: "Day 2",
            title: "Incline Walk + Core",
            type: "conditioning",
            focus: "Fat-loss support",
            gif: "/gifs/workouts/incline-walk-core.gif",
            description:
              "A lower-stress conditioning session to increase calorie output and improve consistency.",
            warmup: [
              "2–3 minutes easy treadmill pace",
              "Light torso twists and hip mobility",
            ],
            steps: [
              {
                exercise: "Incline Walk",
                sets: "1",
                reps: "20–30 min",
                rest: "-",
                notes:
                  "Walk at a pace where breathing is elevated but still controlled.",
              },
              {
                exercise: "Dead Bug",
                sets: "3",
                reps: "10 each side",
                rest: "30 sec",
                notes:
                  "Move slowly and keep the lower back pressed down.",
              },
              {
                exercise: "Leg Raises or Knee Raises",
                sets: "3",
                reps: "10–15",
                rest: "30 sec",
                notes:
                  "Do not swing. Focus on controlled core tension.",
              },
              {
                exercise: "Side Plank",
                sets: "2",
                reps: "20–30 sec each side",
                rest: "30 sec",
                notes:
                  "Stay stacked and keep hips lifted.",
              },
            ],
            finisher: [
              "5 minutes easy walk cooldown",
              "Stretch hip flexors and lower back lightly",
            ],
          },
          {
            day: "Day 3",
            title: "Lower Body + Glute Focus",
            type: "workout",
            focus: "Lower body shaping",
            gif: "/gifs/workouts/lower-body-glute-focus.gif",
            description:
              "A controlled lower-body day with extra glute emphasis and beginner-friendly structure.",
            warmup: [
              "5 minutes bike or treadmill walk",
              "12 bodyweight glute bridges",
              "10 bodyweight reverse lunges",
              "10 banded abductions if available",
            ],
            steps: [
              {
                exercise: "Hip Thrust or Glute Bridge",
                sets: "4",
                reps: "10–12",
                rest: "60 sec",
                notes:
                  "Pause at the top and fully squeeze the glutes.",
              },
              {
                exercise: "Reverse Lunge",
                sets: "3",
                reps: "10 each leg",
                rest: "60 sec",
                notes:
                  "Step back under control and keep balance stable.",
              },
              {
                exercise: "Romanian Deadlift",
                sets: "3",
                reps: "10–12",
                rest: "60–75 sec",
                notes:
                  "Keep the hinge pattern clean and avoid rounding.",
              },
              {
                exercise: "Leg Press or Bodyweight Squat",
                sets: "3",
                reps: "12",
                rest: "60 sec",
                notes:
                  "Use a full range and avoid bouncing.",
              },
              {
                exercise: "Glute Abduction Machine or Band Abductions",
                sets: "2–3",
                reps: "15–20",
                rest: "30–45 sec",
                notes:
                  "High control and burn. Do not rush the reps.",
              },
            ],
            finisher: [
              "5–10 minutes incline walking optional",
              "Stretch glutes, quads, and hamstrings",
            ],
          },
          {
            day: "Day 4",
            title: "Rest or 8k–10k Steps",
            type: "recovery",
            focus: "Recovery and movement",
            gif: "/gifs/workouts/recovery-walk.gif",
            description:
              "A low-stress recovery day that keeps activity high without adding unnecessary fatigue.",
            warmup: [],
            steps: [
              {
                exercise: "Daily Steps",
                sets: "1",
                reps: "8k–10k steps",
                rest: "-",
                notes:
                  "Spread movement across the day instead of trying to force it all at once.",
              },
              {
                exercise: "Optional Mobility Flow",
                sets: "1",
                reps: "8–10 min",
                rest: "-",
                notes:
                  "Focus on hips, thoracic spine, shoulders, and ankles.",
              },
            ],
            finisher: [
              "Hydrate well",
              "Prepare food and plan tomorrow’s session",
            ],
          },
          {
            day: "Day 5",
            title: "Upper Body + Cardio Finisher",
            type: "workout",
            focus: "Upper-body shape and conditioning",
            gif: "/gifs/workouts/upper-body-cardio-finisher.gif",
            description:
              "An upper-body training day with short conditioning at the end to support the fat-loss goal.",
            warmup: [
              "5 minutes easy cardio",
              "Band pull-aparts or shoulder circles",
              "1 lighter warm-up set for pressing and rowing",
            ],
            steps: [
              {
                exercise: "Dumbbell Shoulder Press",
                sets: "3",
                reps: "10–12",
                rest: "60 sec",
                notes:
                  "Keep ribs down and avoid arching through the lower back.",
              },
              {
                exercise: "Lat Pulldown or Assisted Pull-Up",
                sets: "3",
                reps: "10–12",
                rest: "60 sec",
                notes:
                  "Pull elbows down and focus on upper-back control.",
              },
              {
                exercise: "Dumbbell Chest Press",
                sets: "3",
                reps: "10–12",
                rest: "60 sec",
                notes:
                  "Use a weight you can lower with control.",
              },
              {
                exercise: "Cable Row or Dumbbell Row",
                sets: "3",
                reps: "10–12",
                rest: "60 sec",
                notes:
                  "Squeeze shoulder blades together at the end of each rep.",
              },
              {
                exercise: "Lateral Raises",
                sets: "2–3",
                reps: "12–15",
                rest: "30–45 sec",
                notes:
                  "Lift with control and do not swing.",
              },
              {
                exercise: "Biceps Curl + Triceps Pushdown",
                sets: "2",
                reps: "12–15 each",
                rest: "30 sec",
                notes:
                  "Use these as lighter arm finishers.",
              },
            ],
            finisher: [
              "8–10 minutes treadmill incline walk or bike intervals",
              "Cool down and stretch chest and shoulders",
            ],
          },
          {
            day: "Day 6",
            title: "Full Body Conditioning",
            type: "conditioning",
            focus: "Work capacity",
            gif: "/gifs/workouts/full-body-conditioning.gif",
            description:
              "A circuit-based full-body session to improve fitness, movement, and calorie output.",
            warmup: [
              "5 minutes easy cardio",
              "Bodyweight squats",
              "Arm circles",
              "Hip opener flow",
            ],
            steps: [
              {
                exercise: "Circuit Round 1",
                sets: "3 rounds",
                reps: "40 sec work / 20 sec rest",
                rest: "90 sec after each round",
                notes:
                  "Use squat to press, step-ups, rows, mountain climbers, and plank variations.",
              },
              {
                exercise: "Circuit Round 2",
                sets: "2 rounds",
                reps: "30 sec each station",
                rest: "60 sec after round",
                notes:
                  "Keep form clean even when breathing gets harder.",
              },
            ],
            finisher: [
              "5 minutes slow walk",
              "Breathing and mobility cooldown",
            ],
          },
          {
            day: "Day 7",
            title: "Recovery Walk + Mobility",
            type: "recovery",
            focus: "Reset and prepare",
            gif: "/gifs/workouts/recovery-walk-mobility.gif",
            description:
              "A light recovery day to reduce stiffness and prepare for the next training week.",
            warmup: [],
            steps: [
              {
                exercise: "Recovery Walk",
                sets: "1",
                reps: "20–40 minutes",
                rest: "-",
                notes:
                  "Keep the effort easy and relaxing.",
              },
              {
                exercise: "Mobility Flow",
                sets: "1",
                reps: "10–15 minutes",
                rest: "-",
                notes:
                  "Focus on hips, hamstrings, shoulders, and thoracic spine.",
              },
            ],
            finisher: [
              "Review your week",
              "Prepare next week’s food, schedule, and gym setup",
            ],
          },
        ],
      },
      {
        week: "Week 2",
        focus: "Better execution",
        notes:
          "Keep the same structure but increase control, improve range of motion, and slightly raise training effort.",
        days: [
          "Day 1 — Full Body Strength A",
          "Day 2 — Incline walk + abs",
          "Day 3 — Lower Body + glute focus",
          "Day 4 — Rest or 8k–10k steps",
          "Day 5 — Upper Body + cardio finisher",
          "Day 6 — Full Body Conditioning",
          "Day 7 — Recovery walk + mobility",
        ],
      },
      {
        week: "Week 3",
        focus: "Progressive overload",
        notes:
          "Add small load increases, extra reps, or improved form quality across the main lifts.",
        days: [
          "Day 1 — Full Body Strength A",
          "Day 2 — Incline walk + abs",
          "Day 3 — Lower Body + glute focus",
          "Day 4 — Rest or 9k–11k steps",
          "Day 5 — Upper Body + cardio finisher",
          "Day 6 — Full Body Conditioning",
          "Day 7 — Recovery walk + mobility",
        ],
      },
      {
        week: "Week 4",
        focus: "Finish strong",
        notes:
          "Keep execution clean, maintain structure, and finish the month with higher consistency instead of extreme intensity.",
        days: [
          "Day 1 — Full Body Strength A",
          "Day 2 — Incline walk + abs",
          "Day 3 — Lower Body + glute focus",
          "Day 4 — Rest or 9k–11k steps",
          "Day 5 — Upper Body + cardio finisher",
          "Day 6 — Full Body Conditioning",
          "Day 7 — Recovery walk + mobility",
        ],
      },
    ],
    trainingSplit: [
      "2 full-body sessions",
      "1 lower-body focused day",
      "1 upper-body focused day",
      "2 cardio / movement support days",
    ],
    cardioGuidance:
      "Aim for 8k–11k daily steps and 2 structured cardio sessions weekly.",
    recoveryGuidance:
      "Prioritize sleep, hydration, and low-stress consistency over perfection.",
  },

  {
    slug: "build-curves-booty-builder",
    title: "Build Curves / Booty Builder",
    category: "Glutes & Legs",
    level: "Beginner to Intermediate",
    duration: "8 weeks",
    schedule: "4 training days / week",
    equipment: "Gym preferred",
    goal: "Grow glutes, shape legs, and improve lower-body development",
    idealFor:
      "Members wanting stronger glutes, better lower-body shape, and better form in key lifts.",
    result:
      "Heavy glute emphasis with enough frequency, tension, and accessory work to drive visible progress.",
    heroSummary:
      "A lower-body dominant program designed around glute growth, leg shaping, and better movement quality.",
    heroGif: "/gifs/programs/build-curves-booty-builder.gif",
    includes: [
      "2 glute-priority lower days",
      "1 hamstring / quad support day",
      "1 upper-body balance day",
      "Weekly progression structure",
    ],
    weeklyPlan: [
      {
        week: "Week 1–2",
        focus: "Patterning and activation",
        notes:
          "Build proper setup on hip thrusts, RDLs, split squats, and abduction work.",
        days: [
          "Day 1 — Glute strength",
          "Day 2 — Upper body balance",
          "Day 3 — Rest / walking",
          "Day 4 — Glute hypertrophy",
          "Day 5 — Hamstrings + quads",
          "Day 6 — Rest / mobility",
          "Day 7 — Optional steps + recovery",
        ],
      },
      {
        week: "Week 3–4",
        focus: "Volume build",
        notes:
          "Add training volume to the main glute movements and improve control through full range.",
        days: [
          "Day 1 — Glute strength",
          "Day 2 — Upper body balance",
          "Day 3 — Rest / walking",
          "Day 4 — Glute hypertrophy",
          "Day 5 — Hamstrings + quads",
          "Day 6 — Rest / mobility",
          "Day 7 — Optional steps + recovery",
        ],
      },
      {
        week: "Week 5–6",
        focus: "Load progression",
        notes:
          "Push heavier on primary lifts while keeping isolation work strict and glute-biased.",
        days: [
          "Day 1 — Glute strength",
          "Day 2 — Upper body balance",
          "Day 3 — Rest / walking",
          "Day 4 — Glute hypertrophy",
          "Day 5 — Hamstrings + quads",
          "Day 6 — Rest / mobility",
          "Day 7 — Optional steps + recovery",
        ],
      },
      {
        week: "Week 7–8",
        focus: "Peak effort phase",
        notes:
          "Finish with stronger working sets, better tension, and noticeable lower-body quality improvements.",
        days: [
          "Day 1 — Glute strength",
          "Day 2 — Upper body balance",
          "Day 3 — Rest / walking",
          "Day 4 — Glute hypertrophy",
          "Day 5 — Hamstrings + quads",
          "Day 6 — Rest / mobility",
          "Day 7 — Optional steps + recovery",
        ],
      },
    ],
    trainingSplit: [
      "2 glute-priority sessions",
      "1 quad / hamstring support session",
      "1 upper-body maintenance session",
    ],
    cardioGuidance:
      "Keep cardio moderate so recovery stays available for lower-body progress.",
    recoveryGuidance:
      "Glute growth responds best to good sleep, enough food, and strong exercise execution.",
  },

  {
    slug: "couple-transformation-challenge",
    title: "Couple Transformation Challenge",
    category: "Couples",
    level: "All levels",
    duration: "6 weeks",
    schedule: "4 shared training days / week",
    equipment: "Gym or home",
    goal: "Stay accountable together and improve consistency as a team",
    idealFor:
      "Couples who want shared structure, accountability, and a realistic plan they can follow together.",
    result:
      "Designed to improve routine, discipline, and visible progress through teamwork and consistency.",
    heroSummary:
      "A shared transformation framework for couples who want better consistency, training structure, and accountability.",
    heroGif: "/gifs/programs/couple-transformation-challenge.gif",
    includes: [
      "4 weekly shared sessions",
      "Partner accountability structure",
      "Weekly targets together",
      "Simple progress check-ins",
    ],
    weeklyPlan: [
      {
        week: "Week 1–2",
        focus: "Routine alignment",
        notes:
          "Build the habit of training together and keeping each other accountable.",
        days: [
          "Day 1 — Shared full body strength",
          "Day 2 — Walk / mobility / check-in",
          "Day 3 — Lower body + core",
          "Day 4 — Rest",
          "Day 5 — Upper body + conditioning",
          "Day 6 — Shared challenge session",
          "Day 7 — Recovery walk",
        ],
      },
      {
        week: "Week 3–4",
        focus: "Better consistency",
        notes:
          "Start improving effort, communication, and nutrition consistency together.",
        days: [
          "Day 1 — Shared full body strength",
          "Day 2 — Walk / mobility / check-in",
          "Day 3 — Lower body + core",
          "Day 4 — Rest",
          "Day 5 — Upper body + conditioning",
          "Day 6 — Shared challenge session",
          "Day 7 — Recovery walk",
        ],
      },
      {
        week: "Week 5–6",
        focus: "Finish strong",
        notes:
          "Keep intensity moderate but execution high. The goal is finishing the challenge together, not burning out.",
        days: [
          "Day 1 — Shared full body strength",
          "Day 2 — Walk / mobility / check-in",
          "Day 3 — Lower body + core",
          "Day 4 — Rest",
          "Day 5 — Upper body + conditioning",
          "Day 6 — Shared challenge session",
          "Day 7 — Recovery walk",
        ],
      },
    ],
    trainingSplit: [
      "2 strength-focused sessions",
      "1 body-shaping session",
      "1 challenge / conditioning session",
    ],
    cardioGuidance:
      "Aim for shared walks, light cardio, and simple movement targets together.",
    recoveryGuidance:
      "Keep the plan fun, sustainable, and realistic so both people can stay consistent.",
  },

  {
    slug: "busy-schedule-body-recomp",
    title: "Busy Schedule Body Recomp",
    category: "Recomp",
    level: "All levels",
    duration: "8 weeks",
    schedule: "3 training days / week",
    equipment: "Gym or home",
    goal: "Build muscle and lose fat with minimal weekly time",
    idealFor:
      "Members who are busy but still want visible progress and a realistic body recomposition approach.",
    result:
      "A simple, efficient plan for people who cannot train 5–6 times per week but still want results.",
    heroSummary:
      "An efficient body recomposition program built for members with real schedules and limited training time.",
    heroGif: "/gifs/programs/busy-schedule-body-recomp.gif",
    includes: [
      "3 efficient weekly sessions",
      "Body recomposition structure",
      "Low-time commitment design",
      "Recovery-friendly programming",
    ],
    weeklyPlan: [
      {
        week: "Week 1–2",
        focus: "Efficient structure",
        notes:
          "Establish consistency with 3 strong weekly sessions and a realistic activity target.",
        days: [
          "Day 1 — Full body A",
          "Day 2 — Rest / steps",
          "Day 3 — Full body B",
          "Day 4 — Rest / mobility",
          "Day 5 — Full body C",
          "Day 6 — Optional cardio",
          "Day 7 — Recovery",
        ],
      },
      {
        week: "Week 3–4",
        focus: "Execution and progression",
        notes:
          "Improve movement quality and start adding controlled progression to the main lifts.",
        days: [
          "Day 1 — Full body A",
          "Day 2 — Rest / steps",
          "Day 3 — Full body B",
          "Day 4 — Rest / mobility",
          "Day 5 — Full body C",
          "Day 6 — Optional cardio",
          "Day 7 — Recovery",
        ],
      },
      {
        week: "Week 5–6",
        focus: "Higher training quality",
        notes:
          "Push a little harder in working sets while keeping recovery manageable.",
        days: [
          "Day 1 — Full body A",
          "Day 2 — Rest / steps",
          "Day 3 — Full body B",
          "Day 4 — Rest / mobility",
          "Day 5 — Full body C",
          "Day 6 — Optional cardio",
          "Day 7 — Recovery",
        ],
      },
      {
        week: "Week 7–8",
        focus: "Strong finish",
        notes:
          "Finish with high consistency and stronger effort, not random extra volume.",
        days: [
          "Day 1 — Full body A",
          "Day 2 — Rest / steps",
          "Day 3 — Full body B",
          "Day 4 — Rest / mobility",
          "Day 5 — Full body C",
          "Day 6 — Optional cardio",
          "Day 7 — Recovery",
        ],
      },
    ],
    trainingSplit: [
      "3 full-body sessions weekly",
      "Optional light cardio",
      "Movement and recovery support",
    ],
    cardioGuidance:
      "Use steps and 1 optional cardio session weekly to support body recomposition.",
    recoveryGuidance:
      "This plan works best when members stay disciplined with food, sleep, and training quality.",
  },

  {
    slug: "confidence-starter-program",
    title: "Confidence Starter Program",
    category: "Starter",
    level: "Beginner",
    duration: "4 weeks",
    schedule: "3 training days / week",
    equipment: "Home or gym",
    goal: "Create confidence, routine, and beginner momentum",
    idealFor:
      "New members who feel overwhelmed and need a simple entry point they can actually follow.",
    result:
      "A low-pressure starting plan designed to get members moving, building confidence, and staying on track.",
    heroSummary:
      "A beginner-friendly training plan focused on building routine, confidence, and consistency.",
    heroGif: "/gifs/programs/confidence-starter-program.gif",
    includes: [
      "3 simple weekly workouts",
      "Low intimidation structure",
      "Clear weekly wins",
      "Habit-building approach",
    ],
    weeklyPlan: [
      {
        week: "Week 1",
        focus: "Get started",
        notes:
          "The goal is to complete the sessions and build belief, not to chase intensity.",
        days: [
          "Day 1 — Full body basics",
          "Day 2 — Walk + light stretch",
          "Day 3 — Lower body basics",
          "Day 4 — Rest",
          "Day 5 — Upper body basics",
          "Day 6 — Optional walk",
          "Day 7 — Recovery",
        ],
      },
      {
        week: "Week 2",
        focus: "Better rhythm",
        notes:
          "Keep sessions simple and start feeling more comfortable with the exercises.",
        days: [
          "Day 1 — Full body basics",
          "Day 2 — Walk + light stretch",
          "Day 3 — Lower body basics",
          "Day 4 — Rest",
          "Day 5 — Upper body basics",
          "Day 6 — Optional walk",
          "Day 7 — Recovery",
        ],
      },
      {
        week: "Week 3",
        focus: "More confidence",
        notes:
          "Improve exercise quality and add small progressions if form stays strong.",
        days: [
          "Day 1 — Full body basics",
          "Day 2 — Walk + light stretch",
          "Day 3 — Lower body basics",
          "Day 4 — Rest",
          "Day 5 — Upper body basics",
          "Day 6 — Optional walk",
          "Day 7 — Recovery",
        ],
      },
      {
        week: "Week 4",
        focus: "Finish the first block",
        notes:
          "End the program feeling confident and ready to move into a more advanced phase.",
        days: [
          "Day 1 — Full body basics",
          "Day 2 — Walk + light stretch",
          "Day 3 — Lower body basics",
          "Day 4 — Rest",
          "Day 5 — Upper body basics",
          "Day 6 — Optional walk",
          "Day 7 — Recovery",
        ],
      },
    ],
    trainingSplit: [
      "3 beginner-friendly sessions",
      "Walking and light recovery",
      "Low-pressure structure",
    ],
    cardioGuidance:
      "Keep cardio light and use walking to build consistency without overwhelm.",
    recoveryGuidance:
      "The best recovery strategy here is simply staying consistent and not quitting after imperfect days.",
  },
];

export function getProgramBySlug(slug) {
  return programs.find((program) => program.slug === slug);
}
