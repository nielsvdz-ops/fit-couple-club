export const dynamic = "force-dynamic";

import { redirect } from "next/navigation";
import DashboardLayout from "../../components/DashboardLayout";
import UpgradeLockScreen from "../../components/UpgradeLockScreen";
import VipClient from "../../components/VipClient";
import { getCurrentUserAndProfile } from "../../lib/getProfile";
import { canAccessCoachingPage } from "../../lib/access";

export default async function CoachingPage() {
  const { user, profile } = await getCurrentUserAndProfile();

  if (!user) redirect("/login");

  if (!canAccessCoachingPage(profile)) {
    return (
      <DashboardLayout
        title="Coaching"
        subtitle="Book coaching calls, plan your next steps, and get direct guidance."
        membershipType={profile?.membership_type}
      >
        <UpgradeLockScreen
          title="Unlock Coaching access"
          text="Coaching access is included with Nutrition and Full Access memberships."
          requiredPlan="Nutrition"
          buttonLabel="View memberships"
        />
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout
      title="Coaching"
      subtitle="Book coaching calls, schedule sessions, reschedule calls, and prepare your questions."
      membershipType={profile?.membership_type}
    >
      <VipClient membershipType={profile?.membership_type} />
    </DashboardLayout>
  );
}
