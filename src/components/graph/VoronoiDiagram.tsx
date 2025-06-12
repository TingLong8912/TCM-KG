// components/VoronoiDiagram.js
import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const VoronoiDiagram = ({ width, height, points }) => {
  const svgRef = useRef(null);

  useEffect(() => {
    const svg = d3.select(svgRef.current);
    
    // Clear any previous drawings
    svg.selectAll('*').remove();

    const voronoi = d3.voronoi()
      .extent([[0, 0], [width, height]]);

    const diagram = voronoi(points);
  
    const cells = diagram.polygons().filter(d => d);  // Filter out null values

    svg.append('g')
      .selectAll('path')
      .data(cells)
      .enter()
      .append('path')
      .attr('d', d => `M${d.join('L')}Z`)
      .attr('fill', 'none')
      .attr('stroke', 'black');

  }, [points, width, height]);

  return (
    <svg ref={svgRef} width={width} height={height} style={{ position: 'absolute', top: 0, left: 0, zIndex: 1 }}></svg>
  );
};

export default VoronoiDiagram;
