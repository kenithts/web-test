import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const Input = ({
  label, name, required, error, ...props
}) => (
  <div className="input__wrapper">
    <label htmlFor={name}>{`${label}${required ? '*' : ''}`}</label>
    <input name={name} {...props} />
    {
      error && <span>{error}</span>
    }
  </div>
);

Input.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  required: PropTypes.bool,
  error: PropTypes.string,
};

Input.defaultProps = {
  required: true,
  error: '',
};

export default Input;
