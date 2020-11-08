import React, { useEffect, useState } from 'react';
import Banner from 'components/banner';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

import { getHeader } from '../../service';

import './styles.scss';
import GeneralDescription from './GeneralDescription';
import CostCenter from './CostCenter';
import Budget from './Budget';

const RefundBanner = () => {
  const [headerInfo, setHeaderInfo] = useState(null);
  const { t } = useTranslation('refund');

  useEffect(async () => {
    const res = await getHeader();
    setHeaderInfo(res);
  }, []);

  if (!headerInfo) {
    return null;
  }

  return (
    <Banner className="refund-banner__wrapper">
      <h2 className="refund-banner__title">
        {`${t('refund')} - ${headerInfo.title}`}
      </h2>
      <div className="refund-banner__content">
        <div className="refund-banner__content__column">
          <GeneralDescription headerInfo={headerInfo} />
        </div>
        <div className="refund-banner__content__column">
          <CostCenter costCenters={headerInfo.costCenters} />
        </div>
        <div className="refund-banner__content__column">
          { !headerInfo.fraternizationEducationBudget && <Budget /> }
        </div>
      </div>
      <FontAwesomeIcon className="refund-banner__edit" icon={faEdit} />
    </Banner>
  );
};

export default RefundBanner;
