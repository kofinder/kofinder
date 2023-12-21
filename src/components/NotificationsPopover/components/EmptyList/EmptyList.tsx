import React from 'react';

import emptyImg from '@assets/svgs/undraw_empty.svg';
import { Typography } from '@mui/material';
import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme: any) => ({
  root: {
    textAlign: 'center',
    padding: theme.spacing(3),
  },
  image: {
    height: 240,
    backgroundImage: `url("${emptyImg}")`,
    backgroundPositionX: 'right',
    backgroundPositionY: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    marginBottom: theme.spacing(1),
  },
}));

function EmptyList(props: IDivParams) {
  const { className, ...rest } = props;

  const { classes, cx } = useStyles();

  return (
    <div {...rest} className={cx(classes.root, className)}>
      <div className={classes.image} />
      <Typography variant="h4">Não há nada por aqui...</Typography>
    </div>
  );
}

export default EmptyList;
