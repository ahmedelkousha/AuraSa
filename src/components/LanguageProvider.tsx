import { useEffect, ReactNode } from 'react';
import { useTranslation } from 'react-i18next';

interface LanguageProviderProps {
  children: ReactNode;
}

const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const { i18n } = useTranslation();

  useEffect(() => {
    // Set initial document attributes
    const lang = i18n.language;
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.body.style.fontFamily = lang === 'ar' 
      ? "'IBM Plex Sans Arabic', sans-serif" 
      : "'League Spartan', sans-serif";
  }, [i18n.language]);

  // Listen for language changes
  useEffect(() => {
    const handleLanguageChange = (lng: string) => {
      document.documentElement.lang = lng;
      document.documentElement.dir = lng === 'ar' ? 'rtl' : 'ltr';
      document.body.style.fontFamily = lng === 'ar' 
        ? "'IBM Plex Sans Arabic', sans-serif" 
        : "'League Spartan', sans-serif";
    };

    i18n.on('languageChanged', handleLanguageChange);
    return () => {
      i18n.off('languageChanged', handleLanguageChange);
    };
  }, [i18n]);

  return <>{children}</>;
};

export default LanguageProvider;
