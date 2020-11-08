/* eslint-disable react/button-has-type */
import React, { useState } from 'react';

import Breadcrumb from 'components/breadcrumb';
import RefundBanner from './components/refundBanner';
import TimelineList from './components/timeLineList';
import Sidebar from './components/sidebar';

import './styles.scss';

const Refund = () => {
  const [status, setStatus] = useState(null);

  return (
    <div className="refund__wrapper">
      <Breadcrumb />
      <div className="refund__inner">
        <div className="refund__content">
          <RefundBanner setStatus={setStatus} />
          <TimelineList />
        </div>
        <Sidebar status={status} />
      </div>
    </div>
  );
};

export default Refund;
