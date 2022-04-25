// TUTORIAL: https://lokalise.com/blog/how-to-internationalize-react-application-using-i18next/

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import { TRANSLATIONS_EN } from './locales/en';
import { TRANSLATIONS_PT } from './locales/pt';
import { TRANSLATIONS_FN } from './locales/fn';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: TRANSLATIONS_EN,
      },
      pt: {
        translation: TRANSLATIONS_PT,
      },
      fn: {
        translation: TRANSLATIONS_FN,
      },
    },
  });

i18n.changeLanguage('en');
