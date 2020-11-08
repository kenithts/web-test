import React from 'react';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

import Currency from 'components/currency';

import './styles.scss';

const BalanceTable = ({
  declared, approved, received, currency,
}) => {
  const { t } = useTranslation('sidebar');

  return (
    <table className="balance-table">
      <thead>
        <tr>
          <th scope="col">{t('description')}</th>
          <th scope="col">{t('value')}</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="balance-table__description">
            <p>
              {t('declaredExpenses')}
            </p>
            <p>
              {t('declaredExpensesDescription')}
            </p>
          </td>
          <td className="balance-table__value"><Currency value={declared} currency={currency} /></td>
        </tr>
        <tr>
          <td className="balance-table__description">
            <p>
              {t('approvedExpenses')}
            </p>
            <p>
              {t('approvedExpensesDescription')}
            </p>
          </td>
          <td className="balance-table__value"><Currency value={approved} currency={currency} /></td>
        </tr>
        <tr>
          <td className="balance-table__description">
            <p>
              {t('paymentDone')}
            </p>
            <p>
              {t('paymentDoneDescription')}
            </p>
          </td>
          <td className="balance-table__value balance-table__value--received">
            <Currency value={received} currency={currency} />
          </td>
        </tr>
      </tbody>
    </table>
  );
};

BalanceTable.propTypes = {
  received: PropTypes.number.isRequired,
  approved: PropTypes.number.isRequired,
  declared: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
};

export default BalanceTable;
