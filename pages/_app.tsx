import { useMemo } from "react";
import "../public/styles/globals.css";
import type { AppProps } from "next/app";
import { LanguageContext, useLanguageChange } from "../hook/useLanguageContext";

export const LanguageContextWrapper = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { language, toggleLanguage } = useLanguageChange();
  const languageProviderValue = useMemo(
    () => ({
      language,
      toggleLanguage,
    }),
    [language, toggleLanguage]
  );
  return (
    <LanguageContext.Provider value={languageProviderValue}>
      {children}
    </LanguageContext.Provider>
  );
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <LanguageContextWrapper>
      <Component {...pageProps} />
    </LanguageContextWrapper>
  );
}

export default MyApp;
