/* eslint-disable react-refresh/only-export-components */
import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

type SupportedLanguage = "en" | "ar";

export interface LanguageContextValue {
  language: SupportedLanguage;
  direction: "ltr" | "rtl";
  toggleLanguage: () => void;
  t: (key: string, fallback?: string) => string;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(
  undefined
);

export const useLanguage = (): LanguageContextValue => {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return ctx;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({
  children,
}) => {
  const [language, setLanguage] = useState<SupportedLanguage>("ar");

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = language;
      document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
    }
  }, [language]);

  const direction: "ltr" | "rtl" = language === "ar" ? "rtl" : "ltr";

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "ar" ? "en" : "ar"));
  };

  const translations: Record<SupportedLanguage, Record<string, string>> = {
    en: {},
    ar: {},
  };

  const t = (key: string, fallback: string = key): string => {
    const table = translations[language] || {};
    return table[key] ?? fallback;
  };

  const value: LanguageContextValue = {
    language,
    direction,
    toggleLanguage,
    t,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};
