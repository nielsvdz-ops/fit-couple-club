export const dynamic = "force-dynamic";

import { redirect } from "next/navigation";
import DashboardLayout from "../../components/DashboardLayout";
import UpgradeLockScreen from "../../components/UpgradeLockScreen";
import VipClient from "../../components/VipClient";
import { getCurrentUserAndProfile } from "../../lib/getProfile";
import { canAccessVipPage } from "../../lib/access";

export default async function VipPage() {
  const { user, profile } = await getCurrentUserAndProfile();

  if (!user) redirect("/login");

  if (!canAccessVipPage(profile)) {
    return (
      <DashboardLayout
        title="VIP"
        subtitle="VIP-only access with monthly progress call support, exclusive accountability, and premium member tools."
        membershipType={profile?.membership_type}
      >
        <UpgradeLockScreen
          title="Unlock VIP access"
          text="VIP includes monthly coaching support, priority help, and VIP-only tools."
          requiredPlan="VIP"
          buttonLabel="Upgrade to VIP"
        />
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout
      title="VIP"
      subtitle="VIP-only access with monthly progress call support, exclusive accountability, and premium member tools."
      membershipType={profile?.membership_type}
    >
      <VipClient membershipType={profile?.membership_type} />
    </DashboardLayout>
  );
}
