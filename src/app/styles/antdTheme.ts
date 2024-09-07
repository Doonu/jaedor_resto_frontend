import { ThemeConfig } from 'antd/es/config-provider/context';

import { scConfig } from './theme';

export const antdTheme: ThemeConfig = {
  token: {
    fontFamily: 'Roboto',
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
  },
};
