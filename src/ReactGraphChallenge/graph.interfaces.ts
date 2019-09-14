import { IObjectOfNumbers } from "../GraphChallenge/graph.interfaces";

export interface IGraphProps {
  data?: IData;
}

// adjacencyList should be IAdjacencyList.
// If I do this, though, TS fails to see the index signature that I have defined.
// I don't know why...!
// I am running out of time to solve this challenge, so I'm leaving this for now.
// If I have time before I have to submit, I'll try and fix this.
export interface IGraphState {
  nodes: INode[];
  adjacencyList: any;
}

export interface IObjectOfNumbers {
  [key: string]: number;
}

export interface IAdjacencyListItem {
  nodeName: string;
  weight: number;
}

export interface IAdjacencyList {
  [key: string]: IAdjacencyListItem[];
}
export interface IData {
  [key: string]: IObjectOfNumbers;
}

export interface INode {
  name: string;
  adjacencyList: string[];
}

export interface IObjectOfStrings {
  [key: string]: string;
}
