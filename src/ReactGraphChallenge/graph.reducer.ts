// Use of the reducer pattern here allows me to manage/avoid race conditions.
// My useEffect hook to add incoming data to state makes this necessary.

// INTERFACES
import { IGraphState } from "./graph.interfaces";

// TODO: Type the reducer action
export const reducer = (state: IGraphState, action: any) => {
  switch (action.type) {
    case "ADD_NODE":
      return {
        ...state,
        nodes: [...state.nodes, action.node.name],
        adjacencyList: {
          ...state.adjacencyList,
          [action.node.name]: []
        }
      };
    case "ADD_EDGE":
      return {
        ...state,
        adjacencyList: {
          ...state.adjacencyList,
          [action.node1]: [
            ...state.adjacencyList[action.node1],
            { nodeName: action.node2, weight: action.weight }
          ]
        }
      };
    default:
      return state;
  }
};
