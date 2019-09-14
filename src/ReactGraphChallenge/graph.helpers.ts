import { isEmpty } from "lodash";

// Hard-coded data for the graph
export const graphData = {
  A: { C: 2 },
  B: { D: 4, E: 7 },
  C: { A: 2, D: 1, F: 4 },
  D: { B: 4, C: 1, F: 1, G: 2 },
  E: { B: 7, H: 10 },
  F: { C: 4, D: 1, G: 3 },
  G: { D: 2, F: 3, H: 4 },
  H: { E: 10, G: 4 }
};

// PriorityQueue is a class used in the djikstra() function.
// I chose to implement it as a class, without using React, because nothing that happens with the PriorityQueue affects rendering logic.
// Therefore, I did not think the app state needed to be aware of it.
export class PriorityQueue {
  collection: [string, number][];
  constructor() {
    this.collection = [];
  }

  // If the collection is empty, just push element on. If not, place it in weight order.
  enqueue(element: [string, number]) {
    if (isEmpty(this.collection)) {
      this.collection.push(element);
    } else {
      let added = false;
      for (let i = 1; i <= this.collection.length; i++) {
        if (element[1] < this.collection[i - 1][1]) {
          this.collection.splice(i - 1, 0, element); // TODO: This is a mutation. Refactor.
          added = true;
          break;
        }
      }
      if (!added) {
        this.collection.push(element);
      }
    }
  }

  // Remove the first element from the queue and return it.
  dequeue() {
    let value = this.collection.shift();
    return value;
  }
}
