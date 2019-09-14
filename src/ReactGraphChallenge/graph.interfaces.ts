import { IObjectOfNumbers } from "../GraphChallenge/graph.interfaces";

export interface IWeightedLinks {
  [key: string]: number;
}

export interface ICollection {
  collection: [string, number][];
}

export interface IPriorityQueue extends ICollection {
  enqueue: (element: [string, number]) => void;
  dequeue: () => [string, number];
}

export interface IGraphProps extends IPriorityQueue {
  data?: IData;
}

export interface IGraphState {
  nodes: INode[];
  adjacencyList: IAdjacencyList;
}

export interface IAdjacencyListItem {
  nodeName: string;
  weight: number;
}

export interface IObjectOfNumbers {
  [key: string]: number;
}

export interface IAdjacencyList {
  [key: string]: IAdjacencyListItem[];
}
export interface IData {
  [key: string]: IWeightedLinks;
}

export interface INode {
  name: string;
  adjacencyList: string[];
}
