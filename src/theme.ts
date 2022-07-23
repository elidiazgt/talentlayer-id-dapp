import { createTheme } from '@mui/material/styles';

export const fontFamily = [
  '-apple-system',
  'BlinkMacSystemFont',
  '"Segoe UI"',
  'Roboto',
  '"Helvetica Neue"',
  'Arial',
  'sans-serif',
  '"Apple Color Emoji"',
  '"Segoe UI Emoji"',
  '"Segoe UI Symbol"',
].join(',');

const PRIMARY = {
  light: '#7ab720',
  main: '#7ab720',
  dark: '#7ab720',
  contrastText: '#FFFFFF',
};

const ERROR = {
  main: '#FF023F',
  faded: '#FFE6EC',
};

const SUCCESS = {
  main: '#3EB672',
  faded: '#EEF8F2',
};

const WARNING = {
  main: '#FF8802',
  faded: '#FFF3E6',
};

const INFO = {
  main: '#16ABFA',
  faded: '#E8F7FF',
};

const palette = {
  common: { black: '#000', white: '#fff', grey: '#F5F5FA' },
  primary: { ...PRIMARY },
  error: { ...ERROR },
  success: { ...SUCCESS },
  warning: { ...WARNING },
  info: { ...INFO },
  // text: { primary: '#1C1616', secondary: '#B5B5C8' },
  background: {
    paper: '#262626',
    default: '#000',
    frosted: 'rgba(255, 255, 255, 0.18)',
  },
};

const theme = createTheme({
  palette: {
    ...palette,
    mode: 'dark',
  },
  typography: { fontFamily },
});

export default theme;
