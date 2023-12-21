import React from 'react';

import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import {
  Avatar,
  Card,
  CardContent,
  Grid,
  Typography,
  colors,
  CardProps,
} from '@mui/material';
import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme: any) => ({
  root: {
    backgroundColor: '#ffffff !important',
    height: '100%',
  },
  avatar: {
    backgroundColor: '#3949ab !important',
    height: 56,
    width: 56,
  },
}));

type IParams = CardProps & {
  className?: string;
};

function TotalProfit({ className, ...rest }: IParams) {
  const { classes, cx } = useStyles();

  return (
    <Card className={cx(classes.root, className)} {...rest}>
      <CardContent>
        <Grid container spacing={3}>
          <Grid item xs={9}>
            <Typography color="textSecondary" gutterBottom variant="h6">
              TOTAL PROFIT
            </Typography>
            <Typography color="textPrimary" variant="h3">
              $23,200
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <Avatar className={classes.avatar}>
              <AttachMoneyIcon />
            </Avatar>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default TotalProfit;
