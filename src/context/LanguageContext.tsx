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
  const [language, setLanguage] = useState<Language>("en");

  // Load preferred language from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem("portfolio-language") as Language;
    if (saved && (saved === "en" || saved === "es")) {
      setLanguage(saved);
      document.documentElement.lang = saved;
    } else {
      // Auto-detect browser language
      if (navigator.language.startsWith("es")) {
        setLanguage("es");
        document.documentElement.lang = "es";
      }
    }
  }, []);

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
