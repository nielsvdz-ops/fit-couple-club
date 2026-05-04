"use client";

import { useState } from "react";
import LanguageToggle from "./LanguageToggle";
import { useLanguage } from "../lib/useLanguage";

const labels = {
  en: {
    features: "Features",
    pricing: "Pricing",
    about: "About",
    login: "Login",
    start: "Start Now",
  },
  nl: {
    features: "Functies",
    pricing: "Prijzen",
    about: "Over ons",
    login: "Inloggen",
    start: "Start Nu",
  },
};

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { language } = useLanguage();
  const t = labels[language] || labels.en;

  return (
    <header style={header}>
      <a href="/" style={brand}>
        Fit Couple Club
      </a>

      <button type="button" onClick={() => setOpen(!open)} style={menuButton}>
        ☰
      </button>

      <nav style={navWrap}>
        <a href="/#features" style={navLink}>{t.features}</a>
        <a href="/pricing" style={navLink}>{t.pricing}</a>
        <a href="/about" style={navLink}>{t.about}</a>
        <a href="/login" style={navLink}>{t.login}</a>
        <LanguageToggle />
        <a href="/signup" style={ctaPrimary}>{t.start}</a>
      </nav>

      {open && (
        <div style={mobileMenu}>
          <a href="/#features" style={mobileLink} onClick={() => setOpen(false)}>{t.features}</a>
          <a href="/pricing" style={mobileLink} onClick={() => setOpen(false)}>{t.pricing}</a>
          <a href="/about" style={mobileLink} onClick={() => setOpen(false)}>{t.about}</a>
          <a href="/login" style={mobileLink} onClick={() => setOpen(false)}>{t.login}</a>
          <LanguageToggle />
          <a href="/signup" style={mobileCta} onClick={() => setOpen(false)}>{t.start}</a>
        </div>
      )}
    </header>
  );
}

const header = {
  padding: "16px 20px",
  borderBottom: "1px solid rgba(255,255,255,0.08)",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  position: "sticky",
  top: 0,
  background: "rgba(10,10,10,0.94)",
  backdropFilter: "blur(10px)",
  zIndex: 50,
};

const brand = {
  fontSize: "clamp(20px, 4vw, 24px)",
  fontWeight: "900",
  color: "white",
  textDecoration: "none",
  letterSpacing: "-0.02em",
};

const navWrap = {
  display: "flex",
  gap: "16px",
  alignItems: "center",
  flexWrap: "wrap",
};

const navLink = {
  color: "white",
  textDecoration: "none",
  fontSize: "15px",
  opacity: 0.9,
};

const ctaPrimary = {
  background: "white",
  color: "black",
  padding: "10px 16px",
  borderRadius: "12px",
  textDecoration: "none",
  fontWeight: "800",
};

const menuButton = {
  display: "none",
  background: "rgba(255,255,255,0.08)",
  color: "white",
  border: "1px solid rgba(255,255,255,0.12)",
  borderRadius: "12px",
  padding: "10px 13px",
  fontSize: "20px",
  cursor: "pointer",
};

const mobileMenu = {
  position: "absolute",
  top: "64px",
  left: "12px",
  right: "12px",
  display: "grid",
  gap: "10px",
  padding: "14px",
  borderRadius: "18px",
  background: "#0b0b0b",
  border: "1px solid rgba(255,255,255,0.1)",
  boxShadow: "0 20px 60px rgba(0,0,0,0.45)",
};

const mobileLink = {
  color: "white",
  textDecoration: "none",
  padding: "12px",
  borderRadius: "12px",
  background: "rgba(255,255,255,0.04)",
  fontWeight: "800",
};

const mobileCta = {
  ...mobileLink,
  background: "white",
  color: "black",
  textAlign: "center",
};

if (typeof window !== "undefined") {
  const style = document.createElement("style");
  style.innerHTML = `
    @media (max-width: 760px) {
      header nav { display: none !important; }
      header button { display: block !important; }
    }
  `;
  if (!document.getElementById("fit-navbar-mobile-css")) {
    style.id = "fit-navbar-mobile-css";
    document.head.appendChild(style);
  }
}
