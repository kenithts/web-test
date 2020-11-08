import React, { useEffect, useState } from 'react';
import LabeledIcon from 'components/labeledIcon';
import { faMoneyCheckAlt, faUsers, faAsterisk } from '@fortawesome/free-solid-svg-icons';
import { unixToDate } from 'utils/date';
import { getTimeline } from '../../service';

import './styles.scss';

const ITEM_TYPES = {
  EXPENSE: {
    icon: faMoneyCheckAlt,
    classNameIcon: 'timeline-list__item--expense',
  },
  EVALUATION: {
    icon: faUsers,
    classNameIcon: 'timeline-list__item--evaluation',
  },
  ACCOUNTABILITY_SUBMITTED: {
    icon: faAsterisk,
    classNameIcon: 'timeline-list__item--account',
  },
  ACCOUNTABILITY_CREATED: {
    icon: faAsterisk,
    classNameIcon: 'timeline-list__item--account',
  },
};

const TimelineList = () => {
  const [items, setItems] = useState(null);

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
              icon={ITEM_TYPES[item.cardType].icon}
              label={unixToDate(item.cardDate)}
            />
          </div>
        ))
      }
    </div>
  );
};

export default TimelineList;
