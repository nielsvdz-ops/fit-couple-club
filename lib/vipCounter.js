import { createClient } from "./supabase/server";

const VIP_SEED = 24;
const VIP_MAX = 150;

export async function getVipCounter() {
  const supabase = await createClient();

  const { count, error } = await supabase
    .from("profiles")
    .select("*", { count: "exact", head: true })
    .eq("membership_type", "vip")
    .eq("is_active", true);

  if (error) {
    return {
      sold: VIP_SEED,
      remaining: VIP_MAX - VIP_SEED,
      max: VIP_MAX,
      isSoldOut: false,
    };
  }

  const realVipCount = count || 0;
  const sold = Math.min(VIP_SEED + realVipCount, VIP_MAX);
  const remaining = Math.max(VIP_MAX - sold, 0);

  return {
    sold,
    remaining,
    max: VIP_MAX,
    isSoldOut: sold >= VIP_MAX,
  };
}
