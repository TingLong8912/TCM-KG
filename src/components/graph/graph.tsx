import { useState, useEffect } from 'react';
import { Graph } from 'react-d3-graph';
import { useTheme } from 'next-themes';

const GraphPage = ({ data, config }) => {
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

  const updateFilteredData = initialNodes => {
    return {
      nodes: initialNodes,
      links: data.links.filter(link => {
        return initialNodes.find(node => node.id === link.source) && initialNodes.find(node => node.id === link.target);
      })
    };
  };

  useEffect(() => {
    const newFontColor = theme === "light" ? "black" : "white";
    setGraphConfig(prevConfig => ({
      ...prevConfig,
      node: {
        ...prevConfig.node,
        fontColor: newFontColor,
      },
    }));
  }, [theme]);

  const onMouseOverNode = ( nodeId ) => {
    const sourceLinks = data.links.filter(link => link.source === nodeId);
    const sourceNode = data.nodes.find(n => n.id === nodeId);
  
    if ( !sourceNode || activedNode.includes(nodeId) ) return;

    if (sourceNode && sourceLinks.length > 0) {
      const existingNodes = filteredData ? filteredData.nodes : data.nodes;
      const existingLinks = filteredData ? filteredData.links : data.links;

      const newNodes = [
        ...existingNodes,
        ...sourceLinks.map(link => {
          const targetNode = data.nodes.find(n => n.id === link.target);
          return { ...targetNode, x: sourceNode.x, y: sourceNode.y }; // Retain the position of the target node
        })
      ];
      const newLinks = [...existingLinks, ...sourceLinks.map(link => ({ ...link }))];
      setFilteredData({ nodes: newNodes, links: newLinks });
    }
  };

  const onMouseOutNode =  ( nodeId ) => {
    const sourceNode = data.nodes.find(n => n.id === nodeId);
    if ( !sourceNode || activedNode.includes(nodeId) ) return;

    const firstHierarchyNodes = data.nodes.filter(node => node.size !== 0);
    const updatedFilteredData = updateFilteredData(firstHierarchyNodes);
    setFilteredData(updatedFilteredData);
    setOrginialData(updatedFilteredData);
  };

  // Clcik Node
  const onClickNode = (nodeId, node)  => {
    if ( activedNode.includes(nodeId) ) return;
    const sourceLinks = data.links.filter(link => link.source === nodeId);
    const sourceNode = data.nodes.find(n => n.id === nodeId);

    if (sourceNode && sourceLinks.length > 0) {
      const existingNodes = filteredData ? filteredData.nodes : data.nodes;
      const existingLinks = filteredData ? filteredData.links : data.links;

      // const newNodes = [
      //   ...existingNodes,
      //   ...sourceLinks.map(link => {
      //     const targetNode = data.nodes.find(n => n.id === link.target);
      //     return { ...targetNode, x: sourceNode.x, y: sourceNode.y }; // Retain the position of the target node
      //   })
      // ];

      // const newLinks = [...existingLinks, ...sourceLinks.map(link => ({ ...link }))];

      const newNodes = [...existingNodes];
      const newLinks = [...existingLinks];
      setOrginialData({ nodes: newNodes, links: newLinks });
      setFilteredData({ nodes: newNodes, links: newLinks });
      setActivedNode([...activedNode, nodeId]);
      setGraphConfig({ ...graphConfig, staticGraphWithDragAndDrop: true });
    }
  };

  const centerOnNode = (nodeId) => {
    const node = data.nodes.find(n => n.id === nodeId);

    if (node) {
      const focusX = node.x / 1280; // Assuming graphWidth is the width of the graph container
      const focusY = node.y / 1080; // Assuming graphHeight is the height of the graph container

      // Update the config object to center the graph on the specified node
      setGraphConfig({ ...graphConfig, focusX, focusY });
    }
  };

  const removeNodeId = (nodeIdToRemove) => {
    setActivedNode((prevActivedNode) =>
      prevActivedNode.filter((nodeId) => nodeId !== nodeIdToRemove)
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