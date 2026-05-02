export function normalizeMembership(value) {
  return String(value || "free").toLowerCase().trim();
}

export function isActiveProfile(profile) {
  return Boolean(profile?.is_active);
}

export function isNutrition(profile) {
  return (
    isActiveProfile(profile) &&
    normalizeMembership(profile?.membership_type) === "nutrition"
  );
}

export function isFullAccess(profile) {
  return (
    isActiveProfile(profile) &&
    normalizeMembership(profile?.membership_type) === "full_access"
  );
}

export function isVip(profile) {
  return (
    isActiveProfile(profile) &&
    normalizeMembership(profile?.membership_type) === "vip"
  );
}

export function isCoaching(profile) {
  return (
    isActiveProfile(profile) &&
    normalizeMembership(profile?.membership_type) === "coaching"
  );
}

export function canAccessNutritionPages(profile) {
  const membership = normalizeMembership(profile?.membership_type);
  return (
    isActiveProfile(profile) &&
    ["nutrition", "full_access", "vip", "coaching"].includes(membership)
  );
}

export function canAccessFitnessPages(profile) {
  const membership = normalizeMembership(profile?.membership_type);
  return (
    isActiveProfile(profile) &&
    ["full_access", "vip", "coaching"].includes(membership)
  );
}

export function canAccessStarterPages(profile) {
  return canAccessNutritionPages(profile) || canAccessFitnessPages(profile);
}

export function canAccessPremiumPages(profile) {
  return canAccessFitnessPages(profile);
}

export function canAccessVipPage(profile) {
  const membership = normalizeMembership(profile?.membership_type);
  return (
    isActiveProfile(profile) && ["vip", "coaching"].includes(membership)
  );
}

export function canAccessCoaching(profile) {
  return (
    isActiveProfile(profile) &&
    normalizeMembership(profile?.membership_type) === "coaching"
  );
}

export function canAccessBilling() {
  return true;
}

export function canAccessAccount(profile) {
  return Boolean(profile);
}

export function canSavePlans(profile) {
  return canAccessFitnessPages(profile);
}

export function canUseAdvancedRotations(profile) {
  return canAccessFitnessPages(profile);
}

export function getWorkoutVariationLimit(profile) {
  const membership = normalizeMembership(profile?.membership_type);

  if (membership === "nutrition") return 0;
  if (membership === "full_access") return 10;
  if (membership === "vip") return 10;
  if (membership === "coaching") return 10;

  return 0;
}
