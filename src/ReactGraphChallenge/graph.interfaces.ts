export interface IWeightedLinks {
  [key: string]: number;
}

export interface IGraphData {
  [key: string]: IWeightedLinks;
}

export interface IPriorityQueue {
  collection: any[];
}
