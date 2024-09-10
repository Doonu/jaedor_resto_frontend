import styled from 'styled-components';

export const SOrderBasket = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const STitle = styled.div`
  font-size: 20px;
  font-weight: 500;
  color: ${({ theme }) => theme.core.colorTextPrimary};
`;

export const SHeadTitle = styled.div`
  display: grid;
  grid-template-columns: 1fr 50px 50px;
  font-size: 16px;
  color: ${({ theme }) => theme.core.colorTextPrimary};
`;

export const SPrice = styled.div`
  text-align: end;
`;

export const SBasket = styled.div`
  display: grid;
  gap: 24px;
  max-height: 550px;

  padding: 28px 0;
  border-top: 1px solid ${({ theme }) => theme.core.primaryBackground};
  border-bottom: 1px solid ${({ theme }) => theme.core.primaryBackground};

  overflow-y: scroll;
  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;
