// This class is used to store and access the Graph data.

export class Graph {
  nodes: any; // DEFINE THIS
  adjacencyList: any; // DEFINE THIS

  constructor() {
    this.nodes = [];
    this.adjacencyList = {};
  }

  // Add a new node to the nodes array.
  addNode(node: any) {
    this.nodes.push(node);
    this.adjacencyList[node] = [];
  }
  // Add edges to each node.
  addEdge(node1: any, node2: any, weight: number) {
    this.adjacencyList[node1].push({node: node2, weight});
    this.adjacencyList[node2].push({node: node1, weight});
  }
}