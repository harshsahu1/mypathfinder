export default function randomMaze(grid, startNode, finishNode) {
  if (!startNode || !finishNode || startNode === finishNode) {
    return false;
  }
  let walls = [];
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      if (
        (row === startNode[0] && col === startNode[1]) ||
        (row === finishNode[0] && col === finishNode[1])
      )
        continue;
      if (Math.random() < 0.33) {
        walls.push([row, col]);
      }
    }
  }
  walls.sort(() => Math.random() - 0.5);
  return walls;
}
