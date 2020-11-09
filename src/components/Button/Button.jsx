import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'components/icon';
import classnames from 'classnames';

import './styles.scss';

const Button = ({
  className, type, icon, label, variant, ...props
}) => (
  <button {...props} type={type} className={classnames(className, variant, 'button__wrapper')}>
    {icon && <Icon name={icon} />}
    {label}
  </button>
);

Button.propTypes = {
  icon: PropTypes.string,
  className: PropTypes.string,
  label: PropTypes.string.isRequired,
  variant: PropTypes.string,
  type: PropTypes.string,
};

Button.defaultProps = {
  icon: '',
  className: '',
  variant: '',
  type: 'button',
};

export default Button;
