import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import ptBr from 'languages/pt-br.json';

const resources = {
  'pt-BR': ptBr,
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: 'pt-BR',
    fallbackLng: 'pt_BR',

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
