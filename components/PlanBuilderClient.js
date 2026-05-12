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


function translateOption(value, language) {
  if (language !== "nl") return value;

  const map = {
    "Build Muscle": "Spieren Opbouwen",
    "Lose Fat": "Vet Verliezen",
    "Fat Loss": "Vetverlies",
    Recomp: "Recomp",
    "Athletic Performance": "Atletische Prestatie",
    "Tone & Shape": "Strakker & Meer Vorm",

    Booty: "Billen",
    "Full Body": "Full Body",
    Legs: "Benen",
    "Upper Body": "Bovenlichaam",
    Core: "Core",
    Back: "Rug",
    Shoulders: "Schouders",
    Arms: "Armen",
    Chest: "Borst",

    Slim: "Slank",
    Average: "Gemiddeld",
    Athletic: "Atletisch",
    Heavy: "Zwaarder",

    Beginner: "Beginner",
    Intermediate: "Gemiddeld",
    Advanced: "Gevorderd",

    "Balanced Lifestyle": "Gebalanceerde Levensstijl",
    "Busy Lifestyle": "Drukke Levensstijl",
    "Highly Active": "Zeer Actief",
  };

  return map[value] || value;
}

function translateWorkoutText(value, language) {
  if (language !== "nl" || !value) return value;

  let text = String(value);

  const exactMap = {
    "Generated Plan": "Gegenereerd Plan",
    "Build Muscle": "Spieren Opbouwen",
    "Lose Fat": "Vet Verliezen",
    "Fat Loss": "Vetverlies",
    "Full Body": "Full Body",
    "Upper Body": "Bovenlichaam",
    "Lower Body": "Onderlichaam",
    Push: "Push",
    Pull: "Pull",
    Legs: "Benen",
    Booty: "Billen",
    Core: "Core",
    Rest: "Rust",
    "Active Recovery": "Actief Herstel",
    Strength: "Kracht",
    Hypertrophy: "Spiergroei",
    Conditioning: "Conditie",
    Cardio: "Cardio",
    Mobility: "Mobiliteit",
    Recovery: "Herstel",

    Squat: "Squat",
    Deadlift: "Deadlift",
    "Bench Press": "Bankdrukken",
    "Shoulder Press": "Schouderdrukken",
    "Hip Thrust": "Hip Thrust",
    "Romanian Deadlift": "Romanian Deadlift",
    "Lat Pulldown": "Lat Pulldown",
    "Seated Row": "Seated Row",
    "Leg Press": "Leg Press",
    "Leg Curl": "Leg Curl",
    "Leg Extension": "Leg Extension",
    "Cable Row": "Cable Row",
    "Bicep Curl": "Bicep Curl",
    "Tricep Pushdown": "Tricep Pushdown",
    "Walking Lunges": "Walking Lunges",
    Plank: "Plank",
  };

  if (exactMap[text]) return exactMap[text];

  const replacements = [
    ["Generated", "Gegenereerd"],
    ["generated", "gegenereerd"],
    ["Build Muscle", "Spieren Opbouwen"],
    ["Lose Fat", "Vet Verliezen"],
    ["Fat Loss", "Vetverlies"],
    ["Full Body", "Full Body"],
    ["Upper Body", "Bovenlichaam"],
    ["Lower Body", "Onderlichaam"],
    ["Body", "Lichaam"],
    ["body", "lichaam"],
    ["Beginner", "Beginner"],
    ["Intermediate", "Gemiddeld"],
    ["Advanced", "Gevorderd"],
    ["Average", "Gemiddeld"],
    ["Athletic", "Atletisch"],
    ["Balanced Lifestyle", "Gebalanceerde Levensstijl"],
    ["Busy Lifestyle", "Drukke Levensstijl"],
    ["Strength", "Kracht"],
    ["strength", "kracht"],
    ["Hypertrophy", "Spiergroei"],
    ["hypertrophy", "spiergroei"],
    ["Conditioning", "Conditie"],
    ["conditioning", "conditie"],
    ["Recovery", "Herstel"],
    ["recovery", "herstel"],
    ["Mobility", "Mobiliteit"],
    ["mobility", "mobiliteit"],
    ["Booty", "Billen"],
    ["booty", "billen"],
    ["Legs", "Benen"],
    ["legs", "benen"],
    ["Back", "Rug"],
    ["back", "rug"],
    ["Shoulders", "Schouders"],
    ["shoulders", "schouders"],
    ["Arms", "Armen"],
    ["arms", "armen"],
    ["Chest", "Borst"],
    ["chest", "borst"],
    ["Rest", "Rust"],
    ["rest", "rust"],
    ["Day", "Dag"],
    ["day", "dag"],
    ["Days", "Dagen"],
    ["days", "dagen"],
    ["reps", "herhalingen"],
    ["Reps", "Herhalingen"],
    ["minutes", "minuten"],
    ["minute", "minuut"],
    ["based on", "gebaseerd op"],
    ["Based on", "Gebaseerd op"],
    ["your", "jouw"],
    ["goal", "doel"],
    ["level", "niveau"],
    ["lifestyle", "levensstijl"],
    ["recommended", "aanbevolen"],
    ["advanced", "geavanceerd"],
    ["progression", "progressie"],
    ["nutrition", "voeding"],
  ];

  replacements.forEach(([from, to]) => {
    text = text.split(from).join(to);
  });

  return text;
}

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
      savePlans: "Save plans to your account",
      advancedRotations: "Advanced workout rotations",
      bodyTypeLogic: "Body type based deeper profile logic",
      advancedProgression: "More advanced progression and program depth",
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
      savePlans: "Plannen opslaan in je account",
      advancedRotations: "Geavanceerde workout rotaties",
      bodyTypeLogic: "Diepere lichaamstype logica",
      advancedProgression: "Meer geavanceerde progressie en programmadiepte",
      upgrade: "Upgrade naar Full Access",
    },
  }[language] || {};

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
              <option key={item} value={item} style={optionStyle}>
                {translateOption(item, language)}
              </option>
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
              <option key={item} value={item} style={optionStyle}>
                {translateOption(item, language)}
              </option>
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
              <option key={item} value={item} style={optionStyle}>
                {translateOption(item, language)}
              </option>
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
              <option key={item} value={item} style={optionStyle}>
                {translateOption(item, language)}
              </option>
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
              <option key={item} value={item} style={optionStyle}>
                {translateOption(item, language)}
              </option>
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
              <option key={d} value={d} style={optionStyle}>
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
                <h2 style={planTitle}>
                  {translateWorkoutText(currentPlan.title, language)}
                </h2>
                <p style={planText}>
                  {translateWorkoutText(currentPlan.note, language)}
                </p>
              </div>
              <div style={badge}>{translateOption(focus, language)}</div>
            </div>

            <div style={summaryGrid}>
              <InfoCard
                label={t.category}
                value={translateWorkoutText(currentPlan.category, language)}
              />
              <InfoCard
                label={t.trainingStyle}
                value={translateWorkoutText(
                  currentPlan.profile.trainingStyle,
                  language
                )}
              />
              <InfoCard
                label={t.nutrition}
                value={translateWorkoutText(currentPlan.nutritionHint, language)}
              />
              <InfoCard
                label={t.cardio}
                value={translateWorkoutText(currentPlan.cardioHint, language)}
              />
            </div>

            <div style={noteGrid}>
              <NoteCard
                label={t.bodyLogic}
                value={translateWorkoutText(
                  currentPlan.profile.bodyTypeNote,
                  language
                )}
              />
              <NoteCard
                label={t.recovery}
                value={translateWorkoutText(currentPlan.recoveryNote, language)}
              />
              <NoteCard
                label={t.restRule}
                value={translateWorkoutText(currentPlan.profile.restRule, language)}
              />
              <NoteCard
                label={t.levelRule}
                value={translateWorkoutText(
                  currentPlan.profile.levelRule.note,
                  language
                )}
              />
            </div>

            <div style={dayGrid}>
              {currentPlan.split.map((day, index) => {
                const cleanDayTitle = day.day.includes("—")
                  ? day.day.split("—")[1]?.trim()
                  : day.day;

                return (
                  <div key={`${day.day}-${index}`} style={dayCard}>
                    <div style={dayTop}>
                      <div style={dayLabel}>
                        {translateWorkoutText(day.day, language)}
                      </div>
                      <h3 style={dayTitle}>
                        {translateWorkoutText(cleanDayTitle, language)}
                      </h3>
                    </div>

                    <div style={exerciseList}>
                      {day.exercises.map(([name, sets, reps]) => (
                        <div key={name} style={exerciseRow}>
                          <div style={exerciseName}>
                            {translateWorkoutText(name, language)}
                          </div>
                          <div style={exerciseMeta}>
                            <span>{translateWorkoutText(sets, language)}</span>
                            <span>{translateWorkoutText(reps, language)}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            {!canSave && (
              <div style={lockedBox}>
                <div style={lockedTitle}>{t.limitation}</div>
                <p style={lockedText}>{t.limitationText}</p>

                <ul style={lockedList}>
                  <li>{t.savePlans}</li>
                  <li>{t.advancedRotations}</li>
                  <li>{t.bodyTypeLogic}</li>
                  <li>{t.advancedProgression}</li>
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
  gridTemplateColumns: "minmax(300px, 420px) 1fr",
  gap: "24px",
  width: "100%",
  maxWidth: "100%",
  overflowX: "hidden",
};

const sidebarCard = {
  background:
    "linear-gradient(180deg, rgba(176,0,0,0.14), rgba(255,255,255,0.025))",
  border: "1px solid rgba(176,0,0,0.24)",
  borderLeft: "3px solid #b00000",
  padding: "clamp(20px, 4vw, 28px)",
  alignSelf: "start",
  minWidth: 0,
};

const contentCard = {
  background:
    "linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.02))",
  border: "1px solid rgba(255,255,255,0.08)",
  borderLeft: "3px solid rgba(176,0,0,0.45)",
  padding: "clamp(20px, 4vw, 28px)",
  minHeight: "500px",
  minWidth: 0,
};

const eyebrow = {
  fontSize: "12px",
  textTransform: "uppercase",
  letterSpacing: "0.18em",
  color: "#ef4444",
  marginBottom: "12px",
  fontWeight: "950",
};

const label = {
  display: "block",
  marginTop: "16px",
  marginBottom: "8px",
  fontWeight: "950",
  textTransform: "uppercase",
  letterSpacing: "0.08em",
  fontSize: "12px",
  color: "rgba(255,255,255,0.68)",
};

const labelStyle = label;

const input = {
  width: "100%",
  boxSizing: "border-box",
  padding: "15px 16px",
  border: "1px solid rgba(255,255,255,0.12)",
  background: "rgba(255,255,255,0.05)",
  color: "white",
  fontSize: "16px",
  fontWeight: "800",
  outline: "none",
};

const optionStyle = {
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
  flex: "1 1 70px",
  padding: "12px 14px",
  border: "1px solid rgba(255,255,255,0.14)",
  fontWeight: "950",
};

const recommendedBox = {
  marginTop: "20px",
  background: "rgba(0,0,0,0.24)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderLeft: "3px solid #b00000",
  padding: "16px",
};

const smallLabel = {
  fontSize: "12px",
  textTransform: "uppercase",
  letterSpacing: "0.12em",
  color: "rgba(255,255,255,0.52)",
  marginBottom: "8px",
  fontWeight: "900",
};

const recommendedText = {
  color: "rgba(255,255,255,0.84)",
  lineHeight: 1.7,
  marginBottom: "12px",
};

const secondarySmallButton = {
  width: "100%",
  padding: "13px 14px",
  border: "1px solid rgba(176,0,0,0.34)",
  background: "rgba(176,0,0,0.14)",
  color: "white",
  fontWeight: "950",
  cursor: "pointer",
  textTransform: "uppercase",
  letterSpacing: "0.06em",
};

const generateButton = {
  marginTop: "20px",
  width: "100%",
  padding: "16px 18px",
  border: "none",
  background: "#b00000",
  color: "white",
  fontWeight: "950",
  cursor: "pointer",
  textTransform: "uppercase",
  letterSpacing: "0.08em",
};

const saveInfo = {
  marginTop: "12px",
  color: "rgba(255,255,255,0.74)",
  lineHeight: 1.6,
};

const smallNote = {
  marginTop: "16px",
  color: "rgba(255,255,255,0.62)",
  lineHeight: 1.75,
  fontSize: "14px",
};

const emptyState = {
  minHeight: "420px",
  display: "grid",
  placeItems: "center",
  textAlign: "center",
};

const emptyTitle = {
  fontSize: "clamp(32px, 7vw, 54px)",
  fontWeight: "950",
  marginBottom: "12px",
  textTransform: "uppercase",
  letterSpacing: "-0.05em",
};

const emptyText = {
  color: "rgba(255,255,255,0.68)",
  maxWidth: "620px",
  lineHeight: 1.85,
};

const planHeader = {
  display: "flex",
  justifyContent: "space-between",
  gap: "16px",
  alignItems: "start",
  flexWrap: "wrap",
  marginBottom: "24px",
};

const planTitle = {
  fontSize: "clamp(34px, 7vw, 58px)",
  fontWeight: "950",
  margin: "0 0 10px 0",
  lineHeight: 0.95,
  letterSpacing: "-0.055em",
  textTransform: "uppercase",
};

const planText = {
  color: "rgba(255,255,255,0.72)",
  margin: 0,
  lineHeight: 1.75,
};

const badge = {
  padding: "12px 16px",
  background: "rgba(176,0,0,0.18)",
  border: "1px solid rgba(176,0,0,0.35)",
  color: "white",
  fontWeight: "950",
  textTransform: "uppercase",
  letterSpacing: "0.08em",
};

const summaryGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,220px),1fr))",
  gap: "14px",
  marginBottom: "20px",
};

const infoCard = {
  background: "rgba(0,0,0,0.24)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderLeft: "3px solid rgba(176,0,0,0.45)",
  padding: "16px",
  minWidth: 0,
};

const infoValue = {
  color: "rgba(255,255,255,0.84)",
  lineHeight: 1.75,
  overflowWrap: "anywhere",
  fontWeight: "800",
};

const noteGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,220px),1fr))",
  gap: "14px",
  marginBottom: "20px",
};

const noteCard = {
  background: "rgba(0,0,0,0.22)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderLeft: "3px solid rgba(176,0,0,0.35)",
  padding: "16px",
  minWidth: 0,
};

const noteText = {
  color: "rgba(255,255,255,0.76)",
  lineHeight: 1.8,
  overflowWrap: "anywhere",
};

const dayGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,270px),1fr))",
  gap: "18px",
};

const dayCard = {
  background:
    "linear-gradient(180deg, rgba(255,255,255,0.035), rgba(255,255,255,0.018))",
  border: "1px solid rgba(255,255,255,0.08)",
  borderLeft: "3px solid rgba(176,0,0,0.45)",
  padding: "20px",
  minWidth: 0,
};

const dayTop = {
  marginBottom: "16px",
};

const dayLabel = {
  color: "rgba(255,255,255,0.52)",
  fontSize: "12px",
  textTransform: "uppercase",
  letterSpacing: "0.12em",
  marginBottom: "8px",
  fontWeight: "900",
};

const dayTitle = {
  fontSize: "24px",
  fontWeight: "950",
  margin: "0",
  overflowWrap: "anywhere",
  textTransform: "uppercase",
};

const exerciseList = {
  display: "grid",
  gap: "12px",
};

const exerciseRow = {
  background: "rgba(255,255,255,0.035)",
  border: "1px solid rgba(255,255,255,0.06)",
  padding: "14px",
  minWidth: 0,
};

const exerciseName = {
  fontWeight: "950",
  marginBottom: "8px",
  overflowWrap: "anywhere",
};

const exerciseMeta = {
  display: "flex",
  gap: "12px",
  flexWrap: "wrap",
  color: "rgba(255,255,255,0.68)",
  fontSize: "14px",
};

const lockedBox = {
  marginTop: "24px",
  background:
    "linear-gradient(135deg, rgba(176,0,0,0.14), rgba(255,255,255,0.025))",
  border: "1px dashed rgba(176,0,0,0.38)",
  borderLeft: "3px solid #b00000",
  padding: "24px",
  textAlign: "center",
};

const lockedTitle = {
  fontSize: "28px",
  fontWeight: "950",
  marginBottom: "10px",
  textTransform: "uppercase",
};

const lockedText = {
  color: "rgba(255,255,255,0.68)",
  lineHeight: 1.85,
  maxWidth: "620px",
  margin: "0 auto 14px auto",
};

const lockedList = {
  textAlign: "left",
  maxWidth: "420px",
  margin: "0 auto 20px auto",
  lineHeight: 1.9,
  color: "rgba(255,255,255,0.74)",
};

const unlockButton = {
  display: "inline-block",
  padding: "15px 20px",
  background: "#b00000",
  color: "white",
  fontWeight: "950",
  textDecoration: "none",
  textTransform: "uppercase",
  letterSpacing: "0.08em",
};