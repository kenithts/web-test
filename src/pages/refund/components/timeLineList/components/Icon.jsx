import React from 'react';
import PropTypes from 'prop-types';

import LabeledIcon from 'components/labeledIcon';
import { unixToDate } from 'utils/date';

const Icon = ({ item, types }) => (
  <LabeledIcon
    classNameIcon={types[item.cardType].classNameIcon}
    icon={item.expenseTypeIcon || types[item.cardType].icon}
    label={unixToDate(item.cardDate)}
  />
);

Icon.propTypes = {
  item: PropTypes.shape({
    cardDate: PropTypes.string,
    cardType: PropTypes.string,
    expenseTypeIcon: PropTypes.string,
  }).isRequired,
  types: PropTypes.arrayOf(PropTypes.shape({
    classNameIcon: PropTypes.string,
    icon: PropTypes.string,
  })).isRequired,
};

export default Icon;
