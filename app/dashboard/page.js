export const dynamic = "force-dynamic";

import { redirect } from "next/navigation";
import DashboardLayout from "../../components/DashboardLayout";
import DashboardCard from "../../components/DashboardCard";
import CheckoutButton from "../../components/CheckoutButton";

import {
  canAccessNutritionPages,
  canAccessFitnessPages,
  canAccessCoachingPage,
} from "../../lib/access";

import { getCurrentUserAndProfile } from "../../lib/getProfile";

export default async function DashboardPage() {
  const { user, profile, supabase } = await getCurrentUserAndProfile();

  if (!user) {
    redirect("/login");
  }

  if (
    !canAccessNutritionPages(profile) &&
    !canAccessFitnessPages(profile)
  ) {
    redirect("/billing");
  }

  const { data: preferences } = await supabase
    .from("member_preferences")
    .select("*")
    .eq("user_id", user.id)
    .maybeSingle();

  const membershipType = profile?.membership_type || "free";
  const isNutrition = String(membershipType).toLowerCase() === "nutrition";
  const hasFitness = canAccessFitnessPages(profile);

  const goal = preferences?.goal || "Set your goal";
  const dietType = preferences?.diet_type || "Set diet";
  const fasting =
    preferences?.fasting_enabled && preferences?.fasting_window
      ? preferences.fasting_window
      : "Off";
  const trainingLocation = preferences?.training_location || "Set training";
  const bootyFocus = preferences?.booty_focus ? "Enabled" : "Off";

  return (
    <DashboardLayout
      title="Dashboard"
      subtitle="Your personalized transformation system, nutrition, workouts, progress tracking and coaching tools."
      membershipType={membershipType}
    >
      <div style={wrap}>
        <section style={heroCard}>
          <img src="/images/background.webp" alt="" style={heroImage} />
          <div style={heroOverlay} />

          <div style={heroContent}>
            <div style={heroTop}>
              <div>
                <div style={eyebrowRed}>FitCoupleClub Dashboard</div>

                <h2 style={heroTitle}>
                  Welcome back
                  {user?.email ? `, ${user.email.split("@")[0]}` : ""}
                </h2>

                <p style={heroText}>
                  Your system is now shaped around your goal, diet style,
                  training setup and lifestyle preferences.
                </p>
              </div>

              <div style={membershipPill(hasFitness)}>
                {String(membershipType).replace("_", " ").toUpperCase()}
              </div>
            </div>

            <div style={personalGrid}>
              <div style={personalCard}>
                <div style={statLabel}>Goal</div>
                <div style={statValue}>{goal}</div>
              </div>

              <div style={personalCard}>
                <div style={statLabel}>Diet</div>
                <div style={statValue}>{dietType}</div>
              </div>

              <div style={personalCard}>
                <div style={statLabel}>Fasting</div>
                <div style={statValue}>{fasting}</div>
              </div>

              <div style={personalCard}>
                <div style={statLabel}>Training</div>
                <div style={statValue}>{trainingLocation}</div>
              </div>

              <div style={personalCard}>
                <div style={statLabel}>Booty Focus</div>
                <div style={statValue}>{bootyFocus}</div>
              </div>
            </div>

            <div style={heroActions}>
              <a href="/preferences" style={redButton}>
                Edit Preferences
              </a>

              <a href="/nutrition" style={darkButton}>
                Start Nutrition
              </a>
            </div>
          </div>
        </section>

        {isNutrition && (
          <section style={upgradeCard}>
            <div>
              <div style={eyebrowRed}>Upgrade</div>

              <h3 style={upgradeTitle}>
                Unlock Full Access for only €10
              </h3>

              <p style={upgradeText}>
                You already own Nutrition. Upgrade once and unlock workouts,
                programs, Plan Builder, Couple Zone, progress tracking and the
                full fitness platform.
              </p>
            </div>

            <div style={upgradeButtonWrap}>
              <CheckoutButton
                plan="upgrade_full_access"
                label="Upgrade for €10"
                variant="red"
              />
            </div>
          </section>
        )}

        <section style={section}>
          <div style={sectionHeader}>
            <div>
              <div style={eyebrowRed}>Main Systems</div>
              <h3 style={sectionTitle}>Transformation Hub</h3>
            </div>
          </div>

          <div style={grid}>
            <DashboardCard
              title="Nutrition"
              description="Daily meal systems, macros, recipes and grocery planning based on your preferences."
              href="/nutrition"
            />

            <DashboardCard
              title="Recipes"
              description="Smart recipes filtered around your goal, diet style and allergies."
              href="/recipes"
            />

            {hasFitness && (
              <>
                <DashboardCard
                  title="Workouts"
                  description="Structured gym and home workouts with progression systems."
                  href="/workouts"
                />

                <DashboardCard
                  title="Programs"
                  description="Transformation programs based on your goal and experience."
                  href="/programs"
                />

                <DashboardCard
                  title="Plan Builder"
                  description="Generate your personalized training and nutrition system."
                  href="/plan-builder"
                />

                <DashboardCard
                  title="Progress"
                  description="Track weight, body stats, consistency and progression."
                  href="/progress"
                />

                <DashboardCard
                  title="Couple Zone"
                  description="Train together, shop together and stay accountable together."
                  href="/couple-zone"
                />
              </>
            )}

            <DashboardCard
              title="Coaching"
              description="Buy a coaching call, schedule sessions and get direct guidance."
              href="/coaching"
            />
          </div>
        </section>

        <section style={bottomGrid}>
          <div style={tipsCard}>
            <div style={eyebrowRed}>Today’s Focus</div>

            <h3 style={miniTitle}>
              Stay consistent
            </h3>

            <ul style={tipsList}>
              <li>Hit your protein target</li>
              <li>Follow your selected diet structure</li>
              <li>Train according to your location and experience</li>
              <li>Sleep 7–9 hours consistently</li>
              <li>Review your progress weekly</li>
            </ul>
          </div>

          <div style={activityCard}>
            <div style={eyebrowRed}>System Access</div>

            <h3 style={miniTitle}>
              Unlocked features
            </h3>

            <div style={featureList}>
              <div style={featureItem(canAccessNutritionPages(profile))}>
                Nutrition System
              </div>

              <div style={featureItem(hasFitness)}>
                Workout System
              </div>

              <div style={featureItem(true)}>
                Meal Plans
              </div>

              <div style={featureItem(true)}>
                Grocery Generator
              </div>

              <div style={featureItem(canAccessCoachingPage(profile))}>
                Coaching Access
              </div>

              <div style={featureItem(Boolean(preferences?.booty_focus))}>
                Booty Builder Focus
              </div>
            </div>
          </div>
        </section>
      </div>
    </DashboardLayout>
  );
}

const wrap = {
  display: "grid",
  gap: "26px",
  width: "100%",
  maxWidth: "1400px",
  margin: "0 auto",
};

const heroCard = {
  position: "relative",
  overflow: "hidden",
  border: "1px solid rgba(255,255,255,0.10)",
  minHeight: "520px",
  background: "#050505",
};

const heroImage = {
  position: "absolute",
  inset: 0,
  width: "100%",
  height: "100%",
  objectFit: "cover",
  filter: "grayscale(1) brightness(0.28) contrast(1.18)",
};

const heroOverlay = {
  position: "absolute",
  inset: 0,
  background:
    "linear-gradient(90deg, rgba(0,0,0,0.96), rgba(0,0,0,0.78), rgba(100,0,0,0.42))",
  zIndex: 1,
};

const heroContent = {
  position: "relative",
  zIndex: 2,
  padding: "clamp(24px, 5vw, 42px)",
  display: "grid",
  gap: "28px",
};

const heroTop = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
  gap: "20px",
  flexWrap: "wrap",
};

const eyebrowRed = {
  fontSize: "12px",
  textTransform: "uppercase",
  letterSpacing: "0.18em",
  color: "#ef4444",
  marginBottom: "10px",
  fontWeight: "950",
};

const heroTitle = {
  margin: 0,
  fontSize: "clamp(42px, 8vw, 76px)",
  fontWeight: "950",
  lineHeight: 0.92,
  letterSpacing: "-0.06em",
  textTransform: "uppercase",
};

const heroText = {
  marginTop: "18px",
  maxWidth: "760px",
  color: "rgba(255,255,255,0.72)",
  lineHeight: 1.8,
  fontSize: "clamp(16px, 2vw, 19px)",
};

const membershipPill = (full) => ({
  padding: "12px 18px",
  background: full ? "rgba(176,0,0,0.24)" : "rgba(255,255,255,0.06)",
  border: full
    ? "1px solid rgba(176,0,0,0.45)"
    : "1px solid rgba(255,255,255,0.10)",
  color: full ? "#fff" : "rgba(255,255,255,0.76)",
  fontWeight: "950",
  fontSize: "13px",
  letterSpacing: "0.08em",
});

const personalGrid = {
  display: "grid",
  gridTemplateColumns:
    "repeat(auto-fit, minmax(min(100%, 190px), 1fr))",
  gap: "14px",
};

const personalCard = {
  background: "rgba(0,0,0,0.45)",
  border: "1px solid rgba(255,255,255,0.10)",
  borderLeft: "3px solid #b00000",
  padding: "18px",
};

const statLabel = {
  color: "rgba(255,255,255,0.48)",
  fontSize: "12px",
  textTransform: "uppercase",
  letterSpacing: "0.14em",
  marginBottom: "10px",
  fontWeight: "900",
};

const statValue = {
  fontSize: "20px",
  fontWeight: "950",
  textTransform: "uppercase",
};

const heroActions = {
  display: "flex",
  gap: "14px",
  flexWrap: "wrap",
};

const redButton = {
  display: "inline-flex",
  padding: "15px 22px",
  background: "#b00000",
  color: "white",
  textDecoration: "none",
  fontWeight: "950",
  textTransform: "uppercase",
};

const darkButton = {
  display: "inline-flex",
  padding: "15px 22px",
  background: "rgba(255,255,255,0.05)",
  border: "1px solid rgba(255,255,255,0.14)",
  color: "white",
  textDecoration: "none",
  fontWeight: "950",
  textTransform: "uppercase",
};

const upgradeCard = {
  background:
    "linear-gradient(135deg, rgba(127,29,29,0.34), rgba(255,255,255,0.035))",
  border: "1px solid rgba(176,0,0,0.35)",
  borderLeft: "3px solid #b00000",
  padding: "clamp(24px, 5vw, 34px)",
  display: "grid",
  gap: "20px",
};

const upgradeTitle = {
  margin: 0,
  fontSize: "clamp(30px, 5vw, 46px)",
  lineHeight: 0.95,
  fontWeight: "950",
  textTransform: "uppercase",
  letterSpacing: "-0.04em",
};

const upgradeText = {
  marginTop: "14px",
  color: "rgba(255,255,255,0.74)",
  lineHeight: 1.8,
  maxWidth: "900px",
};

const upgradeButtonWrap = {
  maxWidth: "340px",
};

const section = {
  display: "grid",
  gap: "20px",
};

const sectionHeader = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "20px",
  flexWrap: "wrap",
};

const sectionTitle = {
  margin: 0,
  fontSize: "clamp(30px, 5vw, 48px)",
  fontWeight: "950",
  lineHeight: 0.95,
  textTransform: "uppercase",
  letterSpacing: "-0.04em",
};

const grid = {
  display: "grid",
  gridTemplateColumns:
    "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
  gap: "20px",
};

const bottomGrid = {
  display: "grid",
  gridTemplateColumns:
    "repeat(auto-fit, minmax(min(100%, 320px), 1fr))",
  gap: "20px",
  paddingBottom: "40px",
};

const tipsCard = {
  background: "#060606",
  border: "1px solid rgba(255,255,255,0.09)",
  borderLeft: "3px solid #b00000",
  padding: "24px",
};

const activityCard = {
  background:
    "linear-gradient(135deg, rgba(127,29,29,0.26), rgba(255,255,255,0.035))",
  border: "1px solid rgba(176,0,0,0.28)",
  padding: "24px",
};

const miniTitle = {
  margin: "0 0 18px",
  fontSize: "28px",
  fontWeight: "950",
  textTransform: "uppercase",
};

const tipsList = {
  margin: 0,
  paddingLeft: "20px",
  color: "rgba(255,255,255,0.75)",
  lineHeight: 2,
};

const featureList = {
  display: "flex",
  flexWrap: "wrap",
  gap: "12px",
};

const featureItem = (active) => ({
  padding: "12px 14px",
  background: active
    ? "rgba(34,197,94,0.12)"
    : "rgba(255,255,255,0.05)",
  border: active
    ? "1px solid rgba(34,197,94,0.22)"
    : "1px solid rgba(255,255,255,0.08)",
  color: active ? "#86efac" : "rgba(255,255,255,0.6)",
  fontWeight: "850",
});