import { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';

interface UseLanguageProps {
  changeLanguage: () => void;
  translate: (s: string) => ReactNode;
}

export const useLanguage = (): UseLanguageProps => {
  const { t: translate, i18n } = useTranslation();

  const changeLanguage = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  return {
    changeLanguage,
    translate,
  };
};
