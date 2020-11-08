import React from 'react';
import CurrencyFormat from 'react-currency-format';
import PropTypes from 'prop-types';

const Currency = ({ value, currency }) => (
  <CurrencyFormat
    displayType="text"
    value={value}
    thousandSeparator="."
    prefix={`${currency} `}
    decimalSeparator=","
  />
);

Currency.propTypes = {
  value: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
};

export default Currency;
