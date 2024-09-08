import { useSidebarNotification } from '@entities/notification';
import { Button } from 'antd';
import React from 'react';

const NotificationPage = () => {
  const { isOpenDetails, onToggleOpenDetails } = useSidebarNotification();
  return (
    <div>
      <div>Это мой сайт</div>
      <div>Да да</div>
      <Button onClick={onToggleOpenDetails}>Выезжай</Button>
    </div>
  );
};

export default NotificationPage;
