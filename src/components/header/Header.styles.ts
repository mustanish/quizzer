import { createStyles, Theme } from '@material-ui/core/styles';

export default (theme: Theme) =>
  createStyles({
    appBar: {
      position: 'relative',
    },
    title: {
      flexGrow: 1,
    },
  });
