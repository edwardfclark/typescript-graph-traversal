import React from "react";

// INTERFACES
import { IAdjacencyList } from "./graph.interfaces";

const Visualization = (props: IAdjacencyList) => {
  console.log(props);
  return <p>This rendered.</p>;
};

export default Visualization;
