import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'components/icon';
import classnames from 'classnames';

import './styles.scss';

const Button = ({
  className, icon, label, ...props
}) => (
  <button {...props} type="button" className={classnames(className, 'button__wrapper')}>
    {icon && <Icon name={icon} />}
    {label}
  </button>
);

Button.propTypes = {
  icon: PropTypes.string,
  className: PropTypes.string,
  label: PropTypes.string.isRequired,
};

Button.defaultProps = {
  icon: '',
  className: '',
};

export default Button;
