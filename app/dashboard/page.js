import DashboardLayout from "../../components/DashboardLayout";

const quickStats = [
  ["Active Goal", "Build Muscle"],
  ["Training Days", "4 / week"],
  ["Current Focus", "Booty"],
  ["Streak", "12 days"],
];

const quickActions = [
  ["Continue My Plan", "/plan-builder", "Open your saved structure and today’s direction."],
  ["Today’s Workout", "/workouts", "See the exact exercises, sets, reps, and next session."],
  ["Today’s Meals", "/nutrition", "Follow the nutrition structure that matches your goal."],
  ["Log Weekly Check-In", "/progress", "Update weight, waist, energy, and consistency."],
];

const modules = [
  ["Recipes", "/recipes", "Browse meals by goal, meal type, and prep style."],
  ["Programs", "/programs", "Follow structured transformations and challenges."],
  ["Couple Zone", "/couple-zone", "Use partner workouts, shared tasks, and couple check-ins."],
  ["Billing", "/billing", "Manage membership and see VIP upgrade benefits."],
  ["Account", "/account", "View settings, plan type, and future member preferences."],
];

export default function DashboardPage() {
  return (
    <DashboardLayout
      title="Member Dashboard"
      subtitle="Your member area should tell you what to do next, what to focus on, and how to keep moving toward your goal."
    >
      <div style={{ display: "grid", gap: "22px" }}>
        <section style={sectionCard}>
          <div style={sectionHeader}>
            <div>
              <div style={eyebrow}>This Week</div>
              <h2 style={sectionTitle}>Your current direction</h2>
            </div>
            <a href="/plan-builder" style={primaryAction}>Open Plan Builder</a>
          </div>

          <div style={statsGrid}>
            {quickStats.map(([label, value]) => (
              <div key={label} style={miniCard}>
                <div style={miniLabel}>{label}</div>
                <div style={miniValue}>{value}</div>
              </div>
            ))}
          </div>
        </section>

        <section style={twoColGrid}>
          <div style={sectionCard}>
            <div style={sectionHeaderSimple}>
              <div>
                <div style={eyebrow}>Today</div>
                <h2 style={sectionTitle}>Do this next</h2>
              </div>
            </div>

            <div style={{ display: "grid", gap: "14px" }}>
              {quickActions.map(([title, href, text]) => (
                <a key={title} href={href} style={actionCard}>
                  <div style={{ fontSize: "20px", fontWeight: "800", marginBottom: "6px" }}>{title}</div>
                  <div style={muted}>{text}</div>
                </a>
              ))}
            </div>
          </div>

          <div style={sectionCard}>
            <div style={sectionHeaderSimple}>
              <div>
                <div style={eyebrow}>VIP</div>
                <h2 style={sectionTitle}>Weekly evaluation</h2>
              </div>
            </div>

            <div style={vipBox}>
              <div style={{ fontSize: "18px", fontWeight: "800", marginBottom: "8px" }}>
                Next VIP Progress Call
              </div>
              <div style={muted}>Thursday • 16:00 • 30 minutes</div>
              <ul style={bulletList}>
                <li>review progress photos and measurements</li>
                <li>evaluate consistency and recovery</li>
                <li>adjust next week’s plan direction</li>
              </ul>
              <a href="/billing" style={secondaryAction}>Manage VIP Access</a>
            </div>
          </div>
        </section>

        <section style={sectionCard}>
          <div style={sectionHeaderSimple}>
            <div>
              <div style={eyebrow}>More Tools</div>
              <h2 style={sectionTitle}>Everything else you need</h2>
            </div>
          </div>

          <div style={moduleGrid}>
            {modules.map(([title, href, text]) => (
              <a key={title} href={href} style={moduleCard}>
                <div style={{ fontSize: "22px", fontWeight: "800", marginBottom: "8px" }}>{title}</div>
                <div style={muted}>{text}</div>
              </a>
            ))}
          </div>
        </section>
      </div>
    </DashboardLayout>
  );
}

const sectionCard = {
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: "22px",
  padding: "24px",
};

const sectionHeader = {
  display: "flex",
  justifyContent: "space-between",
  gap: "16px",
  alignItems: "center",
  marginBottom: "18px",
  flexWrap: "wrap",
};

const sectionHeaderSimple = { marginBottom: "18px" };

const eyebrow = {
  fontSize: "12px",
  textTransform: "uppercase",
  letterSpacing: "0.16em",
  color: "rgba(255,255,255,0.45)",
  marginBottom: "8px",
};

const sectionTitle = { margin: 0, fontSize: "28px", fontWeight: "800" };

const statsGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))",
  gap: "14px",
};

const miniCard = {
  background: "rgba(255,255,255,0.03)",
  border: "1px solid rgba(255,255,255,0.06)",
  borderRadius: "16px",
  padding: "18px",
};

const miniLabel = {
  color: "rgba(255,255,255,0.56)",
  marginBottom: "8px",
};

const miniValue = {
  fontSize: "26px",
  fontWeight: "800",
};

const twoColGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
  gap: "22px",
};

const actionCard = {
  textDecoration: "none",
  color: "white",
  background: "rgba(255,255,255,0.03)",
  border: "1px solid rgba(255,255,255,0.06)",
  borderRadius: "18px",
  padding: "18px",
};

const muted = {
  color: "rgba(255,255,255,0.68)",
  lineHeight: 1.7,
};

const vipBox = {
  background: "linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.03))",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: "18px",
  padding: "18px",
};

const bulletList = {
  marginTop: "12px",
  marginBottom: "16px",
  paddingLeft: "18px",
  lineHeight: 1.8,
  color: "rgba(255,255,255,0.72)",
};

const moduleGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))",
  gap: "16px",
};

const moduleCard = {
  textDecoration: "none",
  color: "white",
  background: "rgba(255,255,255,0.03)",
  border: "1px solid rgba(255,255,255,0.06)",
  borderRadius: "18px",
  padding: "20px",
};

const primaryAction = {
  background: "white",
  color: "black",
  textDecoration: "none",
  padding: "12px 16px",
  borderRadius: "12px",
  fontWeight: "700",
};

const secondaryAction = {
  display: "inline-block",
  border: "1px solid rgba(255,255,255,0.18)",
  color: "white",
  textDecoration: "none",
  padding: "12px 16px",
  borderRadius: "12px",
  fontWeight: "700",
};
