import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'components/icon';

const Receipt = ({ item, t }) => (
  <a href={item.resourceUrl} className="timeline-list__item__receipt">
    <Icon name="receipt" />
    <span>{t('seeReceipt')}</span>
  </a>
);

Receipt.propTypes = {
  item: PropTypes.shape({
    resourceUrl: PropTypes.string,
  }).isRequired,
  t: PropTypes.func.isRequired,
};

export default Receipt;
