import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'components/icon';
import classnames from 'classnames';

import Loader from 'components/loader';

import './styles.scss';

const Button = ({
  className, type, icon, label, variant, busy, ...props
}) => (
  <button {...props} disabled={busy} type={type} className={classnames(className, variant, 'button__wrapper')}>
    {icon && <Icon name={icon} />}
    {busy ? <Loader innerClassName="button__loader" /> : label }
  </button>
);

Button.propTypes = {
  icon: PropTypes.string,
  className: PropTypes.string,
  label: PropTypes.string.isRequired,
  variant: PropTypes.string,
  type: PropTypes.string,
  busy: PropTypes.bool,
};

Button.defaultProps = {
  icon: '',
  className: '',
  variant: '',
  type: 'button',
  busy: false,
};

export default Button;
