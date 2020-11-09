import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';
import Icon from 'components/icon';

const Select = ({
  label, name, required, error, placeholder, options, ...props
}) => (
  <div className="select__wrapper">
    <label htmlFor={name}>{`${label}${required ? '*' : ''}`}</label>
    <div className="select__select">
      <select required name={name} {...props}>
        <option value="" disabled selected hidden>{placeholder}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>{option.label}</option>
        ))}
      </select>
      <Icon name="chevron-down" className="select__icon" />
    </div>
    {error && <span>{error}</span>}
  </div>
);

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
};

Select.defaultProps = {
  required: true,
  error: '',
};

export default Select;
