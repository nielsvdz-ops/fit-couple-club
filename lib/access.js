export function normalizeMembership(value) {
  return String(value || "").toLowerCase().trim();
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

export function canAccessVipPage(profile) {
  const membership = normalizeMembership(profile?.membership_type);
  return (
    isActiveProfile(profile) &&
    ["vip", "coaching"].includes(membership)
  );
}

export function canAccessBilling(profile) {
  return isActiveProfile(profile);
}

export function canAccessAccount(profile) {
  return isActiveProfile(profile);
}

export function canSavePlans(profile) {
  const membership = normalizeMembership(profile?.membership_type);
  return (
    isActiveProfile(profile) &&
    ["full_access", "vip", "coaching"].includes(membership)
  );
}

export function canUseAdvancedRotations(profile) {
  const membership = normalizeMembership(profile?.membership_type);
  return (
    isActiveProfile(profile) &&
    ["full_access", "vip", "coaching"].includes(membership)
  );
}

export function getWorkoutVariationLimit(profile) {
  const membership = normalizeMembership(profile?.membership_type);

  if (membership === "nutrition") return 0;
  if (membership === "full_access") return 10;
  if (membership === "vip" || membership === "coaching") return 10;

  return 0;
}
