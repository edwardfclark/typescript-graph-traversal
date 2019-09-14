import React from "react";

// This HOC gives the component you wrap access to a Priority Queue data structure.
// This allows the Priority Queue to be used for my Djikstra's Algoritm implementation and potentially re-used elsewhere in the app.
function withPriorityQueue<T>(Component: React.ComponentType<T>) {
  return class extends React.Component<T, {}> {
    constructor(props: T) {
      super(props);
    }
    render() {
      return <Component {...(this.props as T)} />;
    }
  };
}

export default withPriorityQueue;
