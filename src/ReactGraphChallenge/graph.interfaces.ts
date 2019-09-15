export interface IGraphProps {
  data?: IData;
}

// TODO: Remove any.
// If I do this, the djikstra() func breaks.
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

export interface IVisProps {
  data: IAdjacencyList;
}
