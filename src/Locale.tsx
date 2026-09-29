import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import { cvByLanguage, getSections, type Language } from './content/cv';
const LocaleContext = createContext<{ language: Language; setLanguage: (value: Language) => void }>(
  { language: 'da', setLanguage: () => {} },
);
export function LocaleProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    const requestedLanguage = new URLSearchParams(window.location.search).get('lang');
    if (requestedLanguage === 'en' || requestedLanguage === 'da') return requestedLanguage;
    try {
      const savedLanguage = localStorage.getItem('gb-language');
      return savedLanguage === 'da' ? 'da' : 'en';
    } catch {
      return 'en';
    }
  });
  useEffect(() => {
    document.documentElement.lang = language;
    document.title =
      language === 'da'
        ? 'Gabriel Back - Mit digitale skrivebord'
        : 'Gabriel Back - My digital desktop';
    try {
      localStorage.setItem('gb-language', language);
    } catch {
      /* Language still works when storage is unavailable. */
    }
  }, [language]);
  return (
    <LocaleContext.Provider value={{ language, setLanguage }}>{children}</LocaleContext.Provider>
  );
}
export function useLocale() {
  const context = useContext(LocaleContext);
  return {
    ...context,
    cv: cvByLanguage[context.language],
    sections: getSections(context.language),
    t: (da: string, en: string) => (context.language === 'da' ? da : en),
  };
}
