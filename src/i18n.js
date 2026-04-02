import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Import translation resources
const resources = {
  en: {
    translation: {
      welcome: "Welcome",
      hello: "Hello, {{name}}!",
      goodbye: "Goodbye",
    },
  },
  es: {
    translation: {
      welcome: "Bienvenido",
      hello: "¡Hola, {{name}}!",
      goodbye: "Adiós",
    },
  },
  fr: {
    translation: {
      welcome: "Bienvenue",
      hello: "Bonjour, {{name}}!",
      goodbye: "Au revoir",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en", // default language
  fallbackLng: "en",
  interpolation: {
    escapeValue: false, // React already protects from XSS
  },
});

export default i18n;
