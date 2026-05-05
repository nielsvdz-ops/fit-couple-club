"use client";

import { useEffect, useMemo, useState } from "react";
import { createClient } from "../lib/supabase/client";
import { useLanguage } from "../lib/useLanguage";
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
  const { language } = useLanguage();
  const supabase = createClient();

  const t = {
    en: {
      build: "Build Your Plan",
      goal: "Goal",
      focus: "Focus Area",
      bodyType: "Body Type",
      level: "Experience Level",
      lifestyle: "Lifestyle",
      days: "Training Days",
      variation: "Workout Variation",
      daysWeek: "days / week",
      recommended: "Recommended for your profile",
      recommendedText: "training days per week",
      useRecommended: "Use Recommended Days",
      generate: "Generate Plan",
      save: "Save Plan",
      saving: "Saving...",
      generateFirst: "Generate a plan first.",
      upgradeSave: "Upgrade to Full Access, VIP, or Coaching to save plans.",
      loginRequired: "You need to be logged in.",
      saved: "Plan saved.",
      loaded: "Loaded your saved plan.",
      unlocked:
        "Full Access/VIP/Coaching unlocked: save plans and use advanced rotations.",
      locked:
        "Nutrition plan users can preview the builder, but saving and advanced rotations are unlocked in Full Access and above.",
      ready: "Ready to build",
      readyText:
        "Choose your goal, focus area, body type, level, lifestyle, training days, and variation. Then click Generate Plan.",
      generated: "Generated Plan",
      category: "Category",
      trainingStyle: "Training Style",
      nutrition: "Nutrition",
      cardio: "Cardio",
      bodyLogic: "Body Type Logic",
      recovery: "Recovery Note",
      restRule: "Rest Rule",
      levelRule: "Level Rule",
      limitation: "Upgrade limitation",
      limitationText:
        "You can generate and view your plan, but saving plans, advanced rotations, and deeper progression logic are unlocked in Full Access and above.",
      upgrade: "Upgrade to Full Access",
    },
    nl: {
      build: "Bouw Je Plan",
      goal: "Doel",
      focus: "Focusgebied",
      bodyType: "Lichaamstype",
      level: "Ervaringsniveau",
      lifestyle: "Levensstijl",
      days: "Trainingsdagen",
      variation: "Workout Variatie",
      daysWeek: "dagen / week",
      recommended: "Aanbevolen voor jouw profiel",
      recommendedText: "trainingsdagen per week",
      useRecommended: "Gebruik Aanbevolen Dagen",
      generate: "Plan Genereren",
      save: "Plan Opslaan",
      saving: "Opslaan...",
      generateFirst: "Genereer eerst een plan.",
      upgradeSave:
        "Upgrade naar Full Access, VIP of Coaching om plannen op te slaan.",
      loginRequired: "Je moet ingelogd zijn.",
      saved: "Plan opgeslagen.",
      loaded: "Je opgeslagen plan is geladen.",
      unlocked:
        "Full Access/VIP/Coaching ontgrendeld: plannen opslaan en geavanceerde rotaties gebruiken.",
      locked:
        "Nutrition leden kunnen de builder bekijken, maar opslaan en geavanceerde rotaties zijn beschikbaar vanaf Full Access.",
      ready: "Klaar om te bouwen",
      readyText:
        "Kies je doel, focusgebied, lichaamstype, niveau, levensstijl, trainingsdagen en variatie. Klik daarna op Plan Genereren.",
      generated: "Gegenereerd Plan",
      category: "Categorie",
      trainingStyle: "Trainingsstijl",
      nutrition: "Voeding",
      cardio: "Cardio",
      bodyLogic: "Lichaamstype Logica",
      recovery: "Herstel Notitie",
      restRule: "Rust Regel",
      levelRule: "Niveau Regel",
      limitation: "Upgrade beperking",
      limitationText:
        "Je kunt je plan genereren en bekijken, maar plannen opslaan, geavanceerde rotaties en diepere progressie zijn beschikbaar vanaf Full Access.",
      upgrade: "Upgrade naar Full Access",
    },
  }[language];

  const membership = String(membershipType || "").toLowerCase().trim();

  const canSave =
    membership === "full_access" ||
    membership === "vip" ||
    membership === "coaching";

  const canUseAdvanced =
    membership === "full_access" ||
    membership === "vip" ||
    membership === "coaching";

  const maxVariation = canUseAdvanced ? 3 : 1;

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
      setSaveMessage(t.generateFirst);
      return;
    }

    if (!canSave) {
      setSaveMessage(t.upgradeSave);
      return;
    }

    setIsSaving(true);
    setSaveMessage(t.saving);

    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser();

    if (userError || !user) {
      setSaveMessage(t.loginRequired);
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
      setSaveMessage(t.saved);
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
        .maybeSingle();

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
      setSaveMessage(t.loaded);
    }

    loadSavedPlan();
  }, [canSave, supabase, t.loaded]);

  return (
    <div style={layout}>
      <section style={sidebarCard}>
        <div style={eyebrow}>{t.build}</div>

        <Field label={t.goal}>
          <select
            value={goal}
            onChange={(e) => handleGoalChange(e.target.value)}
            style={input}
          >
            {GOALS.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </Field>

        <Field label={t.focus}>
          <select
            value={focus}
            onChange={(e) => handleFocusChange(e.target.value)}
            style={input}
          >
            {FOCUS_AREAS.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </Field>

        <Field label={t.bodyType}>
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
        </Field>

        <Field label={t.level}>
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
        </Field>

        <Field label={t.lifestyle}>
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
        </Field>

        <Field label={t.days}>
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
                {d} {t.daysWeek}
              </option>
            ))}
          </select>
        </Field>

        <label style={label}>{t.variation}</label>
        <div style={variationWrap}>
          {[0, 1, 2].map((i) => {
            const locked = i >= maxVariation;

            return (
              <button
                type="button"
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
          <div style={smallLabel}>{t.recommended}</div>
          <div style={recommendedText}>
            {recommendedDefaults.recommendedDays} {t.recommendedText}
          </div>
          <button
            type="button"
            onClick={handleUseRecommendedDays}
            style={secondarySmallButton}
          >
            {t.useRecommended}
          </button>
        </div>

        <button
          type="button"
          onClick={() => setGenerated(true)}
          style={generateButton}
        >
          {t.generate}
        </button>

        {generated && (
          <div style={{ marginTop: "16px" }}>
            <button
              type="button"
              onClick={handleSavePlan}
              disabled={isSaving}
              style={{ ...generateButton, marginTop: 0 }}
            >
              {isSaving ? t.saving : t.save}
            </button>

            {saveMessage && <div style={saveInfo}>{saveMessage}</div>}
          </div>
        )}

        <div style={smallNote}>{canSave ? t.unlocked : t.locked}</div>
      </section>

      <section style={contentCard}>
        {!generated ? (
          <div style={emptyState}>
            <div>
              <div style={emptyTitle}>{t.ready}</div>
              <div style={emptyText}>{t.readyText}</div>
            </div>
          </div>
        ) : (
          <>
            <div style={planHeader}>
              <div>
                <div style={eyebrow}>{t.generated}</div>
                <h2 style={planTitle}>{currentPlan.title}</h2>
                <p style={planText}>{currentPlan.note}</p>
              </div>
              <div style={badge}>{focus}</div>
            </div>

            <div style={summaryGrid}>
              <InfoCard label={t.category} value={currentPlan.category} />
              <InfoCard
                label={t.trainingStyle}
                value={currentPlan.profile.trainingStyle}
              />
              <InfoCard label={t.nutrition} value={currentPlan.nutritionHint} />
              <InfoCard label={t.cardio} value={currentPlan.cardioHint} />
            </div>

            <div style={noteGrid}>
              <NoteCard label={t.bodyLogic} value={currentPlan.profile.bodyTypeNote} />
              <NoteCard label={t.recovery} value={currentPlan.recoveryNote} />
              <NoteCard label={t.restRule} value={currentPlan.profile.restRule} />
              <NoteCard label={t.levelRule} value={currentPlan.profile.levelRule.note} />
            </div>

            <div style={dayGrid}>
              {currentPlan.split.map((day, index) => (
                <div key={`${day.day}-${index}`} style={dayCard}>
                  <div style={dayTop}>
                    <div style={dayLabel}>{day.day}</div>
                    <h3 style={dayTitle}>
                      {day.day.includes("—")
                        ? day.day.split("—")[1]?.trim()
                        : day.day}
                    </h3>
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
                <div style={lockedTitle}>{t.limitation}</div>
                <p style={lockedText}>{t.limitationText}</p>

                <ul style={lockedList}>
                  <li>Save plans to your account</li>
                  <li>Advanced workout rotations</li>
                  <li>Body type based deeper profile logic</li>
                  <li>More advanced progression and program depth</li>
                </ul>

                <a href="/billing" style={unlockButton}>
                  {t.upgrade}
                </a>
              </div>
            )}
          </>
        )}
      </section>
    </div>
  );
}

function Field({ label, children }) {
  return (
    <>
      <label style={labelStyle}>{label}</label>
      {children}
    </>
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

function NoteCard({ label, value }) {
  return (
    <div style={noteCard}>
      <div style={smallLabel}>{label}</div>
      <div style={noteText}>{value}</div>
    </div>
  );
}

const layout = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,320px),1fr))",
  gap: "22px",
};

const sidebarCard = {
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: "22px",
  padding: "clamp(18px, 4vw, 22px)",
  alignSelf: "start",
};

const contentCard = {
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: "22px",
  padding: "clamp(18px, 4vw, 22px)",
  minHeight: "500px",
  minWidth: 0,
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

const labelStyle = label;

const input = {
  width: "100%",
  boxSizing: "border-box",
  padding: "13px 14px",
  borderRadius: "12px",
  border: "1px solid rgba(255,255,255,0.14)",
  background: "#111",
  color: "white",
  fontSize: "16px",
};

const variationWrap = {
  display: "flex",
  gap: "10px",
  marginTop: "8px",
  flexWrap: "wrap",
};

const variationButton = {
  flex: "1 1 70px",
  padding: "11px 14px",
  borderRadius: "10px",
  border: "1px solid rgba(255,255,255,0.14)",
  fontWeight: "800",
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
  padding: "12px 14px",
  borderRadius: "10px",
  border: "1px solid rgba(255,255,255,0.14)",
  background: "rgba(255,255,255,0.05)",
  color: "white",
  fontWeight: "800",
  cursor: "pointer",
};

const generateButton = {
  marginTop: "18px",
  width: "100%",
  padding: "15px 16px",
  borderRadius: "12px",
  border: "none",
  background: "white",
  color: "black",
  fontWeight: "900",
  cursor: "pointer",
};

const saveInfo = {
  marginTop: "10px",
  color: "rgba(255,255,255,0.72)",
  lineHeight: 1.6,
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
  fontSize: "clamp(26px, 6vw, 34px)",
  fontWeight: "900",
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
  fontSize: "clamp(26px, 6vw, 34px)",
  fontWeight: "900",
  margin: "0 0 8px 0",
  lineHeight: 1.1,
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
  fontWeight: "800",
};

const summaryGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,220px),1fr))",
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
  gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,220px),1fr))",
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
  gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,270px),1fr))",
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
  fontWeight: "900",
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
  fontWeight: "800",
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
  fontWeight: "900",
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
  fontWeight: "900",
  textDecoration: "none",
};