import React from 'react';
import Labeled from 'components/labeled';
import PropTypes from 'prop-types';

const Action = ({ item, t }) => (
  <Labeled className="timeline-list__item__column" label={t('action')}>
    {item.expenseTypeCode ? t(item.expenseTypeCode) : 'aats'}
    <span className="timeline-list__item__notes">
      {item.notes}
    </span>
  </Labeled>
);

Action.propTypes = {
  item: PropTypes.shape({
    expenseTypeCode: PropTypes.string,
    notes: PropTypes.string,
  }).isRequired,
  t: PropTypes.func.isRequired,
};

export default Action;
