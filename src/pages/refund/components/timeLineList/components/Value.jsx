import React from 'react';
import Labeled from 'components/labeled';
import PropTypes from 'prop-types';

import Currency from 'components/currency';

const Value = ({ item, t }) => (
  <Labeled className="timeline-list__item__column" label={t('value')}>
    <Currency value={item.amountSpent} currency={item.currencyCode} />
    <span className="timeline-list__item__notes">
      <Currency value={item.amountTotal} currency={`${t('noteValue')}: ${item.currencyCode}`} />
    </span>
  </Labeled>
);

Value.propTypes = {
  item: PropTypes.shape({
    currencyCode: PropTypes.string,
    amountSpent: PropTypes.number,
    amountTotal: PropTypes.number,
  }).isRequired,
  t: PropTypes.func.isRequired,
};

export default Value;
