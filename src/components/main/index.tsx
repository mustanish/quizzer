import React from 'react';
import { Paper } from '@material-ui/core';
import { withStyles, WithStyles } from '@material-ui/core/styles';
import Header from '../header';
import styles from './Main.styles';

const Main: React.FC<Props> = (prop) => {
  return (
    <React.Fragment>
      <Header />
      <main className={prop.classes.layout}>
        <Paper className={prop.classes.paper}>{prop.children}</Paper>
      </main>
    </React.Fragment>
  );
};

interface Props extends WithStyles<typeof styles> {}

export default withStyles(styles)(Main);
