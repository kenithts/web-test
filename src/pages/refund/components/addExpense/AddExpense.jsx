import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import FileUploader from 'components/fileUploader';
import Input from 'components/input';
import Select from 'components/select';

import './styles.scss';
import { EXPENSE_TYPES, CURRENCY_TYPES } from './constants';

const AddExpense = () => {
  const { t } = useTranslation('addExpense');
  const [form, setForm] = useState({
    expenseTypeCode: '',
    currencyCode: '',
    amountSpent: '',
    amountTotal: '',
    notes: '',
    resourceUrl: '',
    cardDate: '',
  });
  const [errors, setErrors] = useState({});

  const setField = (e) => {
    console.log(e.target.name, e.target.value);
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setErrors(({ [e.target.name]: _, ...prev }) => ({ ...prev }));
  };

  const setError = (error, name) => {
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  console.log(form, setForm, setField, errors);

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
          <FileUploader
            accept=".jpg,.png"
            onChange={setField}
            onError={setError}
            name="resourceUrl"
            maxSize={1000000}
            value={form.resourceUrl}
            error={errors.resourceUrl}
          />
          <span>
            {t('format')}
          </span>
        </div>
        <div className="add-expense__form__fields">
          <div className="add-expense__form__fields__half">
            <Select
              name="expenseTypeCode"
              placeholder={t('select')}
              label={t('type')}
              options={EXPENSE_TYPES.map((option) => ({
                ...option,
                label: t(option.label),
              }))}
            />
            <Select
              name="currencyCode"
              placeholder={t('select')}
              label={t('currency')}
              options={CURRENCY_TYPES}
            />
          </div>
          <Input name="notes" placeholder={t('expensePlaceholder')} label={t('expenseTitle')} />
          <Input
            type="date"
            name="cardDate"
            label={t('comprovantDate')}
          />
          <div className="add-expense__form__fields__half">
            <Input
              step="0.01"
              type="number"
              name="amountSpent"
              placeholder={t('noteValuePlaceholder')}
              label={t('noteValue')}
            />
            <Input
              step="0.01"
              name="amountTotal"
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
