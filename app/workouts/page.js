export const dynamic = "force-dynamic";

import { redirect } from "next/navigation";
import DashboardLayout from "../../components/DashboardLayout";
import WorkoutsClient from "../../components/WorkoutsClient";
import { getCurrentUserAndProfile } from "../../lib/getProfile";
import { canAccessStarterPages } from "../../lib/access";

export default async function WorkoutsPage() {
  const { user, profile } = await getCurrentUserAndProfile();

  if (!user) redirect("/login");
  if (!canAccessStarterPages(profile)) redirect("/pricing");

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
