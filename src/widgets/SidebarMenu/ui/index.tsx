import React from 'react';
import { useNavigate } from 'react-router-dom';

import { SMenu, SMenuItem, SSidebar } from './sidebar.styles';
import { getMenuItems } from '../lib/manuItems';

export const SidebarMenu = () => {
  const menuItems = getMenuItems();

  return (
    <SSidebar>
      <SMenu defaultSelectedKeys={['orders']}>
        {menuItems.map(({ key, icon }) => (
          <SMenuItem key={key} icon={icon} />
        ))}
      </SMenu>
    </SSidebar>
  );
};
