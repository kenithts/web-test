import React from 'react';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

import Indicator from '../indicator';
import BalanceTable from '../balanceTable';

import './styles.scss';

const Balance = ({ item }) => {
  const { t } = useTranslation('sidebar');
  const currency = item.currency?.symbol;

  return (
    <div className="balance__wrapper">
      <span>{t('balance')}</span>
      <strong>
        {`${item.balance < 0 ? '-' : ''} ${currency} ${Math.abs(item.balance)}`}
      </strong>
      <div className="balance__indicators">
        <Indicator type="declared" currency={currency} value={item.declared} />
        <Indicator type="received" currency={currency} value={item.received} />
      </div>
      <div className="balance__list">
        <b>
          {t('extract')}
        </b>
      </div>
      <BalanceTable
        declared={item.declared}
        approved={item.approved}
        received={item.received}
        currency={currency}
      />
    </div>
  );
};

Balance.propTypes = {
  item: PropTypes.shape({
    balance: PropTypes.number,
    declared: PropTypes.number,
    received: PropTypes.number,
    approved: PropTypes.number,
    currency: PropTypes.shape({
      symbol: PropTypes.string,
    }),
  }).isRequired,
};

export default Balance;
