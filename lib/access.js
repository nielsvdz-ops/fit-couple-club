export function normalizeMembership(value) {
  return String(value || "").toLowerCase().trim();
}

export function isActiveProfile(profile) {
  return Boolean(profile?.is_active);
}

export function isStarter(profile) {
  return isActiveProfile(profile) && normalizeMembership(profile?.membership_type) === "starter";
}

export function isPremium(profile) {
  return isActiveProfile(profile) && normalizeMembership(profile?.membership_type) === "premium";
}

export function isVip(profile) {
  return isActiveProfile(profile) && normalizeMembership(profile?.membership_type) === "vip";
}

export function canAccessStarterPages(profile) {
  const membership = normalizeMembership(profile?.membership_type);
  return isActiveProfile(profile) && ["starter", "premium", "vip"].includes(membership);
}

export function canAccessPremiumPages(profile) {
  const membership = normalizeMembership(profile?.membership_type);
  return isActiveProfile(profile) && ["premium", "vip"].includes(membership);
}

export function canAccessVipPage(profile) {
  return isVip(profile);
}

export function canSavePlans(profile) {
  const membership = normalizeMembership(profile?.membership_type);
  return isActiveProfile(profile) && ["premium", "vip"].includes(membership);
}

export function canUseAdvancedRotations(profile) {
  const membership = normalizeMembership(profile?.membership_type);
  return isActiveProfile(profile) && ["premium", "vip"].includes(membership);
}

export function getWorkoutVariationLimit(profile) {
  const membership = normalizeMembership(profile?.membership_type);
  if (membership === "starter") return 4;
  if (membership === "premium" || membership === "vip") return 10;
  return 0;
}export function normalizeMembership(value) {
  return String(value || "").toLowerCase().trim();
}

export function isActive(profile) {
  return Boolean(profile?.is_active);
}

export function isStarter(profile) {
  return isActive(profile) && normalizeMembership(profile?.membership_type) === "starter";
}

export function isPremium(profile) {
  return isActive(profile) && normalizeMembership(profile?.membership_type) === "premium";
}

export function isVip(profile) {
  return isActive(profile) && normalizeMembership(profile?.membership_type) === "vip";
}

// 🔓 Access rules
export function canAccessStarterPages(profile) {
  return isStarter(profile) || isPremium(profile) || isVip(profile);
}

export function canAccessPremiumPages(profile) {
  return isPremium(profile) || isVip(profile);
}

export function canAccessVipPage(profile) {
  return isVip(profile);
}
