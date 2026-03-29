export const dynamic = "force-dynamic";

import { redirect } from "next/navigation";
import DashboardLayout from "../../components/DashboardLayout";
import { getCurrentUserAndProfile } from "../../lib/getProfile";
import { canAccessStarterPages } from "../../lib/access";
import NutritionClient from "../../components/NutritionClient";

export default async function NutritionPage() {
  const { user, profile } = await getCurrentUserAndProfile();

  if (!user) redirect("/login");
  if (!canAccessStarterPages(profile)) redirect("/pricing");

  return (
    <DashboardLayout
      title="Nutrition"
      subtitle="Goal-based eating guidance with structure matched to your member level."
      membershipType={profile?.membership_type}
    >
      <NutritionClient membershipType={profile?.membership_type} />
    </DashboardLayout>
  );
}
