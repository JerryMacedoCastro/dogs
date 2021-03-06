import React from 'react';
import styles from './UserStatisticsGraph.module.css';
import { VictoryPie, VictoryChart, VictoryBar } from 'victory';

const UserStatisticsGraph = ({ data }) => {
  const [graph, setGraph] = React.useState([]);
  const [total, setTotal] = React.useState(0);
  const [hasPhotos, setHasphotos] = React.useState(false);

  React.useEffect(() => {
    setHasphotos(data.length !== 0);
    if (hasPhotos) {
      const graphData = data.map((item) => {
        return { x: item.title, y: Number(item.acessos) };
      });
      setGraph(graphData);
      setTotal(
        data
          .map(({ acessos }) => Number(acessos))
          .reduce((accum, curr) => accum + curr)
      );
    }
  }, [data, hasPhotos]);
  return (
    <section className={`${styles.graph} animeLeft`}>
      <div className={`${styles.total} ${styles.graphItem}`}>
        <p>{hasPhotos ? `Acessos: ${total}` : 'Nenhuma foto postada ;('}</p>
      </div>

      <div className={`${styles.graphItem}`}>
        {hasPhotos && (
          <VictoryPie
            data={graph}
            innerRadius={50}
            padding={{ top: 20, bottom: 20, left: 80, right: 80 }}
            style={{
              data: {
                fillOpacity: 0.9,
                stroke: '#fff',
                strokeWidth: 2,
              },
              label: { fontSize: 14, fill: '#333' },
            }}
          />
        )}
      </div>
      <div className={styles.graphItem}>
        {hasPhotos && (
          <VictoryChart>
            <VictoryBar alignment="start" data={graph} />
          </VictoryChart>
        )}
      </div>
    </section>
  );
};

export default UserStatisticsGraph;
