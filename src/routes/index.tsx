import React from 'react';
import { RouteObject } from 'react-router';
import Dashboard from '@pages/dashboard';
import NotFound from '@pages/errors/NotFound';
import MainLayout from '@layouts/index';

const routes: RouteObject[] = [
  {
    path: '',
    element: <MainLayout />,
    children: [
      { path: '', element: <Dashboard /> },
      { path: 'errors/404', element: <NotFound /> },
    ],
  }
];

export default routes;
