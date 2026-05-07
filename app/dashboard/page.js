export const dynamic = "force-dynamic";

import { redirect } from "next/navigation";
import DashboardLayout from "../../components/DashboardLayout";
import DashboardCard from "../../components/DashboardCard";

import {
  canAccessNutritionPages,
  canAccessFitnessPages,
  canAccessVipPage,
} from "../../lib/access";

import { getCurrentUserAndProfile } from "../../lib/getProfile";

export default async function DashboardPage() {
  const { user, profile } = await getCurrentUserAndProfile();

  if (!user) {
    redirect("/login");
  }

  if (
    !canAccessNutritionPages(profile) &&
    !canAccessFitnessPages(profile)
  ) {
    redirect("/billing");
  }

  const membershipType = profile?.membership_type || "free";
  const isVip = canAccessVipPage(profile);

  return (
    <DashboardLayout
      title="Dashboard"
      subtitle="Your transformation system, workouts, nutrition, progress tracking, and Couple Zone tools."
      membershipType={membershipType}
    >
      <div style={wrap}>
        <section style={heroCard}>
          <div style={heroTop}>
            <div>
              <div style={eyebrow}>Fit Couple Club</div>

              <h2 style={heroTitle}>
                Welcome back{user?.email ? `, ${user.email.split("@")[0]}` : ""}
              </h2>

              <p style={heroText}>
                Continue your transformation with nutrition systems,
                workouts, meal plans, progress tracking, Couple Zone,
                and coaching tools.
              </p>
            </div>

            <div style={membershipPill(isVip)}>
              {String(membershipType)
                .replace("_", " ")
                .toUpperCase()}
            </div>
          </div>

          <div style={statsGrid}>
            <div style={statCard}>
              <div style={statLabel}>Membership</div>
              <div style={statValue}>
                {String(membershipType).replace("_", " ")}
              </div>
            </div>

            <div style={statCard}>
              <div style={statLabel}>Status</div>
              <div style={statValue}>
                {profile?.is_active ? "Active" : "Inactive"}
              </div>
            </div>

            <div style={statCard}>
              <div style={statLabel}>Nutrition Access</div>
              <div style={statValue}>
                {canAccessNutritionPages(profile) ? "Unlocked" : "Locked"}
              </div>
            </div>

            <div style={statCard}>
              <div style={statLabel}>Fitness Access</div>
              <div style={statValue}>
                {canAccessFitnessPages(profile) ? "Unlocked" : "Locked"}
              </div>
            </div>
          </div>
        </section>

        <section style={section}>
          <div style={sectionHeader}>
            <div>
              <div style={eyebrow}>Main Systems</div>
              <h3 style={sectionTitle}>Transformation Hub</h3>
            </div>
          </div>

          <div style={grid}>
            <DashboardCard
              title="Nutrition"
              description="Daily meal systems, macros, recipes, and grocery planning."
              href="/nutrition"
            />

            <DashboardCard
              title="Recipes"
              description="Smart recipes generated for your goals and routines."
              href="/recipes"
            />

            <DashboardCard
              title="Workouts"
              description="Structured gym workouts with progression systems."
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
              description="Track weight, body stats, consistency, and progression."
              href="/progress"
            />

            <DashboardCard
              title="Couple Zone"
              description="Train together, shop together, and stay accountable together."
              href="/couple-zone"
            />

            {isVip && (
              <DashboardCard
                title="VIP"
                description="Private coaching, accountability, and premium guidance."
                href="/vip"
              />
            )}
          </div>
        </section>

        <section style={bottomGrid}>
          <div style={tipsCard}>
            <div style={eyebrow}>Quick Tips</div>

            <h3 style={miniTitle}>Stay consistent</h3>

            <ul style={tipsList}>
              <li>Track your meals daily</li>
              <li>Hit your protein target</li>
              <li>Train at least 3x per week</li>
              <li>Sleep 7–9 hours consistently</li>
              <li>Review your progress weekly</li>
            </ul>
          </div>

          <div style={activityCard}>
            <div style={eyebrow}>System Access</div>

            <h3 style={miniTitle}>Unlocked features</h3>

            <div style={featureList}>
              <div style={featureItem(
                canAccessNutritionPages(profile)
              )}>
                Nutrition System
              </div>

              <div style={featureItem(
                canAccessFitnessPages(profile)
              )}>
                Workout System
              </div>

              <div style={featureItem(true)}>
                Meal Plans
              </div>

              <div style={featureItem(true)}>
                Grocery Generator
              </div>

              <div style={featureItem(isVip)}>
                VIP Coaching
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
  gap: "24px",
  width: "100%",
  maxWidth: "1400px",
  margin: "0 auto",
};

const heroCard = {
  background:
    "linear-gradient(135deg, rgba(255,255,255,0.06), rgba(250,204,21,0.08))",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: "28px",
  padding: "clamp(20px, 4vw, 34px)",
  display: "grid",
  gap: "24px",
};

const heroTop = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
  gap: "20px",
  flexWrap: "wrap",
};

const eyebrow = {
  fontSize: "12px",
  textTransform: "uppercase",
  letterSpacing: "0.18em",
  color: "rgba(255,255,255,0.45)",
  marginBottom: "10px",
};

const heroTitle = {
  margin: 0,
  fontSize: "clamp(32px, 6vw, 56px)",
  fontWeight: "900",
  lineHeight: 1,
};

const heroText = {
  marginTop: "16px",
  maxWidth: "720px",
  color: "rgba(255,255,255,0.72)",
  lineHeight: 1.8,
  fontSize: "clamp(15px, 2vw, 18px)",
};

const membershipPill = (vip) => ({
  padding: "12px 18px",
  borderRadius: "999px",
  background: vip
    ? "rgba(250,204,21,0.18)"
    : "rgba(255,255,255,0.08)",
  border: vip
    ? "1px solid rgba(250,204,21,0.35)"
    : "1px solid rgba(255,255,255,0.10)",
  fontWeight: "900",
  fontSize: "13px",
  letterSpacing: "0.08em",
});

const statsGrid = {
  display: "grid",
  gridTemplateColumns:
    "repeat(auto-fit, minmax(min(100%, 220px), 1fr))",
  gap: "16px",
};

const statCard = {
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.06)",
  borderRadius: "18px",
  padding: "18px",
};

const statLabel = {
  color: "rgba(255,255,255,0.45)",
  fontSize: "12px",
  textTransform: "uppercase",
  letterSpacing: "0.14em",
  marginBottom: "10px",
};

const statValue = {
  fontSize: "22px",
  fontWeight: "800",
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
  fontSize: "clamp(24px, 4vw, 36px)",
  fontWeight: "900",
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
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: "24px",
  padding: "24px",
};

const activityCard = {
  background:
    "linear-gradient(135deg, rgba(96,165,250,0.10), rgba(255,255,255,0.04))",
  border: "1px solid rgba(96,165,250,0.18)",
  borderRadius: "24px",
  padding: "24px",
};

const miniTitle = {
  margin: "0 0 18px",
  fontSize: "28px",
  fontWeight: "900",
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
  borderRadius: "12px",
  background: active
    ? "rgba(34,197,94,0.12)"
    : "rgba(255,255,255,0.06)",
  border: active
    ? "1px solid rgba(34,197,94,0.22)"
    : "1px solid rgba(255,255,255,0.08)",
  color: active ? "#86efac" : "rgba(255,255,255,0.6)",
  fontWeight: "700",
});
