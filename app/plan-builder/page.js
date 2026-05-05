export const dynamic = "force-dynamic";

import { redirect } from "next/navigation";
import DashboardLayout from "../../components/DashboardLayout";
import UpgradeLockScreen from "../../components/UpgradeLockScreen";
import PlanBuilderClient from "../../components/PlanBuilderClient";
import { getCurrentUserAndProfile } from "../../lib/getProfile";
import { canAccessFitnessPages } from "../../lib/access";

export default async function PlanBuilderPage() {
  const { user, profile } = await getCurrentUserAndProfile();

  if (!user) redirect("/login");

  const membership = String(profile?.membership_type || "").toLowerCase().trim();

  if (!canAccessFitnessPages(profile)) {
    return (
      <DashboardLayout
        title="Plan Builder"
        subtitle="Generate your training plan based on your goal and member level."
        membershipType={membership}
      >
        <UpgradeLockScreen
          title="Unlock the Plan Builder"
          text="Build structured training plans based on your goal, focus, and weekly schedule. This feature is part of Full Access and above."
          requiredPlan="Full Access"
          buttonLabel="Upgrade to Full Access"
        />
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout
      title="Plan Builder"
      subtitle="Build a structured training plan based on your goal, focus, and weekly schedule."
      membershipType={membership}
    >
      <PlanBuilderClient membershipType={membership} />
    </DashboardLayout>
  );
}