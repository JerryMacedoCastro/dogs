import React from 'react';
import Input from '../Forms/Input';
import Button from '../Forms/Button';
import useFetch from '../../Hooks/useFetch';
import useForm from '../../Hooks/useForm';
import Error from '../Helper/Error';
import { PASSWORD_RESET } from '../../service/api';
import { useNavigate } from 'react-router-dom';

const LoginPasswordReset = () => {
  const [login, setLogin] = React.useState('');
  const [key, setKey] = React.useState('');
  const password = useForm();
  const { error, loading, request } = useFetch();

  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();
    if (password.validate) {
      const { url, options } = PASSWORD_RESET({
        login,
        key,
        password: password.value,
      });

      const { response } = await request(url, options);

      if (response.ok) navigate('/login');
    }
  }

  React.useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const key = params.get('key');
    const login = params.get('login');

    if (key) setKey(key);
    if (login) setLogin(login);
  }, []);
  return (
    <div className="container">
      <h1 className="title">Defina a nova senha!</h1>
      <form onSubmit={handleSubmit}>
        <Input
          label="Nova senha"
          type="password"
          name="password"
          {...password}
        />
        {loading ? (
          <Button disabled>Alterando...</Button>
        ) : (
          <Button>Confirmar</Button>
        )}
      </form>
      {error && <Error error={error} />}
    </div>
  );
};

export default LoginPasswordReset;
