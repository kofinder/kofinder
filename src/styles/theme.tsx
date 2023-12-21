import { createTheme, responsiveFontSizes } from '@mui/material';

import palette from './palette';
import shadows from './shadows';
import typography from './typography';

const theme = createTheme({
  palette,
  shadows,
  typography,
  components: {
    MuiTableCell: {
      styleOverrides: {
        root: {
          fontSize: '14px',
          letterSpacing: '-0.05px',
          lineHeight: '21px',
        },
      },
    },
  },
});

export default responsiveFontSizes(theme);
