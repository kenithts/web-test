import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './styles.scss';
import { useTranslation } from 'react-i18next';

const Status = ({ status }) => {
  const { t } = useTranslation('refund');
  const statusLower = status.toLowerCase();

  return (
    <span className={classnames(statusLower, 'status__wrapper')}>
      <p>{t('status')}</p>
      <strong>{t(statusLower)}</strong>
    </span>
  );
};

Status.propTypes = {
  status: PropTypes.string.isRequired,
};

export default Status;
