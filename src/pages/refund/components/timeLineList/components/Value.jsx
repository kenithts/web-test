import React from 'react';
import Labeled from 'components/labeled';
import PropTypes from 'prop-types';

const Value = ({ item, t }) => (
  <Labeled className="timeline-list__item__column" label={t('value')}>
    {`${item.currencyCode} ${item.amountSpent}`}
    <span className="timeline-list__item__notes">
      {`${t('noteValue')}: ${item.currencyCode} ${item.amountTotal}`}
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
