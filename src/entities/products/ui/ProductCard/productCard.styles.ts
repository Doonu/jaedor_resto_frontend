import styled from 'styled-components';

export const SProductCard = styled.div`
  height: 225px;
  background: ${({ theme }) => theme.core.surface};
  border-radius: 16px;
  position: relative;
  width: 100%;
  padding: 0 24px 12px 24px;
`;

export const SIconContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: -50px;
`;

export const SIcon = styled.img`
  margin: 0 auto;
`;

export const SContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;
`;

export const STitle = styled.div`
  text-align: center;
  color: ${({ theme }) => theme.core.colorTextPrimary};
  font-size: 16px;
  margin-top: 16px;
`;

export const SPrice = styled.div`
  font-size: 14px;
  text-align: center;
  color: ${({ theme }) => theme.core.colorTextPrimary};
`;

export const SCount = styled.div`
  text-align: center;
  color: ${({ theme }) => theme.core.colorTextSecondary};
  font-size: 16px;
`;
