import React, { useEffect, useState } from 'react';
import Banner from 'components/banner';
import { getHeader } from '../../service';

const RefundBanner = () => {
  const [headerInfo, setHeaderInfo] = useState(null);

  useEffect(async () => {
    const res = await getHeader();
    setHeaderInfo(res);
  }, []);

  console.log(headerInfo);

  return (
    <Banner>
      <div>
        nada
      </div>
    </Banner>
  );
};

export default RefundBanner;
