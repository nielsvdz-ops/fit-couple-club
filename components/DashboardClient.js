"use client";

import { useLanguage } from "../lib/useLanguage";

export default function DashboardClient({
  userEmail,
  fullName,
  membershipType,
  isActive,
  hasNutrition,
  hasFitness,
  hasVip,
}) {
  const { language } = useLanguage();

  const membership = String(membershipType || "free").toLowerCase().trim();

  const t = {
    en: {
      title: "Dashboard",
      subtitle:
        "Your member home base. Access your plans, food, recipes, billing, and member tools from here.",
      welcome: "Welcome Back",
      membership: "Membership",
      status: "Status",
      active: "Active",
      inactive: "Inactive",
      openPlan: "Open Plan Builder",
      openNutrition: "Open Nutrition",
      openRecipes: "Open Recipes",
      workouts: "Workouts",
      workoutsText: "Training structure, splits, and exercise access based on your membership.",
      nutrition: "Nutrition",
      nutritionText: "Goal-based nutrition, grocery guidance, calories, and macro structure.",
      recipes: "Recipes",
      recipesText: "Recipe library and daily food structures based on your member level.",
      planBuilder: "Plan Builder",
      planBuilderText: "Generate training plans based on your goal, focus, and membership access.",
      programs: "Programs",
      programsText: "Structured transformations and premium program access.",
      coupleZone: "Couple Zone",
      coupleZoneText: "Partner-focused tools, shared goals, weekly scoring, and couple accountability.",
      progress: "Progress",
      progressText: "Track body changes, adherence, consistency, and progress over time.",
      vip: "VIP",
      vipText: "Monthly call access, VIP-only accountability, and exclusive support tools.",
      billing: "Billing",
      billingText: "Manage your membership, upgrade options, and subscription access.",
      account: "Account",
      accountText: "Your member profile and account settings.",
      mainFeature: "Main Feature",
    },
    nl: {
      title: "Dashboard",
      subtitle:
        "Jouw member omgeving. Open je plannen, voeding, recepten, billing en member tools vanaf hier.",
      welcome: "Welkom terug",
      membership: "Membership",
      status: "Status",
      active: "Actief",
      inactive: "Niet actief",
      openPlan: "Open Plan Builder",
      openNutrition: "Open Voeding",
      openRecipes: "Open Recepten",
      workouts: "Workouts",
      workoutsText: "Trainingsstructuur, schema’s en oefeningen op basis van je membership.",
      nutrition: "Voeding",
      nutritionText: "Doelgerichte voeding, boodschappen, calorieën en macro structuur.",
      recipes: "Recepten",
      recipesText: "Receptenbibliotheek en dagelijkse voedingsstructuren per membership.",
      planBuilder: "Plan Builder",
      planBuilderText: "Maak trainingsschema’s gebaseerd op je doel, focus en toegang.",
      programs: "Programma’s",
      programsText: "Gestructureerde transformaties en premium programma’s.",
      coupleZone: "Couple Zone",
      coupleZoneText: "Partner tools, gedeelde doelen, weekscore en accountability.",
      progress: "Progressie",
      progressText: "Volg lichaamsverandering, consistentie en resultaten.",
      vip: "VIP",
      vipText: "Maandelijkse calls, VIP accountability en exclusieve support tools.",
      billing: "Billing",
      billingText: "Beheer je membership, upgrades en abonnement.",
      account: "Account",
      accountText: "Je profiel en accountinstellingen.",
      mainFeature: "Hoofdfeature",
    },
  }[language] || {};

  return (
    <div style={pageWrap}>
      <section style={pageHeader}>
        <h1 style={pageTitle}>{t.title}</h1>
        <p style={pageSubtitle}>{t.subtitle}</p>
      </section>

      <section style={heroCard}>
        <div>
          <div style={eyebrow}>{t.welcome}</div>
          <h2 style={heroTitle}>{fullName || userEmail}</h2>
          <p style={muted}>
            {t.membership}: <strong>{formatMembership(membership, language)}</strong> ·{" "}
            {t.status}: <strong>{isActive ? t.active : t.inactive}</strong>
          </p>
        </div>

        <div style={ctaRow}>
          {hasFitness && <a href="/plan-builder" style={primaryButton}>{t.openPlan}</a>}
          {hasNutrition && <a href="/nutrition" style={ghostButton}>{t.openNutrition}</a>}
          {hasNutrition && <a href="/recipes" style={ghostButton}>{t.openRecipes}</a>}
        </div>
      </section>

      <section style={grid}>
        {hasFitness && <Card href="/workouts" title={t.workouts} text={t.workoutsText} />}
        {hasNutrition && <Card href="/nutrition" title={t.nutrition} text={t.nutritionText} />}
        {hasNutrition && <Card href="/recipes" title={t.recipes} text={t.recipesText} />}
        {hasFitness && <Card href="/plan-builder" title={t.planBuilder} text={t.planBuilderText} />}
        {hasFitness && <Card href="/programs" title={t.programs} text={t.programsText} />}
        {hasFitness && (
          <a href="/couple-zone" style={featuredCardLink}>
            <div style={miniBadge}>{t.mainFeature}</div>
            <div style={cardTitle}>{t.coupleZone}</div>
            <div style={cardText}>{t.coupleZoneText}</div>
          </a>
        )}
        {hasFitness && <Card href="/progress" title={t.progress} text={t.progressText} />}
        {hasVip && <a href="/vip" style={vipCardLink}><div style={cardTitle}>{t.vip}</div><div style={cardText}>{t.vipText}</div></a>}
        <Card href="/billing" title={t.billing} text={t.billingText} />
        <Card href="/account" title={t.account} text={t.accountText} />
      </section>
    </div>
  );
}

function Card({ href, title, text }) {
  return (
    <a href={href} style={cardLink}>
      <div style={cardTitle}>{title}</div>
      <div style={cardText}>{text}</div>
    </a>
  );
}

function formatMembership(type, language) {
  if (type === "nutrition") return language === "nl" ? "Voeding" : "Nutrition";
  if (type === "full_access") return "Full Access";
  if (type === "vip") return "VIP";
  if (type === "coaching") return "Coaching";
  return "Free";
}

const pageWrap = {
  display: "grid",
  gap: "22px",
  width: "100%",
  maxWidth: "100%",
  overflowX: "hidden",
};

const pageHeader = {
  display: "grid",
  gap: "8px",
};

const pageTitle = {
  margin: 0,
  fontSize: "clamp(42px, 10vw, 76px)",
  fontWeight: "900",
  lineHeight: 0.95,
};

const pageSubtitle = {
  margin: 0,
  color: "rgba(255,255,255,0.68)",
  lineHeight: 1.7,
  fontSize: "clamp(15px, 4vw, 18px)",
};

const heroCard = {
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: "clamp(18px, 4vw, 22px)",
  padding: "clamp(18px, 5vw, 24px)",
  boxSizing: "border-box",
};

const eyebrow = {
  fontSize: "12px",
  textTransform: "uppercase",
  letterSpacing: "0.16em",
  color: "rgba(255,255,255,0.45)",
  marginBottom: "8px",
};

const heroTitle = {
  margin: 0,
  fontSize: "clamp(26px, 7vw, 36px)",
  fontWeight: "900",
  overflowWrap: "anywhere",
};

const muted = {
  color: "rgba(255,255,255,0.7)",
  lineHeight: 1.8,
};

const ctaRow = {
  display: "flex",
  gap: "12px",
  flexWrap: "wrap",
  marginTop: "18px",
};

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,240px),1fr))",
  gap: "18px",
};

const cardLink = {
  display: "block",
  textDecoration: "none",
  color: "white",
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: "20px",
  padding: "clamp(18px, 5vw, 20px)",
  minWidth: 0,
};

const featuredCardLink = {
  ...cardLink,
  background: "rgba(250,204,21,0.08)",
  border: "1px solid rgba(250,204,21,0.28)",
};

const vipCardLink = {
  ...cardLink,
  background: "rgba(96,165,250,0.08)",
  border: "1px solid rgba(96,165,250,0.28)",
};

const miniBadge = {
  display: "inline-block",
  marginBottom: "10px",
  padding: "5px 9px",
  borderRadius: "999px",
  background: "#facc15",
  color: "black",
  fontSize: "11px",
  fontWeight: "900",
};

const cardTitle = {
  fontSize: "clamp(22px, 5vw, 24px)",
  fontWeight: "900",
  marginBottom: "8px",
};

const cardText = {
  color: "rgba(255,255,255,0.68)",
  lineHeight: 1.7,
  fontSize: "15px",
};

const primaryButton = {
  display: "inline-block",
  padding: "12px 16px",
  borderRadius: "12px",
  background: "white",
  color: "black",
  textDecoration: "none",
  fontWeight: "900",
};

const ghostButton = {
  display: "inline-block",
  padding: "12px 16px",
  borderRadius: "12px",
  border: "1px solid rgba(255,255,255,0.16)",
  background: "transparent",
  color: "white",
  textDecoration: "none",
  fontWeight: "800",
};
