import React from "react";
import Graph from "./ReactGraphChallenge";
import { graphData } from "./ReactGraphChallenge/graph.helpers";

const App: React.ComponentType = () => {
  return <Graph data={graphData} />;
};

export default App;
