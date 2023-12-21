import React from 'react';

import { AuthProvider } from './auth';

function AppProvider({ children }: any) {
  return <AuthProvider>{children}</AuthProvider>;
}

export default AppProvider;
