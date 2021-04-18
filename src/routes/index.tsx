import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from 'redux/store';
import { PrivateRoute, PublicRoute } from './Routes';
import Profile from 'pages/Profile.page';
import Question from 'pages/Question.page';
import Result from 'pages/Result.page';

const AppRouter = () => {
  return (
    <Router>
      <Provider store={store}>
        <Switch>
          <PublicRoute component={Profile} path="/" exact />
          <PrivateRoute component={Question} path="/play" exact />
          <PrivateRoute component={Result} path="/result" exact />
        </Switch>
      </Provider>
    </Router>
  );
};

export default AppRouter;
