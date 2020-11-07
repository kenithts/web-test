/* eslint-disable no-console */
import { NotificationManager } from 'react-notifications';
import i18n from 'i18n';

const request = (url, options, errorHandling = true) => (
  fetch(url, options)
    .then((response) => response.json())
    .catch((e) => {
      console.error(e);
      if (errorHandling) {
        NotificationManager.error(i18n.t('general.defaultError'));
      }
    })
);

export default request;
