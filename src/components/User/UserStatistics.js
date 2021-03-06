import React from 'react';
import Head from '../Helper/Head';
import Loading from '../Helper/Loading';
import Error from '../Helper/Error';
import useFetch from '../../Hooks/useFetch';
import { GET_STATS } from '../../service/api';
import UserStatisticsGraph from './UserStatisticsGraph';

const UserStatiscs = () => {
  const { error, loading, data, request } = useFetch();

  React.useEffect(() => {
    async function getData() {
      const token = window.localStorage.getItem('token');
      const { url, options } = GET_STATS(token);

      await request(url, options);
    }
    getData();
  }, [request]);
  if (loading) return <Loading />;

  if (error) return <Error error={error} />;

  if (data) {
    return (
      <div>
        <Head title="Estatístias" />
        <UserStatisticsGraph data={data} />
      </div>
    );
  } else return null;
};

export default UserStatiscs;
