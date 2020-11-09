import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';
import Icon from 'components/icon';
import { useTranslation } from 'react-i18next';

const Select = ({
  onError, onChange, value, label, name, required, error, placeholder, options, ...props
}) => {
  const { t } = useTranslation('errors');

  return (
    <div className="select__wrapper">
      <label htmlFor={name}>{`${label}${required ? '*' : ''}`}</label>
      <div className="select__select">
        <select onChange={onChange} name={name} {...props}>
          <option value="" disabled selected={!value}>{placeholder}</option>
          {options.map((option) => (
            <option
              selected={value === option.value}
              key={option.value}
              value={option.value}
            >
              {option.label}
            </option>
          ))}
        </select>
        <Icon name="chevron-down" className="select__icon" />
      </div>
      {error && <span>{t(error)}</span>}
    </div>
  );
};

Select.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  required: PropTypes.bool,
  error: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string,
    label: PropTypes.string,
  })).isRequired,
  onError: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

Select.defaultProps = {
  required: true,
  error: '',
};

export default Select;
