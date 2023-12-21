import { makeStyles } from 'tss-react/mui';
import gradients from '@utils/gradients';

const useStyles = makeStyles()((theme: any) => ({
  root: {},
  listItem: {
    '&:hover': {
      backgroundColor: theme.palette.background.paper,
    },
  },
  avatarBlue: {
    backgroundImage: gradients.blue,
  },
  avatarGreen: {
    backgroundImage: gradients.green,
  },
  avatarOrange: {
    backgroundImage: gradients.orange,
  },
  avatarIndigo: {
    backgroundImage: gradients.indigo,
  },
  arrowForwardIcon: {
    color: theme.palette.grey[500],
  },
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default useStyles;
