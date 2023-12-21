import React from 'react';

import InsertChartIcon from '@mui/icons-material/InsertChartOutlined';
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Grid,
  LinearProgress,
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
    backgroundColor: '#fb8c00 !important',
    height: 56,
    width: 56,
  },
}));

type IParams = CardProps & {
  className?: string;
};

function TasksProgress({ className, ...rest }: IParams) {
  const { classes, cx } = useStyles();

  return (
    <Card className={cx(classes.root, className)} {...rest}>
      <CardContent>
        <Grid container spacing={3}>
          <Grid item xs={9}>
            <Typography color="textSecondary" gutterBottom variant="h6">
              TASKS PROGRESS
            </Typography>
            <Typography color="textPrimary" variant="h3">
              75.5%
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <Avatar className={classes.avatar}>
              <InsertChartIcon />
            </Avatar>
          </Grid>
        </Grid>
        <Box mt={3}>
          <LinearProgress value={75.5} variant="determinate" />
        </Box>
      </CardContent>
    </Card>
  );
}

export default TasksProgress;
