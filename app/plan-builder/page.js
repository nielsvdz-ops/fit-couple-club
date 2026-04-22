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

  if (!canAccessFitnessPages(profile)) {
    return (
      <DashboardLayout
        title="Plan Builder"
        subtitle="Generate your training plan based on your goal and member level."
        membershipType={profile?.membership_type}
      >
        <UpgradeLockScreen
          title="Unlock the plan builder"
          text="The full training plan builder is included with Full Access and above."
          requiredPlan="Full Access"
          buttonLabel="Upgrade to Full Access"
        />
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout
      title="Plan Builder"
      subtitle="Generate your training plan based on your goal and member level."
      membershipType={profile?.membership_type}
    >
      <PlanBuilderClient membershipType={profile?.membership_type} />
    </DashboardLayout>
  );
}
