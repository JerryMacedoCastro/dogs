import React from 'react';
import useForm from '../../Hooks/useForm';
import Input from '../Forms/Input';
import Button from '../Forms/Button';
import useFetch from '../../Hooks/useFetch';
import { PASSWORD_LOST } from '../../service/api';
import Error from '../Helper/Error';
import Head from '../Helper/Head';

const LoginPasswordLost = () => {
  const login = useForm();
  const { data, loading, error, request } = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();
    if (login.validate) {
      const { url, options } = PASSWORD_LOST({
        login: login.value,
        url: window.location.href.replace('passwordLost', 'passwordReset'),
      });

      await request(url, options);
    }
  }

  return (
    <section className="animeLeft">
      <Head title="Senha perdida" />
      <h1 className="title">Perdeu sua senha?</h1>
      <p>Não se preocupe! Ésó recuperar ;)</p> <br />
      {data ? (
        <p style={{ color: '#4c1' }}>{data}</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <Input label="Email / Usuário" type="text" name="email" {...login} />

          {loading ? (
            <Button disabled>Enviar e-mail</Button>
          ) : (
            <Button>Enviar e-mail</Button>
          )}
        </form>
      )}
      {error && <Error error={error} />}
    </section>
  );
};

export default LoginPasswordLost;
