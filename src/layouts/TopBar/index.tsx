import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

import clsx from 'clsx';

import { Logo } from '@assets/svgs';
import { AppBar, Toolbar, AppBarProps } from '@mui/material';

import useStyles from './styles';

type IParams = AppBarProps & {
  className?: string;
};

function TopBar({ className, ...rest }: IParams) {
  const {classes, cx} = useStyles();

  return (
    <AppBar className={cx(classes.root, className)} elevation={0} {...rest}>
      <Toolbar className={classes.toolbar}>
        <RouterLink to="/">
          <Logo />
        </RouterLink>
      </Toolbar>
    </AppBar>
  );
}

export default TopBar;
