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

  const handleSend = (e) => {
    e.preventDefault();
    e.stopPropagation();

    const hasError = Object.keys(form).reduce((acc, field) => {
      console.log(acc, form[field], field);
      if (!form[field]) {
        setError('REQUIRED_FIELDS', field);
        return acc || true;
      }
      return acc;
    }, false);

    if (hasError) {
      return;
    }

    console.log('chamado');
  };

  return (
    <div className="add-expense__wrapper">
      <strong>
        {t('newExpense')}
      </strong>
      <form className="add-expense__form" onSubmit={handleSend}>
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
              onChange={setField}
              onError={setError}
              value={form.expenseTypeCode}
              error={errors.expenseTypeCode}
              name="expenseTypeCode"
              placeholder={t('select')}
              label={t('type')}
              options={EXPENSE_TYPES.map((option) => ({
                ...option,
                label: t(option.label),
              }))}
            />
            <Select
              onChange={setField}
              onError={setError}
              value={form.currencyCode}
              error={errors.currencyCode}
              name="currencyCode"
              placeholder={t('select')}
              label={t('currency')}
              options={CURRENCY_TYPES}
            />
          </div>
          <Input
            onChange={setField}
            onError={setError}
            value={form.notes}
            error={errors.notes}
            name="notes"
            placeholder={t('expensePlaceholder')}
            label={t('expenseTitle')}
          />
          <Input
            onChange={setField}
            onError={setError}
            value={form.cardDate}
            error={errors.cardDate}
            type="date"
            name="cardDate"
            label={t('comprovantDate')}
          />
          <div className="add-expense__form__fields__half">
            <Input
              onChange={setField}
              onError={setError}
              value={form.amountSpent}
              error={errors.amountSpent}
              step="0.01"
              type="number"
              name="amountSpent"
              placeholder={t('noteValuePlaceholder')}
              label={t('noteValue')}
            />
            <Input
              onChange={setField}
              onError={setError}
              value={form.amountTotal}
              error={errors.amountTotal}
              step="0.01"
              name="amountTotal"
              type="number"
              placeholder={t('consideredValuePlaceholder')}
              label={t('consideredValue')}
            />
          </div>
          <button type="submit">
            enviar
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddExpense;
