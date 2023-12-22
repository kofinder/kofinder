import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import * as serviceWorker from './serviceWorker';

import 'font-awesome/css/font-awesome.css';
import 'flexboxgrid/css/flexboxgrid.css';
import store from '@reduxs/store';

const modalRoot = document.getElementById('root');
const root = ReactDOM.createRoot(modalRoot as HTMLElement);
root.render(
  <Provider store={store}>
    <BrowserRouter basename={import.meta.env.DEV ? '/' : '/theinlwin/'}>
      <App />
    </BrowserRouter>
  </Provider>
);

serviceWorker.unregister();
