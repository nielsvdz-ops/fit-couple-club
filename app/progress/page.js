export const dynamic = "force-dynamic";

import { redirect } from "next/navigation";
import DashboardLayout from "../../components/DashboardLayout";
import UpgradeLockScreen from "../../components/UpgradeLockScreen";
import ProgressClient from "../../components/ProgressClient";
import { getCurrentUserAndProfile } from "../../lib/getProfile";
import { canAccessFitnessPages } from "../../lib/access";

export default async function ProgressPage() {
  const { user, profile } = await getCurrentUserAndProfile();

  if (!user) redirect("/login");

  if (!canAccessFitnessPages(profile)) {
    return (
      <DashboardLayout
        title="Progress"
        subtitle="Track measurements, consistency, recovery, and weekly check-ins."
        membershipType={profile?.membership_type}
      >
        <UpgradeLockScreen
          title="Unlock progress tracking"
          text="Progress tracking, measurements, and check-ins are included with Full Access and above."
          requiredPlan="Full Access"
          buttonLabel="Upgrade to Full Access"
        />
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout
      title="Progress"
      subtitle="Track measurements, consistency, recovery, and weekly check-ins."
      membershipType={profile?.membership_type}
    >
      <ProgressClient membershipType={profile?.membership_type} />
    </DashboardLayout>
  );
}
