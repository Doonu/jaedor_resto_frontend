import { IOrder } from '@entities/orders';
import { Input } from 'antd';
import React, { FC } from 'react';

import {
  Qty,
  SButton,
  SCard,
  SFooter,
  SHead,
  SImg,
  SInfo,
  SOrderCard,
  SPrice,
  STitle,
  STotalPrice,
} from './orderCard.styles';

export const OrderCard: FC<IOrder> = (orderItem) => (
  <SOrderCard key={orderItem.id}>
    <SHead>
      <SCard>
        <SImg src={orderItem.src} alt="" />
        <SInfo>
          <STitle>{orderItem.title}</STitle>
          <SPrice>${orderItem.price}</SPrice>
        </SInfo>
      </SCard>
      <Qty>{orderItem.qty}</Qty>
      <STotalPrice>${orderItem.price}</STotalPrice>
    </SHead>
    <SFooter>
      <Input style={{ flex: 1 }} placeholder="Order Note..." />
      <SButton />
    </SFooter>
  </SOrderCard>
);
