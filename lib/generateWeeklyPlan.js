import { generateAdvancedWorkout } from "./advancedWorkoutGenerator";

export function generateWeeklyPlan(profile) {
  const days = [];

  for (let i = 0; i < profile.training_days; i++) {
    days.push({
      day: `Day ${i + 1}`,
      exercises: generateAdvancedWorkout(profile),
    });
  }

  return days;
}
