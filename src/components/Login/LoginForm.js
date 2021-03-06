import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Loginform.module.css';
import stylesButton from '../Forms/Button.module.css';
import Input from '../Forms/Input';
import Button from '../Forms/Button';
import useForm from '../../Hooks/useForm';
import Error from '../Helper/Error';
import { UserContext } from '../../UserContext';
import Head from '../Helper/Head';

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
    <section className="animeLeft">
      <Head title="Login" />
      <h1 className="title">Login</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <Input name="username" label="Usuário" type="text" {...username} />

        <Input name="password" label="Senha" type="password" {...password} />
        {loading ? (
          <Button disabled>Carregando..</Button>
        ) : (
          <Button type="submit">Entrar</Button>
        )}
        <Error error={error} />
      </form>
      <Link className={styles.lost} to="/login/passwordLost">
        Esqueceu a senha?
      </Link>
      <div className={styles.register}>
        <h2 className={styles.subtitle}>Cadastre-se</h2>
        <p>Ainda não possui conta? Cadastre-se no site</p>
        <Link className={stylesButton.button} to="/login/new">
          Registro
        </Link>
      </div>
    </section>
  );
};

export default LoginForm;
