/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

const GeneralDescription = ({ headerInfo }) => {
  const { t } = useTranslation('refund');
  return (
    <table className="refund-banner__table">
      <thead>
        <tr>
          <th scope="col" width="20%" />
          <th scope="col" width="80%" />
        </tr>
      </thead>
      <tbody>
        <tr className="refund-banner__table__row">
          <td>{t('justification')}</td>
          <td>{headerInfo.justification}</td>
        </tr>
        <tr className="refund-banner__table__row">
          <td>{t('purpose')}</td>
          <td>{t(headerInfo.purpose)}</td>
        </tr>
        <tr className="refund-banner__table__row">
          <td>{t('quantity')}</td>
          <td>{ t('people', { amount: headerInfo.accountabilityExtraInfo.amountOfPeople })}</td>
        </tr>
        <tr className="refund-banner__table__row">
          <td>{t('project')}</td>
          <td>{headerInfo.project.title}</td>
        </tr>
      </tbody>
    </table>
  );
};

GeneralDescription.propTypes = {
  headerInfo: PropTypes.shape({
    justification: PropTypes.string,
    purpose: PropTypes.string,
    accountabilityExtraInfo: PropTypes.shape({
      amountOfPeople: PropTypes.number,
    }),
    project: PropTypes.shape({
      title: PropTypes.string,
    }),
  }).isRequired,
};

export default GeneralDescription;
