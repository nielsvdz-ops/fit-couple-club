export const dynamic = "force-dynamic";

import { redirect } from "next/navigation";
import DashboardLayout from "../../components/DashboardLayout";
import PlanBuilderClient from "../../components/PlanBuilderClient";
import { getCurrentUserAndProfile } from "../../lib/getProfile";
import { canAccessStarterPages } from "../../lib/access";

export default async function PlanBuilderPage() {
  const { user, profile } = await getCurrentUserAndProfile();

  if (!user) redirect("/login");
  if (!canAccessStarterPages(profile)) redirect("/pricing");

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
