import React from 'react';
import Labeled from 'components/labeled';
import PropTypes from 'prop-types';

const Action = ({ item, t, type }) => (
  <Labeled className="timeline-list__item__column" label={t('action')}>
    {item.expenseTypeCode ? t(item.expenseTypeCode) : t(type.label, { name: item?.author?.name })}
    <span className="timeline-list__item__notes">
      {item.notes}
    </span>
  </Labeled>
);

Action.propTypes = {
  item: PropTypes.shape({
    expenseTypeCode: PropTypes.string,
    notes: PropTypes.string,
    author: PropTypes.shape({
      name: PropTypes.string,
    }),
  }).isRequired,
  t: PropTypes.func.isRequired,
  type: PropTypes.shape({
    label: PropTypes.string,
  }).isRequired,
};

export default Action;
