import React from 'react';
import PropTypes from 'prop-types';

import Header from 'components/header';
import Sidebar from 'components/sidebar';

import './styles.scss';

const Authenticated = ({ children }) => (
  <div className="authenticated__wrapper">
    <Header />
    <div className="authenticated__wrapper__inner">
      <Sidebar />
      <div className="authenticated__wrapper__content">
        {children}
      </div>
    </div>
  </div>
);

Authenticated.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Authenticated;
