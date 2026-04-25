export const dynamic = "force-dynamic";

import { redirect } from "next/navigation";
import DashboardLayout from "../../components/DashboardLayout";
import UpgradeLockScreen from "../../components/UpgradeLockScreen";
import { getCurrentUserAndProfile } from "../../lib/getProfile";
import { canAccessFitnessPages } from "../../lib/access";

const weeklyTargets = [
  {
    label: "Shared workouts",
    value: "4",
    detail: "Train together or hold each other accountable.",
  },
  {
    label: "Steps together",
    value: "8k+",
    detail: "Aim for walks after meals or in the evening.",
  },
  {
    label: "High-protein dinners",
    value: "3",
    detail: "Cook structured dinners together this week.",
  },
  {
    label: "Sunday check-in",
    value: "1",
    detail: "Review the week and plan the next one.",
  },
];

const coupleChallenges = [
  {
    title: "Consistency Week",
    goal: "Build rhythm together",
    tasks: [
      "Complete 4 planned workouts",
      "Prepare 3 high-protein dinners",
      "Walk together 3 times",
      "Do one Sunday reflection",
    ],
  },
  {
    title: "Fat Loss Focus Week",
    goal: "Control food choices as a team",
    tasks: [
      "Use the grocery generator before shopping",
      "Keep 5 dinners high-protein",
      "Avoid liquid calories on weekdays",
      "Hit daily steps 5 days this week",
    ],
  },
  {
    title: "Muscle Builder Week",
    goal: "Support training and food volume",
    tasks: [
      "Train with progressive overload",
      "Add protein to every main meal",
      "Plan carbs around workouts",
      "Track body weight and energy twice",
    ],
  },
];

const sharedTools = [
  {
    title: "Partner Workout Builder",
    subtitle: "Simple shared session structure",
    points: [
      "Lower body: squat or leg press — 3 x 10–12",
      "Push: push-up or chest press — 3 x 8–12",
      "Pull: row or pulldown — 3 x 10–12",
      "Glutes/core: hip thrust + plank",
      "Finish: 10-minute incline walk together",
    ],
    footer:
      "Use this when you want one session that both people can complete at their own level.",
  },
  {
    title: "Shared Grocery System",
    subtitle: "Make the house easier to stay consistent in",
    points: [
      "Choose protein first: chicken, eggs, quark, skyr, fish",
      "Pick simple carbs: rice, oats, potatoes, wraps",
      "Add easy vegetables: spinach, broccoli, cucumber, stir-fry mix",
      "Keep quick backups: tuna, protein powder, frozen vegetables",
      "Use Couple Mode in Nutrition for 2-person shopping amounts",
    ],
    footer:
      "Most couples fail because food decisions happen too late. Grocery structure fixes that.",
  },
  {
    title: "Date-Night Meal Ideas",
    subtitle: "Keep it healthy without making it boring",
    points: [
      "Steak or chicken with potatoes and vegetables",
      "Homemade taco bowls with lean beef and rice",
      "High-protein pasta with salad",
      "Salmon with roasted potatoes and greens",
      "Greek yogurt dessert bowl with berries and dark chocolate",
    ],
    footer:
      "A healthy date night should still feel like a date night.",
  },
  {
    title: "Conflict-Free Accountability",
    subtitle: "Support without pressure",
    points: [
      "Ask: “How can I help you stay on track today?”",
      "Do not criticize food after it already happened",
      "Suggest a walk instead of starting an argument",
      "Plan tomorrow instead of blaming yesterday",
      "Celebrate completed actions, not perfection",
    ],
    footer:
      "The goal is teamwork, not policing each other.",
  },
];

const checkInQuestions = [
  "What went well for us this week?",
  "Where did we lose structure?",
  "Did we support each other or create pressure?",
  "What meal or moment caused the most friction?",
  "What should we make easier next week?",
  "What is one thing each person needs from the other?",
];

const scorecards = [
  {
    title: "Training",
    score: "0–5",
    text: "Rate how many planned sessions were completed with proper effort.",
  },
  {
    title: "Nutrition",
    score: "0–5",
    text: "Rate meals, protein, grocery structure, and weekend control.",
  },
  {
    title: "Support",
    score: "0–5",
    text: "Rate how well you encouraged each other without pressure.",
  },
  {
    title: "Recovery",
    score: "0–5",
    text: "Rate sleep, stress, walking, hydration, and reset habits.",
  },
];

const habitSystem = [
  {
    title: "Daily",
    habits: [
      "Ask each other what the plan is today",
      "Drink water before coffee or snacks",
      "Get one walk or movement break",
      "Eat protein in at least 2 meals",
    ],
  },
  {
    title: "Weekly",
    habits: [
      "Pick 3 shared dinners",
      "Choose training days together",
      "Use one grocery list",
      "Do one honest check-in",
    ],
  },
  {
    title: "When life gets busy",
    habits: [
      "Use quick meals instead of skipping structure",
      "Walk together instead of doing nothing",
      "Choose the next best meal",
      "Do not turn one bad day into a bad week",
    ],
  },
];

const dateNightOptions = [
  {
    title: "Lean date night",
    meal: "Chicken or steak, roasted potatoes, salad, Greek yogurt dessert",
  },
  {
    title: "High-protein comfort",
    meal: "Lean beef taco bowls with rice, salsa, lettuce, avocado",
  },
  {
    title: "Muscle gain dinner",
    meal: "Salmon, pasta or rice, vegetables, fruit dessert",
  },
  {
    title: "Low-effort night",
    meal: "Rotisserie chicken, microwave rice, salad bag, skyr bowl",
  },
];

export default async function CoupleZonePage() {
  const { user, profile } = await getCurrentUserAndProfile();

  if (!user) redirect("/login");

  if (!canAccessFitnessPages(profile)) {
    return (
      <DashboardLayout
        title="Couple Zone"
        subtitle="Shared couple tools, structure, and accountability systems."
        membershipType={profile?.membership_type}
      >
        <UpgradeLockScreen
          title="Unlock Couple Zone"
          text="Couple tools, shared routines, and accountability systems are included with Full Access and above."
          requiredPlan="Full Access"
          buttonLabel="Upgrade to Full Access"
        />
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout
      title="Couple Zone"
      subtitle="A premium accountability system for couples who want to train, eat, and stay consistent together."
      membershipType={profile?.membership_type}
    >
      <div style={pageWrap}>
        <section style={heroCard}>
          <div style={eyebrow}>Couple Transformation System</div>
          <h2 style={heroTitle}>
            Build discipline together without turning fitness into pressure
          </h2>
          <p style={heroText}>
            Couple Zone helps two people stay aligned with workouts, food,
            groceries, recovery, habits, and weekly accountability. It is built
            for real couples with real schedules.
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
          <div style={sectionEyebrow}>Weekly mission board</div>
          <h3 style={sectionTitle}>Choose your couple focus this week</h3>
          <p style={text}>
            Pick one challenge and keep it simple. The goal is shared execution,
            not perfection.
          </p>

          <div style={challengeCards}>
            {coupleChallenges.map((challenge) => (
              <article key={challenge.title} style={challengeCard}>
                <div style={challengeTitle}>{challenge.title}</div>
                <div style={challengeGoal}>{challenge.goal}</div>
                <ul style={list}>
                  {challenge.tasks.map((task) => (
                    <li key={task}>{task}</li>
                  ))}
                </ul>
              </article>
            ))}
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
          <div style={sectionEyebrow}>Couple tools</div>
          <h3 style={sectionTitle}>Tools that make consistency easier</h3>

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
            <h3 style={sectionTitle}>Weekly couple check-in</h3>
            <p style={text}>
              Use these questions once per week. Keep it calm, honest, and
              focused on solutions.
            </p>
            <ul style={list}>
              {checkInQuestions.map((question) => (
                <li key={question}>{question}</li>
              ))}
            </ul>
          </div>

          <div style={sectionCard}>
            <div style={sectionEyebrow}>Date-night structure</div>
            <h3 style={sectionTitle}>Healthy meals that still feel good</h3>
            <div style={dateGrid}>
              {dateNightOptions.map((option) => (
                <div key={option.title} style={dateCard}>
                  <div style={dateTitle}>{option.title}</div>
                  <p style={text}>{option.meal}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section style={sectionCard}>
          <div style={sectionEyebrow}>Habit system</div>
          <h3 style={sectionTitle}>Simple habits for better teamwork</h3>

          <div style={habitGrid}>
            {habitSystem.map((group) => (
              <div key={group.title} style={habitCard}>
                <div style={habitTitle}>{group.title}</div>
                <ul style={list}>
                  {group.habits.map((habit) => (
                    <li key={habit}>{habit}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section style={sectionCard}>
          <div style={sectionEyebrow}>How to use Couple Zone</div>
          <h3 style={sectionTitle}>Your weekly couple workflow</h3>

          <div style={howGrid}>
            <div style={howCard}>
              <div style={howNumber}>1</div>
              <div style={howTitle}>Pick the mission</div>
              <p style={text}>
                Choose one weekly challenge. Do not try to fix everything at
                once.
              </p>
            </div>

            <div style={howCard}>
              <div style={howNumber}>2</div>
              <div style={howTitle}>Plan food together</div>
              <p style={text}>
                Use Nutrition Couple Mode to create a shared grocery list and
                avoid last-minute food decisions.
              </p>
            </div>

            <div style={howCard}>
              <div style={howNumber}>3</div>
              <div style={howTitle}>Train with support</div>
              <p style={text}>
                Train together when possible. When not possible, keep each other
                accountable without pressure.
              </p>
            </div>

            <div style={howCard}>
              <div style={howNumber}>4</div>
              <div style={howTitle}>Review on Sunday</div>
              <p style={text}>
                Score training, nutrition, support, and recovery. Then choose
                one improvement for next week.
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
    "linear-gradient(180deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.03) 100%)",
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
  fontSize: "clamp(30px, 4vw, 46px)",
  fontWeight: "900",
  lineHeight: 1.05,
};

const heroText = {
  color: "rgba(255,255,255,0.72)",
  lineHeight: 1.8,
  marginTop: "12px",
  maxWidth: "900px",
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
  fontSize: "34px",
  fontWeight: "900",
  marginBottom: "6px",
};

const targetLabel = {
  fontSize: "15px",
  fontWeight: "800",
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
  fontWeight: "900",
  lineHeight: 1.15,
};

const challengeCards = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
  gap: "16px",
  marginTop: "18px",
};

const challengeCard = {
  background: "rgba(255,255,255,0.03)",
  border: "1px solid rgba(255,255,255,0.06)",
  borderRadius: "18px",
  padding: "18px",
};

const challengeTitle = {
  fontSize: "20px",
  fontWeight: "900",
  marginBottom: "6px",
};

const challengeGoal = {
  color: "rgba(255,255,255,0.62)",
  lineHeight: 1.6,
  marginBottom: "12px",
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
  fontWeight: "900",
};

const scoreValue = {
  fontSize: "18px",
  fontWeight: "900",
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
  fontWeight: "900",
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

const dateGrid = {
  display: "grid",
  gap: "12px",
  marginTop: "14px",
};

const dateCard = {
  background: "rgba(255,255,255,0.03)",
  border: "1px solid rgba(255,255,255,0.06)",
  borderRadius: "16px",
  padding: "14px",
};

const dateTitle = {
  fontSize: "17px",
  fontWeight: "900",
  marginBottom: "6px",
};

const habitGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
  gap: "16px",
  marginTop: "18px",
};

const habitCard = {
  background: "rgba(255,255,255,0.03)",
  border: "1px solid rgba(255,255,255,0.06)",
  borderRadius: "18px",
  padding: "18px",
};

const habitTitle = {
  fontSize: "20px",
  fontWeight: "900",
  marginBottom: "10px",
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
  fontWeight: "900",
  marginBottom: "12px",
};

const howTitle = {
  fontSize: "18px",
  fontWeight: "900",
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
