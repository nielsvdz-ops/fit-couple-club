"use client";

import { useMemo, useState } from "react";
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

export default function WorkoutOnboardingClient() {
  const [goal, setGoal] = useState(GOALS[0]);
  const [focus, setFocus] = useState(FOCUS_AREAS[0]);
  const [bodyType, setBodyType] = useState(BODY_TYPES[1]);
  const [level, setLevel] = useState(EXPERIENCE_LEVELS[0]);
  const [lifestyle, setLifestyle] = useState(LIFESTYLES[1]);

  const defaults = useMemo(
    () => getRecommendedDefaults({ goal, focus, bodyType, level }),
    [goal, focus, bodyType, level]
  );

  const [days, setDays] = useState(defaults.recommendedDays);
  const [templateIndex, setTemplateIndex] = useState(0);

  const plan = useMemo(
    () =>
      generateWorkoutSystem({
        goal,
        focus,
        days,
        bodyType,
        level,
        lifestyle,
        templateIndex,
      }),
    [goal, focus, days, bodyType, level, lifestyle, templateIndex]
  );

  return (
    <div style={wrap}>
      <div style={panel}>
        <h2 style={title}>Build Your Plan</h2>

        <div style={grid}>
          <Field label="Goal">
            <select value={goal} onChange={(e) => setGoal(e.target.value)} style={input}>
              {GOALS.map((item) => (
                <option key={item} value={item}>{item}</option>
              ))}
            </select>
          </Field>

          <Field label="Focus Area">
            <select value={focus} onChange={(e) => setFocus(e.target.value)} style={input}>
              {FOCUS_AREAS.map((item) => (
                <option key={item} value={item}>{item}</option>
              ))}
            </select>
          </Field>

          <Field label="Body Type">
            <select value={bodyType} onChange={(e) => setBodyType(e.target.value)} style={input}>
              {BODY_TYPES.map((item) => (
                <option key={item} value={item}>{item}</option>
              ))}
            </select>
          </Field>

          <Field label="Experience Level">
            <select value={level} onChange={(e) => setLevel(e.target.value)} style={input}>
              {EXPERIENCE_LEVELS.map((item) => (
                <option key={item} value={item}>{item}</option>
              ))}
            </select>
          </Field>

          <Field label="Lifestyle">
            <select value={lifestyle} onChange={(e) => setLifestyle(e.target.value)} style={input}>
              {LIFESTYLES.map((item) => (
                <option key={item} value={item}>{item}</option>
              ))}
            </select>
          </Field>

          <Field label="Training Days">
            <select value={days} onChange={(e) => setDays(Number(e.target.value))} style={input}>
              {TRAINING_DAYS.map((item) => (
                <option key={item} value={item}>{item}</option>
              ))}
            </select>
          </Field>
        </div>

        <div style={buttonRow}>
          <button style={button} onClick={() => setTemplateIndex((v) => v + 1)}>
            Rotate Plan
          </button>
          <button style={secondaryButton} onClick={() => setDays(defaults.recommendedDays)}>
            Use Recommended Days ({defaults.recommendedDays})
          </button>
        </div>
      </div>

      <div style={panel}>
        <div style={eyebrow}>Auto Profile</div>
        <h3 style={planTitle}>{plan.title}</h3>
        <p style={meta}>{plan.category} · {plan.days} days</p>

        <div style={summaryGrid}>
          <InfoCard label="Training Style" value={plan.profile.trainingStyle} />
          <InfoCard label="Nutrition" value={plan.nutritionHint} />
          <InfoCard label="Cardio" value={plan.cardioHint} />
          <InfoCard label="Rest Rule" value={plan.profile.restRule} />
        </div>

        <div style={noteBox}>
          <div style={miniLabel}>Body Type Note</div>
          <div style={noteText}>{plan.profile.bodyTypeNote}</div>
        </div>

        <div style={noteBox}>
          <div style={miniLabel}>Plan Note</div>
          <div style={noteText}>{plan.note}</div>
        </div>

        <div style={noteBox}>
          <div style={miniLabel}>Recovery</div>
          <div style={noteText}>{plan.recoveryNote}</div>
        </div>

        <div style={{ display: "grid", gap: "16px", marginTop: "18px" }}>
          {plan.split.map((day) => (
            <div key={day.day} style={dayCard}>
              <h4 style={dayTitle}>{day.day}</h4>
              <div style={{ display: "grid", gap: "10px" }}>
                {day.exercises.map(([name, sets, reps]) => (
                  <div key={`${day.day}-${name}`} style={exerciseRow}>
                    <div style={exerciseName}>{name}</div>
                    <div style={exerciseMeta}>{sets} · {reps}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Field({ label, children }) {
  return (
    <div style={{ display: "grid", gap: "8px" }}>
      <div style={miniLabel}>{label}</div>
      {children}
    </div>
  );
}

function InfoCard({ label, value }) {
  return (
    <div style={infoCard}>
      <div style={miniLabel}>{label}</div>
      <div style={infoText}>{value}</div>
    </div>
  );
}

const wrap = {
  display: "grid",
  gap: "22px",
};

const panel = {
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: "22px",
  padding: "22px",
};

const title = {
  margin: 0,
  fontSize: "32px",
  fontWeight: "900",
};

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
  gap: "16px",
  marginTop: "18px",
};

const input = {
  width: "100%",
  background: "#111111",
  color: "white",
  border: "1px solid rgba(255,255,255,0.12)",
  borderRadius: "12px",
  padding: "12px 14px",
  fontWeight: "700",
};

const buttonRow = {
  display: "flex",
  gap: "12px",
  flexWrap: "wrap",
  marginTop: "18px",
};

const button = {
  background: "white",
  color: "black",
  border: "none",
  borderRadius: "12px",
  padding: "12px 16px",
  fontWeight: "800",
  cursor: "pointer",
};

const secondaryButton = {
  background: "rgba(255,255,255,0.06)",
  color: "white",
  border: "1px solid rgba(255,255,255,0.12)",
  borderRadius: "12px",
  padding: "12px 16px",
  fontWeight: "800",
  cursor: "pointer",
};

const eyebrow = {
  fontSize: "12px",
  textTransform: "uppercase",
  letterSpacing: "0.16em",
  color: "rgba(255,255,255,0.45)",
};

const planTitle = {
  margin: "8px 0 0 0",
  fontSize: "28px",
  fontWeight: "900",
};

const meta = {
  color: "rgba(255,255,255,0.68)",
  marginTop: "8px",
};

const summaryGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
  gap: "12px",
  marginTop: "18px",
};

const infoCard = {
  background: "rgba(255,255,255,0.03)",
  border: "1px solid rgba(255,255,255,0.05)",
  borderRadius: "14px",
  padding: "14px",
};

const infoText = {
  color: "rgba(255,255,255,0.82)",
  lineHeight: 1.7,
};

const miniLabel = {
  fontSize: "12px",
  textTransform: "uppercase",
  letterSpacing: "0.14em",
  color: "rgba(255,255,255,0.5)",
  marginBottom: "8px",
};

const noteBox = {
  marginTop: "14px",
  background: "rgba(255,255,255,0.03)",
  border: "1px solid rgba(255,255,255,0.05)",
  borderRadius: "14px",
  padding: "14px",
};

const noteText = {
  color: "rgba(255,255,255,0.78)",
  lineHeight: 1.75,
};

const dayCard = {
  background: "rgba(255,255,255,0.03)",
  border: "1px solid rgba(255,255,255,0.05)",
  borderRadius: "16px",
  padding: "16px",
};

const dayTitle = {
  margin: "0 0 12px 0",
  fontSize: "22px",
  fontWeight: "800",
};

const exerciseRow = {
  display: "flex",
  justifyContent: "space-between",
  gap: "12px",
  padding: "10px 12px",
  borderRadius: "12px",
  background: "rgba(255,255,255,0.025)",
  border: "1px solid rgba(255,255,255,0.04)",
  flexWrap: "wrap",
};

const exerciseName = {
  fontWeight: "700",
};

const exerciseMeta = {
  color: "rgba(255,255,255,0.68)",
};
