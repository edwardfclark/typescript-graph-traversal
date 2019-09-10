import { isEmpty } from 'lodash';

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
        if (element[1] < this.collection[i-1][1]) {
          this.collection.splice(i-1, 0, element);
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