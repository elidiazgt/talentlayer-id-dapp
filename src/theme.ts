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
  light: '#FEAA5C',
  main: '#FF8802',
  dark: '#DA6D21',
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
  text: { primary: '#1C1616', secondary: '#B5B5C8' },
  background: {
    paper: '#FFFFFF',
    default: '#F9F9FC',
    frosted: 'rgba(255, 255, 255, 0.18)',
  },
};

const theme = createTheme({
  palette,
  typography: { fontFamily },
});

export default theme;
