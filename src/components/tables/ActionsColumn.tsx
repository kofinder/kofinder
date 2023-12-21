import React from 'react';
import {
  Edit as EditIcon,
  Trash2 as TrashIcon,
  ArrowRight as ArrowRightIcon,
  Eye as EyeIcon,
} from 'react-feather';

import { IconButton } from '@mui/material';
import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme: any) => ({
  danger: {
    color: theme.palette.error.light,
  },
}));

type IParams = {
  onTashPress?: () => void;
  onEditPress?: () => any;
  onArrowPress?: () => void;
  onEyePress?: () => void;
};

const ActionsColumn: React.FC<IParams> = (props) => {
  const { onTashPress, onEditPress, onArrowPress, onEyePress } = props;
  const { classes } = useStyles();
  return <>
    {onEyePress && (
      <IconButton onClick={onEyePress} size="large">
        <EyeIcon size={18} />
      </IconButton>
    )}
    {onEditPress && (
      <IconButton color="default" onClick={onEditPress} size="large">
        <EditIcon size={18} />
      </IconButton>
    )}
    {onTashPress && (
      <IconButton
        color="error"
        className={classes.danger}
        onClick={onTashPress}
        size="large">
        <TrashIcon size={18} />
      </IconButton>
    )}
    {onArrowPress && (
      <IconButton onClick={onArrowPress} size="large">
        <ArrowRightIcon size={18} />
      </IconButton>
    )}
  </>;
};

export default ActionsColumn;
