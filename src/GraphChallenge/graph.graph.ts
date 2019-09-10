import { PriorityQueue } from "./graph.queue";
import { isEmpty, get } from 'lodash'

// INTERFACES
import { 
  INode, 
  IAdjacencyList,
  IGraphData,
  IObjectOfNumbers,
  IObjectOfStrings
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
  }
  // Implement Dijkstra's Algorithm
  dijkstra(start: string, end: string) {
    const times: IObjectOfNumbers = {}
    const backtrace: IObjectOfStrings = {};
    let priorityQueue = new PriorityQueue();

    // The time to get to start from the start is 0.
    times[start] = 0;

    // For every other node, initialize to Infinity.
    this.nodes.forEach(node => {
      if (node.name !== start) {
        times[node.name] = Infinity;
      }
    });

    // Add start to the PriorityQueue to kick things off...
    priorityQueue.enqueue([start, 0]);

    // Keep looping while there are elements in the queue.
    while (!isEmpty(priorityQueue.collection)) {
      let shortestStep = priorityQueue.dequeue();
      let currentNode = get(shortestStep, '[0]', null);

      this.adjacencyList[currentNode].forEach(neighbor => {
        let time = times[currentNode] + neighbor.weight;
        if (time < times[neighbor.nodeName]) {
          times[neighbor.nodeName] = time;
          backtrace[neighbor.nodeName] = currentNode;
          priorityQueue.enqueue([neighbor.nodeName, time])
        }
      });
    }

    let path = [end];
    let lastStep = end;

    while (lastStep !== start) {
      path.unshift(backtrace[lastStep]);
      lastStep = backtrace[lastStep];
    }

    console.log(path, times[end])
  }
  // Find the path using Dijkstra's Algorithm.
  // dijkstra(startNode: INode, endNode: INode) {

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