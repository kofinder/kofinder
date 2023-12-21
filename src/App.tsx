import React from 'react';
import { useRoutes } from 'react-router-dom';

import { ThemeProvider, StyledEngineProvider } from '@mui/material';
import 'react-perfect-scrollbar/dist/css/styles.css';
import { GlobalStyles } from "@mui/material";
import globalStyle from '@styles/globalstyles';
import theme from '@styles/theme';

import AppProvider from './contexts';
import routes from './routes/index';

export default function App() {
  const routing = useRoutes(routes);
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <AppProvider>
          <GlobalStyles styles={globalStyle}/>
          {routing}
        </AppProvider>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}
