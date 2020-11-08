import React from 'react';
import PropTypes from 'prop-types';
import {
  faMoneyCheckAlt, faUsers, faAsterisk, faUtensils, faConciergeBell, faReceipt,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ICONS = {
  'money-check-alt': faMoneyCheckAlt,
  users: faUsers,
  asterisk: faAsterisk,
  utensils: faUtensils,
  'concierge-bell': faConciergeBell,
  receipt: faReceipt,
};

const Icon = ({ name }) => (
  <FontAwesomeIcon icon={ICONS[name]} />
);

Icon.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Icon;
