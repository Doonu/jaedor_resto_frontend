import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      brandOrange: {
        orange50: string;
        orange100: string;
        orange200: string;
        orange300: string;
        primary: string;
        orange500: string;
        orange600: string;
        orange700: string;
        orange800: string;
        orange900: string;
      };
      base: {
        base0: string;
        base50: string;
        base100: string;
        base200: string;
        base300: string;
        base400: string;
        base500: string;
        base600: string;
        base700: string;
        base800: string;
        primary: string;
        base950: string;
        base1000: string;
      };
      redErrors: {
        redErrors50: string;
        redErrors100: string;
        redErrors200: string;
        redErrors300: string;
        redErrors400: string;
        redErrors500: string;
        redErrors600: string;
        primary: string;
        redErrors800: string;
        redErrors900: string;
      };
    };
    core: {
      primaryBackground: string;
      secondaryBackground: string;
      surface: string;
      colorTextPrimary: string;
      active: string;
      colorTextSecondary: string;
    };
    input: {
      background: string;
      backgroundHover: string;
      borderColor: string;
      colorTextPlaceholder: string;
      colorTextPrimary: string;
    };
    button: {
      background: string;
      color: string;
    };
    select: {
      background: string;
      secondaryBackground: string;
      colorTextPrimary: string;
      optionSelectedBg: string;
    };
    tabs: {
      colorActive: string;
      colorTextPrimary: string;
      colorBorderSecondary: string;
    };
    borderRadius: {
      roundedNon: string;
      roundedXS: string;
      roundedS: string;
      roundedM: string;
      roundedL: string;
      roundedXL: string;
      roundedFull: string;
    };
    shadow: {
      base: string;
      active: string;
    };
    breakpoints: {
      maxMobile: string;
      maxTablets: string;
      maxLaptops: string;
      maxOldDesktops: string;
      maxDesktops: string;
    };
  }
}
