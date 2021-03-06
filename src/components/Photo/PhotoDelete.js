import React from 'react';
import styles from './PhotoDelete.module.css';
import { PHOTO_DELETE } from '../../service/api';
import useFetch from '../../Hooks/useFetch';
import Error from '../Helper/Error';

const PhotoDelete = ({ id }) => {
  const { loading, error, request } = useFetch();

  async function handleClick() {
    const confirm = window.confirm('Tem certeza que deseja deletar? ');

    if (confirm) {
      const token = window.localStorage.getItem('token');

      const { url, options } = PHOTO_DELETE(id, token);

      const { response } = await request(url, options);

      if (response.ok) window.location.reload();
    }
  }

  return (
    <>
      {loading ? (
        <button onClick={handleClick} disabled className={styles.delete}>
          Carregando...
        </button>
      ) : error ? (
        <Error error={error} />
      ) : (
        <button onClick={handleClick} className={styles.delete}>
          Deletar
        </button>
      )}
    </>
  );
};

export default PhotoDelete;
