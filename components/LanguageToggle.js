"use client";

import { useLanguage } from "../lib/useLanguage";

export default function LanguageToggle() {
  const { language, changeLanguage } = useLanguage();

  return (
    <div style={wrap}>
      <button
        type="button"
        onClick={() => changeLanguage("en")}
        style={language === "en" ? activeButton : button}
      >
        EN
      </button>

      <button
        type="button"
        onClick={() => changeLanguage("nl")}
        style={language === "nl" ? activeButton : button}
      >
        NL
      </button>
    </div>
  );
}

const wrap = {
  display: "flex",
  alignItems: "center",
  gap: "6px",
  padding: "4px",
  borderRadius: "999px",
  background: "rgba(255,255,255,0.06)",
  border: "1px solid rgba(255,255,255,0.1)",
};

const button = {
  border: "none",
  background: "transparent",
  color: "rgba(255,255,255,0.65)",
  padding: "7px 10px",
  borderRadius: "999px",
  fontWeight: "900",
  cursor: "pointer",
};

const activeButton = {
  ...button,
  background: "white",
  color: "black",
};
