import { createContext, useEffect, useState } from 'react';

export const defaultLocale = 'de';
export const locales = ['de', 'en'];
export const LanguageContext = createContext([]);

export function LanguageProvider({ children }) {
  const [locale, setLocale] = useState('en');

  useEffect(() => {
    if (!window) {
      return;
    }
    const language = localStorage.getItem('lang') || locale;
    setLocale(language);
  }, [locale]);

  return (
    <LanguageContext.Provider value={[locale, setLocale]}>
      {children}
    </LanguageContext.Provider>
  );
}
