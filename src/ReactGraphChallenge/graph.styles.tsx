import styled from "styled-components";
import { ForceGraph, ForceGraphNode, ForceGraphLink } from "react-vis-force";

export const FGraph = styled(ForceGraph)`
  border: 1px solid red;
`;

export const Node = styled(ForceGraphNode)`
  fill: red;
`;

export const Link = styled(ForceGraphLink)``;
