import React from 'react';
import Labeled from 'components/labeled';
import PropTypes from 'prop-types';
import Tag from 'components/tag';

const Status = ({ item, t }) => {
  const status = item.status?.toLowerCase();
  return (
    <Labeled className="timeline-list__item__column" label={t('status')}>
      <Tag type={status} label={t(status)} />
    </Labeled>
  );
};

Status.propTypes = {
  item: PropTypes.shape({
    status: PropTypes.string,
  }).isRequired,
  t: PropTypes.func.isRequired,
};

export default Status;
