export const dynamic = "force-dynamic";

import { redirect } from "next/navigation";
import DashboardLayout from "../../components/DashboardLayout";
import { getCurrentUserAndProfile } from "../../lib/getProfile";
import {
  canAccessStarterPages,
  canAccessNutritionPages,
  canAccessFitnessPages,
  canAccessVipPage,
} from "../../lib/access";

export default async function DashboardPage() {
  const { user, profile } = await getCurrentUserAndProfile();

  if (!user) redirect("/login");
  if (!canAccessStarterPages(profile)) redirect("/billing");

  const membership = String(profile?.membership_type || "free")
    .toLowerCase()
    .trim();

  const hasNutrition = canAccessNutritionPages(profile);
  const hasFitness = canAccessFitnessPages(profile);
  const hasVip = canAccessVipPage(profile);

  const t =
    {
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
        upgradeFull: "Upgrade to Full Access",
        upgradeTitle:
          "You are missing workouts, programs, progress tracking, and Couple Zone.",
        upgradeText:
          "Nutrition gives you food structure. Full Access gives you the complete system: training, programs, plan builder, progress tracking, and couple accountability.",
        upgradeNow: "Upgrade Now",
        workouts: "Workouts",
        workoutsText:
          "Training structure, splits, and exercise access based on your membership.",
        nutrition: "Nutrition",
        nutritionText:
          "Goal-based nutrition, grocery guidance, calories, and macro structure.",
        recipes: "Recipes",
        recipesText:
          "Recipe library and daily food structures based on your member level.",
        planBuilder: "Plan Builder",
        planBuilderText:
          "Generate training plans based on your goal, focus, and membership access.",
        programs: "Programs",
        programsText:
          "Structured transformations and premium program access.",
        coupleZone: "Couple Zone",
        coupleZoneText:
          "Partner-focused tools, shared goals, weekly scoring, and couple accountability.",
        progress: "Progress",
        progressText:
          "Track body changes, adherence, consistency, and progress over time.",
        vip: "VIP",
        vipText:
          "Monthly call access, VIP-only accountability, and exclusive support tools.",
        billing: "Billing",
        billingText:
          "Manage your membership, upgrade options, and subscription access.",
        account: "Account",
        accountText: "Your member profile and account settings.",
        mainFeature: "Main Feature",
      },
      nl: {
        title: "Dashboard",
        subtitle:
          "Jouw member omgeving. Toegang tot je plannen, voeding, recepten, billing en tools.",
        welcome: "Welkom terug",
        membership: "Membership",
        status: "Status",
        active: "Actief",
        inactive: "Niet actief",
        openPlan: "Open Plan Builder",
        openNutrition: "Open Nutrition",
        openRecipes: "Open Recepten",
        upgradeFull: "Upgrade naar Full Access",
        upgradeTitle:
          "Je mist workouts, programma’s, progress tracking en Couple Zone.",
        upgradeText:
          "Nutrition geeft je voedingsstructuur. Full Access geeft je het complete systeem: training, programma’s, plan builder, progress tracking en accountability.",
        upgradeNow: "Upgrade Nu",
        workouts: "Workouts",
        workoutsText:
          "Trainingsstructuur, schema’s en oefeningen op basis van je membership.",
        nutrition: "Voeding",
        nutritionText:
          "Doelgerichte voeding, boodschappen, calorieën en macro structuur.",
        recipes: "Recepten",
        recipesText:
          "Recepten en dagelijkse voedingsstructuren per membership.",
        planBuilder: "Plan Builder",
        planBuilderText:
          "Genereer trainingsschema’s gebaseerd op je doel en focus.",
        programs: "Programma’s",
        programsText:
          "Gestructureerde transformaties en premium programma’s.",
        coupleZone: "Couple Zone",
        coupleZoneText:
          "Partner tools, gedeelde doelen en accountability.",
        progress: "Progress",
        progressText:
          "Volg je progressie, consistentie en resultaten.",
        vip: "VIP",
        vipText:
          "Maandelijkse calls, VIP accountability en extra support.",
        billing: "Billing",
        billingText:
          "Beheer je membership en upgrade opties.",
        account: "Account",
        accountText: "Je profiel en instellingen.",
        mainFeature: "Hoofd Feature",
      },
    };

  // ⚠️ cannot use hook here (server component)
  const lang = "en"; // keep default OR later move language to cookie

  const tr = t[lang];

  return (
    <DashboardLayout
      title={tr.title}
      subtitle={tr.subtitle}
      membershipType={profile?.membership_type}
    >
      <div style={pageWrap}>
        <section style={heroCard}>
          <div>
            <div style={eyebrow}>{tr.welcome}</div>
            <h2 style={heroTitle}>
              {profile?.full_name || user.email}
            </h2>
            <p style={muted}>
              {tr.membership}:{" "}
              <strong>{formatMembership(profile?.membership_type)}</strong> ·{" "}
              {tr.status}:{" "}
              <strong>{profile?.is_active ? tr.active : tr.inactive}</strong>
            </p>
          </div>

          <div style={ctaRow}>
            {hasFitness && (
              <a href="/plan-builder" style={primaryButton}>
                {tr.openPlan}
              </a>
            )}

            {hasNutrition && (
              <a href="/nutrition" style={ghostButton}>
                {tr.openNutrition}
              </a>
            )}

            {hasNutrition && (
              <a href="/recipes" style={ghostButton}>
                {tr.openRecipes}
              </a>
            )}

            {membership === "nutrition" && (
              <a href="/billing" style={upgradeButton}>
                {tr.upgradeFull}
              </a>
            )}
          </div>
        </section>

        {membership === "nutrition" && (
          <section style={upgradeCard}>
            <div>
              <div style={eyebrow}>{tr.upgradeFull}</div>
              <h3 style={upgradeTitle}>{tr.upgradeTitle}</h3>
              <p style={muted}>{tr.upgradeText}</p>
            </div>

            <a href="/billing" style={upgradeButton}>
              {tr.upgradeNow}
            </a>
          </section>
        )}

        <section style={grid}>
          {hasFitness && (
            <a href="/workouts" style={cardLink}>
              <div style={cardTitle}>{tr.workouts}</div>
              <div style={cardText}>{tr.workoutsText}</div>
            </a>
          )}

          {hasNutrition && (
            <a href="/nutrition" style={cardLink}>
              <div style={cardTitle}>{tr.nutrition}</div>
              <div style={cardText}>{tr.nutritionText}</div>
            </a>
          )}

          {hasNutrition && (
            <a href="/recipes" style={cardLink}>
              <div style={cardTitle}>{tr.recipes}</div>
              <div style={cardText}>{tr.recipesText}</div>
            </a>
          )}

          {hasFitness && (
            <a href="/plan-builder" style={cardLink}>
              <div style={cardTitle}>{tr.planBuilder}</div>
              <div style={cardText}>{tr.planBuilderText}</div>
            </a>
          )}

          {hasFitness && (
            <>
              <a href="/programs" style={cardLink}>
                <div style={cardTitle}>{tr.programs}</div>
                <div style={cardText}>{tr.programsText}</div>
              </a>

              <a href="/couple-zone" style={featuredCardLink}>
                <div style={miniBadge}>{tr.mainFeature}</div>
                <div style={cardTitle}>{tr.coupleZone}</div>
                <div style={cardText}>{tr.coupleZoneText}</div>
              </a>

              <a href="/progress" style={cardLink}>
                <div style={cardTitle}>{tr.progress}</div>
                <div style={cardText}>{tr.progressText}</div>
              </a>
            </>
          )}

          {hasVip && (
            <a href="/vip" style={vipCardLink}>
              <div style={cardTitle}>{tr.vip}</div>
              <div style={cardText}>{tr.vipText}</div>
            </a>
          )}

          <a href="/billing" style={cardLink}>
            <div style={cardTitle}>{tr.billing}</div>
            <div style={cardText}>{tr.billingText}</div>
          </a>

          <a href="/account" style={cardLink}>
            <div style={cardTitle}>{tr.account}</div>
            <div style={cardText}>{tr.accountText}</div>
          </a>
        </section>
      </div>
    </DashboardLayout>
  );
}

function formatMembership(type) {
  const m = String(type || "").toLowerCase().trim();
  if (m === "nutrition") return "Nutrition";
  if (m === "full_access") return "Full Access";
  if (m === "vip") return "VIP";
  if (m === "coaching") return "Coaching";
  return "Free";
}
const pageWrap = {
  display: "grid",
  gap: "22px",
};

const heroCard = {
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: "22px",
  padding: "24px",
};

const upgradeCard = {
  background:
    "linear-gradient(135deg, rgba(250,204,21,0.12), rgba(255,255,255,0.04))",
  border: "1px solid rgba(250,204,21,0.28)",
  borderRadius: "22px",
  padding: "24px",
  display: "grid",
  gap: "16px",
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
  fontSize: "clamp(28px, 6vw, 36px)",
  fontWeight: "900",
};

const upgradeTitle = {
  margin: "0 0 8px 0",
  fontSize: "clamp(22px, 5vw, 30px)",
  fontWeight: "900",
  lineHeight: 1.15,
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
  gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))",
  gap: "18px",
};

const cardLink = {
  display: "block",
  textDecoration: "none",
  color: "white",
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: "20px",
  padding: "20px",
};

const featuredCardLink = {
  ...cardLink,
  background: "rgba(250,204,21,0.08)",
  border: "1px solid rgba(250,204,21,0.28)",
  position: "relative",
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
  fontSize: "24px",
  fontWeight: "900",
  marginBottom: "8px",
};

const cardText = {
  color: "rgba(255,255,255,0.68)",
  lineHeight: 1.7,
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

const upgradeButton = {
  display: "inline-block",
  padding: "12px 16px",
  borderRadius: "12px",
  background: "#facc15",
  color: "black",
  textDecoration: "none",
  fontWeight: "900",
  textAlign: "center",
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
