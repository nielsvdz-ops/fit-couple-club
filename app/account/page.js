export const dynamic = "force-dynamic";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import DashboardLayout from "../../components/DashboardLayout";
import { getCurrentUserAndProfile } from "../../lib/getProfile";

const copy = {
  en: {
    title: "Account",
    subtitle: "Your member account details, plan status, and personal setup.",
    name: "Name",
    email: "Email",
    membership: "Membership",
    preferences: "Goals & Preferences",
    preferencesText:
      "Update your goal, diet style, allergies, fasting setup, training location, experience level, and Booty Builder focus anytime.",
    preferencesButton: "Edit Preferences",

    dashboard: "Open Dashboard",
    dashboardText:
      "Continue to your workouts, nutrition, recipes, progress, and programs.",
    dashboardButton: "Go to Dashboard",

    notSet: "Not set",
    free: "Free",
    nutrition: "Nutrition",
    fullAccess: "Full Access",
    vip: "VIP",
    coaching: "Coaching",
  },

  nl: {
    title: "Account",
    subtitle: "Jouw accountgegevens, lidmaatschap status en persoonlijke setup.",
    name: "Naam",
    email: "E-mail",
    membership: "Lidmaatschap",
    preferences: "Doelen & Voorkeuren",
    preferencesText:
      "Pas je doel, dieetstijl, allergieën, fasting setup, trainingslocatie, ervaring en Booty Builder focus altijd aan.",
    preferencesButton: "Voorkeuren Aanpassen",

    dashboard: "Open Dashboard",
    dashboardText:
      "Ga verder naar je workouts, voeding, recepten, progressie en programma’s.",
    dashboardButton: "Naar Dashboard",

    notSet: "Niet ingesteld",
    free: "Gratis",
    nutrition: "Nutrition",
    fullAccess: "Full Access",
    vip: "VIP",
    coaching: "Coaching",
  },
};

function getLanguage() {
  const cookieStore = cookies();

  const saved =
    cookieStore.get("language")?.value ||
    cookieStore.get("fitcouple_language")?.value ||
    cookieStore.get("NEXT_LOCALE")?.value ||
    "en";

  return saved === "nl" ? "nl" : "en";
}

export default async function AccountPage() {
  const { user, profile } = await getCurrentUserAndProfile();

  if (!user) redirect("/login");

  const language = getLanguage();
  const t = copy[language];

  return (
    <DashboardLayout
      title={t.title}
      subtitle={t.subtitle}
      membershipType={profile?.membership_type}
    >
      <div style={pageWrap}>
        <section style={heroCard}>
          <img src="/images/background.png" alt="" style={heroImage} />
          <div style={heroOverlay} />

          <div style={heroContent}>
            <div style={eyebrowRed}>{t.title}</div>

            <h1 style={heroTitle}>
              {profile?.full_name || t.title}
            </h1>

            <p style={heroSubtitle}>{t.subtitle}</p>
          </div>
        </section>

        <div style={gridStyle}>
          <section style={card}>
            <div style={cardLabel}>{t.name}</div>
            <div style={cardText}>{profile?.full_name || t.notSet}</div>
          </section>

          <section style={card}>
            <div style={cardLabel}>{t.email}</div>
            <div style={cardText}>{profile?.email || user.email}</div>
          </section>

          <section style={card}>
            <div style={cardLabel}>{t.membership}</div>
            <div style={membershipBadge}>
              {formatMembership(profile?.membership_type, t)}
            </div>
          </section>

          <section style={preferenceCard}>
            <div>
              <div style={cardLabel}>{t.preferences}</div>
              <h2 style={preferenceTitle}>{t.preferences}</h2>
              <p style={preferenceText}>{t.preferencesText}</p>
            </div>

            <a href="/preferences" style={preferenceButton}>
              {t.preferencesButton}
            </a>
          </section>

          <section style={dashboardCard}>
            <div>
              <div style={cardLabel}>{t.dashboard}</div>
              <h2 style={preferenceTitle}>{t.dashboard}</h2>
              <p style={preferenceText}>{t.dashboardText}</p>
            </div>

            <a href="/dashboard" style={dashboardButton}>
              {t.dashboardButton}
            </a>
          </section>
        </div>
      </div>
    </DashboardLayout>
  );
}

function formatMembership(type, t) {
  const m = String(type || "").toLowerCase().trim();

  if (m === "nutrition") return t.nutrition;
  if (m === "full_access") return t.fullAccess;
  if (m === "vip") return t.vip;
  if (m === "coaching") return t.coaching;

  return t.free;
}

const pageWrap = {
  display: "grid",
  gap: "24px",
  width: "100%",
  maxWidth: "100%",
};

const heroCard = {
  position: "relative",
  overflow: "hidden",
  border: "1px solid rgba(255,255,255,0.10)",
  minHeight: "320px",
  display: "flex",
  alignItems: "center",
  background: "#050505",
};

const heroImage = {
  position: "absolute",
  inset: 0,
  width: "100%",
  height: "100%",
  objectFit: "cover",
  filter: "grayscale(1) brightness(0.28) contrast(1.18)",
};

const heroOverlay = {
  position: "absolute",
  inset: 0,
  background:
    "linear-gradient(90deg, rgba(0,0,0,0.96), rgba(0,0,0,0.76), rgba(100,0,0,0.42))",
  zIndex: 1,
};

const heroContent = {
  position: "relative",
  zIndex: 2,
  padding: "clamp(26px, 6vw, 48px)",
  maxWidth: "760px",
};

const eyebrowRed = {
  fontSize: "12px",
  textTransform: "uppercase",
  letterSpacing: "0.18em",
  color: "#ef4444",
  marginBottom: "10px",
  fontWeight: "950",
};

const heroTitle = {
  margin: 0,
  fontSize: "clamp(44px, 8vw, 76px)",
  fontWeight: "950",
  lineHeight: 0.92,
  letterSpacing: "-0.06em",
  textTransform: "uppercase",
  overflowWrap: "break-word",
};

const heroSubtitle = {
  marginTop: "18px",
  color: "rgba(255,255,255,0.72)",
  lineHeight: 1.8,
  maxWidth: "720px",
  fontSize: "16px",
};

const gridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,300px),1fr))",
  gap: "18px",
};

const card = {
  background: "#060606",
  border: "1px solid rgba(255,255,255,0.09)",
  borderLeft: "3px solid rgba(255,255,255,0.16)",
  padding: "24px",
  display: "grid",
  gap: "10px",
  minWidth: 0,
  overflowWrap: "break-word",
};

const cardLabel = {
  fontSize: "12px",
  textTransform: "uppercase",
  letterSpacing: "0.14em",
  color: "rgba(255,255,255,0.45)",
  fontWeight: "900",
};

const cardText = {
  color: "rgba(255,255,255,0.88)",
  lineHeight: 1.7,
  fontSize: "20px",
  fontWeight: "900",
  overflowWrap: "break-word",
};

const membershipBadge = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  width: "fit-content",
  padding: "10px 16px",
  background: "rgba(176,0,0,0.18)",
  border: "1px solid rgba(176,0,0,0.45)",
  color: "white",
  fontWeight: "950",
  fontSize: "13px",
  textTransform: "uppercase",
  letterSpacing: "0.08em",
};

const preferenceCard = {
  gridColumn: "1 / -1",
  background:
    "linear-gradient(135deg, rgba(127,29,29,0.34), rgba(255,255,255,0.035))",
  border: "1px solid rgba(176,0,0,0.35)",
  borderLeft: "3px solid #b00000",
  padding: "clamp(24px, 5vw, 34px)",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "24px",
  flexWrap: "wrap",
};

const dashboardCard = {
  gridColumn: "1 / -1",
  background:
    "linear-gradient(135deg, rgba(176,0,0,0.18), rgba(255,255,255,0.025))",
  border: "1px solid rgba(176,0,0,0.28)",
  borderLeft: "3px solid #d00000",
  padding: "clamp(24px, 5vw, 34px)",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "24px",
  flexWrap: "wrap",
};

const preferenceTitle = {
  margin: "8px 0 10px",
  fontSize: "clamp(28px, 5vw, 44px)",
  lineHeight: 0.95,
  fontWeight: "950",
  textTransform: "uppercase",
  letterSpacing: "-0.04em",
};

const preferenceText = {
  margin: 0,
  maxWidth: "760px",
  color: "rgba(255,255,255,0.72)",
  lineHeight: 1.75,
};

const preferenceButton = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "16px 22px",
  background: "#b00000",
  color: "white",
  textDecoration: "none",
  fontWeight: "950",
  textTransform: "uppercase",
  letterSpacing: "0.06em",
};

const dashboardButton = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "16px 22px",
  background: "#d00000",
  color: "white",
  textDecoration: "none",
  fontWeight: "950",
  textTransform: "uppercase",
  letterSpacing: "0.06em",
};