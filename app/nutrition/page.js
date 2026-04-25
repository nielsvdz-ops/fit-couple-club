export const dynamic = "force-dynamic";

import { redirect } from "next/navigation";
import DashboardLayout from "../../components/DashboardLayout";
import { getCurrentUserAndProfile } from "../../lib/getProfile";
import { canAccessNutritionPages } from "../../lib/access";
import NutritionClient from "../../components/NutritionClient";

export default async function NutritionPage() {
  const { user, profile } = await getCurrentUserAndProfile();

  if (!user) redirect("/login");
  if (!canAccessNutritionPages(profile)) redirect("/billing");

  return (
    <DashboardLayout
      title="Nutrition"
      subtitle="Personalized calories, macros, meal timing, grocery guidance, and 14-day sample structures."
      membershipType={profile?.membership_type}
    >
      <NutritionClient membershipType={profile?.membership_type} />
    </DashboardLayout>
  );
}
