import styled from "styled-components";
import { ForceGraph, ForceGraphNode, ForceGraphLink } from "react-vis-force";

export const Container = styled.div`
  position: relative;
  border: 1px solid green;
  display: inline-block;
`;

export const Text = styled.p`
  font-size: 1.2rem;
  &.subTitle {
    font-style: italic;
    color: grey;
    margin-top: 0;
  }
`;

export const Title = styled.h1`
  margin: 0 0 0.3rem;
`;

export const TextWrapper = styled.div`
  padding: 0 1rem;
`;

export const VisWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 800px;
`;

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

// VISUALIZATION
export const FGraph = styled(ForceGraph)`
  border: 1px solid grey;
  border-radius: 0.5rem;
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
