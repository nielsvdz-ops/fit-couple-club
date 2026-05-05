export const dynamic = "force-dynamic";

import { redirect } from "next/navigation";
import DashboardLayout from "../../components/DashboardLayout";
import BillingClient from "../../components/BillingClient";
import { getCurrentUserAndProfile } from "../../lib/getProfile";

export default async function BillingPage() {
  const { user, profile } = await getCurrentUserAndProfile();

  if (!user) redirect("/login");

  return (
    <DashboardLayout
      title="Billing"
      subtitle="Choose your system level — from nutrition structure to full transformation, Couple Zone accountability, VIP guidance, and coaching."
      membershipType={profile?.membership_type}
    >
      <BillingClient
        userEmail={String(user?.email || "").toLowerCase().trim()}
        membershipType={profile?.membership_type || "free"}
        isActive={Boolean(profile?.is_active)}
        hasCustomer={Boolean(profile?.stripe_customer_id)}
      />
    </DashboardLayout>
  );
}
