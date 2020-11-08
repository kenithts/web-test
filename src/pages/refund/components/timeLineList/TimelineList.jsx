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
            <LabeledIcon
              classNameIcon={ITEM_TYPES[item.cardType].classNameIcon}
              icon={item.expenseTypeIcon || ITEM_TYPES[item.cardType].icon}
              label={unixToDate(item.cardDate)}
            />
            <Labeled label={t('action')}>
              {item.cardDate}
            </Labeled>
          </div>
        ))
      }
    </div>
  );
};

export default TimelineList;
