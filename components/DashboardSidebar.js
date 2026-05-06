"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "../lib/useLanguage";

export default function DashboardSidebar({ membershipType }) {
  const pathname = usePathname();
  const { language } = useLanguage();

  const membership = String(membershipType || "free").toLowerCase();

  const t = {
    en: {
      dashboard: "Dashboard",
      workouts: "Workouts",
      nutrition: "Nutrition",
      recipes: "Recipes",
      planBuilder: "Plan Builder",
      programs: "Programs",
      coupleZone: "Couple Zone",
      progress: "Progress",
      vip: "VIP",
      billing: "Billing",
      account: "Account",
      logout: "Logout",
      memberArea: "Member Area",
    },

    nl: {
      dashboard: "Dashboard",
      workouts: "Workouts",
      nutrition: "Voeding",
      recipes: "Recepten",
      planBuilder: "Plan Builder",
      programs: "Programma’s",
      coupleZone: "Couple Zone",
      progress: "Progressie",
      vip: "VIP",
      billing: "Billing",
      account: "Account",
      logout: "Uitloggen",
      memberArea: "Member Omgeving",
    },
  }[language];

  const links = [
    {
      href: "/dashboard",
      label: t.dashboard,
      show: true,
    },

    {
      href: "/workouts",
      label: t.workouts,
      show:
        membership === "full_access" ||
        membership === "vip" ||
        membership === "coaching",
    },

    {
      href: "/nutrition",
      label: t.nutrition,
      show:
        membership === "nutrition" ||
        membership === "full_access" ||
        membership === "vip" ||
        membership === "coaching",
    },

    {
      href: "/recipes",
      label: t.recipes,
      show:
        membership === "nutrition" ||
        membership === "full_access" ||
        membership === "vip" ||
        membership === "coaching",
    },

    {
      href: "/plan-builder",
      label: t.planBuilder,
      show:
        membership === "full_access" ||
        membership === "vip" ||
        membership === "coaching",
    },

    {
      href: "/programs",
      label: t.programs,
      show:
        membership === "full_access" ||
        membership === "vip" ||
        membership === "coaching",
    },

    {
      href: "/couple-zone",
      label: t.coupleZone,
      show:
        membership === "full_access" ||
        membership === "vip" ||
        membership === "coaching",
    },

    {
      href: "/progress",
      label: t.progress,
      show:
        membership === "full_access" ||
        membership === "vip" ||
        membership === "coaching",
    },

    {
      href: "/vip",
      label: t.vip,
      show:
        membership === "vip" ||
        membership === "coaching",
    },

    {
      href: "/billing",
      label: t.billing,
      show: true,
    },

    {
      href: "/account",
      label: t.account,
      show: true,
    },
  ];

  return (
    <aside style={sidebar}>
      <div style={logoWrap}>
        <div style={logoText}>FIT COUPLE CLUB</div>
        <div style={memberText}>{t.memberArea}</div>
      </div>

      <nav style={nav}>
        {links
          .filter((link) => link.show)
          .map((link) => {
            const active = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  ...navLink,
                  ...(active ? activeLink : {}),
                }}
              >
                {link.label}
              </Link>
            );
          })}
      </nav>

      <div style={bottomWrap}>
        <a href="/logout" style={logoutButton}>
          {t.logout}
        </a>
      </div>
    </aside>
  );
}

const sidebar = {
  width: "100%",
  maxWidth: "280px",
  minHeight: "100vh",
  background: "#050505",
  borderRight: "1px solid rgba(255,255,255,0.08)",
  padding: "24px 18px",
  boxSizing: "border-box",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  position: "sticky",
  top: 0,
};

const logoWrap = {
  marginBottom: "28px",
};

const logoText = {
  fontSize: "22px",
  fontWeight: "900",
  letterSpacing: "-0.03em",
};

const memberText = {
  marginTop: "6px",
  color: "rgba(255,255,255,0.5)",
  fontSize: "13px",
};

const nav = {
  display: "grid",
  gap: "10px",
};

const navLink = {
  display: "block",
  padding: "14px 16px",
  borderRadius: "14px",
  color: "rgba(255,255,255,0.72)",
  textDecoration: "none",
  fontWeight: "700",
  transition: "0.2s ease",
  fontSize: "15px",
  overflowWrap: "break-word",
};

const activeLink = {
  background: "white",
  color: "black",
};

const bottomWrap = {
  marginTop: "24px",
};

const logoutButton = {
  display: "block",
  width: "100%",
  textAlign: "center",
  padding: "14px 16px",
  borderRadius: "14px",
  background: "rgba(255,255,255,0.06)",
  border: "1px solid rgba(255,255,255,0.08)",
  color: "white",
  textDecoration: "none",
  fontWeight: "800",
  boxSizing: "border-box",
};
