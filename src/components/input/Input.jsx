import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';
import { useTranslation } from 'react-i18next';

const Input = ({
  label, name, required, error, ...props
}) => {
  const { t } = useTranslation('errors');

  return (
    <div className="input__wrapper">
      <label htmlFor={name}>{`${label}${required ? '*' : ''}`}</label>
      <input {...props} name={name} />
      {error && <span>{t(error)}</span>}
    </div>
  );
};

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
