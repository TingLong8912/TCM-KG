interface NodeType {
  id: string;
  size: number;
  x?: number;
  y?: number;
}

interface LinkType {
  source: string;
  target: string;
}

interface GraphData {
  nodes: NodeType[];
  links: LinkType[];
}

interface GraphPageProps {
  data: GraphData;
  config: any;
}

import { useState, useEffect } from 'react';
import { Graph } from 'react-d3-graph';
import { useTheme } from 'next-themes';

const GraphPage = ({ data, config }: GraphPageProps) => {
  const { theme } = useTheme();
  const [orginialData, setOrginialData] = useState(data);
  const [filteredData, setFilteredData] = useState(data);
  const [graphConfig, setGraphConfig] = useState(config);
  const [activedNode, setActivedNode] = useState(["Thing_紫藤"]);

  // When data change, update the filter data to frist hierarchy
  useEffect(() => {
    const firstHierarchyNodes = data.nodes.filter(node => node.size !== 10);
    const updatedFilteredData = updateFilteredData(firstHierarchyNodes);
    setFilteredData(updatedFilteredData);
    setOrginialData(updatedFilteredData);
    centerOnNode("Thing_紫藤");
  }, [data]);

  const updateFilteredData = (initialNodes: NodeType[]) => {
    return {
      nodes: initialNodes,
      links: data.links.filter(link => {
        return initialNodes.find(node => node.id === link.source) && initialNodes.find(node => node.id === link.target);
      })
    };
  };

  useEffect(() => {
    const newFontColor = theme === "light" ? "black" : "white";
    setGraphConfig((prevConfig: typeof config) => ({
      ...prevConfig,
      node: {
      ...prevConfig.node,
      fontColor: newFontColor,
      },
    }));
  }, [theme]);

  interface MouseOverNodeParams {
    nodeId: string;
  }

  const onMouseOverNode = (nodeId: string): void => {
    const sourceLinks: LinkType[] = data.links.filter((link: LinkType) => link.source === nodeId);
    const sourceNode: NodeType | undefined = data.nodes.find((n: NodeType) => n.id === nodeId);

    if (!sourceNode || activedNode.includes(nodeId)) return;

    if (sourceNode && sourceLinks.length > 0) {
      const existingNodes: NodeType[] = filteredData ? filteredData.nodes : data.nodes;
      const existingLinks: LinkType[] = filteredData ? filteredData.links : data.links;

      const newNodes: NodeType[] = [
        ...existingNodes,
        ...sourceLinks.map((link: LinkType) => {
          const targetNode: NodeType | undefined = data.nodes.find((n: NodeType) => n.id === link.target);
          return { ...targetNode, x: sourceNode.x, y: sourceNode.y } as NodeType; // Retain the position of the target node
        })
      ];
      const newLinks: LinkType[] = [...existingLinks, ...sourceLinks.map((link: LinkType) => ({ ...link }))];
      setFilteredData({ nodes: newNodes, links: newLinks });
    }
  };

  interface MouseOutNodeParams {
    nodeId: string;
  }

  const onMouseOutNode = (nodeId: string): void => {
    const sourceNode: NodeType | undefined = data.nodes.find((n: NodeType) => n.id === nodeId);
    if (!sourceNode || activedNode.includes(nodeId)) return;

    const firstHierarchyNodes: NodeType[] = data.nodes.filter((node: NodeType) => node.size !== 0);
    const updatedFilteredData: GraphData = updateFilteredData(firstHierarchyNodes);
    setFilteredData(updatedFilteredData);
    setOrginialData(updatedFilteredData);
  };

  // Clcik Node
  interface ClickNodeParams {
    nodeId: string;
    node: NodeType;
  }

  const onClickNode = (nodeId: string, node: NodeType): void => {
    if (activedNode.includes(nodeId)) return;
    const sourceLinks: LinkType[] = data.links.filter((link: LinkType) => link.source === nodeId);
    const sourceNode: NodeType | undefined = data.nodes.find((n: NodeType) => n.id === nodeId);

    if (sourceNode && sourceLinks.length > 0) {
      const existingNodes: NodeType[] = filteredData ? filteredData.nodes : data.nodes;
      const existingLinks: LinkType[] = filteredData ? filteredData.links : data.links;

      // const newNodes = [
      //   ...existingNodes,
      //   ...sourceLinks.map(link => {
      //     const targetNode = data.nodes.find(n => n.id === link.target);
      //     return { ...targetNode, x: sourceNode.x, y: sourceNode.y }; // Retain the position of the target node
      //   })
      // ];

      // const newLinks = [...existingLinks, ...sourceLinks.map(link => ({ ...link }))];

      const newNodes: NodeType[] = [...existingNodes];
      const newLinks: LinkType[] = [...existingLinks];
      setOrginialData({ nodes: newNodes, links: newLinks });
      setFilteredData({ nodes: newNodes, links: newLinks });
      setActivedNode([...activedNode, nodeId]);
      setGraphConfig({ ...graphConfig, staticGraphWithDragAndDrop: true });
    }
  };

  interface CenterOnNodeParams {
    nodeId: string;
  }

  const centerOnNode = (nodeId: string): void => {
    const node: NodeType | undefined = data.nodes.find((n: NodeType) => n.id === nodeId);

    if (node) {
      const focusX: number | undefined = node.x !== undefined ? node.x / 1280 : undefined; // Assuming graphWidth is the width of the graph container
      const focusY: number | undefined = node.y !== undefined ? node.y / 1080 : undefined; // Assuming graphHeight is the height of the graph container

      // Update the config object to center the graph on the specified node
      setGraphConfig({ ...graphConfig, focusX, focusY });
    }
  };

  interface RemoveNodeIdParams {
    nodeIdToRemove: string;
  }

  const removeNodeId = ({ nodeIdToRemove }: RemoveNodeIdParams): void => {
    setActivedNode((prevActivedNode: string[]) =>
      prevActivedNode.filter((nodeId: string) => nodeId !== nodeIdToRemove)
    );
  };

  const onClickGraph = () => {
    window.alert(`Graph is clicked`);
    const firstHierarchyNodes = data.nodes.filter(node => node.size !== 0);
    const updatedFilteredData = updateFilteredData(firstHierarchyNodes);
    setFilteredData(updatedFilteredData);
    setOrginialData(updatedFilteredData);
    centerOnNode("Thing_紫藤");
  }

  return (
    <div>
      {filteredData && (
        <Graph
          id='graph-id' // id is mandatory, if no id is defined rd3g will throw an error
          data={filteredData}
          config={graphConfig}
          // onClickGraph={onClickGraph}
          // onMouseOverNode={onMouseOverNode}
          // onMouseOutNode={onMouseOutNode}
          // onClickNode={onClickNode}
        />
      )}
    </div>
  );
};
   
export default GraphPage;