export interface INode {
  name: string;
  adjacencyList: string[];
}

export interface IObjectOfNumbers {
  [key: string]: number;
}

export interface IObjectOfStrings {
  [key: string]: string;
}

export interface IAdjacencyListItem {
  nodeName: string;
  weight: number;
}

export interface IAdjacencyList {
  [key: string]: IAdjacencyListItem[];
}

export interface IGraphData {
  [key: string]: IObjectOfNumbers;
}