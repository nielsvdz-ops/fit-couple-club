export function normalizeMembership(value) {
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
