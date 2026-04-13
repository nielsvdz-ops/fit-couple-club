export const dynamic = "force-dynamic";

import { redirect } from "next/navigation";
import DashboardLayout from "../../components/DashboardLayout";
import { getCurrentUserAndProfile } from "../../lib/getProfile";
import { canAccessPremiumPages } from "../../lib/access";

const programs = [
  {
    title: "30-Day Lean Reset",
    category: "Fat Loss",
    level: "Beginner",
    duration: "4 weeks",
    schedule: "4 training days / week",
    equipment: "Gym or home dumbbells",
    goal: "Lose fat, rebuild routine, improve consistency",
    idealFor: "Members who want a clean reset and a structured starting point",
    result:
      "Best for creating momentum, better eating habits, and early visible body composition changes.",
    includes: [
      "4 weekly workouts",
      "Walking / cardio targets",
      "Simple nutrition habits",
      "Weekly structure and progression",
    ],
  },
  {
    title: "Lean Muscle Blueprint",
    category: "Muscle Gain",
    level: "Intermediate",
    duration: "8 weeks",
    schedule: "5 training days / week",
    equipment: "Full gym",
    goal: "Build lean muscle without sloppy bulking",
    idealFor: "Members who want more size, better shape, and stronger performance",
    result:
      "Focused on progressive overload, balanced hypertrophy, and enough volume for visible growth.",
    includes: [
      "Push / pull / legs structure",
      "Upper-body hypertrophy work",
      "Lower-body strength support",
      "Progress tracking focus",
    ],
  },
  {
    title: "Build Curves / Booty Builder",
    category: "Glutes & Legs",
    level: "Beginner to Intermediate",
    duration: "8 weeks",
    schedule: "4 training days / week",
    equipment: "Gym preferred",
    goal: "Grow glutes, shape legs, and improve lower-body development",
    idealFor: "Members wanting stronger glutes, better lower-body shape, and cleaner form",
    result:
      "Heavy glute emphasis with enough frequency and smart accessory work to drive real progress.",
    includes: [
      "2 glute-heavy lower days",
      "1 quad / hamstring support day",
      "1 upper-body balance day",
      "Progressive overload focus",
    ],
  },
  {
    title: "Couple Transformation Challenge",
    category: "Couples",
    level: "All levels",
    duration: "6 weeks",
    schedule: "4 shared training days / week",
    equipment: "Gym or home",
    goal: "Stay accountable together and improve consistency as a team",
    idealFor: "Couples who want structure, shared check-ins, and better discipline together",
    result:
      "Designed to build momentum, consistency, and a stronger shared routine instead of random workouts.",
    includes: [
      "Partner accountability structure",
      "Shared weekly targets",
      "Training split for 2 people",
      "Challenge-style progression",
    ],
  },
  {
    title: "At-Home Shred Plan",
    category: "Fat Loss",
    level: "Beginner to Intermediate",
    duration: "6 weeks",
    schedule: "5 training days / week",
    equipment: "Bodyweight + dumbbells",
    goal: "Burn fat and stay consistent without needing a full gym",
    idealFor: "Busy members training from home",
    result:
      "High consistency, moderate intensity, and easy-to-follow sessions that fit real schedules.",
    includes: [
      "Short home sessions",
      "Bodyweight conditioning",
      "Core work",
      "Optional dumbbell progressions",
    ],
  },
  {
    title: "Beginner Strength Base",
    category: "Strength",
    level: "Beginner",
    duration: "8 weeks",
    schedule: "3 training days / week",
    equipment: "Gym preferred",
    goal: "Build strength, confidence, and proper exercise foundations",
    idealFor: "New members who want a structured introduction to lifting",
    result:
      "Teaches foundational movement patterns while building strength safely and progressively.",
    includes: [
      "Full-body structure",
      "Core compound lifts",
      "Technique and consistency focus",
      "Simple progression system",
    ],
  },
  {
    title: "Upper Body Shape Builder",
    category: "Upper Body",
    level: "Intermediate",
    duration: "6 weeks",
    schedule: "4 training days / week",
    equipment: "Gym or dumbbells",
    goal: "Build shoulders, back, arms, and upper-body shape",
    idealFor: "Members who want a more athletic upper body and better balance",
    result:
      "Extra upper-body volume for visible shape, posture, and definition improvements.",
    includes: [
      "Back and shoulder emphasis",
      "Arm finishers",
      "Posture-focused work",
      "Balanced lower-body maintenance",
    ],
  },
  {
    title: "Summer Shred Accelerator",
    category: "Fat Loss",
    level: "Intermediate",
    duration: "6 weeks",
    schedule: "5 training days / week",
    equipment: "Gym",
    goal: "Get leaner faster while keeping muscle",
    idealFor: "Members already training consistently who want a sharper cut phase",
    result:
      "Combines lifting, strategic cardio, and structure to drive a harder visual transformation phase.",
    includes: [
      "Fat-loss split",
      "Cardio targets",
      "Ab finishers",
      "Recovery and intensity balance",
    ],
  },
  {
    title: "Glute & Core Sculpt",
    category: "Glutes & Legs",
    level: "Beginner to Intermediate",
    duration: "6 weeks",
    schedule: "4 training days / week",
    equipment: "Gym or home dumbbells",
    goal: "Improve glute shape, waistline support, and lower-body tone",
    idealFor: "Members wanting a more sculpted look with glute and core focus",
    result:
      "Pairs smart glute training with core stability and controlled volume for a cleaner body-shaping plan.",
    includes: [
      "Glute priority sessions",
      "Core circuits",
      "Lower-body accessory work",
      "Recovery-friendly weekly structure",
    ],
  },
  {
    title: "Athletic Performance Builder",
    category: "Athletic",
    level: "Intermediate to Advanced",
    duration: "8 weeks",
    schedule: "5 training days / week",
    equipment: "Full gym",
    goal: "Improve power, conditioning, movement quality, and athleticism",
    idealFor: "Members who want to look fit and perform better",
    result:
      "Blends strength, explosive work, and conditioning for a more complete athletic body.",
    includes: [
      "Strength sessions",
      "Explosive drills",
      "Conditioning work",
      "Mobility support",
    ],
  },
  {
    title: "Busy Schedule Body Recomp",
    category: "Recomp",
    level: "All levels",
    duration: "8 weeks",
    schedule: "3 training days / week",
    equipment: "Gym or home",
    goal: "Build muscle and lose fat with minimal weekly time",
    idealFor: "Members with limited time who still want visible progress",
    result:
      "A realistic recomposition option for people who cannot train 5–6 times per week.",
    includes: [
      "3 efficient sessions weekly",
      "Low-time commitment structure",
      "Body recomposition focus",
      "Recovery-friendly design",
    ],
  },
  {
    title: "Confidence Starter Program",
    category: "Starter",
    level: "Beginner",
    duration: "4 weeks",
    schedule: "3 training days / week",
    equipment: "Home or gym",
    goal: "Create confidence, habit consistency, and beginner momentum",
    idealFor: "New members who feel overwhelmed and need a simple entry point",
    result:
      "A low-pressure starting program designed to get members moving and staying on track.",
    includes: [
      "Simple workouts",
      "Low intimidation structure",
      "Habit-building approach",
      "Clear weekly wins",
    ],
  },
];

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
      subtitle="Premium and VIP members get access to structured transformation programs with clear goals, training splits, and real use-case guidance."
      membershipType={profile?.membership_type}
    >
      <div style={pageWrap}>
        <section style={heroCard}>
          <div style={eyebrow}>Premium Program Library</div>
          <h2 style={heroTitle}>Choose a program that matches your real goal</h2>
          <p style={heroText}>
            These programs are built to feel practical and usable, not vague.
            Members can compare durations, difficulty, equipment needs, and
            expected outcomes before choosing a path.
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
            <article key={program.title} style={card}>
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

              <div style={ctaRow}>
                <button style={primaryButton}>View Program</button>
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
  gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
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

const ctaRow = {
  display: "flex",
  gap: "10px",
  flexWrap: "wrap",
  marginTop: "4px",
};

const primaryButton = {
  border: "none",
  borderRadius: "14px",
  padding: "12px 16px",
  fontWeight: "800",
  cursor: "pointer",
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
