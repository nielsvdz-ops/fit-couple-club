"use client";

import { useState } from "react";
import LanguageToggle from "./LanguageToggle";
import { useLanguage } from "../lib/useLanguage";

const labels = {
  en: {
    dashboard: "Dashboard",
    nutrition: "Nutrition",
    recipes: "Recipes",
    planBuilder: "Plan Builder",
    workouts: "Workouts",
    programs: "Programs",
    coupleZone: "Couple Zone",
    progress: "Progress",
    coaching: "Coaching",
    billing: "Billing",
    account: "Account",
    member: "Member",
    free: "Free",
    upgrade: "Upgrade",
    close: "Close",
    menu: "Menu",
  },

  nl: {
    dashboard: "Dashboard",
    nutrition: "Voeding",
    recipes: "Recepten",
    planBuilder: "Plan Bouwer",
    workouts: "Trainingen",
    programs: "Programma’s",
    coupleZone: "Couple Zone",
    progress: "Progressie",
    coaching: "Coaching",
    billing: "Abonnement",
    account: "Account",
    member: "Lid",
    free: "Gratis",
    upgrade: "Upgrade",
    close: "Sluiten",
    menu: "Menu",
  },
};

const titleMap = {
  en: {
    Dashboard: "Dashboard",
    Billing: "Billing",
    Nutrition: "Nutrition",
    Recipes: "Recipes",
    "Plan Builder": "Plan Builder",
    Workouts: "Workouts",
    Programs: "Programs",
    "Couple Zone": "Couple Zone",
    Progress: "Progress",
    Coaching: "Coaching",
    Account: "Account",
  },

  nl: {
    Dashboard: "Dashboard",
    Billing: "Abonnement",
    Nutrition: "Voeding",
    Recipes: "Recepten",
    "Plan Builder": "Plan Bouwer",
    Workouts: "Trainingen",
    Programs: "Programma’s",
    "Couple Zone": "Couple Zone",
    Progress: "Progressie",
    Coaching: "Coaching",
    Account: "Account",
  },
};

function translateText(value, language, map) {
  if (!value) return "";
  return map?.[language]?.[value] || map?.en?.[value] || value;
}

export default function DashboardLayout({
  title,
  subtitle,
  children,
  membershipType,
}) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const { language } = useLanguage();

  const t = labels[language] || labels.en;

  const membership = String(membershipType || "")
    .toLowerCase()
    .trim();

  const canAccessNutrition =
    membership === "nutrition" ||
    membership === "full_access";

  const canAccessFitness =
    membership === "full_access";

  const canAccessCoaching =
    membership === "nutrition" ||
    membership === "full_access";

  const navItems = [
    [t.dashboard, "/dashboard"],

    ...(canAccessNutrition
      ? [
          [t.nutrition, "/nutrition"],
          [t.recipes, "/recipes"],
        ]
      : []),

    ...(canAccessFitness
      ? [
          [t.planBuilder, "/plan-builder"],
          [t.workouts, "/workouts"],
          [t.programs, "/programs"],
          [t.coupleZone, "/couple-zone"],
          [t.progress, "/progress"],
        ]
      : []),

    ...(canAccessCoaching
      ? [[t.coaching, "/coaching"]]
      : []),

    [t.billing, "/billing"],
    [t.account, "/account"],
  ];

  const translatedTitle = translateText(
    title,
    language,
    titleMap
  );

  return (
    <div style={layout}>
      <aside style={sidebar}>
        <div style={sidebarOverlay} />

        <SidebarContent
          navItems={navItems}
          membership={membership}
          t={t}
        />
      </aside>

      <div style={mobileTopbar}>
        <button
          type="button"
          onClick={() => setMobileOpen(true)}
          style={mobileMenuButton}
        >
          ☰ {t.menu}
        </button>

        <div style={mobileBrand}>
          FITCOUPLECLUB
        </div>

        <LanguageToggle />
      </div>

      {mobileOpen && (
        <div style={overlay}>
          <div style={mobilePanel}>
            <div style={mobilePanelOverlay} />

            <button
              type="button"
              onClick={() => setMobileOpen(false)}
              style={closeButton}
            >
              ✕ {t.close}
            </button>

            <SidebarContent
              navItems={navItems}
              membership={membership}
              t={t}
              onNavigate={() => setMobileOpen(false)}
            />
          </div>
        </div>
      )}

      <main style={main}>
        <div style={mainGlow} />

        <div style={pageHeader}>
          <div style={pageEyebrow}>
            FITCOUPLECLUB SYSTEM
          </div>

          <h1 style={pageTitle}>
            {translatedTitle}
          </h1>

          {subtitle ? (
            <p style={subtitleStyle}>
              {subtitle}
            </p>
          ) : null}
        </div>

        {children}
      </main>

     <nav style={bottomNav}>
  <a href="/dashboard" style={bottomLink}>
    Home
  </a>

  <
          {t.dashboard}
        </a>

        <a href="/billing" style={bottomLinkActive}>
          {t.upgrade}
        </a>

        <a href="/account" style={bottomLink}>
          {t.account}
        </a>
      </nav>
    </div>
  );
}

function SidebarContent({
  navItems,
  membership,
  t,
  onNavigate,
}) {
  return (
    <>
      <div style={brandWrap}>
        <img
          src="/images/fitcouple-logo.png"
          alt="FitCoupleClub"
          style={brandLogo}
        />

        <div style={brandText}>
          ONE GOAL.
          <br />
          ONE MINDSET.
        </div>
      </div>

      <div style={topRow}>
        <div style={memberTag}>
          {formatMembershipLabel(membership, t)}
        </div>

        <LanguageToggle />
      </div>

      <div style={nav}>
        {navItems.map(([label, href]) => (
          <a
            key={`${label}-${href}`}
            href={href}
            style={navLink}
            onClick={onNavigate}
          >
            <span style={navDot} />
            {label}
          </a>
        ))}
      </div>
    </>
  );
}

function formatMembershipLabel(membership, t) {
  if (membership === "nutrition")
    return "Nutrition";

  if (membership === "full_access")
    return "Full Access";

  if (membership === "free")
    return t.free;

  return t.member;
}

const layout = {
  display: "grid",
  gridTemplateColumns: "300px 1fr",
  minHeight: "100vh",
  background: "#020202",
  color: "white",
};

const sidebar = {
  position: "sticky",
  top: 0,
  height: "100vh",
  padding: "28px 18px",
  borderRight:
    "1px solid rgba(255,255,255,0.08)",
  background: "#050505",
  overflow: "hidden",
};

const sidebarOverlay = {
  position: "absolute",
  inset: 0,
  background:
    "radial-gradient(circle at top, rgba(120,0,0,0.22), transparent 45%)",
  pointerEvents: "none",
};

const brandWrap = {
  position: "relative",
  zIndex: 2,
  marginBottom: "24px",
};

const brandLogo = {
  width: "170px",
  marginBottom: "16px",
  filter:
    "drop-shadow(0 20px 40px rgba(0,0,0,0.7))",
};

const brandText = {
  color: "rgba(255,255,255,0.52)",
  fontSize: "12px",
  fontWeight: "950",
  letterSpacing: "0.16em",
  textTransform: "uppercase",
  lineHeight: 1.8,
};

const topRow = {
  position: "relative",
  zIndex: 2,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "10px",
  marginBottom: "28px",
};

const memberTag = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "10px 14px",
  background: "rgba(176,0,0,0.12)",
  border:
    "1px solid rgba(176,0,0,0.35)",
  color: "#ef4444",
  fontWeight: "950",
  textTransform: "uppercase",
  fontSize: "12px",
  letterSpacing: "0.08em",
};

const nav = {
  position: "relative",
  zIndex: 2,
  display: "grid",
  gap: "12px",
};

const navLink = {
  display: "flex",
  alignItems: "center",
  gap: "14px",
  textDecoration: "none",
  color: "white",
  padding: "16px 18px",
  background: "rgba(255,255,255,0.03)",
  border:
    "1px solid rgba(255,255,255,0.08)",
  fontWeight: "900",
  fontSize: "15px",
  textTransform: "uppercase",
  letterSpacing: "0.04em",
  transition: "all 0.2s ease",
};

const navDot = {
  width: "8px",
  height: "8px",
  background: "#b00000",
  borderRadius: "999px",
  boxShadow:
    "0 0 18px rgba(176,0,0,0.85)",
};

const main = {
  position: "relative",
  padding: "clamp(22px, 5vw, 38px)",
  minWidth: 0,
  paddingBottom: "120px",
  overflowX: "hidden",
};

const mainGlow = {
  position: "absolute",
  top: "-140px",
  right: "-140px",
  width: "420px",
  height: "420px",
  background:
    "radial-gradient(circle, rgba(176,0,0,0.18), transparent 70%)",
  pointerEvents: "none",
};

const pageHeader = {
  position: "relative",
  zIndex: 2,
  marginBottom: "34px",
};

const pageEyebrow = {
  color: "#ef4444",
  fontSize: "12px",
  fontWeight: "950",
  letterSpacing: "0.18em",
  textTransform: "uppercase",
  marginBottom: "10px",
};

const pageTitle = {
  fontSize: "clamp(42px, 8vw, 72px)",
  fontWeight: "950",
  margin: 0,
  lineHeight: 0.92,
  textTransform: "uppercase",
  letterSpacing: "-0.06em",
};

const subtitleStyle = {
  color: "rgba(255,255,255,0.72)",
  marginTop: "16px",
  marginBottom: "0",
  fontSize: "clamp(16px, 3vw, 19px)",
  lineHeight: 1.8,
  maxWidth: "920px",
};

const mobileTopbar = {
  display: "none",
  position: "sticky",
  top: 0,
  zIndex: 40,
  background: "rgba(5,5,5,0.96)",
  borderBottom:
    "1px solid rgba(255,255,255,0.08)",
  padding: "14px",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "10px",
  backdropFilter: "blur(16px)",
};

const mobileMenuButton = {
  background: "rgba(176,0,0,0.18)",
  color: "white",
  border:
    "1px solid rgba(176,0,0,0.35)",
  padding: "11px 14px",
  fontWeight: "950",
  textTransform: "uppercase",
  fontSize: "12px",
};

const mobileBrand = {
  fontWeight: "950",
  fontSize: "14px",
  letterSpacing: "0.12em",
};

const overlay = {
  position: "fixed",
  inset: 0,
  background: "rgba(0,0,0,0.82)",
  zIndex: 80,
};

const mobilePanel = {
  position: "relative",
  width: "min(86vw, 340px)",
  height: "100vh",
  background: "#050505",
  borderRight:
    "1px solid rgba(255,255,255,0.08)",
  padding: "18px",
  overflowY: "auto",
};

const mobilePanelOverlay = {
  position: "absolute",
  inset: 0,
  background:
    "radial-gradient(circle at top, rgba(120,0,0,0.22), transparent 45%)",
  pointerEvents: "none",
};

const closeButton = {
  position: "relative",
  zIndex: 2,
  width: "100%",
  marginBottom: "20px",
  padding: "14px",
  border:
    "1px solid rgba(255,255,255,0.10)",
  background: "rgba(255,255,255,0.05)",
  color: "white",
  fontWeight: "950",
  textTransform: "uppercase",
};

const bottomNav = {
  display: "none",
  position: "fixed",
  left: "12px",
  right: "12px",
  bottom: "12px",
  zIndex: 60,
  background: "rgba(5,5,5,0.94)",
  backdropFilter: "blur(16px)",
  border:
    "1px solid rgba(255,255,255,0.08)",
  padding: "10px",
  gridTemplateColumns: "repeat(3,1fr)",
  gap: "10px",
};

const bottomLink = {
  textAlign: "center",
  color: "rgba(255,255,255,0.78)",
  textDecoration: "none",
  padding: "13px 8px",
  background: "rgba(255,255,255,0.04)",
  fontSize: "12px",
  fontWeight: "950",
  textTransform: "uppercase",
  letterSpacing: "0.08em",
};

const bottomLinkActive = {
  ...bottomLink,
  background: "rgba(176,0,0,0.22)",
  border:
    "1px solid rgba(176,0,0,0.35)",
  color: "white",
};

if (typeof window !== "undefined") {
  const style = document.createElement("style");

  style.innerHTML = `
    @media (max-width: 860px) {
      body {
        overflow-x: hidden;
      }

      div[style*="grid-template-columns: 300px 1fr"] {
        display: block !important;
      }

      aside {
        display: none !important;
      }

      main {
        padding: 22px 16px 110px !important;
      }

      input,
      select,
      textarea,
      button {
        font-size: 16px !important;
      }

      section {
        max-width: 100% !important;
      }

      [style*="grid-template-columns"] {
        grid-template-columns: 1fr !important;
      }
    }

    @media (max-width: 860px) {
      div[style*="position: sticky"][style*="top: 0"][style*="z-index: 40"] {
        display: flex !important;
      }

      nav[style*="position: fixed"] {
        display: grid !important;
      }
    }
  `;

  if (
    !document.getElementById(
      "fit-dashboard-mobile-css"
    )
  ) {
    style.id = "fit-dashboard-mobile-css";
    document.head.appendChild(style);
  }
}