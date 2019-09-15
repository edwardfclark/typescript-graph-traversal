import React from "react";
import { find } from "lodash";

// COMPONENTS & STYLES
import {
  Container,
  FGraph,
  Link,
  Node,
  Text,
  TextWrapper,
  Title,
  VisWrapper,
  Wrapper
} from "./graph.styles";

// INTERFACES
import { IVisProps, IVisNode, IVisLink, IDjikstra } from "./graph.interfaces";

const Visualization = (props: IVisProps) => {
  const { data, djikstra } = props;
  const [start, setStart] = React.useState("");
  const [end, setEnd] = React.useState("");
  const [djikstraResult, setDjikstraResult] = React.useState<
    IDjikstra | undefined
  >(undefined);

  React.useEffect(() => {
    if (start && end) {
      setDjikstraResult(djikstra(start, end));
      return;
    } else {
      setDjikstraResult(undefined);
    }
  }, [start, end, djikstra]);

  // handle selecting and deselecting nodes for the algorithm.
  const handleClick = (node: IVisNode): void => {
    if (start === node.id) {
      setStart("");
      return;
    }
    if (end === node.id) {
      setEnd("");
      return;
    }
    if (!start) {
      setStart(node.id);
      return;
    }
    if (!end) {
      setEnd(node.id);
      return;
    }
  };

  const checkIfLinkActive = (link: IVisLink): boolean => {
    if (!djikstraResult) return false;
    const { path } = djikstraResult;

    if (path.indexOf(link.source) !== -1 && path.indexOf(link.target) !== -1) {
      return true;
    }
    return false;
  };

  const checkIfNodeActive = (node: IVisNode) => {
    if (node.id === start || node.id === end) return true;
    if (djikstraResult) {
      return djikstraResult.path.indexOf(node.id) !== -1;
    }
    return false;
  };

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
    <Wrapper>
      <VisWrapper>
        <TextWrapper>
          <Title>Find The Path With Djikstra</Title>
          <Text className="subTitle">
            Select nodes by clicking them to begin...
          </Text>
          {start && <Text>{`Your selected start node is ${start}.`}</Text>}
          {end && <Text>{`Your selected end node is ${end}.`}</Text>}
          {djikstraResult && (
            <Text>{`The optimal path is ${djikstraResult.path.join(
              ", "
            )} with a travel cost of ${djikstraResult.time}.`}</Text>
          )}
        </TextWrapper>
        <FGraph
          simulationOptions={{
            height: 250,
            width: 250
          }}
        >
          {renderNodes().map(node => (
            <Node
              key={node.id}
              node={node}
              showLabel
              onClick={() => handleClick(node)}
              className={checkIfNodeActive(node) ? "active" : ""}
            />
          ))}
          {renderLinks().map((link, i) => (
            <Link
              key={i}
              link={{ source: link.source, target: link.target }}
              //   active={checkIfLinkActive(link) ? "true" : "false"}
              className={checkIfLinkActive(link) ? "active" : ""}
            />
          ))}
        </FGraph>
      </VisWrapper>
    </Wrapper>
  );
};

export default Visualization;
