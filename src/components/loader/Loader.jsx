import React from 'react';
import { Loader } from 'react-loaders';
import PropTypes from 'prop-types';

import './styles.scss';

const CustomLoader = ({ innerClassName }) => <Loader innerClassName={innerClassName} type="ball-pulse-sync" active />;

CustomLoader.propTypes = {
  innerClassName: PropTypes.string,
};

CustomLoader.defaultProps = {
  innerClassName: '',
};

export default CustomLoader;
