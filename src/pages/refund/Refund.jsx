/* eslint-disable react/button-has-type */
import React, { useState } from 'react';

import Breadcrumb from 'components/breadcrumb';
import Button from 'components/button';
import { useTranslation } from 'react-i18next';
import RefundBanner from './components/refundBanner';
import TimelineList from './components/timeLineList';
import Sidebar from './components/sidebar';
import AddExpense from './components/addExpense';

import './styles.scss';

const Refund = () => {
  const [status, setStatus] = useState(null);
  const [isCreateOpen, setIsCreateOpen] = useState(false);

  const { t } = useTranslation('refund');

  const toggle = () => setIsCreateOpen((prev) => !prev);

  return (
    <div className="refund__wrapper">
      <Breadcrumb />
      <div className="refund__inner">
        <div className="refund__content">
          <RefundBanner setStatus={setStatus} />
          <Button
            onClick={toggle}
            className="refund__button"
            icon="receipt"
            label={t('addExpense')}
          />
          {isCreateOpen && <AddExpense onToggle={toggle} />}
          <TimelineList />
        </div>
        <Sidebar status={status} />
      </div>
    </div>
  );
};

export default Refund;
