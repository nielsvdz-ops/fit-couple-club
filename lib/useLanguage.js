"use client";

import { useCallback, useEffect, useMemo, useState } from "react";

// Global Fit Couple Club language system v2
// - EN/NL support
// - localStorage persistence
// - cross-tab synchronization
// - safer hydration handling
// - reusable translation helpers
// - future-ready for more languages

export const SUPPORTED_LANGUAGES = ["en", "nl"];

export const LANGUAGE_LABELS = {
  en: {
    short: "EN",
    label: "English",
    native: "English",
  },
  nl: {
    short: "NL",
    label: "Dutch",
    native: "Nederlands",
  },
};

export const DEFAULT_LANGUAGE = "en";

export function isSupportedLanguage(language) {
  return SUPPORTED_LANGUAGES.includes(String(language || "").toLowerCase());
}

export function normalizeLanguage(language) {
  const clean = String(language || "").toLowerCase().trim();

  if (isSupportedLanguage(clean)) {
    return clean;
  }

  return DEFAULT_LANGUAGE;
}

export function getStoredLanguage() {
  if (typeof window === "undefined") {
    return DEFAULT_LANGUAGE;
  }

  try {
    const stored = localStorage.getItem("fit_language");

    if (isSupportedLanguage(stored)) {
      return stored;
    }

    return DEFAULT_LANGUAGE;
  } catch (error) {
    console.error("LANGUAGE STORAGE ERROR:", error);
    return DEFAULT_LANGUAGE;
  }
}

export function setStoredLanguage(language) {
  if (typeof window === "undefined") return;

  try {
    localStorage.setItem("fit_language", normalizeLanguage(language));
  } catch (error) {
    console.error("LANGUAGE SAVE ERROR:", error);
  }
}

export function dispatchLanguageChange(language) {
  if (typeof window === "undefined") return;

  try {
    window.dispatchEvent(
      new CustomEvent("fit-language-change", {
        detail: {
          language: normalizeLanguage(language),
        },
      })
    );
  } catch (error) {
    console.error("LANGUAGE EVENT ERROR:", error);
  }
}

export function translateText(translations, language = "en") {
  if (!translations) return "";

  const normalizedLanguage = normalizeLanguage(language);

  if (typeof translations === "string") {
    return translations;
  }

  if (translations?.[normalizedLanguage]) {
    return translations[normalizedLanguage];
  }

  if (translations?.en) {
    return translations.en;
  }

  const firstValue = Object.values(translations || {})?.[0];

  return firstValue || "";
}

export function createTranslationObject(en = "", nl = "") {
  return {
    en,
    nl,
  };
}

export function useLanguage() {
  const [language, setLanguage] = useState(DEFAULT_LANGUAGE);
  const [hydrated, setHydrated] = useState(false);

  // Initial hydration
  useEffect(() => {
    const storedLanguage = getStoredLanguage();

    setLanguage(storedLanguage);
    setHydrated(true);
  }, []);

  // Same-tab custom event listener
  useEffect(() => {
    function handleLanguageChange(event) {
      const nextLanguage =
        event?.detail?.language || getStoredLanguage();

      setLanguage(normalizeLanguage(nextLanguage));
    }

    window.addEventListener(
      "fit-language-change",
      handleLanguageChange
    );

    return () => {
      window.removeEventListener(
        "fit-language-change",
        handleLanguageChange
      );
    };
  }, []);

  // Cross-tab sync
  useEffect(() => {
    function handleStorage(event) {
      if (event.key !== "fit_language") return;

      const nextLanguage = normalizeLanguage(event.newValue);

      setLanguage(nextLanguage);
    }

    window.addEventListener("storage", handleStorage);

    return () => {
      window.removeEventListener("storage", handleStorage);
    };
  }, []);

  const changeLanguage = useCallback((nextLanguage) => {
    const normalized = normalizeLanguage(nextLanguage);

    setLanguage(normalized);
    setStoredLanguage(normalized);
    dispatchLanguageChange(normalized);
  }, []);

  const toggleLanguage = useCallback(() => {
    changeLanguage(language === "en" ? "nl" : "en");
  }, [language, changeLanguage]);

  const languageInfo = useMemo(() => {
    return (
      LANGUAGE_LABELS?.[language] ||
      LANGUAGE_LABELS[DEFAULT_LANGUAGE]
    );
  }, [language]);

  return {
    language,
    hydrated,
    isDutch: language === "nl",
    isEnglish: language === "en",
    supportedLanguages: SUPPORTED_LANGUAGES,
    languageInfo,
    changeLanguage,
    toggleLanguage,
    t: (translations) => translateText(translations, language),
  };
}

// Simple helper for components
export function useTranslation(translations = {}) {
  const { language } = useLanguage();

  return translateText(translations, language);
}

// Helper for static translation maps
export function getTranslation(
  map = {},
  key = "",
  language = "en",
  fallback = ""
) {
  if (!map || !key) return fallback;

  const normalizedLanguage = normalizeLanguage(language);

  return (
    map?.[normalizedLanguage]?.[key] ||
    map?.en?.[key] ||
    fallback ||
    key
  );
}

export default useLanguage;
