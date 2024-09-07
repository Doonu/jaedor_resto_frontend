import { useSidebarOrders } from '@entities/notification';
import { Button } from 'antd';
import React from 'react';

const NotificationPage = () => {
  const { isOpenDetails, onToggleOpenDetails } = useSidebarOrders();
  return (
    <div>
      {isOpenDetails ? 'false' : 'true'}
      <div>Это мой сайт</div>
      <div>Да да</div>
      <Button onClick={onToggleOpenDetails}>Выезжай</Button>
    </div>
  );
};

export default NotificationPage;
