"use client";

import { useEffect, useMemo, useState } from "react";
import { useLanguage } from "../lib/useLanguage";

const STORAGE_KEY = "fit_couple_zone_history";

const scoreAreas = [
  {
    key: "training",
    title: { en: "Training", nl: "Training" },
    text: {
      en: "Workouts completed, effort, consistency, and showing up.",
      nl: "Afgeronde workouts, inzet, consistentie en komen opdagen.",
    },
  },
  {
    key: "nutrition",
    title: { en: "Nutrition", nl: "Voeding" },
    text: {
      en: "Meals, protein, grocery structure, weekends, and food control.",
      nl: "Maaltijden, eiwitten, boodschappenstructuur, weekenden en controle.",
    },
  },
  {
    key: "support",
    title: { en: "Support", nl: "Support" },
    text: {
      en: "Encouragement, teamwork, communication, and no pressure.",
      nl: "Aanmoediging, teamwork, communicatie en geen druk.",
    },
  },
  {
    key: "recovery",
    title: { en: "Recovery", nl: "Herstel" },
    text: {
      en: "Sleep, stress, steps, hydration, and reset habits.",
      nl: "Slaap, stress, stappen, hydratatie en reset-gewoontes.",
    },
  },
];

const weeklyTargets = [
  {
    label: { en: "Shared workouts", nl: "Samen trainen" },
    value: "4",
    detail: {
      en: "Train together or hold each other accountable.",
      nl: "Train samen of houd elkaar verantwoordelijk.",
    },
  },
  {
    label: { en: "Steps together", nl: "Samen stappen" },
    value: "8k+",
    detail: {
      en: "Aim for walks after meals or in the evening.",
      nl: "Doe wandelingen na maaltijden of in de avond.",
    },
  },
  {
    label: { en: "High-protein dinners", nl: "Eiwitrijke diners" },
    value: "3",
    detail: {
      en: "Cook structured dinners together this week.",
      nl: "Kook deze week gestructureerde diners samen.",
    },
  },
  {
    label: { en: "Sunday check-in", nl: "Zondag check-in" },
    value: "1",
    detail: {
      en: "Review the week and plan the next one.",
      nl: "Evalueer de week en plan de volgende.",
    },
  },
];

const advice = {
  training: {
    low: {
      en: "Lower the barrier. Plan 2 realistic workouts first, then build back up. Do not chase a perfect week.",
      nl: "Maak de drempel lager. Plan eerst 2 realistische workouts en bouw daarna op. Jaag niet op een perfecte week.",
    },
    mid: {
      en: "Training is close. Lock in exact days and decide who starts the session when motivation is low.",
      nl: "Training zit bijna goed. Leg vaste dagen vast en spreek af wie start als motivatie laag is.",
    },
    high: {
      en: "Training is strong. Keep the routine and focus on better execution or progressive overload.",
      nl: "Training is sterk. Houd de routine vast en focus op betere uitvoering of progressive overload.",
    },
  },
  nutrition: {
    low: {
      en: "Nutrition needs structure. Use the grocery generator, plan 3 dinners, and keep protein ready at home.",
      nl: "Voeding heeft structuur nodig. Gebruik de boodschappen generator, plan 3 diners en houd eiwitten klaar in huis.",
    },
    mid: {
      en: "Food is partly working. Fix the weakest moment: breakfast, evenings, weekends, or shopping.",
      nl: "Voeding werkt deels. Fix het zwakste moment: ontbijt, avonden, weekenden of boodschappen.",
    },
    high: {
      en: "Nutrition is strong. Keep meals repeatable and only change small things.",
      nl: "Voeding is sterk. Houd maaltijden herhaalbaar en verander alleen kleine dingen.",
    },
  },
  support: {
    low: {
      en: "Support needs attention. Replace criticism with one question: ‘How can I help you today?’",
      nl: "Support heeft aandacht nodig. Vervang kritiek door één vraag: ‘Hoe kan ik je vandaag helpen?’",
    },
    mid: {
      en: "Support is okay, but needs more intention. Praise effort and avoid discussing mistakes when emotions are high.",
      nl: "Support is oké, maar mag bewuster. Complimenteer inzet en bespreek fouten niet wanneer emoties hoog zitten.",
    },
    high: {
      en: "Support is a strength. Use it to carry the weaker areas.",
      nl: "Support is een kracht. Gebruik dit om de zwakkere onderdelen te dragen.",
    },
  },
  recovery: {
    low: {
      en: "Recovery is holding progress back. Prioritize sleep, hydration, walks, and less late-night stress.",
      nl: "Herstel houdt progressie tegen. Prioriteer slaap, hydratatie, wandelingen en minder late-night stress.",
    },
    mid: {
      en: "Recovery is decent. Add one easy evening walk and one earlier sleep night.",
      nl: "Herstel is redelijk. Voeg één makkelijke avondwandeling en één vroegere slaapavond toe.",
    },
    high: {
      en: "Recovery is strong. Keep it stable while pushing training or nutrition.",
      nl: "Herstel is sterk. Houd dit stabiel terwijl je training of voeding opbouwt.",
    },
  },
};

function getAdviceLevel(score) {
  if (score <= 2) return "low";
  if (score <= 3) return "mid";
  return "high";
}

function getDefaultWeekLabel(language) {
  const now = new Date();

  if (language === "nl") {
    return `Week van ${now.toLocaleDateString("nl-NL", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    })}`;
  }

  return `Week of ${now.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  })}`;
}

export default function CoupleZoneClient() {
  const { language } = useLanguage();

  const t = {
    en: {
      eyebrow: "Couple Transformation System",
      heroTitle:
        "Build discipline together without turning fitness into pressure",
      heroText:
        "Score the week, find the weakest area, get advice, and save weekly history so couples can see what is actually improving.",
      weeklyScore: "Weekly accountability score",
      clickScore: "Click a score from 0 to 5",
      saveWeek: "Save week",
      reset: "Reset",
      weakPoint: "Auto-detected weak point",
      weakText:
        "This is the lowest scoring area this week. Focus here first instead of trying to improve everything at once.",
      average: "Average couple score",
      averageText:
        "Use this as a weekly trend score. If the average improves, the couple system is working.",
      advice: "Personalized advice",
      focusNext: "What to focus on next",
      history: "Weekly history",
      saved: "Saved check-ins",
      emptyHistory: "No saved weeks yet. Score this week and press “Save week”.",
      averageLabel: "Average",
      weakestLabel: "Weakest area",
      savedMessage: "Week saved ✅",
      resetMessage: "Scores reset",
    },
    nl: {
      eyebrow: "Couple Transformatie Systeem",
      heroTitle:
        "Bouw discipline samen zonder dat fitness druk wordt",
      heroText:
        "Score de week, vind het zwakste punt, krijg advies en sla wekelijkse geschiedenis op zodat koppels zien wat echt verbetert.",
      weeklyScore: "Wekelijkse accountability score",
      clickScore: "Klik een score van 0 tot 5",
      saveWeek: "Week opslaan",
      reset: "Reset",
      weakPoint: "Automatisch zwakste punt",
      weakText:
        "Dit is het laagst scorende onderdeel van deze week. Focus hier eerst op in plaats van alles tegelijk te verbeteren.",
      average: "Gemiddelde koppelscore",
      averageText:
        "Gebruik dit als wekelijkse trendscore. Als het gemiddelde stijgt, werkt het systeem.",
      advice: "Persoonlijk advies",
      focusNext: "Waar focus je nu op",
      history: "Wekelijkse geschiedenis",
      saved: "Opgeslagen check-ins",
      emptyHistory: "Nog geen weken opgeslagen. Score deze week en klik op “Week opslaan”.",
      averageLabel: "Gemiddelde",
      weakestLabel: "Zwakste punt",
      savedMessage: "Week opgeslagen ✅",
      resetMessage: "Scores gereset",
    },
  }[language];

  const [weekLabel, setWeekLabel] = useState(getDefaultWeekLabel(language));
  const [scores, setScores] = useState({
    training: 0,
    nutrition: 0,
    support: 0,
    recovery: 0,
  });

  const [history, setHistory] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) setHistory(JSON.parse(saved));
    } catch {
      setHistory([]);
    }
  }, []);

  useEffect(() => {
    setWeekLabel((current) => {
      if (!current || current.startsWith("Week of") || current.startsWith("Week van")) {
        return getDefaultWeekLabel(language);
      }

      return current;
    });
  }, [language]);

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
        key: area.key,
        title: area.title[language],
        score,
        text: advice[area.key][level][language],
      };
    });
  }, [scores, language]);

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
      weakest: weakestArea.title[language],
      average: averageScore,
    };

    const nextHistory = [entry, ...history].slice(0, 12);

    setHistory(nextHistory);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(nextHistory));
    setMessage(t.savedMessage);
  }

  function resetScores() {
    setScores({
      training: 0,
      nutrition: 0,
      support: 0,
      recovery: 0,
    });
    setMessage(t.resetMessage);
  }

  return (
    <div style={pageWrap}>
      <section style={heroCard}>
        <div style={eyebrow}>{t.eyebrow}</div>
        <h2 style={heroTitle}>{t.heroTitle}</h2>
        <p style={heroText}>{t.heroText}</p>

        <div style={targetGrid}>
          {weeklyTargets.map((item) => (
            <div key={item.label.en} style={targetCard}>
              <div style={targetValue}>{item.value}</div>
              <div style={targetLabel}>{item.label[language]}</div>
              <div style={targetText}>{item.detail[language]}</div>
            </div>
          ))}
        </div>
      </section>

      <section style={sectionCard}>
        <div style={sectionEyebrow}>{t.weeklyScore}</div>
        <h3 style={sectionTitle}>{t.clickScore}</h3>

        <div style={weekRow}>
          <input
            value={weekLabel}
            onChange={(e) => setWeekLabel(e.target.value)}
            style={input}
          />

          <button type="button" onClick={saveWeek} style={primaryButton}>
            {t.saveWeek}
          </button>

          <button type="button" onClick={resetScores} style={secondaryButton}>
            {t.reset}
          </button>
        </div>

        {message && <div style={messageBox}>{message}</div>}

        <div style={statsGrid}>
          {scoreAreas.map((area) => (
            <div key={area.key} style={scoreCard}>
              <div style={scoreHeader}>
                <div style={scoreTitle}>{area.title[language]}</div>
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

              <p style={text}>{area.text[language]}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={insightGrid}>
        <div style={insightCard}>
          <div style={sectionEyebrow}>{t.weakPoint}</div>
          <h3 style={sectionTitle}>{weakestArea.title[language]}</h3>
          <p style={text}>{t.weakText}</p>
        </div>

        <div style={insightCard}>
          <div style={sectionEyebrow}>{t.average}</div>
          <h3 style={sectionTitle}>{averageScore}/5</h3>
          <p style={text}>{t.averageText}</p>
        </div>
      </section>

      <section style={sectionCard}>
        <div style={sectionEyebrow}>{t.advice}</div>
        <h3 style={sectionTitle}>{t.focusNext}</h3>

        <div style={adviceGrid}>
          {personalizedAdvice.map((item) => (
            <div key={item.key} style={adviceCard}>
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
        <div style={sectionEyebrow}>{t.history}</div>
        <h3 style={sectionTitle}>{t.saved}</h3>

        {history.length === 0 ? (
          <p style={text}>{t.emptyHistory}</p>
        ) : (
          <div style={historyGrid}>
            {history.map((entry) => (
              <div key={entry.id} style={historyCard}>
                <div style={historyTitle}>{entry.weekLabel}</div>
                <div style={historyMeta}>
                  {t.averageLabel}: {entry.average}/5
                </div>
                <div style={historyMeta}>
                  {t.weakestLabel}: {entry.weakest}
                </div>

                <div style={historyScores}>
                  <span>{scoreAreas[0].title[language]} {entry.scores.training}</span>
                  <span>{scoreAreas[1].title[language]} {entry.scores.nutrition}</span>
                  <span>{scoreAreas[2].title[language]} {entry.scores.support}</span>
                  <span>{scoreAreas[3].title[language]} {entry.scores.recovery}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

const pageWrap = {
  display: "grid",
  gap: "22px",
};

const heroCard = {
  background:
    "linear-gradient(180deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.03) 100%)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: "24px",
  padding: "clamp(18px, 4vw, 28px)",
};

const sectionCard = {
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: "22px",
  padding: "clamp(18px, 4vw, 24px)",
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
  fontSize: "clamp(30px, 7vw, 46px)",
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
  fontSize: "clamp(24px, 6vw, 30px)",
  fontWeight: "900",
  lineHeight: 1.15,
};

const targetGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,180px),1fr))",
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
  fontWeight: "900",
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
  width: "100%",
  boxSizing: "border-box",
  padding: "14px",
  borderRadius: "12px",
  background: "#111",
  color: "white",
  border: "1px solid rgba(255,255,255,0.14)",
  outline: "none",
  fontSize: "16px",
};

const primaryButton = {
  border: "none",
  borderRadius: "12px",
  padding: "14px 18px",
  background: "white",
  color: "black",
  fontWeight: "900",
  cursor: "pointer",
  flex: "1 1 140px",
};

const secondaryButton = {
  borderRadius: "12px",
  padding: "14px 18px",
  background: "rgba(255,255,255,0.04)",
  color: "white",
  border: "1px solid rgba(255,255,255,0.12)",
  fontWeight: "900",
  cursor: "pointer",
  flex: "1 1 110px",
};

const messageBox = {
  marginBottom: "16px",
  padding: "12px 14px",
  borderRadius: "14px",
  background: "rgba(34,197,94,0.12)",
  border: "1px solid rgba(34,197,94,0.28)",
  color: "white",
  fontWeight: "800",
};

const statsGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,240px),1fr))",
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
  minWidth: 0,
};

const insightGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,280px),1fr))",
  gap: "16px",
};

const insightCard = {
  background: "rgba(250,204,21,0.08)",
  border: "1px solid rgba(250,204,21,0.22)",
  borderRadius: "22px",
  padding: "clamp(18px, 4vw, 24px)",
};

const adviceGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,240px),1fr))",
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
  gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,240px),1fr))",
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