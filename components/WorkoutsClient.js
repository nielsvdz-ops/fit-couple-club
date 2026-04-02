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
    starterVisible: 2,
    variations: [
      {
        name: "Variation 1 — Glute Foundation",
        tier: "Starter",
        weeklySplit: "3 days / week",
        goal: "Build shape, strength, and glute connection.",
        days: [
          {
            day: "Day 1 — Heavy Glutes",
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
              },
              {
                name: "Romanian Deadlift",
                sets: "4",
                reps: "8–10",
                rest: "90 sec",
                cue: "Push hips back and keep weight close.",
                mistakes: "Turning it into a squat.",
                substitute: "Dumbbell Row",
              },
              {
                name: "Bulgarian Split Squat",
                sets: "3",
                reps: "10 each leg",
                rest: "75 sec",
                cue: "Lean slightly forward to hit glutes.",
                mistakes: "Staying too upright.",
                substitute: "Lunges",
              },
            ],
          },
          {
            day: "Day 2 — Glute Volume",
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
              },
              {
                name: "Step-Up",
                sets: "3",
                reps: "12 each leg",
                rest: "60 sec",
                cue: "Drive from the lead leg only.",
                mistakes: "Pushing from the back foot.",
                substitute: "Bulgarian Split Squat",
              },
              {
                name: "Leg Press",
                sets: "3",
                reps: "12–15",
                rest: "75 sec",
                cue: "Control the lowering phase and use full range.",
                mistakes: "Locking the knees hard.",
                substitute: "Hack Squat",
              },
            ],
          },
        ],
      },
      {
        name: "Variation 2 — Curves & Control",
        tier: "Starter",
        weeklySplit: "3 days / week",
        goal: "Improve shape and isolation with moderate volume.",
        days: [
          {
            day: "Day 1 — Glute Strength",
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
              },
              {
                name: "Romanian Deadlift",
                sets: "4",
                reps: "6–8",
                rest: "120 sec",
                cue: "Push knees out and keep chest proud.",
                mistakes: "Starting with hips too high.",
                substitute: "Squat",
              },
              {
                name: "Hack Squat",
                sets: "3",
                reps: "10–12",
                rest: "90 sec",
                cue: "Keep tension constant and hit depth.",
                mistakes: "Rushing the eccentric.",
                substitute: "Leg Press",
              },
            ],
          },
        ],
      },
      {
        name: "Variation 3 — Elite Glute Density",
        tier: "Premium",
        weeklySplit: "4 days / week",
        goal: "Premium glute growth phase with deeper progression.",
        days: [
          {
            day: "Day 1 — Lower Strength",
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
              },
              {
                name: "Bulgarian Split Squat",
                sets: "4",
                reps: "8–10 each leg",
                rest: "75 sec",
                cue: "Load the front glute.",
                mistakes: "Too much push from the back leg.",
                substitute: "Lunges",
              },
              {
                name: "Romanian Deadlift",
                sets: "4",
                reps: "8",
                rest: "120 sec",
                cue: "Stretch the hamstrings and keep the spine neutral.",
                mistakes: "Letting the weight drift away.",
                substitute: "Leg Press",
              },
            ],
          },
          {
            day: "Day 2 — Shape + Isolation",
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
              },
              {
                name: "Seated Leg Curl",
                sets: "4",
                reps: "12–15",
                rest: "60 sec",
                cue: "Control the full return.",
                mistakes: "Letting the stack slam down.",
                substitute: "Romanian Deadlift",
              },
              {
                name: "Leg Press",
                sets: "3",
                reps: "15",
                rest: "75 sec",
                cue: "Use a full range and steady tempo.",
                mistakes: "Short reps.",
                substitute: "Hack Squat",
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
    starterVisible: 2,
    variations: [
      {
        name: "Variation 1 — Push & Pull Foundation",
        tier: "Starter",
        weeklySplit: "2 days / week",
        goal: "Build posture and shoulder shape.",
        days: [
          {
            day: "Day 1 — Push",
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
              },
              {
                name: "Dumbbell Shoulder Press",
                sets: "3",
                reps: "10",
                rest: "60 sec",
                cue: "Brace your core before pressing.",
                mistakes: "Arching the lower back.",
                substitute: "Incline Dumbbell Press",
              },
            ],
          },
          {
            day: "Day 2 — Pull",
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
              },
              {
                name: "Seated Row",
                sets: "3",
                reps: "10–12",
                rest: "75 sec",
                cue: "Pull to your lower ribs and squeeze the back.",
                mistakes: "Using momentum.",
                substitute: "Barbell Row",
              },
            ],
          },
        ],
      },
      {
        name: "Variation 2 — Sculpt & Tighten",
        tier: "Starter",
        weeklySplit: "2 days / week",
        goal: "Refine shape with balanced push and pull.",
        days: [
          {
            day: "Day 1 — Upper Push",
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
              },
              {
                name: "Chest Fly",
                sets: "3",
                reps: "12–15",
                rest: "45 sec",
                cue: "Open under control and squeeze through the chest.",
                mistakes: "Bending too much at the elbow.",
                substitute: "Cable Fly",
              },
            ],
          },
          {
            day: "Day 2 — Upper Pull",
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
              },
              {
                name: "Rear Delt Fly",
                sets: "3",
                reps: "15",
                rest: "45 sec",
                cue: "Move from the shoulders, not the traps.",
                mistakes: "Shrugging through the rep.",
                substitute: "Lat Pulldown",
              },
            ],
          },
        ],
      },
      {
        name: "Variation 3 — Premium Upper Definition",
        tier: "Premium",
        weeklySplit: "3 days / week",
        goal: "Premium upper-body development with more density.",
        days: [
          {
            day: "Day 1 — Chest + Shoulders",
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
              },
              {
                name: "Dumbbell Shoulder Press",
                sets: "4",
                reps: "8–10",
                rest: "75 sec",
                cue: "Keep ribs down and press vertically.",
                mistakes: "Leaning back too hard.",
                substitute: "Incline Dumbbell Press",
              },
              {
                name: "Cable Fly",
                sets: "3",
                reps: "12–15",
                rest: "45 sec",
                cue: "Keep tension through the full range.",
                mistakes: "Using body momentum.",
                substitute: "Chest Fly",
              },
            ],
          },
          {
            day: "Day 2 — Back Density",
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
              },
              {
                name: "Lat Pulldown",
                sets: "4",
                reps: "10",
                rest: "75 sec",
                cue: "Lead with the elbows and keep chest proud.",
                mistakes: "Pulling with the wrists.",
                substitute: "Pull-Up",
              },
              {
                name: "Straight Arm Pulldown",
                sets: "3",
                reps: "15",
                rest: "45 sec",
                cue: "Keep arms long and drive from the lats.",
                mistakes: "Turning it into a press.",
                substitute: "Rear Delt Fly",
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
    starterVisible: 2,
    variations: [
      {
        name: "Variation 1 — Leg Base",
        tier: "Starter",
        weeklySplit: "2 days / week",
        goal: "Build a strong lower-body foundation.",
        days: [
          {
            day: "Day 1 — Quads + Glutes",
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
              },
              {
                name: "Leg Press",
                sets: "4",
                reps: "10–12",
                rest: "75 sec",
                cue: "Stay smooth and use a full range.",
                mistakes: "Cutting depth short.",
                substitute: "Goblet Squat",
              },
            ],
          },
        ],
      },
      {
        name: "Variation 2 — Leg Volume",
        tier: "Starter",
        weeklySplit: "2 days / week",
        goal: "More shape and balanced lower volume.",
        days: [
          {
            day: "Day 1 — Posterior Chain",
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
              },
              {
                name: "Lunges",
                sets: "3",
                reps: "12 each leg",
                rest: "60 sec",
                cue: "Stay tall and step with control.",
                mistakes: "Rushing the stride.",
                substitute: "Bulgarian Split Squat",
              },
            ],
          },
        ],
      },
      {
        name: "Variation 3 — Premium Leg Density",
        tier: "Premium",
        weeklySplit: "3 days / week",
        goal: "Increase size, shape, and lower-body detail.",
        days: [
          {
            day: "Day 1 — Strength Base",
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
              },
              {
                name: "Leg Press",
                sets: "4",
                reps: "10",
                rest: "90 sec",
                cue: "Keep constant tension and do not lock out hard.",
                mistakes: "Short reps.",
                substitute: "Squat",
              },
              {
                name: "Leg Extension",
                sets: "3",
                reps: "15",
                rest: "45 sec",
                cue: "Squeeze the quads at the top.",
                mistakes: "Swinging the weight.",
                substitute: "Goblet Squat",
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
    starterVisible: 2,
    variations: [
      {
        name: "Variation 1 — Core Foundation",
        tier: "Starter",
        weeklySplit: "2 days / week",
        goal: "Improve bracing and visible ab development.",
        days: [
          {
            day: "Day 1 — Core Control",
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
              },
              {
                name: "Push-Up",
                sets: "3",
                reps: "10–15",
                rest: "45 sec",
                cue: "Brace the core and keep the body in one straight line.",
                mistakes: "Hips sagging.",
                substitute: "Plank",
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
    starterVisible: 2,
    variations: [
      {
        name: "Variation 1 — Full Body Foundation",
        tier: "Starter",
        weeklySplit: "3 days / week",
        goal: "Simple and effective whole-body progress.",
        days: [
          {
            day: "Day 1 — Full Body A",
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
              },
              {
                name: "Bench Press",
                sets: "3",
                reps: "10",
                rest: "75 sec",
                cue: "Press with control and keep your shoulders stable.",
                mistakes: "Bouncing the bar.",
                substitute: "Push-Up",
              },
              {
                name: "Lat Pulldown",
                sets: "3",
                reps: "10",
                rest: "75 sec",
                cue: "Pull elbows down and keep chest lifted.",
                mistakes: "Swinging back too much.",
                substitute: "Pull-Up",
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

  const filterOptions = workoutPrograms.map((program) => ({
    slug: program.slug,
    label: program.filterLabel,
  }));

  const [selectedFilter, setSelectedFilter] = useState(
    filterOptions[0]?.slug || "glutes"
  );

  const selectedProgram = useMemo(() => {
    return (
      workoutPrograms.find((program) => program.slug === selectedFilter) ||
      workoutPrograms[0]
    );
  }, [selectedFilter]);

  const visibleVariations = isStarter
    ? selectedProgram.variations.slice(0, selectedProgram.starterVisible)
    : selectedProgram.variations;

  return (
    <div style={{ display: "grid", gap: "24px" }}>
      <section style={heroCard}>
        <div style={eyebrow}>Exclusive Training Library</div>
        <h2 style={heroTitle}>Choose your body focus</h2>
        <p style={heroText}>
          Select the exact body area you want to train. Each section gives you
          a premium training system with warm-ups, programmed sets, coaching
          cues, common mistakes, substitutions, and visual exercise demos.
        </p>

        <div style={filterTabs}>
          {filterOptions.map((item) => (
            <button
              key={item.slug}
              onClick={() => setSelectedFilter(item.slug)}
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
      </section>

      <section style={programWrap}>
        <div style={programHead}>
          <div>
            <div style={eyebrow}>{selectedProgram.title}</div>
            <h2 style={programTitle}>{selectedProgram.subtitle}</h2>
          </div>

          <div style={programCount}>
            {visibleVariations.length}/{selectedProgram.variations.length}{" "}
            variations visible
          </div>
        </div>

        <div style={{ display: "grid", gap: "18px" }}>
          {visibleVariations.map((variation) => (
            <div key={variation.name} style={variationCard}>
              <div style={variationTop}>
                <div>
                  <div style={tierBadge}>{variation.tier}</div>
                  <h3 style={variationTitle}>{variation.name}</h3>
                  <p style={variationGoal}>{variation.goal}</p>
                </div>
                <div style={splitBadge}>{variation.weeklySplit}</div>
              </div>

              <div style={{ display: "grid", gap: "18px" }}>
                {variation.days.map((day) => (
                  <div key={day.day} style={dayCard}>
                    <div style={dayHeader}>
                      <h4 style={dayTitle}>{day.day}</h4>
                    </div>

                    <div style={blockCard}>
                      <div style={miniLabel}>Warm-up</div>
                      <ul style={bulletList}>
                        {day.warmup.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>

                    <div
                      style={{
                        display: "grid",
                        gap: "12px",
                        marginTop: "14px",
                      }}
                    >
                      {day.exercises.map((exercise) => (
                        <div key={exercise.name} style={exerciseCard}>
                          <div style={exerciseTop}>
                            <div style={{ flex: 1 }}>
                              <div style={exerciseName}>{exercise.name}</div>
                              <div style={exerciseMeta}>
                                {exercise.sets} sets · {exercise.reps} · Rest{" "}
                                {exercise.rest}
                              </div>
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
                                <div style={missingMediaBox}>
                                  Demo coming soon
                                </div>
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

                            {!isStarter && (
                              <div style={detailItem}>
                                <div style={detailLabel}>Progression</div>
                                <div style={detailText}>
                                  Add 1 rep or a small weight increase once top
                                  reps are achieved with clean form.
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
          ))}
        </div>

        {isStarter &&
          selectedProgram.variations.length > selectedProgram.starterVisible && (
            <div style={lockedBox}>
              <div style={lockedTitle}>Premium library locked</div>
              <p style={lockedText}>
                Unlock the full advanced exercise library, deeper progression
                guidance, and premium variation structure.
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
  fontSize: "34px",
  fontWeight: "900",
};

const heroText = {
  marginTop: "12px",
  color: "rgba(255,255,255,0.72)",
  lineHeight: 1.8,
  maxWidth: "900px",
};

const filterTabs = {
  display: "flex",
  gap: "10px",
  flexWrap: "wrap",
  marginTop: "20px",
};

const filterButton = {
  padding: "12px 16px",
  borderRadius: "12px",
  border: "1px solid rgba(255,255,255,0.14)",
  fontWeight: "800",
  cursor: "pointer",
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

const programCount = {
  padding: "10px 14px",
  borderRadius: "999px",
  background: "rgba(255,255,255,0.06)",
  border: "1px solid rgba(255,255,255,0.1)",
  fontWeight: "700",
  color: "rgba(255,255,255,0.78)",
};

const variationCard = {
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: "22px",
  padding: "22px",
};

const variationTop = {
  display: "flex",
  justifyContent: "space-between",
  gap: "18px",
  alignItems: "start",
  flexWrap: "wrap",
  marginBottom: "18px",
};

const tierBadge = {
  display: "inline-block",
  padding: "6px 10px",
  borderRadius: "10px",
  background: "white",
  color: "black",
  fontWeight: "800",
  marginBottom: "10px",
};

const variationTitle = {
  margin: 0,
  fontSize: "26px",
  fontWeight: "800",
};

const variationGoal = {
  color: "rgba(255,255,255,0.7)",
  lineHeight: 1.7,
  marginTop: "8px",
  marginBottom: 0,
  maxWidth: "760px",
};

const splitBadge = {
  padding: "10px 14px",
  borderRadius: "999px",
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.08)",
  fontWeight: "700",
};

const dayCard = {
  background: "rgba(255,255,255,0.03)",
  border: "1px solid rgba(255,255,255,0.06)",
  borderRadius: "18px",
  padding: "18px",
};

const dayHeader = {
  marginBottom: "12px",
};

const dayTitle = {
  margin: 0,
  fontSize: "22px",
  fontWeight: "800",
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
