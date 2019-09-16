import React from "react";
import { mount, shallow } from "enzyme";

// COMPONENTS
import App from "./App";
import Graph from "./ReactGraphChallenge";

// HELPERS
import { graphData } from "./ReactGraphChallenge/graph.helpers";

it("renders without crashing", () => {
  shallow(<App />);
});

it("handles no data case", () => {
  const graph = shallow(<Graph />);
  expect(graph.find("p").text()).toEqual("No adjacency list is present.");
});

it("contains a title and a subtitle", () => {
  const graph = mount(<Graph data={graphData} />);
  const title = graph.find("title");
});
