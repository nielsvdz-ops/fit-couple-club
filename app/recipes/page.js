export const dynamic = "force-dynamic";

import { redirect } from "next/navigation";
import DashboardLayout from "../../components/DashboardLayout";
import { getCurrentUserAndProfile } from "../../lib/getProfile";
import { canAccessNutritionPages } from "../../lib/access";
import RecipesClient from "../../components/RecipesClient";

export default async function RecipesPage() {
  const { user, profile } = await getCurrentUserAndProfile();

  if (!user) redirect("/login");
  if (!canAccessNutritionPages(profile)) redirect("/billing");

  return (
    <DashboardLayout
      title="Recipes"
      subtitle="Personalized daily food schedules based on your goal, sex, age, weight, height, and activity level."
      membershipType={profile?.membership_type}
    >
      <RecipesClient membershipType={profile?.membership_type} />
    </DashboardLayout>
  );
}
