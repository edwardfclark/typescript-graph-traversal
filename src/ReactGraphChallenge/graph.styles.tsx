import styled from "styled-components";
import { ForceGraph, ForceGraphNode, ForceGraphLink } from "react-vis-force";

export const Container = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  width: 900px;
  margin: 0 auto;
  position: relative;
`;

export const Text = styled.p`
  font-size: 1.4rem;
`;

export const Title = styled.h1``;

// VISUALIZATION
export const FGraph = styled(ForceGraph)``;

export const Node = styled(ForceGraphNode)`
  fill: ${({ selected }) => (selected ? "blue" : "red")};
  cursor: pointer;
`;

export const Link = styled(ForceGraphLink)`
  stroke: ${({ active }) => (active ? "blue" : "grey")};
  stroke-width: 2;
`;
