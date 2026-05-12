"use client";

import { useLanguage } from "../lib/useLanguage";

export default function LanguageToggle() {
  const { language, changeLanguage } = useLanguage();

  return (
    <div style={wrap}>
      <button type="button" onClick={() => changeLanguage("en")} style={btn(language === "en")}>
        EN
      </button>

      <button type="button" onClick={() => changeLanguage("nl")} style={btn(language === "nl")}>
        NL
      </button>
    </div>
  );
}

const wrap = {
  display: "inline-flex",
  alignItems: "center",
  gap: "6px",
  padding: "4px",
  background: "rgba(0,0,0,0.65)",
  border: "1px solid rgba(176,0,0,0.45)",
  position: "relative",
  zIndex: 999,
};

const btn = (active) => ({
  border: active
    ? "1px solid rgba(176,0,0,0.95)"
    : "1px solid rgba(255,255,255,0.12)",
  background: active ? "#b00000" : "rgba(255,255,255,0.06)",
  color: "white",
  padding: "8px 11px",
  fontWeight: "950",
  cursor: "pointer",
  fontSize: "12px",
  letterSpacing: "0.08em",
});