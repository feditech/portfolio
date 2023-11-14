import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEN from "../locales/en/translation.json";
// import translationFR from "./locales/fr/translation.json";
// import translationES from "./locales/es/translation.json";
import translationAR from "../locales/ar/translation.json";
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";

const resources = {
  en: {
    translation: translationEN,
  },
  ar: {
    translation: translationAR,
  },
};

i18n.use(initReactI18next)
.use(I18nextBrowserLanguageDetector).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});