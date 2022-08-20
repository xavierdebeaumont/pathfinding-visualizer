import { useEffect, useState } from "react";
import Node from "./Node/Node";

import styles from "./PathfindingVisualizer.module.css";

const PathfindingVisualizer = (props) => {
  const [nodes, setNodes] = useState([]);

  useEffect(() => {
    const ComponentDidMount = () => {
      const nodes = [];
      for (let row = 0; row < 20; row++) {
        const currentRow = [];
        for (let col = 0; col < 50; col++) {
          const currentNode = {
            col,
            row,
            isStart: row === 10 && col === 5,
            isFinish: row === 10 && col === 45,
          };
          currentRow.push(currentNode);
        }
        nodes.push(currentRow);
      }
      setNodes(nodes);
    };
    ComponentDidMount();
  }, []);

  return (
    <div className={styles.grid}>
      {nodes.map((row, rowIndex) => {
        return (
          <div key={rowIndex} className={styles.gridRow}>
            {row.map((node, nodeIndex) => {
              const { isStart, isFinish } = node;
              return (
                <Node key={nodeIndex} isStart={isStart} isFinish={isFinish} />
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default PathfindingVisualizer;
