import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { getTimeline } from '../../service';

import './styles.scss';
import ITEM_TYPES from './constants';

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
        items.content.map((item) => {
          const { columns } = ITEM_TYPES[item.cardType];
          return (
            <div className="timeline-list__item" key={item.id}>
              {
              columns.map((Column, index) => (
                <div
                  style={{ width: index === 0 ? '10%' : `${90 / (columns.length - 1)}%` }}
                  className="timeline-list__item__column"
                >
                  <Column item={item} t={t} type={ITEM_TYPES[item.cardType]} />
                </div>
              ))
            }
            </div>
          );
        })
}
    </div>
  );
};

export default TimelineList;
