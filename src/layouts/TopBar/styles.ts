import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()({
  root: {},
  toolbar: {
    height: 64,
  },
});

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default useStyles;
