import { SortProductsList } from '@entities/products';
import { Tabs } from 'antd';
import { TabsProps } from 'antd/es/tabs';
import React from 'react';

export const FilterOrdersList = () => {
  const items: TabsProps['items'] = [
    {
      key: '1',
      label: 'Hot Dishes',
      children: <SortProductsList title="Choose Dishes" />,
    },
    {
      key: '2',
      label: 'Cold Dishes',
    },
    {
      key: '3',
      label: 'Soup',
    },
    {
      key: '4',
      label: 'Grill',
    },
    {
      key: '5',
      label: 'Appetizer',
    },
    {
      key: '6',
      label: 'Dessert',
    },
  ];

  return <Tabs items={items} onChange={(e) => console.log(e)} />;
};
