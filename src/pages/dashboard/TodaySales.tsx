import React, { FC } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  useTheme,
  colors,
  CardProps,
} from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import Chart from './Chart';

const useStyles = makeStyles()((theme: any) => ({
  root: {
    backgroundColor: '#ffffff !important',
  },
}));

type IParams = CardProps & {
  className?: string;
};

const TodaySales: FC = ({ className, ...rest }: IParams) => {
  const { classes, cx } = useStyles();
  const theme = useTheme();

  const data = {

  }

  return (
    <Card className={cx(classes.root, className)} {...rest}>
    <CardHeader
      action={
        <Button endIcon={<ArrowDropDownIcon />} size="small" variant="text">
          Last 7 days
        </Button>
      }
      title="Latest Sales"
    />
    <Divider />
    <CardContent>
      <Box height={400} position="relative">
        <Chart />
      </Box>
    </CardContent>
    <Divider />
    <Box display="flex" justifyContent="flex-end" p={2}>
      <Button
        color="primary"
        endIcon={<ArrowRightIcon />}
        size="small"
        variant="text"
      >
        Overview
      </Button>
    </Box>
  </Card>
  );
}

export default TodaySales