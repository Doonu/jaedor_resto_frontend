import { Designer, Exit, Home, Mail, Notification, Sale, Settings } from '@shared/assets';
import { MenuItemType } from 'antd/es/menu/interface';
import React from 'react';

export const getMenuItems = (): MenuItemType[] => [
  {
    key: 'home',
    icon: <Home />,
  },
  {
    key: 'sale',
    icon: <Sale />,
  },
  {
    key: 'designer',
    icon: <Designer />,
  },
  {
    key: 'mail',
    icon: <Mail />,
  },
  {
    key: 'notification',
    icon: <Notification />,
  },
  {
    key: 'settings',
    icon: <Settings />,
  },
  {
    key: 'exit',
    icon: <Exit />,
  },
];
