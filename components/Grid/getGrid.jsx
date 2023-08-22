import React from 'react';
import { Node } from './Node';
import { rows, cols } from '@/components/constants/constants';

export default function getGrid() {
  let grid = [];
  let l = 0,
    h = 10;
  for (let i = 0; i < rows; i++) {
    let temp = [];
    for (let j = 0; j < cols; j++) {
      let t = Object.assign({}, Node);
      t.x = i;
      t.y = j;
      var w = Math.floor(Math.random() * (h - l)) + l;
      t.weight = w;
      temp.push(t);
    }
    grid.push(temp);
  }
  grid[0][0].isStart = true;
  grid[rows - 1][cols - 1].isEnd = true;

  return grid;
}
