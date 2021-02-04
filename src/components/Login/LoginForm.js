import React from 'react';
import { Link } from 'react-router-dom';

import Input from '../Forms/Input';
import Button from '../Forms/Button';
import useForm from '../../Hooks/useForm';

const LoginForm = () => {
  const username = useForm();
  const password = useForm();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (username.validate() && password.validate()) {
      fetch('https://dogsapi.origamid.dev/json/jwt-auth/v1/token', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(),
      })
        .then((response) => {
          return response.json();
        })
        .then((json) => {
          console.log(json);
          return json;
        });
    }
  };

  return (
    <section>
      <h1>Login</h1>
      <form action="" onSubmit={handleSubmit}>
        <Input
          name="username"
          label="Usuário"
          type="text"
          {...username}
          // value={username}
          // onChange={({ target }) => setUserame(target.value)}
        />

        <Input
          name="password"
          label="Senha"
          type="password"
          {...password}
          // value={password}
          // onChange={({ target }) => setPassword(target.value)}
        />
        <Button type="submit">Entrar</Button>
      </form>
      <Link to={`login/new`}>Registro</Link>
    </section>
  );
};

export default LoginForm;
