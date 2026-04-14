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
    finisher: [
      "Hydrate well",
      "Prepare food and plan the next session",
    ],
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
    finisher: [
      "5 minutes slow walk",
      "Breathing and mobility cooldown",
    ],
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
        notes:
          "Control the return and do not swing the torso.",
      },
      {
        exercise: "Abduction Machine",
        sets: "3",
        reps: "15–20",
        rest: "30 sec",
        notes:
          "Stay upright and keep constant tension.",
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
    finisher: [
      "Optional 5-minute incline walk",
      "Glute and hamstring stretch",
    ],
  },

  bootyHamQuad: {
    title: "Hamstrings and Quads Support Session",
    type: "workout",
    focus: "Lower-body support",
    gif: "/gifs/workouts/hamstrings-quads-support-session.gif",
    description:
      "A lower-body support day to bring up quads and hamstrings while supporting stronger glute development.",
    warmup: [
      "5 minutes bike",
      "10 bodyweight squats",
      "10 reverse lunges",
    ],
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
    finisher: [
      "Light lower-body stretching",
      "Hydrate and recover",
    ],
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
    finisher: [
      "Easy walk cooldown",
      "Stretch shoulders and chest",
    ],
  },

  couplesChallengeDay: {
    title: "Shared Challenge and Conditioning Day",
    type: "conditioning",
    focus: "Challenge energy",
    gif: "/gifs/workouts/shared-challenge-conditioning-day.gif",
    description:
      "A higher-energy team session designed to build accountability, movement, and effort without becoming reckless.",
    warmup: [
      "5 minutes easy cardio",
      "Mobility and bodyweight prep",
    ],
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
    finisher: [
      "Optional 5–8 minute incline walk",
      "Log your session and recovery",
    ],
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
    finisher: [
      "Hydrate well",
      "Stay on food structure",
    ],
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
    finisher: [
      "Optional short treadmill walk",
      "Stretch hips and shoulders",
    ],
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
    finisher: [
      "Relax and recover",
      "Prepare for final session of the week",
    ],
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
    finisher: [
      "5–8 minutes easy cooldown",
      "Log progress for the week",
    ],
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
    finisher: [
      "Stay hydrated",
      "Keep the rest of the day low stress",
    ],
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
    finisher: [
      "Review consistency from the week",
      "Prepare next week",
    ],
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
    finisher: [
      "Easy walk cooldown",
      "Simple full-body stretch",
    ],
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
    finisher: [
      "Hydrate well",
      "Stay relaxed and recover",
    ],
