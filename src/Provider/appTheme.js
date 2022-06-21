import { createMuiTheme } from '@material-ui/core';

export const appTheme = createMuiTheme({
  palette: {},
  typography: {
    headline: {
      fontSize: '1rem',
    },
    subtitle1: {
      fontSize: '0.8125rem',
    },
    button: {
      fontWeight: 400,
      textTransform: 'initial',
    },
    body1: {
      fontSize: '0.875rem',
    },
  },
  shape: {
    borderRadius: 4,
  },
});