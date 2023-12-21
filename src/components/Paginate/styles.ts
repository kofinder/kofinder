import { colors } from '@mui/material';
import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles<void, 'activeLink'>()((theme: any, _params, classes) => ({
  root: {
    ...theme.typography.button,
    listStyle: 'none',
    userSelect: 'none',
    display: 'flex',
    alignItems: 'center',
  },
  active: {},
  activeLink: {
  },
  break: {},
  breakLink: {},
  disabled: {},
  next: {
    marginLeft: theme.spacing(1),
  },
  nextLink: {
    padding: '6px 16px',
    outline: 'none',
    cursor: 'pointer',
    borderRadius: 4,
    '&:hover': {
      backgroundColor: colors.blueGrey[50],
    },
  },
  page: {},
  pageLink: {
    color: theme.palette.text.secondary,
    padding: theme.spacing(1),
    outline: 'none',
    cursor: 'pointer',
    width: 40,
    height: 40,
    borderRadius: '50%',
    display: 'block',
    textAlign: 'center',
    '&:hover': {
      backgroundColor: colors.blueGrey[50],
      color: theme.palette.text.primary,
    },
    [`&.${classes.activeLink}`]: {
      backgroundColor: colors.green[500],
      color: '#ffffff !important'
    },
  },
  previous: {
    marginRight: theme.spacing(1),
  },
  previousLink: {
    padding: '6px 16px',
    outline: 'none',
    cursor: 'pointer',
    borderRadius: 4,
    '&:hover': {
      backgroundColor: colors.blueGrey[50],
    },
  },
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default useStyles;
