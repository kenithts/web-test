import React from 'react';
import PropTypes from 'prop-types';

import Header from 'components/header';

const Authenticated = ({ children }) => (
  <div className="authenticated__main-wrapper">
    <Header />
    {children}
  </div>
);

Authenticated.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Authenticated;
