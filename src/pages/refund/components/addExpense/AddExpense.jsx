import React from 'react';
import { useTranslation } from 'react-i18next';

import FileUploader from 'components/fileUploader';
import Input from 'components/input';
import Select from 'components/select';

import './styles.scss';
import { EXPENSE_TYPES, CURRENCY_TYPES } from './constants';

const AddExpense = () => {
  const { t } = useTranslation('addExpense');

  return (
    <div className="add-expense__wrapper">
      <strong>
        {t('newExpense')}
      </strong>
      <form className="add-expense__form">
        <div className="add-expense__form__file">
          <p>
            {t('fileOptions')}
          </p>
          <FileUploader />
          <span>
            {t('format')}
          </span>
        </div>
        <div className="add-expense__form__fields">
          <div className="add-expense__form__fields__half">
            <Select
              name="type-select"
              placeholder={t('select')}
              label={t('type')}
              options={EXPENSE_TYPES.map((option) => ({
                ...option,
                label: t(option.label),
              }))}
            />
            <Select
              name="type-select"
              placeholder={t('select')}
              label={t('currency')}
              options={CURRENCY_TYPES}
            />
          </div>
          <Input name="expense-title" placeholder={t('expensePlaceholder')} label={t('expenseTitle')} />
          <Input
            type="date"
            name="expense-title"
            placeholder={t('expensePlaceholder')}
            label={t('expenseTitle')}
          />
          <div className="add-expense__form__fields__half">
            <Input
              step="0.01"
              type="number"
              name="note-value"
              placeholder={t('noteValuePlaceholder')}
              label={t('noteValue')}
            />
            <Input
              step="0.01"
              name="considered-value"
              type="number"
              placeholder={t('consideredValuePlaceholder')}
              label={t('consideredValue')}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddExpense;
