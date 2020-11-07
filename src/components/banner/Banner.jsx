import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const Banner = ({ children }) => (
  <div className="banner__wrapper">
    {children}
  </div>
);

Banner.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Banner;
