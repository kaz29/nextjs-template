import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'
import enCommonJson from '../public/static/locales/en_us/common.json'
import jpCommonJson from '../public/static/locales/ja_jp/common.json'

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources: {
      en: {
        common: enCommonJson,
      },
      ja: {
        common: jpCommonJson,
      },
    },
    lng: 'en',
    fallbackLng: 'en',
    keySeparator: '^',
    nsSeparator: '|',
    // react-i18next options
    react: {
      wait: true,
    },
  });

export default i18n
