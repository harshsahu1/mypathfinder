import { rows, cols } from '@/components/constants/constants';
export default function Bfs(newGrid, startIndex, endIndex) {
  var queue = [];
  var sequence = [];
  const m = rows,
    n = cols;
  queue.push([startIndex[0], startIndex[1]]);
  newGrid[startIndex[0]][startIndex[1]].isVisited = true;

  var parent = [];

  for (var i = 0; i < m; i++) {
    var temp = [];
    for (var j = 0; j < n; j++) {
      temp.push([-1, -1]);
    }
    parent.push(temp);
  }
  var flag = false;
  while (queue.length > 0) {
    var top = queue.shift();
    var a = top[0],
      b = top[1];

    if (newGrid[a][b].isWall === true) continue;

    sequence.push(top);
    if (a === endIndex[0] && b === endIndex[1]) {
      flag = true;
      break;
    }

    if (a + 1 < m && newGrid[a + 1][b].isVisited === false) {
      queue.push([a + 1, b]);
      newGrid[a + 1][b].isVisited = true;
      parent[a + 1][b] = [a, b];
    }
    if (a - 1 >= 0 && newGrid[a - 1][b].isVisited === false) {
      queue.push([a - 1, b]);
      newGrid[a - 1][b].isVisited = true;
      parent[a - 1][b] = [a, b];
    }
    if (b - 1 >= 0 && newGrid[a][b - 1].isVisited === false) {
      queue.push([a, b - 1]);
      newGrid[a][b - 1].isVisited = true;
      parent[a][b - 1] = [a, b];
    }
    if (b + 1 < n && newGrid[a][b + 1].isVisited === false) {
      queue.push([a, b + 1]);
      newGrid[a][b + 1].isVisited = true;
      parent[a][b + 1] = [a, b];
    }
  }
  var x = endIndex[0],
    y = endIndex[1];
  var shortestPath = [];

  while (flag && (x != startIndex[0] || y != startIndex[1])) {
    shortestPath.push(parent[x][y]);
    var a = parent[x][y][0];
    var b = parent[x][y][1];
    (x = a), (y = b);
  }

  return [sequence, shortestPath, flag];
}
