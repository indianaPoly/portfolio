import { createContext, useEffect, useState } from "react";

interface LanguageContextProps {
  language: string;
  toggleLanguage: () => void;
}

export const LanguageContext = createContext<LanguageContextProps>({
  language: "kor",
  toggleLanguage: () => {
    return null;
  },
});

export const useLanguageChange = () => {
  const [language, setLanguage] = useState("kor");

  const setLanguageMode = (language: string) => {
    language === "kor"
      ? window.localStorage.setItem("language", "kor")
      : window.localStorage.setItem("language", "eng");
    setLanguage(language);
  };

  const toggleLanguage = () => {
    language === "kor" ? setLanguageMode("eng") : setLanguageMode("kor");
  };

  useEffect(() => {
    const localLanguage = window.localStorage.getItem("language");
    if (localLanguage !== null) {
      localLanguage === "kor" ? setLanguage("kor") : setLanguage("eng");
    }
  }, []);

  return { language, toggleLanguage };
};
