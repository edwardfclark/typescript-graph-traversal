import React from "react";
import { isEmpty } from "lodash";

// INTERFACES
interface ICollection {
  collection: [string, number][];
}
interface IPriorityQueue extends ICollection {
  enqueue: (element: [string, number]) => void;
  dequeue: () => [string, number];
}

// This HOC gives the component you wrap access to a Priority Queue data structure.
// This allows the Priority Queue to be used for my Djikstra's Algoritm implementation and potentially re-used elsewhere in the app.
const withPriorityQueue = <T extends IPriorityQueue>(
  Component: React.ComponentType<T>
) => {
  return class extends React.Component<T, ICollection> {
    constructor(props: T) {
      super(props);
      this.state = {
        collection: []
      };
      this.enqueue = this.enqueue.bind(this);
      this.dequeue = this.dequeue.bind(this);
    }

    // If the collection is empty, just push element on.
    // If not, place the collection in weight order.
    enqueue(element: [string, number]) {
      if (isEmpty(this.state.collection)) {
        this.setState({
          collection: [...this.state.collection, element]
        });
      } else {
        let added = false;
        let newCollection = [];
        for (let i = 1; i <= this.state.collection.length; i++) {
          if (element[1] < this.state.collection[i - 1][1]) {
            newCollection = [
              ...this.state.collection.slice(0, i - 1),
              element,
              ...this.state.collection.slice(i - 1)
            ];
            this.setState({ collection: newCollection });
            added = true;
            break;
          }
        }
        if (!added) {
          this.setState({ collection: [...this.state.collection, element] });
        }
      }
    }

    // Remove the first element from the queue and return it.
    dequeue() {
      let value = this.state.collection[0];
      this.setState({ collection: [...this.state.collection.slice(1)] });
      return value;
    }

    render() {
      return (
        <Component
          {...(this.props as T)}
          collection={this.state.collection}
          enqueue={this.enqueue}
          dequeue={this.dequeue}
        />
      );
    }
  };
};

export default withPriorityQueue;
