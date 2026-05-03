
import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { Language, Content, translations } from '../translations';

interface LanguageContextType {
  language: Language;
  content: Content;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  langPath: (path: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { lang } = useParams<{ lang: string }>();
  const navigate = useNavigate();
  const location = useLocation();
  const [language, setLanguageState] = useState<Language>((lang as Language) || 'fr');

  useEffect(() => {
    if (lang && (lang === 'fr' || lang === 'en') && lang !== language) {
      setLanguageState(lang as Language);
    }
  }, [lang, language]);

  const setLanguage = (newLang: Language) => {
    // Replace the language segment in the URL
    const pathSegments = location.pathname.split('/').filter(Boolean);
    if (pathSegments.length > 0 && (pathSegments[0] === 'fr' || pathSegments[0] === 'en')) {
      pathSegments[0] = newLang;
    } else {
      pathSegments.unshift(newLang);
    }
    navigate(`/${pathSegments.join('/')}${location.search}${location.hash}`);
  };

  const toggleLanguage = () => {
    setLanguage(language === 'fr' ? 'en' : 'fr');
  };

  const langPath = (path: string) => {
    // Ensure path starts with / and doesn't already have the lang segment
    const cleanPath = path.startsWith('/') ? path : `/${path}`;
    return `/${language}${cleanPath}`;
  };

  const value = {
    language,
    content: translations[language],
    setLanguage,
    toggleLanguage,
    langPath,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
