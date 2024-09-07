import { useSidebarLocation } from '@shared/hooks';
import { useEffect } from 'react';

export const useSidebarOrders = () => {
  const { setSidebarProps, isOpenDetails, onToggleOpenDetails } = useSidebarLocation();

  useEffect(() => {
    setSidebarProps({
      details: <div>Оплата корзины</div>,
      info: <div>Корзина</div>,
    });
  }, []);

  return {
    isOpenDetails,
    onToggleOpenDetails,
  };
};
