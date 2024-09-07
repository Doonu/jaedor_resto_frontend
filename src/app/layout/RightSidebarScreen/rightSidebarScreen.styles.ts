import { Layout } from 'antd';
import styled from 'styled-components';

interface SSidebarProps {
  $isOpen: boolean;
}

interface SRetractableSidebarProps extends SSidebarProps {
  $widthRetractable: number;
}

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

export const SRetractableSidebar = styled.div<SRetractableSidebarProps>`
  position: fixed;
  top: 0;
  right: ${({ $isOpen }) => ($isOpen ? '400px' : '0')};
  height: 100vh;
  min-width: ${({ $widthRetractable }) => `${$widthRetractable}px !important`};
  z-index: 2;
  transition: right 0.3s ease;
  background: ${({ theme }) => theme.core.secondaryBackground};
  border-right: 1px solid ${({ theme }) => theme.core.surface};
  padding: 24px;
  border-radius: 16px 0 0 16px;
`;

export const SBlurBackground = styled.div<SSidebarProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: ${({ $isOpen }) => ($isOpen ? '1' : '-1')};
  background-color: ${({ $isOpen }) => ($isOpen ? 'rgba(0, 0, 0, 0.5)' : 'transparent')};
  transition:
    backdrop-filter 0.3s ease,
    background-color 0.3s ease;
`;

export const SRightSidebar = styled(Layout.Sider)`
  z-index: 3;

  &.ant-layout-sider {
    background: ${({ theme }) => theme.core.secondaryBackground};
    padding: 24px;
  }
`;
