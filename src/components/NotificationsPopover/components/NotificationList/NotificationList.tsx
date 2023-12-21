import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

import clsx from 'clsx';
import { formatDistanceToNow } from 'date-fns';
import ptbr from 'date-fns/locale/pt-BR';

import { INotification } from '@components/NotificationsPopover/data';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CodeIcon from '@mui/icons-material/Code';
import PaymentIcon from '@mui/icons-material/Payment';
import PeopleIcon from '@mui/icons-material/PeopleOutlined';
import StoreIcon from '@mui/icons-material/Store';
import {
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  ListProps,
} from '@mui/material';

import useStyles from './styles';

type IParams = ListProps & {
  notifications: INotification[];
  className?: string;
};

function NotificationList(props: IParams) {
  const { notifications, className, ...rest } = props;

const { classes,cx } = useStyles();

  const avatars: {
    [key: string]: JSX.Element;
  } = {
    order: (
      <Avatar className={classes.avatarBlue}>
        <PaymentIcon />
      </Avatar>
    ),
    user: (
      <Avatar className={classes.avatarOrange}>
        <PeopleIcon />
      </Avatar>
    ),
    project: (
      <Avatar className={classes.avatarGreen}>
        <StoreIcon />
      </Avatar>
    ),
    feature: (
      <Avatar className={classes.avatarIndigo}>
        <CodeIcon />
      </Avatar>
    ),
  };

  return (
    <List {...rest} className={cx(classes.root, className)} disablePadding>
      {notifications.map((notification, i) => (
        <ListItem
          className={classes.listItem}
          component={RouterLink}
          divider={i < notifications.length - 1}
          key={notification.id}
          to="#"
        >
          <ListItemAvatar>
            {avatars[notification.type] || avatars.feature}
          </ListItemAvatar>
          <ListItemText
            primary={notification.title}
            primaryTypographyProps={{ variant: 'body1' }}
            secondary={formatDistanceToNow(notification.created_at, {
              locale: ptbr,
            })}
          />
          <ArrowForwardIcon className={classes.arrowForwardIcon} />
        </ListItem>
      ))}
    </List>
  );
}

export default NotificationList;
