import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './styles.scss';

const Tag = ({ type, label }) => (
  <span className={classnames(type, 'tag__wrapper')}>
    {label}
  </span>
);

Tag.propTypes = {
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default Tag;
