"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type Lang = "cs" | "en";

interface LanguageContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (cs: string, en: string) => string;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "cs",
  setLang: () => {},
  t: (cs) => cs,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("cs");

  useEffect(() => {
    const saved = localStorage.getItem("site-lang") as Lang | null;
    if (saved === "en" || saved === "cs") {
      setLang(saved);
    }
  }, []);

  const handleSetLang = (newLang: Lang) => {
    setLang(newLang);
    localStorage.setItem("site-lang", newLang);
    document.documentElement.lang = newLang;
  };

  const t = (cs: string, en: string) => (lang === "en" ? en : cs);

  return (
    <LanguageContext.Provider value={{ lang, setLang: handleSetLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
