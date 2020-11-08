import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';

const Budget = () => (
  <div className="refund-banner__budget__main-wrapper">
    <FontAwesomeIcon icon={faGraduationCap} />
    <b>Esta solicitação será paga com o Budget de educação / confraternização.</b>
  </div>
);

export default Budget;
