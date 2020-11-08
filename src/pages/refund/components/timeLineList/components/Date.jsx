import React from 'react';
import Labeled from 'components/labeled';
import PropTypes from 'prop-types';
import { unixToDate } from 'utils/date';

const Date = ({ item, t }) => (
  <Labeled className="timeline-list__item__column" label={t('approvalDate')}>
    {unixToDate(item.approvalDate) || '-'}
  </Labeled>
);

Date.propTypes = {
  item: PropTypes.shape({
    approvalDate: PropTypes.number,
  }).isRequired,
  t: PropTypes.func.isRequired,
};

export default Date;
