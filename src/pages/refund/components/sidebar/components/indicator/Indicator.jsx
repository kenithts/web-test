import React from 'react';
import Icon from 'components/icon';
import PropTypes from 'prop-types';

import './styles.scss';
import { useTranslation } from 'react-i18next';

const Indicator = ({ type, value, currency }) => {
  const icon = type === 'received' ? 'arrow-down' : 'arrow-up';
  const { t } = useTranslation('sidebar');

  return (
    <div className="indicator__wrapper">
      <span className="indicator__arrow">
        <Icon name={icon} />
      </span>
      <div className="indicator__inner">
        <span>
          {t(type)}
        </span>
        <strong>
          {`${currency} ${value}`}
        </strong>
      </div>
    </div>
  );
};

Indicator.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
};

export default Indicator;
