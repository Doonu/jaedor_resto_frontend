import { Layout, Menu } from 'antd';
import styled from 'styled-components';

export const SSidebar = styled(Layout.Sider).attrs(() => ({
  width: '100px',
}))`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const SMenu = styled(Menu)`
  border-right: none;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const SMenuItem = styled(Menu.Item)`
  &.ant-menu-item {
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    &.ant-menu-item-selected {
      position: relative;
      margin-left: 10px;
      border-radius: 20px 0 0 20px;

      & div {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 54px;
        width: 54px;
        border-radius: ${({ theme }) => theme.borderRadius.roundedS};
        background-color: ${({ theme }) => theme.core.active};
        box-shadow:
          0 15px 30px rgba(0, 0, 0, 0.2),
          0 0 15px rgba(255, 85, 51, 0.6);
      }

      & svg {
        fill: white;
      }
    }
  }
`;
