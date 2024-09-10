import { OrderCard, IOrder } from '@entities/orders';
import React from 'react';

import { SBasket, SHeadTitle, SOrderBasket, SPrice, STitle } from './orderBasket.styles';

const items: IOrder[] = [
  {
    id: 1,
    title: 'Spicy seasoned seafood noodles',
    price: 2.29,
    qty: 2,
    src: '/Instant.svg',
    comment: null,
  },
  {
    id: 2,
    title: 'Salted Pasta with mushroom sauce',
    price: 2.69,
    qty: 1,
    src: '/Instant.svg',
    comment: null,
  },
  {
    id: 3,
    title: 'Spicy seasoned seafood noodles',
    price: 2.29,
    qty: 2,
    src: '/Instant.svg',
    comment: null,
  },
  {
    id: 4,
    title: 'Salted Pasta with mushroom sauce',
    price: 2.69,
    qty: 1,
    src: '/Instant.svg',
    comment: null,
  },
  {
    id: 5,
    title: 'Spicy seasoned seafood noodles',
    price: 2.29,
    qty: 2,
    src: '/Instant.svg',
    comment: null,
  },
  {
    id: 6,
    title: 'Salted Pasta with mushroom sauce',
    price: 2.69,
    qty: 1,
    src: '/Instant.svg',
    comment: null,
  },
  {
    id: 7,
    title: 'Spicy seasoned seafood noodles',
    price: 2.29,
    qty: 2,
    src: '/Instant.svg',
    comment: null,
  },
  {
    id: 8,
    title: 'Salted Pasta with mushroom sauce',
    price: 2.69,
    qty: 1,
    src: '/Instant.svg',
    comment: null,
  },
  {
    id: 9,
    title: 'Spicy seasoned seafood noodles',
    price: 2.29,
    qty: 2,
    src: '/Instant.svg',
    comment: null,
  },
  {
    id: 10,
    title: 'Salted Pasta with mushroom sauce',
    price: 2.69,
    qty: 1,
    src: '/Instant.svg',
    comment: null,
  },
  {
    id: 11,
    title: 'Spicy seasoned seafood noodles',
    price: 2.29,
    qty: 2,
    src: '/Instant.svg',
    comment: null,
  },
  {
    id: 12,
    title: 'Salted Pasta with mushroom sauce',
    price: 2.69,
    qty: 1,
    src: '/Instant.svg',
    comment: null,
  },
];

const OrderBasket = () => (
  <SOrderBasket>
    <STitle>Orders #34562</STitle>
    <SHeadTitle>
      <div>Item</div>
      <div>Qty</div>
      <SPrice>Price</SPrice>
    </SHeadTitle>

    <SBasket>
      {items.map((orderItem) => (
        <OrderCard key={orderItem.id} {...orderItem} />
      ))}
    </SBasket>
  </SOrderBasket>
);

export default OrderBasket;
