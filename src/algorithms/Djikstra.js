const node = {
  row,
  col,
  isVisited,
  distance,
  weight,
};

function dijkstra(graph, startNode, finishNode) {
  if (!startNode || !finishNode || startNode === finishNode) {
    return false;
  }

  graph[startNode].distance = 0;
  unVisitedNodes = graph.slice();

  while (unVisitedNodes.length !== 0) {
    sortNodesByDistance(unVisitedNodes);
    const closestNode = unVisitedNodes.shift();
  }
  closestNode.isVisited = true;
  if (closestNode === finishNode) return "success";
  updateNeighbors(closestNode, graph);
}

function sortNodesByDistance(unVisitedNodes) {
  unVisitedNodes.sort((nodeA, nodeB) => nodeB.distance - nodeA.distance);
}

function updateUnvisitedNeighbors(node, graph) {
  const unvisitedNeighbors = getUnvisitedNeighbors(node, graph);
  for (const neighbor of unvisitedNeighbors) {
    neighbor.distance = node.distance + 1;
    neighbor.previousNode = node;
  }
}

function getUnvisitedNeighbors(node, graph) {
  const neighbors = [];
  const { col, row } = node;
  if (row > 0) neighbors.push(graph[row - 1][col]);
  if (row < graph.length - 1) neighbors.push(graph[row + 1][col]);
  if (col > 0) neighbors.push(graph[row][col - 1]);
  if (col < graph[0].length - 1) neighbors.push(graph[row][col + 1]);
  return neighbors.filter((neighbor) => !neighbor.isVisited);
}
