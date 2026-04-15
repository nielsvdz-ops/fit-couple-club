export const dynamic = "force-dynamic";

import Link from "next/link";
import { redirect } from "next/navigation";
import DashboardLayout from "../../components/DashboardLayout";
import { getCurrentUserAndProfile } from "../../lib/getProfile";
import { canAccessPremiumPages } from "../../lib/access";
import { programs } from "../../lib/programsData";

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

export default async function ProgramsPage() {
  const { user, profile } = await getCurrentUserAndProfile();

  if (!user) redirect("/login");
  if (!canAccessPremiumPages(profile)) redirect("/pricing");

  return (
    <DashboardLayout
      title="Programs"
      subtitle="Premium and VIP members get access to structured transformation programs with clear goals, training splits, weekly structure, and real use-case guidance."
      membershipType={profile?.membership_type}
    >
      <div style={pageWrap}>
        <section style={heroCard}>
          <div style={eyebrow}>Premium Program Library</div>
          <h2 style={heroTitle}>Choose a program that matches your real goal</h2>
          <p style={heroText}>
            These programs are built to feel practical and usable, not vague.
            Members can compare duration, difficulty, equipment needs, training
            split, weekly structure, and expected outcome before starting.
          </p>

          <div style={filterRow}>
            {categories.map((category) => (
              <div key={category} style={filterPill}>
                {category}
              </div>
            ))}
          </div>
        </section>

        <section style={statsGrid}>
          <div style={statCard}>
            <div style={statNumber}>{programs.length}</div>
            <div style={statLabel}>Programs available</div>
          </div>
          <div style={statCard}>
            <div style={statNumber}>4–8</div>
            <div style={statLabel}>Weeks per program</div>
          </div>
          <div style={statCard}>
            <div style={statNumber}>3–5</div>
            <div style={statLabel}>Training days weekly</div>
          </div>
        </section>

        <section style={grid}>
          {programs.map((program) => (
            <article key={program.slug} style={card}>
              <div style={cardTop}>
                <div style={categoryBadge}>{program.category}</div>
                <div style={levelBadge}>{program.level}</div>
              </div>

              <h3 style={cardTitle}>{program.title}</h3>
              <p style={cardGoal}>{program.goal}</p>

              <div style={metaGrid}>
                <div style={metaItem}>
                  <div style={metaLabel}>Duration</div>
                  <div style={metaValue}>{program.duration}</div>
                </div>

                <div style={metaItem}>
                  <div style={metaLabel}>Schedule</div>
                  <div style={metaValue}>{program.schedule}</div>
                </div>

                <div style={metaItem}>
                  <div style={metaLabel}>Equipment</div>
                  <div style={metaValue}>{program.equipment}</div>
                </div>

                <div style={metaItem}>
                  <div style={metaLabel}>Ideal for</div>
                  <div style={metaValue}>{program.idealFor}</div>
                </div>
              </div>

              <div style={sectionBlock}>
                <div style={sectionLabel}>What to expect</div>
                <p style={cardText}>{program.result}</p>
              </div>

              <div style={sectionBlock}>
                <div style={sectionLabel}>Inside the program</div>
                <ul style={list}>
                  {program.includes.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <div style={sectionBlock}>
                <div style={sectionLabel}>Training split</div>
                <ul style={list}>
                  {program.trainingSplit.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <div style={sectionBlock}>
                <div style={sectionLabel}>Weekly progression</div>
                <ul style={list}>
                  {program.weeklyPlan.map((block) => (
                    <li key={`${program.slug}-${block.week}`}>
                      <strong>{block.week}</strong> — {block.focus}
                    </li>
                  ))}
                </ul>
              </div>

              <div style={sectionBlock}>
                <div style={sectionLabel}>Preview of the weekly structure</div>
                <div style={weekGrid}>
                  {program.weeklyPlan[0]?.days?.map((dayItem, index) => {
                    const isString = typeof dayItem === "string";

                    return (
                      <div
                        key={`${program.slug}-${
                          isString
                            ? dayItem
                            : `${dayItem.day}-${dayItem.title}-${index}`
                        }`}
                        style={dayCard}
                      >
                        {isString ? (
                          <div style={legacyDayText}>{dayItem}</div>
                        ) : (
                          <div style={previewWorkoutCard}>
                            <div style={previewDayLabel}>{dayItem.day}</div>

                            <div style={previewWorkoutTitle}>{dayItem.title}</div>

                            {dayItem.focus ? (
                              <div style={previewWorkoutFocus}>
                                {dayItem.focus}
                              </div>
                            ) : null}

                            {dayItem.type ? (
                              <div style={previewTypePill}>{dayItem.type}</div>
                            ) : null}

                            {Array.isArray(dayItem.steps) &&
                            dayItem.steps.length > 0 ? (
                              <div style={previewExerciseCount}>
                                {dayItem.steps.length} exercises
                              </div>
                            ) : null}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              <div style={tipsGrid}>
                <div style={tipCard}>
                  <div style={metaLabel}>Cardio guidance</div>
                  <div style={tipText}>{program.cardioGuidance}</div>
                </div>

                <div style={tipCard}>
                  <div style={metaLabel}>Recovery guidance</div>
                  <div style={tipText}>{program.recoveryGuidance}</div>
                </div>
              </div>

              <div style={ctaRow}>
                <Link href={`/programs/${program.slug}`} style={primaryButton}>
                  Start Program
                </Link>

                <button style={secondaryButton}>Save for Later</button>
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
  fontWeight: "800",
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
};

const filterPill = {
  padding: "10px 14px",
  borderRadius: "999px",
  border: "1px solid rgba(255,255,255,0.1)",
  background: "rgba(255,255,255,0.04)",
  fontWeight: "700",
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
  fontWeight: "800",
  marginBottom: "6px",
};

const statLabel = {
  color: "rgba(255,255,255,0.68)",
  lineHeight: 1.6,
};

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(380px,1fr))",
  gap: "18px",
};

const card = {
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: "22px",
  padding: "22px",
  display: "grid",
  gap: "16px",
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
  fontWeight: "800",
  textTransform: "uppercase",
  letterSpacing: "0.08em",
};

const levelBadge = {
  background: "rgba(255,255,255,0.03)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: "999px",
  padding: "8px 12px",
  fontSize: "12px",
  fontWeight: "700",
};

const cardTitle = {
  fontSize: "28px",
  fontWeight: "800",
  margin: 0,
  lineHeight: 1.1,
};

const cardGoal = {
  color: "rgba(255,255,255,0.85)",
  lineHeight: 1.7,
  margin: 0,
  fontWeight: "600",
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

const weekGrid = {
  display: "grid",
  gap: "10px",
};

const dayCard = {
  background: "rgba(255,255,255,0.03)",
  border: "1px solid rgba(255,255,255,0.06)",
  borderRadius: "14px",
  padding: "12px 14px",
  color: "rgba(255,255,255,0.8)",
  lineHeight: 1.6,
};

const legacyDayText = {
  fontWeight: "600",
};

const previewWorkoutCard = {
  display: "grid",
  gap: "6px",
};

const previewDayLabel = {
  fontSize: "11px",
  textTransform: "uppercase",
  letterSpacing: "0.12em",
  color: "rgba(255,255,255,0.45)",
};

const previewWorkoutTitle = {
  fontSize: "16px",
  fontWeight: "800",
};

const previewWorkoutFocus = {
  fontSize: "13px",
  color: "rgba(255,255,255,0.7)",
};

const previewTypePill = {
  width: "fit-content",
  padding: "4px 10px",
  borderRadius: "999px",
  background: "rgba(255,255,255,0.08)",
  fontSize: "12px",
  fontWeight: "700",
  textTransform: "capitalize",
};

const previewExerciseCount = {
  fontSize: "12px",
  color: "rgba(255,255,255,0.6)",
};

const tipsGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
  gap: "12px",
};

const tipCard = {
  background: "rgba(255,255,255,0.03)",
  border: "1px solid rgba(255,255,255,0.06)",
  borderRadius: "16px",
  padding: "14px",
};

const tipText = {
  color: "rgba(255,255,255,0.72)",
  lineHeight: 1.7,
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
  fontWeight: "800",
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
  fontWeight: "800",
  cursor: "pointer",
  border: "1px solid rgba(255,255,255,0.12)",
  background: "rgba(255,255,255,0.03)",
  color: "white",
};
