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
    idealFor:
      "Members who want a clean reset and a structured starting point.",
    result:
      "Best for creating momentum, better eating habits, and early visible body composition changes.",
    includes: [
      "4 weekly workouts",
      "Walking / cardio targets",
      "Simple nutrition habits",
      "Weekly structure and progression",
    ],
    trainingSplit: [
      "2 full-body strength sessions",
      "1 lower-body shaping day",
      "1 upper-body + cardio finisher day",
      "Daily steps target",
    ],
    weeklyFocus: [
      "Week 1 — Build routine and movement quality",
      "Week 2 — Improve consistency and recovery habits",
      "Week 3 — Add small progression in reps or load",
      "Week 4 — Finish strong with full adherence",
    ],
    sampleWeek: [
      "Day 1 — Full Body Strength A",
      "Day 2 — Incline walk + abs",
      "Day 3 — Lower Body + glutes",
      "Day 4 — Rest / 8k–10k steps",
      "Day 5 — Upper Body + cardio finisher",
      "Day 6 — Full Body Conditioning",
      "Day 7 — Recovery walk + mobility",
    ],
    cardio:
      "Aim for 8k–10k steps daily plus 2 structured cardio sessions each week.",
    recovery:
      "Prioritize sleep, hydration, and staying consistent instead of trying to be perfect.",
  },
  {
    title: "Lean Muscle Blueprint",
    category: "Muscle Gain",
    level: "Intermediate",
    duration: "8 weeks",
    schedule: "5 training days / week",
    equipment: "Full gym",
    goal: "Build lean muscle without sloppy bulking",
    idealFor:
      "Members who want more size, better shape, and stronger performance.",
    result:
      "Focused on progressive overload, balanced hypertrophy, and enough volume for visible growth.",
    includes: [
      "Push / pull / legs structure",
      "Upper-body hypertrophy work",
      "Lower-body strength support",
      "Progress tracking focus",
    ],
    trainingSplit: [
      "Push hypertrophy",
      "Lower-body strength",
      "Pull hypertrophy",
      "Leg hypertrophy",
      "Upper pump / accessories",
    ],
    weeklyFocus: [
      "Weeks 1–2 — Establish baseline loads and form",
      "Weeks 3–4 — Progressive overload phase",
      "Weeks 5–6 — Higher effort working sets",
      "Weeks 7–8 — Final growth push",
    ],
    sampleWeek: [
      "Day 1 — Push hypertrophy",
      "Day 2 — Lower strength",
      "Day 3 — Pull hypertrophy",
      "Day 4 — Rest / light cardio",
      "Day 5 — Legs hypertrophy",
      "Day 6 — Upper pump / arms / delts",
      "Day 7 — Rest",
    ],
    cardio:
      "Keep cardio light to moderate, 1–2 sessions weekly, so recovery stays strong.",
    recovery:
      "Track lifts, keep food intake consistent, and avoid adding random junk volume.",
  },
  {
    title: "Build Curves / Booty Builder",
    category: "Glutes & Legs",
    level: "Beginner to Intermediate",
    duration: "8 weeks",
    schedule: "4 training days / week",
    equipment: "Gym preferred",
    goal: "Grow glutes, shape legs, and improve lower-body development",
    idealFor:
      "Members wanting stronger glutes, better lower-body shape, and cleaner form.",
    result:
      "Heavy glute emphasis with enough frequency and smart accessory work to drive real progress.",
    includes: [
      "2 glute-heavy lower days",
      "1 quad / hamstring support day",
      "1 upper-body balance day",
      "Progressive overload focus",
    ],
    trainingSplit: [
      "Glute strength day",
      "Upper-body balance day",
      "Glute hypertrophy day",
      "Hamstrings + quads day",
    ],
    weeklyFocus: [
      "Weeks 1–2 — Form, activation, setup",
      "Weeks 3–4 — Volume progression",
      "Weeks 5–6 — Load progression",
      "Weeks 7–8 — Stronger peak effort phase",
    ],
    sampleWeek: [
      "Day 1 — Glute strength",
      "Day 2 — Upper body balance",
      "Day 3 — Rest / walking",
      "Day 4 — Glute hypertrophy",
      "Day 5 — Hamstrings + quads",
      "Day 6 — Rest / mobility",
      "Day 7 — Optional steps + recovery",
    ],
    cardio:
      "Keep cardio moderate so recovery and glute performance stay high.",
    recovery:
      "Best results come from strong form, stable nutrition, and enough rest between lower-body sessions.",
  },
  {
    title: "Couple Transformation Challenge",
    category: "Couples",
    level: "All levels",
    duration: "6 weeks",
    schedule: "4 shared training days / week",
    equipment: "Gym or home",
    goal: "Stay accountable together and improve consistency as a team",
    idealFor:
      "Couples who want structure, shared check-ins, and better discipline together.",
    result:
      "Designed to build momentum, consistency, and a stronger shared routine instead of random workouts.",
    includes: [
      "Partner accountability structure",
      "Shared weekly targets",
      "Training split for 2 people",
      "Challenge-style progression",
    ],
    trainingSplit: [
      "2 shared strength sessions",
      "1 lower-body + core day",
      "1 challenge / conditioning day",
      "Weekly partner check-in",
    ],
    weeklyFocus: [
      "Weeks 1–2 — Build routine together",
      "Weeks 3–4 — Improve consistency and effort",
      "Weeks 5–6 — Finish strong without burnout",
    ],
    sampleWeek: [
      "Day 1 — Shared full body strength",
      "Day 2 — Walk / mobility / check-in",
      "Day 3 — Lower body + core",
      "Day 4 — Rest",
      "Day 5 — Upper body + conditioning",
      "Day 6 — Shared challenge session",
      "Day 7 — Recovery walk",
    ],
    cardio:
      "Use shared walks and simple movement goals to keep compliance high.",
    recovery:
      "The goal is sustainability and teamwork, not turning it into an all-or-nothing challenge.",
  },
  {
    title: "At-Home Shred Plan",
    category: "Fat Loss",
    level: "Beginner to Intermediate",
    duration: "6 weeks",
    schedule: "5 training days / week",
    equipment: "Bodyweight + dumbbells",
    goal: "Burn fat and stay consistent without needing a full gym",
    idealFor: "Busy members training from home.",
    result:
      "High consistency, moderate intensity, and easy-to-follow sessions that fit real schedules.",
    includes: [
      "Short home sessions",
      "Bodyweight conditioning",
      "Core work",
      "Optional dumbbell progressions",
    ],
    trainingSplit: [
      "3 resistance sessions",
      "2 conditioning sessions",
      "Daily movement goal",
    ],
    weeklyFocus: [
      "Weeks 1–2 — Build home training rhythm",
      "Weeks 3–4 — Add density and control",
      "Weeks 5–6 — Increase pace and intensity",
    ],
    sampleWeek: [
      "Day 1 — Full body dumbbell circuit",
      "Day 2 — Core + bodyweight conditioning",
      "Day 3 — Lower body home workout",
      "Day 4 — Rest / steps",
      "Day 5 — Upper body dumbbells",
      "Day 6 — Conditioning finisher",
      "Day 7 — Recovery walk",
    ],
    cardio:
      "Aim for 8k–12k daily steps and 2 dedicated conditioning workouts.",
    recovery:
      "Keep sessions short and repeatable so home training feels sustainable.",
  },
  {
    title: "Beginner Strength Base",
    category: "Strength",
    level: "Beginner",
    duration: "8 weeks",
    schedule: "3 training days / week",
    equipment: "Gym preferred",
    goal: "Build strength, confidence, and proper exercise foundations",
    idealFor:
      "New members who want a structured introduction to lifting.",
    result:
      "Teaches foundational movement patterns while building strength safely and progressively.",
    includes: [
      "Full-body structure",
      "Core compound lifts",
      "Technique and consistency focus",
      "Simple progression system",
    ],
    trainingSplit: [
      "3 full-body strength sessions",
      "Compound lift priority",
      "Technique-first progression",
    ],
    weeklyFocus: [
      "Weeks 1–2 — Learn movement patterns",
      "Weeks 3–4 — Build confidence under load",
      "Weeks 5–6 — Controlled progressive overload",
      "Weeks 7–8 — Stronger base and cleaner execution",
    ],
    sampleWeek: [
      "Day 1 — Full Body A",
      "Day 2 — Rest / light walking",
      "Day 3 — Full Body B",
      "Day 4 — Rest",
      "Day 5 — Full Body C",
      "Day 6 — Optional recovery walk",
      "Day 7 — Rest",
    ],
    cardio:
      "Keep cardio low to moderate so strength progress is not compromised.",
    recovery:
      "Focus on technique quality, rest between sets, and leaving the gym feeling capable, not destroyed.",
  },
  {
    title: "Upper Body Shape Builder",
    category: "Upper Body",
    level: "Intermediate",
    duration: "6 weeks",
    schedule: "4 training days / week",
    equipment: "Gym or dumbbells",
    goal: "Build shoulders, back, arms, and upper-body shape",
    idealFor:
      "Members who want a more athletic upper body and better balance.",
    result:
      "Extra upper-body volume for visible shape, posture, and definition improvements.",
    includes: [
      "Back and shoulder emphasis",
      "Arm finishers",
      "Posture-focused work",
      "Balanced lower-body maintenance",
    ],
    trainingSplit: [
      "Push-focused upper day",
      "Pull-focused upper day",
      "Shoulders + arms volume day",
      "Lower-body maintenance day",
    ],
    weeklyFocus: [
      "Weeks 1–2 — Build base volume",
      "Weeks 3–4 — Increase effort and control",
      "Weeks 5–6 — Push shape-focused overload",
    ],
    sampleWeek: [
      "Day 1 — Push upper body",
      "Day 2 — Pull upper body",
      "Day 3 — Rest / mobility",
      "Day 4 — Shoulders + arms",
      "Day 5 — Lower-body maintenance",
      "Day 6 — Optional cardio",
      "Day 7 — Rest",
    ],
    cardio:
      "Use 1–2 light cardio sessions weekly to support recovery and body composition.",
    recovery:
      "Shoulders and elbows need smart volume management, so quality reps matter more than junk sets.",
  },
  {
    title: "Summer Shred Accelerator",
    category: "Fat Loss",
    level: "Intermediate",
    duration: "6 weeks",
    schedule: "5 training days / week",
    equipment: "Gym",
    goal: "Get leaner faster while keeping muscle",
    idealFor:
      "Members already training consistently who want a sharper cut phase.",
    result:
      "Combines lifting, strategic cardio, and structure to drive a harder visual transformation phase.",
    includes: [
      "Fat-loss split",
      "Cardio targets",
      "Ab finishers",
      "Recovery and intensity balance",
    ],
    trainingSplit: [
      "4 resistance sessions",
      "1 conditioning-focused day",
      "Higher activity targets",
    ],
    weeklyFocus: [
      "Weeks 1–2 — Lock in routine and food adherence",
      "Weeks 3–4 — Increase output carefully",
      "Weeks 5–6 — Final cut-phase push",
    ],
    sampleWeek: [
      "Day 1 — Upper body strength",
      "Day 2 — Lower body strength",
      "Day 3 — Cardio + abs",
      "Day 4 — Upper hypertrophy",
      "Day 5 — Lower hypertrophy",
      "Day 6 — Conditioning / long walk",
      "Day 7 — Recovery",
    ],
    cardio:
      "Use 2–3 cardio sessions and aggressive daily step consistency during the 6-week phase.",
    recovery:
      "Because output is higher, recovery needs to stay deliberate or performance will crash.",
  },
  {
    title: "Glute & Core Sculpt",
    category: "Glutes & Legs",
    level: "Beginner to Intermediate",
    duration: "6 weeks",
    schedule: "4 training days / week",
    equipment: "Gym or home dumbbells",
    goal: "Improve glute shape, waistline support, and lower-body tone",
    idealFor:
      "Members wanting a more sculpted look with glute and core focus.",
    result:
      "Pairs smart glute training with core stability and controlled volume for a cleaner body-shaping plan.",
    includes: [
      "Glute priority sessions",
      "Core circuits",
      "Lower-body accessory work",
      "Recovery-friendly weekly structure",
    ],
    trainingSplit: [
      "2 glute-focused sessions",
      "1 core + conditioning day",
      "1 lower-body support day",
    ],
    weeklyFocus: [
      "Weeks 1–2 — Activation and routine",
      "Weeks 3–4 — Shape-focused volume",
      "Weeks 5–6 — Stronger effort and control",
    ],
    sampleWeek: [
      "Day 1 — Glutes + core",
      "Day 2 — Upper / posture support",
      "Day 3 — Rest / walking",
      "Day 4 — Glute hypertrophy",
      "Day 5 — Lower accessory + core circuits",
      "Day 6 — Recovery / mobility",
      "Day 7 — Optional steps",
    ],
    cardio:
      "Keep cardio moderate and use steps to support fat loss without hurting lower-body recovery.",
    recovery:
      "Consistency, clean reps, and stable effort matter more than chasing exhaustion.",
  },
  {
    title: "Athletic Performance Builder",
    category: "Athletic",
    level: "Intermediate to Advanced",
    duration: "8 weeks",
    schedule: "5 training days / week",
    equipment: "Full gym",
    goal: "Improve power, conditioning, movement quality, and athleticism",
    idealFor: "Members who want to look fit and perform better.",
    result:
      "Blends strength, explosive work, and conditioning for a more complete athletic body.",
    includes: [
      "Strength sessions",
      "Explosive drills",
      "Conditioning work",
      "Mobility support",
    ],
    trainingSplit: [
      "2 strength sessions",
      "2 athletic movement / explosive sessions",
      "1 conditioning-focused session",
    ],
    weeklyFocus: [
      "Weeks 1–2 — Movement quality and base conditioning",
      "Weeks 3–4 — Add speed and power emphasis",
      "Weeks 5–6 — Higher athletic output",
      "Weeks 7–8 — Strong finish with quality execution",
    ],
    sampleWeek: [
      "Day 1 — Lower strength + jumps",
      "Day 2 — Upper strength + throws",
      "Day 3 — Conditioning intervals",
      "Day 4 — Mobility / recovery",
      "Day 5 — Athletic lower day",
      "Day 6 — Athletic upper + core",
      "Day 7 — Rest",
    ],
    cardio:
      "Conditioning is already part of the program, so avoid stacking random extra fatigue.",
    recovery:
      "Sleep, warm-up quality, and joint care are essential because this plan is more demanding.",
  },
  {
    title: "Busy Schedule Body Recomp",
    category: "Recomp",
    level: "All levels",
    duration: "8 weeks",
    schedule: "3 training days / week",
    equipment: "Gym or home",
    goal: "Build muscle and lose fat with minimal weekly time",
    idealFor:
      "Members with limited time who still want visible progress.",
    result:
      "A realistic recomposition option for people who cannot train 5–6 times per week.",
    includes: [
      "3 efficient sessions weekly",
      "Low-time commitment structure",
      "Body recomposition focus",
      "Recovery-friendly design",
    ],
    trainingSplit: [
      "3 efficient full-body sessions",
      "Optional low-intensity cardio",
      "Minimal but effective weekly structure",
    ],
    weeklyFocus: [
      "Weeks 1–2 — Efficient routine setup",
      "Weeks 3–4 — Build progression",
      "Weeks 5–6 — Higher quality training effort",
      "Weeks 7–8 — Finish with consistency",
    ],
    sampleWeek: [
      "Day 1 — Full Body A",
      "Day 2 — Rest / steps",
      "Day 3 — Full Body B",
      "Day 4 — Rest / mobility",
      "Day 5 — Full Body C",
      "Day 6 — Optional cardio",
      "Day 7 — Recovery",
    ],
    cardio:
      "Use steps and 1 optional cardio session weekly to support body recomposition.",
    recovery:
      "This plan wins through adherence, not through doing too much.",
  },
  {
    title: "Confidence Starter Program",
    category: "Starter",
    level: "Beginner",
    duration: "4 weeks",
    schedule: "3 training days / week",
    equipment: "Home or gym",
    goal: "Create confidence, habit consistency, and beginner momentum",
    idealFor:
      "New members who feel overwhelmed and need a simple entry point.",
    result:
      "A low-pressure starting program designed to get members moving and staying on track.",
    includes: [
      "Simple workouts",
      "Low intimidation structure",
      "Habit-building approach",
      "Clear weekly wins",
    ],
    trainingSplit: [
      "3 beginner-friendly sessions",
      "Walking and mobility support",
      "Low-pressure progression",
    ],
    weeklyFocus: [
      "Week 1 — Get moving",
      "Week 2 — Improve comfort and routine",
      "Week 3 — Build confidence",
      "Week 4 — Finish with momentum",
    ],
    sampleWeek: [
      "Day 1 — Full body basics",
      "Day 2 — Walk + light stretch",
      "Day 3 — Lower body basics",
      "Day 4 — Rest",
      "Day 5 — Upper body basics",
      "Day 6 — Optional walk",
      "Day 7 — Recovery",
    ],
    cardio:
      "Keep cardio light and use walking to build consistency without overwhelm.",
    recovery:
      "The best recovery strategy is staying calm, staying consistent, and not quitting after imperfect days.",
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
      subtitle="Premium and VIP members get access to structured transformation programs with clear goals, training splits, weekly structure, and real use-case guidance."
      membershipType={profile?.membership_type}
    >
      <div style={pageWrap}>
        <section style={heroCard}>
          <div style={eyebrow}>Premium Program Library</div>
          <h2 style={heroTitle}>Choose a program that matches your real goal</h2>
          <p style={heroText}>
            These programs are built to feel practical and usable, not vague.
            Members can compare durations, difficulty, equipment needs, training
            split, and expected outcomes before choosing a path.
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
                  {program.weeklyFocus.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <div style={sectionBlock}>
                <div style={sectionLabel}>Sample week</div>
                <div style={weekGrid}>
                  {program.sampleWeek.map((day) => (
                    <div key={day} style={dayCard}>
                      {day}
                    </div>
                  ))}
                </div>
              </div>

              <div style={tipsGrid}>
                <div style={tipCard}>
                  <div style={metaLabel}>Cardio guidance</div>
                  <div style={tipText}>{program.cardio}</div>
                </div>
                <div style={tipCard}>
                  <div style={metaLabel}>Recovery guidance</div>
                  <div style={tipText}>{program.recovery}</div>
                </div>
              </div>

              <div style={ctaRow}>
                <button style={primaryButton}>Start Program</button>
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
  border: "none",
  borderRadius: "14px",
  padding: "12px 16px",
  fontWeight: "800",
  cursor: "pointer",
  background: "white",
  color: "#111",
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
