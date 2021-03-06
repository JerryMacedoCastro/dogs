import React from 'react';
import { useNavigate } from 'react-router-dom';
import { TOKEN_POST, TOKEN_VALIDATE_POST, USER_GET } from './service/api';

export const UserContext = React.createContext();

export const UserStorage = ({ children }) => {
  const [data, setData] = React.useState(null);
  const [login, setLogin] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  const navigate = useNavigate();

  const userLogout = React.useCallback(async () => {
    setData(null);
    setError(null);
    setLoading(false);
    setLogin(false);
    window.localStorage.removeItem('token');
    navigate('/login');
  }, [navigate]);

  React.useEffect(() => {
    const autoLogin = async () => {
      const token = window.localStorage.getItem('token');
      if (token) {
        try {
          setError(null);
          setLoading(true);
          const { url, options } = TOKEN_VALIDATE_POST(token);
          const response = await fetch(url, options);
          if (!!!response.ok) throw new Error('Token inválido');
          await getUser(token);
          navigate('/account');
          const json = await response.json();
          console.log(json);
        } catch (error) {
          userLogout();
        } finally {
          setLoading(false);
        }
      } else {
        setLogin(false);
      }
    };
    autoLogin();
  }, [userLogout, navigate]);

  const getUser = async (token) => {
    const { url, options } = USER_GET(token);
    const response = await fetch(url, options);
    const json = await response.json();

    setData(json);
    setLogin(true);
    console.log(json);
  };

  const userLogin = async (username, password) => {
    try {
      setError(null);
      setLoading(true);
      const { url, options } = TOKEN_POST({
        username,
        password,
      });
      const response = await fetch(url, options);
      if (!!!response.ok) {
        console.log(response.statusText);
        throw new Error(`Erro: Usuário ou senha inválido`);
      }
      const { token } = await response.json();

      window.localStorage.setItem('token', token);
      await getUser(token);
      navigate('/account');
    } catch (error) {
      console.log(error);
      setError(error.message);
      setLogin(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <UserContext.Provider
      value={{ userLogin, userLogout, data, error, loading, login }}
    >
      {children}
    </UserContext.Provider>
  );
};
