import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { UserContext } from '../../UserContext';

import LoginCreate from './LoginCreate';
import LoginForm from './LoginForm';
import LoginPasswordLost from './LoginPasswordLost';
import LoginPasswordReset from './LoginPasswordReset';

const Login = () => {
  const { login } = React.useContext(UserContext);

  if (login === true) return <Navigate to="/account" />;
  return (
    <div>
      <Routes>
        <Route exact element={<LoginForm />} path="/" />
        <Route path="/new`" element={<LoginCreate />} />
        <Route path="/passwordLost" element={<LoginPasswordLost />} />
        <Route path="/passwordReset" element={<LoginPasswordReset />} />
      </Routes>
    </div>
  );
};

export default Login;
