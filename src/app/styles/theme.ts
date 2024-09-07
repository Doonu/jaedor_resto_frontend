import { breakpoints } from '@shared/constants';
import { DefaultTheme } from 'styled-components';

const colors: DefaultTheme['colors'] = {
  brandOrange: {
    orange50: '#FFF5EB',
    orange100: '#FFD8C2',
    orange200: '#FFAC82',
    orange300: '#EA7C69',
    primary: '#FF5533', // The highlight button and icon color
    orange500: '#E04029',
    orange600: '#C0321F',
    orange700: '#A02818',
    orange800: '#802011',
    orange900: '#60190C',
  },
  base: {
    base0: '#FFFFFF',
    base50: '#F4F4F5',
    base100: '#E0E0E2',
    base200: '#C4C5C8',
    base300: '#9B9DA3',
    base400: '#75767D',
    base500: '#5E6068',
    base600: '#4E505A',
    base700: '#393C49',
    base800: '#2F313D',
    primary: '#252836',
    base950: '#1F1D2B',
    base1000: '#111118',
  },
  redErrors: {
    redErrors50: '#FFECEB',
    redErrors100: '#FFC8C4',
    redErrors200: '#FFA399',
    redErrors300: '#FF7B6E',
    redErrors400: '#FF5647',
    redErrors500: '#FF3429',
    redErrors600: '#E02A22',
    primary: '#C41F19',
    redErrors800: '#A81A13',
    redErrors900: '#8C150E',
  },
};

const core: DefaultTheme['core'] = {
  primaryBackground: colors.base.primary,
  secondaryBackground: colors.base.base950,
  surface: colors.base.base700,
  colorTextPrimary: colors.base.base0,
  active: colors.brandOrange.primary,
};

export const scConfig: DefaultTheme = {
  colors,
  core,
  button: {
    background: colors.brandOrange.orange300,
    color: core.colorTextPrimary,
  },
  borderRadius: {
    roundedNon: '0px',
    roundedXS: '4px',
    roundedS: '8px',
    roundedM: '12px',
    roundedL: '16px',
    roundedXL: '20px',
    roundedFull: '99%',
  },
  shadow: {
    base: '0px 0px 12px 0px rgba(14, 53, 42, .1)',
    active: '0px 0px 20px 0px rgba(14, 53, 42, .2)',
  },
  breakpoints: {
    maxMobile: `${breakpoints.maxMobile}px`,
    maxTablets: `${breakpoints.maxTablets}px`,
    maxLaptops: `${breakpoints.maxLaptops}px`,
    maxOldDesktops: `${breakpoints.maxOldDesktops}px`,
    maxDesktops: `${breakpoints.maxDesktops}px`,
  },
};
