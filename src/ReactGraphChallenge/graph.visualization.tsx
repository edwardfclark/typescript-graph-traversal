import React from "react";
import { find } from "lodash";

// COMPONENTS & STYLES
import { FGraph, Node, Link } from "./graph.styles";

// INTERFACES
import { IVisProps, IVisNode, IVisLink } from "./graph.interfaces";

const Visualization = (props: IVisProps) => {
  const { data } = props;

  // Return a list of nodes for use in the visualization.
  const renderNodes = () => {
    let nodesList: IVisNode[] = [];
    for (let node in data) {
      nodesList.push({ id: node });
    }
    return nodesList;
  };

  // Return a list of unique links for use in the visualization.
  const renderLinks = () => {
    let linksList: IVisLink[] = [];
    for (let node in data) {
      data[node].forEach(link => {
        linksList.push({
          source: node,
          target: link.nodeName,
          weight: link.weight
        });
      });
    }
    return linksList.reduce((uniques: IVisLink[], link: IVisLink) => {
      const { source, target, weight } = link;
      const reversedLink = { source: target, target: source, weight };
      if (find(uniques, link) || find(uniques, reversedLink)) {
        return uniques;
      } else {
        return [...uniques, link];
      }
    }, []);
  };

  return (
    <FGraph
      simulationOptions={{
        height: 500,
        width: 500,
        radiusMargin: 20
      }}
    >
      {renderNodes().map(node => (
        <Node
          key={node.id}
          node={node}
          showLabel
          onClick={() => console.log(node)}
        />
      ))}
      {renderLinks().map((link, i) => (
        <Link key={i} link={{ source: link.source, target: link.target }} />
      ))}
    </FGraph>
  );
};

export default Visualization;
