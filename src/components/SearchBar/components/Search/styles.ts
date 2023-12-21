import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme: any) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
  },
  form: {
    display: 'flex',
    alignItems: 'center',
  },
  search: {
    flexGrow: 1,
    height: 42,
    padding: theme.spacing(0, 2),
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#fff !important',
    boxShadow: theme.shadows[2],
  },
  searchIcon: {
    marginRight: theme.spacing(2),
    color: theme.palette.primary.main,
  },
  searchInput: {
    flexGrow: 1,
  },
  searchButton: {
    marginLeft: '16px !important',
    boxShadow: theme.shadows[2],
  },
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default useStyles;
