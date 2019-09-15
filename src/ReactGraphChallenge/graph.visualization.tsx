import React from "react";

// COMPONENTS & STYLES
import { FGraph, Node, Link } from "./graph.styles";

// INTERFACES
import { IVisProps } from "./graph.interfaces";

const Visualization = (props: IVisProps) => {
  console.log(props);
  return (
    <FGraph simulationOptions={{ height: 300, width: 300 }}>
      <Node node={{ id: "first-node" }} />
      <Node node={{ id: "second-node" }} />
      <Link link={{ source: "first-node", target: "second-node" }} />
    </FGraph>
  );
};

export default Visualization;
