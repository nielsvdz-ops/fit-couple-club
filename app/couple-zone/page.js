import DashboardLayout from "../../components/DashboardLayout";

const tasks = [
  "Complete 4 workouts together this week",
  "Cook 3 healthy dinners together",
  "Do 2 long walks together",
  "Have 1 Sunday reflection talk",
];

const tools = [
  ["Partner Workout of the Week", "A shared workout both partners can complete together with one another’s support."],
  ["Shared Grocery Focus", "Keep the house aligned with your goals instead of full of random snacks and chaos foods."],
  ["Couple Check-In", "Review what worked, what didn’t, and what both of you improve next week."],
  ["Date-Night Healthy Meals", "Meals for two that still match your fitness direction."],
];

export default function CoupleZonePage() {
  return (
    <DashboardLayout
      title="Couple Zone"
      subtitle="This should be one of your strongest unique selling points: a place where couples can actually work together and stay accountable together."
    >
      <div style={{ display: "grid", gap: "22px" }}>
        <section style={heroCard}>
          <div>
            <div style={eyebrow}>Shared Mission</div>
            <h2 style={sectionTitle}>Your couple challenge this week</h2>
            <p style={muted}>Use one shared system so both of you know exactly what the standards are this week.</p>
          </div>

          <div style={taskGrid}>
            {tasks.map((task) => (
              <div key={task} style={taskCard}>
                <div style={{ fontWeight: "800", marginBottom: "8px" }}>Weekly task</div>
                <div style={muted}>{task}</div>
              </div>
            ))}
          </div>
        </section>

        <section style={toolsGrid}>
          {tools.map(([title, text]) => (
            <div key={title} style={toolCard}>
              <div style={{ fontSize: "22px", fontWeight: "800", marginBottom: "8px" }}>{title}</div>
              <div style={muted}>{text}</div>
              <button style={ghostButton}>Open Tool</button>
            </div>
          ))}
        </section>

        <section style={heroCard}>
          <div style={sectionTop}>
            <div>
              <div style={eyebrow}>Sunday Reset</div>
              <h2 style={sectionTitle}>Couple reflection check-in</h2>
            </div>
          </div>

          <div style={checkinGrid}>
            <input placeholder="Did we train enough this week?" style={input} />
            <input placeholder="Did we eat according to our goal?" style={input} />
            <input placeholder="What should we improve next week?" style={input} />
            <input placeholder="What did we do well together?" style={input} />
          </div>

          <button style={primaryButton}>Save Couple Check-In</button>
        </section>
      </div>
    </DashboardLayout>
  );
}

const heroCard = {
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: "22px",
  padding: "24px",
};

const toolsGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))",
  gap: "18px",
};

const toolCard = {
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: "20px",
  padding: "20px",
};

const taskGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
  gap: "14px",
  marginTop: "18px",
};

const taskCard = {
  background: "rgba(255,255,255,0.03)",
  border: "1px solid rgba(255,255,255,0.06)",
  borderRadius: "16px",
  padding: "18px",
};

const eyebrow = {
  fontSize: "12px",
  textTransform: "uppercase",
  letterSpacing: "0.16em",
  color: "rgba(255,255,255,0.45)",
  marginBottom: "8px",
};

const sectionTitle = { margin: 0, fontSize: "28px", fontWeight: "800" };

const muted = { color: "rgba(255,255,255,0.68)", lineHeight: 1.8 };

const sectionTop = { marginBottom: "18px" };

const checkinGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
  gap: "14px",
};

const input = {
  width: "100%",
  padding: "14px 16px",
  borderRadius: "12px",
  border: "1px solid rgba(255,255,255,0.14)",
  background: "#111",
  color: "white",
};

const primaryButton = {
  marginTop: "18px",
  padding: "12px 16px",
  borderRadius: "12px",
  border: "none",
  background: "white",
  color: "black",
  fontWeight: "700",
  cursor: "pointer",
};

const ghostButton = {
  marginTop: "16px",
  padding: "12px 14px",
  borderRadius: "12px",
  border: "1px solid rgba(255,255,255,0.16)",
  background: "transparent",
  color: "white",
  fontWeight: "700",
  cursor: "pointer",
};
