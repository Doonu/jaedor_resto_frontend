import { IProduct } from '@entities/products';
import React, { FC } from 'react';

import {
  SIcon,
  STitle,
  SIconContainer,
  SContent,
  SPrice,
  SCount,
  SProductCard,
} from './productCard.styles';

export const ProductCard: FC<IProduct> = (product) => (
  <SProductCard>
    <SIconContainer>
      <SIcon src={product.src} alt="" />
    </SIconContainer>
    <SContent>
      <STitle>{product.title}</STitle>
      <SPrice>${product.price}</SPrice>
      <SCount> {product.count} Bowls available</SCount>
    </SContent>
  </SProductCard>
);
