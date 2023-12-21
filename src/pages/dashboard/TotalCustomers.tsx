import React from 'react';

import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import PeopleIcon from '@mui/icons-material/PeopleOutlined';
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
    backgroundColor: '#ffffff !important',
    height: '100%',
  },
  avatar: {
    backgroundColor: '#43a047 !important',
    height: 56,
    width: 56,
  },
  differenceIcon: {
    color: colors.green[900],
  },
  differenceValue: {
    color: colors.green[900],
    marginRight: theme.spacing(1),
  },
}));

type IParams = CardProps & {
  className?: string;
};

function TotalCustomers({ className, ...rest }: IParams) {
  const { classes, cx } = useStyles();

  return (
    <Card className={cx(classes.root, className)} {...rest}>
      <CardContent>
        <Grid container spacing={3}>
          <Grid item xs={9}>
            <Typography color="textSecondary" gutterBottom variant="h6">
              TOTAL CUSTOMERS
            </Typography>
            <Typography color="textPrimary" variant="h3">
              1,600
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <Avatar className={classes.avatar}>
              <PeopleIcon />
            </Avatar>
          </Grid>
        </Grid>
        <Box mt={2} display="flex" alignItems="center">
          <ArrowUpwardIcon className={classes.differenceIcon} />
          <Typography className={classes.differenceValue} variant="body2">
            16%
          </Typography>
          <Typography color="textSecondary" variant="caption">
            Since last month
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}

export default TotalCustomers;
