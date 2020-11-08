import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import ptBr from 'languages/pt-br.json';

const resources = {
  'pt-BR': ptBr,
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'pt-BR',
    fallbackLng: 'pt-BR',
    keySeparator: true,

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
