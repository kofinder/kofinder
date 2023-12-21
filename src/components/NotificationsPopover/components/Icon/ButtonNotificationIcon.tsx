import React, { forwardRef } from 'react';

import NotificationsIcon from '@mui/icons-material/NotificationsOutlined';
import {
  Badge,
  IconButton,
  Tooltip,
  IconButtonProps,
  colors,
} from '@mui/material';
import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()(() => ({
  notificationsBadge: {
    backgroundColor: colors.orange[600],
  },
}));

type IParams = IconButtonProps & {
  badgeContent: number;
};

const ButtonNotificationIcon = forwardRef<any, IParams>((props, ref) => {
  const { badgeContent, ...restButtonIconProps } = props;
  const { classes } = useStyles();

  return (
    <Tooltip title="Notificações" aria-label="notificações" arrow>
      <IconButton color="inherit" {...restButtonIconProps} ref={ref} size="large">
        <Badge
          badgeContent={badgeContent}
          classes={{ badge: classes.notificationsBadge }}
          variant="dot"
        >
          <NotificationsIcon />
        </Badge>
      </IconButton>
    </Tooltip>
  );
});

export default ButtonNotificationIcon;
