import { Designer, Exit, Home, Mail, Notification, Sale, Settings } from '@shared/assets';
import { ERoutes } from '@shared/model';
import { MenuItemType } from 'antd/es/menu/interface';
import React from 'react';
import { Link } from 'react-router-dom';

export const getMenuItems = (): MenuItemType[] => [
  {
    key: 'orders',
    icon: (
      <Link to={ERoutes.HOME_PAGE}>
        <Home />
      </Link>
    ),
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
    icon: (
      <Link to={ERoutes.NOTIFICATION_PAGE}>
        <Notification />
      </Link>
    ),
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
