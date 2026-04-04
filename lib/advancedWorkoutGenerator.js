import { exercisePool } from "./exercisePool";

function shuffle(arr) {
  return [...arr].sort(() => Math.random() - 0.5);
}

function pick(arr, n) {
  return shuffle(arr).slice(0, n);
}

export function generateAdvancedWorkout(profile) {
  const { focus, level, goal } = profile;

  let base = [];

  if (focus === "glutes") {
    base = [
      ...pick(exercisePool.glutes, 3),
      ...pick(exercisePool.hamstrings, 1),
      ...pick(exercisePool.quads, 1),
    ];
  }

  if (focus === "upper") {
    base = [
      ...pick(exercisePool.chest, 1),
      ...pick(exercisePool.back, 1),
      ...pick(exercisePool.shoulders, 1),
      ...pick(exercisePool.arms, 1),
    ];
  }

  if (focus === "full") {
    base = [
      ...pick(exercisePool.quads, 1),
      ...pick(exercisePool.glutes, 1),
      ...pick(exercisePool.chest, 1),
      ...pick(exercisePool.back, 1),
      ...pick(exercisePool.core, 1),
    ];
  }

  return base.map((exercise) => ({
    name: exercise,
    sets: level === "advanced" ? "4–5" : "3–4",
    reps:
      goal === "strength"
        ? "4–6"
        : goal === "fat-loss"
        ? "12–15"
        : "8–12",
    rest: level === "advanced" ? "90–120 sec" : "60–90 sec",
  }));
}
