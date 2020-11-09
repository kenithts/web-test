import React from 'react';
import PropTypes from 'prop-types';

import LabeledIcon from 'components/labeledIcon';
import { unixToDate } from 'utils/date';

const Icon = ({ item, type }) => (
  <LabeledIcon
    classNameIcon={type.classNameIcon}
    icon={item.expenseTypeIcon || type.icon}
    label={unixToDate(item.cardDate)}
  />
);

Icon.propTypes = {
  item: PropTypes.shape({
    cardDate: PropTypes.number,
    cardType: PropTypes.string,
    expenseTypeIcon: PropTypes.string,
  }).isRequired,
  type: PropTypes.shape({
    classNameIcon: PropTypes.string,
    icon: PropTypes.string,
  }).isRequired,
};

export default Icon;
