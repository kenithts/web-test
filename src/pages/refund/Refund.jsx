/* eslint-disable react/button-has-type */
import React, { useState } from 'react';

import Breadcrumb from 'components/breadcrumb';
import Button from 'components/Button';
import { useTranslation } from 'react-i18next';
import RefundBanner from './components/refundBanner';
import TimelineList from './components/timeLineList';
import Sidebar from './components/sidebar';
import AddExpense from './components/addExpense';

import './styles.scss';

const Refund = () => {
  const [status, setStatus] = useState(null);
  const [isCreateOpen, setIsCreateOpen] = useState(true);

  const { t } = useTranslation('refund');

  return (
    <div className="refund__wrapper">
      <Breadcrumb />
      <div className="refund__inner">
        <div className="refund__content">
          <RefundBanner setStatus={setStatus} />
          <Button
            onClick={() => setIsCreateOpen((prev) => !prev)}
            className="refund__button"
            icon="receipt"
            label={t('addExpense')}
          />
          {
            isCreateOpen && <AddExpense />
          }
          <TimelineList />
        </div>
        <Sidebar status={status} />
      </div>
    </div>
  );
};

export default Refund;
