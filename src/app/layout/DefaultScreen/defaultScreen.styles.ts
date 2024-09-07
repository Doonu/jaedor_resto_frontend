import { Layout } from 'antd';
import styled from 'styled-components';

export const SLayout = styled(Layout)`
  min-height: 100vh;
  width: 100%;
  background-color: ${({ theme }) => theme.core.primaryBackground};
`;

export const SWrapper = styled.div`
  display: grid;
  justify-items: center;
  height: 100%;
  padding: 16px;
  background-color: inherit;
  width: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoints.maxTablets}) {
    padding: 10px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.maxMobile}) {
    padding: 0;
  }
`;

export const SContent = styled(Layout.Content)`
  padding: 24px;
`;

export const SContainer = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  height: 100%;
  border-radius: 16px;
  overflow: hidden;
`;
