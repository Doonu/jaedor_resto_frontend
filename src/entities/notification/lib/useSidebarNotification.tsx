import { useSidebarLocation } from '@shared/hooks';
import { useEffect } from 'react';

export const useSidebarOrders = () => {
  const { setSidebarProps, isOpenDetails, onToggleOpenDetails } = useSidebarLocation();

  useEffect(() => {
    setSidebarProps({
      details: <div>Нотификации</div>,
      info: <div>Одна нотификация</div>,
    });
  }, []);

  return {
    isOpenDetails,
    onToggleOpenDetails,
  };
};
