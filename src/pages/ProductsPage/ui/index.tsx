import {
  useSidebarOrders,
  FilterOrdersList,
  ProductListDetails,
  IProduct,
} from '@entities/products';
import { faker } from '@faker-js/faker';
import { useState } from 'react';

import Navigate from './Navigate';
import { SList, SPage } from './productsPage.styles';

const items: IProduct[] = [
  {
    id: 1,
    title: 'Spicy seasoned seafood noodles',
    price: 2.29,
    count: 20,
    src: '/Instant.svg',
  },
  {
    id: 2,
    title: 'Salted Pasta with mushroom sauce',
    price: 2.69,
    count: 11,
    src: '/Instant.svg',
  },
  {
    id: 3,
    title: 'Spicy seasoned seafood noodles',
    price: 2.29,
    count: 20,
    src: '/Instant.svg',
  },
  {
    id: 4,
    title: 'Salted Pasta with mushroom sauce',
    price: 2.69,
    count: 11,
    src: '/Instant.svg',
  },
  {
    id: 5,
    title: 'Spicy seasoned seafood noodles',
    price: 2.29,
    count: 20,
    src: '/Instant.svg',
  },
  {
    id: 6,
    title: 'Salted Pasta with mushroom sauce',
    price: 2.69,
    count: 11,
    src: '/Instant.svg',
  },
  {
    id: 7,
    title: 'Spicy seasoned seafood noodles',
    price: 2.29,
    count: 20,
    src: '/Instant.svg',
  },
  {
    id: 8,
    title: 'Salted Pasta with mushroom sauce',
    price: 2.69,
    count: 11,
    src: '/Instant.svg',
  },
  {
    id: 9,
    title: 'Spicy seasoned seafood noodles',
    price: 2.29,
    count: 20,
    src: '/Instant.svg',
  },
  {
    id: 10,
    title: 'Salted Pasta with mushroom sauce',
    price: 2.69,
    count: 11,
    src: '/Instant.svg',
  },
  {
    id: 11,
    title: 'Spicy seasoned seafood noodles',
    price: 2.29,
    count: 20,
    src: '/Instant.svg',
  },
  {
    id: 12,
    title: 'Salted Pasta with mushroom sauce',
    price: 2.69,
    count: 11,
    src: '/Instant.svg',
  },
];

const ProductsPage = () => {
  const { isOpenDetails, onToggleOpenDetails } = useSidebarOrders();

  const [data, setData] = useState(() => Array.from({ length: 1200 }, faker.commerce.product));

  return (
    <SPage>
      <Navigate />
      <FilterOrdersList />
      <SList>
        {items.map((product) => (
          <ProductListDetails key={product.id} {...product} />
        ))}
      </SList>
    </SPage>
  );
};

export default ProductsPage;
