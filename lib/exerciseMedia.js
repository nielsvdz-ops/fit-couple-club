function slugify(value) {
  return String(value || "")
    .toLowerCase()
    .trim()
    .replace(/&/g, "and")
    .replace(/\(.*?\)/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

const exerciseMediaMap = {
  "barbell-row": "/exercise-demos/barbell-row.mp4",
  "bench-press": "/exercise-demos/bench-press-(bench).mp4",
  "bulgarian-split-squat": "/exercise-demos/bulgarian-split-squat.mp4",
  "cable-crunch": "/exercise-demos/cable-crunch.mp4",
  "cable-fly": "/exercise-demos/cable-fly.mp4",
  "chest-fly": "/exercise-demos/chest-fly-(bench).mp4",
  "dumbbell-row": "/exercise-demos/dumbbell-row.mp4",
  "dumbbell-shoulder-press": "/exercise-demos/dumbbell-shoulder-press-(bench).mp4",
  "goblet-squat": "/exercise-demos/goblet-squat.mp4",
  "hack-squat": "/exercise-demos/hack-squat.mp4",
  "hip-thrust": "/exercise-demos/hip-thrust.mp4",
  "incline-bench-press": "/exercise-demos/incline-bench-press.mp4",
  "incline-dumbbell-press": "/exercise-demos/incline-dumbbell-press-(bench).mp4",
  "lat-pulldown": "/exercise-demos/lat-pulldown.mp4",
  "leg-extension": "/exercise-demos/leg-extension.mp4",
  "leg-press": "/exercise-demos/leg-press.mp4",
  "lunges": "/exercise-demos/lunges.mp4",
  "push-up": "/exercise-demos/push-up.mp4",
  "pull-up": "/exercise-demos/pull-up.mp4",
  "rear-delt-fly": "/exercise-demos/rear-delt-fly-(bench).mp4",
  "romanian-deadlift": "/exercise-demos/romanian-deadlift.mp4",
  "seated-leg-curl": "/exercise-demos/seated-leg-curl.mp4",
  "seated-row": "/exercise-demos/seated-row.mp4",
  "skullcrusher": "/exercise-demos/skullcrusher-(bench).mp4",
  "straight-arm-pulldown": "/exercise-demos/straight-arm-pulldown.mp4",
  "squat": "/exercise-demos/squat.mp4",
};

export function getExerciseMedia(exerciseName) {
  const key = slugify(exerciseName);
  return exerciseMediaMap[key] || null;
}

export function getExerciseMediaMap() {
  return exerciseMediaMap;
}
