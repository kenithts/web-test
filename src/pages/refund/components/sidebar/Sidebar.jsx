import Service from 'pages/refund/service';
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import Status from 'components/status';
import Loader from 'components/loader';
import Balance from './components/balance';

import './styles.scss';

const Sidebar = ({ status }) => {
  const [sidebar, setSidebar] = useState(null);

  useEffect(async () => {
    setSidebar(await Service.getSidebar());
  }, []);

  if (!status || !sidebar) {
    return (
      <div className="right-sidebar__loading">
        <Loader />
      </div>
    );
  }

  return (
    <div className="right-sidebar__wrapper">
      <Status status={status} />
      <div className="right-sidebar__items">
        {
          sidebar.content.map((item) => <Balance item={item} key={`${item.accountabilityId} ${item.currency?.id}`} />)
        }
      </div>
    </div>
  );
};

Sidebar.propTypes = {
  status: PropTypes.string,
};

Sidebar.defaultProps = {
  status: '',
};

export default Sidebar;
