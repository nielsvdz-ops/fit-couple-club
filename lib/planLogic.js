export const GOALS = [
    default:
      return {
        title: "Beginner Reset Nutrition",
        description: "Simple, repeatable meals with a strong protein base and easy food choices.",
        example: [
          "Breakfast: Yogurt + fruit",
          "Lunch: Chicken + rice",
          "Snack: Protein shake",
          "Dinner: Salmon + potatoes",
        ],
      };
  }
}

function getTrainingSplit(focus, days) {
  const plans = {
    Booty: {
      2: ["Day 1 — Glutes + Legs", "Day 2 — Upper Body + Glute Finisher"],
      3: ["Day 1 — Glutes Heavy", "Day 2 — Upper Body", "Day 3 — Glutes Volume"],
      4: ["Day 1 — Glutes Heavy", "Day 2 — Upper Body", "Day 3 — Glutes Volume", "Day 4 — Lower Body Shape"],
      5: ["Day 1 — Glutes Heavy", "Day 2 — Upper Push", "Day 3 — Glutes Volume", "Day 4 — Upper Pull", "Day 5 — Lower Body + Booty Burn"],
      6: ["Day 1 — Glutes Heavy", "Day 2 — Upper Push", "Day 3 — Glutes Volume", "Day 4 — Upper Pull", "Day 5 — Lower Body", "Day 6 — Booty Finisher + Core"],
    },
    Abs: {
      2: ["Day 1 — Full Body + Core", "Day 2 — Lower Body + Abs"],
      3: ["Day 1 — Upper Body + Core", "Day 2 — Lower Body + Abs", "Day 3 — Full Body + Core"],
      4: ["Day 1 — Upper Push + Abs", "Day 2 — Lower Body", "Day 3 — Upper Pull + Core", "Day 4 — Full Body + Abs"],
      5: ["Day 1 — Push + Abs", "Day 2 — Lower Body", "Day 3 — Pull + Core", "Day 4 — Legs + Abs", "Day 5 — Full Body + Core"],
      6: ["Day 1 — Push + Abs", "Day 2 — Pull + Core", "Day 3 — Legs", "Day 4 — Shoulders + Abs", "Day 5 — Full Body + Core", "Day 6 — Conditioning + Abs"],
    },
    Legs: {
      2: ["Day 1 — Lower Body", "Day 2 — Full Body"],
      3: ["Day 1 — Legs Heavy", "Day 2 — Upper Body", "Day 3 — Legs Volume"],
      4: ["Day 1 — Legs Heavy", "Day 2 — Upper Push", "Day 3 — Legs Volume", "Day 4 — Upper Pull"],
      5: ["Day 1 — Legs Heavy", "Day 2 — Push", "Day 3 — Pull", "Day 4 — Legs Volume", "Day 5 — Full Body"],
      6: ["Day 1 — Legs Heavy", "Day 2 — Push", "Day 3 — Pull", "Day 4 — Legs Volume", "Day 5 — Upper Body", "Day 6 — Conditioning"],
    },
    "Upper Body": {
      2: ["Day 1 — Upper Push", "Day 2 — Upper Pull + Lower"],
      3: ["Day 1 — Push", "Day 2 — Pull", "Day 3 — Legs + Upper Finisher"],
      4: ["Day 1 — Push", "Day 2 — Pull", "Day 3 — Legs", "Day 4 — Shoulders + Arms"],
      5: ["Day 1 — Push", "Day 2 — Pull", "Day 3 — Legs", "Day 4 — Shoulders", "Day 5 — Arms + Upper Pump"],
      6: ["Day 1 — Push", "Day 2 — Pull", "Day 3 — Legs", "Day 4 — Shoulders", "Day 5 — Arms", "Day 6 — Upper Body Pump"],
    },
    "Full Body": {
      2: ["Day 1 — Full Body A", "Day 2 — Full Body B"],
      3: ["Day 1 — Full Body A", "Day 2 — Full Body B", "Day 3 — Full Body C"],
      4: ["Day 1 — Upper", "Day 2 — Lower", "Day 3 — Upper", "Day 4 — Lower"],
      5: ["Day 1 — Push", "Day 2 — Pull", "Day 3 — Legs", "Day 4 — Full Body", "Day 5 — Conditioning"],
      6: ["Day 1 — Push", "Day 2 — Pull", "Day 3 — Legs", "Day 4 — Upper", "Day 5 — Lower", "Day 6 — Full Body"],
    },
    "Couple Workouts": {
      2: ["Day 1 — Couple Full Body", "Day 2 — Couple Conditioning"],
      3: ["Day 1 — Couple Strength", "Day 2 — Couple Cardio", "Day 3 — Couple Lower Body"],
      4: ["Day 1 — Couple Upper Body", "Day 2 — Couple Lower Body", "Day 3 — Couple Conditioning", "Day 4 — Couple Full Body"],
      5: ["Day 1 — Couple Push", "Day 2 — Couple Pull", "Day 3 — Couple Legs", "Day 4 — Couple Conditioning", "Day 5 — Couple Full Body"],
      6: ["Day 1 — Couple Push", "Day 2 — Couple Pull", "Day 3 — Couple Legs", "Day 4 — Couple Cardio", "Day 5 — Couple Glutes/Core", "Day 6 — Couple Full Body"],
    },
  };

  return plans[focus]?.[days] || plans["Full Body"][3];
}
