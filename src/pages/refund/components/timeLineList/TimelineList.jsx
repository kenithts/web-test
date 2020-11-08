import React, { useEffect, useState } from 'react';
import LabeledIcon from 'components/labeledIcon';
import Labeled from 'components/labeled';
import { unixToDate } from 'utils/date';
import { useTranslation } from 'react-i18next';
import { getTimeline } from '../../service';

import './styles.scss';

const ITEM_TYPES = {
  EXPENSE: {
    icon: 'money-check-alt',
    classNameIcon: 'timeline-list__item--expense',
  },
  EVALUATION: {
    icon: 'users',
    classNameIcon: 'timeline-list__item--evaluation',
  },
  ACCOUNTABILITY_SUBMITTED: {
    icon: 'asterisk',
    classNameIcon: 'timeline-list__item--account',
  },
  ACCOUNTABILITY_CREATED: {
    icon: 'asterisk',
    classNameIcon: 'timeline-list__item--account',
  },
};

const TimelineList = () => {
  const [items, setItems] = useState(null);
  const { t } = useTranslation('timeline');

  useEffect(() => {
    setItems(getTimeline());
  }, []);

  console.log(items);

  if (!items) {
    return null;
  }

  return (
    <div className="timeline-list__wrapper">
      {
        items.content.map((item) => (
          <div className="timeline-list__item">
            <div className="timeline-list__item__column">
              <LabeledIcon
                classNameIcon={ITEM_TYPES[item.cardType].classNameIcon}
                icon={item.expenseTypeIcon || ITEM_TYPES[item.cardType].icon}
                label={unixToDate(item.cardDate)}
              />
            </div>

            <div className="timeline-list__item__column">
              <Labeled className="timeline-list__item__column" label={t('action')}>
                {item.expenseTypeCode ? t(item.expenseTypeCode) : 'aats'}
                <span className="timeline-list__item__notes">
                  {item.notes}
                </span>
              </Labeled>
            </div>

            <div className="timeline-list__item__column">
              <Labeled className="timeline-list__item__column" label={t('value')}>
                {`${item.currencyCode} ${item.amountSpent}`}
                <span className="timeline-list__item__notes">
                  {`${t('noteValue')}: ${item.currencyCode} ${item.amountTotal}`}
                </span>
              </Labeled>
            </div>

            <div className="timeline-list__item__column">
              <Labeled className="timeline-list__item__column" label={t('value')}>
                {`${item.currencyCode} ${item.amountSpent}`}
                <span className="timeline-list__item__notes">
                  {`${t('noteValue')}: ${item.currencyCode} ${item.amountTotal}`}
                </span>
              </Labeled>
            </div>
          </div>
        ))
      }
    </div>
  );
};

export default TimelineList;
