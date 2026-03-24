export const dynamic = "force-dynamic";

import { redirect } from "next/navigation";
import { getUserAndSubscription } from "../../lib/getUser";
import PlanBuilderClient from "../../components/PlanBuilderClient";

export default async function PlanBuilderPage() {
  const { user, subscription } = await getUserAndSubscription();

  if (!user) {
    redirect("/login");
  }

  return <PlanBuilderClient isPaid={subscription?.status === "active"} />;
}
