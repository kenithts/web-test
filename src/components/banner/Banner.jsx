import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';
import classnames from 'classnames';

const Banner = ({ children, className }) => (
  <div className={classnames('banner__wrapper', className)}>
    {children}
  </div>
);

Banner.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Banner.defaultProps = {
  className: '',
};

export default Banner;
