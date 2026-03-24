export const dynamic = "force-dynamic";

import { redirect } from "next/navigation";
import { getUserAndSubscription } from "../../lib/getUser";
import NutritionClient from "../../components/NutritionClient";

export default async function NutritionPage() {
  const { user, subscription } = await getUserAndSubscription();

  if (!user) {
    redirect("/login");
  }

  if (!subscription || subscription.status !== "active") {
    redirect("/pricing");
  }

  return <NutritionClient />;
}
