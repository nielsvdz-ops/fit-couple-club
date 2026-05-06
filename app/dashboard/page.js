export const dynamic = "force-dynamic";

import { redirect } from "next/navigation";
import DashboardLayout from "../../components/DashboardLayout";
import { getCurrentUserAndProfile } from "../../lib/getProfile";
import {
  canAccessStarterPages,
  canAccessNutritionPages,
  canAccessFitnessPages,
  canAccessVipPage,
} from "../../lib/access";
import DashboardClient from "../../components/DashboardClient";

export default async function DashboardPage() {
  const { user, profile } = await getCurrentUserAndProfile();

  if (!user) redirect("/login");
  if (!canAccessStarterPages(profile)) redirect("/billing");

  return (
    <DashboardLayout title="" subtitle="" membershipType={profile?.membership_type}>
      <DashboardClient
        userEmail={user.email}
        fullName={profile?.full_name}
        membershipType={profile?.membership_type}
        isActive={profile?.is_active}
        hasNutrition={canAccessNutritionPages(profile)}
        hasFitness={canAccessFitnessPages(profile)}
        hasVip={canAccessVipPage(profile)}
      />
    </DashboardLayout>
  );
}
