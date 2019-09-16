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

it("contains a title with the right text", () => {
  const graph = mount(<Graph data={graphData} />);
  const title = graph.find("h1");
  expect(title.text()).toEqual("Find The Path With Dijkstra");
});

it("contails a subTitle with the right text", () => {
  const graph = mount(<Graph data={graphData} />);
  const subTitle = graph.find("p");
  expect(subTitle.text()).toEqual("Select nodes by clicking them to begin...");
});
