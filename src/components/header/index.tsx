import React from 'react';
import { withStyles, WithStyles } from '@material-ui/core/styles';
import { Typography, AppBar, Toolbar } from '@material-ui/core';
import styles from './Header.styles';

const Header: React.FC<Props> = (prop) => {
  return (
    <React.Fragment>
      <AppBar position="absolute" color="default" className={prop.classes.appBar}>
        <Toolbar>
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            className={prop.classes.title}
          >
            Quizzer
          </Typography>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

interface Props extends WithStyles<typeof styles> {}

export default withStyles(styles)(Header);
