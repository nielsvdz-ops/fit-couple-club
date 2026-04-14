export const dynamic = "force-dynamic";

import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import DashboardLayout from "../../../components/DashboardLayout";
import { getCurrentUserAndProfile } from "../../../lib/getProfile";
import { canAccessPremiumPages } from "../../../lib/access";
import { getProgramBySlug, programs } from "../../../lib/programsData";

export async function generateStaticParams() {
  return programs.map((program) => ({
    slug: program.slug,
  }));
}

export default async function ProgramDetailPage({ params }) {
  const { user, profile } = await getCurrentUserAndProfile();

  if (!user) redirect("/login");
  if (!canAccessPremiumPages(profile)) redirect("/pricing");

  const program = getProgramBySlug(params.slug);

  if (!program) notFound();

  return (
    <DashboardLayout
      title={program.title}
      subtitle={program.goal}
      membershipType={profile?.membership_type}
    >
      <div style={pageWrap}>
        <Link href="/programs" style={backLink}>
          ← Back to programs
        </Link>

        <section style={heroCard}>
          <div style={heroTop}>
            <div style={badge}>{program.category}</div>
            <div style={levelBadge}>{program.level}</div>
          </div>

          <h1 style={heroTitle}>{program.title}</h1>
          <p style={heroText}>{program.heroSummary}</p>

          <div style={heroMediaWrap}>
            {program.heroGif ? (
              <img
                src={program.heroGif}
                alt={`${program.title} preview`}
                style={heroGif}
              />
            ) : (
              <div style={heroGifPlaceholder}>
                Add an AI GIF or motion preview here for {program.title}
              </div>
            )}
          </div>

          <div style={metaGrid}>
            <div style={metaCard}>
              <div style={metaLabel}>Duration</div>
              <div style={metaValue}>{program.duration}</div>
            </div>
            <div style={metaCard}>
              <div style={metaLabel}>Schedule</div>
              <div style={metaValue}>{program.schedule}</div>
            </div>
            <div style={metaCard}>
              <div style={metaLabel}>Equipment</div>
              <div style={metaValue}>{program.equipment}</div>
            </div>
            <div style={metaCard}>
              <div style={metaLabel}>Ideal for</div>
              <div style={metaValue}>{program.idealFor}</div>
            </div>
          </div>
        </section>

        <section style={twoColGrid}>
          <div style={sectionCard}>
            <div style={sectionEyebrow}>Program result</div>
            <h2 style={sectionTitle}>What this program is built to do</h2>
            <p style={bodyText}>{program.result}</p>
          </div>

          <div style={sectionCard}>
            <div style={sectionEyebrow}>What’s inside</div>
            <h2 style={sectionTitle}>Program structure</h2>
            <ul style={list}>
              {program.includes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        <section style={sectionCard}>
          <div style={sectionEyebrow}>How to use this program</div>
          <h2 style={sectionTitle}>Step by step</h2>

          <div style={stepsGrid}>
            <div style={stepCard}>
              <div style={stepNumber}>Step 1</div>
              <div style={stepText}>
                Read the full overview first so you understand the goal, duration,
                and weekly structure.
              </div>
            </div>

            <div style={stepCard}>
              <div style={stepNumber}>Step 2</div>
              <div style={stepText}>
                Follow the weekly roadmap in order instead of mixing random weeks
                or days together.
              </div>
            </div>

            <div style={stepCard}>
              <div style={stepNumber}>Step 3</div>
              <div style={stepText}>
                Use the weekly schedule as your training structure and track
                consistency before increasing intensity.
              </div>
            </div>

            <div style={stepCard}>
              <div style={stepNumber}>Step 4</div>
              <div style={stepText}>
                Use the cardio and recovery guidance to support results without
                burning yourself out.
              </div>
            </div>
          </div>
        </section>

        <section style={sectionCard}>
          <div style={sectionEyebrow}>Training split</div>
          <h2 style={sectionTitle}>How the week is organized</h2>

          <div style={pillGrid}>
            {program.trainingSplit.map((item) => (
              <div key={item} style={pill}>
                {item}
              </div>
            ))}
          </div>
        </section>

        <section style={sectionCard}>
          <div style={sectionEyebrow}>Weekly roadmap</div>
          <h2 style={sectionTitle}>Week-by-week structure</h2>

          <div style={weeksGrid}>
            {program.weeklyPlan.map((weekBlock) => (
              <div key={weekBlock.week} style={weekCard}>
                <div style={weekHeader}>
                  <div>
                    <div style={weekLabel}>{weekBlock.week}</div>
                    <div style={weekTitle}>{weekBlock.focus}</div>
                  </div>
                </div>

                <p style={bodyText}>{weekBlock.notes}</p>

                <div style={miniLabel}>Weekly schedule</div>
                <div style={daysGrid}>
                  {weekBlock.days.map((day) => (
                    <div key={day} style={dayCard}>
                      {day}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section style={twoColGrid}>
          <div style={sectionCard}>
            <div style={sectionEyebrow}>Cardio guidance</div>
            <h2 style={sectionTitle}>How to support the training</h2>
            <p style={bodyText}>{program.cardioGuidance}</p>
          </div>

          <div style={sectionCard}>
            <div style={sectionEyebrow}>Recovery guidance</div>
            <h2 style={sectionTitle}>How to recover properly</h2>
            <p style={bodyText}>{program.recoveryGuidance}</p>
          </div>
        </section>

        <section style={ctaCard}>
          <div style={sectionEyebrow}>Next level upgrade</div>
          <h2 style={sectionTitle}>Connect each day to your workout library</h2>
          <p style={bodyText}>
            The strongest next step is linking every day inside the weekly schedule
            to the exact workout page, video, or exercise library already inside
            your platform.
          </p>
        </section>
      </div>
    </DashboardLayout>
  );
}

const pageWrap = {
  display: "grid",
  gap: "22px",
};

const backLink = {
  color: "white",
  textDecoration: "none",
  fontWeight: "700",
  opacity: 0.85,
};

const heroCard = {
  background:
    "linear-gradient(180deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.03) 100%)",
  border: "1px solid rgba(255,255,255,0.09)",
  borderRadius: "24px",
  padding: "28px",
};

const heroTop = {
  display: "flex",
  gap: "10px",
  flexWrap: "wrap",
  marginBottom: "14px",
};

const badge = {
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

const heroTitle = {
  margin: 0,
  fontSize: "clamp(30px, 4vw, 46px)",
  fontWeight: "800",
  lineHeight: 1.06,
};

const heroText = {
  color: "rgba(255,255,255,0.74)",
  lineHeight: 1.8,
  marginTop: "12px",
  maxWidth: "900px",
};

const heroMediaWrap = {
  marginTop: "18px",
};

const heroGif = {
  width: "100%",
  borderRadius: "22px",
  border: "1px solid rgba(255,255,255,0.08)",
  display: "block",
  maxHeight: "440px",
  objectFit: "cover",
};

const heroGifPlaceholder = {
  width: "100%",
  minHeight: "260px",
  borderRadius: "22px",
  border: "1px dashed rgba(255,255,255,0.16)",
  background: "rgba(255,255,255,0.03)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "rgba(255,255,255,0.58)",
  fontWeight: "700",
  textAlign: "center",
  padding: "24px",
};

const metaGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
  gap: "14px",
  marginTop: "20px",
};

const metaCard = {
  background: "rgba(255,255,255,0.03)",
  border: "1px solid rgba(255,255,255,0.06)",
  borderRadius: "16px",
  padding: "16px",
};

const metaLabel = {
  fontSize: "11px",
  textTransform: "uppercase",
  letterSpacing: "0.12em",
  color: "rgba(255,255,255,0.45)",
  marginBottom: "6px",
};

const metaValue = {
  color: "rgba(255,255,255,0.84)",
  lineHeight: 1.7,
  fontWeight: "600",
};

const twoColGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
  gap: "22px",
};

const sectionCard = {
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: "22px",
  padding: "24px",
};

const ctaCard = {
  background: "rgba(255,255,255,0.03)",
  border: "1px dashed rgba(255,255,255,0.16)",
  borderRadius: "22px",
  padding: "24px",
};

const sectionEyebrow = {
  fontSize: "12px",
  textTransform: "uppercase",
  letterSpacing: "0.16em",
  color: "rgba(255,255,255,0.45)",
  marginBottom: "8px",
};

const sectionTitle = {
  margin: 0,
  fontSize: "28px",
  fontWeight: "800",
  lineHeight: 1.12,
};

const bodyText = {
  color: "rgba(255,255,255,0.72)",
  lineHeight: 1.8,
};

const list = {
  paddingLeft: "18px",
  margin: 0,
  color: "rgba(255,255,255,0.74)",
  lineHeight: 1.85,
};

const stepsGrid = {
  display: "grid",
  gap: "14px",
  marginTop: "16px",
};

const stepCard = {
  background: "rgba(255,255,255,0.03)",
  border: "1px solid rgba(255,255,255,0.06)",
  borderRadius: "18px",
  padding: "16px",
};

const stepNumber = {
  fontSize: "12px",
  textTransform: "uppercase",
  letterSpacing: "0.12em",
  color: "rgba(255,255,255,0.45)",
  marginBottom: "8px",
  fontWeight: "800",
};

const stepText = {
  color: "rgba(255,255,255,0.82)",
  lineHeight: 1.7,
  fontWeight: "600",
};

const pillGrid = {
  display: "flex",
  gap: "10px",
  flexWrap: "wrap",
  marginTop: "16px",
};

const pill = {
  padding: "10px 14px",
  borderRadius: "999px",
  border: "1px solid rgba(255,255,255,0.1)",
  background: "rgba(255,255,255,0.04)",
  fontWeight: "700",
  fontSize: "14px",
};

const weeksGrid = {
  display: "grid",
  gap: "18px",
  marginTop: "18px",
};

const weekCard = {
  background: "rgba(255,255,255,0.03)",
  border: "1px solid rgba(255,255,255,0.06)",
  borderRadius: "18px",
  padding: "18px",
};

const weekHeader = {
  display: "flex",
  justifyContent: "space-between",
  gap: "12px",
  alignItems: "center",
  flexWrap: "wrap",
  marginBottom: "10px",
};

const weekLabel = {
  fontSize: "12px",
  textTransform: "uppercase",
  letterSpacing: "0.12em",
  color: "rgba(255,255,255,0.45)",
  marginBottom: "6px",
};

const weekTitle = {
  fontSize: "22px",
  fontWeight: "800",
};

const miniLabel = {
  fontSize: "11px",
  textTransform: "uppercase",
  letterSpacing: "0.12em",
  color: "rgba(255,255,255,0.45)",
  marginTop: "14px",
  marginBottom: "8px",
};

const daysGrid = {
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
