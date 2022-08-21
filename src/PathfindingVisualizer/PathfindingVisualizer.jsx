import { useEffect, useState } from "react";
import Node from "./Node/Node";

import styles from "./PathfindingVisualizer.module.css";

const START_ROW = 10;
const START_COL = 15;
const FINISH_ROW = 10;
const FINISH_COL = 35;

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

  const visualizeDijkstra = () => {
    const { grid } = this.state;
    const startNode = grid[START_NODE_ROW][START_NODE_COL];
    const finishNode = grid[FINISH_NODE_ROW][FINISH_NODE_COL];
    const visitedNodesInOrder = dijkstra(grid, startNode, finishNode);
    const nodesInShortestPathOrder = getNodesInShortestPathOrder(finishNode);
    this.animateDijkstra(visitedNodesInOrder, nodesInShortestPathOrder);
  };

  return (
    <div>
      <button onClick={() => this.visualizeDijkstra()}>
        Visualize Dijkstra's Algorithm
      </button>
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
    </div>
  );
};

export default PathfindingVisualizer;
