export const dynamic = "force-dynamic";

import { redirect } from "next/navigation";
import DashboardLayout from "../../components/DashboardLayout";
import { getCurrentUserAndProfile } from "../../lib/getProfile";
import { canAccessPremiumPages } from "../../lib/access";
import ProgressClient from "../../components/ProgressClient";

export default async function ProgressPage() {
  const { user, profile } = await getCurrentUserAndProfile();

  if (!user) redirect("/login");
  if (!canAccessPremiumPages(profile)) redirect("/pricing");

  return (
    <DashboardLayout
      title="Progress"
      subtitle="Premium and VIP members can track measurements, consistency, recovery, and weekly check-ins here."
      membershipType={profile?.membership_type}
    >
      <ProgressClient membershipType={profile?.membership_type} />
    </DashboardLayout>
  );
}
