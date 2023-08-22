import { rows, cols } from '@/components/constants/constants';

export default function Dijkstra(grid, startIndex, endIndex) {
  var m = rows,
    n = cols;

  var queue = [];

  var dr = [-1, 0, 1, 0];
  var dc = [0, 1, 0, -1];

  var distance = [];

  for (var i = 0; i < m; i++) {
    var temp = [];
    for (var j = 0; j < n; j++) {
      temp.push(10000);
    }
    distance.push(temp);
  }
  distance[startIndex[0]][startIndex[1]] = 0;

  var visitedNodes = [];
  var parent = [];

  for (var i = 0; i < m; i++) {
    var temp = [];
    for (var j = 0; j < n; j++) {
      temp.push([-1, -1]);
    }
    parent.push(temp);
  }
  var flag = false;

  function check(i, j) {
    if (i >= 0 && j >= 0 && i < m && j < n) return true;
    return false;
  }
  queue.push([0, startIndex[0], startIndex[1]]);
  //   console.log(queue[0]);
  while (queue.length > 0) {
    queue.sort((a, b) => {
      a[0] - b[0];
    });

    var t = queue.shift();
    var dist = t[0];
    var x = t[1],
      y = t[2];
    if (grid[x][y].isWall === true) continue;
    if (x === endIndex[0] && y == endIndex[1]) {
      flag = true;
      break;
    }
    if (dist > distance[x][y]) continue;

    visitedNodes.push([x, y]);

    for (var i = 0; i < 4; i++) {
      var r = x + dr[i],
        c = y + dc[i];

      if (check(r, c)) {
        if (distance[r][c] > dist + grid[r][c].weight) {
          distance[r][c] = dist + grid[r][c].weight;
          queue.push([distance[r][c], r, c]);
          parent[r][c] = [x, y];
        }
      }
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
  return [visitedNodes, shortestPath, flag];
}
