import React from 'react';
import { graphData } from './graph.helpers';
import { Graph } from './graph.graph';

const GraphChallenge = () => {
  const data = new Graph(graphData);
  data.dijkstra("A", "C");
  return <pre>{JSON.stringify(data)}</pre>;
}

export default GraphChallenge;