import React from "react";

// INTERFACES
import { IGraphProps } from "./graph.interfaces";

// HELPERS
import withPriorityQueue from "./graph.queue";

// TODO: Remove any type from props declaration.
// Could not for the life of mee get TS to work with my HOC without it.
class Graph extends React.Component<any, {}> {
  constructor(props: any) {
    super(props);
  }

  componentDidMount() {
    const { enqueue } = this.props;
    enqueue(["First", 1]);
  }

  render() {
    const { enqueue, dequeue } = this.props;
    console.log(this.props);
    return (
      <React.Fragment>
        <button
          onClick={() => {
            enqueue(["Second", 2]);
          }}
        >
          Click Me
        </button>
        <button
          onClick={() => {
            console.log(dequeue(["Second", 2]));
          }}
        >
          Then Click Me
        </button>
      </React.Fragment>
    );
  }
}

export default withPriorityQueue(Graph);
