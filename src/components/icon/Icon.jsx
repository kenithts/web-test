import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMoneyCheckAlt,
  faUsers,
  faAsterisk,
  faUtensils,
  faConciergeBell,
  faReceipt,
  faArrowDown,
  faArrowUp,
} from '@fortawesome/free-solid-svg-icons';

const ICONS = {
  'money-check-alt': faMoneyCheckAlt,
  users: faUsers,
  asterisk: faAsterisk,
  utensils: faUtensils,
  'concierge-bell': faConciergeBell,
  receipt: faReceipt,
  'arrow-up': faArrowUp,
  'arrow-down': faArrowDown,

};

const Icon = ({ name }) => (
  <FontAwesomeIcon icon={ICONS[name]} />
);

Icon.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Icon;
