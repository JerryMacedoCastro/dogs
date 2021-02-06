import React from 'react';
import { Link } from 'react-router-dom';

import Input from '../Forms/Input';
import Button from '../Forms/Button';
import useForm from '../../Hooks/useForm';
import { UserContext } from '../../UserContext';

const LoginForm = () => {
  const username = useForm();
  const password = useForm();
  const { userLogin, error, loading } = React.useContext(UserContext);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value);
    }
  };

  return (
    <section>
      <h1>Login</h1>
      <form action="" onSubmit={handleSubmit}>
        <Input name="username" label="Usuário" type="text" {...username} />

        <Input name="password" label="Senha" type="password" {...password} />
        {loading ? (
          <Button disabled>Carregando..</Button>
        ) : (
          <Button type="submit">Entrar</Button>
        )}
        {error && <p>{error}</p>}
      </form>
      <Link to={`login/new`}>Registro</Link>
    </section>
  );
};

export default LoginForm;
