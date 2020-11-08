import React from 'react';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

const CostCenter = ({ costCenters }) => {
  const { t } = useTranslation('refund');

  return (
    <div className="refund-banner__cost-center__wrapper">
      <div className="refund-banner__cost-center__content">
        <span>
          {t('costCenter')}
        </span>
        {
          costCenters.map((costCenter) => (
            <b key={costCenter.name}>
              {`${costCenter.percentage}% - ${costCenter.name} `}
            </b>
          ))
        }
      </div>
    </div>
  );
};

CostCenter.propTypes = {
  costCenters: PropTypes.arrayOf(PropTypes.shape({
    percentage: PropTypes.number,
    name: PropTypes.string,
  })),
};

CostCenter.defaultProps = {
  costCenters: [],
};

export default CostCenter;
