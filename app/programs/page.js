export const dynamic = "force-dynamic";

import Link from "next/link";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import DashboardLayout from "../../components/DashboardLayout";
import UpgradeLockScreen from "../../components/UpgradeLockScreen";
import { getCurrentUserAndProfile } from "../../lib/getProfile";
import { canAccessFitnessPages } from "../../lib/access";
import {
  programs,
  translateProgramText,
} from "../../lib/programsData";

const copy = {
  en: {
    pageTitle: "Programs",
    pageSubtitle:
      "Structured programs with clear goals, weekly planning, training splits, and practical guidance.",
    unlockTitle: "Unlock programs",
    unlockText: "Programs are included with Full Access.",
    upgradeButton: "Upgrade to Full Access",
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
    startProgram: "Start Program",
    save: "Save for Later",
    all: "All",
  },

  nl: {
    pageTitle: "Programma’s",
    pageSubtitle:
      "Gestructureerde programma’s met duidelijke doelen, weekplanning, trainingsindeling en praktische begeleiding.",
    unlockTitle: "Ontgrendel programma’s",
    unlockText: "Programma’s zijn inbegrepen bij Full Access.",
    upgradeButton: "Upgrade naar Full Access",
    library: "Programma Bibliotheek",
    heroTitle: "Kies een programma dat past bij jouw echte doel",
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
    startProgram: "Start Programma",
    save: "Bewaar voor later",
    all: "Alle",
  },
};

const categories = [
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
];

function getLanguage() {
  const cookieStore = cookies();

  const saved =
    cookieStore.get("language")?.value ||
    cookieStore.get("fitcouple_language")?.value ||
    cookieStore.get("NEXT_LOCALE")?.value ||
    "en";

  return saved === "nl" ? "nl" : "en";
}

function tr(value, language) {
  return translateProgramText(value || "", language);
}

export default async function ProgramsPage() {
  const { user, profile } = await getCurrentUserAndProfile();

  if (!user) redirect("/login");

  const language = getLanguage();
  const t = copy[language];

  if (!canAccessFitnessPages(profile)) {
    return (
      <DashboardLayout
        title={t.pageTitle}
        subtitle={t.pageSubtitle}
        membershipType={profile?.membership_type}
      >
        <UpgradeLockScreen
          title={t.unlockTitle}
          text={t.unlockText}
          requiredPlan="Full Access"
          buttonLabel={t.upgradeButton}
        />
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout
      title={t.pageTitle}
      subtitle={t.pageSubtitle}
      membershipType={profile?.membership_type}
    >
      <div style={pageWrap}>
        <section style={heroCard}>
          <div style={eyebrow}>{t.library}</div>

          <h2 style={heroTitle}>{t.heroTitle}</h2>

          <p style={heroText}>{t.heroText}</p>

          <div style={filterRow}>
            {categories.map((category) => (
              <div key={category} style={filterPill}>
                {category === "All"
                  ? t.all
                  : tr(category, language)}
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
          {programs.map((program) => (
            <article key={program.slug} style={card}>
              <div style={cardTop}>
                <div style={categoryBadge}>
                  {tr(program.category, language)}
                </div>

                <div style={levelBadge}>
                  {tr(program.level, language)}
                </div>
              </div>

              <h3 style={cardTitle}>
                {tr(program.title, language)}
              </h3>

              <p style={cardGoal}>
                {tr(program.goal, language)}
              </p>

              <div style={metaGrid}>
                <div style={metaItem}>
                  <div style={metaLabel}>{t.duration}</div>

                  <div style={metaValue}>
                    {tr(program.duration, language)}
                  </div>
                </div>

                <div style={metaItem}>
                  <div style={metaLabel}>{t.schedule}</div>

                  <div style={metaValue}>
                    {tr(program.schedule, language)}
                  </div>
                </div>

                <div style={metaItem}>
                  <div style={metaLabel}>{t.equipment}</div>

                  <div style={metaValue}>
                    {tr(program.equipment, language)}
                  </div>
                </div>

                <div style={metaItem}>
                  <div style={metaLabel}>{t.idealFor}</div>

                  <div style={metaValue}>
                    {tr(program.idealFor, language)}
                  </div>
                </div>
              </div>

              <div style={sectionBlock}>
                <div style={sectionLabel}>{t.expect}</div>

                <p style={cardText}>
                  {tr(program.result, language)}
                </p>
              </div>

              <div style={sectionBlock}>
                <div style={sectionLabel}>{t.inside}</div>

                <ul style={list}>
                  {program.includes.map((item) => (
                    <li key={item}>
                      {tr(item, language)}
                    </li>
                  ))}
                </ul>
              </div>

              <div style={sectionBlock}>
                <div style={sectionLabel}>{t.split}</div>

                <ul style={list}>
                  {program.trainingSplit.map((item) => (
                    <li key={item}>
                      {tr(item, language)}
                    </li>
                  ))}
                </ul>
              </div>

              <div style={sectionBlock}>
                <div style={sectionLabel}>{t.progression}</div>

                <ul style={list}>
                  {program.weeklyPlan.map((block) => (
                    <li key={`${program.slug}-${block.week}`}>
                      <strong>
                        {tr(block.week, language)}
                      </strong>{" "}
                      — {tr(block.focus, language)}
                    </li>
                  ))}
                </ul>
              </div>

              <div style={ctaRow}>
                <Link
                  href={`/programs/${program.slug}`}
                  style={primaryButton}
                >
                  {t.startProgram}
                </Link>

                <button type="button" style={secondaryButton}>
                  {t.save}
                </button>
              </div>
            </article>
          ))}
        </section>
      </div>
    </DashboardLayout>
  );
}

const pageWrap = {
  display: "grid",
  gap: "22px",
};

const heroCard = {
  background:
    "linear-gradient(180deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.03) 100%)",
  border: "1px solid rgba(255,255,255,0.09)",
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
  fontSize: "clamp(28px, 4vw, 42px)",
  fontWeight: "900",
  lineHeight: 1.08,
};

const heroText = {
  color: "rgba(255,255,255,0.72)",
  lineHeight: 1.8,
  marginTop: "12px",
  maxWidth: "860px",
};

const filterRow = {
  display: "flex",
  gap: "10px",
  flexWrap: "wrap",
  marginTop: "18px",
  overflowWrap: "break-word",
  wordBreak: "break-word",
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
  gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))",
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
  gridTemplateColumns:
    "repeat(auto-fit,minmax(min(100%, 340px),1fr))",
  gap: "18px",
};

const card = {
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: "22px",
  padding: "22px",
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
  fontSize: "28px",
  fontWeight: "900",
  margin: 0,
  lineHeight: 1.1,
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
};

const secondaryButton = {
  borderRadius: "14px",
  padding: "12px 16px",
  fontWeight: "900",
  cursor: "pointer",
  border: "1px solid rgba(255,255,255,0.12)",
  background: "rgba(255,255,255,0.03)",
  color: "white",
};