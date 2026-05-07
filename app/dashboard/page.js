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

  // Redirect inactive users
  if (
    !canAccessNutritionPages(profile) &&
    !canAccessFitnessPages(profile)
  ) {
    redirect("/billing");
  }

  const membershipType = profile?.membership_type || "free";

  return (
    <DashboardLayout
      title="Dashboard"
      subtitle="Your transformation system, workouts, nutrition, progress tracking, and Couple Zone tools."
      membershipType={membershipType}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
          gap: "20px",
          width: "100%",
        }}
      >
        <DashboardCard
          title="Nutrition"
          description="Meal plans, recipes, calories, macros, and grocery structure."
          href="/nutrition"
        />

        <DashboardCard
          title="Recipes"
          description="Goal-based recipes with structured meal systems."
          href="/recipes"
        />

        <DashboardCard
          title="Workouts"
          description="Structured gym workouts and progression systems."
          href="/workouts"
        />

        <DashboardCard
          title="Programs"
          description="Transformation programs based on your goals."
          href="/programs"
        />

        <DashboardCard
          title="Plan Builder"
          description="Generate a personalized fitness and nutrition plan."
          href="/plan-builder"
        />

        <DashboardCard
          title="Progress"
          description="Track body stats, weight changes, and weekly consistency."
          href="/progress"
        />

        <DashboardCard
          title="Couple Zone"
          description="Train together, plan together, and stay accountable together."
          href="/couple-zone"
        />

        {canAccessVipPage(profile) && (
          <DashboardCard
            title="VIP"
            description="Exclusive VIP coaching, calls, and premium guidance."
            href="/vip"
          />
        )}
      </div>
    </DashboardLayout>
  );
}
