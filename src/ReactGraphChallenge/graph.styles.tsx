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
  font-size: 1.2rem;
`;

export const Title = styled.h1``;

export const TextWrapper = styled.div`
  padding: 0 1rem;
`;

export const VisWrapper = styled.div`
  display: flex;
  border: 1px solid blue;
`;

// VISUALIZATION
export const FGraph = styled(ForceGraph)`
  border: 1px solid red;
`;

export const Node = styled(ForceGraphNode)`
  fill: grey;
  &.active {
    fill: blue;
  }
  cursor: pointer;
`;

export const Link = styled(ForceGraphLink)`
  stroke: grey;
  &.active {
    stroke: blue;
  }
  stroke-width: 2;
`;
