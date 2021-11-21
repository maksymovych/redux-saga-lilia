import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { allRoutes } from '../allRoutes';
import PrivateRoute from './PrivateRoute';

function Routes() {
  return (
    <Switch>
      {allRoutes.map((route, i) =>
        route.isPrivate ? (
          <PrivateRoute key={i} path={route.path} component={route.component} />
        ) : (
          <Route key={i} path={route.path} component={route.component} exact />
        )
      )}
      <Redirect to="/error" />
    </Switch>
  );
}

export default Routes;
