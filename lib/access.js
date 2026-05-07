// /lib/access.js
// Fit Couple Club access rules v2
// Current memberships:
// - free
// - nutrition
// - full_access
// - vip
// - coaching
//
// Old names like starter/premium are kept as aliases so old profiles/components do not break.

export const MEMBERSHIP_LEVELS = {
  free: {
    rank: 0,
    en: "Free",
    nl: "Gratis",
  },
  nutrition: {
    rank: 1,
    en: "Nutrition",
    nl: "Voeding",
  },
  full_access: {
    rank: 2,
    en: "Full Access",
    nl: "Full Access",
  },
  vip: {
    rank: 3,
    en: "VIP",
    nl: "VIP",
  },
  coaching: {
    rank: 4,
    en: "Coaching",
    nl: "Coaching",
  },
};

export const MEMBERSHIP_ALIASES = {
  "": "free",
  null: "free",
  undefined: "free",

  free: "free",
  trial: "free",

  nutrition: "nutrition",
  food: "nutrition",
  recipes: "nutrition",

  full_access: "full_access",
  "full-access": "full_access",
  "full access": "full_access",
  fitness: "full_access",
  workout: "full_access",
  workouts: "full_access",

  // old names
  starter: "full_access",
  premium: "full_access",
  premium_plus: "vip",
  "premium-plus": "vip",

  vip: "vip",
  coaching: "coaching",
  coach: "coaching",
};

export function normalizeMembership(membershipType) {
  const clean = String(membershipType || "free").toLowerCase().trim();
  return MEMBERSHIP_ALIASES[clean] || clean || "free";
}

export function getMembershipRank(membershipType) {
  const normalized = normalizeMembership(membershipType);
  return MEMBERSHIP_LEVELS[normalized]?.rank || 0;
}

export function getMembershipLabel(membershipType, language = "en") {
  const normalized = normalizeMembership(membershipType);
  return (
    MEMBERSHIP_LEVELS[normalized]?.[language] ||
    MEMBERSHIP_LEVELS[normalized]?.en ||
    MEMBERSHIP_LEVELS.free.en
  );
}

export function isActiveProfile(profile) {
  return Boolean(profile?.is_active);
}

export function hasMinimumMembership(profile, requiredMembership = "free") {
  if (!profile) return false;

  const isActive = isActiveProfile(profile);
  const required = normalizeMembership(requiredMembership);

  if (required === "free") return true;
  if (!isActive) return false;

  return getMembershipRank(profile?.membership_type) >= getMembershipRank(required);
}

export function canAccessNutritionPages(profile) {
  // Nutrition pages include Nutrition + Recipes.
  // Nutrition, Full Access, VIP and Coaching all have access.
  return hasMinimumMembership(profile, "nutrition");
}

export function canAccessFitnessPages(profile) {
  // Fitness pages include Workouts, Programs, Plan Builder, Couple Zone, Progress.
  // Full Access, VIP and Coaching have access.
  return hasMinimumMembership(profile, "full_access");
}

export function canAccessFullAccessPages(profile) {
  return hasMinimumMembership(profile, "full_access");
}

export function canAccessVipPage(profile) {
  return hasMinimumMembership(profile, "vip");
}

export function canAccessCoachingPage(profile) {
  return hasMinimumMembership(profile, "coaching");
}

export function canAccessBillingPage(profile) {
  return Boolean(profile);
}

export function canAccessDashboard(profile) {
  return Boolean(profile);
}

export function getAccessRequiredForRoute(pathname = "") {
  const path = String(pathname || "").toLowerCase();

  if (
    path.includes("/nutrition") ||
    path.includes("/recipes")
  ) {
    return "nutrition";
  }

  if (
    path.includes("/workouts") ||
    path.includes("/programs") ||
    path.includes("/plan-builder") ||
    path.includes("/couple-zone") ||
    path.includes("/progress")
  ) {
    return "full_access";
  }

  if (path.includes("/vip")) {
    return "vip";
  }

  if (path.includes("/coaching")) {
    return "coaching";
  }

  return "free";
}

export function canAccessRoute(profile, pathname = "") {
  const required = getAccessRequiredForRoute(pathname);
  return hasMinimumMembership(profile, required);
}

export function getUpgradeTargetForRoute(pathname = "") {
  const required = getAccessRequiredForRoute(pathname);

  if (required === "nutrition") {
    return {
      membership: "nutrition",
      en: "Nutrition",
      nl: "Voeding",
    };
  }

  if (required === "full_access") {
    return {
      membership: "full_access",
      en: "Full Access",
      nl: "Full Access",
    };
  }

  if (required === "vip") {
    return {
      membership: "vip",
      en: "VIP",
      nl: "VIP",
    };
  }

  if (required === "coaching") {
    return {
      membership: "coaching",
      en: "Coaching",
      nl: "Coaching",
    };
  }

  return {
    membership: "free",
    en: "Free",
    nl: "Gratis",
  };
}

export function getAccessMessage(requiredMembership = "full_access", language = "en") {
  const label = getMembershipLabel(requiredMembership, language);

  const copy = {
    en: `This page is included in ${label}.`,
    nl: `Deze pagina is inbegrepen bij ${label}.`,
  };

  return copy[language] || copy.en;
}

// Backwards compatibility helpers for older components
export function isNutritionMember(profile) {
  return canAccessNutritionPages(profile);
}

export function isFitnessMember(profile) {
  return canAccessFitnessPages(profile);
}

export function isVipMember(profile) {
  return canAccessVipPage(profile);
}

export function isCoachingMember(profile) {
  return canAccessCoachingPage(profile);
}

export default {
  MEMBERSHIP_LEVELS,
  MEMBERSHIP_ALIASES,
  normalizeMembership,
  getMembershipRank,
  getMembershipLabel,
  hasMinimumMembership,
  canAccessNutritionPages,
  canAccessFitnessPages,
  canAccessFullAccessPages,
  canAccessVipPage,
  canAccessCoachingPage,
  canAccessBillingPage,
  canAccessDashboard,
  canAccessRoute,
  getAccessRequiredForRoute,
  getUpgradeTargetForRoute,
  getAccessMessage,
};
