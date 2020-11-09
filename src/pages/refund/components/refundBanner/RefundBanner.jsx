import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Banner from 'components/banner';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

import Loader from 'components/loader';
import Service from '../../service';

import GeneralDescription from './GeneralDescription';
import CostCenter from './CostCenter';
import Budget from './Budget';

import './styles.scss';

const RefundBanner = ({ setStatus }) => {
  const [headerInfo, setHeaderInfo] = useState(null);
  const { t } = useTranslation('refund');

  useEffect(async () => {
    const res = await Service.getHeader();
    setHeaderInfo(res);
    setStatus(res.status);
  }, []);

  if (!headerInfo) {
    return (
      <Banner className="refund-banner__loading">
        <Loader />
      </Banner>
    );
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

RefundBanner.propTypes = {
  setStatus: PropTypes.func.isRequired,
};

export default RefundBanner;
