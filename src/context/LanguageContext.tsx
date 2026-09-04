"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { en, es, Dictionary } from "../i18n/dictionaries";

type Language = "en" | "es";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Dictionary;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window === "undefined") return "en";
    const saved = localStorage.getItem("portfolio-language") as Language;
    if (saved && (saved === "en" || saved === "es")) {
      return saved;
    }
    if (typeof navigator !== "undefined" && navigator.language.startsWith("es")) {
      return "es";
    }
    return "en";
  });

  // Synchronize document lang
  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem("portfolio-language", lang);
    document.documentElement.lang = lang;
  };

  const t = language === "es" ? es : en;

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
