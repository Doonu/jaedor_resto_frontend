import { useSidebarOrders } from '@entities/orders';
import { Button } from 'antd';

const OrdersPage = () => {
  const { onToggleOpenDetails } = useSidebarOrders();

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
      <div>Это мой сайт</div>
      <div>Да да</div>
      <Button onClick={onToggleOpenDetails}>Выезжай</Button>
    </div>
  );
};

export default OrdersPage;
