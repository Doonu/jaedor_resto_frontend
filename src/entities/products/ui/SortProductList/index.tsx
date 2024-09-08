import React, { FC } from 'react';

import { SSelect, SSortProductsList, STitle } from './sortProductsList.styles';

interface SortOrdersListProps {
  title: string;
}

export const SortProductsList: FC<SortOrdersListProps> = ({ title }) => (
  <SSortProductsList>
    <STitle>{title}</STitle>
    <SSelect
      value="By cost"
      options={[
        { value: 'By cost', label: 'By cost' },
        { value: 'By Alphabetically', label: 'By Alphabetically' },
      ]}
    />
  </SSortProductsList>
);
