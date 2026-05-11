"use client";

import Link from "next/link";
import { useLanguage } from "../lib/useLanguage";

const pageCopy = {
  en: {
    library: "Program Library",
    heroTitle: "Choose a program that fits your real goal",
    heroText:
      "Compare each program by duration, level, equipment, weekly structure, and what it is best for before you start.",
    available: "Programs available",
    weeks: "Weeks per program",
    days: "Training days weekly",
    duration: "Duration",
    schedule: "Schedule",
    equipment: "Equipment",
    idealFor: "Ideal for",
    expect: "What to expect",
    inside: "Inside the program",
    split: "Training split",
    progression: "Weekly progression",
    start: "Start Program",
    save: "Save for Later",
    categories: [
      "All",
      "Fat Loss",
      "Muscle Gain",
      "Glutes & Legs",
      "Strength",
      "Upper Body",
      "Couples",
      "Athletic",
      "Recomp",
      "Starter",
    ],
  },

  nl: {
    library: "Programma Bibliotheek",
    heroTitle: "Kies een programma dat past bij jouw doel",
    heroText:
      "Vergelijk elk programma op duur, niveau, materiaal, weekstructuur en waar het het beste voor is voordat je start.",
    available: "Programma’s beschikbaar",
    weeks: "Weken per programma",
    days: "Trainingsdagen per week",
    duration: "Duur",
    schedule: "Schema",
    equipment: "Materiaal",
    idealFor: "Ideaal voor",
    expect: "Wat je kunt verwachten",
    inside: "In het programma",
    split: "Trainingsindeling",
    progression: "Weekelijkse progressie",
    start: "Start Programma",
    save: "Bewaar voor later",
    categories: [
      "Alles",
      "Vetverlies",
      "Spieropbouw",
      "Billen & Benen",
      "Kracht",
      "Bovenlichaam",
      "Koppels",
      "Atletisch",
      "Recomp",
      "Starter",
    ],
  },
};

const nlPrograms = {
  "30-day-lean-reset": {
    title: "30-Dagen Lean Reset",
    category: "Vetverlies",
    level: "Beginner",
    duration: "4 weken",
    schedule: "4 trainingsdagen / week",
    equipment: "Gym of dumbbells thuis",
    goal: "Vet verliezen, routine opbouwen en consistenter worden",
    idealFor:
      "Leden die een duidelijke reset willen en een goed startpunt nodig hebben.",
    result:
      "Goed voor momentum, betere voedingsstructuur en de eerste zichtbare veranderingen.",
    includes: [
      "4 workouts per week",
      "Wandel / cardio doelen",
      "Simpele voedingsgewoontes",
      "Wekelijkse progressie focus",
    ],
    trainingSplit: [
      "2 full-body sessies",
      "1 lower-body dag",
      "1 upper-body dag",
      "2 cardio / bewegingsdagen",
    ],
  },

  "build-curves-booty-builder": {
    title: "Build Curves / Booty Builder",
    category: "Billen & Benen",
    level: "Beginner tot Gemiddeld",
    duration: "8 weken",
    schedule: "4 trainingsdagen / week",
    equipment: "Gym aanbevolen",
    goal: "Billen opbouwen, benen vormen en lower-body sterker maken",
    idealFor:
      "Leden die sterkere billen, betere lower-body shape en betere techniek willen.",
    result:
      "Sterke focus op billen met genoeg volume, spanning en oefeningen voor zichtbaar resultaat.",
    includes: [
      "2 glute-focused lower-body dagen",
      "1 hamstring / quad support dag",
      "1 upper-body balansdag",
      "Wekelijkse progressiestructuur",
    ],
    trainingSplit: [
      "2 glute-priority sessies",
      "1 quad / hamstring support sessie",
      "1 upper-body maintenance sessie",
    ],
  },

  "couple-transformation-challenge": {
    title: "Couple Transformatie Challenge",
    category: "Koppels",
    level: "Alle niveaus",
    duration: "6 weken",
    schedule: "4 gezamenlijke trainingsdagen / week",
    equipment: "Gym of thuis",
    goal: "Samen accountable blijven en consistenter worden als team",
    idealFor:
      "Koppels die samen structuur, accountability en een realistisch plan willen volgen.",
    result:
      "Gemaakt om routine, discipline en zichtbare progressie te verbeteren door teamwork.",
    includes: [
      "4 gezamenlijke sessies per week",
      "Partner accountability structuur",
      "Wekelijkse doelen samen",
      "Simpele progressie check-ins",
    ],
    trainingSplit: [
      "2 krachtgerichte sessies",
      "1 body-shaping sessie",
      "1 challenge / conditioning sessie",
    ],
  },

  "busy-schedule-body-recomp": {
    title: "Busy Schedule Body Recomp",
    category: "Recomp",
    level: "Alle niveaus",
    duration: "8 weken",
    schedule: "3 trainingsdagen / week",
    equipment: "Gym of thuis",
    goal: "Spiermassa opbouwen en vet verliezen met weinig tijd",
    idealFor:
      "Leden met een druk schema die toch zichtbaar resultaat willen halen.",
    result:
      "Een simpel en efficiënt plan voor mensen die niet 5–6 keer per week kunnen trainen.",
    includes: [
      "3 efficiënte sessies per week",
      "Body recomposition structuur",
      "Laag tijdsbeslag",
      "Recovery-friendly programmering",
    ],
    trainingSplit: [
      "3 full-body sessies per week",
      "Optionele lichte cardio",
      "Beweging en herstel support",
    ],
  },

  "confidence-starter-program": {
    title: "Confidence Starter Program",
    category: "Full Access",
    level: "Beginner",
    duration: "4 weken",
    schedule: "3 trainingsdagen / week",
    equipment: "Thuis of gym",
    goal: "Zelfvertrouwen, routine en beginner momentum opbouwen",
    idealFor:
      "Nieuwe leden die zich overweldigd voelen en een simpel startpunt nodig hebben.",
    result:
      "Een laagdrempelig startprogramma om in beweging te komen en consistent te blijven.",
    includes: [
      "3 simpele workouts per week",
      "Lage instap",
      "Duidelijke weekly wins",
      "Habit-building aanpak",
    ],
    trainingSplit: [
      "3 beginner-friendly sessies",
      "Wandelen en licht herstel",
      "Simpele structuur zonder druk",
    ],
  },
};

const focusTranslations = {
  "Routine and consistency": "Routine en consistentie",
  "Better execution": "Betere uitvoering",
  "Progressive overload": "Progressieve overload",
  "Finish strong": "Sterk afsluiten",
  "Patterning and activation": "Techniek en activatie",
  "Volume build": "Volume opbouwen",
  "Load progression": "Gewicht progressie",
  "Peak effort phase": "Sterke eindfase",
  "Routine alignment": "Routine samen afstemmen",
  "Better consistency": "Betere consistentie",
  "Efficient structure": "Efficiënte structuur",
  "Execution and progression": "Uitvoering en progressie",
  "Higher training quality": "Betere trainingskwaliteit",
  "Strong finish": "Sterk afronden",
  "Get started": "Starten",
  "Better rhythm": "Beter ritme",
  "More confidence": "Meer vertrouwen",
  "Finish the first block": "Eerste blok afronden",
};

function translateProgram(program, language) {
  if (language !== "nl") return program;

  return {
    ...program,
    ...(nlPrograms[program.slug] || {}),
  };
}

function translateWeek(value, language) {
  if (language !== "nl") return value;

  return String(value || "")
    .replace("Weeks", "Weken")
    .replace("Week", "Week");
}

function translateFocus(value, language) {
  if (language !== "nl") return value;
  return focusTranslations[value] || value;
}

export default function ProgramsClient({ programs = [] }) {
  const { language } = useLanguage();
  const t = pageCopy[language] || pageCopy.en;

  const translatedPrograms = programs.map((program) =>
    translateProgram(program, language)
  );

  return (
    <div style={pageWrap}>
      <section style={heroCard}>
        <div style={eyebrow}>{t.library}</div>

        <h2 style={heroTitle}>{t.heroTitle}</h2>

        <p style={heroText}>{t.heroText}</p>

        <div style={filterRow}>
          {t.categories.map((category) => (
            <div key={category} style={filterPill}>
              {category}
            </div>
          ))}
        </div>
      </section>

      <section style={statsGrid}>
        <div style={statCard}>
          <div style={statNumber}>{programs.length}</div>
          <div style={statLabel}>{t.available}</div>
        </div>

        <div style={statCard}>
          <div style={statNumber}>4–8</div>
          <div style={statLabel}>{t.weeks}</div>
        </div>

        <div style={statCard}>
          <div style={statNumber}>3–5</div>
          <div style={statLabel}>{t.days}</div>
        </div>
      </section>

      <section style={grid}>
        {translatedPrograms.map((program) => (
          <article key={program.slug} style={card}>
            <div style={cardTop}>
              <div style={categoryBadge}>{program.category}</div>
              <div style={levelBadge}>{program.level}</div>
            </div>

            <h3 style={cardTitle}>{program.title}</h3>

            <p style={cardGoal}>{program.goal}</p>

            <div style={metaGrid}>
              <div style={metaItem}>
                <div style={metaLabel}>{t.duration}</div>
                <div style={metaValue}>{program.duration}</div>
              </div>

              <div style={metaItem}>
                <div style={metaLabel}>{t.schedule}</div>
                <div style={metaValue}>{program.schedule}</div>
              </div>

              <div style={metaItem}>
                <div style={metaLabel}>{t.equipment}</div>
                <div style={metaValue}>{program.equipment}</div>
              </div>

              <div style={metaItem}>
                <div style={metaLabel}>{t.idealFor}</div>
                <div style={metaValue}>{program.idealFor}</div>
              </div>
            </div>

            <div style={sectionBlock}>
              <div style={sectionLabel}>{t.expect}</div>
              <p style={cardText}>{program.result}</p>
            </div>

            <div style={sectionBlock}>
              <div style={sectionLabel}>{t.inside}</div>
              <ul style={list}>
                {program.includes.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div style={sectionBlock}>
              <div style={sectionLabel}>{t.split}</div>
              <ul style={list}>
                {program.trainingSplit.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div style={sectionBlock}>
              <div style={sectionLabel}>{t.progression}</div>

              <ul style={list}>
                {program.weeklyPlan.map((block) => (
                  <li key={`${program.slug}-${block.week}`}>
                    <strong>{translateWeek(block.week, language)}</strong> —{" "}
                    {translateFocus(block.focus, language)}
                  </li>
                ))}
              </ul>
            </div>

            <div style={ctaRow}>
              <Link href={`/programs/${program.slug}`} style={primaryButton}>
                {t.start}
              </Link>

              <button type="button" style={secondaryButton}>
                {t.save}
              </button>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}

const pageWrap = {
  display: "grid",
  gap: "22px",
  width: "100%",
  maxWidth: "1500px",
  margin: "0 auto",
  overflowX: "hidden",
  boxSizing: "border-box",
};

const heroCard = {
  background:
    "linear-gradient(180deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.03) 100%)",
  border: "1px solid rgba(255,255,255,0.09)",
  borderRadius: "24px",
  padding: "clamp(20px, 4vw, 28px)",
  minWidth: 0,
  overflowWrap: "break-word",
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
  fontSize: "clamp(28px, 5vw, 44px)",
  fontWeight: "900",
  lineHeight: 1.08,
  overflowWrap: "break-word",
};

const heroText = {
  color: "rgba(255,255,255,0.72)",
  lineHeight: 1.8,
  marginTop: "12px",
  maxWidth: "860px",
  fontSize: "clamp(15px, 2vw, 17px)",
};

const filterRow = {
  display: "flex",
  gap: "10px",
  flexWrap: "wrap",
  marginTop: "18px",
};

const filterPill = {
  padding: "10px 14px",
  borderRadius: "999px",
  border: "1px solid rgba(255,255,255,0.1)",
  background: "rgba(255,255,255,0.04)",
  fontWeight: "800",
  fontSize: "14px",
};

const statsGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 180px), 1fr))",
  gap: "18px",
};

const statCard = {
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: "20px",
  padding: "20px",
};

const statNumber = {
  fontSize: "34px",
  fontWeight: "900",
  marginBottom: "6px",
};

const statLabel = {
  color: "rgba(255,255,255,0.68)",
  lineHeight: 1.6,
};

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 340px), 1fr))",
  gap: "18px",
};

const card = {
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: "22px",
  padding: "clamp(18px, 4vw, 22px)",
  display: "grid",
  gap: "16px",
  minWidth: 0,
  overflowWrap: "break-word",
};

const cardTop = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "10px",
  flexWrap: "wrap",
};

const categoryBadge = {
  background: "rgba(255,255,255,0.08)",
  borderRadius: "999px",
  padding: "8px 12px",
  fontSize: "12px",
  fontWeight: "900",
  textTransform: "uppercase",
  letterSpacing: "0.08em",
};

const levelBadge = {
  background: "rgba(255,255,255,0.03)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: "999px",
  padding: "8px 12px",
  fontSize: "12px",
  fontWeight: "800",
};

const cardTitle = {
  fontSize: "clamp(24px, 5vw, 30px)",
  fontWeight: "900",
  margin: 0,
  lineHeight: 1.12,
};

const cardGoal = {
  color: "rgba(255,255,255,0.85)",
  lineHeight: 1.7,
  margin: 0,
  fontWeight: "700",
};

const metaGrid = {
  display: "grid",
  gap: "12px",
};

const metaItem = {
  background: "rgba(255,255,255,0.03)",
  border: "1px solid rgba(255,255,255,0.06)",
  borderRadius: "16px",
  padding: "14px",
};

const metaLabel = {
  fontSize: "11px",
  textTransform: "uppercase",
  letterSpacing: "0.12em",
  color: "rgba(255,255,255,0.45)",
  marginBottom: "6px",
};

const metaValue = {
  color: "rgba(255,255,255,0.82)",
  lineHeight: 1.7,
  fontWeight: "600",
};

const sectionBlock = {
  display: "grid",
  gap: "8px",
};

const sectionLabel = {
  fontSize: "12px",
  textTransform: "uppercase",
  letterSpacing: "0.14em",
  color: "rgba(255,255,255,0.45)",
};

const cardText = {
  color: "rgba(255,255,255,0.72)",
  lineHeight: 1.7,
  margin: 0,
};

const list = {
  paddingLeft: "18px",
  margin: 0,
  color: "rgba(255,255,255,0.74)",
  lineHeight: 1.85,
};

const ctaRow = {
  display: "flex",
  gap: "10px",
  flexWrap: "wrap",
  marginTop: "4px",
};

const primaryButton = {
  textDecoration: "none",
  border: "none",
  borderRadius: "14px",
  padding: "12px 16px",
  fontWeight: "900",
  cursor: "pointer",
  background: "white",
  color: "#111",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "46px",
};

const secondaryButton = {
  borderRadius: "14px",
  padding: "12px 16px",
  fontWeight: "900",
  cursor: "pointer",
  border: "1px solid rgba(255,255,255,0.12)",
  background: "rgba(255,255,255,0.03)",
  color: "white",
  minHeight: "46px",
};
