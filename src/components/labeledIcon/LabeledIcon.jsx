import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Icon from 'components/icon';

import './styles.scss';

const LabeledIcon = ({ classNameIcon, icon, label }) => (
  <div className="labeled-icon__wrapper">
    <span className={classnames(classNameIcon, 'labeled-icon__icon')}>
      <Icon name={icon} />
    </span>
    <span>
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
