import React, { useState } from 'react';
import { Stage, Layer, Line } from 'react-konva';

const Whiteboard: React.FC = () => {
  const [lines, setLines] = useState([]);

  const handleMouseDown = (e) => {
    const pos = e.target.getStage().getPointerPosition();
    setLines([...lines, { points: [pos.x, pos.y] }]);
  };

  const handleMouseMove = (e) => {
    if (lines.length === 0) {
      return;
    }

    const pos = e.target.getStage().getPointerPosition();
    let lastLine = lines[lines.length - 1];
    lastLine.points = lastLine.points.concat([pos.x, pos.y]);

    setLines([...lines.slice(0, -1), lastLine]);
  };

  return (
    <Stage
      width={window.innerWidth}
      height={window.innerHeight}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
    >
      <Layer>
        {lines.map((line, i) => (
          <Line
            key={i}
            points={line.points}
            stroke="#000"
            strokeWidth={5}
            tension={0.5}
            lineCap="round"
          />
        ))}
      </Layer>
    </Stage>
  );
};

export default Whiteboard;
