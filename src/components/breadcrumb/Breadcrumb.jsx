import React from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';

import './styles.scss';

const Breadcrumb = () => {
  const { location } = useHistory();
  const { t } = useTranslation('pages');

  const paths = location.pathname.slice(1).split('/');

  return (
    <div className="breadcrumb__wrapper">
      { paths.map((path) => (
        <span key={path}>
          <p>{t(path)}</p>
        </span>
      )) }
    </div>
  );
};

export default Breadcrumb;
