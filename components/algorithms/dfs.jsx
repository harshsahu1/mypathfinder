import { rows, cols } from '@/components/constants/constants';
export default function Dfs(newGrid, startIndex, endIndex) {
  var sequence = [];
  var i = startIndex[0];
  var j = startIndex[1];
  var a = endIndex[0];
  var b = endIndex[1];
  newGrid[i][j].isVisited = true;
  var parent = [];
  var m = rows,
    n = cols;
  for (var l = 0; l < m; l++) {
    var temp = [];
    for (var t = 0; t < n; t++) {
      temp.push([-1, -1]);
    }
    parent.push(temp);
  }
  var flag = dfsRecursive(newGrid, -1, -1, i, j, a, b, sequence, parent);

  var x = a,
    y = b;
  var shortestPath = [];

  while (flag && (x != startIndex[0] || y != startIndex[1])) {
    shortestPath.push(parent[x][y]);
    var l = parent[x][y][0];
    var m = parent[x][y][1];
    (x = l), (y = m);
  }

  return [sequence, shortestPath, flag];
}

function dfsRecursive(newGrid, pi, pj, i, j, a, b, sequence, parent) {
  if (i === a && j === b) {
    parent[i][j] = [pi, pj];
    return true;
  }

  if (newGrid[i][j].isWall === true) return false;

  var m = newGrid.length,
    n = newGrid[0].length;
  sequence.push([i, j]);
  newGrid[i][j] = true;
  parent[i][j] = [pi, pj];
  let temp = false;

  if (i - 1 >= 0 && newGrid[i - 1][j].isVisited === false) {
    temp =
      temp || dfsRecursive(newGrid, i, j, i - 1, j, a, b, sequence, parent);
  }
  if (j + 1 < n && newGrid[i][j + 1].isVisited === false) {
    temp =
      temp || dfsRecursive(newGrid, i, j, i, j + 1, a, b, sequence, parent);
  }
  if (i + 1 < m && newGrid[i + 1][j].isVisited === false) {
    temp =
      temp || dfsRecursive(newGrid, i, j, i + 1, j, a, b, sequence, parent);
  }
  if (j - 1 >= 0 && newGrid[i][j - 1].isVisited === false) {
    temp =
      temp || dfsRecursive(newGrid, i, j, i, j - 1, a, b, sequence, parent);
  }

  return temp;
}
