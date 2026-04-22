export const dynamic = "force-dynamic";

import { redirect } from "next/navigation";
import DashboardLayout from "../../components/DashboardLayout";
import UpgradeLockScreen from "../../components/UpgradeLockScreen";
import WorkoutsClient from "../../components/WorkoutsClient";
import { getCurrentUserAndProfile } from "../../lib/getProfile";
import { canAccessFitnessPages } from "../../lib/access";

export default async function WorkoutsPage() {
  const { user, profile } = await getCurrentUserAndProfile();

  if (!user) redirect("/login");

  if (!canAccessFitnessPages(profile)) {
    return (
      <DashboardLayout
        title="Workouts"
        subtitle="Exclusive training systems with coaching, premium structure, and guided exercise execution."
        membershipType={profile?.membership_type}
      >
        <UpgradeLockScreen
          title="Unlock workouts"
          text="Your current plan includes nutrition content, but workouts, training systems, and guided exercise tools are part of Full Access and above."
          requiredPlan="Full Access"
          buttonLabel="Upgrade to Full Access"
        />
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout
      title="Workouts"
      subtitle="Exclusive training systems with coaching, premium structure, and guided exercise execution."
      membershipType={profile?.membership_type}
    >
      <WorkoutsClient membershipType={profile?.membership_type} />
    </DashboardLayout>
  );
}
