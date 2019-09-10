import { PriorityQueue } from "./graph.queue";
import { isEmpty } from 'lodash'

// INTERFACES
import { 
  INode, 
  IAdjacencyList,
  IGraphData
} from './graph.interfaces'


export class Graph {
  nodes: INode[];
  adjacencyList: IAdjacencyList;

  constructor(data: IGraphData) {
    console.log(data)
    this.nodes = [];
    this.adjacencyList = {};
    this.initialSetup(data);

  }

  // Add a new node to the nodes array.
  private addNode(node: INode): void {
    this.nodes.push(node);
    this.adjacencyList[node.name] = [];
  }
  // Add edges to each node.
  private addEdge(node1: string, node2: string, weight: number): void {
    this.adjacencyList[node1].push({nodeName: node2, weight});
  }
  // Run initial setup for the graph.
  private initialSetup(obj: IGraphData) {
    for (let key in obj) {
      this.addNode({name: key, adjacencyList: []});
      let edges = obj[key];
      for (let edge in edges) {
        this.addEdge(key, edge, edges[edge])
      }
    }
    console.log(this.adjacencyList)
  }
  // Find the path using Dijkstra's Algorithm.
  // dijkstra(startNode: INode, endNode: INode) {
  //   // Initial values
  //   let times: ITimes = {};
  //   let backtrace: IBacktrace = {};
  //   let pq = new PriorityQueue();
    
  //   // The time to get to startNode from startNode is 0.
  //   times[startNode.node] = 0;

  //   // Initially, set all nodes but startNode to cost Infinity time to reach.
  //   this.nodes.forEach(node => {
  //     if (node !== startNode) {
  //       times[node.node] = Infinity;
  //     }
  //   });

  //   // Add startNode to the PriorityQueue, then keep looping while it has elements in.
  //   pq.enqueue([startNode, 0]);
  //   while (!isEmpty(pq.collection)) {
  //     let shortestStep = pq.dequeue();
  //     let currentNode = shortestStep[0];

  //     // For every item in the node's adjacencyList, calculate total time to reach.
  //     // If it's less than the time we have on file for this item, replace with the faster time.
  //     this.adjacencyList[currentNode].forEach(neighbor => {
  //       let time = times[currentNode] + neighbor.weight;
  //       if (time < times[neighbor.node.node]) {
  //         times[neighbor.node.node] = time;
  //         backtrace[neighbor.node.node] = currentNode;
  //         pq.enqueue([neighbor.node, time])
  //       }
  //     });
  //   }

  //   let path = [endNode];
  //   let lastStep = endNode;

  //   while (lastStep !== startNode) {
  //     path.unshift(backtrace[lastStep.node]);
  //     lastStep = backtrace[lastStep.node];
  //   }

  //   return `Path is ${path} and time is ${times[endNode.node]}`
  // }
}