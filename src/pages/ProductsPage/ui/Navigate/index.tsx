import { Search } from '@shared/assets';
import dayjs from 'dayjs';
import React from 'react';

import { SDate, SInput, SName, SNavigate } from './navigate.styles';

const Navigate = () => {
  const formattedDate = dayjs().format('dddd, D MMMM YYYY');

  return (
    <SNavigate>
      <div>
        <SName>Jaegar Resto</SName>
        <SDate>{formattedDate}</SDate>
      </div>
      <div>
        <SInput placeholder="Search for food, coffe, etc.." prefix={<Search />} />
      </div>
    </SNavigate>
  );
};

export default Navigate;
