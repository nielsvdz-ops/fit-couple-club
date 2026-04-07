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
    starterVisible: 4,
    variations: [
      {
        name: "Glute Foundation",
        tier: "Starter",
        weeklySplit: "2 days / week",
        trainingDays: 2,
        style: "shape",
        goalType: "shape",
        level: "beginner",
        intensity: "Moderate",
        notes:
          "A clean entry point for building shape, glute awareness, and lower-body confidence.",
        days: [
          {
            day: "Day 1 — Glute Base",
            sessionGoal: "Build glute connection and controlled tension",
            warmup: [
              "5 min incline walk",
              "Banded abductions x 20",
              "Bodyweight squats x 15",
            ],
            finisher: "Banded frog pumps x 30 + abduction pulses x 20 x 2",
            exercises: [
              {
                name: "Hip Thrust",
                sets: "4",
                reps: "10–12",
                rest: "90 sec",
                cue: "Drive through the heels and hold the squeeze.",
                mistakes: "Overarching the lower back.",
                substitute: "Glute Bridge",
                target: "Glutes",
              },
              {
                name: "Bulgarian Split Squat",
                sets: "3",
                reps: "10 each leg",
                rest: "75 sec",
                cue: "Lean slightly forward for more glute bias.",
                mistakes: "Staying too upright.",
                substitute: "Lunges",
                target: "Glutes / Quads",
              },
              {
                name: "Romanian Deadlift",
                sets: "3",
                reps: "10",
                rest: "90 sec",
                cue: "Push hips back and keep the weight close.",
                mistakes: "Turning it into a squat.",
                substitute: "Goblet Squat",
                target: "Glutes / Hamstrings",
              },
            ],
          },
          {
            day: "Day 2 — Shape Builder",
            sessionGoal: "Volume work for fuller glute shape",
            warmup: [
              "Bike 5 min",
              "Glute bridge x 15",
              "Walking lunges x 10 each",
            ],
            finisher: "Seated abduction x 25 + hold x 20 sec x 2",
            exercises: [
              {
                name: "Squat",
                sets: "4",
                reps: "10–12",
                rest: "90 sec",
                cue: "Stay controlled through the full range.",
                mistakes: "Half reps.",
                substitute: "Goblet Squat",
                target: "Glutes / Quads",
              },
              {
                name: "Leg Press",
                sets: "3",
                reps: "12–15",
                rest: "75 sec",
                cue: "Use full depth and stay smooth.",
                mistakes: "Locking the knees too hard.",
                substitute: "Hack Squat",
                target: "Glutes / Quads",
              },
              {
                name: "Lunges",
                sets: "3",
                reps: "12 each leg",
                rest: "60 sec",
                cue: "Stay tall and step with control.",
                mistakes: "Rushing through the stride.",
                substitute: "Bulgarian Split Squat",
                target: "Legs / Glutes",
              },
            ],
          },
        ],
      },
      {
        name: "Curves & Control",
        tier: "Starter",
        weeklySplit: "3 days / week",
        trainingDays: 3,
        style: "shape",
        goalType: "muscle",
        level: "beginner",
        intensity: "Moderate",
        notes:
          "More frequency and shape-focused volume for a rounder lower-body look.",
        days: [
          {
            day: "Day 1 — Glute Strength",
            sessionGoal: "Heavy controlled glute tension",
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
                cue: "Explode up and control down.",
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
                cue: "Stay smooth and own the eccentric.",
                mistakes: "Rushing the lowering phase.",
                substitute: "Leg Press",
                target: "Quads / Glutes",
              },
            ],
          },
        ],
      },
      {
        name: "Glutes + Hamstrings",
        tier: "Starter",
        weeklySplit: "3 days / week",
        trainingDays: 3,
        style: "strength",
        goalType: "muscle",
        level: "intermediate",
        intensity: "Moderate",
        notes:
          "A balanced split for fuller glutes and stronger posterior chain work.",
        days: [
          {
            day: "Day 1 — Posterior Focus",
            sessionGoal: "Stretch-based glute and hamstring work",
            warmup: [
              "Incline walk 5 min",
              "Glute bridge x 15",
              "Air hinge x 15",
            ],
            finisher: "Bodyweight hinge x 20 + frog pumps x 20",
            exercises: [
              {
                name: "Romanian Deadlift",
                sets: "4",
                reps: "8–10",
                rest: "90 sec",
                cue: "Stretch long and keep hips moving back.",
                mistakes: "Bending too much at the knees.",
                substitute: "Seated Leg Curl",
                target: "Hamstrings / Glutes",
              },
              {
                name: "Hip Thrust",
                sets: "4",
                reps: "8–10",
                rest: "90 sec",
                cue: "Pause hard at the top.",
                mistakes: "Losing tension at the bottom.",
                substitute: "Glute Bridge",
                target: "Glutes",
              },
              {
                name: "Seated Leg Curl",
                sets: "4",
                reps: "12",
                rest: "60 sec",
                cue: "Control the return fully.",
                mistakes: "Letting the stack slam down.",
                substitute: "Romanian Deadlift",
                target: "Hamstrings",
              },
            ],
          },
        ],
      },
      {
        name: "Lift & Shape",
        tier: "Starter",
        weeklySplit: "2 days / week",
        trainingDays: 2,
        style: "shape",
        goalType: "shape",
        level: "beginner",
        intensity: "Moderate",
        notes:
          "Focused on shaping the glutes with lower fatigue and clean exercise selection.",
        days: [
          {
            day: "Day 1 — Lift Session",
            sessionGoal: "Glute line and upper-glute emphasis",
            warmup: [
              "5 min bike",
              "Banded abductions x 20",
              "Walking lunges x 10 each",
            ],
            finisher: "Abduction pulses x 30",
            exercises: [
              {
                name: "Hip Thrust",
                sets: "4",
                reps: "10",
                rest: "90 sec",
                cue: "Keep constant tension through the rep.",
                mistakes: "Relaxing at the bottom.",
                substitute: "Glute Bridge",
                target: "Glutes",
              },
              {
                name: "Lunges",
                sets: "3",
                reps: "12 each leg",
                rest: "60 sec",
                cue: "Use a longer stride to hit more glute.",
                mistakes: "Short shallow steps.",
                substitute: "Bulgarian Split Squat",
                target: "Glutes / Legs",
              },
            ],
          },
        ],
      },
      {
        name: "Elite Glute Density",
        tier: "Premium",
        weeklySplit: "4 days / week",
        trainingDays: 4,
        style: "strength",
        goalType: "muscle",
        level: "intermediate",
        intensity: "High",
        notes:
          "A premium glute growth phase with more frequency, better loading, and clearer progression.",
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
                cue: "Stretch the hamstrings and stay neutral.",
                mistakes: "Letting the weight drift away.",
                substitute: "Leg Press",
                target: "Hamstrings / Glutes",
              },
            ],
          },
          {
            day: "Day 2 — Shape + Isolation",
            sessionGoal: "Detail work and glute support",
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
                cue: "Squeeze hard at the top.",
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
                mistakes: "Letting the stack slam.",
                substitute: "Romanian Deadlift",
                target: "Hamstrings",
              },
              {
                name: "Leg Press",
                sets: "3",
                reps: "15",
                rest: "75 sec",
                cue: "Use full range with steady tempo.",
                mistakes: "Short reps.",
                substitute: "Hack Squat",
                target: "Glutes / Quads",
              },
            ],
          },
        ],
      },
      {
        name: "Heavy Glute Strength",
        tier: "Premium",
        weeklySplit: "3 days / week",
        trainingDays: 3,
        style: "strength",
        goalType: "strength",
        level: "advanced",
        intensity: "High",
        notes:
          "Built around lower rep ranges and stronger top-set progression.",
        days: [
          {
            day: "Day 1 — Strength Focus",
            sessionGoal: "Heavy glute strength development",
            warmup: [
              "5 min incline walk",
              "Hip bridge hold 20 sec",
              "Air squats x 15",
            ],
            finisher: "Bodyweight thrust x 20",
            exercises: [
              {
                name: "Hip Thrust",
                sets: "5",
                reps: "5–6",
                rest: "120 sec",
                cue: "Brace before every rep.",
                mistakes: "Soft setup and rushed lockout.",
                substitute: "Glute Bridge",
                target: "Glutes",
              },
              {
                name: "Hack Squat",
                sets: "4",
                reps: "6–8",
                rest: "120 sec",
                cue: "Control depth and drive hard out.",
                mistakes: "Bouncing in the bottom.",
                substitute: "Leg Press",
                target: "Quads / Glutes",
              },
            ],
          },
        ],
      },
      {
        name: "Glute Volume Phase",
        tier: "Premium",
        weeklySplit: "4 days / week",
        trainingDays: 4,
        style: "shape",
        goalType: "muscle",
        level: "intermediate",
        intensity: "High",
        notes:
          "Higher volume and fuller shape emphasis for advanced lower-body aesthetics.",
        days: [
          {
            day: "Day 1 — Volume Builder",
            sessionGoal: "Accumulate high-quality glute volume",
            warmup: [
              "Bike 5 min",
              "Banded walks x 20",
              "Bodyweight lunges x 10 each",
            ],
            finisher: "Frog pumps x 50",
            exercises: [
              {
                name: "Hip Thrust",
                sets: "4",
                reps: "12",
                rest: "75 sec",
                cue: "Stay smooth and keep constant tension.",
                mistakes: "Resting at the bottom.",
                substitute: "Glute Bridge",
                target: "Glutes",
              },
              {
                name: "Lunges",
                sets: "4",
                reps: "14 each leg",
                rest: "60 sec",
                cue: "Control every step.",
                mistakes: "Rushing for fatigue only.",
                substitute: "Bulgarian Split Squat",
                target: "Glutes / Legs",
              },
              {
                name: "Leg Press",
                sets: "4",
                reps: "15",
                rest: "60 sec",
                cue: "Use full depth and tempo.",
                mistakes: "Cutting the range short.",
                substitute: "Hack Squat",
                target: "Glutes / Quads",
              },
            ],
          },
        ],
      },
      {
        name: "Glute Lift Premium",
        tier: "Premium",
        weeklySplit: "3 days / week",
        trainingDays: 3,
        style: "shape",
        goalType: "shape",
        level: "intermediate",
        intensity: "Moderate",
        notes:
          "A premium shape-focused split for members who care more about form and lines than max load.",
        days: [
          {
            day: "Day 1 — Lift + Tone",
            sessionGoal: "Polished shape work",
            warmup: [
              "5 min stairmaster",
              "Glute bridge x 15",
              "Bodyweight squat x 15",
            ],
            finisher: "Pulse squats x 25",
            exercises: [
              {
                name: "Bulgarian Split Squat",
                sets: "4",
                reps: "10 each leg",
                rest: "75 sec",
                cue: "Move slow and load the front leg.",
                mistakes: "Standing too upright.",
                substitute: "Lunges",
                target: "Glutes / Quads",
              },
              {
                name: "Hip Thrust",
                sets: "4",
                reps: "10",
                rest: "90 sec",
                cue: "Pause and squeeze fully.",
                mistakes: "Incomplete lockout.",
                substitute: "Glute Bridge",
                target: "Glutes",
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
    starterVisible: 4,
    variations: [
      {
        name: "Push & Pull Foundation",
        tier: "Starter",
        weeklySplit: "2 days / week",
        trainingDays: 2,
        style: "shape",
        goalType: "shape",
        level: "beginner",
        intensity: "Moderate",
        notes:
          "A simple upper-body base for posture, tone, and clean movement quality.",
        days: [
          {
            day: "Day 1 — Push",
            sessionGoal: "Chest and shoulders",
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
                cue: "Brace before pressing.",
                mistakes: "Arching the lower back.",
                substitute: "Incline Dumbbell Press",
                target: "Shoulders / Triceps",
              },
            ],
          },
          {
            day: "Day 2 — Pull",
            sessionGoal: "Back width and posture",
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
                cue: "Pull to lower ribs and squeeze the back.",
                mistakes: "Using momentum.",
                substitute: "Barbell Row",
                target: "Mid Back / Lats",
              },
            ],
          },
        ],
      },
      {
        name: "Sculpt & Tighten",
        tier: "Starter",
        weeklySplit: "2 days / week",
        trainingDays: 2,
        style: "shape",
        goalType: "shape",
        level: "beginner",
        intensity: "Moderate",
        notes:
          "Focused on a leaner aesthetic look with balanced upper-body volume.",
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
                cue: "Drive through the chest and stay smooth on the lowering phase.",
                mistakes: "Flaring elbows too hard.",
                substitute: "Incline Dumbbell Press",
                target: "Upper Chest / Shoulders",
              },
              {
                name: "Chest Fly",
                sets: "3",
                reps: "12–15",
                rest: "45 sec",
                cue: "Open and squeeze under control.",
                mistakes: "Too much bend in the elbow.",
                substitute: "Cable Fly",
                target: "Chest",
              },
            ],
          },
          {
            day: "Day 2 — Upper Pull",
            sessionGoal: "Back detail and rear shoulder support",
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
                cue: "Drive the elbow back and stay stable.",
                mistakes: "Twisting too much.",
                substitute: "Barbell Row",
                target: "Lats / Mid Back",
              },
              {
                name: "Rear Delt Fly",
                sets: "3",
                reps: "15",
                rest: "45 sec",
                cue: "Move from the shoulders, not traps.",
                mistakes: "Shrugging through the rep.",
                substitute: "Lat Pulldown",
                target: "Rear Delts / Upper Back",
              },
            ],
          },
        ],
      },
      {
        name: "Upper Beginner Reset",
        tier: "Starter",
        weeklySplit: "2 days / week",
        trainingDays: 2,
        style: "athletic",
        goalType: "fat-loss",
        level: "beginner",
        intensity: "Moderate",
        notes:
          "Good for members coming back from a break who want something simple and effective.",
        days: [
          {
            day: "Day 1 — Reset Push",
            sessionGoal: "Foundational pressing and posture",
            warmup: [
              "Wall slides x 15",
              "Band pull-aparts x 20",
              "Push-up x 8",
            ],
            finisher: "Plank 30 sec x 2",
            exercises: [
              {
                name: "Push-Up",
                sets: "3",
                reps: "10–12",
                rest: "45 sec",
                cue: "Brace the core and stay long.",
                mistakes: "Hips sagging.",
                substitute: "Bench Press",
                target: "Chest / Core",
              },
              {
                name: "Dumbbell Shoulder Press",
                sets: "3",
                reps: "10",
                rest: "60 sec",
                cue: "Press smoothly and stay stacked.",
                mistakes: "Leaning back.",
                substitute: "Incline Dumbbell Press",
                target: "Shoulders",
              },
            ],
          },
        ],
      },
      {
        name: "Upper Lean Look",
        tier: "Starter",
        weeklySplit: "3 days / week",
        trainingDays: 3,
        style: "shape",
        goalType: "shape",
        level: "intermediate",
        intensity: "Moderate",
        notes:
          "A more aesthetic upper-body split for shape, posture, and cleaner upper-body lines.",
        days: [
          {
            day: "Day 1 — Lean Push",
            sessionGoal: "Clean pressing and chest line",
            warmup: [
              "Band press x 15",
              "Wall slides x 15",
              "Push-up hold 20 sec",
            ],
            finisher: "Push-up burnout",
            exercises: [
              {
                name: "Bench Press",
                sets: "4",
                reps: "8–10",
                rest: "75 sec",
                cue: "Press with control and stay stable.",
                mistakes: "Dropping the bar too fast.",
                substitute: "Push-Up",
                target: "Chest / Triceps",
              },
              {
                name: "Chest Fly",
                sets: "3",
                reps: "12–15",
                rest: "45 sec",
                cue: "Move through a controlled stretch.",
                mistakes: "Shortening the range.",
                substitute: "Cable Fly",
                target: "Chest",
              },
            ],
          },
        ],
      },
      {
        name: "Premium Upper Definition",
        tier: "Premium",
        weeklySplit: "3 days / week",
        trainingDays: 3,
        style: "shape",
        goalType: "muscle",
        level: "intermediate",
        intensity: "High",
        notes:
          "A premium upper-body development plan with more density, volume, and visible shape work.",
        days: [
          {
            day: "Day 1 — Chest + Shoulders",
            sessionGoal: "Pressing strength and upper-body density",
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
      {
        name: "Upper Strength Builder",
        tier: "Premium",
        weeklySplit: "3 days / week",
        trainingDays: 3,
        style: "strength",
        goalType: "strength",
        level: "advanced",
        intensity: "High",
        notes:
          "A stronger upper-body phase built around heavier pressing and rowing patterns.",
        days: [
          {
            day: "Day 1 — Heavy Push",
            sessionGoal: "Top-end pressing power",
            warmup: [
              "Band press x 15",
              "Push-up x 8",
              "Wall slides x 15",
            ],
            finisher: "Push-up AMRAP",
            exercises: [
              {
                name: "Bench Press",
                sets: "5",
                reps: "4–6",
                rest: "120 sec",
                cue: "Stay tight and drive evenly.",
                mistakes: "Loose setup.",
                substitute: "Incline Bench Press",
                target: "Chest / Triceps",
              },
              {
                name: "Barbell Row",
                sets: "4",
                reps: "6–8",
                rest: "90 sec",
                cue: "Stay braced and pull strong.",
                mistakes: "Using body swing.",
                substitute: "Seated Row",
                target: "Back",
              },
            ],
          },
        ],
      },
      {
        name: "Back-Focused Upper",
        tier: "Premium",
        weeklySplit: "3 days / week",
        trainingDays: 3,
        style: "athletic",
        goalType: "athletic",
        level: "intermediate",
        intensity: "High",
        notes:
          "A premium pull-dominant upper plan for posture, detail, and athletic back shape.",
        days: [
          {
            day: "Day 1 — Pull Detail",
            sessionGoal: "Width, posture, and back control",
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
                cue: "Elbows down and chest lifted.",
                mistakes: "Swinging and shrugging.",
                substitute: "Pull-Up",
                target: "Lats",
              },
              {
                name: "Seated Row",
                sets: "4",
                reps: "10–12",
                rest: "75 sec",
                cue: "Squeeze the mid back hard.",
                mistakes: "Using momentum.",
                substitute: "Barbell Row",
                target: "Mid Back",
              },
              {
                name: "Rear Delt Fly",
                sets: "3",
                reps: "15",
                rest: "45 sec",
                cue: "Move from the rear shoulder.",
                mistakes: "Shrugging.",
                substitute: "Dumbbell Row",
                target: "Rear Delts / Upper Back",
              },
            ],
          },
        ],
      },
      {
        name: "Shoulders & Shape",
        tier: "Premium",
        weeklySplit: "2 days / week",
        trainingDays: 2,
        style: "shape",
        goalType: "shape",
        level: "intermediate",
        intensity: "Moderate",
        notes:
          "Focused more on shoulder caps, upper shape, and clean upper-body aesthetics.",
        days: [
          {
            day: "Day 1 — Shoulder Shape",
            sessionGoal: "Shoulder roundness and upper control",
            warmup: [
              "Shoulder circles x 20",
              "Band pulls x 20",
              "Wall slides x 15",
            ],
            finisher: "Push-up burnout",
            exercises: [
              {
                name: "Dumbbell Shoulder Press",
                sets: "4",
                reps: "10",
                rest: "60 sec",
                cue: "Stack ribs over hips.",
                mistakes: "Overarching the back.",
                substitute: "Incline Dumbbell Press",
                target: "Shoulders",
              },
              {
                name: "Chest Fly",
                sets: "3",
                reps: "12–15",
                rest: "45 sec",
                cue: "Stay smooth through the stretch.",
                mistakes: "Bending elbows too much.",
                substitute: "Cable Fly",
                target: "Chest",
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
    starterVisible: 4,
    variations: [
      {
        name: "Leg Base",
        tier: "Starter",
        weeklySplit: "2 days / week",
        trainingDays: 2,
        style: "strength",
        goalType: "strength",
        level: "beginner",
        intensity: "Moderate",
        notes:
          "A straightforward lower-body base for stronger, better-looking legs.",
        days: [
          {
            day: "Day 1 — Quads + Glutes",
            sessionGoal: "Compound lower-body strength",
            warmup: [
              "Bike 5 min",
              "Bodyweight squat x 15",
              "Walking lunges x 10 each",
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
        name: "Leg Volume",
        tier: "Starter",
        weeklySplit: "2 days / week",
        trainingDays: 2,
        style: "shape",
        goalType: "muscle",
        level: "beginner",
        intensity: "Moderate",
        notes:
          "A lower-fatigue option for shaping the legs without heavy complexity.",
        days: [
          {
            day: "Day 1 — Posterior Chain",
            sessionGoal: "Hamstrings and shape work",
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
        name: "Athletic Legs",
        tier: "Starter",
        weeklySplit: "3 days / week",
        trainingDays: 3,
        style: "athletic",
        goalType: "athletic",
        level: "intermediate",
        intensity: "Moderate",
        notes:
          "A more dynamic lower-body structure for strength, control, and athletic feel.",
        days: [
          {
            day: "Day 1 — Athletic Base",
            sessionGoal: "Strong, balanced lower-body output",
            warmup: [
              "Bike 5 min",
              "Walking lunges x 10 each",
              "Bodyweight squat x 15",
            ],
            finisher: "Squat pulse x 20",
            exercises: [
              {
                name: "Squat",
                sets: "4",
                reps: "8–10",
                rest: "90 sec",
                cue: "Stay tall and stable.",
                mistakes: "Collapsing in the bottom.",
                substitute: "Goblet Squat",
                target: "Legs / Core",
              },
              {
                name: "Lunges",
                sets: "3",
                reps: "14 each leg",
                rest: "60 sec",
                cue: "Own every step.",
                mistakes: "Rushing the pattern.",
                substitute: "Bulgarian Split Squat",
                target: "Legs / Glutes",
              },
            ],
          },
        ],
      },
      {
        name: "Leg Shape Builder",
        tier: "Starter",
        weeklySplit: "3 days / week",
        trainingDays: 3,
        style: "shape",
        goalType: "shape",
        level: "intermediate",
        intensity: "Moderate",
        notes:
          "Designed for a cleaner, more aesthetic lower-body look with balanced volume.",
        days: [
          {
            day: "Day 1 — Shape Session",
            sessionGoal: "Create tension and visual leg detail",
            warmup: [
              "Bike 5 min",
              "Bodyweight squat x 15",
              "Air hinge x 15",
            ],
            finisher: "Wall sit x 45 sec",
            exercises: [
              {
                name: "Leg Press",
                sets: "4",
                reps: "12",
                rest: "75 sec",
                cue: "Use full range and tempo.",
                mistakes: "Locking out hard.",
                substitute: "Hack Squat",
                target: "Quads / Glutes",
              },
              {
                name: "Leg Extension",
                sets: "3",
                reps: "15",
                rest: "45 sec",
                cue: "Squeeze hard at the top.",
                mistakes: "Throwing the weight.",
                substitute: "Goblet Squat",
                target: "Quads",
              },
            ],
          },
        ],
      },
      {
        name: "Premium Leg Density",
        tier: "Premium",
        weeklySplit: "3 days / week",
        trainingDays: 3,
        style: "strength",
        goalType: "muscle",
        level: "intermediate",
        intensity: "High",
        notes:
          "Built for more detail, more loading, and better lower-body development.",
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
      {
        name: "Quad Focus Premium",
        tier: "Premium",
        weeklySplit: "3 days / week",
        trainingDays: 3,
        style: "shape",
        goalType: "shape",
        level: "intermediate",
        intensity: "High",
        notes:
          "Higher quad emphasis for members who want stronger and more defined front legs.",
        days: [
          {
            day: "Day 1 — Quad Builder",
            sessionGoal: "Drive more front-leg detail",
            warmup: [
              "Bike 5 min",
              "Air squat x 15",
              "Wall sit x 20 sec",
            ],
            finisher: "Leg extension partials x 20",
            exercises: [
              {
                name: "Hack Squat",
                sets: "4",
                reps: "8–10",
                rest: "90 sec",
                cue: "Drive knees forward under control.",
                mistakes: "Cutting depth.",
                substitute: "Leg Press",
                target: "Quads",
              },
              {
                name: "Leg Extension",
                sets: "4",
                reps: "12–15",
                rest: "45 sec",
                cue: "Pause at the top.",
                mistakes: "Throwing reps.",
                substitute: "Goblet Squat",
                target: "Quads",
              },
            ],
          },
        ],
      },
      {
        name: "Posterior Chain Premium",
        tier: "Premium",
        weeklySplit: "3 days / week",
        trainingDays: 3,
        style: "strength",
        goalType: "strength",
        level: "advanced",
        intensity: "High",
        notes:
          "For members who want stronger hamstrings, glutes, and back-side chain development.",
        days: [
          {
            day: "Day 1 — Hamstring Base",
            sessionGoal: "Heavy posterior chain loading",
            warmup: [
              "Walk 5 min",
              "Glute bridge x 15",
              "Air hinge x 15",
            ],
            finisher: "Glute bridge x 25",
            exercises: [
              {
                name: "Romanian Deadlift",
                sets: "5",
                reps: "6–8",
                rest: "120 sec",
                cue: "Push hips back and stretch long.",
                mistakes: "Squatting the pattern.",
                substitute: "Seated Leg Curl",
                target: "Hamstrings / Glutes",
              },
              {
                name: "Seated Leg Curl",
                sets: "4",
                reps: "10–12",
                rest: "60 sec",
                cue: "Control the full return.",
                mistakes: "Slamming the stack.",
                substitute: "Romanian Deadlift",
                target: "Hamstrings",
              },
            ],
          },
        ],
      },
      {
        name: "Lower Strength Peak",
        tier: "Premium",
        weeklySplit: "4 days / week",
        trainingDays: 4,
        style: "strength",
        goalType: "strength",
        level: "advanced",
        intensity: "High",
        notes:
          "A harder premium block for members pushing heavier lower-body training.",
        days: [
          {
            day: "Day 1 — Peak Strength",
            sessionGoal: "Top-end lower-body output",
            warmup: [
              "Bike 5 min",
              "Air squat x 15",
              "Walking lunges x 10 each",
            ],
            finisher: "Wall sit x 60 sec",
            exercises: [
              {
                name: "Hack Squat",
                sets: "5",
                reps: "5–6",
                rest: "120 sec",
                cue: "Stay braced and own the bottom position.",
                mistakes: "Losing tightness.",
                substitute: "Leg Press",
                target: "Quads / Glutes",
              },
              {
                name: "Leg Press",
                sets: "4",
                reps: "8",
                rest: "90 sec",
                cue: "Stay controlled and powerful.",
                mistakes: "Short reps.",
                substitute: "Squat",
                target: "Quads / Glutes",
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
    starterVisible: 3,
    variations: [
      {
        name: "Core Foundation",
        tier: "Starter",
        weeklySplit: "2 days / week",
        trainingDays: 2,
        style: "athletic",
        goalType: "shape",
        level: "beginner",
        intensity: "Moderate",
        notes:
          "A simple starting point for tighter bracing and a stronger midsection.",
        days: [
          {
            day: "Day 1 — Core Control",
            sessionGoal: "Bracing and abdominal control",
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
                cue: "Brace and keep the body long.",
                mistakes: "Sagging through the hips.",
                substitute: "Plank",
                target: "Core / Chest",
              },
            ],
          },
        ],
      },
      {
        name: "Waist Tightening",
        tier: "Starter",
        weeklySplit: "2 days / week",
        trainingDays: 2,
        style: "shape",
        goalType: "shape",
        level: "beginner",
        intensity: "Moderate",
        notes:
          "For members who want visible control and a tighter-looking midsection.",
        days: [
          {
            day: "Day 1 — Tighten Session",
            sessionGoal: "Ab contraction and tension control",
            warmup: ["Dead bug x 10", "Toe reach x 15", "Plank 20 sec"],
            finisher: "Mountain climbers 20 sec x 3",
            exercises: [
              {
                name: "Cable Crunch",
                sets: "4",
                reps: "12–15",
                rest: "45 sec",
                cue: "Pull the ribs down into the pelvis.",
                mistakes: "Using momentum.",
                substitute: "Crunch",
                target: "Abs",
              },
            ],
          },
        ],
      },
      {
        name: "Athletic Core Reset",
        tier: "Starter",
        weeklySplit: "3 days / week",
        trainingDays: 3,
        style: "athletic",
        goalType: "athletic",
        level: "intermediate",
        intensity: "Moderate",
        notes:
          "A cleaner athletic core plan built around control, bracing, and consistency.",
        days: [
          {
            day: "Day 1 — Athletic Brace",
            sessionGoal: "Tighter bracing and better movement support",
            warmup: ["Plank 20 sec", "Toe reach x 15", "Dead bug x 10 each"],
            finisher: "Push-Up x AMRAP",
            exercises: [
              {
                name: "Push-Up",
                sets: "3",
                reps: "12",
                rest: "45 sec",
                cue: "Stay rigid through the trunk.",
                mistakes: "Letting the hips drop.",
                substitute: "Cable Crunch",
                target: "Core / Chest",
              },
            ],
          },
        ],
      },
      {
        name: "Premium Core Density",
        tier: "Premium",
        weeklySplit: "3 days / week",
        trainingDays: 3,
        style: "athletic",
        goalType: "shape",
        level: "intermediate",
        intensity: "High",
        notes:
          "A stronger premium core block with better weekly structure and more midsection work.",
        days: [
          {
            day: "Day 1 — Core Density",
            sessionGoal: "More total core output",
            warmup: ["Plank 20 sec", "Dead bug x 10 each", "Toe reach x 15"],
            finisher: "Mountain climbers 30 sec x 4",
            exercises: [
              {
                name: "Cable Crunch",
                sets: "5",
                reps: "12–15",
                rest: "45 sec",
                cue: "Brace and curl with control.",
                mistakes: "Pulling too much with the arms.",
                substitute: "Crunch",
                target: "Abs",
              },
              {
                name: "Push-Up",
                sets: "4",
                reps: "12–15",
                rest: "45 sec",
                cue: "Stay fully braced.",
                mistakes: "Loose hips.",
                substitute: "Plank",
                target: "Core / Chest",
              },
            ],
          },
        ],
      },
      {
        name: "Premium Athletic Midline",
        tier: "Premium",
        weeklySplit: "4 days / week",
        trainingDays: 4,
        style: "athletic",
        goalType: "athletic",
        level: "advanced",
        intensity: "High",
        notes:
          "For members who want a stronger, more athletic trunk with more training exposure each week.",
        days: [
          {
            day: "Day 1 — Midline Strength",
            sessionGoal: "Bracing under repeated effort",
            warmup: ["Plank 20 sec", "Toe reach x 15", "Dead bug x 10 each"],
            finisher: "Push-Up burnout",
            exercises: [
              {
                name: "Cable Crunch",
                sets: "4",
                reps: "15",
                rest: "45 sec",
                cue: "Move from the abs, not the arms.",
                mistakes: "Using body momentum.",
                substitute: "Crunch",
                target: "Abs",
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
    starterVisible: 4,
    variations: [
      {
        name: "Full Body Foundation",
        tier: "Starter",
        weeklySplit: "3 days / week",
        trainingDays: 3,
        style: "athletic",
        goalType: "fat-loss",
        level: "beginner",
        intensity: "Moderate",
        notes:
          "An efficient full-body base for people who want everything covered without overthinking the split.",
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
      {
        name: "Full Body Lean",
        tier: "Starter",
        weeklySplit: "3 days / week",
        trainingDays: 3,
        style: "shape",
        goalType: "fat-loss",
        level: "beginner",
        intensity: "Moderate",
        notes:
          "Built for a tighter, leaner look while still training the full body.",
        days: [
          {
            day: "Day 1 — Lean Session",
            sessionGoal: "Efficient full-body shape work",
            warmup: ["Bike 5 min", "Push-up x 10", "Bodyweight squat x 15"],
            finisher: "Plank x 30 sec x 3",
            exercises: [
              {
                name: "Goblet Squat",
                sets: "4",
                reps: "12",
                rest: "60 sec",
                cue: "Stay smooth and upright.",
                mistakes: "Rushing reps.",
                substitute: "Leg Press",
                target: "Legs / Core",
              },
              {
                name: "Push-Up",
                sets: "3",
                reps: "12–15",
                rest: "45 sec",
                cue: "Brace and stay long.",
                mistakes: "Hips sagging.",
                substitute: "Bench Press",
                target: "Chest / Core",
              },
            ],
          },
        ],
      },
      {
        name: "Full Body Strength",
        tier: "Starter",
        weeklySplit: "2 days / week",
        trainingDays: 2,
        style: "strength",
        goalType: "strength",
        level: "intermediate",
        intensity: "Moderate",
        notes:
          "A stronger full-body option for people who want simple but more serious loading.",
        days: [
          {
            day: "Day 1 — Strength A",
            sessionGoal: "Full-body strength basics",
            warmup: ["Bike 5 min", "Air squat x 15", "Push-up x 8"],
            finisher: "Plank 30 sec x 2",
            exercises: [
              {
                name: "Bench Press",
                sets: "4",
                reps: "8",
                rest: "90 sec",
                cue: "Stay tight and press evenly.",
                mistakes: "Loose setup.",
                substitute: "Push-Up",
                target: "Chest / Triceps",
              },
              {
                name: "Lat Pulldown",
                sets: "4",
                reps: "8–10",
                rest: "75 sec",
                cue: "Elbows down and chest proud.",
                mistakes: "Swinging through reps.",
                substitute: "Pull-Up",
                target: "Lats / Upper Back",
              },
            ],
          },
        ],
      },
      {
        name: "Full Body Reset Plus",
        tier: "Starter",
        weeklySplit: "4 days / week",
        trainingDays: 4,
        style: "athletic",
        goalType: "athletic",
        level: "intermediate",
        intensity: "Moderate",
        notes:
          "More weekly exposure without making the structure too hard to follow.",
        days: [
          {
            day: "Day 1 — Reset A",
            sessionGoal: "Build consistency and movement quality",
            warmup: ["Bike 5 min", "Squat x 15", "Push-up x 10"],
            finisher: "Plank x 30 sec x 3",
            exercises: [
              {
                name: "Goblet Squat",
                sets: "4",
                reps: "10",
                rest: "60 sec",
                cue: "Stay stacked and smooth.",
                mistakes: "Collapsing forward.",
                substitute: "Leg Press",
                target: "Legs / Core",
              },
              {
                name: "Lat Pulldown",
                sets: "3",
                reps: "10",
                rest: "75 sec",
                cue: "Elbows down first.",
                mistakes: "Pulling with the hands.",
                substitute: "Pull-Up",
                target: "Lats",
              },
            ],
          },
        ],
      },
      {
        name: "Premium Full Body Athletic",
        tier: "Premium",
        weeklySplit: "4 days / week",
        trainingDays: 4,
        style: "athletic",
        goalType: "athletic",
        level: "intermediate",
        intensity: "High",
        notes:
          "A premium full-body plan for members who want a stronger athletic overall look and feel.",
        days: [
          {
            day: "Day 1 — Athletic A",
            sessionGoal: "Better movement and stronger full-body output",
            warmup: ["Bike 5 min", "Push-up x 10", "Squat x 15"],
            finisher: "Push-Up burnout",
            exercises: [
              {
                name: "Goblet Squat",
                sets: "4",
                reps: "10",
                rest: "60 sec",
                cue: "Stay controlled and own the rep.",
                mistakes: "Dropping posture.",
                substitute: "Leg Press",
                target: "Legs / Core",
              },
              {
                name: "Bench Press",
                sets: "4",
                reps: "8–10",
                rest: "75 sec",
                cue: "Press with control.",
                mistakes: "Bouncing the bar.",
                substitute: "Push-Up",
                target: "Chest / Triceps",
              },
              {
                name: "Lat Pulldown",
                sets: "4",
                reps: "10",
                rest: "75 sec",
                cue: "Lead with elbows.",
                mistakes: "Swinging back.",
                substitute: "Pull-Up",
                target: "Lats / Upper Back",
              },
            ],
          },
        ],
      },
      {
        name: "Premium Full Body Muscle",
        tier: "Premium",
        weeklySplit: "3 days / week",
        trainingDays: 3,
        style: "shape",
        goalType: "muscle",
        level: "intermediate",
        intensity: "High",
        notes:
          "A stronger full-body split for visible muscle development without going to a pure body-part split.",
        days: [
          {
            day: "Day 1 — Muscle Base",
            sessionGoal: "Balanced hypertrophy work",
            warmup: ["Bike 5 min", "Squat x 15", "Push-up x 10"],
            finisher: "Plank x 30 sec x 3",
            exercises: [
              {
                name: "Goblet Squat",
                sets: "4",
                reps: "12",
                rest: "60 sec",
                cue: "Smooth and controlled tempo.",
                mistakes: "Rushing reps.",
                substitute: "Leg Press",
                target: "Legs / Core",
              },
              {
                name: "Bench Press",
                sets: "4",
                reps: "8–10",
                rest: "75 sec",
                cue: "Stay stable and press evenly.",
                mistakes: "Loose shoulders.",
                substitute: "Push-Up",
                target: "Chest / Triceps",
              },
            ],
          },
        ],
      },
      {
        name: "Premium Full Body Strength",
        tier: "Premium",
        weeklySplit: "3 days / week",
        trainingDays: 3,
        style: "strength",
        goalType: "strength",
        level: "advanced",
        intensity: "High",
        notes:
          "For members who want total-body strength progression without a classic bodybuilding split.",
        days: [
          {
            day: "Day 1 — Strength A",
            sessionGoal: "Heavier full-body loading",
            warmup: ["Bike 5 min", "Air squat x 15", "Push-up x 8"],
            finisher: "Push-Up AMRAP",
            exercises: [
              {
                name: "Bench Press",
                sets: "5",
                reps: "5–6",
                rest: "120 sec",
                cue: "Stay tight and drive cleanly.",
                mistakes: "Loose setup.",
                substitute: "Push-Up",
                target: "Chest / Triceps",
              },
              {
                name: "Lat Pulldown",
                sets: "4",
                reps: "8",
                rest: "75 sec",
                cue: "Lead with the elbows.",
                mistakes: "Pulling with wrists.",
                substitute: "Pull-Up",
                target: "Lats / Upper Back",
              },
            ],
          },
        ],
      },
      {
        name: "Premium Full Body Recomp",
        tier: "Premium",
        weeklySplit: "4 days / week",
        trainingDays: 4,
        style: "shape",
        goalType: "fat-loss",
        level: "intermediate",
        intensity: "High",
        notes:
          "Designed for members chasing body recomposition with a full-body training approach.",
        days: [
          {
            day: "Day 1 — Recomp A",
            sessionGoal: "High-value full-body training",
            warmup: ["Bike 5 min", "Push-up x 10", "Squat x 15"],
            finisher: "Plank x 30 sec x 4",
            exercises: [
              {
                name: "Goblet Squat",
                sets: "4",
                reps: "12",
                rest: "60 sec",
                cue: "Stay clean and stable.",
                mistakes: "Collapsing posture.",
                substitute: "Leg Press",
                target: "Legs / Core",
              },
              {
                name: "Push-Up",
                sets: "4",
                reps: "12–15",
                rest: "45 sec",
                cue: "Stay braced and long.",
                mistakes: "Loose hips.",
                substitute: "Bench Press",
                target: "Chest / Core",
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

  const goalOptions = [
    { value: "all", label: "All Goals" },
    { value: "shape", label: "Shape & Tone" },
    { value: "muscle", label: "Build Muscle" },
    { value: "strength", label: "Strength" },
    { value: "fat-loss", label: "Fat Loss" },
    { value: "athletic", label: "Athletic Performance" },
  ];

  const levelOptions = [
    { value: "all", label: "All Levels" },
    { value: "beginner", label: "Beginner" },
    { value: "intermediate", label: "Intermediate" },
    { value: "advanced", label: "Advanced" },
  ];

  const [selectedFilter, setSelectedFilter] = useState(
    bodyFocusOptions[0]?.slug || "glutes"
  );
  const [selectedStyle, setSelectedStyle] = useState("all");
  const [selectedFrequency, setSelectedFrequency] = useState("all");
  const [selectedGoal, setSelectedGoal] = useState("all");
  const [selectedLevel, setSelectedLevel] = useState("all");
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
      list = list.filter((variation) => variation.style === selectedStyle);
    }

    if (selectedFrequency !== "all") {
      list = list.filter(
        (variation) => String(variation.trainingDays) === selectedFrequency
      );
    }

    if (selectedGoal !== "all") {
      list = list.filter((variation) => variation.goalType === selectedGoal);
    }

    if (selectedLevel !== "all") {
      list = list.filter((variation) => variation.level === selectedLevel);
    }

    if (isStarter) {
      list = list.slice(0, selectedProgram.starterVisible);
    }

    return list;
  }, [
    selectedProgram,
    selectedStyle,
    selectedFrequency,
    selectedGoal,
    selectedLevel,
    isStarter,
  ]);

  return (
    <div style={{ display: "grid", gap: "26px" }}>
      <section style={heroCard}>
        <div style={eyebrow}>Exclusive Training Library</div>
        <h2 style={heroTitle}>Build your training around the result you want</h2>
        <p style={heroText}>
          This workout library is built like a private coaching system. Choose the
          body area you want to focus on, filter by training style, weekly
          frequency, goal, and level, then open the variation that fits your
          current target.
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
              <div style={selectShell}>
                <select
                  value={selectedStyle}
                  onChange={(e) => setSelectedStyle(e.target.value)}
                  style={selectInput}
                >
                  {styleOptions.map((option) => (
                    <option
                      key={option.value}
                      value={option.value}
                      style={selectOptionStyle}
                    >
                      {option.label}
                    </option>
                  ))}
                </select>
                <div style={selectArrow}>▼</div>
              </div>
            </div>

            <div style={selectWrap}>
              <div style={miniLabel}>Weekly Frequency</div>
              <div style={selectShell}>
                <select
                  value={selectedFrequency}
                  onChange={(e) => setSelectedFrequency(e.target.value)}
                  style={selectInput}
                >
                  {frequencyOptions.map((option) => (
                    <option
                      key={option.value}
                      value={option.value}
                      style={selectOptionStyle}
                    >
                      {option.label}
                    </option>
                  ))}
                </select>
                <div style={selectArrow}>▼</div>
              </div>
            </div>

            <div style={selectWrap}>
              <div style={miniLabel}>Goal</div>
              <div style={selectShell}>
                <select
                  value={selectedGoal}
                  onChange={(e) => setSelectedGoal(e.target.value)}
                  style={selectInput}
                >
                  {goalOptions.map((option) => (
                    <option
                      key={option.value}
                      value={option.value}
                      style={selectOptionStyle}
                    >
                      {option.label}
                    </option>
                  ))}
                </select>
                <div style={selectArrow}>▼</div>
              </div>
            </div>

            <div style={selectWrap}>
              <div style={miniLabel}>Experience Level</div>
              <div style={selectShell}>
                <select
                  value={selectedLevel}
                  onChange={(e) => setSelectedLevel(e.target.value)}
                  style={selectInput}
                >
                  {levelOptions.map((option) => (
                    <option
                      key={option.value}
                      value={option.value}
                      style={selectOptionStyle}
                    >
                      {option.label}
                    </option>
                  ))}
                </select>
                <div style={selectArrow}>▼</div>
              </div>
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
                    <div style={summaryMeta}>{capitalize(variation.level)}</div>
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
                        <div style={miniLabel}>Best For</div>
                        <div style={overviewText}>
                          {goalLabel(variation.goalType)} · {capitalize(variation.level)}
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
            No workout variations match this filter combination yet. Try another style,
            frequency, goal, or level.
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

function capitalize(value) {
  return String(value || "").charAt(0).toUpperCase() + String(value || "").slice(1);
}

function goalLabel(value) {
  const labels = {
    shape: "Shape & Tone",
    muscle: "Build Muscle",
    strength: "Strength",
    "fat-loss": "Fat Loss",
    athletic: "Athletic Performance",
  };
  return labels[value] || value;
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

const selectShell = {
  position: "relative",
};

const selectInput = {
  width: "100%",
  background: "#111111",
  color: "white",
  border: "1px solid rgba(255,255,255,0.12)",
  borderRadius: "12px",
  padding: "12px 40px 12px 14px",
  fontWeight: "700",
  outline: "none",
  appearance: "none",
  WebkitAppearance: "none",
  MozAppearance: "none",
};

const selectOptionStyle = {
  backgroundColor: "#111111",
  color: "white",
};

const selectArrow = {
  position: "absolute",
  right: "14px",
  top: "50%",
  transform: "translateY(-50%)",
  pointerEvents: "none",
  color: "rgba(255,255,255,0.65)",
  fontSize: "12px",
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
