import React from 'react';
import PropTypes from 'prop-types';

const Authenticated = ({ children }) => (
  <div className="authenticated__main-wrapper">
    {children}
  </div>
);

Authenticated.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Authenticated;
