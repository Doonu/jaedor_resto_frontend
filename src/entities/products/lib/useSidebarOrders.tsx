import { useSidebarLocation } from '@shared/hooks';
import OrderBasket from '@widgets/OrderBasket';
import { useEffect } from 'react';

export const useSidebarOrders = () => {
  const { setSidebarProps, isOpenDetails, onToggleOpenDetails } = useSidebarLocation();

  useEffect(() => {
    setSidebarProps({
      details: <div>Оплата корзины</div>,
      info: <OrderBasket />,
    });
  }, []);

  return {
    isOpenDetails,
    onToggleOpenDetails,
  };
};
