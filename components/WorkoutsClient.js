"use client";

import { useMemo, useState } from "react";
import { getExerciseMedia } from "../lib/exerciseMedia";

const workoutPrograms = [
  {
    slug: "glutes",
    filterLabel: "Glutes",
    title: "Booty Builder",
    subtitle:
      "Shape, grow, and strengthen the glutes with a structured lower-body emphasis.",
    focus: "lower",
    style: "shape",
    starterVisible: 2,
    variations: [
      {
        name: "Variation 1 — Glute Foundation",
        tier: "Starter",
        weeklySplit: "3 days / week",
        trainingDays: 3,
        goal: "Build shape, strength, and glute connection.",
        intensity: "Moderate",
        notes:
          "Best for beginners and intermediates who want to grow glutes without overcomplicating the structure.",
        days: [
          {
            day: "Day 1 — Heavy Glutes",
            sessionGoal: "Main glute strength and tension",
            warmup: [
              "5 min incline walk",
              "Banded abductions x 20",
              "Bodyweight squats x 15",
            ],
            finisher:
              "Banded frog pumps x 30 + abduction pulses x 20 for 2 rounds",
            exercises: [
              {
                name: "Hip Thrust",
                sets: "4",
                reps: "8–10",
                rest: "90 sec",
                cue: "Drive through heels and pause at the top.",
                mistakes: "Overextending the lower back.",
                substitute: "Glute Bridge",
                target: "Glutes",
              },
              {
                name: "Romanian Deadlift",
                sets: "4",
                reps: "8–10",
                rest: "90 sec",
                cue: "Push hips back and keep weight close.",
                mistakes: "Turning it into a squat.",
                substitute: "Goblet Squat",
                target: "Glutes / Hamstrings",
              },
              {
                name: "Bulgarian Split Squat",
                sets: "3",
                reps: "10 each leg",
                rest: "75 sec",
                cue: "Lean slightly forward to hit glutes.",
                mistakes: "Staying too upright.",
                substitute: "Lunges",
                target: "Glutes / Quads",
              },
            ],
          },
          {
            day: "Day 2 — Glute Volume",
            sessionGoal: "More glute fatigue and shape work",
            warmup: [
              "Bike 5 min",
              "Glute bridge x 15",
              "Walking lunges x 10 each",
            ],
            finisher: "Seated abduction x 25 + hold 20 sec x 2",
            exercises: [
              {
                name: "Squat",
                sets: "4",
                reps: "10–12",
                rest: "90 sec",
                cue: "Deep, controlled reps.",
                mistakes: "Half reps.",
                substitute: "Goblet Squat",
                target: "Glutes / Quads",
              },
              {
                name: "Leg Press",
                sets: "3",
                reps: "12–15",
                rest: "75 sec",
                cue: "Use full depth and stay controlled.",
                mistakes: "Short reps and locking knees hard.",
                substitute: "Hack Squat",
                target: "Glutes / Quads",
              },
              {
                name: "Lunges",
                sets: "3",
                reps: "12 each leg",
                rest: "60 sec",
                cue: "Stay tall and step with control.",
                mistakes: "Rushing the stride.",
                substitute: "Bulgarian Split Squat",
                target: "Glutes / Legs",
              },
            ],
          },
        ],
      },
      {
        name: "Variation 2 — Curves & Control",
        tier: "Starter",
        weeklySplit: "3 days / week",
        trainingDays: 3,
        goal: "Improve shape and isolation with moderate volume.",
        intensity: "Moderate",
        notes:
          "Ideal for users who want more control, shape emphasis, and a polished lower-body look.",
        days: [
          {
            day: "Day 1 — Glute Strength",
            sessionGoal: "Top-set strength and tension work",
            warmup: [
              "Stairmaster 5 min",
              "Banded side steps x 20",
              "Air squats x 15",
            ],
            finisher: "Banded glute bridge pulses x 25 x 2",
            exercises: [
              {
                name: "Hip Thrust",
                sets: "5",
                reps: "6–8",
                rest: "120 sec",
                cue: "Explode up, control down.",
                mistakes: "Bouncing through reps.",
                substitute: "Leg Press",
                target: "Glutes",
              },
              {
                name: "Romanian Deadlift",
                sets: "4",
                reps: "6–8",
                rest: "120 sec",
                cue: "Keep chest proud and load the hamstrings.",
                mistakes: "Starting with hips too high.",
                substitute: "Goblet Squat",
                target: "Glutes / Hamstrings",
              },
              {
                name: "Hack Squat",
                sets: "3",
                reps: "10–12",
                rest: "90 sec",
                cue: "Keep constant tension and hit depth.",
                mistakes: "Rushing the eccentric.",
                substitute: "Leg Press",
                target: "Quads / Glutes",
              },
            ],
          },
        ],
      },
      {
        name: "Variation 3 — Elite Glute Density",
        tier: "Premium",
        weeklySplit: "4 days / week",
        trainingDays: 4,
        goal: "Premium glute growth phase with deeper progression.",
        intensity: "High",
        notes:
          "For users ready to train harder, recover better, and progress more seriously across the month.",
        days: [
          {
            day: "Day 1 — Lower Strength",
            sessionGoal: "Heavy loading and glute density",
            warmup: [
              "Incline walk 5 min",
              "Banded bridge x 20",
              "Single-leg hinge x 10 each",
            ],
            finisher: "Frog pumps x 40",
            exercises: [
              {
                name: "Hip Thrust",
                sets: "5",
                reps: "5–8",
                rest: "120 sec",
                cue: "Build tension before every rep.",
                mistakes: "Relaxing at the bottom.",
                substitute: "Glute Bridge",
                target: "Glutes",
              },
              {
                name: "Bulgarian Split Squat",
                sets: "4",
                reps: "8–10 each leg",
                rest: "75 sec",
                cue: "Load the front glute.",
                mistakes: "Too much push from the back leg.",
                substitute: "Lunges",
                target: "Glutes / Quads",
              },
              {
                name: "Romanian Deadlift",
                sets: "4",
                reps: "8",
                rest: "120 sec",
                cue: "Stretch the hamstrings and keep the spine neutral.",
                mistakes: "Letting the weight drift away.",
                substitute: "Leg Press",
                target: "Hamstrings / Glutes",
              },
            ],
          },
          {
            day: "Day 2 — Shape + Isolation",
            sessionGoal: "Lower-body finishing work and detail",
            warmup: [
              "Bike 5 min",
              "Bodyweight squats x 15",
              "Banded abductions x 20",
            ],
            finisher: "Bodyweight squat pulse x 30 + hold 20 sec",
            exercises: [
              {
                name: "Leg Extension",
                sets: "4",
                reps: "12–15",
                rest: "60 sec",
                cue: "Fully squeeze the quads at the top.",
                mistakes: "Swinging through reps.",
                substitute: "Goblet Squat",
                target: "Quads",
              },
              {
                name: "Seated Leg Curl",
                sets: "4",
                reps: "12–15",
                rest: "60 sec",
                cue: "Control the full return.",
                mistakes: "Letting the stack slam down.",
                substitute: "Romanian Deadlift",
                target: "Hamstrings",
              },
              {
                name: "Leg Press",
                sets: "3",
                reps: "15",
                rest: "75 sec",
                cue: "Use a full range and steady tempo.",
                mistakes: "Short reps.",
                substitute: "Hack Squat",
                target: "Glutes / Quads",
              },
            ],
          },
        ],
      },
    ],
  },

  {
    slug: "upper",
    filterLabel: "Upper Body",
    title: "Upper Body Sculpt",
    subtitle:
      "Build a lean, defined upper body with shape, posture, and strength.",
    focus: "upper",
    style: "shape",
    starterVisible: 2,
    variations: [
      {
        name: "Variation 1 — Push & Pull Foundation",
        tier: "Starter",
        weeklySplit: "2 days / week",
        trainingDays: 2,
        goal: "Build posture and shoulder shape.",
        intensity: "Moderate",
        notes:
          "A simple but effective upper-body base for shape, posture, and clean movement patterns.",
        days: [
          {
            day: "Day 1 — Push",
            sessionGoal: "Chest, shoulders, and pressing pattern",
            warmup: [
              "Band pull-aparts x 20",
              "Wall slides x 15",
              "Push-up hold 20 sec",
            ],
            finisher: "Push-up burnout",
            exercises: [
              {
                name: "Bench Press",
                sets: "4",
                reps: "8–12",
                rest: "75 sec",
                cue: "Lower with control and press with a stable base.",
                mistakes: "Dropping too fast.",
                substitute: "Push-Up",
                target: "Chest / Front Delts / Triceps",
              },
              {
                name: "Dumbbell Shoulder Press",
                sets: "3",
                reps: "10",
                rest: "60 sec",
                cue: "Brace your core before pressing.",
                mistakes: "Arching the lower back.",
                substitute: "Incline Dumbbell Press",
                target: "Shoulders / Triceps",
              },
            ],
          },
          {
            day: "Day 2 — Pull",
            sessionGoal: "Back width and upper-back control",
            warmup: [
              "Rower 5 min",
              "Band rows x 20",
              "Scap squeeze x 15",
            ],
            finisher: "Straight Arm Pulldown x 20",
            exercises: [
              {
                name: "Lat Pulldown",
                sets: "4",
                reps: "10–12",
                rest: "75 sec",
                cue: "Drive elbows down and keep chest lifted.",
                mistakes: "Shrugging and swinging.",
                substitute: "Pull-Up",
                target: "Lats / Upper Back",
              },
              {
                name: "Seated Row",
                sets: "3",
                reps: "10–12",
                rest: "75 sec",
                cue: "Pull to your lower ribs and squeeze the back.",
                mistakes: "Using momentum.",
                substitute: "Barbell Row",
                target: "Mid Back / Lats",
              },
            ],
          },
        ],
      },
      {
        name: "Variation 2 — Sculpt & Tighten",
        tier: "Starter",
        weeklySplit: "2 days / week",
        trainingDays: 2,
        goal: "Refine shape with balanced push and pull.",
        intensity: "Moderate",
        notes:
          "Best for users who want a more aesthetic upper-body feel without high complexity.",
        days: [
          {
            day: "Day 1 — Upper Push",
            sessionGoal: "Upper chest and front delt shaping",
            warmup: [
              "Bike 5 min",
              "Shoulder circles x 20",
              "Band press x 15",
            ],
            finisher: "Push-up burnout",
            exercises: [
              {
                name: "Incline Bench Press",
                sets: "4",
                reps: "8–10",
                rest: "75 sec",
                cue: "Drive through the chest and keep control on the way down.",
                mistakes: "Letting elbows flare too much.",
                substitute: "Incline Dumbbell Press",
                target: "Upper Chest / Shoulders",
              },
              {
                name: "Chest Fly",
                sets: "3",
                reps: "12–15",
                rest: "45 sec",
                cue: "Open under control and squeeze through the chest.",
                mistakes: "Bending too much at the elbow.",
                substitute: "Cable Fly",
                target: "Chest",
              },
            ],
          },
          {
            day: "Day 2 — Upper Pull",
            sessionGoal: "Back detail and posture support",
            warmup: [
              "Rower 5 min",
              "Band face pulls x 15",
              "Light rows x 15",
            ],
            finisher: "Rear Delt Fly x 20",
            exercises: [
              {
                name: "Dumbbell Row",
                sets: "4",
                reps: "10 each side",
                rest: "60 sec",
                cue: "Drive the elbow back and keep torso stable.",
                mistakes: "Twisting too much.",
                substitute: "Barbell Row",
                target: "Lats / Mid Back",
              },
              {
                name: "Rear Delt Fly",
                sets: "3",
                reps: "15",
                rest: "45 sec",
                cue: "Move from the shoulders, not the traps.",
                mistakes: "Shrugging through the rep.",
                substitute: "Lat Pulldown",
                target: "Rear Delts / Upper Back",
              },
            ],
          },
        ],
      },
      {
        name: "Variation 3 — Premium Upper Definition",
        tier: "Premium",
        weeklySplit: "3 days / week",
        trainingDays: 3,
        goal: "Premium upper-body development with more density.",
        intensity: "High",
        notes:
          "A stronger premium structure with better volume distribution, density, and visible upper-body shape work.",
        days: [
          {
            day: "Day 1 — Chest + Shoulders",
            sessionGoal: "Pressing strength and shoulder shaping",
            warmup: [
              "Band external rotations x 15",
              "Push-up x 10",
              "Wall slides x 15",
            ],
            finisher: "Bench Press back-off set x 15",
            exercises: [
              {
                name: "Bench Press",
                sets: "5",
                reps: "5–8",
                rest: "120 sec",
                cue: "Strong base and controlled descent.",
                mistakes: "Bouncing the bar and flaring elbows.",
                substitute: "Incline Bench Press",
                target: "Chest / Front Delts / Triceps",
              },
              {
                name: "Dumbbell Shoulder Press",
                sets: "4",
                reps: "8–10",
                rest: "75 sec",
                cue: "Keep ribs down and press vertically.",
                mistakes: "Leaning back too hard.",
                substitute: "Incline Dumbbell Press",
                target: "Shoulders",
              },
              {
                name: "Cable Fly",
                sets: "3",
                reps: "12–15",
                rest: "45 sec",
                cue: "Keep tension through the full range.",
                mistakes: "Using body momentum.",
                substitute: "Chest Fly",
                target: "Chest",
              },
            ],
          },
          {
            day: "Day 2 — Back Density",
            sessionGoal: "Back thickness and lat development",
            warmup: [
              "Rower 5 min",
              "Band row x 20",
              "Straight Arm Pulldown x 15",
            ],
            finisher: "Pull-Up AMRAP",
            exercises: [
              {
                name: "Barbell Row",
                sets: "4",
                reps: "8–10",
                rest: "90 sec",
                cue: "Stay braced and pull toward the lower chest.",
                mistakes: "Standing up through the row.",
                substitute: "Seated Row",
                target: "Mid Back / Lats",
              },
              {
                name: "Lat Pulldown",
                sets: "4",
                reps: "10",
                rest: "75 sec",
                cue: "Lead with the elbows and keep chest proud.",
                mistakes: "Pulling with the wrists.",
                substitute: "Pull-Up",
                target: "Lats",
              },
              {
                name: "Straight Arm Pulldown",
                sets: "3",
                reps: "15",
                rest: "45 sec",
                cue: "Keep arms long and drive from the lats.",
                mistakes: "Turning it into a press.",
                substitute: "Rear Delt Fly",
                target: "Lats",
              },
            ],
          },
        ],
      },
    ],
  },

  {
    slug: "legs",
    filterLabel: "Legs",
    title: "Leg Strength & Shape",
    subtitle:
      "Quad, hamstring, glute, and calf development with balanced structure.",
    focus: "lower",
    style: "strength",
    starterVisible: 2,
    variations: [
      {
        name: "Variation 1 — Leg Base",
        tier: "Starter",
        weeklySplit: "2 days / week",
        trainingDays: 2,
        goal: "Build a strong lower-body foundation.",
        intensity: "Moderate",
        notes:
          "A straightforward lower-body structure for people who want stronger legs and better shape.",
        days: [
          {
            day: "Day 1 — Quads + Glutes",
            sessionGoal: "Compound lower-body strength",
            warmup: [
              "Bike 5 min",
              "Bodyweight squat x 15",
              "Walking lunge x 10 each",
            ],
            finisher: "Wall sit 45 sec x 2",
            exercises: [
              {
                name: "Hack Squat",
                sets: "4",
                reps: "8–10",
                rest: "90 sec",
                cue: "Full depth with control.",
                mistakes: "Half reps.",
                substitute: "Leg Press",
                target: "Quads / Glutes",
              },
              {
                name: "Leg Press",
                sets: "4",
                reps: "10–12",
                rest: "75 sec",
                cue: "Stay smooth and use a full range.",
                mistakes: "Cutting depth short.",
                substitute: "Goblet Squat",
                target: "Quads / Glutes",
              },
            ],
          },
        ],
      },
      {
        name: "Variation 2 — Leg Volume",
        tier: "Starter",
        weeklySplit: "2 days / week",
        trainingDays: 2,
        goal: "More shape and balanced lower volume.",
        intensity: "Moderate",
        notes:
          "Good for members who want leg development without a high recovery demand.",
        days: [
          {
            day: "Day 1 — Posterior Chain",
            sessionGoal: "Hamstrings and leg line development",
            warmup: ["Walk 5 min", "Glute bridge x 15", "Air hinge x 15"],
            finisher: "Calf raise burnout",
            exercises: [
              {
                name: "Seated Leg Curl",
                sets: "4",
                reps: "10–12",
                rest: "60 sec",
                cue: "Control the return.",
                mistakes: "Letting the weight slam back.",
                substitute: "Romanian Deadlift",
                target: "Hamstrings",
              },
              {
                name: "Lunges",
                sets: "3",
                reps: "12 each leg",
                rest: "60 sec",
                cue: "Stay tall and step with control.",
                mistakes: "Rushing the stride.",
                substitute: "Bulgarian Split Squat",
                target: "Legs / Glutes",
              },
            ],
          },
        ],
      },
      {
        name: "Variation 3 — Premium Leg Density",
        tier: "Premium",
        weeklySplit: "3 days / week",
        trainingDays: 3,
        goal: "Increase size, shape, and lower-body detail.",
        intensity: "High",
        notes:
          "Built for users who want stronger, thicker, more detailed lower-body development.",
        days: [
          {
            day: "Day 1 — Strength Base",
            sessionGoal: "Heavy compound leg loading",
            warmup: [
              "Bike 5 min",
              "Air squat x 15",
              "Walking lunges x 10 each",
            ],
            finisher: "Goblet squat x 20",
            exercises: [
              {
                name: "Hack Squat",
                sets: "5",
                reps: "6–8",
                rest: "120 sec",
                cue: "Own the descent and drive hard through the floor.",
                mistakes: "Bouncing out of the bottom.",
                substitute: "Leg Press",
                target: "Quads / Glutes",
              },
              {
                name: "Leg Press",
                sets: "4",
                reps: "10",
                rest: "90 sec",
                cue: "Keep constant tension and do not lock out hard.",
                mistakes: "Short reps.",
                substitute: "Squat",
                target: "Quads / Glutes",
              },
              {
                name: "Leg Extension",
                sets: "3",
                reps: "15",
                rest: "45 sec",
                cue: "Squeeze the quads at the top.",
                mistakes: "Swinging the weight.",
                substitute: "Goblet Squat",
                target: "Quads",
              },
            ],
          },
        ],
      },
    ],
  },

  {
    slug: "core",
    filterLabel: "Core",
    title: "Core & Waistline Control",
    subtitle:
      "Build stronger abs, better bracing, and cleaner lines through the waist.",
    focus: "core",
    style: "athletic",
    starterVisible: 2,
    variations: [
      {
        name: "Variation 1 — Core Foundation",
        tier: "Starter",
        weeklySplit: "2 days / week",
        trainingDays: 2,
        goal: "Improve bracing and visible ab development.",
        intensity: "Moderate",
        notes:
          "Good for building control, bracing, and a tighter-looking waistline.",
        days: [
          {
            day: "Day 1 — Core Control",
            sessionGoal: "Bracing and abdominal contraction",
            warmup: ["Toe reach x 15", "Dead bug x 10 each", "Plank 20 sec"],
            finisher: "Mountain climbers 30 sec x 3",
            exercises: [
              {
                name: "Cable Crunch",
                sets: "4",
                reps: "15",
                rest: "45 sec",
                cue: "Curl down through the abs.",
                mistakes: "Pulling mostly with the arms.",
                substitute: "Crunch",
                target: "Abs",
              },
              {
                name: "Push-Up",
                sets: "3",
                reps: "10–15",
                rest: "45 sec",
                cue: "Brace the core and keep the body in one straight line.",
                mistakes: "Hips sagging.",
                substitute: "Plank",
                target: "Core / Chest",
              },
            ],
          },
        ],
      },
    ],
  },

  {
    slug: "full-body",
    filterLabel: "Full Body",
    title: "Full Body Reset",
    subtitle:
      "Athletic all-round training for people who want total-body progress.",
    focus: "full",
    style: "athletic",
    starterVisible: 2,
    variations: [
      {
        name: "Variation 1 — Full Body Foundation",
        tier: "Starter",
        weeklySplit: "3 days / week",
        trainingDays: 3,
        goal: "Simple and effective whole-body progress.",
        intensity: "Moderate",
        notes:
          "For members who want an efficient total-body routine without overthinking the split.",
        days: [
          {
            day: "Day 1 — Full Body A",
            sessionGoal: "Balanced full-body output",
            warmup: ["Bike 5 min", "Bodyweight squat x 15", "Push-up x 10"],
            finisher: "Plank 30 sec x 3",
            exercises: [
              {
                name: "Goblet Squat",
                sets: "4",
                reps: "10",
                rest: "60 sec",
                cue: "Stay tall and controlled.",
                mistakes: "Collapsing the chest.",
                substitute: "Leg Press",
                target: "Legs / Core",
              },
              {
                name: "Bench Press",
                sets: "3",
                reps: "10",
                rest: "75 sec",
                cue: "Press with control and keep your shoulders stable.",
                mistakes: "Bouncing the bar.",
                substitute: "Push-Up",
                target: "Chest / Triceps",
              },
              {
                name: "Lat Pulldown",
                sets: "3",
                reps: "10",
                rest: "75 sec",
                cue: "Pull elbows down and keep chest lifted.",
                mistakes: "Swinging back too much.",
                substitute: "Pull-Up",
                target: "Lats / Upper Back",
              },
            ],
          },
        ],
      },
    ],
  },
];

export default function WorkoutsClient({ membershipType }) {
  const membership = String(membershipType || "").toLowerCase();
  const isStarter = membership === "starter";
  const isPremiumPlus = membership === "premium" || membership === "vip";

  const bodyFocusOptions = workoutPrograms.map((program) => ({
    slug: program.slug,
    label: program.filterLabel,
  }));

  const styleOptions = [
    { value: "all", label: "All Styles" },
    { value: "shape", label: "Shape & Sculpt" },
    { value: "strength", label: "Strength" },
    { value: "athletic", label: "Athletic" },
  ];

  const frequencyOptions = [
    { value: "all", label: "Any Frequency" },
    { value: "2", label: "2 Days / Week" },
    { value: "3", label: "3 Days / Week" },
    { value: "4", label: "4 Days / Week" },
  ];

  const [selectedFilter, setSelectedFilter] = useState(
    bodyFocusOptions[0]?.slug || "glutes"
  );
  const [selectedStyle, setSelectedStyle] = useState("all");
  const [selectedFrequency, setSelectedFrequency] = useState("all");
  const [expandedVariation, setExpandedVariation] = useState(null);

  const selectedProgram = useMemo(() => {
    return (
      workoutPrograms.find((program) => program.slug === selectedFilter) ||
      workoutPrograms[0]
    );
  }, [selectedFilter]);

  const filteredVariations = useMemo(() => {
    let list = [...selectedProgram.variations];

    if (selectedStyle !== "all") {
      list = list.filter((variation) => selectedProgram.style === selectedStyle);
    }

    if (selectedFrequency !== "all") {
      list = list.filter(
        (variation) => String(variation.trainingDays) === selectedFrequency
      );
    }

    if (isStarter) {
      list = list.slice(0, selectedProgram.starterVisible);
    }

    return list;
  }, [selectedProgram, selectedStyle, selectedFrequency, isStarter]);

  return (
    <div style={{ display: "grid", gap: "26px" }}>
      <section style={heroCard}>
        <div style={eyebrow}>Exclusive Training Library</div>
        <h2 style={heroTitle}>Build your training around the result you want</h2>
        <p style={heroText}>
          This workout library is built like a private coaching system. Choose the
          body area you want to focus on, filter by training style and weekly
          frequency, and open the variation that fits your current goal.
        </p>

        <div style={topFilterBlock}>
          <div style={filterGroup}>
            <div style={miniLabel}>Body Focus</div>
            <div style={filterTabs}>
              {bodyFocusOptions.map((item) => (
                <button
                  key={item.slug}
                  onClick={() => {
                    setSelectedFilter(item.slug);
                    setExpandedVariation(null);
                  }}
                  style={{
                    ...filterButton,
                    background:
                      selectedFilter === item.slug
                        ? "white"
                        : "rgba(255,255,255,0.04)",
                    color: selectedFilter === item.slug ? "black" : "white",
                  }}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          <div style={secondaryFilters}>
            <div style={selectWrap}>
              <div style={miniLabel}>Training Style</div>
              <select
                value={selectedStyle}
                onChange={(e) => setSelectedStyle(e.target.value)}
                style={selectInput}
              >
                {styleOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            <div style={selectWrap}>
              <div style={miniLabel}>Weekly Frequency</div>
              <select
                value={selectedFrequency}
                onChange={(e) => setSelectedFrequency(e.target.value)}
                style={selectInput}
              >
                {frequencyOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      <section style={programWrap}>
        <div style={programHead}>
          <div>
            <div style={eyebrow}>{selectedProgram.title}</div>
            <h2 style={programTitle}>{selectedProgram.subtitle}</h2>
            <p style={programSubText}>
              Open a variation below to see session goals, warm-ups, exercises,
              cues, mistakes, substitutes, and finishers.
            </p>
          </div>

          <div style={programCount}>
            {filteredVariations.length}/{selectedProgram.variations.length} plans visible
          </div>
        </div>

        <div style={variationList}>
          {filteredVariations.map((variation, index) => {
            const variationKey = `${selectedProgram.slug}-${variation.name}-${index}`;
            const isOpen = expandedVariation === variationKey;

            return (
              <div key={variationKey} style={variationShell}>
                <button
                  onClick={() =>
                    setExpandedVariation(isOpen ? null : variationKey)
                  }
                  style={variationSummaryButton}
                >
                  <div style={variationSummaryLeft}>
                    <div style={tierBadge}>{variation.tier}</div>
                    <div>
                      <div style={variationTitle}>{variation.name}</div>
                      <div style={variationGoal}>{variation.goal}</div>
                    </div>
                  </div>

                  <div style={variationSummaryRight}>
                    <div style={summaryMeta}>{variation.weeklySplit}</div>
                    <div style={summaryMeta}>{variation.intensity} Intensity</div>
                    <div style={summaryArrow}>{isOpen ? "−" : "+"}</div>
                  </div>
                </button>

                {isOpen && (
                  <div style={variationExpanded}>
                    <div style={variationOverviewGrid}>
                      <div style={overviewCard}>
                        <div style={miniLabel}>Program Note</div>
                        <div style={overviewText}>{variation.notes}</div>
                      </div>
                      <div style={overviewCard}>
                        <div style={miniLabel}>Structure</div>
                        <div style={overviewText}>
                          {variation.weeklySplit} · {variation.intensity} intensity
                        </div>
                      </div>
                      <div style={overviewCard}>
                        <div style={miniLabel}>Access</div>
                        <div style={overviewText}>
                          {variation.tier === "Starter"
                            ? "Included in Starter and above"
                            : "Unlocked in Premium and VIP"}
                        </div>
                      </div>
                    </div>

                    <div style={{ display: "grid", gap: "18px", marginTop: "18px" }}>
                      {variation.days.map((day) => (
                        <div key={day.day} style={dayCard}>
                          <div style={dayHeaderRow}>
                            <div>
                              <h4 style={dayTitle}>{day.day}</h4>
                              <div style={dayGoal}>{day.sessionGoal}</div>
                            </div>
                          </div>

                          <div style={blockCard}>
                            <div style={miniLabel}>Warm-up</div>
                            <ul style={bulletList}>
                              {day.warmup.map((item) => (
                                <li key={item}>{item}</li>
                              ))}
                            </ul>
                          </div>

                          <div style={exerciseGrid}>
                            {day.exercises.map((exercise) => (
                              <div key={exercise.name} style={exerciseCard}>
                                <div style={exerciseTop}>
                                  <div style={{ flex: 1 }}>
                                    <div style={exerciseName}>{exercise.name}</div>
                                    <div style={exerciseMeta}>
                                      {exercise.sets} sets · {exercise.reps} · Rest {exercise.rest}
                                    </div>
                                    <div style={targetTag}>{exercise.target}</div>
                                  </div>

                                  <div style={mediaBox}>
                                    {getExerciseMedia(exercise.name) ? (
                                      <video
                                        src={getExerciseMedia(exercise.name)}
                                        style={mediaVideo}
                                        autoPlay
                                        muted
                                        loop
                                        playsInline
                                        preload="metadata"
                                      />
                                    ) : (
                                      <div style={missingMediaBox}>Demo coming soon</div>
                                    )}
                                  </div>
                                </div>

                                <div style={detailGrid}>
                                  <div style={detailItem}>
                                    <div style={detailLabel}>Cue</div>
                                    <div style={detailText}>{exercise.cue}</div>
                                  </div>

                                  <div style={detailItem}>
                                    <div style={detailLabel}>Common mistake</div>
                                    <div style={detailText}>{exercise.mistakes}</div>
                                  </div>

                                  <div style={detailItem}>
                                    <div style={detailLabel}>Substitute</div>
                                    <div style={detailText}>{exercise.substitute}</div>
                                  </div>

                                  {(isPremiumPlus || variation.tier !== "Starter") && (
                                    <div style={detailItem}>
                                      <div style={detailLabel}>Progression</div>
                                      <div style={detailText}>
                                        Add 1 rep or a small weight increase once top reps are
                                        achieved with clean form.
                                      </div>
                                    </div>
                                  )}
                                </div>
                              </div>
                            ))}
                          </div>

                          <div style={{ ...blockCard, marginTop: "14px" }}>
                            <div style={miniLabel}>Finisher</div>
                            <div style={detailText}>{day.finisher}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {filteredVariations.length === 0 && (
          <div style={emptyBox}>
            No workout variations match this filter combination yet. Try another style
            or weekly frequency.
          </div>
        )}

        {isStarter &&
          selectedProgram.variations.length > selectedProgram.starterVisible && (
            <div style={lockedBox}>
              <div style={lockedTitle}>Premium workout library locked</div>
              <p style={lockedText}>
                Starter gives you the foundation. Upgrade to Premium or VIP for deeper
                structure, more workout variations, and more advanced progression paths.
              </p>
              <a href="/pricing" style={unlockButton}>
                Unlock Full Workout System
              </a>
            </div>
          )}
      </section>
    </div>
  );
}

const heroCard = {
  background:
    "linear-gradient(180deg, rgba(255,255,255,0.08), rgba(255,255,255,0.03))",
  border: "1px solid rgba(255,255,255,0.1)",
  borderRadius: "24px",
  padding: "28px",
};

const eyebrow = {
  fontSize: "12px",
  textTransform: "uppercase",
  letterSpacing: "0.16em",
  color: "rgba(255,255,255,0.45)",
  marginBottom: "8px",
};

const heroTitle = {
  margin: 0,
  fontSize: "36px",
  fontWeight: "900",
};

const heroText = {
  marginTop: "12px",
  color: "rgba(255,255,255,0.72)",
  lineHeight: 1.8,
  maxWidth: "920px",
};

const topFilterBlock = {
  display: "grid",
  gap: "18px",
  marginTop: "22px",
};

const filterGroup = {
  display: "grid",
  gap: "10px",
};

const filterTabs = {
  display: "flex",
  gap: "10px",
  flexWrap: "wrap",
};

const filterButton = {
  padding: "12px 16px",
  borderRadius: "12px",
  border: "1px solid rgba(255,255,255,0.14)",
  fontWeight: "800",
  cursor: "pointer",
};

const secondaryFilters = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
  gap: "16px",
};

const selectWrap = {
  display: "grid",
  gap: "8px",
};

const selectInput = {
  background: "rgba(255,255,255,0.04)",
  color: "white",
  border: "1px solid rgba(255,255,255,0.12)",
  borderRadius: "12px",
  padding: "12px 14px",
  fontWeight: "700",
};

const programWrap = {
  display: "grid",
  gap: "18px",
};

const programHead = {
  display: "flex",
  justifyContent: "space-between",
  gap: "16px",
  alignItems: "end",
  flexWrap: "wrap",
};

const programTitle = {
  margin: 0,
  fontSize: "28px",
  fontWeight: "800",
  color: "white",
  maxWidth: "800px",
};

const programSubText = {
  marginTop: "10px",
  color: "rgba(255,255,255,0.68)",
  lineHeight: 1.7,
  maxWidth: "820px",
};

const programCount = {
  padding: "10px 14px",
  borderRadius: "999px",
  background: "rgba(255,255,255,0.06)",
  border: "1px solid rgba(255,255,255,0.1)",
  fontWeight: "700",
  color: "rgba(255,255,255,0.78)",
};

const variationList = {
  display: "grid",
  gap: "14px",
};

const variationShell = {
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: "22px",
  overflow: "hidden",
};

const variationSummaryButton = {
  width: "100%",
  background: "transparent",
  color: "white",
  border: "none",
  padding: "20px 22px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "18px",
  cursor: "pointer",
  textAlign: "left",
};

const variationSummaryLeft = {
  display: "flex",
  gap: "14px",
  alignItems: "start",
};

const variationSummaryRight = {
  display: "flex",
  gap: "12px",
  alignItems: "center",
  flexWrap: "wrap",
  justifyContent: "flex-end",
};

const summaryMeta = {
  padding: "8px 10px",
  borderRadius: "999px",
  background: "rgba(255,255,255,0.05)",
  border: "1px solid rgba(255,255,255,0.08)",
  fontSize: "13px",
  fontWeight: "700",
  color: "rgba(255,255,255,0.78)",
};

const summaryArrow = {
  fontSize: "26px",
  fontWeight: "700",
  lineHeight: 1,
  minWidth: "20px",
  textAlign: "center",
};

const variationExpanded = {
  borderTop: "1px solid rgba(255,255,255,0.08)",
  padding: "20px 22px 22px 22px",
};

const variationOverviewGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
  gap: "12px",
};

const overviewCard = {
  background: "rgba(255,255,255,0.03)",
  border: "1px solid rgba(255,255,255,0.05)",
  borderRadius: "14px",
  padding: "14px",
};

const overviewText = {
  color: "rgba(255,255,255,0.78)",
  lineHeight: 1.7,
};

const tierBadge = {
  display: "inline-block",
  padding: "6px 10px",
  borderRadius: "10px",
  background: "white",
  color: "black",
  fontWeight: "800",
  marginTop: "2px",
};

const variationTitle = {
  margin: 0,
  fontSize: "24px",
  fontWeight: "800",
};

const variationGoal = {
  color: "rgba(255,255,255,0.7)",
  lineHeight: 1.7,
  marginTop: "6px",
  marginBottom: 0,
  maxWidth: "760px",
};

const dayCard = {
  background: "rgba(255,255,255,0.03)",
  border: "1px solid rgba(255,255,255,0.06)",
  borderRadius: "18px",
  padding: "18px",
};

const dayHeaderRow = {
  display: "flex",
  justifyContent: "space-between",
  gap: "12px",
  alignItems: "start",
  marginBottom: "12px",
  flexWrap: "wrap",
};

const dayTitle = {
  margin: 0,
  fontSize: "22px",
  fontWeight: "800",
};

const dayGoal = {
  marginTop: "6px",
  color: "rgba(255,255,255,0.68)",
  lineHeight: 1.7,
};

const blockCard = {
  background: "rgba(255,255,255,0.03)",
  border: "1px solid rgba(255,255,255,0.05)",
  borderRadius: "14px",
  padding: "14px",
};

const miniLabel = {
  fontSize: "12px",
  textTransform: "uppercase",
  letterSpacing: "0.14em",
  color: "rgba(255,255,255,0.5)",
  marginBottom: "8px",
};

const bulletList = {
  margin: 0,
  paddingLeft: "18px",
  color: "rgba(255,255,255,0.75)",
  lineHeight: 1.8,
};

const exerciseGrid = {
  display: "grid",
  gap: "12px",
  marginTop: "14px",
};

const exerciseCard = {
  background: "rgba(255,255,255,0.03)",
  border: "1px solid rgba(255,255,255,0.06)",
  borderRadius: "16px",
  padding: "16px",
};

const exerciseTop = {
  display: "flex",
  justifyContent: "space-between",
  gap: "14px",
  alignItems: "start",
  flexWrap: "wrap",
  marginBottom: "12px",
};

const exerciseName = {
  fontSize: "20px",
  fontWeight: "800",
  marginBottom: "6px",
};

const exerciseMeta = {
  color: "rgba(255,255,255,0.68)",
  fontSize: "14px",
};

const targetTag = {
  display: "inline-block",
  marginTop: "10px",
  padding: "7px 10px",
  borderRadius: "999px",
  background: "rgba(255,255,255,0.05)",
  border: "1px solid rgba(255,255,255,0.08)",
  fontSize: "12px",
  fontWeight: "700",
  color: "rgba(255,255,255,0.82)",
};

const mediaBox = {
  width: "120px",
  height: "120px",
  borderRadius: "14px",
  overflow: "hidden",
  background: "rgba(255,255,255,0.06)",
  border: "1px solid rgba(255,255,255,0.08)",
  flexShrink: 0,
};

const mediaVideo = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  display: "block",
};

const missingMediaBox = {
  width: "100%",
  height: "100%",
  display: "grid",
  placeItems: "center",
  color: "rgba(255,255,255,0.55)",
  fontSize: "12px",
  fontWeight: "700",
  textAlign: "center",
  padding: "10px",
};

const detailGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
  gap: "12px",
};

const detailItem = {
  background: "rgba(255,255,255,0.025)",
  border: "1px solid rgba(255,255,255,0.04)",
  borderRadius: "12px",
  padding: "12px",
};

const detailLabel = {
  fontSize: "12px",
  textTransform: "uppercase",
  letterSpacing: "0.12em",
  color: "rgba(255,255,255,0.5)",
  marginBottom: "6px",
};

const detailText = {
  color: "rgba(255,255,255,0.78)",
  lineHeight: 1.7,
};

const emptyBox = {
  background: "rgba(255,255,255,0.03)",
  border: "1px dashed rgba(255,255,255,0.18)",
  borderRadius: "18px",
  padding: "24px",
  color: "rgba(255,255,255,0.7)",
  lineHeight: 1.8,
  textAlign: "center",
};

const lockedBox = {
  background: "rgba(255,255,255,0.03)",
  border: "1px dashed rgba(255,255,255,0.2)",
  borderRadius: "20px",
  padding: "22px",
  textAlign: "center",
};

const lockedTitle = {
  fontSize: "24px",
  fontWeight: "800",
  marginBottom: "8px",
};

const lockedText = {
  color: "rgba(255,255,255,0.68)",
  lineHeight: 1.8,
  maxWidth: "760px",
  margin: "0 auto 16px auto",
};

const unlockButton = {
  display: "inline-block",
  padding: "14px 18px",
  background: "white",
  color: "black",
  borderRadius: "12px",
  fontWeight: "800",
  textDecoration: "none",
};
