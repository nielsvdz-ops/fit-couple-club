export const dynamic = "force-dynamic";

import { redirect } from "next/navigation";
import DashboardLayout from "../../components/DashboardLayout";
import { getCurrentUserAndProfile } from "../../lib/getProfile";
import { canAccessStarterPages } from "../../lib/access";
import RecipesClient from "../../components/RecipesClient";

export default async function RecipesPage() {
  const { user, profile } = await getCurrentUserAndProfile();

  if (!user) redirect("/login");
  if (!canAccessStarterPages(profile)) redirect("/pricing");

  return (
    <DashboardLayout
      title="Recipes"
      subtitle="Goal-based daily food schedules, recipe instructions, calories, and full weekly structure."
      membershipType={profile?.membership_type}
    >
      <RecipesClient membershipType={profile?.membership_type} />
    </DashboardLayout>
  );
}
