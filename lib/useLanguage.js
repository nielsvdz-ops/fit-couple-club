"use client";

import { useEffect, useState } from "react";

export function useLanguage() {
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    const saved = localStorage.getItem("fit_language");
    if (saved === "nl" || saved === "en") setLanguage(saved);

    function onLanguageChange() {
      const updated = localStorage.getItem("fit_language");
      if (updated === "nl" || updated === "en") setLanguage(updated);
    }

    window.addEventListener("fit-language-change", onLanguageChange);
    return () =>
      window.removeEventListener("fit-language-change", onLanguageChange);
  }, []);

  function changeLanguage(nextLanguage) {
    localStorage.setItem("fit_language", nextLanguage);
    setLanguage(nextLanguage);
    window.dispatchEvent(new Event("fit-language-change"));
  }

  return { language, changeLanguage };
}
