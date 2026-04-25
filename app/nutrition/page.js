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
      subtitle="Personalized calories, macros, hydration, and smart supermarket grocery planning for one person or couples."
      membershipType={profile?.membership_type}
    >
      <NutritionClient membershipType={profile?.membership_type} />
    </DashboardLayout>
  );
}
