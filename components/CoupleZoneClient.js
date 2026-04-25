"use client";

import { useMemo, useState } from "react";

const scoreAreas = [
  {
    key: "training",
    title: "Training",
    text: "Workouts completed, effort, consistency, and showing up.",
  },
  {
    key: "nutrition",
    title: "Nutrition",
    text: "Meals, protein, grocery structure, weekends, and food control.",
  },
  {
    key: "support",
    title: "Support",
    text: "Encouragement, teamwork, communication, and no pressure.",
  },
  {
    key: "recovery",
    title: "Recovery",
    text: "Sleep, stress, steps, hydration, and reset habits.",
  },
];

const weeklyTargets = [
  { label: "Shared workouts", value: "4", detail: "Train together or hold each other accountable." },
  { label: "Steps together", value: "8k+", detail: "Aim for walks after meals or in the evening." },
  { label: "High-protein dinners", value: "3", detail: "Cook structured dinners together this week." },
  { label: "Sunday check-in", value: "1", detail: "Review the week and plan the next one." },
];

const advice = {
  training: {
    low: "Lower the barrier. Plan 2 realistic workouts first, then build back up. Do not chase a perfect week.",
    mid: "Training is close. Lock in exact days and decide who starts the session when motivation is low.",
    high: "Training is strong. Keep the routine and focus on better execution or progressive overload.",
  },
  nutrition: {
    low: "Nutrition needs structure. Use the grocery generator, plan 3 dinners, and keep protein ready at home.",
    mid: "Food is partly working. Fix the weakest moment: breakfast, evenings, weekends, or shopping.",
    high: "Nutrition is strong. Keep meals repeatable and only change small things.",
  },
  support: {
    low: "Support needs attention. Replace criticism with one question: ‘How can I help you today?’",
    mid: "Support is okay, but needs more intention. Praise effort and avoid discussing mistakes when emotions are high.",
    high: "Support is a strength. Use it to carry the weaker areas.",
  },
  recovery: {
    low: "Recovery is holding progress back. Prioritize sleep, hydration, walks, and less late-night stress.",
    mid: "Recovery is decent. Add one easy evening walk and one earlier sleep night.",
    high: "Recovery is strong. Keep it stable while pushing training or nutrition.",
  },
};

function getAdviceLevel(score) {
  if (score <= 2) return "low";
  if (score <= 3) return "mid";
  return "high";
}

function getDefaultWeekLabel() {
  const now = new Date();
  return `Week of ${now.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  })}`;
}

export default function CoupleZoneClient() {
  const [weekLabel, setWeekLabel] = useState(getDefaultWeekLabel());
  const [scores, setScores] = useState({
    training: 0,
    nutrition: 0,
    support: 0,
    recovery: 0,
  });

  const [history, setHistory] = useState([]);

  const weakestArea = useMemo(() => {
    return scoreAreas.reduce((lowest, area) =>
      scores[area.key] < scores[lowest.key] ? area : lowest
    );
  }, [scores]);

  const averageScore = useMemo(() => {
    const total = scoreAreas.reduce((sum, area) => sum + scores[area.key], 0);
    return (total / scoreAreas.length).toFixed(1);
  }, [scores]);

  const personalizedAdvice = useMemo(() => {
    return scoreAreas.map((area) => {
      const score = scores[area.key];
      const level = getAdviceLevel(score);

      return {
        title: area.title,
        score,
        text: advice[area.key][level],
      };
    });
  }, [scores]);

  function setScore(key, value) {
    setScores((current) => ({
      ...current,
      [key]: value,
    }));
  }

  function saveWeek() {
    const entry = {
      id: Date.now(),
      weekLabel,
      scores,
      weakest: weakestArea.title,
      average: averageScore,
    };

    setHistory((current) => [entry, ...current].slice(0, 8));
  }

  function resetScores() {
    setScores({
      training: 0,
      nutrition: 0,
      support: 0,
      recovery: 0,
    });
  }

  return (
    <div style={pageWrap}>
      <section style={heroCard}>
        <div style={eyebrow}>Couple Transformation System</div>
        <h2 style={heroTitle}>
          Build discipline together without turning fitness into pressure
        </h2>
        <p style={heroText}>
          Score the week, find the weakest area, get advice, and save weekly
          history so couples can see what is actually improving.
        </p>

        <div style={targetGrid}>
          {weeklyTargets.map((item) => (
            <div key={item.label} style={targetCard}>
              <div style={targetValue}>{item.value}</div>
              <div style={targetLabel}>{item.label}</div>
              <div style={targetText}>{item.detail}</div>
            </div>
          ))}
        </div>
      </section>

      <section style={sectionCard}>
        <div style={sectionEyebrow}>Weekly accountability score</div>
        <h3 style={sectionTitle}>Click a score from 0 to 5</h3>

        <div style={weekRow}>
          <input
            value={weekLabel}
            onChange={(e) => setWeekLabel(e.target.value)}
            style={input}
          />

          <button type="button" onClick={saveWeek} style={primaryButton}>
            Save week
          </button>

          <button type="button" onClick={resetScores} style={secondaryButton}>
            Reset
          </button>
        </div>

        <div style={statsGrid}>
          {scoreAreas.map((area) => (
            <div key={area.key} style={scoreCard}>
              <div style={scoreHeader}>
                <div style={scoreTitle}>{area.title}</div>
                <div style={scoreValue}>{scores[area.key]}/5</div>
              </div>

              <div style={scoreButtons}>
                {[0, 1, 2, 3, 4, 5].map((value) => {
                  const active = scores[area.key] === value;

                  return (
                    <button
                      key={value}
                      type="button"
                      onClick={() => setScore(area.key, value)}
                      style={{
                        ...scoreButton,
                        background: active ? "white" : "rgba(255,255,255,0.04)",
                        color: active ? "black" : "white",
                      }}
                    >
                      {value}
                    </button>
                  );
                })}
              </div>

              <p style={text}>{area.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={insightGrid}>
        <div style={insightCard}>
          <div style={sectionEyebrow}>Auto-detected weak point</div>
          <h3 style={sectionTitle}>{weakestArea.title}</h3>
          <p style={text}>
            This is the lowest scoring area this week. Focus here first instead
            of trying to improve everything at once.
          </p>
        </div>

        <div style={insightCard}>
          <div style={sectionEyebrow}>Average couple score</div>
          <h3 style={sectionTitle}>{averageScore}/5</h3>
          <p style={text}>
            Use this as a weekly trend score. If the average improves, the
            couple system is working.
          </p>
        </div>
      </section>

      <section style={sectionCard}>
        <div style={sectionEyebrow}>Personalized advice</div>
        <h3 style={sectionTitle}>What to focus on next</h3>

        <div style={adviceGrid}>
          {personalizedAdvice.map((item) => (
            <div key={item.title} style={adviceCard}>
              <div style={adviceTop}>
                <div style={adviceTitle}>{item.title}</div>
                <div style={scoreValue}>{item.score}/5</div>
              </div>
              <p style={text}>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={sectionCard}>
        <div style={sectionEyebrow}>Weekly history</div>
        <h3 style={sectionTitle}>Saved check-ins</h3>

        {history.length === 0 ? (
          <p style={text}>
            No saved weeks yet. Score this week and press “Save week”.
          </p>
        ) : (
          <div style={historyGrid}>
            {history.map((entry) => (
              <div key={entry.id} style={historyCard}>
                <div style={historyTitle}>{entry.weekLabel}</div>
                <div style={historyMeta}>Average: {entry.average}/5</div>
                <div style={historyMeta}>Weakest area: {entry.weakest}</div>

                <div style={historyScores}>
                  <span>Training {entry.scores.training}</span>
                  <span>Nutrition {entry.scores.nutrition}</span>
                  <span>Support {entry.scores.support}</span>
                  <span>Recovery {entry.scores.recovery}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

const pageWrap = { display: "grid", gap: "22px" };

const heroCard = {
  background:
    "linear-gradient(180deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.03) 100%)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: "24px",
  padding: "28px",
};

const sectionCard = {
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: "22px",
  padding: "24px",
};

const eyebrow = {
  fontSize: "12px",
  textTransform: "uppercase",
  letterSpacing: "0.16em",
  color: "rgba(255,255,255,0.45)",
  marginBottom: "8px",
};

const sectionEyebrow = eyebrow;

const heroTitle = {
  margin: 0,
  fontSize: "clamp(30px, 4vw, 46px)",
  fontWeight: "900",
  lineHeight: 1.05,
};

const heroText = {
  color: "rgba(255,255,255,0.72)",
  lineHeight: 1.8,
  marginTop: "12px",
  maxWidth: "900px",
};

const sectionTitle = {
  margin: 0,
  fontSize: "28px",
  fontWeight: "900",
  lineHeight: 1.15,
};

const targetGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))",
  gap: "14px",
  marginTop: "22px",
};

const targetCard = {
  background: "rgba(255,255,255,0.03)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: "18px",
  padding: "18px",
};

const targetValue = {
  fontSize: "34px",
  fontWeight: "900",
  marginBottom: "6px",
};

const targetLabel = {
  fontSize: "15px",
  fontWeight: "800",
  marginBottom: "6px",
};

const targetText = {
  color: "rgba(255,255,255,0.64)",
  lineHeight: 1.6,
  fontSize: "14px",
};

const weekRow = {
  display: "flex",
  gap: "12px",
  flexWrap: "wrap",
  marginTop: "18px",
  marginBottom: "18px",
};

const input = {
  flex: "1 1 260px",
  padding: "14px",
  borderRadius: "12px",
  background: "#111",
  color: "white",
  border: "1px solid rgba(255,255,255,0.14)",
  outline: "none",
};

const primaryButton = {
  border: "none",
  borderRadius: "12px",
  padding: "14px 18px",
  background: "white",
  color: "black",
  fontWeight: "900",
  cursor: "pointer",
};

const secondaryButton = {
  borderRadius: "12px",
  padding: "14px 18px",
  background: "rgba(255,255,255,0.04)",
  color: "white",
  border: "1px solid rgba(255,255,255,0.12)",
  fontWeight: "900",
  cursor: "pointer",
};

const statsGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))",
  gap: "16px",
};

const scoreCard = {
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: "20px",
  padding: "20px",
};

const scoreHeader = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "10px",
  marginBottom: "12px",
};

const scoreTitle = {
  fontSize: "20px",
  fontWeight: "900",
};

const scoreValue = {
  fontSize: "16px",
  fontWeight: "900",
  padding: "6px 10px",
  borderRadius: "999px",
  background: "rgba(255,255,255,0.08)",
};

const scoreButtons = {
  display: "grid",
  gridTemplateColumns: "repeat(6,1fr)",
  gap: "8px",
  marginBottom: "12px",
};

const scoreButton = {
  border: "1px solid rgba(255,255,255,0.1)",
  borderRadius: "10px",
  padding: "10px 0",
  fontWeight: "900",
  cursor: "pointer",
};

const insightGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
  gap: "16px",
};

const insightCard = {
  background: "rgba(250,204,21,0.08)",
  border: "1px solid rgba(250,204,21,0.22)",
  borderRadius: "22px",
  padding: "24px",
};

const adviceGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))",
  gap: "16px",
  marginTop: "18px",
};

const adviceCard = {
  background: "rgba(255,255,255,0.03)",
  border: "1px solid rgba(255,255,255,0.06)",
  borderRadius: "18px",
  padding: "18px",
};

const adviceTop = {
  display: "flex",
  justifyContent: "space-between",
  gap: "10px",
  alignItems: "center",
};

const adviceTitle = {
  fontSize: "18px",
  fontWeight: "900",
};

const historyGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))",
  gap: "14px",
  marginTop: "18px",
};

const historyCard = {
  background: "rgba(255,255,255,0.03)",
  border: "1px solid rgba(255,255,255,0.06)",
  borderRadius: "18px",
  padding: "18px",
};

const historyTitle = {
  fontSize: "18px",
  fontWeight: "900",
  marginBottom: "8px",
};

const historyMeta = {
  color: "rgba(255,255,255,0.68)",
  lineHeight: 1.6,
};

const historyScores = {
  display: "flex",
  flexWrap: "wrap",
  gap: "8px",
  marginTop: "12px",
  color: "rgba(255,255,255,0.78)",
  fontSize: "13px",
};

const text = {
  color: "rgba(255,255,255,0.68)",
  lineHeight: 1.8,
};
