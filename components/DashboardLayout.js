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
    vip: "VIP",
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
    vip: "VIP",
    billing: "Abonnement",
    account: "Account",
    member: "Lid",
    free: "Gratis",
    upgrade: "Upgraden",
    close: "Sluiten",
    menu: "Menu",
  },
};

const titleMap = {
  en: {
    Billing: "Billing",
    Dashboard: "Dashboard",
    Nutrition: "Nutrition",
    Recipes: "Recipes",
    VIP: "VIP",
    Account: "Account",
  },
  nl: {
    Billing: "Abonnement",
    Dashboard: "Dashboard",
    Nutrition: "Voeding",
    Recipes: "Recepten",
    VIP: "VIP",
    Account: "Account",
  },
};

export default function DashboardLayout({
  title,
  subtitle,
  children,
  membershipType,
}) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { language } = useLanguage();
  const t = labels[language] || labels.en;

  const membership = String(membershipType || "").toLowerCase().trim();

  const canAccessNutrition =
    membership === "nutrition" ||
    membership === "full_access" ||
    membership === "vip" ||
    membership === "coaching";

  const canAccessFitness =
    membership === "full_access" ||
    membership === "vip" ||
    membership === "coaching";

  const canAccessVip = membership === "vip" || membership === "coaching";

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
    ...(canAccessVip ? [[t.vip, "/vip"]] : []),
    [t.billing, "/billing"],
    [t.account, "/account"],
  ];

  const translatedTitle = titleMap[language]?.[title] || title;

  return (
    <div style={layout}>
      <aside style={sidebar}>
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

        <div style={mobileBrand}>Fit Couple Club</div>
        <LanguageToggle />
      </div>

      {mobileOpen && (
        <div style={overlay}>
          <div style={mobilePanel}>
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
        <h1 style={pageTitle}>{translatedTitle}</h1>
        {subtitle ? <p style={subtitleStyle}>{subtitle}</p> : null}
        {children}
      </main>

      <nav style={bottomNav}>
        <a href="/dashboard" style={bottomLink}>{t.dashboard}</a>
        <a href="/billing" style={bottomLink}>{t.upgrade}</a>
        <a href="/account" style={bottomLink}>{t.account}</a>
      </nav>
    </div>
  );
}

function SidebarContent({ navItems, membership, t, onNavigate }) {
  return (
    <>
      <div style={brand}>Fit Couple Club</div>

      <div style={topRow}>
        <div style={memberTag}>{formatMembershipLabel(membership, t)}</div>
        <LanguageToggle />
      </div>

      <div style={nav}>
        {navItems.map(([label, href]) => (
          <a key={`${label}-${href}`} href={href} style={navLink} onClick={onNavigate}>
            {label}
          </a>
        ))}
      </div>
    </>
  );
}

function formatMembershipLabel(membership, t) {
  if (membership === "nutrition") return "Nutrition";
  if (membership === "full_access") return "Full Access";
  if (membership === "vip") return "VIP";
  if (membership === "coaching") return "Coaching";
  if (membership === "free") return t.free;
  return t.member;
}

const layout = {
  display: "grid",
  gridTemplateColumns: "280px 1fr",
  minHeight: "100vh",
  background: "#060606",
  color: "white",
};

const sidebar = {
  borderRight: "1px solid rgba(255,255,255,0.08)",
  padding: "24px 18px",
  position: "sticky",
  top: 0,
  height: "100vh",
};

const brand = {
  fontSize: "28px",
  fontWeight: "900",
  marginBottom: "12px",
};

const topRow = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "10px",
  marginBottom: "24px",
};

const memberTag = {
  display: "inline-block",
  padding: "8px 12px",
  borderRadius: "999px",
  background: "rgba(255,255,255,0.06)",
  border: "1px solid rgba(255,255,255,0.1)",
  fontWeight: "800",
};

const nav = {
  display: "grid",
  gap: "10px",
};

const navLink = {
  display: "block",
  textDecoration: "none",
  color: "white",
  padding: "15px 16px",
  borderRadius: "16px",
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.06)",
  fontWeight: "800",
};

const main = {
  padding: "28px",
  minWidth: 0,
  paddingBottom: "90px",
};

const pageTitle = {
  fontSize: "clamp(36px, 7vw, 56px)",
  fontWeight: "900",
  margin: 0,
  lineHeight: 1.02,
};

const subtitleStyle = {
  color: "rgba(255,255,255,0.7)",
  marginTop: "12px",
  marginBottom: "28px",
  fontSize: "clamp(16px, 3vw, 20px)",
  lineHeight: 1.7,
  maxWidth: "900px",
};

const mobileTopbar = {
  display: "none",
  position: "sticky",
  top: 0,
  zIndex: 40,
  background: "rgba(6,6,6,0.96)",
  borderBottom: "1px solid rgba(255,255,255,0.08)",
  padding: "12px",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "10px",
};

const mobileMenuButton = {
  background: "rgba(255,255,255,0.08)",
  color: "white",
  border: "1px solid rgba(255,255,255,0.12)",
  borderRadius: "12px",
  padding: "10px 12px",
  fontWeight: "900",
};

const mobileBrand = {
  fontWeight: "900",
  fontSize: "16px",
};

const overlay = {
  position: "fixed",
  inset: 0,
  background: "rgba(0,0,0,0.72)",
  zIndex: 80,
};

const mobilePanel = {
  width: "min(86vw, 340px)",
  height: "100vh",
  background: "#080808",
  borderRight: "1px solid rgba(255,255,255,0.1)",
  padding: "18px",
  overflowY: "auto",
};

const closeButton = {
  width: "100%",
  marginBottom: "18px",
  padding: "12px",
  borderRadius: "12px",
  border: "1px solid rgba(255,255,255,0.12)",
  background: "rgba(255,255,255,0.08)",
  color: "white",
  fontWeight: "900",
};

const bottomNav = {
  display: "none",
  position: "fixed",
  left: "10px",
  right: "10px",
  bottom: "10px",
  zIndex: 60,
  background: "rgba(10,10,10,0.92)",
  backdropFilter: "blur(14px)",
  border: "1px solid rgba(255,255,255,0.1)",
  borderRadius: "18px",
  padding: "8px",
  gridTemplateColumns: "repeat(3,1fr)",
  gap: "8px",
};

const bottomLink = {
  textAlign: "center",
  color: "white",
  textDecoration: "none",
  padding: "11px 8px",
  borderRadius: "12px",
  background: "rgba(255,255,255,0.06)",
  fontSize: "13px",
  fontWeight: "900",
};

if (typeof window !== "undefined") {
  const style = document.createElement("style");
  style.innerHTML = `
    @media (max-width: 860px) {
      body { overflow-x: hidden; }
      div[style*="grid-template-columns: 280px 1fr"] {
        display: block !important;
      }
      aside {
        display: none !important;
      }
      main {
        padding: 18px 14px 96px !important;
      }
      input, select, textarea, button {
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

  if (!document.getElementById("fit-dashboard-mobile-css")) {
    style.id = "fit-dashboard-mobile-css";
    document.head.appendChild(style);
  }
}
