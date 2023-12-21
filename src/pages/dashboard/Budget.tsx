import React from 'react';

import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import MoneyIcon from '@mui/icons-material/Money';
import {
  Avatar,
  Box,
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
    height: '100%',
    backgroundColor: '#ffffff !important',
  },
  avatar: {
    backgroundColor: '#e53935 !important',
    height: 56,
    width: 56,
  },
  differenceIcon: {
    color: colors.red[900],
  },
  differenceValue: {
    color: colors.red[900],
    marginRight: theme.spacing(1),
  },
}));

type IParams = CardProps & {
  className?: string;
};

function Budget({ className, ...rest }: IParams) {
  const { classes, cx } = useStyles();

  return (
    <Card className={cx(classes.root, className)} {...rest}>
      <CardContent>
        <Grid container spacing={3}>
          <Grid item xs={9}>
            <Typography color="textSecondary" gutterBottom variant="h6">
              BUDGET
            </Typography>
            <Typography color="textPrimary" variant="h3">
              $24,000
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <Avatar className={classes.avatar}>
              <MoneyIcon />
            </Avatar>
          </Grid>
        </Grid>
        <Box mt={2} display="flex" alignItems="center">
          <ArrowDownwardIcon className={classes.differenceIcon} />
          <Typography className={classes.differenceValue} variant="body2">
            12%
          </Typography>
          <Typography color="textSecondary" variant="caption">
            Since last month
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}

export default Budget;
