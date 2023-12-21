import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme: any) => ({
  buttonProgress: {
    position: 'absolute',
  },
  error_contained: {
    backgroundColor: theme.palette.error.main,
    color: theme.palette.background.default,
    '&:hover': {
      background: theme.palette.error.dark,
    },
  },
  success_contained: {
    backgroundColor: theme.palette.success.main,
    color: theme.palette.background.default,
    '&:hover': {
      background: theme.palette.success.dark,
    },
  },
  error_text: {
    color: theme.palette.error.main,
  },
  success_text: {
    color: theme.palette.success.main,
  },
  default: {},
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default useStyles;
