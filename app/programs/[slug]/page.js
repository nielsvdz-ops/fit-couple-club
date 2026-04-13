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

          <h2 style={heroTitle}>{program.title}</h2>
          <p style={heroText}>{program.heroSummary}</p>

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
            <h3 style={sectionTitle}>What this program is built to do</h3>
            <p style={bodyText}>{program.result}</p>
          </div>

          <div style={sectionCard}>
            <div style={sectionEyebrow}>What’s inside</div>
            <h3 style={sectionTitle}>Program structure</h3>
            <ul style={list}>
              {program.includes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        <section style={sectionCard}>
          <div style={sectionEyebrow}>Training split</div>
          <h3 style={sectionTitle}>How the week is organized</h3>
          <ul style={list}>
            {program.trainingSplit.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section style={sectionCard}>
          <div style={sectionEyebrow}>Weekly roadmap</div>
          <h3 style={sectionTitle}>Week-by-week structure</h3>

          <div style={weeksGrid}>
            {program.weeklyPlan.map((weekBlock) => (
              <div key={weekBlock.week} style={weekCard}>
                <div style={weekHeader}>
                  <div style={weekTitle}>{weekBlock.week}</div>
                  <div style={weekFocus}>{weekBlock.focus}</div>
                </div>

                <p style={bodyText}>{weekBlock.notes}</p>

                <div style={miniLabel}>Weekly schedule</div>
                <ul style={list}>
                  {weekBlock.days.map((day) => (
                    <li key={day}>{day}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section style={twoColGrid}>
          <div style={sectionCard}>
            <div style={sectionEyebrow}>Cardio guidance</div>
            <h3 style={sectionTitle}>How to support the training</h3>
            <p style={bodyText}>{program.cardioGuidance}</p>
          </div>

          <div style={sectionCard}>
            <div style={sectionEyebrow}>Recovery guidance</div>
            <h3 style={sectionTitle}>How to recover properly</h3>
            <p style={bodyText}>{program.recoveryGuidance}</p>
          </div>
        </section>

        <section style={ctaCard}>
          <div style={sectionEyebrow}>Next level upgrade</div>
          <h3 style={sectionTitle}>Connect this program to your workout pages</h3>
          <p style={bodyText}>
            The strongest next step is linking each day inside this program to
            the exact workout videos and exercise pages already inside your
            platform.
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

const weekTitle = {
  fontSize: "22px",
  fontWeight: "800",
};

const weekFocus = {
  background: "rgba(255,255,255,0.08)",
  borderRadius: "999px",
  padding: "8px 12px",
  fontWeight: "700",
  fontSize: "13px",
};

const miniLabel = {
  fontSize: "11px",
  textTransform: "uppercase",
  letterSpacing: "0.12em",
  color: "rgba(255,255,255,0.45)",
  marginTop: "14px",
  marginBottom: "8px",
};
