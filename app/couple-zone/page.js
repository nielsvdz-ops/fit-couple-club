export const dynamic = "force-dynamic";

import { redirect } from "next/navigation";
import DashboardLayout from "../../components/DashboardLayout";
import { getCurrentUserAndProfile } from "../../lib/getProfile";
import { canAccessPremiumPages } from "../../lib/access";

const weeklyTargets = [
  { label: "Workouts together", value: "4", detail: "Complete 4 shared sessions this week" },
  { label: "Daily step goal", value: "8k+", detail: "Aim to walk together whenever possible" },
  { label: "Healthy dinners", value: "3", detail: "Cook at least 3 strong meals together" },
  { label: "Check-in talk", value: "1", detail: "Do a Sunday reflection without distractions" },
];

const sharedTools = [
  {
    title: "Partner Workout of the Week",
    subtitle: "One simple session you can both complete",
    points: [
      "Goblet squat — 3 x 12",
      "Push-up or incline push-up — 3 x 10",
      "Seated row or band row — 3 x 12",
      "Walking lunges — 2 x 10 each leg",
      "Plank — 3 x 30 sec",
    ],
    footer: "Train side by side and focus on effort, not perfection.",
  },
  {
    title: "Shared Grocery Focus",
    subtitle: "Buy foods that make consistency easier",
    points: [
      "Lean protein: chicken, eggs, Greek yogurt, tuna",
      "Smart carbs: rice, potatoes, oats, wraps",
      "Quick produce: berries, bananas, spinach, cucumber",
      "Healthy fats: avocado, olive oil, nuts",
      "Easy backups: frozen vegetables, protein snacks",
    ],
    footer: "The easier your kitchen setup is, the easier progress becomes.",
  },
  {
    title: "Date-Night Healthy Meals",
    subtitle: "Keep the vibe good without ruining structure",
    points: [
      "Steak or chicken with potatoes and vegetables",
      "Homemade taco bowls with lean beef and rice",
      "High-protein pasta with salad",
      "Salmon with roasted potatoes and greens",
      "Greek yogurt dessert bowl with dark chocolate",
    ],
    footer: "A healthy date night should still feel fun, not restrictive.",
  },
  {
    title: "Couple Recovery Reset",
    subtitle: "Low-stress things to do together",
    points: [
      "20–30 minute evening walk",
      "10-minute mobility flow together",
      "Screen-free dinner",
      "Early sleep night",
      "Sunday planning talk",
    ],
    footer: "Recovery habits usually decide whether couples stay consistent.",
  },
];

const checkInQuestions = [
  "What went well for us this week?",
  "Where did we lose structure or discipline?",
  "Did we support each other or make things harder?",
  "How was food quality during busy moments?",
  "What one thing should we improve next week?",
];

const scorecards = [
  {
    title: "Training",
    score: "4/5",
    text: "Track how many sessions you completed together or separately with full effort.",
  },
  {
    title: "Nutrition",
    score: "3/5",
    text: "Rate how well you stayed aligned with meals, portions, and protein targets.",
  },
  {
    title: "Support",
    score: "5/5",
    text: "Rate how well you encouraged each other instead of creating friction.",
  },
  {
    title: "Recovery",
    score: "2/5",
    text: "Look at sleep, stress, steps, hydration, and how well you reset after hard days.",
  },
];

const habits = [
  "Train together at least twice per week",
  "Keep one shared grocery list",
  "Choose dinners before the week starts",
  "Walk after dinner 3 times per week",
  "Do a 10-minute Sunday reflection talk",
  "Avoid blaming each other for off days",
];

export default async function CoupleZonePage() {
  const { user, profile } = await getCurrentUserAndProfile();

  if (!user) redirect("/login");
  if (!canAccessPremiumPages(profile)) redirect("/pricing");

  return (
    <DashboardLayout
      title="Couple Zone"
      subtitle="Premium and VIP members can use shared couple tools, structure, and accountability systems that actually help real progress."
      membershipType={profile?.membership_type}
    >
      <div style={pageWrap}>
        <section style={heroCard}>
          <div style={eyebrow}>Shared Mission</div>
          <h2 style={heroTitle}>Build a stronger routine together, not just better intentions</h2>
          <p style={heroText}>
            The Couple Zone is built to help two people stay aligned with training,
            food, recovery, and communication. The goal is not just motivation.
            The goal is structure that works in real life.
          </p>

          <div style={targetGrid}>
            {weeklyTargets.map((item) => (
              <div key={item.label} style={targetCard}>
                <div style={targetValue}>{item.value}</div>
                <div style={targetLabel}>{item.label}</div>
                <div style={targetText}>{item.detail}</div>
              </div>
            ))}
          </div>
        </section>

        <section style={sectionCard}>
          <div style={sectionEyebrow}>This week’s challenge</div>
          <h3 style={sectionTitle}>Simple weekly structure for couples</h3>
          <div style={challengeGrid}>
            <div style={challengeMain}>
              <div style={challengeHeadline}>Weekly mission</div>
              <ul style={list}>
                <li>Complete 4 workouts together or with shared accountability</li>
                <li>Cook 3 high-protein dinners at home</li>
                <li>Hit 8k+ steps on at least 5 days</li>
                <li>Do 1 honest Sunday check-in conversation</li>
              </ul>
            </div>

            <div style={challengeSide}>
              <div style={challengeHeadline}>What matters most</div>
              <p style={text}>
                You do not need to be perfect together. You need to remove chaos,
                stop guessing, and make it easier for both people to stay on track.
              </p>
            </div>
          </div>
        </section>

        <section style={statsGrid}>
          {scorecards.map((item) => (
            <div key={item.title} style={scoreCard}>
              <div style={scoreHeader}>
                <div style={scoreTitle}>{item.title}</div>
                <div style={scoreValue}>{item.score}</div>
              </div>
              <p style={text}>{item.text}</p>
            </div>
          ))}
        </section>

        <section style={sectionCard}>
          <div style={sectionEyebrow}>Useful tools</div>
          <h3 style={sectionTitle}>Shared tools that improve consistency</h3>

          <div style={toolsGrid}>
            {sharedTools.map((tool) => (
              <article key={tool.title} style={toolCard}>
                <div style={toolTitle}>{tool.title}</div>
                <div style={toolSubtitle}>{tool.subtitle}</div>

                <ul style={list}>
                  {tool.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>

                <div style={toolFooter}>{tool.footer}</div>
              </article>
            ))}
          </div>
        </section>

        <section style={twoColGrid}>
          <div style={sectionCard}>
            <div style={sectionEyebrow}>Sunday reflection</div>
            <h3 style={sectionTitle}>Couple check-in prompts</h3>
            <ul style={list}>
              {checkInQuestions.map((question) => (
                <li key={question}>{question}</li>
              ))}
            </ul>
          </div>

          <div style={sectionCard}>
            <div style={sectionEyebrow}>High-value habits</div>
            <h3 style={sectionTitle}>Small habits that actually help</h3>
            <ul style={list}>
              {habits.map((habit) => (
                <li key={habit}>{habit}</li>
              ))}
            </ul>
          </div>
        </section>

        <section style={sectionCard}>
          <div style={sectionEyebrow}>How to use this page</div>
          <h3 style={sectionTitle}>Best way to get results as a couple</h3>
          <div style={howGrid}>
            <div style={howCard}>
              <div style={howNumber}>1</div>
              <div style={howTitle}>Choose the week’s mission</div>
              <p style={text}>
                Keep it realistic. A simple target completed together beats an
                over-ambitious plan you both abandon.
              </p>
            </div>

            <div style={howCard}>
              <div style={howNumber}>2</div>
              <div style={howTitle}>Set shared meals in advance</div>
              <p style={text}>
                Most couples lose consistency because they decide food too late
                when energy is already low.
              </p>
            </div>

            <div style={howCard}>
              <div style={howNumber}>3</div>
              <div style={howTitle}>Use support, not pressure</div>
              <p style={text}>
                Encourage effort, solve problems together, and stop turning one
                bad day into a bad week.
              </p>
            </div>
          </div>
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
  border: "1px solid rgba(255,255,255,0.08)",
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
  fontSize: "clamp(30px, 4vw, 44px)",
  fontWeight: "800",
  lineHeight: 1.08,
};

const heroText = {
  color: "rgba(255,255,255,0.72)",
  lineHeight: 1.8,
  marginTop: "12px",
  maxWidth: "880px",
};

const targetGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))",
  gap: "14px",
  marginTop: "22px",
};

const targetCard = {
  background: "rgba(255,255,255,0.03)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: "18px",
  padding: "18px",
};

const targetValue = {
  fontSize: "32px",
  fontWeight: "800",
  marginBottom: "6px",
};

const targetLabel = {
  fontSize: "15px",
  fontWeight: "700",
  marginBottom: "6px",
};

const targetText = {
  color: "rgba(255,255,255,0.64)",
  lineHeight: 1.6,
  fontSize: "14px",
};

const sectionCard = {
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.08)",
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
  lineHeight: 1.15,
};

const challengeGrid = {
  display: "grid",
  gridTemplateColumns: "minmax(0,1.4fr) minmax(280px,0.9fr)",
  gap: "18px",
  marginTop: "18px",
};

const challengeMain = {
  background: "rgba(255,255,255,0.03)",
  border: "1px solid rgba(255,255,255,0.06)",
  borderRadius: "18px",
  padding: "18px",
};

const challengeSide = {
  background: "rgba(255,255,255,0.03)",
  border: "1px solid rgba(255,255,255,0.06)",
  borderRadius: "18px",
  padding: "18px",
};

const challengeHeadline = {
  fontSize: "18px",
  fontWeight: "800",
  marginBottom: "10px",
};

const statsGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
  gap: "16px",
};

const scoreCard = {
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: "20px",
  padding: "20px",
};

const scoreHeader = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "10px",
  marginBottom: "8px",
};

const scoreTitle = {
  fontSize: "20px",
  fontWeight: "800",
};

const scoreValue = {
  fontSize: "18px",
  fontWeight: "800",
  padding: "6px 10px",
  borderRadius: "999px",
  background: "rgba(255,255,255,0.08)",
};

const toolsGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
  gap: "18px",
  marginTop: "18px",
};

const toolCard = {
  background: "rgba(255,255,255,0.03)",
  border: "1px solid rgba(255,255,255,0.06)",
  borderRadius: "20px",
  padding: "20px",
  display: "grid",
  gap: "10px",
};

const toolTitle = {
  fontSize: "22px",
  fontWeight: "800",
  lineHeight: 1.2,
};

const toolSubtitle = {
  color: "rgba(255,255,255,0.68)",
  lineHeight: 1.6,
};

const toolFooter = {
  color: "rgba(255,255,255,0.58)",
  lineHeight: 1.6,
  fontSize: "14px",
  marginTop: "4px",
};

const twoColGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
  gap: "22px",
};

const howGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
  gap: "16px",
  marginTop: "18px",
};

const howCard = {
  background: "rgba(255,255,255,0.03)",
  border: "1px solid rgba(255,255,255,0.06)",
  borderRadius: "18px",
  padding: "18px",
};

const howNumber = {
  width: "34px",
  height: "34px",
  borderRadius: "999px",
  background: "rgba(255,255,255,0.08)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontWeight: "800",
  marginBottom: "12px",
};

const howTitle = {
  fontSize: "18px",
  fontWeight: "800",
  marginBottom: "8px",
};

const text = {
  color: "rgba(255,255,255,0.68)",
  lineHeight: 1.8,
};

const list = {
  paddingLeft: "18px",
  margin: 0,
  color: "rgba(255,255,255,0.74)",
  lineHeight: 1.85,
};
