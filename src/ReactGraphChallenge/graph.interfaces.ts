export interface IWeightedLinks {
  [key: string]: number;
}

export interface IGraphData {
  [key: string]: IWeightedLinks;
}
