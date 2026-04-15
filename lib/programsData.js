const clone = (value) => JSON.parse(JSON.stringify(value));

const withDay = (baseWorkout, dayLabel) => ({
  ...clone(baseWorkout),
  day: dayLabel,
});

const buildWeek = ({ week, focus, notes, workoutOrder }) => ({
  week,
  focus,
  notes,
  days: workoutOrder.map(({ label, workout }) => withDay(workout, label)),
});

const workouts = {
  leanResetFullBodyStrength: {
    title: "Full Body Foundation Strength",
    type: "workout",
    focus: "Foundation strength",
    gif: "/gifs/workouts/full-body-foundation-strength.gif",
    description:
      "A full-body beginner-friendly strength session focused on movement quality, posture, and balanced muscle development.",
    warmup: [
      "5 minutes incline treadmill walk or light bike",
      "10 bodyweight squats",
      "10 glute bridges",
      "10 arm circles forward and backward",
      "1 lighter warm-up set before each first compound movement",
    ],
    steps: [
      {
        exercise: "Goblet Squat",
        sets: "3",
        reps: "10–12",
        rest: "60–75 sec",
        notes:
          "Keep chest up, brace your core, and lower under control. Use a load you can move cleanly.",
      },
      {
        exercise: "Dumbbell Romanian Deadlift",
        sets: "3",
        reps: "10–12",
        rest: "60–75 sec",
        notes:
          "Push hips back, keep a neutral back, and feel the hamstring stretch instead of rounding.",
      },
      {
        exercise: "Dumbbell Bench Press",
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
          "Pull elbows back and squeeze upper back at the end of every rep.",
      },
      {
        exercise: "Walking Lunges",
        sets: "2",
        reps: "10 each leg",
        rest: "60 sec",
        notes:
          "Step with control and keep the front foot planted through the rep.",
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
      "Cool down with easy breathing and hip stretch",
    ],
  },

  leanResetInclineWalkCore: {
    title: "Incline Walk and Core Control",
    type: "conditioning",
    focus: "Fat-loss support",
    gif: "/gifs/workouts/incline-walk-core-control.gif",
    description:
      "A lower-stress conditioning session to increase calorie output, improve consistency, and strengthen the core without crushing recovery.",
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
          "Move slowly and keep the lower back pressed into the floor.",
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
          "Stay stacked and keep hips lifted throughout the hold.",
      },
    ],
    finisher: [
      "5 minutes easy walk cooldown",
      "Stretch hip flexors and lower back lightly",
    ],
  },

  leanResetLowerGlutes: {
    title: "Lower Body and Glute Focus",
    type: "workout",
    focus: "Lower-body shaping",
    gif: "/gifs/workouts/lower-body-glute-focus.gif",
    description:
      "A controlled lower-body session with extra glute emphasis, beginner-friendly structure, and strong exercise quality.",
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
        notes: "Pause at the top and fully squeeze the glutes.",
      },
      {
        exercise: "Reverse Lunge",
        sets: "3",
        reps: "10 each leg",
        rest: "60 sec",
        notes:
          "Step back under control, keep your torso stable, and own the balance.",
      },
      {
        exercise: "Romanian Deadlift",
        sets: "3",
        reps: "10–12",
        rest: "60–75 sec",
        notes: "Keep the hinge pattern clean and avoid rounding.",
      },
      {
        exercise: "Leg Press or Bodyweight Squat",
        sets: "3",
        reps: "12",
        rest: "60 sec",
        notes: "Use a full range and avoid bouncing.",
      },
      {
        exercise: "Glute Abduction Machine or Band Abductions",
        sets: "2–3",
        reps: "15–20",
        rest: "30–45 sec",
        notes: "High control and burn. Do not rush the reps.",
      },
    ],
    finisher: [
      "5–10 minutes incline walking optional",
      "Stretch glutes, quads, and hamstrings",
    ],
  },

  leanResetRecoverySteps: {
    title: "Recovery and Daily Steps",
    type: "recovery",
    focus: "Recovery and movement",
    gif: "/gifs/workouts/recovery-and-daily-steps.gif",
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
          "Spread movement across the day instead of forcing it all at once.",
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
    finisher: ["Hydrate well", "Prepare food and plan the next session"],
  },

  leanResetUpperFinisher: {
    title: "Upper Body Shape and Cardio Finisher",
    type: "workout",
    focus: "Upper-body shape and conditioning",
    gif: "/gifs/workouts/upper-body-shape-cardio-finisher.gif",
    description:
      "An upper-body training day with controlled pressing and pulling, followed by a short conditioning block.",
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
        notes: "Pull elbows down and focus on upper-back control.",
      },
      {
        exercise: "Dumbbell Chest Press",
        sets: "3",
        reps: "10–12",
        rest: "60 sec",
        notes: "Use a weight you can lower with control.",
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
        notes: "Lift with control and do not swing.",
      },
      {
        exercise: "Biceps Curl + Triceps Pushdown",
        sets: "2",
        reps: "12–15 each",
        rest: "30 sec",
        notes: "Use these as lighter arm finishers.",
      },
    ],
    finisher: [
      "8–10 minutes treadmill incline walk or bike intervals",
      "Cool down and stretch chest and shoulders",
    ],
  },

  leanResetConditioning: {
    title: "Full Body Conditioning Circuit",
    type: "conditioning",
    focus: "Work capacity",
    gif: "/gifs/workouts/full-body-conditioning-circuit.gif",
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
    finisher: ["5 minutes slow walk", "Breathing and mobility cooldown"],
  },

  leanResetRecoveryWalk: {
    title: "Recovery Walk and Mobility Reset",
    type: "recovery",
    focus: "Reset and prepare",
    gif: "/gifs/workouts/recovery-walk-mobility-reset.gif",
    description:
      "A light recovery day to reduce stiffness and prepare for the next training week.",
    warmup: [],
    steps: [
      {
        exercise: "Recovery Walk",
        sets: "1",
        reps: "20–40 minutes",
        rest: "-",
        notes: "Keep the effort easy and relaxing.",
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

  bootyGluteStrength: {
    title: "Heavy Glute Strength and Hip Drive",
    type: "workout",
    focus: "Glute strength",
    gif: "/gifs/workouts/heavy-glute-strength-hip-drive.gif",
    description:
      "A glute-priority lower-body session focused on hip thrust strength, lower-body tension, and progressive overload.",
    warmup: [
      "5 minutes incline walk or bike",
      "12 bodyweight glute bridges",
      "10 banded lateral steps",
      "10 bodyweight squats",
    ],
    steps: [
      {
        exercise: "Barbell or Machine Hip Thrust",
        sets: "4",
        reps: "8–10",
        rest: "75–90 sec",
        notes:
          "Drive through heels, pause at the top, and keep ribs down.",
      },
      {
        exercise: "Romanian Deadlift",
        sets: "4",
        reps: "8–10",
        rest: "75 sec",
        notes:
          "Feel stretch through glutes and hamstrings, not the lower back.",
      },
      {
        exercise: "Bulgarian Split Squat",
        sets: "3",
        reps: "8–10 each leg",
        rest: "60 sec",
        notes:
          "Use a long enough stance to keep strong glute involvement.",
      },
      {
        exercise: "Cable Kickback",
        sets: "3",
        reps: "12–15 each leg",
        rest: "30–45 sec",
        notes: "Control the return and do not swing the torso.",
      },
      {
        exercise: "Abduction Machine",
        sets: "3",
        reps: "15–20",
        rest: "30 sec",
        notes: "Stay upright and keep constant tension.",
      },
    ],
    finisher: [
      "Optional 8 minutes incline walking",
      "Stretch glutes and hip flexors",
    ],
  },

  bootyUpperBalance: {
    title: "Upper Body Balance and Posture Support",
    type: "workout",
    focus: "Upper-body balance",
    gif: "/gifs/workouts/upper-body-balance-posture-support.gif",
    description:
      "A lighter upper-body support session to keep posture, shoulders, and back balanced while lower-body volume stays high.",
    warmup: [
      "5 minutes easy cardio",
      "Band pull-aparts",
      "Shoulder circles",
    ],
    steps: [
      {
        exercise: "Lat Pulldown",
        sets: "3",
        reps: "10–12",
        rest: "60 sec",
        notes: "Pull elbows down and keep shoulders away from ears.",
      },
      {
        exercise: "Seated Row",
        sets: "3",
        reps: "10–12",
        rest: "60 sec",
        notes: "Pause briefly at the contracted position.",
      },
      {
        exercise: "Dumbbell Shoulder Press",
        sets: "3",
        reps: "10–12",
        rest: "60 sec",
        notes: "Keep core tight and press in control.",
      },
      {
        exercise: "Lateral Raise",
        sets: "3",
        reps: "12–15",
        rest: "30–45 sec",
        notes: "Do not swing through the rep.",
      },
      {
        exercise: "Cable Face Pull",
        sets: "2–3",
        reps: "12–15",
        rest: "30–45 sec",
        notes: "Use these to support posture and rear delts.",
      },
    ],
    finisher: [
      "Stretch chest and shoulders",
      "Optional 5-minute easy bike cooldown",
    ],
  },

  bootyGluteHypertrophy: {
    title: "Glute Hypertrophy and Shape Builder",
    type: "workout",
    focus: "Glute hypertrophy",
    gif: "/gifs/workouts/glute-hypertrophy-shape-builder.gif",
    description:
      "A volume-focused glute session designed to create high-quality tension, stronger contraction, and lower-body shape improvements.",
    warmup: [
      "5 minutes incline walk",
      "Glute bridge pulses",
      "Banded abductions",
      "Bodyweight lunges",
    ],
    steps: [
      {
        exercise: "Smith Machine or Dumbbell Hip Thrust",
        sets: "4",
        reps: "10–12",
        rest: "60 sec",
        notes: "Use full glute squeeze at lockout.",
      },
      {
        exercise: "Walking Lunge",
        sets: "3",
        reps: "12 each leg",
        rest: "60 sec",
        notes: "Take controlled steps and stay balanced.",
      },
      {
        exercise: "Single-Leg Romanian Deadlift",
        sets: "3",
        reps: "10 each leg",
        rest: "45–60 sec",
        notes: "Keep hips square and avoid twisting.",
      },
      {
        exercise: "Glute Bridge Burnout",
        sets: "2",
        reps: "20",
        rest: "30 sec",
        notes: "Stay controlled and keep tension continuous.",
      },
      {
        exercise: "Abduction Machine or Band Burnout",
        sets: "2",
        reps: "20–25",
        rest: "30 sec",
        notes: "Small range is fine if tension stays high.",
      },
    ],
    finisher: ["Optional 5-minute incline walk", "Glute and hamstring stretch"],
  },

  bootyHamQuad: {
    title: "Hamstrings and Quads Support Session",
    type: "workout",
    focus: "Lower-body support",
    gif: "/gifs/workouts/hamstrings-quads-support-session.gif",
    description:
      "A lower-body support day to bring up quads and hamstrings while supporting stronger glute development.",
    warmup: ["5 minutes bike", "10 bodyweight squats", "10 reverse lunges"],
    steps: [
      {
        exercise: "Leg Press",
        sets: "4",
        reps: "10–12",
        rest: "60–75 sec",
        notes: "Use a full range and stay controlled.",
      },
      {
        exercise: "Leg Curl",
        sets: "3",
        reps: "12–15",
        rest: "45–60 sec",
        notes: "Squeeze at peak contraction.",
      },
      {
        exercise: "Dumbbell Romanian Deadlift",
        sets: "3",
        reps: "10",
        rest: "60 sec",
        notes: "Stay strict through the hinge pattern.",
      },
      {
        exercise: "Walking Split Squat",
        sets: "2–3",
        reps: "10 each leg",
        rest: "45–60 sec",
        notes: "Drive with control and stay balanced.",
      },
      {
        exercise: "Calf Raise",
        sets: "3",
        reps: "12–15",
        rest: "30 sec",
        notes: "Pause at top and bottom.",
      },
    ],
    finisher: ["Light lower-body stretching", "Hydrate and recover"],
  },

  bootyRecoveryMobility: {
    title: "Rest, Mobility, and Lower-Body Recovery",
    type: "recovery",
    focus: "Recovery support",
    gif: "/gifs/workouts/rest-mobility-lower-body-recovery.gif",
    description:
      "A recovery-focused day to reduce stiffness, support lower-body recovery, and prepare for the next glute session.",
    warmup: [],
    steps: [
      {
        exercise: "Easy Walk",
        sets: "1",
        reps: "20–30 min",
        rest: "-",
        notes: "Keep the pace relaxed and restorative.",
      },
      {
        exercise: "Mobility Flow",
        sets: "1",
        reps: "10–15 min",
        rest: "-",
        notes:
          "Focus on glutes, hip flexors, hamstrings, and lower back.",
      },
    ],
    finisher: [
      "Hydrate well",
      "Prepare the next lower-body session",
    ],
  },

  bootyOptionalSteps: {
    title: "Optional Steps and Recovery Walk",
    type: "recovery",
    focus: "Low-stress movement",
    gif: "/gifs/workouts/optional-steps-recovery-walk.gif",
    description:
      "A low-fatigue movement day to stay active without interfering with lower-body recovery.",
    warmup: [],
    steps: [
      {
        exercise: "Daily Steps",
        sets: "1",
        reps: "8k–10k",
        rest: "-",
        notes: "Split steps over the day if needed.",
      },
      {
        exercise: "Optional Light Stretch",
        sets: "1",
        reps: "5–8 min",
        rest: "-",
        notes: "Keep it easy and restorative.",
      },
    ],
    finisher: ["Relax and reset", "Review your weekly progress"],
  },

  couplesSharedStrength: {
    title: "Shared Full Body Strength Session",
    type: "workout",
    focus: "Team strength",
    gif: "/gifs/workouts/shared-full-body-strength-session.gif",
    description:
      "A full-body partner-friendly session built around consistency, shared pacing, and supporting each other through the main lifts.",
    warmup: [
      "5 minutes easy cardio together",
      "Bodyweight squats",
      "Arm circles",
      "Glute bridges",
    ],
    steps: [
      {
        exercise: "Goblet Squat",
        sets: "3",
        reps: "10–12",
        rest: "60 sec",
        notes: "Alternate sets if needed and keep technique clean.",
      },
      {
        exercise: "Dumbbell Bench Press",
        sets: "3",
        reps: "10",
        rest: "60 sec",
        notes: "Use a load both people can control safely.",
      },
      {
        exercise: "Seated Row",
        sets: "3",
        reps: "10–12",
        rest: "60 sec",
        notes: "Focus on posture and controlled pulling.",
      },
      {
        exercise: "Reverse Lunges",
        sets: "2",
        reps: "10 each leg",
        rest: "45 sec",
        notes: "Balance matters more than speed.",
      },
      {
        exercise: "Plank Hold",
        sets: "3",
        reps: "30–45 sec",
        rest: "30 sec",
        notes: "Use it as a challenge and hold cleanly.",
      },
    ],
    finisher: [
      "Optional 8-minute shared incline walk",
      "Quick recovery stretch together",
    ],
  },

  couplesWalkCheckin: {
    title: "Walk, Mobility, and Partner Check-In",
    type: "recovery",
    focus: "Accountability and recovery",
    gif: "/gifs/workouts/walk-mobility-partner-checkin.gif",
    description:
      "A lower-stress day focused on movement, conversation, and staying aligned together.",
    warmup: [],
    steps: [
      {
        exercise: "Walk Together",
        sets: "1",
        reps: "20–40 minutes",
        rest: "-",
        notes:
          "Keep the pace easy enough to talk and review the week.",
      },
      {
        exercise: "Mobility Flow",
        sets: "1",
        reps: "10 minutes",
        rest: "-",
        notes:
          "Focus on hips, shoulders, and spine.",
      },
      {
        exercise: "Check-In Conversation",
        sets: "1",
        reps: "5–10 minutes",
        rest: "-",
        notes:
          "Talk about food consistency, energy, stress, and schedule.",
      },
    ],
    finisher: [
      "Set the next workout day clearly",
      "Decide one improvement each person will make",
    ],
  },

  couplesLowerCore: {
    title: "Lower Body and Core Team Session",
    type: "workout",
    focus: "Body shaping and core",
    gif: "/gifs/workouts/lower-body-core-team-session.gif",
    description:
      "A lower-body and core day built for shared structure, effort, and easy partner pacing.",
    warmup: [
      "5 minutes bike or walk",
      "Bodyweight glute bridges",
      "Reverse lunges",
      "Core brace drill",
    ],
    steps: [
      {
        exercise: "Leg Press or Goblet Squat",
        sets: "3",
        reps: "10–12",
        rest: "60 sec",
        notes: "Stay controlled and keep effort even.",
      },
      {
        exercise: "Romanian Deadlift",
        sets: "3",
        reps: "10",
        rest: "60 sec",
        notes: "Use clean hinge mechanics.",
      },
      {
        exercise: "Walking Lunges",
        sets: "2",
        reps: "10 each leg",
        rest: "45 sec",
        notes: "Stay steady instead of rushing.",
      },
      {
        exercise: "Dead Bug",
        sets: "3",
        reps: "10 each side",
        rest: "30 sec",
        notes: "Move slowly and keep the core engaged.",
      },
      {
        exercise: "Plank",
        sets: "3",
        reps: "30–45 sec",
        rest: "30 sec",
        notes: "Make it a shared finish.",
      },
    ],
    finisher: [
      "Easy cooldown walk",
      "Quick stretch for hips and hamstrings",
    ],
  },

  couplesUpperConditioning: {
    title: "Upper Body and Conditioning Session",
    type: "workout",
    focus: "Upper-body shape and fitness",
    gif: "/gifs/workouts/upper-body-conditioning-session.gif",
    description:
      "A balanced upper-body day with a short conditioning block to keep the challenge feel high.",
    warmup: [
      "5 minutes easy cardio",
      "Shoulder circles",
      "Band pull-aparts",
    ],
    steps: [
      {
        exercise: "Dumbbell Shoulder Press",
        sets: "3",
        reps: "10–12",
        rest: "60 sec",
        notes: "Press with control and stay stable.",
      },
      {
        exercise: "Lat Pulldown",
        sets: "3",
        reps: "10–12",
        rest: "60 sec",
        notes: "Keep chest up and pull with the back.",
      },
      {
        exercise: "Dumbbell Chest Press",
        sets: "3",
        reps: "10",
        rest: "60 sec",
        notes: "Use consistent tempo.",
      },
      {
        exercise: "Row Variation",
        sets: "3",
        reps: "10–12",
        rest: "60 sec",
        notes: "Finish each rep with control.",
      },
      {
        exercise: "Bike or Treadmill Intervals",
        sets: "6",
        reps: "30 sec hard / 60 sec easy",
        rest: "-",
        notes: "Push hard but stay repeatable.",
      },
    ],
    finisher: ["Easy walk cooldown", "Stretch shoulders and chest"],
  },

  couplesChallengeDay: {
    title: "Shared Challenge and Conditioning Day",
    type: "conditioning",
    focus: "Challenge energy",
    gif: "/gifs/workouts/shared-challenge-conditioning-day.gif",
    description:
      "A higher-energy team session designed to build accountability, movement, and effort without becoming reckless.",
    warmup: ["5 minutes easy cardio", "Mobility and bodyweight prep"],
    steps: [
      {
        exercise: "Circuit Challenge",
        sets: "3 rounds",
        reps: "40 sec work / 20 sec rest",
        rest: "90 sec after round",
        notes:
          "Use bodyweight squats, push-ups, rows, mountain climbers, and step-ups.",
      },
      {
        exercise: "Core Finisher",
        sets: "2 rounds",
        reps: "12–15 reps each",
        rest: "30 sec",
        notes:
          "Use crunches, dead bugs, and plank variations.",
      },
    ],
    finisher: [
      "Short easy walk cooldown",
      "Celebrate the session and log it",
    ],
  },

  couplesRecoveryWalk: {
    title: "Recovery Walk and Reset",
    type: "recovery",
    focus: "Shared recovery",
    gif: "/gifs/workouts/recovery-walk-reset.gif",
    description:
      "A lighter shared recovery day to keep consistency high and stress low.",
    warmup: [],
    steps: [
      {
        exercise: "Recovery Walk",
        sets: "1",
        reps: "20–40 min",
        rest: "-",
        notes: "Keep the pace easy and use it to reconnect.",
      },
      {
        exercise: "Optional Stretching",
        sets: "1",
        reps: "8–10 min",
        rest: "-",
        notes: "Focus on hips, back, and shoulders.",
      },
    ],
    finisher: ["Review your week together", "Prepare the next shared session"],
  },

  recompFullBodyA: {
    title: "Full Body Recomp Session One",
    type: "workout",
    focus: "Efficient full-body strength",
    gif: "/gifs/workouts/full-body-recomp-session-one.gif",
    description:
      "A time-efficient full-body workout built to drive muscle retention, progression, and body recomposition.",
    warmup: [
      "5 minutes easy cardio",
      "Bodyweight squats",
      "Arm circles",
      "Glute bridges",
    ],
    steps: [
      {
        exercise: "Goblet Squat",
        sets: "3",
        reps: "8–10",
        rest: "60–75 sec",
        notes: "Use a challenging but clean load.",
      },
      {
        exercise: "Dumbbell Bench Press",
        sets: "3",
        reps: "8–10",
        rest: "60 sec",
        notes: "Stay stable and control the lowering phase.",
      },
      {
        exercise: "Seated Row",
        sets: "3",
        reps: "10–12",
        rest: "60 sec",
        notes: "Squeeze shoulder blades together each rep.",
      },
      {
        exercise: "Romanian Deadlift",
        sets: "3",
        reps: "10",
        rest: "60 sec",
        notes: "Feel hamstrings and glutes, not low back strain.",
      },
      {
        exercise: "Plank",
        sets: "3",
        reps: "30–45 sec",
        rest: "30 sec",
        notes: "Stay braced and controlled.",
      },
    ],
    finisher: ["Optional 5–8 minute incline walk", "Log your session and recovery"],
  },

  recompRestSteps: {
    title: "Rest, Steps, and Recovery Structure",
    type: "recovery",
    focus: "Low-stress consistency",
    gif: "/gifs/workouts/rest-steps-recovery-structure.gif",
    description:
      "A recovery-focused day designed to keep output steady without adding unnecessary fatigue.",
    warmup: [],
    steps: [
      {
        exercise: "Daily Steps",
        sets: "1",
        reps: "8k–10k",
        rest: "-",
        notes: "Break movement into multiple smaller walks if needed.",
      },
      {
        exercise: "Optional Mobility",
        sets: "1",
        reps: "8–10 min",
        rest: "-",
        notes: "Keep it light and restorative.",
      },
    ],
    finisher: ["Hydrate well", "Stay on food structure"],
  },

  recompFullBodyB: {
    title: "Full Body Recomp Session Two",
    type: "workout",
    focus: "Balanced full-body progression",
    gif: "/gifs/workouts/full-body-recomp-session-two.gif",
    description:
      "A second full-body session to keep progression balanced across the week while fitting a realistic schedule.",
    warmup: [
      "5 minutes easy cardio",
      "Hip mobility",
      "Bodyweight lunges",
      "Shoulder circles",
    ],
    steps: [
      {
        exercise: "Leg Press or Split Squat",
        sets: "3",
        reps: "10",
        rest: "60 sec",
        notes: "Use a controlled range and own the movement.",
      },
      {
        exercise: "Overhead Press",
        sets: "3",
        reps: "8–10",
        rest: "60 sec",
        notes: "Keep ribs down and core braced.",
      },
      {
        exercise: "Lat Pulldown",
        sets: "3",
        reps: "10–12",
        rest: "60 sec",
        notes: "Pull with the back, not just the arms.",
      },
      {
        exercise: "Hip Hinge Variation",
        sets: "3",
        reps: "10",
        rest: "60 sec",
        notes: "Stay clean and controlled.",
      },
      {
        exercise: "Dead Bug or Hanging Knee Raise",
        sets: "3",
        reps: "10–15",
        rest: "30 sec",
        notes: "Control the core movement.",
      },
    ],
    finisher: ["Optional short treadmill walk", "Stretch hips and shoulders"],
  },

  recompMobilityDay: {
    title: "Rest and Mobility Recovery Day",
    type: "recovery",
    focus: "Recovery support",
    gif: "/gifs/workouts/rest-mobility-recovery-day.gif",
    description:
      "A light recovery day that helps maintain movement quality and keeps fatigue low.",
    warmup: [],
    steps: [
      {
        exercise: "Mobility Flow",
        sets: "1",
        reps: "10–15 min",
        rest: "-",
        notes:
          "Focus on hips, shoulders, hamstrings, and thoracic spine.",
      },
      {
        exercise: "Optional Easy Walk",
        sets: "1",
        reps: "15–30 min",
        rest: "-",
        notes: "Use it to reduce stiffness and improve recovery.",
      },
    ],
    finisher: ["Relax and recover", "Prepare for final session of the week"],
  },

  recompFullBodyC: {
    title: "Full Body Recomp Session Three",
    type: "workout",
    focus: "Efficient weekly finish",
    gif: "/gifs/workouts/full-body-recomp-session-three.gif",
    description:
      "The final training day of the week to round out volume, maintain strength, and support body recomposition.",
    warmup: [
      "5 minutes easy cardio",
      "Bodyweight squats",
      "Glute bridges",
      "Band pull-aparts if available",
    ],
    steps: [
      {
        exercise: "Hack Squat or Goblet Squat",
        sets: "3",
        reps: "10–12",
        rest: "60 sec",
        notes: "Control the lowering phase and stay stable.",
      },
      {
        exercise: "Incline Dumbbell Press",
        sets: "3",
        reps: "8–10",
        rest: "60 sec",
        notes: "Use smooth controlled reps.",
      },
      {
        exercise: "Cable Row or Chest-Supported Row",
        sets: "3",
        reps: "10–12",
        rest: "60 sec",
        notes: "Keep tension in upper back throughout.",
      },
      {
        exercise: "Walking Lunges",
        sets: "2",
        reps: "10 each leg",
        rest: "45 sec",
        notes: "Stay balanced and controlled.",
      },
      {
        exercise: "Plank or Cable Crunch",
        sets: "3",
        reps: "12–15 or 30–45 sec",
        rest: "30 sec",
        notes: "Finish with solid core tension.",
      },
    ],
    finisher: ["5–8 minutes easy cooldown", "Log progress for the week"],
  },

  recompOptionalCardio: {
    title: "Optional Cardio Support Session",
    type: "conditioning",
    focus: "Optional calorie output",
    gif: "/gifs/workouts/optional-cardio-support-session.gif",
    description:
      "An optional low-intensity conditioning session to support recomposition without hurting recovery.",
    warmup: [],
    steps: [
      {
        exercise: "Incline Walk or Bike",
        sets: "1",
        reps: "20–30 min",
        rest: "-",
        notes:
          "Keep intensity moderate and easy to recover from.",
      },
    ],
    finisher: ["Stay hydrated", "Keep the rest of the day low stress"],
  },

  recompRecoveryDay: {
    title: "Recovery and Reset Day",
    type: "recovery",
    focus: "Reset",
    gif: "/gifs/workouts/recovery-reset-day.gif",
    description:
      "A light day to reset physically and mentally before the next training week.",
    warmup: [],
    steps: [
      {
        exercise: "Light Walk",
        sets: "1",
        reps: "20–40 minutes",
        rest: "-",
        notes: "Keep effort easy.",
      },
      {
        exercise: "Optional Stretching",
        sets: "1",
        reps: "8–10 min",
        rest: "-",
        notes: "Use only enough to feel better, not to force range.",
      },
    ],
    finisher: ["Review consistency from the week", "Prepare next week"],
  },

  starterFullBodyBasics: {
    title: "Full Body Basics Session",
    type: "workout",
    focus: "Beginner foundation",
    gif: "/gifs/workouts/full-body-basics-session.gif",
    description:
      "A beginner-friendly full-body introduction built to improve confidence, movement quality, and training consistency.",
    warmup: [
      "5 minutes easy treadmill walk or bike",
      "10 bodyweight squats",
      "10 glute bridges",
      "10 arm circles",
    ],
    steps: [
      {
        exercise: "Bodyweight or Goblet Squat",
        sets: "3",
        reps: "10–12",
        rest: "60 sec",
        notes: "Move slowly and stay balanced.",
      },
      {
        exercise: "Dumbbell Chest Press or Push-Ups",
        sets: "3",
        reps: "8–10",
        rest: "60 sec",
        notes: "Stay in control and use a comfortable range.",
      },
      {
        exercise: "Seated Row or Band Row",
        sets: "3",
        reps: "10–12",
        rest: "60 sec",
        notes: "Pull elbows back and sit tall.",
      },
      {
        exercise: "Glute Bridge",
        sets: "3",
        reps: "12–15",
        rest: "45 sec",
        notes: "Pause at the top.",
      },
      {
        exercise: "Plank",
        sets: "2",
        reps: "20–30 sec",
        rest: "30 sec",
        notes: "Stay braced and breathe.",
      },
    ],
    finisher: ["Easy walk cooldown", "Simple full-body stretch"],
  },

  starterWalkStretch: {
    title: "Walk and Light Stretch Day",
    type: "recovery",
    focus: "Low-pressure movement",
    gif: "/gifs/workouts/walk-light-stretch-day.gif",
    description:
      "A low-pressure recovery day to keep movement consistent without creating overwhelm.",
    warmup: [],
    steps: [
      {
        exercise: "Easy Walk",
        sets: "1",
        reps: "20–30 min",
        rest: "-",
        notes: "Keep the pace relaxed.",
      },
      {
        exercise: "Light Stretching",
        sets: "1",
        reps: "8–10 min",
        rest: "-",
        notes: "Focus on hips, back, and shoulders.",
      },
    ],
    finisher: ["Hydrate well", "Stay relaxed and recover"],
  },

  starterLowerBasics: {
    title: "Lower Body Basics Session",
    type: "workout",
    focus: "Lower-body confidence",
    gif: "/gifs/workouts/lower-body-basics-session.gif",
    description:
      "A beginner lower-body workout focused on balance, glutes, legs, and safe movement patterns.",
    warmup: [
      "5 minutes easy bike or walk",
      "Bodyweight squats",
      "Reverse lunges",
      "Glute bridges",
    ],
    steps: [
      {
        exercise: "Goblet Squat or Bodyweight Squat",
        sets: "3",
        reps: "10–12",
        rest: "60 sec",
        notes: "Move with control and stable feet.",
      },
      {
        exercise: "Romanian Deadlift",
        sets: "3",
        reps: "10",
        rest: "60 sec",
        notes: "Practice hinge mechanics carefully.",
      },
      {
        exercise: "Reverse Lunge",
        sets: "2",
        reps: "8–10 each leg",
        rest: "45 sec",
        notes: "Step back under control and stay balanced.",
      },
      {
        exercise: "Glute Bridge",
        sets: "3",
        reps: "12–15",
        rest: "45 sec",
        notes: "Pause at the top and squeeze glutes.",
      },
      {
        exercise: "Standing Calf Raise",
        sets: "2",
        reps: "12–15",
        rest: "30 sec",
        notes: "Move slowly and fully extend.",
      },
    ],
    finisher: ["Light cooldown walk", "Stretch glutes and quads"],
  },

  starterUpperBasics: {
    title: "Upper Body Basics Session",
    type: "workout",
    focus: "Upper-body confidence",
    gif: "/gifs/workouts/upper-body-basics-session.gif",
    description:
      "A simple upper-body day to build confidence with pushing, pulling, posture, and shoulder control.",
    warmup: [
      "5 minutes easy cardio",
      "Shoulder circles",
      "Band pull-aparts if available",
    ],
    steps: [
      {
        exercise: "Dumbbell Shoulder Press",
        sets: "3",
        reps: "10",
        rest: "60 sec",
        notes: "Stay stable and use clean reps.",
      },
      {
        exercise: "Lat Pulldown or Band Pulldown",
        sets: "3",
        reps: "10–12",
        rest: "60 sec",
        notes: "Pull down under control and sit tall.",
      },
      {
        exercise: "Dumbbell Chest Press",
        sets: "3",
        reps: "10",
        rest: "60 sec",
        notes: "Use a comfortable range and steady tempo.",
      },
      {
        exercise: "Seated Row",
        sets: "3",
        reps: "10–12",
        rest: "60 sec",
        notes: "Squeeze upper back at the end of each rep.",
      },
      {
        exercise: "Lateral Raise",
        sets: "2",
        reps: "12–15",
        rest: "30 sec",
        notes: "Use light weights and good control.",
      },
    ],
    finisher: ["Stretch chest and shoulders", "Review confidence and progress"],
  },

  starterRecoveryDay: {
    title: "Recovery and Confidence Reset",
    type: "recovery",
    focus: "Reset and consistency",
    gif: "/gifs/workouts/recovery-confidence-reset.gif",
    description:
      "A simple recovery day to keep momentum without pressure and help beginners stay consistent.",
    warmup: [],
    steps: [
      {
        exercise: "Easy Walk",
        sets: "1",
        reps: "20–30 min",
        rest: "-",
        notes: "Use this to stay moving without stress.",
      },
      {
        exercise: "Gentle Stretching",
        sets: "1",
        reps: "8–10 min",
        rest: "-",
        notes: "Keep it easy and supportive.",
      },
    ],
    finisher: ["Reflect on your week", "Prepare for the next session"],
  },
};

const leanResetWeek1 = buildWeek({
  week: "Week 1",
  focus: "Routine and consistency",
  notes:
    "Start with manageable intensity. Focus on showing up, learning movement patterns, and building momentum.",
  workoutOrder: [
    { label: "Day 1", workout: workouts.leanResetFullBodyStrength },
    { label: "Day 2", workout: workouts.leanResetInclineWalkCore },
    { label: "Day 3", workout: workouts.leanResetLowerGlutes },
    { label: "Day 4", workout: workouts.leanResetRecoverySteps },
    { label: "Day 5", workout: workouts.leanResetUpperFinisher },
    { label: "Day 6", workout: workouts.leanResetConditioning },
    { label: "Day 7", workout: workouts.leanResetRecoveryWalk },
  ],
});

const leanResetWeek2 = buildWeek({
  week: "Week 2",
  focus: "Better execution",
  notes:
    "Keep the same structure but improve control, range of motion, and overall exercise quality.",
  workoutOrder: [
    { label: "Day 1", workout: workouts.leanResetFullBodyStrength },
    { label: "Day 2", workout: workouts.leanResetInclineWalkCore },
    { label: "Day 3", workout: workouts.leanResetLowerGlutes },
    { label: "Day 4", workout: workouts.leanResetRecoverySteps },
    { label: "Day 5", workout: workouts.leanResetUpperFinisher },
    { label: "Day 6", workout: workouts.leanResetConditioning },
    { label: "Day 7", workout: workouts.leanResetRecoveryWalk },
  ],
});

const leanResetWeek3 = buildWeek({
  week: "Week 3",
  focus: "Progressive overload",
  notes:
    "Add small load increases, extra reps, or stronger form quality across the main movements.",
  workoutOrder: [
    { label: "Day 1", workout: workouts.leanResetFullBodyStrength },
    { label: "Day 2", workout: workouts.leanResetInclineWalkCore },
    { label: "Day 3", workout: workouts.leanResetLowerGlutes },
    { label: "Day 4", workout: workouts.leanResetRecoverySteps },
    { label: "Day 5", workout: workouts.leanResetUpperFinisher },
    { label: "Day 6", workout: workouts.leanResetConditioning },
    { label: "Day 7", workout: workouts.leanResetRecoveryWalk },
  ],
});

const leanResetWeek4 = buildWeek({
  week: "Week 4",
  focus: "Finish strong",
  notes:
    "Keep execution clean, stay consistent, and complete the month with strong adherence instead of random intensity.",
  workoutOrder: [
    { label: "Day 1", workout: workouts.leanResetFullBodyStrength },
    { label: "Day 2", workout: workouts.leanResetInclineWalkCore },
    { label: "Day 3", workout: workouts.leanResetLowerGlutes },
    { label: "Day 4", workout: workouts.leanResetRecoverySteps },
    { label: "Day 5", workout: workouts.leanResetUpperFinisher },
    { label: "Day 6", workout: workouts.leanResetConditioning },
    { label: "Day 7", workout: workouts.leanResetRecoveryWalk },
  ],
});

const bootyWeek12 = buildWeek({
  week: "Weeks 1–2",
  focus: "Patterning and activation",
  notes:
    "Build proper setup on hip thrusts, RDLs, split squats, and abduction work.",
  workoutOrder: [
    { label: "Day 1", workout: workouts.bootyGluteStrength },
    { label: "Day 2", workout: workouts.bootyUpperBalance },
    { label: "Day 3", workout: workouts.bootyRecoveryMobility },
    { label: "Day 4", workout: workouts.bootyGluteHypertrophy },
    { label: "Day 5", workout: workouts.bootyHamQuad },
    { label: "Day 6", workout: workouts.bootyRecoveryMobility },
    { label: "Day 7", workout: workouts.bootyOptionalSteps },
  ],
});

const bootyWeek34 = buildWeek({
  week: "Weeks 3–4",
  focus: "Volume build",
  notes:
    "Add training volume to the main glute movements and improve control through full range.",
  workoutOrder: [
    { label: "Day 1", workout: workouts.bootyGluteStrength },
    { label: "Day 2", workout: workouts.bootyUpperBalance },
    { label: "Day 3", workout: workouts.bootyRecoveryMobility },
    { label: "Day 4", workout: workouts.bootyGluteHypertrophy },
    { label: "Day 5", workout: workouts.bootyHamQuad },
    { label: "Day 6", workout: workouts.bootyRecoveryMobility },
    { label: "Day 7", workout: workouts.bootyOptionalSteps },
  ],
});

const bootyWeek56 = buildWeek({
  week: "Weeks 5–6",
  focus: "Load progression",
  notes:
    "Push heavier on primary lifts while keeping isolation work strict and glute-biased.",
  workoutOrder: [
    { label: "Day 1", workout: workouts.bootyGluteStrength },
    { label: "Day 2", workout: workouts.bootyUpperBalance },
    { label: "Day 3", workout: workouts.bootyRecoveryMobility },
    { label: "Day 4", workout: workouts.bootyGluteHypertrophy },
    { label: "Day 5", workout: workouts.bootyHamQuad },
    { label: "Day 6", workout: workouts.bootyRecoveryMobility },
    { label: "Day 7", workout: workouts.bootyOptionalSteps },
  ],
});

const bootyWeek78 = buildWeek({
  week: "Weeks 7–8",
  focus: "Peak effort phase",
  notes:
    "Finish with stronger working sets, better tension, and noticeable lower-body quality improvements.",
  workoutOrder: [
    { label: "Day 1", workout: workouts.bootyGluteStrength },
    { label: "Day 2", workout: workouts.bootyUpperBalance },
    { label: "Day 3", workout: workouts.bootyRecoveryMobility },
    { label: "Day 4", workout: workouts.bootyGluteHypertrophy },
    { label: "Day 5", workout: workouts.bootyHamQuad },
    { label: "Day 6", workout: workouts.bootyRecoveryMobility },
    { label: "Day 7", workout: workouts.bootyOptionalSteps },
  ],
});

const couplesWeek12 = buildWeek({
  week: "Weeks 1–2",
  focus: "Routine alignment",
  notes:
    "Build the habit of training together and keeping each other accountable.",
  workoutOrder: [
    { label: "Day 1", workout: workouts.couplesSharedStrength },
    { label: "Day 2", workout: workouts.couplesWalkCheckin },
    { label: "Day 3", workout: workouts.couplesLowerCore },
    { label: "Day 4", workout: workouts.couplesRecoveryWalk },
    { label: "Day 5", workout: workouts.couplesUpperConditioning },
    { label: "Day 6", workout: workouts.couplesChallengeDay },
    { label: "Day 7", workout: workouts.couplesRecoveryWalk },
  ],
});

const couplesWeek34 = buildWeek({
  week: "Weeks 3–4",
  focus: "Better consistency",
  notes:
    "Start improving effort, communication, and nutrition consistency together.",
  workoutOrder: [
    { label: "Day 1", workout: workouts.couplesSharedStrength },
    { label: "Day 2", workout: workouts.couplesWalkCheckin },
    { label: "Day 3", workout: workouts.couplesLowerCore },
    { label: "Day 4", workout: workouts.couplesRecoveryWalk },
    { label: "Day 5", workout: workouts.couplesUpperConditioning },
    { label: "Day 6", workout: workouts.couplesChallengeDay },
    { label: "Day 7", workout: workouts.couplesRecoveryWalk },
  ],
});

const couplesWeek56 = buildWeek({
  week: "Weeks 5–6",
  focus: "Finish strong",
  notes:
    "Keep intensity moderate but execution high. The goal is finishing the challenge together, not burning out.",
  workoutOrder: [
    { label: "Day 1", workout: workouts.couplesSharedStrength },
    { label: "Day 2", workout: workouts.couplesWalkCheckin },
    { label: "Day 3", workout: workouts.couplesLowerCore },
    { label: "Day 4", workout: workouts.couplesRecoveryWalk },
    { label: "Day 5", workout: workouts.couplesUpperConditioning },
    { label: "Day 6", workout: workouts.couplesChallengeDay },
    { label: "Day 7", workout: workouts.couplesRecoveryWalk },
  ],
});

const recompWeek12 = buildWeek({
  week: "Weeks 1–2",
  focus: "Efficient structure",
  notes:
    "Establish consistency with 3 strong weekly sessions and a realistic activity target.",
  workoutOrder: [
    { label: "Day 1", workout: workouts.recompFullBodyA },
    { label: "Day 2", workout: workouts.recompRestSteps },
    { label: "Day 3", workout: workouts.recompFullBodyB },
    { label: "Day 4", workout: workouts.recompMobilityDay },
    { label: "Day 5", workout: workouts.recompFullBodyC },
    { label: "Day 6", workout: workouts.recompOptionalCardio },
    { label: "Day 7", workout: workouts.recompRecoveryDay },
  ],
});

const recompWeek34 = buildWeek({
  week: "Weeks 3–4",
  focus: "Execution and progression",
  notes:
    "Improve movement quality and start adding controlled progression to the main lifts.",
  workoutOrder: [
    { label: "Day 1", workout: workouts.recompFullBodyA },
    { label: "Day 2", workout: workouts.recompRestSteps },
    { label: "Day 3", workout: workouts.recompFullBodyB },
    { label: "Day 4", workout: workouts.recompMobilityDay },
    { label: "Day 5", workout: workouts.recompFullBodyC },
    { label: "Day 6", workout: workouts.recompOptionalCardio },
    { label: "Day 7", workout: workouts.recompRecoveryDay },
  ],
});

const recompWeek56 = buildWeek({
  week: "Weeks 5–6",
  focus: "Higher training quality",
  notes:
    "Push a little harder in working sets while keeping recovery manageable.",
  workoutOrder: [
    { label: "Day 1", workout: workouts.recompFullBodyA },
    { label: "Day 2", workout: workouts.recompRestSteps },
    { label: "Day 3", workout: workouts.recompFullBodyB },
    { label: "Day 4", workout: workouts.recompMobilityDay },
    { label: "Day 5", workout: workouts.recompFullBodyC },
    { label: "Day 6", workout: workouts.recompOptionalCardio },
    { label: "Day 7", workout: workouts.recompRecoveryDay },
  ],
});

const recompWeek78 = buildWeek({
  week: "Weeks 7–8",
  focus: "Strong finish",
  notes:
    "Finish with high consistency and stronger effort, not random extra volume.",
  workoutOrder: [
    { label: "Day 1", workout: workouts.recompFullBodyA },
    { label: "Day 2", workout: workouts.recompRestSteps },
    { label: "Day 3", workout: workouts.recompFullBodyB },
    { label: "Day 4", workout: workouts.recompMobilityDay },
    { label: "Day 5", workout: workouts.recompFullBodyC },
    { label: "Day 6", workout: workouts.recompOptionalCardio },
    { label: "Day 7", workout: workouts.recompRecoveryDay },
  ],
});

const starterWeek1 = buildWeek({
  week: "Week 1",
  focus: "Get started",
  notes:
    "The goal is to complete the sessions and build belief, not to chase intensity.",
  workoutOrder: [
    { label: "Day 1", workout: workouts.starterFullBodyBasics },
    { label: "Day 2", workout: workouts.starterWalkStretch },
    { label: "Day 3", workout: workouts.starterLowerBasics },
    { label: "Day 4", workout: workouts.starterRecoveryDay },
    { label: "Day 5", workout: workouts.starterUpperBasics },
    { label: "Day 6", workout: workouts.starterWalkStretch },
    { label: "Day 7", workout: workouts.starterRecoveryDay },
  ],
});

const starterWeek2 = buildWeek({
  week: "Week 2",
  focus: "Better rhythm",
  notes:
    "Keep sessions simple and start feeling more comfortable with the exercises.",
  workoutOrder: [
    { label: "Day 1", workout: workouts.starterFullBodyBasics },
    { label: "Day 2", workout: workouts.starterWalkStretch },
    { label: "Day 3", workout: workouts.starterLowerBasics },
    { label: "Day 4", workout: workouts.starterRecoveryDay },
    { label: "Day 5", workout: workouts.starterUpperBasics },
    { label: "Day 6", workout: workouts.starterWalkStretch },
    { label: "Day 7", workout: workouts.starterRecoveryDay },
  ],
});

const starterWeek3 = buildWeek({
  week: "Week 3",
  focus: "More confidence",
  notes:
    "Improve exercise quality and add small progressions if form stays strong.",
  workoutOrder: [
    { label: "Day 1", workout: workouts.starterFullBodyBasics },
    { label: "Day 2", workout: workouts.starterWalkStretch },
    { label: "Day 3", workout: workouts.starterLowerBasics },
    { label: "Day 4", workout: workouts.starterRecoveryDay },
    { label: "Day 5", workout: workouts.starterUpperBasics },
    { label: "Day 6", workout: workouts.starterWalkStretch },
    { label: "Day 7", workout: workouts.starterRecoveryDay },
  ],
});

const starterWeek4 = buildWeek({
  week: "Week 4",
  focus: "Finish the first block",
  notes:
    "End the program feeling confident and ready to move into a more advanced phase.",
  workoutOrder: [
    { label: "Day 1", workout: workouts.starterFullBodyBasics },
    { label: "Day 2", workout: workouts.starterWalkStretch },
    { label: "Day 3", workout: workouts.starterLowerBasics },
    { label: "Day 4", workout: workouts.starterRecoveryDay },
    { label: "Day 5", workout: workouts.starterUpperBasics },
    { label: "Day 6", workout: workouts.starterWalkStretch },
    { label: "Day 7", workout: workouts.starterRecoveryDay },
  ],
});

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
    weeklyPlan: [leanResetWeek1, leanResetWeek2, leanResetWeek3, leanResetWeek4],
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
    weeklyPlan: [bootyWeek12, bootyWeek34, bootyWeek56, bootyWeek78],
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
    weeklyPlan: [couplesWeek12, couplesWeek34, couplesWeek56],
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
    weeklyPlan: [recompWeek12, recompWeek34, recompWeek56, recompWeek78],
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
    weeklyPlan: [starterWeek1, starterWeek2, starterWeek3, starterWeek4],
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
