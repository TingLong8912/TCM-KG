"use client";
import { useState, useEffect } from 'react';
import { Graph } from 'react-d3-graph';
import { useTheme } from 'next-themes';

// Callback to handle click on the graph.
// @param {Object} event click dom event
// const onClickGraph = function(event) {
//      window.alert('Clicked the graph background');
// };

// const onClickNode = function(nodeId, node) {
//      window.alert('Clicked node ${nodeId} in position (${node.x}, ${node.y})');
// };

// const onDoubleClickNode = function(nodeId, node) {
//      window.alert('Double clicked node ${nodeId} in position (${node.x}, ${node.y})');
// };

// const onRightClickNode = function(event, nodeId, node) {
//      window.alert('Right clicked node ${nodeId} in position (${node.x}, ${node.y})');
// };

const onMouseOverNode = function(nodeId, node) {
     window.alert(`Mouse over node ${nodeId} in position (${node.x}, ${node.y})`);
};

// const onMouseOutNode = function(nodeId, node) {
//      window.alert(`Mouse out node ${nodeId} in position (${node.x}, ${node.y})`);
// };

// const onClickLink = function(source, target) {
//      window.alert(`Clicked link between ${source} and ${target}`);
// };

// const onRightClickLink = function(event, source, target) {
//      window.alert('Right clicked link between ${source} and ${target}');
// };

// const onMouseOverLink = function(source, target) {
//      window.alert(`Mouse over in link between ${source} and ${target}`);
// };

// const onMouseOutLink = function(source, target) {
//      window.alert(`Mouse out link between ${source} and ${target}`);
// };

// const onNodePositionChange = function(nodeId, x, y) {
//      window.alert(`Node ${nodeId} moved to new position x= ${x} y= ${y}`);
// };

// // Callback that's called whenever the graph is zoomed in/out
// @param {number} previousZoom the previous graph zoom
// @param {number} newZoom the new graph zoom
// const onZoomChange = function(previousZoom, newZoom) {
//      window.alert(`Graph is now zoomed at ${newZoom} from ${previousZoom}`);
// };

const GraphPage = ({ data, config }) => {
     const { theme } = useTheme();
     const [filteredData, setFilteredData] = useState(null);
     const [graphConfig, setGraphConfig] = useState(config);
     
     useEffect(() => {
       const firstHierarchyNodes = data.nodes.filter(node => node.size !== 0);
       const updatedFilteredData = updateFilteredData(firstHierarchyNodes);
       setFilteredData(updatedFilteredData);
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
               // setTimeout(()=>{
               //      setGraphConfig({ ...graphConfig, staticGraph: true });
               // }, [100]);
             }
     };

     const onMouseOutNode =  ( nodeId ) => {
          const firstHierarchyNodes = data.nodes.filter(node => node.size === 2500);
          const updatedFilteredData = updateFilteredData(firstHierarchyNodes);
          setFilteredData(updatedFilteredData);
          // setGraphConfig({ ...graphConfig, staticGraph: false });
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
     
     return (
       <div>
         {filteredData && (
           <Graph
             id='graph-id' // id is mandatory, if no id is defined rd3g will throw an error
             data={filteredData}
             config={graphConfig}
             onMouseOverNode={onMouseOverNode}
             onMouseOutNode={onMouseOutNode}
           />
         )}
       </div>
     );
   };
   
   export default GraphPage;