const palette = {
  verde: '#24A19C',
  white: '#ffffff',
  black: '#0C2322',
  'gray-2': '#EDEDED',
  'gray-1': '#99A7A6',
  gray: '#667372',
  pink: '#D96098',
  blue: '#0057ff',
  red:'#930909',
};

const base = 16;
export const paddingApp = 24;
export const marginApp = 24;
export const heightRibbon = 64;
export const heightTab = 64;

const INTER_REGULAR = 'Inter-Regular';
const INTER_MEDIUM = 'Inter-Medium';
const INTER_BOLD = 'Inter-Bold';

export const theme = {
  colors: {
    primary: palette.verde,
    secondary: palette.white,
    danger: palette.red,
    gray: palette['gray-1'],
    text: palette.gray,
    darkText: palette.black,
    badge: palette.pink,
    // inputs
    textInput: palette.black,
    placeholder: palette['gray-1'],
    // Link
    link: palette.blue,
    // Button
    btnGray: palette['gray-2'],
  },
  fontFamily: {
    title: INTER_BOLD,
    semiBold: INTER_MEDIUM,
    text: INTER_REGULAR,
    textBtn: INTER_MEDIUM,
  },
  fontSize: {
    xxs: base * 0.625, // 10
    xs: base * 0.75, // 12
    sm: base * 0.875, // 14
    base: base * 1, // 16
    lg: base * 1.125, // 18
    xl: base * 1.25, // 20
    '2xl': base * 1.5, // 24
    '3xl': base * 1.875, // 30,
    '4xl': base * 2.25, // 36
    '5xl': base * 3, // 48
    '6xl': base * 3.75, // 60
  },
  spacing: {
    marginApp:marginApp,
    paddingApp:paddingApp,
  },
};
