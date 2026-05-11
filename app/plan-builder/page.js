export const dynamic = "force-dynamic";

import { redirect } from "next/navigation";
import DashboardLayout from "../../components/DashboardLayout";
import UpgradeLockScreen from "../../components/UpgradeLockScreen";
import PlanBuilderClient from "../../components/PlanBuilderClient";
import { getCurrentUserAndProfile } from "../../lib/getProfile";
import { canAccessFitnessPages } from "../../lib/access";

export default async function PlanBuilderPage() {
  const { user, profile } = await getCurrentUserAndProfile();

  if (!user) redirect("/login");

  const membership = String(profile?.membership_type || "").toLowerCase().trim();

  if (!canAccessFitnessPages(profile)) {
    return (
      <DashboardLayout
        title="Plan Builder"
        subtitle=""
        membershipType={membership}
      >
        <section style={pageWrap}>
          <UpgradeLockScreen
            title="Unlock the Plan Builder"
            text="Build structured training plans based on your goal, focus, and weekly schedule. This feature is part of Full Access and above."
            requiredPlan="Full Access"
            buttonLabel="Upgrade to Full Access"
          />
        </section>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout
      title="Plan Builder"
      subtitle=""
      membershipType={membership}
    >
      <section style={pageWrap}>
        <PlanBuilderClient membershipType={membership} />
      </section>
    </DashboardLayout>
  );
}

const pageWrap = {
  width: "100%",
  maxWidth: "1500px",
  margin: "0 auto",
  display: "grid",
  gap: "clamp(18px, 3vw, 28px)",
  paddingBottom: "clamp(80px, 10vw, 120px)",
  overflowX: "hidden",
  boxSizing: "border-box",
};
