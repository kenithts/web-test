import React from 'react';
import { useTranslation } from 'react-i18next';
import './styles.scss';

const Sidebar = () => {
  const { t } = useTranslation('pages');
  return (
    <div className="sidebar__wrapper">
      {t('current')}
    </div>
  );
};

export default Sidebar;
