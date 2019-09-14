import React from "react";
import { isEmpty, get } from "lodash";

// INTERFACES
import {
  IAdjacencyList,
  IGraphProps,
  IGraphState,
  IData,
  INode,
  IObjectOfNumbers,
  IObjectOfStrings
} from "./graph.interfaces";

// HELPERS
import withPriorityQueue from "./graph.queue";
import { reducer } from "./graph.reducer";

// TODO: Remove any type from props declaration.
// Could not for the life of mee get TS to work with my HOC without it.
const Graph = (props: any) => {
  const [state, dispatch] = React.useReducer(reducer, {
    nodes: [],
    adjacencyList: {} as IAdjacencyList
  });

  // Destructure values out of state and props
  const { data, enqueue, dequeue, collection } = props;
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
  }, []);

  // Use Djikstra's Algorithm to find the path
  const djikstra = (start: string, end: string) => {
    const times: IObjectOfNumbers = {};
    const backtrace: IObjectOfStrings = {};

    // The time to get efrom the start to the start is 0.
    times[start] = 0;

    // Add start to the Priority Queue.
    enqueue([start, 0]);

    // For every other node, initialize to Infinity.
    nodes.forEach(node => {
      if (node !== start) {
        times[node] = Infinity;
      }
    });

    // Keep looping while there are elements in the queue.
    while (!isEmpty(collection)) {
      let shortestStep: [string, number] = dequeue();
      let currentNode: string = get(shortestStep, "[0]");
      return { shortestStep, currentNode };
    }
    return "It never enters the loop, lol.";
  };

  return <React.Fragment>Aaaargh</React.Fragment>;
};

export default withPriorityQueue(Graph);
