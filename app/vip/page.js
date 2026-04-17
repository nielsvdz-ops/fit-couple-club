export const dynamic = "force-dynamic";

import { redirect } from "next/navigation";
import DashboardLayout from "../../components/DashboardLayout";
import VipClient from "../../components/VipClient";
import { getCurrentUserAndProfile } from "../../lib/getProfile";
import { canAccessVipPage } from "../../lib/access";

export default async function VipPage() {
  const { user, profile } = await getCurrentUserAndProfile();

  if (!user) redirect("/login");
  if (!canAccessVipPage(profile)) redirect("/billing");

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
