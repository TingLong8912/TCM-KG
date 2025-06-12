// components/VoronoiDiagram.js
import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

interface VoronoiDiagramProps {
  width: number;
  height: number;
  points: [number, number][];
}

const VoronoiDiagram: React.FC<VoronoiDiagramProps> = ({ width, height, points }) => {
  const svgRef = useRef(null);

  useEffect(() => {
    const svg = d3.select(svgRef.current);
    
    // Clear any previous drawings
    svg.selectAll('*').remove();

    // Create Delaunay triangulation and Voronoi diagram
    const delaunay = d3.Delaunay.from(points);
    const voronoi = delaunay.voronoi([0, 0, width, height]);

    svg.append('g')
      .selectAll('path')
      .data(points.map((_, i) => voronoi.cellPolygon(i)).filter(d => d))
      .enter()
      .append('path')
      .attr('d', d => `M${d.map(point => point.join(',')).join('L')}Z`)
      .attr('fill', 'none')
      .attr('stroke', 'black');

  }, [points, width, height]);

  return (
    <svg ref={svgRef} width={width} height={height} style={{ position: 'absolute', top: 0, left: 0, zIndex: 1 }}></svg>
  );
};

export default VoronoiDiagram;
