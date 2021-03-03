import React from 'react';
import useFetch from '../../Hooks/useFetch';
import { PHOTOS_GET } from '../../service/api';
import Error from '../Helper/Error';
import Loading from '../Helper/Loading';
import FeedPhotosItem from './FeedPhotosItem';
import styles from './FeedPhotos.module.css';

const FeedPhotos = () => {
  const { data, error, loading, request } = useFetch();

  React.useEffect(() => {
    async function fetchPhotos() {
      const { url, options } = PHOTOS_GET({ page: 1, total: 6, user: 0 });
      const { response, json } = await request(url, options);
      console.log(response, json);
    }
    fetchPhotos();
  }, [request]);

  if (error) return <Error error={error} />;

  if (loading) return <Loading />;

  if (data) {
    return (
      <ul className={`${styles.feed} animeLeft`}>
        {data.map((photo) => (
          <FeedPhotosItem key={photo.id} photo={photo} />
        ))}
      </ul>
    );
  } else return null;
};

export default FeedPhotos;