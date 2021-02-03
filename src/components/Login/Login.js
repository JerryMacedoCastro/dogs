import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import LoginCreate from './LoginCreate';
import LoginForm from './LoginForm';
import LoginPasswordLost from './LoginPasswordLost';
import LoginPasswordReset from './LoginPasswordReset';

const Login = () => {
  const { path } = useRouteMatch();
  return (
    <div>
      <h3>login</h3>

      <Switch>
        <Route exact component={LoginForm} path={path} />
        <Route path={`${path}/new`} component={LoginCreate} />
        <Route path={`${path}/passwordLost`} component={LoginPasswordLost} />
        <Route path={`${path}/passwordReset`} component={LoginPasswordReset} />
      </Switch>
    </div>
  );
};

export default Login;
