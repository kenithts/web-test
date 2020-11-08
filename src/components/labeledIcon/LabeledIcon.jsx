import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classnames from 'classnames';

import './styles.scss';

const LabeledIcon = ({ classNameIcon, icon, label }) => (
  <div className="labeled-icon__wrapper">
    <span className={classnames(classNameIcon, 'labeled-icon__icon')}>
      <FontAwesomeIcon icon={icon} />
    </span>
    <span className="">
      {label}
    </span>
  </div>
);

LabeledIcon.propTypes = {
  icon: PropTypes.node.isRequired,
  label: PropTypes.string.isRequired,
  classNameIcon: PropTypes.string.isRequired,
};

export default LabeledIcon;
