import { createClient } from "./supabase/server";

const VIP_SEED = 14;
const VIP_MAX = 90;

const COACHING_SEED = 2;
const COACHING_MAX = 12;

export async function getVipCounter() {
  const supabase = await createClient();

  const { count: vipCount, error: vipError } = await supabase
    .from("profiles")
    .select("*", { count: "exact", head: true })
    .eq("membership_type", "vip")
    .eq("is_active", true);

  const { count: coachingCount, error: coachingError } = await supabase
    .from("profiles")
    .select("*", { count: "exact", head: true })
    .eq("membership_type", "coaching")
    .eq("is_active", true);

  const realVipCount = vipError ? 0 : vipCount || 0;
  const realCoachingCount = coachingError ? 0 : coachingCount || 0;

  const vipSold = Math.min(VIP_SEED + realVipCount, VIP_MAX);
  const coachingSold = Math.min(
    COACHING_SEED + realCoachingCount,
    COACHING_MAX
  );

  return {
    vip: {
      sold: vipSold,
      remaining: Math.max(VIP_MAX - vipSold, 0),
      max: VIP_MAX,
      isSoldOut: vipSold >= VIP_MAX,
      label: `${vipSold}/${VIP_MAX} VIP spots taken`,
    },
    coaching: {
      sold: coachingSold,
      remaining: Math.max(COACHING_MAX - coachingSold, 0),
      max: COACHING_MAX,
      isSoldOut: coachingSold >= COACHING_MAX,
      label: `${coachingSold}/${COACHING_MAX} coaching spots taken`,
    },
  };
}
