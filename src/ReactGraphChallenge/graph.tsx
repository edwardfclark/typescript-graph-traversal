import React from "react";
import { isEmpty, get } from "lodash";

// INTERFACES
import {
  // IAdjacencyList,
  IGraphProps,
  IObjectOfNumbers,
  IObjectOfStrings,
  IAdjacencyListItem,
  IDjikstra
} from "./graph.interfaces";

// HELPERS
import { reducer } from "./graph.reducer";
import { PriorityQueue } from "./graph.helpers";

// COMPONENTS & STYLES
import Visualization from "./graph.visualization";

const Graph = (props: IGraphProps) => {
  const [state, dispatch] = React.useReducer(reducer, {
    nodes: [],
    adjacencyList: {}
  });

  // Destructure values out of state and props
  const { data } = props;
  const { nodes, adjacencyList } = state;

  // Perform initial data parsing when component mounts.
  React.useEffect(() => {
    for (let key in data) {
      dispatch({ type: "ADD_NODE", node: { name: key, adjacencyList: [] } });
      let edges = data[key];
      for (let edge in edges) {
        dispatch({
          type: "ADD_EDGE",
          node1: key,
          node2: edge,
          weight: edges[edge]
        });
      }
    }
  }, [data]);

  // Use Djikstra's Algorithm to find the path
  const djikstra = (start: string, end: string): IDjikstra => {
    const times: IObjectOfNumbers = {};
    const backtrace: IObjectOfStrings = {};
    let priorityQueue = new PriorityQueue();
    // The time to get efrom the start to the start is 0.
    times[start] = 0;
    // Initialize every other node to Infinity
    nodes.forEach(node => {
      if (node !== start) {
        times[node] = Infinity;
      }
    });
    // Add start to the PriorityQueue to kick things off...
    priorityQueue.enqueue([start, 0]);
    while (!isEmpty(priorityQueue.collection)) {
      let shortestStep = priorityQueue.dequeue();
      let currentNode: string = get(shortestStep, "[0]", null);

      adjacencyList[currentNode].forEach((neighbor: IAdjacencyListItem) => {
        let time = times[currentNode] + neighbor.weight;
        if (time < times[neighbor.nodeName]) {
          times[neighbor.nodeName] = time;
          backtrace[neighbor.nodeName] = currentNode;
          priorityQueue.enqueue([neighbor.nodeName, time]);
        }
      });
    }

    let path = [end];
    let lastStep = end;

    while (lastStep !== start) {
      path = [backtrace[lastStep], ...path];
      lastStep = backtrace[lastStep];
    }
    return { path, time: times[end] };
  };

  return (
    <React.Fragment>
      {!isEmpty(adjacencyList) && (
        <Visualization djikstra={djikstra} data={adjacencyList} />
      )}
      {isEmpty(adjacencyList) && <p>No adjacency list is present.</p>}
    </React.Fragment>
  );
};

export default Graph;
