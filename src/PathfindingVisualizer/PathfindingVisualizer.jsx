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
          currentRow.push([]);
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
          <div>
            {row.map((node, nodeIndex) => (
              <Node />
            ))}
          </div>
        );
      })}
    </div>
  );
};

export default PathfindingVisualizer;
