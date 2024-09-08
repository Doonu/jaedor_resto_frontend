import { ThemeConfig } from 'antd/es/config-provider/context';

import { scConfig } from './theme';

import '@fontsource/barlow';

export const antdTheme: ThemeConfig = {
  token: {
    fontFamily: 'Barlow',
    colorPrimary: scConfig.core.colorTextPrimary,
    colorBgLayout: 'red',
  },
  components: {
    Layout: {
      siderBg: scConfig.core.primaryBackground,
    },
    Menu: {
      itemBg: scConfig.core.secondaryBackground,
      itemSelectedBg: scConfig.core.primaryBackground,
      itemActiveBg: scConfig.core.surface,
      controlHeightLG: 104,
    },
    Input: {
      colorBgContainer: scConfig.input.background,
      activeBg: scConfig.input.background,
      hoverBg: scConfig.input.backgroundHover,
      colorBorder: scConfig.input.borderColor,
      colorTextPlaceholder: scConfig.input.colorTextPlaceholder,
      colorText: scConfig.input.colorTextPrimary,
      controlHeight: 48,
    },
    Tabs: {
      itemSelectedColor: scConfig.tabs.colorActive,
      colorText: scConfig.tabs.colorTextPrimary,
      inkBarColor: scConfig.tabs.colorActive,
      colorBorderSecondary: scConfig.tabs.colorBorderSecondary,
      fontSize: 16,
      horizontalItemPadding: '0 0 16px 0',
    },
    Select: {
      colorBgContainer: scConfig.select.background,
      colorBgElevated: scConfig.select.background,
      optionSelectedColor: scConfig.select.colorTextPrimary,
      optionSelectedBg: scConfig.select.optionSelectedBg,
      colorText: scConfig.select.colorTextPrimary,
      colorTextPlaceholder: scConfig.select.colorTextPrimary,
      controlHeight: 48,
      colorBorder: 'transparent',
      colorPrimaryHover: 'transparent',
      controlOutline: 'transparent',
    },
  },
};
