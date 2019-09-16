# Find The Path With Djikstra

This is a small application that uses TypeScript and React to solve a graph problem. Given a weighted, undirected graph, this application finds the shortest path between two points - by cost, not by the number of hops required. This was my first attempt at using TypeScript, so the app is quite small and limited in scope.

## Outstanding Issues

- **The enqueue method in the PriorityQueue class uses splice().** Since splice mutates the array you call it on, it is probably best to rewrite this section of the method using slice() to avoid a mutation.
- **In my IGraphState interface, defined in graph.interfaces.ts, there is an any type specified on line 10.** It should be IAdjacencyList. Doing this causes a complication error that I have yet to resolve, however - it fails to recognize the index signature in the IAdjacencyList interface. This error happens on line 66 of graph.tsx.
- **The reducer's action has an any type specified.** I think there must be a special base type in React I can use here, but I don't know what it is.
- **I used Uber's react-vis-force to create the data visualization. It utterly resisted my attempts to resize it and make it bigger,** so instead of making the Network Graph larger, I made the rest of the app more compact to make it look like it went together. The embarrassing truth is that I just couldn't get it sized up with the methods I tried, and I was running out of time. A better visualization would have the nodes spaced farther apart.

## Unit Tests

This was my first ever attempt at writing JavaScript unit tests! I installed enzyme and got a few basic tests working as expected, but ran into problems with the react-vis-force library I'm using to render my network graph. The library itself is a little buggy and throws an error which causes the tests to fail whenever the tests depended on a mounted component. I couldn't figure out how to fix it before running out of time to complete this exercise. I ended up wrapping the ForceGraph in an error boundary just so that I could successfully write a few tests. It could have gone better!

Any critiques offered are greatly appreciated.
