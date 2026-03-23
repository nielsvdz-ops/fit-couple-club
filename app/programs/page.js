import { redirect } from "next/navigation";
import { getUserAndSubscription } from "../../lib/getUser";
import DashboardLayout from "../../components/DashboardLayout";

export default async function DashboardPage() {
  const { user, subscription } = await getUserAndSubscription();

  // ❌ Not logged in
  if (!user) {
    redirect("/login");
  }

  // ❌ Not paid
  if (!subscription || subscription.status !== "active") {
    redirect("/pricing");
  }

  return (
    <div>
      <h1>Dashboard (Members only)</h1>
    </div>
  );
}
const programs = [
  {
    title: "30-Day Lean Reset",
    length: "4 weeks",
    outcome: "routine, consistency, cleaner eating, visible early momentum",
    weeks: [
      "Week 1 — build routine and reduce food chaos",
      "Week 2 — tighten nutrition and improve session completion",
      "Week 3 — push training quality and daily consistency",
      "Week 4 — lock in habits and compare progress metrics",
    ],
  },
  {
    title: "Build Curves / Booty Builder",
    length: "6 weeks",
    outcome: "lower body growth focus with glute-heavy training structure",
    weeks: [
      "Week 1–2 — establish movement quality and baseline strength",
      "Week 3–4 — progressive overload and glute volume increase",
      "Week 5–6 — improve execution, pump work, and performance tracking",
    ],
  },
  {
    title: "Couple Transformation Challenge",
    length: "4 weeks",
    outcome: "better accountability, shared discipline, stronger consistency together",
    weeks: [
      "Week 1 — agree on shared rules and commitments",
      "Week 2 — complete shared workouts and healthy meals",
      "Week 3 — improve accountability and couple check-ins",
      "Week 4 — compare progress and reset targets for next month",
    ],
  },
  {
    title: "Lean Muscle Blueprint",
    length: "8 weeks",
    outcome: "muscle gain with controlled nutrition and performance focus",
    weeks: [
      "Phase 1 — build consistent training and surplus structure",
      "Phase 2 — progressive overload and stronger recovery",
      "Phase 3 — keep momentum while monitoring body composition",
    ],
  },
];

export default function ProgramsPage() {
  return (
    <DashboardLayout
      title="Programs"
      subtitle="Programs should give members structure, progression, and a clear outcome — not just another random list of workouts."
    >
      <div style={grid}>
        {programs.map((program) => (
          <div key={program.title} style={card}>
            <div style={programTop}>
              <div>
                <div style={programTitle}>{program.title}</div>
                <div style={muted}>{program.length}</div>
              </div>
              <div style={badge}>Structured</div>
            </div>

            <div style={{ marginTop: "14px" }}>
              <div style={label}>Expected outcome</div>
              <div style={bodyText}>{program.outcome}</div>
            </div>

            <div style={{ marginTop: "18px" }}>
              <div style={label}>Program flow</div>
              <ul style={list}>
                {program.weeks.map((week) => (
                  <li key={week}>{week}</li>
                ))}
              </ul>
            </div>

            <div style={actions}>
              <button style={primaryButton}>Start Program</button>
              <button style={ghostButton}>Preview Weekly Plan</button>
            </div>
          </div>
        ))}
      </div>
    </DashboardLayout>
  );
}

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
  gap: "20px",
};

const card = {
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: "22px",
  padding: "22px",
};

const programTop = {
  display: "flex",
  justifyContent: "space-between",
  gap: "12px",
  alignItems: "start",
};

const programTitle = { fontSize: "24px", fontWeight: "800", marginBottom: "6px" };
const muted = { color: "rgba(255,255,255,0.62)", lineHeight: 1.7 };

const badge = {
  padding: "8px 10px",
  borderRadius: "12px",
  background: "rgba(255,255,255,0.06)",
  border: "1px solid rgba(255,255,255,0.08)",
  fontWeight: "700",
  fontSize: "12px",
};

const label = {
  color: "rgba(255,255,255,0.52)",
  fontSize: "12px",
  textTransform: "uppercase",
  letterSpacing: "0.12em",
  marginBottom: "8px",
};

const bodyText = { color: "rgba(255,255,255,0.72)", lineHeight: 1.8 };

const list = {
  paddingLeft: "18px",
  lineHeight: 1.9,
  color: "rgba(255,255,255,0.72)",
};

const actions = { display: "flex", gap: "10px", flexWrap: "wrap", marginTop: "16px" };

const primaryButton = {
  padding: "12px 14px",
  borderRadius: "12px",
  border: "none",
  background: "white",
  color: "black",
  fontWeight: "700",
  cursor: "pointer",
};

const ghostButton = {
  padding: "12px 14px",
  borderRadius: "12px",
  border: "1px solid rgba(255,255,255,0.16)",
  background: "transparent",
  color: "white",
  fontWeight: "700",
  cursor: "pointer",
};
