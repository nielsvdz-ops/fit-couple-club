"use client";

import { useEffect, useMemo, useState } from "react";
import { createClient } from "../lib/supabase/client";
import {
  GOALS,
  FOCUS_AREAS,
  TRAINING_DAYS,
  BODY_TYPES,
  EXPERIENCE_LEVELS,
  LIFESTYLES,
  generateWorkoutSystem,
  getRecommendedDefaults,
} from "../lib/workoutplan";

export default function PlanBuilderClient({ membershipType }) {
  const membership = String(membershipType || "").toLowerCase();
  const canSave = membership === "premium" || membership === "vip";
  const canUseAdvanced = membership === "premium" || membership === "vip";
  const maxVariation = canUseAdvanced ? 3 : 1;
  const supabase = createClient();

  const [goal, setGoal] = useState("Build Muscle");
  const [focus, setFocus] = useState("Booty");
  const [bodyType, setBodyType] = useState("Average");
  const [level, setLevel] = useState("Beginner");
  const [lifestyle, setLifestyle] = useState("Balanced Lifestyle");
  const [days, setDays] = useState(4);
  const [variation, setVariation] = useState(0);

  const [generated, setGenerated] = useState(false);
  const [saveMessage, setSaveMessage] = useState("");
  const [isSaving, setIsSaving] = useState(false);

  const focusOptions = FOCUS_AREAS;

  const recommendedDefaults = useMemo(() => {
    return getRecommendedDefaults({
      goal,
      focus,
      bodyType,
      level,
    });
  }, [goal, focus, bodyType, level]);

  const currentPlan = useMemo(() => {
    return generateWorkoutSystem({
      goal,
      focus,
      days,
      templateIndex: variation,
      bodyType,
      level,
      lifestyle,
    });
  }, [goal, focus, days, variation, bodyType, level, lifestyle]);

  function handleGoalChange(newGoal) {
    setGoal(newGoal);
    if (!FOCUS_AREAS.includes(focus)) {
      setFocus("Full Body");
    }
    setVariation(0);
    setGenerated(false);
  }

  function handleFocusChange(newFocus) {
    setFocus(newFocus);
    setVariation(0);
    setGenerated(false);
  }

  function handleUseRecommendedDays() {
    setDays(recommendedDefaults.recommendedDays);
    setGenerated(false);
  }

  async function handleSavePlan() {
    if (!generated) {
      setSaveMessage("Generate a plan first.");
      return;
    }

    if (!canSave) {
      setSaveMessage("Upgrade to Premium or VIP to save plans.");
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
      plan_name: currentPlan.title,
      is_active: true,
      plan_json: {
        goal,
        focus,
        days: Number(days),
        variation,
        bodyType,
        level,
        lifestyle,
        title: currentPlan.title,
        category: currentPlan.category,
        note: currentPlan.note,
        recoveryNote: currentPlan.recoveryNote,
        nutritionHint: currentPlan.nutritionHint,
        cardioHint: currentPlan.cardioHint,
        profile: currentPlan.profile,
        split: currentPlan.split,
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

  useEffect(() => {
    async function loadSavedPlan() {
      if (!canSave) return;

      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) return;

      const { data, error } = await supabase
        .from("saved_plans")
        .select("*")
        .eq("user_id", user.id)
        .single();

      if (error || !data) return;

      const savedJson = data.plan_json || {};

      setGoal(data.goal || "Build Muscle");
      setFocus(data.focus_area || "Booty");
      setDays(data.training_days || 4);
      setVariation(data.variation || 0);
      setBodyType(savedJson.bodyType || "Average");
      setLevel(savedJson.level || "Beginner");
      setLifestyle(savedJson.lifestyle || "Balanced Lifestyle");
      setGenerated(true);
      setSaveMessage("Loaded your saved plan.");
    }

    loadSavedPlan();
  }, [canSave, supabase]);

  return (
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

        <label style={label}>Body Type</label>
        <select
          value={bodyType}
          onChange={(e) => {
            setBodyType(e.target.value);
            setGenerated(false);
          }}
          style={input}
        >
          {BODY_TYPES.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>

        <label style={label}>Experience Level</label>
        <select
          value={level}
          onChange={(e) => {
            setLevel(e.target.value);
            setGenerated(false);
          }}
          style={input}
        >
          {EXPERIENCE_LEVELS.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>

        <label style={label}>Lifestyle</label>
        <select
          value={lifestyle}
          onChange={(e) => {
            setLifestyle(e.target.value);
            setGenerated(false);
          }}
          style={input}
        >
          {LIFESTYLES.map((item) => (
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
          {TRAINING_DAYS.map((d) => (
            <option key={d} value={d}>
              {d} days / week
            </option>
          ))}
        </select>

        <label style={label}>Workout Variation</label>
        <div style={variationWrap}>
          {[0, 1, 2].map((i) => {
            const locked = i >= maxVariation;

            return (
              <button
                key={i}
                onClick={() => {
                  if (locked) return;
                  setVariation(i);
                  setGenerated(false);
                }}
                style={{
                  ...variationButton,
                  opacity: locked ? 0.45 : 1,
                  background:
                    variation === i ? "white" : "rgba(255,255,255,0.04)",
                  color: variation === i ? "black" : "white",
                  cursor: locked ? "not-allowed" : "pointer",
                }}
              >
                {i + 1}
                {locked ? " 🔒" : ""}
              </button>
            );
          })}
        </div>

        <div style={recommendedBox}>
          <div style={smallLabel}>Recommended for your profile</div>
          <div style={recommendedText}>
            {recommendedDefaults.recommendedDays} training days per week
          </div>
          <button onClick={handleUseRecommendedDays} style={secondarySmallButton}>
            Use Recommended Days
          </button>
        </div>

        <button onClick={() => setGenerated(true)} style={generateButton}>
          Generate Plan
        </button>

        {generated && (
          <div style={{ marginTop: "16px" }}>
            <button
              onClick={handleSavePlan}
              disabled={isSaving}
              style={{ ...generateButton, marginTop: 0 }}
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
          {canSave
            ? "Premium/VIP unlocked: save plans and use advanced rotations."
            : "Starter includes full plan output but saving and advanced rotations are locked."}
        </div>
      </section>

      <section style={contentCard}>
        {!generated ? (
          <div style={emptyState}>
            <div style={emptyTitle}>Ready to build</div>
            <div style={emptyText}>
              Choose your goal, focus area, body type, level, lifestyle, training
              days, and variation. Then click Generate Plan.
            </div>
          </div>
        ) : (
          <>
            <div style={planHeader}>
              <div>
                <div style={eyebrow}>Generated Plan</div>
                <h2 style={planTitle}>{currentPlan.title}</h2>
                <p style={planText}>{currentPlan.note}</p>
              </div>
              <div style={badge}>{focus}</div>
            </div>

            <div style={summaryGrid}>
              <InfoCard label="Category" value={currentPlan.category} />
              <InfoCard label="Training Style" value={currentPlan.profile.trainingStyle} />
              <InfoCard label="Nutrition" value={currentPlan.nutritionHint} />
              <InfoCard label="Cardio" value={currentPlan.cardioHint} />
            </div>

            <div style={noteGrid}>
              <div style={noteCard}>
                <div style={smallLabel}>Body Type Logic</div>
                <div style={noteText}>{currentPlan.profile.bodyTypeNote}</div>
              </div>

              <div style={noteCard}>
                <div style={smallLabel}>Recovery Note</div>
                <div style={noteText}>{currentPlan.recoveryNote}</div>
              </div>

              <div style={noteCard}>
                <div style={smallLabel}>Rest Rule</div>
                <div style={noteText}>{currentPlan.profile.restRule}</div>
              </div>

              <div style={noteCard}>
                <div style={smallLabel}>Level Rule</div>
                <div style={noteText}>{currentPlan.profile.levelRule.note}</div>
              </div>
            </div>

            <div style={dayGrid}>
              {currentPlan.split.map((day, index) => (
                <div key={`${day.day}-${index}`} style={dayCard}>
                  <div style={dayTop}>
                    <div>
                      <div style={dayLabel}>{day.day}</div>
                      <h3 style={dayTitle}>{day.day.includes("—") ? day.day.split("—")[1]?.trim() : day.day}</h3>
                    </div>
                  </div>

                  <div style={exerciseList}>
                    {day.exercises.map(([name, sets, reps]) => (
                      <div key={name} style={exerciseRow}>
                        <div style={exerciseName}>{name}</div>
                        <div style={exerciseMeta}>
                          <span>{sets}</span>
                          <span>{reps}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {!canSave && (
              <div style={lockedBox}>
                <div style={lockedTitle}>Starter limitation</div>
                <p style={lockedText}>
                  You can generate and view your full plan on Starter, but saving
                  plans, advanced rotations, and deeper progression logic are unlocked
                  in Premium and VIP.
                </p>
                <ul style={lockedList}>
                  <li>Save plans to your account</li>
                  <li>Advanced workout rotations</li>
                  <li>Body type based deeper profile logic</li>
                  <li>More advanced progression and program depth</li>
                </ul>
                <a href="/pricing" style={unlockButton}>
                  Upgrade to Premium
                </a>
              </div>
            )}
          </>
        )}
      </section>
    </div>
  );
}

function InfoCard({ label, value }) {
  return (
    <div style={infoCard}>
      <div style={smallLabel}>{label}</div>
      <div style={infoValue}>{value}</div>
    </div>
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
};

const recommendedBox = {
  marginTop: "18px",
  background: "rgba(255,255,255,0.03)",
  border: "1px solid rgba(255,255,255,0.06)",
  borderRadius: "14px",
  padding: "14px",
};

const smallLabel = {
  fontSize: "12px",
  textTransform: "uppercase",
  letterSpacing: "0.12em",
  color: "rgba(255,255,255,0.5)",
  marginBottom: "8px",
};

const recommendedText = {
  color: "rgba(255,255,255,0.82)",
  lineHeight: 1.7,
  marginBottom: "10px",
};

const secondarySmallButton = {
  width: "100%",
  padding: "11px 14px",
  borderRadius: "10px",
  border: "1px solid rgba(255,255,255,0.14)",
  background: "rgba(255,255,255,0.05)",
  color: "white",
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
  maxWidth: "560px",
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

const badge = {
  padding: "10px 14px",
  borderRadius: "999px",
  background: "rgba(255,255,255,0.08)",
  border: "1px solid rgba(255,255,255,0.12)",
  fontWeight: "700",
};

const summaryGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
  gap: "12px",
  marginBottom: "18px",
};

const infoCard = {
  background: "rgba(255,255,255,0.03)",
  border: "1px solid rgba(255,255,255,0.05)",
  borderRadius: "14px",
  padding: "14px",
};

const infoValue = {
  color: "rgba(255,255,255,0.82)",
  lineHeight: 1.7,
};

const noteGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
  gap: "12px",
  marginBottom: "18px",
};

const noteCard = {
  background: "rgba(255,255,255,0.03)",
  border: "1px solid rgba(255,255,255,0.05)",
  borderRadius: "14px",
  padding: "14px",
};

const noteText = {
  color: "rgba(255,255,255,0.76)",
  lineHeight: 1.75,
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
  margin: "0",
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
