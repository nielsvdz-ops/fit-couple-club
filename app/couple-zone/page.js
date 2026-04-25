export const dynamic = "force-dynamic";

import { redirect } from "next/navigation";
import DashboardLayout from "../../components/DashboardLayout";
import UpgradeLockScreen from "../../components/UpgradeLockScreen";
import CoupleZoneClient from "../../components/CoupleZoneClient";
import { getCurrentUserAndProfile } from "../../lib/getProfile";
import { canAccessFitnessPages } from "../../lib/access";

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
      <CoupleZoneClient />
    </DashboardLayout>
  );
}
