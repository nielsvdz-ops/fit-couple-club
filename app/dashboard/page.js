export const dynamic = "force-dynamic";

import DashboardLayout from "../../components/DashboardLayout";
import { getProfileOrRedirect } from "../../lib/getProfile";
import { canAccessStarterPages, canAccessVipPage } from "../../lib/access";

export default async function DashboardPage() {
  const { user, profile } = await getProfileOrRedirect();

  if (!canAccessStarterPages(profile)) {
    return redirect("/pricing");
  }

  return (
    <DashboardLayout title="Dashboard" membershipType={profile.membership_type}>
      <h2>Welcome {profile.full_name || user.email}</h2>
      <p>Plan: {profile.membership_type}</p>

      <div style={{ marginTop: 20, display: "flex", gap: 10 }}>
        <a href="/plan-builder">Plan Builder</a>
        <a href="/nutrition">Nutrition</a>
        <a href="/recipes">Recipes</a>
      </div>

      {canAccessVipPage(profile) && (
        <div style={{ marginTop: 20 }}>
          <a href="/vip">Go to VIP</a>
        </div>
      )}
    </DashboardLayout>
  );
}
