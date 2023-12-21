import { 
  useDispatch, 
  useSelector,
  TypedUseSelectorHook, 
} from 'react-redux';
import thunk from 'redux-thunk';

import { api, fileApi } from '@services/api';
import { combineReducers, configureStore } from '@reduxjs/toolkit';

import alertReducer from '@reduxs/alertSlice';
const rootReducer = combineReducers({
  [api.reducerPath]: api.reducer,
  [fileApi.reducerPath]: fileApi.reducer,

  alert: alertReducer,
});

const rootMiddler = [ thunk, api.middleware, fileApi.middleware ]

const store = configureStore({
  reducer: rootReducer,
  middleware: rootMiddler,
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
