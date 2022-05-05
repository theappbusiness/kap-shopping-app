// TUTORIAL: https://lokalise.com/blog/how-to-internationalize-react-application-using-i18next/

import { use, changeLanguage } from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import { TRANSLATIONS_EN } from './locales/en';
import { TRANSLATIONS_PT } from './locales/pt';
import { TRANSLATIONS_FR } from './locales/fr';

use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    resources: {
      en: {
        translation: TRANSLATIONS_EN,
      },
      pt: {
        translation: TRANSLATIONS_PT,
      },
      fr: {
        translation: TRANSLATIONS_FR,
      },
    },
  });

changeLanguage(navigator.language);
