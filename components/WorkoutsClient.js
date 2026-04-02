"use client";
import { getExerciseMedia } from "../lib/exerciseMedia";
import { useMemo, useState } from "react";

const workoutPrograms = [
  {
    slug: "glutes",
    filterLabel: "Glutes",
    title: "Booty Builder",
    subtitle: "Shape, grow, and strengthen the glutes with a structured lower-body emphasis.",
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
            warmup: ["5 min incline walk", "Banded abductions x 20", "Bodyweight squats x 15"],
            finisher: "Banded frog pumps x 30 + abduction pulses x 20 for 2 rounds",
            exercises: [
              {
                name: "Barbell Hip Thrust",
                sets: "4",
                reps: "8–10",
                rest: "90 sec",
                cue: "Drive through heels and pause at the top.",
                mistakes: "Overextending the lower back.",
                substitute: "Smith Hip Thrust",
                media: "/exercise-demos/hip-thrust.mp4",
              },
              {
                name: "Romanian Deadlift",
                sets: "4",
                reps: "8–10",
                rest: "90 sec",
                cue: "Push hips back and keep weight close.",
                mistakes: "Turning it into a squat.",
                substitute: "Dumbbell RDL",
                media: "/exercise-demos/romanian-deadlift.mp4",
              },
              {
                name: "Bulgarian Split Squat",
                sets: "3",
                reps: "10 each leg",
                rest: "75 sec",
                cue: "Lean slightly forward to hit glutes.",
                mistakes: "Staying too upright.",
                substitute: "Walking Lunge",
                media: "/exercise-demos/bulgarian-split-squat.mp4",
              },
            ],
          },
          {
            day: "Day 2 — Glute Volume",
            warmup: ["Bike 5 min", "Glute bridge x 15", "Walking lunges x 10 each"],
            finisher: "Seated abduction x 25 + hold 20 sec x 2",
            exercises: [
              {
                name: "Smith Squat",
                sets: "4",
                reps: "10–12",
                rest: "90 sec",
                cue: "Deep, controlled reps.",
                mistakes: "Half reps.",
                substitute: "Goblet Squat",
                media: "/exercise-demos/smith-squat.mp4",
              },
              {
                name: "Step-Up",
                sets: "3",
                reps: "12 each leg",
                rest: "60 sec",
                cue: "Drive from the lead leg only.",
                mistakes: "Pushing from the back foot.",
                substitute: "Split Squat",
                media: "/exercise-demos/step-up.mp4",
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
            warmup: ["Stairmaster 5 min", "Banded side steps x 20", "Air squats x 15"],
            finisher: "Banded glute bridge pulses x 25 x 2",
            exercises: [
              {
                name: "Hip Thrust",
                sets: "5",
                reps: "6–8",
                rest: "120 sec",
                cue: "Explode up, control down.",
                mistakes: "Bouncing through reps.",
                substitute: "Machine Hip Press",
                media: "/exercise-demos/hip-thrust.mp4",
              },
              {
                name: "Sumo Deadlift",
                sets: "4",
                reps: "6–8",
                rest: "120 sec",
                cue: "Push knees out and keep chest proud.",
                mistakes: "Starting with hips too high.",
                substitute: "Kettlebell Sumo Deadlift",
                media: "/exercise-demos/sumo-deadlift.mp4",
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
            warmup: ["Incline walk 5 min", "Banded bridge x 20", "Single-leg hinge x 10 each"],
            finisher: "Frog pumps x 40",
            exercises: [
              {
                name: "Barbell Hip Thrust",
                sets: "5",
                reps: "5–8",
                rest: "120 sec",
                cue: "Build tension before every rep.",
                mistakes: "Relaxing at the bottom.",
                substitute: "Smith Hip Thrust",
                media: "/exercise-demos/hip-thrust.mp4",
              },
              {
                name: "Smith Split Squat",
                sets: "4",
                reps: "8–10 each leg",
                rest: "75 sec",
                cue: "Load the front glute.",
                mistakes: "Too much push from the back leg.",
                substitute: "Bulgarian Split Squat",
                media: "/exercise-demos/smith-split-squat.mp4",
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
    subtitle: "Build a lean, defined upper body with shape, posture, and strength.",
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
            warmup: ["Band pull-aparts x 20", "Wall slides x 15", "Push-up hold 20 sec"],
            finisher: "Lateral raise x 20",
            exercises: [
              {
                name: "Dumbbell Press",
                sets: "4",
                reps: "8–12",
                rest: "75 sec",
                cue: "Lower with control.",
                mistakes: "Dropping too fast.",
                substitute: "Machine Chest Press",
                media: "/exercise-demos/dumbbell-press.mp4",
              },
              {
                name: "Shoulder Press",
                sets: "3",
                reps: "10",
                rest: "60 sec",
                cue: "Brace your core before pressing.",
                mistakes: "Arching the lower back.",
                substitute: "Arnold Press",
                media: "/exercise-demos/shoulder-press.mp4",
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
            warmup: ["Bike 5 min", "Shoulder circles x 20", "Band press x 15"],
            finisher: "Push-up burnout",
            exercises: [
              {
                name: "Incline Dumbbell Press",
                sets: "4",
                reps: "10",
                rest: "60 sec",
                cue: "Drive evenly through both hands.",
                mistakes: "Losing tension at bottom.",
                substitute: "Machine Incline Press",
                media: "/exercise-demos/incline-dumbbell-press.mp4",
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
            warmup: ["Band external rotations x 15", "Push-up x 10", "Wall slides x 15"],
            finisher: "Lateral raise drop set",
            exercises: [
              {
                name: "Bench Press",
                sets: "5",
                reps: "5–8",
                rest: "120 sec",
                cue: "Strong base and controlled descent.",
                mistakes: "Bouncing bar and flaring elbows.",
                substitute: "Machine Chest Press",
                media: "/exercise-demos/bench-press.mp4",
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
    subtitle: "Quad, hamstring, glute, and calf development with balanced structure.",
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
            warmup: ["Bike 5 min", "Bodyweight squat x 15", "Walking lunge x 10 each"],
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
                media: "/exercise-demos/hack-squat.mp4",
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
                substitute: "Lying Leg Curl",
                media: "/exercise-demos/seated-leg-curl.mp4",
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
    subtitle: "Build stronger abs, better bracing, and cleaner lines through the waist.",
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
                substitute: "Machine Crunch",
                media: "/exercise-demos/cable-crunch.mp4",
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
    subtitle: "Athletic all-round training for people who want total-body progress.",
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
                mistakes: "Collapsing chest.",
                substitute: "Leg Press",
                media: "/exercise-demos/goblet-squat.mp4",
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

  const [selectedFilter, setSelectedFilter] = useState(filterOptions[0]?.slug || "glutes");

  const selectedProgram = useMemo(() => {
    return workoutPrograms.find((program) => program.slug === selectedFilter) || workoutPrograms[0];
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
          Select the exact body area you want to train. Each section gives you a premium training system
          with warm-ups, programmed sets, coaching cues, common mistakes, substitutions, and a visual demo area.
        </p>

        <div style={filterTabs}>
          {filterOptions.map((item) => (
            <button
              key={item.slug}
              onClick={() => setSelectedFilter(item.slug)}
              style={{
                ...filterButton,
                background: selectedFilter === item.slug ? "white" : "rgba(255,255,255,0.04)",
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
            {visibleVariations.length}/{selectedProgram.variations.length} variations visible
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

                    <div style={{ display: "grid", gap: "12px", marginTop: "14px" }}>
                      {day.exercises.map((exercise) => (
                        <div key={exercise.name} style={exerciseCard}>
                          <div style={exerciseTop}>
                            <div style={{ flex: 1 }}>
                              <div style={exerciseName}>{exercise.name}</div>
                              <div style={exerciseMeta}>
                                {exercise.sets} sets · {exercise.reps} · Rest {exercise.rest}
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
  <div style={missingMediaBox}>No demo yet</div>
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
                                  Add 1 rep or a small weight increase once top reps are achieved with clean form.
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

        {isStarter && selectedProgram.variations.length > selectedProgram.starterVisible && (
          <div style={lockedBox}>
            <div style={lockedTitle}>Premium library locked</div>
            <p style={lockedText}>
              Unlock the full advanced exercise library, deeper progression guidance, and premium variation structure.
            </p>
            <a href="/pricing" style={unlockButton}>Unlock Full Workout System</a>
          </div>
        )}
      </section>
    </div>
  );
}

const heroCard = {
  background: "linear-gradient(180deg, rgba(255,255,255,0.08), rgba(255,255,255,0.03))",
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
