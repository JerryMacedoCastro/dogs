import { Route, Switch } from 'react-router-dom';
import React from 'react';
import Home from './components/Home';
import Login from './components/Login/Login';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
    </Switch>
  );
};

export default Routes;
