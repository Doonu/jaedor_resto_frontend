import { IProduct } from '@entities/products';
import React, { FC } from 'react';

import {
  SIcon,
  STitle,
  SIconContainer,
  SContent,
  SPrice,
  SCount,
  SProductListDetails,
} from './productListDetails.styles';

export const ProductListDetails: FC<IProduct> = (product) => (
  <SProductListDetails>
    <SIconContainer>
      <SIcon src={product.src} alt="" />
    </SIconContainer>
    <SContent>
      <STitle>{product.title}</STitle>
      <SPrice>${product.price}</SPrice>
      <SCount> {product.count} Bowls available</SCount>
    </SContent>
  </SProductListDetails>
);
