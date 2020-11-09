import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import Loader from 'components/loader';
import { getTimeline } from '../../service';
import ITEM_TYPES from './constants';

import './styles.scss';

const TimelineList = () => {
  const [items, setItems] = useState(null);
  const { t } = useTranslation('timeline');

  useEffect(async () => {
    setItems(await getTimeline());
  }, []);

  if (!items) {
    return (
      <div className="timeline-list__loading">
        <Loader />
      </div>
    );
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
                  style={{ width: index === 0 ? '15%' : `${85 / (columns.length - 1)}%` }}
                  className="timeline-list__item__column"
                  key={Column.name}
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
