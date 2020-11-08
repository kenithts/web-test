import { getSidebar } from 'pages/refund/service';
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import Status from 'components/status';
import Balance from './components/balance';

import './styles.scss';

const Sidebar = ({ status }) => {
  const [sidebar, setSidebar] = useState(null);

  useEffect(() => {
    setSidebar(getSidebar());
  }, []);

  console.log(sidebar);

  if (!status || !sidebar) {
    return null;
  }

  return (
    <div className="right-sidebar__wrapper">
      <Status status={status} />
      <div className="right-sidebar__items">
        {
          sidebar.content.map((item) => <Balance item={item} key={item.id} />)
        }
      </div>
    </div>
  );
};

Sidebar.propTypes = {
  status: PropTypes.string.isRequired,
};

export default Sidebar;
