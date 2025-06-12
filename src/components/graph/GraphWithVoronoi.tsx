import React from 'react';
import { Graph } from 'react-d3-graph';
import VoronoiDiagram from '@/components/graph/VoronoiDiagram';


const GraphWithVoronoi = ({ graphData, graphConfig, onNodePositionChange }) => {
  const width = 1920/3*2; // Example width
  const height = 1080; // Example height

  // Example points for Voronoi diagram
  const points = graphData.nodes.map((node) => [node.x, node.y]);
  
  return (
    <div style={{ position: 'relative', width, height }}>
      <div style={{ position: 'absolute', top: 0, left: 0, zIndex: 1 }}>
        <VoronoiDiagram width={width} height={height} points={points} />
      </div>
      <div style={{ position: 'absolute', top: 0, left: 0, zIndex: 2 }}>
        <Graph
          id="graph-id"
          data={graphData}
          config={graphConfig}
          onNodePositionChange={onNodePositionChange}
        />
      </div>
    </div>
  );
};

export default GraphWithVoronoi;