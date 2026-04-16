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
  // CURRENT VIDEOS YOU ALREADY HAVE
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
  "squat": "/exercise-demos/squat.mp4",
  "straight-arm-pulldown": "/exercise-demos/straight-arm-pulldown.mp4",

  // ADD THESE NEXT / TARGET NAMES
  "dumbbell-press": "/exercise-demos/dumbbell-press.mp4",
  "barbell-shoulder-press": "/exercise-demos/barbell-shoulder-press.mp4",
  "lateral-raise": "/exercise-demos/lateral-raise.mp4",
  "front-raise": "/exercise-demos/front-raise.mp4",
  "face-pull": "/exercise-demos/face-pull.mp4",
  "bicep-curl": "/exercise-demos/bicep-curl.mp4",
  "hammer-curl": "/exercise-demos/hammer-curl.mp4",
  "cable-curl": "/exercise-demos/cable-curl.mp4",
  "tricep-pushdown": "/exercise-demos/tricep-pushdown.mp4",
  "overhead-tricep-extension": "/exercise-demos/overhead-tricep-extension.mp4",
  "crunch": "/exercise-demos/crunch.mp4",
  "leg-raise": "/exercise-demos/leg-raise.mp4",
  "plank": "/exercise-demos/plank.mp4",
  "russian-twist": "/exercise-demos/russian-twist.mp4",
  "sumo-deadlift": "/exercise-demos/sumo-deadlift.mp4",
  "walking-lunges": "/exercise-demos/walking-lunges.mp4",
  "glute-bridge": "/exercise-demos/glute-bridge.mp4",
  "step-up": "/exercise-demos/step-up-(bench).mp4",
  "machine-chest-press": "/exercise-demos/machine-chest-press.mp4",
  "machine-row": "/exercise-demos/machine-row.mp4",
  "assisted-pull-up": "/exercise-demos/assisted-pull-up.mp4",
  "machine-shoulder-press": "/exercise-demos/machine-shoulder-press.mp4",
  "cable-lateral-raise": "/exercise-demos/cable-lateral-raise.mp4",
  "machine-crunch": "/exercise-demos/machine-crunch.mp4",
  "reverse-crunch": "/exercise-demos/reverse-crunch.mp4",
  "mountain-climbers": "/exercise-demos/mountain-climbers.mp4",
  "kettlebell-swing": "/exercise-demos/kettlebell-swing.mp4",
  "box-jump": "/exercise-demos/box-jump-(box).mp4",
  "burpees": "/exercise-demos/burpees.mp4",
};

const exerciseAliasMap = {
  // pressing
  "dumbbell-bench-press": "bench-press",
  "bench-press-dumbbell": "bench-press",
  "dumbbell-chest-press": "dumbbell-press",
  "chest-press": "machine-chest-press",
  "machine-press": "machine-chest-press",
  "incline-press": "incline-bench-press",

  // shoulders
  "shoulder-press": "dumbbell-shoulder-press",
  "overhead-press": "barbell-shoulder-press",
  "db-shoulder-press": "dumbbell-shoulder-press",

  // pulling
  "cable-row": "seated-row",
  "row": "seated-row",
  "chest-supported-row": "machine-row",
  "machine-row-supported": "machine-row",
  "dumbbell-rows": "dumbbell-row",
  "assisted-pullup": "assisted-pull-up",
  "pullup": "pull-up",
  "straight-arm-pull-down": "straight-arm-pulldown",

  // legs / glutes
  "rdl": "romanian-deadlift",
  "deadlift-romanian": "romanian-deadlift",
  "reverse-lunge": "lunges",
  "walking-lunge": "walking-lunges",
  "split-squat": "bulgarian-split-squat",
  "bulgarian-squat": "bulgarian-split-squat",
  "glute-bridges": "glute-bridge",
  "hip-thrusts": "hip-thrust",
  "calf-raise": "step-up",

  // arms
  "biceps-curl": "bicep-curl",
  "biceps-curls": "bicep-curl",
  "curl": "bicep-curl",
  "triceps-pushdown": "tricep-pushdown",
  "rope-pushdown": "tricep-pushdown",
  "skull-crusher": "skullcrusher",

  // core / conditioning
  "leg-raises": "leg-raise",
  "knee-raise": "leg-raise",
  "knee-raises": "leg-raise",
  "side-plank": "plank",
  "dead-bug": "crunch",
  "core-crunch": "crunch",
  "mountain-climber": "mountain-climbers",
  "box-jumps": "box-jump",
  "kettlebell-swings": "kettlebell-swing",
  "push-ups": "push-up",
  "pushup": "push-up",
};

function expandExerciseCandidates(exerciseName) {
  const raw = String(exerciseName || "").trim();
  if (!raw) return [];

  const splitParts = raw
    .split(/\s+or\s+|\s*\/\s*|\s+\+\s+|,/i)
    .map((part) => part.trim())
    .filter(Boolean);

  const normalized = [raw, ...splitParts].map(slugify);

  const candidates = new Set();

  normalized.forEach((key) => {
    if (!key) return;
    candidates.add(key);

    if (exerciseAliasMap[key]) {
      candidates.add(exerciseAliasMap[key]);
    }

    const simplified = key
      .replace(/^(dumbbell|barbell|machine|cable|assisted)-/, "")
      .replace(/-(machine|bench)$/, "");

    if (simplified && simplified !== key) {
      candidates.add(simplified);
      if (exerciseAliasMap[simplified]) {
        candidates.add(exerciseAliasMap[simplified]);
      }
    }
  });

  return Array.from(candidates);
}

export function getExerciseMedia(exerciseName) {
  const candidates = expandExerciseCandidates(exerciseName);

  for (const candidate of candidates) {
    if (exerciseMediaMap[candidate]) {
      return exerciseMediaMap[candidate];
    }
  }

  for (const candidate of candidates) {
    const partialMatch = Object.keys(exerciseMediaMap).find(
      (key) =>
        candidate.includes(key) ||
        key.includes(candidate)
    );

    if (partialMatch) {
      return exerciseMediaMap[partialMatch];
    }
  }

  return null;
}

export function hasExerciseMedia(exerciseName) {
  return Boolean(getExerciseMedia(exerciseName));
}

export function getMissingExerciseMedia(exerciseNames = []) {
  return exerciseNames.filter((name) => !hasExerciseMedia(name));
}

export function getExerciseMediaMap() {
  return exerciseMediaMap;
}
