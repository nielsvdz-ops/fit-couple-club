"use client";

import { useMemo, useState } from "react";
import DashboardLayout from "./DashboardLayout";
import { createClient } from "../lib/supabase/client";

const GOALS = [
  "Build Muscle",
  "Lose Fat",
  "Tone & Shape Body",
  "Maintain Athletic Lifestyle",
  "Beginner Body Reset",
];

const FOCUS_BY_GOAL = {
  "Build Muscle": ["Booty", "Upper Body", "Legs", "Full Body"],
  "Lose Fat": ["Full Body", "Abs", "Legs"],
  "Tone & Shape Body": ["Booty", "Abs", "Full Body", "Upper Body"],
  "Maintain Athletic Lifestyle": ["Full Body", "Upper Body", "Legs", "Abs"],
  "Beginner Body Reset": ["Full Body"],
};

const DAY_OPTIONS = [2, 3, 4, 5, 6, 7];

const PLANS = {
  Booty: [
    {
      name: "Booty Builder Alpha",
      note: "Heavy glute compounds with shape-focused accessories.",
      days: [
        {
          title: "Glutes Heavy",
          focus: "Glutes + Hamstrings",
          exercises: [
            ["Barbell Hip Thrust", "4 sets", "8-10 reps", "90 sec"],
            ["Romanian Deadlift", "4 sets", "8-10 reps", "90 sec"],
            ["Bulgarian Split Squat", "3 sets", "10 reps / leg", "75 sec"],
            ["Cable Kickback", "3 sets", "15 reps / leg", "45 sec"],
            ["Abduction Burnout", "2 sets", "25 reps", "30 sec"],
          ],
        },
        {
          title: "Upper Balance",
          focus: "Back + Shoulders + Arms",
          exercises: [
            ["Lat Pulldown", "4 sets", "10-12 reps", "75 sec"],
            ["Seated Cable Row", "3 sets", "10-12 reps", "75 sec"],
            ["Dumbbell Shoulder Press", "3 sets", "10 reps", "60 sec"],
            ["Lateral Raise", "3 sets", "15 reps", "45 sec"],
            ["Hammer Curl", "3 sets", "12 reps", "45 sec"],
          ],
        },
        {
          title: "Glute Volume",
          focus: "Glutes + Quads",
          exercises: [
            ["Smith Squat", "4 sets", "10-12 reps", "90 sec"],
            ["Walking Lunge", "3 sets", "20 steps", "60 sec"],
            ["Step-Up", "3 sets", "12 reps / leg", "60 sec"],
            ["Glute Bridge", "3 sets", "15 reps", "45 sec"],
            ["Abductor Machine", "3 sets", "20 reps", "30 sec"],
          ],
        },
      ],
    },
    {
      name: "Booty Builder Beta",
      note: "Strength first, then deep glute pump work.",
      days: [
        {
          title: "Glute Strength",
          focus: "Glutes + Hamstrings",
          exercises: [
            ["Hip Thrust", "5 sets", "6-8 reps", "90 sec"],
            ["Sumo Deadlift", "4 sets", "6-8 reps", "120 sec"],
            ["Reverse Lunge", "3 sets", "10 reps / leg", "60 sec"],
            ["Cable Pull Through", "3 sets", "15 reps", "45 sec"],
            ["Frog Pumps", "2 sets", "30 reps", "30 sec"],
          ],
        },
        {
          title: "Leg Shape",
          focus: "Quads + Glutes",
          exercises: [
            ["Leg Press", "4 sets", "10-12 reps", "75 sec"],
            ["Dumbbell RDL", "4 sets", "10 reps", "75 sec"],
            ["Curtsy Lunge", "3 sets", "12 reps / leg", "60 sec"],
            ["Kickback", "3 sets", "15 reps / leg", "45 sec"],
            ["Band Burnout", "2 sets", "25 reps", "30 sec"],
          ],
        },
        {
          title: "Upper + Core",
          focus: "Upper Body + Core",
          exercises: [
            ["Incline Press", "3 sets", "10 reps", "60 sec"],
            ["Assisted Pull-Up", "3 sets", "8-10 reps", "75 sec"],
            ["Rear Delt Fly", "3 sets", "15 reps", "45 sec"],
            ["Cable Crunch", "3 sets", "15 reps", "45 sec"],
            ["Plank", "3 sets", "45 sec", "30 sec"],
          ],
        },
      ],
    },
    {
      name: "Booty Builder Gamma",
      note: "Two quality lower sessions plus upper support.",
      days: [
        {
          title: "Glute Bias A",
          focus: "Glutes",
          exercises: [
            ["Barbell Hip Thrust", "4 sets", "10 reps", "90 sec"],
            ["45° Hyperextension", "3 sets", "12 reps", "60 sec"],
            ["Deficit Reverse Lunge", "3 sets", "10 reps / leg", "60 sec"],
            ["Cable Kickback", "3 sets", "15 reps / leg", "45 sec"],
            ["Standing Abduction", "2 sets", "20 reps", "30 sec"],
          ],
        },
        {
          title: "Upper Pull & Push",
          focus: "Upper Body",
          exercises: [
            ["Single-Arm Row", "4 sets", "10 reps", "75 sec"],
            ["Incline Dumbbell Press", "3 sets", "10 reps", "60 sec"],
            ["Shoulder Press", "3 sets", "10 reps", "60 sec"],
            ["Face Pull", "3 sets", "15 reps", "45 sec"],
            ["Cable Curl", "3 sets", "12 reps", "45 sec"],
          ],
        },
        {
          title: "Glute Bias B",
          focus: "Glutes + Quads",
          exercises: [
            ["Smith Split Squat", "4 sets", "10 reps / leg", "75 sec"],
            ["RDL", "4 sets", "8-10 reps", "90 sec"],
            ["Glute Bridge March", "3 sets", "16 reps", "45 sec"],
            ["Seated Abduction", "3 sets", "20 reps", "30 sec"],
            ["Frog Pump Finisher", "2 sets", "30 reps", "30 sec"],
          ],
        },
      ],
    },
  ],
  "Upper Body": [
    {
      name: "Upper Dominance",
      note: "Balanced push and pull split with shoulder detail work.",
      days: [
        {
          title: "Push Strength",
          focus: "Chest + Shoulders + Triceps",
          exercises: [
            ["Incline Dumbbell Press", "4 sets", "8-10 reps", "75 sec"],
            ["Shoulder Press", "4 sets", "8-10 reps", "75 sec"],
            ["Chest Fly", "3 sets", "12 reps", "45 sec"],
            ["Lateral Raise", "3 sets", "15 reps", "45 sec"],
            ["Tricep Pushdown", "3 sets", "12 reps", "45 sec"],
          ],
        },
        {
          title: "Pull Strength",
          focus: "Back + Biceps",
          exercises: [
            ["Lat Pulldown", "4 sets", "10 reps", "75 sec"],
            ["Seated Row", "4 sets", "10 reps", "75 sec"],
            ["Rear Delt Fly", "3 sets", "15 reps", "45 sec"],
            ["Hammer Curl", "3 sets", "12 reps", "45 sec"],
            ["Face Pull", "3 sets", "15 reps", "45 sec"],
          ],
        },
      ],
    },
    {
      name: "Upper Athletic",
      note: "Push, pull, and arm detail with moderate volume.",
      days: [
        {
          title: "Chest + Shoulders",
          focus: "Upper Push",
          exercises: [
            ["Chest Press", "4 sets", "8 reps", "75 sec"],
            ["Incline Press", "3 sets", "10 reps", "60 sec"],
            ["Shoulder Press", "3 sets", "10 reps", "60 sec"],
            ["Lateral Raise", "3 sets", "15 reps", "45 sec"],
            ["Overhead Tricep Extension", "3 sets", "12 reps", "45 sec"],
          ],
        },
        {
          title: "Back + Arms",
          focus: "Upper Pull",
          exercises: [
            ["Pull-Up Assist", "4 sets", "8 reps", "75 sec"],
            ["Cable Row", "4 sets", "10 reps", "75 sec"],
            ["Straight-Arm Pulldown", "3 sets", "12 reps", "45 sec"],
            ["Cable Curl", "3 sets", "12 reps", "45 sec"],
            ["Rope Pushdown", "3 sets", "12 reps", "45 sec"],
          ],
        },
      ],
    },
  ],
  Legs: [
    {
      name: "Leg Strength",
      note: "Strong quad/hamstring split with calf detail.",
      days: [
        {
          title: "Quad Focus",
          focus: "Quads + Calves",
          exercises: [
            ["Hack Squat", "4 sets", "8-10 reps", "90 sec"],
            ["Leg Press", "4 sets", "10 reps", "75 sec"],
            ["Leg Extension", "3 sets", "15 reps", "45 sec"],
            ["Walking Lunges", "3 sets", "20 steps", "60 sec"],
            ["Standing Calf Raise", "4 sets", "15 reps", "30 sec"],
          ],
        },
        {
          title: "Hamstrings + Glutes",
          focus: "Posterior Chain",
          exercises: [
            ["Romanian Deadlift", "4 sets", "8 reps", "90 sec"],
            ["Seated Leg Curl", "4 sets", "10 reps", "60 sec"],
            ["Hip Thrust", "4 sets", "10 reps", "75 sec"],
            ["Reverse Lunge", "3 sets", "12 reps / leg", "60 sec"],
            ["Seated Calf Raise", "4 sets", "15 reps", "30 sec"],
          ],
        },
      ],
    },
  ],
  Abs: [
    {
      name: "Core Sculpt",
      note: "Core-focused plan blended with conditioning support.",
      days: [
        {
          title: "Upper + Core",
          focus: "Upper Body + Abs",
          exercises: [
            ["Lat Pulldown", "4 sets", "10 reps", "75 sec"],
            ["Cable Crunch", "4 sets", "15 reps", "45 sec"],
            ["Hanging Knee Raise", "3 sets", "12 reps", "45 sec"],
            ["Toe Reach", "3 sets", "20 reps", "30 sec"],
            ["Plank", "3 sets", "45 sec", "30 sec"],
          ],
        },
        {
          title: "Lower + Core",
          focus: "Lower Body + Abs",
          exercises: [
            ["Goblet Squat", "4 sets", "10 reps", "60 sec"],
            ["Romanian Deadlift", "4 sets", "10 reps", "75 sec"],
            ["Dead Bug", "3 sets", "12 / side", "30 sec"],
            ["Reverse Crunch", "3 sets", "15 reps", "30 sec"],
            ["Mountain Climbers", "3 rounds", "30 sec", "30 sec"],
          ],
        },
      ],
    },
  ],
  "Full Body": [
    {
      name: "Full Body Reset",
      note: "Strong all-round training split for general progress.",
      days: [
        {
          title: "Full Body A",
          focus: "Strength + Core",
          exercises: [
            ["Goblet Squat", "4 sets", "10 reps", "60 sec"],
            ["Chest Press", "4 sets", "10 reps", "60 sec"],
            ["Lat Pulldown", "4 sets", "10 reps", "75 sec"],
            ["RDL", "3 sets", "10 reps", "75 sec"],
            ["Plank", "3 sets", "45 sec", "30 sec"],
          ],
        },
        {
          title: "Full Body B",
          focus: "Athletic Base",
          exercises: [
            ["Leg Press", "4 sets", "10 reps", "75 sec"],
            ["Shoulder Press", "3 sets", "10 reps", "60 sec"],
            ["Seated Row", "4 sets", "10 reps", "75 sec"],
            ["Walking Lunges", "3 sets", "20 steps", "60 sec"],
            ["Cable Crunch", "3 sets", "15 reps", "30 sec"],
          ],
        },
      ],
    },
    {
      name: "Full Body Performance",
      note: "Simple but effective full body rotation.",
      days: [
        {
          title: "Strength Day",
          focus: "Compound Lifts",
          exercises: [
            ["Squat", "4 sets", "6-8 reps", "90 sec"],
            ["Bench Press", "4 sets", "6-8 reps", "90 sec"],
            ["Row", "4 sets", "8 reps", "75 sec"],
            ["RDL", "3 sets", "8 reps", "75 sec"],
            ["Plank", "3 sets", "45 sec", "30 sec"],
          ],
        },
        {
          title: "Hypertrophy Day",
          focus: "Shape + Volume",
          exercises: [
            ["Leg Press", "4 sets", "12 reps", "75 sec"],
            ["Incline Press", "3 sets", "10 reps", "60 sec"],
            ["Pulldown", "3 sets", "10 reps", "60 sec"],
            ["Lunge", "3 sets", "12 reps / leg", "60 sec"],
            ["Toe Reach", "3 sets", "20 reps", "30 sec"],
          ],
        },
      ],
    },
  ],
};

function getFocusOptions(goal) {
  return FOCUS_BY_GOAL[goal] || ["Full Body"];
}

function buildWeeklyPlan(baseDays, trainingDays) {
  const output = [];

  for (let i = 0; i < trainingDays; i++) {
    const source = baseDays[i % baseDays.length];
    output.push({
      ...source,
      dayLabel: `Day ${i + 1}`,
    });
  }

  return output;
}

function getGoalNote(goal) {
  switch (goal) {
    case "Lose Fat":
      return "Keep rest times tighter, focus on consistency, and pair training with a calorie deficit.";
    case "Build Muscle":
      return "Push progressive overload, recover well, and eat enough protein to grow.";
    case "Tone & Shape Body":
      return "Use controlled reps, stay consistent, and keep nutrition structured.";
    case "Maintain Athletic Lifestyle":
      return "Train hard, recover well, and keep your routine sustainable.";
    case "Beginner Body Reset":
      return "Master form, repeat simple habits, and focus on consistency over intensity.";
    default:
      return "";
  }
}

export default function PlanBuilderClient({ isPaid }) {

  const supabase = createClient();

  const [saveMessage, setSaveMessage] = useState("");
  const [isSaving, setIsSaving] = useState(false);

  // your existing states below
  const [goal, setGoal] = useState("Build Muscle");
  const [focus, setFocus] = useState("Booty");
  const [days, setDays] = useState(4);
  const [variation, setVariation] = useState(0);
  const [generated, setGenerated] = useState(false);

  const focusOptions = getFocusOptions(goal);

  const currentPlan = useMemo(() => {
    const planPool = PLANS[focus] || PLANS["Full Body"];
    const selected = planPool[variation % planPool.length];
    return {
      ...selected,
      weekly: buildWeeklyPlan(selected.days, Number(days)),
      goalNote: getGoalNote(goal),
    };
  }, [goal, focus, days, variation]);

  async function handleSavePlan() {
  if (!generated) {
    setSaveMessage("Generate a plan first.");
    return;
  }

  if (!isPaid) {
    setSaveMessage("Upgrade to save your plan.");
    return;
  }

  setIsSaving(true);
  setSaveMessage("Saving plan...");

  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();

  if (userError || !user) {
    setSaveMessage("You need to be logged in.");
    setIsSaving(false);
    return;
  }

  const payload = {
    user_id: user.id,
    goal,
    focus_area: focus,
    training_days: Number(days),
    variation,
    plan_name: currentPlan.name,
    is_active: true,
    plan_json: {
      goal,
      focus,
      days: Number(days),
      variation,
      planName: currentPlan.name,
      note: currentPlan.note,
      goalNote: currentPlan.goalNote,
      weekly: currentPlan.weekly,
    },
  };

  const { error } = await supabase
    .from("saved_plans")
    .upsert(payload, { onConflict: "user_id" });

  if (error) {
    setSaveMessage(error.message);
  } else {
    setSaveMessage("Plan saved.");
  }

  setIsSaving(false);
}
  function handleGoalChange(newGoal) {
    setGoal(newGoal);
    const nextFocusOptions = getFocusOptions(newGoal);
    if (!nextFocusOptions.includes(focus)) {
      setFocus(nextFocusOptions[0]);
      setVariation(0);
    }
    setGenerated(false);
  }

  function handleFocusChange(newFocus) {
    setFocus(newFocus);
    setVariation(0);
    setGenerated(false);
  }

  function handleGenerate() {
    setGenerated(true);
  }

  const shownDays = isPaid
    ? currentPlan.weekly
    : generated
    ? currentPlan.weekly.slice(0, 1)
    : [];

  return (
    <DashboardLayout
      title="Plan Builder"
      subtitle="Preview your personalized training structure for free. Unlock Premium to get your full weekly plan, rotations, and progression."
    >
      <div style={layout}>
        <section style={sidebarCard}>
          <div style={eyebrow}>Build Your Plan</div>

          <label style={label}>Goal</label>
          <select
            value={goal}
            onChange={(e) => handleGoalChange(e.target.value)}
            style={input}
          >
            {GOALS.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>

          <label style={label}>Focus Area</label>
          <select
            value={focus}
            onChange={(e) => handleFocusChange(e.target.value)}
            style={input}
          >
            {focusOptions.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>

          <label style={label}>Training Days</label>
          <select
            value={days}
            onChange={(e) => {
              setDays(Number(e.target.value));
              setGenerated(false);
            }}
            style={input}
          >
            {DAY_OPTIONS.map((d) => (
              <option key={d} value={d}>
                {d} days / week
              </option>
            ))}
          </select>

          <label style={label}>Workout Variation</label>
          <div style={variationWrap}>
            {[0, 1, 2].map((i) => (
              <button
                key={i}
                onClick={() => {
                  setVariation(i);
                  setGenerated(false);
                }}
                style={{
                  ...variationButton,
                  background:
                    variation === i ? "white" : "rgba(255,255,255,0.04)",
                  color: variation === i ? "black" : "white",
                }}
              >
                {i + 1}
              </button>
            ))}
          </div>

          <button onClick={handleGenerate} style={generateButton}>
            Generate Plan
          </button>

            {isPaid && generated && (
  <div style={{ marginTop: "16px" }}>
    <button
      onClick={handleSavePlan}
      disabled={isSaving}
      style={generateButton}
    >
      {isSaving ? "Saving..." : "Save Plan"}
    </button>

    {saveMessage && (
      <div style={{ marginTop: "10px", color: "rgba(255,255,255,0.7)" }}>
        {saveMessage}
      </div>
    )}
  </div>
)}
          <div style={smallNote}>
            {isPaid
              ? "Premium unlocked: full weekly plan visible."
              : "Free users can preview the first training day only."}
          </div>
        </section>

        <section style={contentCard}>
          {!generated ? (
            <div style={emptyState}>
              <div style={emptyTitle}>Ready to build</div>
              <div style={emptyText}>
                Choose your goal, focus area, training days, and variation. Then
                click Generate Plan.
              </div>
            </div>
          ) : (
            <>
              <div style={planHeader}>
                <div>
                  <div style={eyebrow}>Generated Plan</div>
                  <h2 style={planTitle}>{currentPlan.name}</h2>
                  <p style={planText}>{currentPlan.note}</p>
                  <p style={goalNote}>{currentPlan.goalNote}</p>
                </div>
                <div style={badge}>{focus}</div>
              </div>

              <div style={dayGrid}>
                {shownDays.map((day, index) => (
                  <div key={`${day.dayLabel}-${index}`} style={dayCard}>
                    <div style={dayTop}>
                      <div>
                        <div style={dayLabel}>{day.dayLabel}</div>
                        <h3 style={dayTitle}>{day.title}</h3>
                        <div style={dayFocus}>{day.focus}</div>
                      </div>
                    </div>

                    <div style={exerciseList}>
                      {day.exercises.map(([name, sets, reps, rest]) => (
                        <div key={name} style={exerciseRow}>
                          <div style={exerciseName}>{name}</div>
                          <div style={exerciseMeta}>
                            <span>{sets}</span>
                            <span>{reps}</span>
                            <span>{rest} rest</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {!isPaid && (
                <div style={lockedBox}>
                  <div style={lockedTitle}>Unlock your full plan</div>
                  <p style={lockedText}>
                    Get the complete weekly structure, more plan rotations,
                    deeper workout variety, and premium member access.
                  </p>

                  <ul style={lockedList}>
                    <li>Full {days}-day weekly plan</li>
                    <li>Workout rotations and more variety</li>
                    <li>Nutrition + recipes integration</li>
                    <li>Programs, couple zone, and progress tools</li>
                  </ul>

                  <a href="/pricing" style={unlockButton}>
                    Unlock Full Plan
                  </a>
                </div>
              )}
            </>
          )}
        </section>
      </div>
    </DashboardLayout>
  );
}

const layout = {
  display: "grid",
  gridTemplateColumns: "320px 1fr",
  gap: "22px",
};

const sidebarCard = {
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: "22px",
  padding: "22px",
  alignSelf: "start",
};

const contentCard = {
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: "22px",
  padding: "22px",
  minHeight: "500px",
};

const eyebrow = {
  fontSize: "12px",
  textTransform: "uppercase",
  letterSpacing: "0.16em",
  color: "rgba(255,255,255,0.45)",
  marginBottom: "10px",
};

const label = {
  display: "block",
  marginTop: "14px",
  marginBottom: "8px",
  fontWeight: "700",
};

const input = {
  width: "100%",
  padding: "12px 14px",
  borderRadius: "12px",
  border: "1px solid rgba(255,255,255,0.14)",
  background: "#111",
  color: "white",
};

const variationWrap = {
  display: "flex",
  gap: "10px",
  marginTop: "8px",
  flexWrap: "wrap",
};

const variationButton = {
  padding: "10px 14px",
  borderRadius: "10px",
  border: "1px solid rgba(255,255,255,0.14)",
  fontWeight: "700",
  cursor: "pointer",
};

const generateButton = {
  marginTop: "18px",
  width: "100%",
  padding: "14px 16px",
  borderRadius: "12px",
  border: "none",
  background: "white",
  color: "black",
  fontWeight: "800",
  cursor: "pointer",
};

const smallNote = {
  marginTop: "14px",
  color: "rgba(255,255,255,0.62)",
  lineHeight: 1.7,
  fontSize: "14px",
};

const emptyState = {
  minHeight: "420px",
  display: "grid",
  placeItems: "center",
  textAlign: "center",
};

const emptyTitle = {
  fontSize: "28px",
  fontWeight: "800",
  marginBottom: "10px",
};

const emptyText = {
  color: "rgba(255,255,255,0.68)",
  maxWidth: "500px",
  lineHeight: 1.8,
};

const planHeader = {
  display: "flex",
  justifyContent: "space-between",
  gap: "14px",
  alignItems: "start",
  flexWrap: "wrap",
  marginBottom: "20px",
};

const planTitle = {
  fontSize: "30px",
  fontWeight: "800",
  margin: "0 0 8px 0",
};

const planText = {
  color: "rgba(255,255,255,0.72)",
  margin: 0,
  lineHeight: 1.7,
};

const goalNote = {
  color: "rgba(255,255,255,0.6)",
  marginTop: "10px",
  lineHeight: 1.7,
};

const badge = {
  padding: "10px 14px",
  borderRadius: "999px",
  background: "rgba(255,255,255,0.08)",
  border: "1px solid rgba(255,255,255,0.12)",
  fontWeight: "700",
};

const dayGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(270px,1fr))",
  gap: "16px",
};

const dayCard = {
  background: "rgba(255,255,255,0.03)",
  border: "1px solid rgba(255,255,255,0.06)",
  borderRadius: "18px",
  padding: "18px",
};

const dayTop = {
  marginBottom: "14px",
};

const dayLabel = {
  color: "rgba(255,255,255,0.5)",
  fontSize: "12px",
  textTransform: "uppercase",
  letterSpacing: "0.12em",
  marginBottom: "8px",
};

const dayTitle = {
  fontSize: "22px",
  fontWeight: "800",
  margin: "0 0 6px 0",
};

const dayFocus = {
  color: "rgba(255,255,255,0.68)",
};

const exerciseList = {
  display: "grid",
  gap: "12px",
};

const exerciseRow = {
  background: "rgba(255,255,255,0.03)",
  border: "1px solid rgba(255,255,255,0.05)",
  borderRadius: "12px",
  padding: "12px",
};

const exerciseName = {
  fontWeight: "700",
  marginBottom: "6px",
};

const exerciseMeta = {
  display: "flex",
  gap: "12px",
  flexWrap: "wrap",
  color: "rgba(255,255,255,0.68)",
  fontSize: "14px",
};

const lockedBox = {
  marginTop: "22px",
  background: "rgba(255,255,255,0.03)",
  border: "1px dashed rgba(255,255,255,0.2)",
  borderRadius: "18px",
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
  maxWidth: "620px",
  margin: "0 auto 12px auto",
};

const lockedList = {
  textAlign: "left",
  maxWidth: "420px",
  margin: "0 auto 18px auto",
  lineHeight: 1.9,
  color: "rgba(255,255,255,0.74)",
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
