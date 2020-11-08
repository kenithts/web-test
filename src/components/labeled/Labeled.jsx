import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const Labeled = ({ label, children }) => (
  <div className="labeled__wrapper">
    <span className="labeled__wrapper__labeled">
      {label}
    </span>
    <span className="labeled__children">
      {children}
    </span>
  </div>
);

Labeled.propTypes = {
  children: PropTypes.node.isRequired,
  label: PropTypes.string.isRequired,
};

export default Labeled;
