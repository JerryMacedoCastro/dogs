import React from 'react';
import styles from './UserStatisticsGraph.module.css';

const UserStatisticsGraph = ({ data }) => {
  const [graph, setGraph] = React.useState([]);
  const [total, setTotal] = React.useState(0);

  React.useEffect(() => {
    setTotal(
      data
        .map(({ acessos }) => Number(acessos))
        .reduce((accum, curr) => accum + curr)
    );
  }, [data]);
  return (
    <section className={`${styles.graph} animeLeft`}>
      <div className={styles.total}>
        <p>Acessos: {total}</p>
      </div>
    </section>
  );
};

export default UserStatisticsGraph;
