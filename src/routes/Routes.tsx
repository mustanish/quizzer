import React from 'react';
import { useDispatch } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

import { ComponentType } from 'types/component.type';
import { fecthProfile } from 'apis/Profile.api';
import { setProfile } from 'features/User/User.slice';

export const PrivateRoute: React.FC<ComponentType> = (props) => {
  const dispatch = useDispatch();
  const profile = fecthProfile();
  const isProfile = Object.keys(profile).length !== 0;
  if (isProfile) dispatch(setProfile(profile));
  return isProfile ? (
    <Route path={props.path} exact={props.exact} component={props.component} />
  ) : (
    <Redirect to="/" />
  );
};

export const PublicRoute: React.FC<ComponentType> = (props) => {
  const dispatch = useDispatch();
  const profile = fecthProfile();
  const isProfile = Object.keys(profile).length !== 0;
  if (isProfile) dispatch(setProfile(profile));
  return <Route {...props} />;
};
