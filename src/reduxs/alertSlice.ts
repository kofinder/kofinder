import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '@reduxs/store';
import { AlertColor } from '@mui/material';

interface AlertMessage {
    show: boolean
    color: AlertColor
    title: string
    body: string
}

const initialState: AlertMessage = {
    show: false,
    color: 'info',
    title: '',
    body: ''
};

export const alertSlice = createSlice({
  initialState,
  name: 'alertSlice',
  reducers: {
    
    onAlertClose: () => initialState,

    onAlertOpen: (state, action: PayloadAction<AlertMessage>) => {
      state.show = action.payload.show;
      state.color = action.payload.color;
      state.title = action.payload.title;
      state.body = action.payload.body;
    }
    
  },
});

export const { onAlertClose, onAlertOpen } = alertSlice.actions;

export const selectMessage = (state: RootState) => state.alert;

export default alertSlice.reducer;
