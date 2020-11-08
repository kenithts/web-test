import React, { useEffect, useState } from 'react';
import LabeledIcon from 'components/labeledIcon';
import { faMoneyCheckAlt } from '@fortawesome/free-solid-svg-icons';
import { unixToDate } from 'utils/date';
import { getTimeline } from '../../service';

import './styles.scss';

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
            <LabeledIcon classNameIcon="timeline-list__item--expense" icon={faMoneyCheckAlt} label={unixToDate(item.cardDate)} />
          </div>
        ))
      }
    </div>
  );
};

export default TimelineList;
