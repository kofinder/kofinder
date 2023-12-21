import React from 'react';

import { Alert, AlertColor, AlertTitle, Snackbar, Typography } from '@mui/material';
import { onAlertOpen } from '@reduxs/alertSlice';
import { useDispatch } from 'react-redux';
import theme from '@styles/theme';

type IParams = {
  color: AlertColor;
  title: string;
  body: string;
  open: boolean;
};
  
const MyAlert: React.FC<IParams> = ({ open, color, title, body }) => {
  const dispatch = useDispatch()
  return (
    <Snackbar
      open={open}
      autoHideDuration={6000}
      onClose={() => dispatch(onAlertOpen({ show: false, color: 'success', title: '', body: '' }))}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      sx={{ minWidth: 200, marginTop: 8, borderColor: `${color}.main` }}
    >
      <Alert onClose={() => dispatch(onAlertOpen({ show: false, color: 'success', title: '', body: '' }))} severity={color} sx={{ width: '100%' }}>
      <Typography variant='body1'> 
        {body}
      </Typography>
      </Alert>
    </Snackbar>
  );
}

export default MyAlert;

  