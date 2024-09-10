import { th } from '@faker-js/faker';
import { Delete } from '@shared/assets';
import { Button, Typography } from 'antd';
import React from 'react';
import styled from 'styled-components';

export const SOrderCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  box-sizing: border-box;
`;

export const SHead = styled.div`
  display: grid;
  grid-template-columns: 230px 1fr 1fr;
  column-gap: 15px;
`;

export const SCard = styled.div`
  display: grid;
  grid-template-columns: 50px 170px;
  column-gap: 15px;
`;

export const SImg = styled.img`
  width: 50px;
  height: 50px;
`;

export const SInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SPrice = styled.div`
  justify-items: flex-start;
  color: ${({ theme }) => theme.core.colorTextSecondary};
  font-size: 16px;
`;

export const STitle = styled(Typography.Text).attrs({
  ellipsis: true,
})`
  color: ${({ theme }) => theme.core.colorTextPrimary};
  width: 150px;
  font-size: 16px;
`;

export const Qty = styled.div`
  width: 50px;
  height: 50px;
  display: grid;
  align-items: center;
  justify-items: center;
  background: ${({ theme }) => theme.core.surface};
  border-radius: 12px;
  color: ${({ theme }) => theme.core.colorTextPrimary};
  border: 1px solid ${({ theme }) => theme.core.colorTextSecondary};
`;

export const STotalPrice = styled.div`
  display: grid;
  align-items: center;
  justify-items: center;
  color: ${({ theme }) => theme.core.colorTextPrimary};
  font-size: 16px;
`;

export const SButton = styled(Button).attrs({ icon: <Delete /> })`
  width: 48px;
`;

export const SFooter = styled.div`
  display: grid;
  grid-template-columns: 293px 1fr;
  column-gap: 10px;
`;
