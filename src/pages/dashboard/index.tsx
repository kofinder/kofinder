import React from 'react';

import Page from '@components/Page';
import { Container, Grid } from '@mui/material';
import { makeStyles } from 'tss-react/mui';

import Budget from './Budget';
import TasksProgress from './TasksProgress';
import TotalCustomers from './TotalCustomers';
import TodaySales from './TodaySales';

const useStyles = makeStyles()((theme: any) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3),
  },
}));

function Dashboard() {
  const { classes } = useStyles();

  return (
    <Page className={classes.root} title="Dashboard">
      <Container maxWidth={false}>
        <Grid container spacing={3}>
          <Grid item lg={3} sm={6} xl={3} xs={12}>
            <Budget />
          </Grid>
          <Grid item lg={3} sm={6} xl={3} xs={12}>
            <TotalCustomers />
          </Grid>
          <Grid item lg={3} sm={6} xl={3} xs={12}>
            <TasksProgress />
          </Grid>
          <Grid item lg={8} md={12} xl={9} xs={12}>
            <TodaySales />
          </Grid>
          </Grid>  
      </Container>
    </Page>
  );
}

export default Dashboard;
