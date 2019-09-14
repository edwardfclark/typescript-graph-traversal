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

export interface IData {
  [key: string]: IWeightedLinks;
}
