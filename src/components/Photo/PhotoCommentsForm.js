import React from 'react';
import useFetch from '../../Hooks/useFetch';
import { ReactComponent as Send } from '../../Assets/enviar.svg';
import { COMMENT_POST } from '../../service/api';
import Error from '../Helper/Error';
import styles from './PhotoCommentsForm.module.css';

const PhotoCommentsForm = ({ id, setComments }) => {
  const [comment, setComment] = React.useState('');
  const { request, error } = useFetch();

  function handleChange({ target }) {
    setComment(target.value);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const token = window.localStorage.getItem('token');

    const { url, options } = COMMENT_POST(id, { comment }, token);

    const { response, json } = await request(url, options);

    if (response.ok) {
      setComment('');
      setComments((comments) => [...comments, json]);
    }
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      {/* <label htmlFor="comment">Deixe um comentário</label> */}
      <textarea
        className={styles.textArea}
        id="comment"
        placeholder="Deixe um comentário"
        value={comment}
        onChange={handleChange}
      />
      <button className={styles.sendButton}>
        <Send />
      </button>
      {error && <Error error={error} />}
    </form>
  );
};

export default PhotoCommentsForm;
