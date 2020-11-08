/* eslint-disable react/button-has-type */
import React from 'react';

import Breadcrumb from 'components/breadcrumb';
import RefundBanner from './components/refundBanner';
import TimelineList from './components/timeLineList';

import './styles.scss';

const Refund = () => (
  <div className="refund__wrapper">
    <Breadcrumb />
    <RefundBanner />
    <TimelineList />
  </div>
);

export default Refund;
