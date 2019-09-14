### Current Issues

- This only works if the incoming data has all of the connections allowed by a vertex on the vertex itself. Example: A has the connection to B listed in its entry in the adjacency list, but B also has the connection to A listed in the adjacency list.

- PriorityQueue is possibly too opinionated regarding what to give priority to.

- If the goal is to make PriorityQueue reuseable elsewhere in a theoretical wider app, it's in the wrong place. It should be stored in its own diriectory, or a helpers directory, not in ReactGraphChallenge.

- Using the withPriorityQueue HOC in Typescript, the Graph component expects to receive enqueue, dequeue, collection. It does receive these props from the HOC, but still returns the error. I have used an any type to fix this and get the rest of my code working, but I am aware this is bad practice.
