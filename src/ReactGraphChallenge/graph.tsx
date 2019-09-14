import React from "react";

// INTERFACES
import { IGraphProps, IGraphState, IData, INode } from "./graph.interfaces";

// HELPERS
import withPriorityQueue from "./graph.queue";
import { reducer } from "./graph.reducer";

// TODO: Remove any type from props declaration.
// Could not for the life of mee get TS to work with my HOC without it.
const Graph = (props: any) => {
  const [state, dispatch] = React.useReducer(reducer, {
    nodes: [],
    adjacencyList: {}
  });

  React.useEffect(() => {
    const { data } = props;
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
  console.log(state);
  return <p>Woo</p>;
};

export default withPriorityQueue(Graph);
