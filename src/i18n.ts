import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import HttpBackend, { HttpBackendOptions } from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
    .use(HttpBackend)
    // detect user language
    .use(LanguageDetector)
    // pass the i18n instance to react-i18next.
    .use(initReactI18next)
    // init i18next
    .init<HttpBackendOptions>({
        backend: {
            loadPath: 'https://raw.githubusercontent.com/sombia/localization/main/{{lng}}/{{ns}}.json',
        },

        fallbackLng: 'en',
        debug: true,

        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        }
    });


export default i18n;