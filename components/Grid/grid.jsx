'use client';
import React, { useRef } from 'react';
import getGrid from './getGrid';
import { useState, useEffect } from 'react';
import { useParams } from '@/context/stateManager';
import Image from 'next/image';
import Bfs from '../algorithms/bfs';
import Dfs from '../algorithms/dfs';
import Dijkstra from '../algorithms/dijkstra';
import '@/app/globals.css';
import path from 'path';
import { rows, cols } from '@/components/constants/constants';
import { recursiveDivisionMaze } from '@/components/mazeAlgorithms/recursive-division';
import randomMaze from '@/components/mazeAlgorithms/random-maze';
import { Node } from '../Grid/Node.jsx';

export default function Grid() {
  const {
    mode,
    algorithm,
    maze,
    grid,
    startIndex,
    endIndex,
    setstartIndex,
    setendIndex,
    setgrid,
    reset,
    isrunning,
    setisrunning,
    edit,
    setedit,
    resetdisable,
    setmazedisable,
    mazedisable,
    setresetdisable,
  } = useParams();

  // MODE VALUE SETTER USING STATE VARIABLE
  // -------------------------------------------
  const [modevalue, setmodevalue] = React.useState(new Set('Walls'));
  const tempModeValue = React.useMemo(
    () => Array.from(mode).join(', ').replaceAll('_', ' '),
    [mode]
  );
  useEffect(() => {
    setmodevalue(tempModeValue);
  }, [mode]);
  // -------------------------------------------
  // ALGORITHM VALUEE
  const [algoValue, setalgoValue] = React.useState(new Set('Walls'));
  const tempalgoValue = React.useMemo(
    () => Array.from(algorithm).join(', ').replaceAll('_', ' '),
    [algorithm]
  );
  useEffect(() => {
    setalgoValue(tempalgoValue);
  }, [algorithm]);
  // -------------------------------------------
  // MAZE VALUEE
  const [mazeValue, setmazeValue] = React.useState(new Set('Maze & Pattern'));
  const tempmazeValue = React.useMemo(
    () => Array.from(maze).join(', ').replaceAll('_', ' '),
    [maze]
  );
  useEffect(() => {
    setmazeValue(tempmazeValue);
    if (tempmazeValue === 'Recursive Division') {
      var walls = recursiveDivisionMaze(grid, startIndex, endIndex);

      for (var i = 0; i < walls.length; i++) {
        var x = walls[i][0],
          y = walls[i][1];
        // setTimeout(() => {
        grid[x][y].isWall = true;
        // }, 10 * i);
      }
      setmazedisable(true);
    }
    if (tempmazeValue === 'Random Maze') {
      var walls = randomMaze(grid, startIndex, endIndex);

      for (var i = 0; i < walls.length; i++) {
        var x = walls[i][0],
          y = walls[i][1];
        // setTimeout(() => {
        grid[x][y].isWall = true;
        // }, 10 * i);
      }
      setmazedisable(true);
    }
  }, [maze]);
  // -------------------------------------------

  const [refgrid, setrefgrid] = useState(grid);

  function getrefgrid() {
    let array = [];
    grid.forEach((element) => {
      element.forEach((child) => {
        array.push(useRef());
      });
    });
    return array;
  }

  function animateShortestPath(Path) {
    var t = 50;
    for (var i = 0; i < Path.length; i++) {
      const node = Path[i];
      setTimeout(() => {
        if (JSON.stringify(node) != JSON.stringify(startIndex))
          document.getElementById(`${node[0]}-${node[1]}`).className =
            'node node-shortest-path';
      }, 50 * i);
    }
    setTimeout(function () {
      setresetdisable(false);
    }, 1200);
  }

  // Runn THe ALGORITHM
  useEffect(() => {
    if (!isrunning) return;
    if (algoValue === 'Breadth-first Search') {
      // BFS BFS BFS BFS BFS BFS BFS BFS BFS BFS BFS BFS BFS BFS BFS BFS BFS BFS BFS BFS BFS BFS BFS BFS
      var newgrid = [];
      for (var i = 0; i < rows; i++) {
        let temp = [];
        for (var j = 0; j < cols; j++) {
          let t = Object.assign({}, Node);
          // console.log(t);
          t.x = i;
          t.y = j;
          t.isWall = grid[i][j].isWall;
          t.weight = grid[i][j].weight;
          t.isStart = grid[i][j].isStart;
          t.isEnd = grid[i][j].isEnd;
          temp.push(t);
        }
        newgrid.push(temp);
      }
      const values = Bfs(newgrid, startIndex, endIndex);
      const Path = values[0];
      const shortestPath = values[1];
      const flag = values[2];
      for (let i = 0; i < Path.length; i++) {
        if (i === Path.length - 1 && flag) {
          setTimeout(() => {
            animateShortestPath(shortestPath);
          }, 10 * i);
          return;
        }
        setTimeout(() => {
          const node = Path[i];
          if (
            JSON.stringify(node) != JSON.stringify(startIndex) &&
            JSON.stringify(node) != JSON.stringify(endIndex)
          )
            document.getElementById(`${node[0]}-${node[1]}`).className =
              'node node-visited';
        }, 10 * i);
      }
      if (!flag) setresetdisable(false);
    }
    if (algoValue === 'Deapth-first Search') {
      // DFS DFS DFS DFS DFS DFS DFS DFS DFS DFS DFS DFS DFS DFS DFS DFS DFS DFS DFS DFS DFS DFS DFS DFS
      var newgrid = [];
      for (var i = 0; i < rows; i++) {
        let temp = [];
        for (var j = 0; j < cols; j++) {
          let t = Object.assign({}, Node);
          // console.log(t);
          t.x = i;
          t.y = j;
          t.isWall = grid[i][j].isWall;
          t.weight = grid[i][j].weight;
          t.isStart = grid[i][j].isStart;
          t.isEnd = grid[i][j].isEnd;
          temp.push(t);
        }
        newgrid.push(temp);
      }
      const values = Dfs(newgrid, startIndex, endIndex);
      const Path = values[0];
      const shortestPath = values[1];
      const flag = values[2];
      for (let i = 0; i < Path.length; i++) {
        if (i === Path.length - 1 && flag) {
          setTimeout(() => {
            animateShortestPath(shortestPath);
          }, 10 * i);
          return;
        }
        setTimeout(() => {
          const node = Path[i];
          if (
            JSON.stringify(node) != JSON.stringify(startIndex) &&
            JSON.stringify(node) != JSON.stringify(endIndex)
          )
            document.getElementById(`${node[0]}-${node[1]}`).className =
              'node node-visited';
        }, 10 * i);
      }
      if (!flag) setresetdisable(false);
    }
    if (algoValue === 'Dijkstra algorithm') {
      // DIJKSTRA DIJKSTRA DIJKSTRA DIJKSTRA DIJKSTRA DIJKSTRA DIJKSTRA DIJKSTRA DIJKSTRA DIJKSTRA DIJKSTRA DIJKSTRA
      var newgrid = [];
      for (var i = 0; i < rows; i++) {
        let temp = [];
        for (var j = 0; j < cols; j++) {
          let t = Object.assign({}, Node);
          // console.log(t);
          t.x = i;
          t.y = j;
          t.isWall = grid[i][j].isWall;
          t.weight = grid[i][j].weight;
          t.isStart = grid[i][j].isStart;
          t.isEnd = grid[i][j].isEnd;
          temp.push(t);
        }
        newgrid.push(temp);
      }

      const values = Dijkstra(newgrid, startIndex, endIndex);
      const Path = values[0];
      const shortestPath = values[1];
      const flag = values[2];
      for (let i = 0; i < Path.length; i++) {
        if (i === Path.length - 1 && flag) {
          setTimeout(() => {
            animateShortestPath(shortestPath);
          }, 10 * i);
          return;
        }
        setTimeout(() => {
          const node = Path[i];
          if (
            JSON.stringify(node) != JSON.stringify(startIndex) &&
            JSON.stringify(node) != JSON.stringify(endIndex)
          )
            document.getElementById(`${node[0]}-${node[1]}`).className =
              'node node-visited';
        }, 10 * i);
      }
      if (!flag) setresetdisable(false);
    }

    setisrunning(false);
  }, [isrunning]);

  // SET BACKGROUND BLACK WHEN RESET IS CLICKED
  useEffect(() => {
    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[0].length; j++) {
        grid[i][j].isWall = false;
        document.getElementById(`${i}-${j}`).className = 'node bg-black';
      }
    }
    if (!reset) {
      setgrid(getGrid());
      setrefgrid(grid);
    }
  }, [reset]);

  return (
    <section>
      <div className='box'>
        {refgrid.map((item, index) => {
          return (
            <div key={index} className='rows'>
              {item.map((cell, cellindex) => {
                let color = 'bg-black';
                let imgName = '';
                if (grid[index][cellindex].isStart) {
                  imgName = 'start';
                }
                if (grid[index][cellindex].isEnd) {
                  imgName = 'end';
                }
                if (grid[index][cellindex].isWall) color = 'bg-wall';
                return (
                  <div
                    key={cellindex}
                    id={`${index}-${cellindex}`}
                    className={`node ${color}`}
                    onClick={() => {
                      if (modevalue == 'Move StartPoint') {
                        if (index === endIndex[0] && cellindex == endIndex[1])
                          return;
                        var newgrid = grid.map((elem) => {
                          return elem.map((elem) => {
                            if (!elem.isStart) return elem;
                            return { ...elem, isStart: false };
                          });
                        });
                        newgrid[index][cellindex] = {
                          ...newgrid[index][cellindex],
                          isStart: true,
                          isWall: false,
                        };
                        setgrid(newgrid);
                        setstartIndex([index, cellindex]);
                        return;
                      }
                      if (modevalue == 'Move EndPoint') {
                        if (
                          index === startIndex[0] &&
                          cellindex == startIndex[1]
                        )
                          return;
                        var newgrid = grid.map((elem) => {
                          return elem.map((elem) => {
                            if (!elem.isEnd) return elem;
                            return { ...elem, isEnd: false };
                          });
                        });
                        newgrid[index][cellindex] = {
                          ...newgrid[index][cellindex],
                          isEnd: true,
                          isWall: false,
                        };
                        setgrid(newgrid);
                        setendIndex([index, cellindex]);
                        return;
                      }
                    }}
                    onMouseDown={() => setedit(true)}
                    onMouseUp={() => setedit(false)}
                    onMouseMove={() => {
                      if (!edit) return;
                      if (
                        modevalue === 'Add walls' ||
                        modevalue === 'Remove walls'
                      ) {
                        const current = cell;
                        const startcheck =
                          index === startIndex[0] &&
                          cellindex === startIndex[1];
                        const endcheck =
                          index === endIndex[0] && cellindex === endIndex[1];
                        if (startcheck || endcheck) return;
                        var newgrid = grid.slice();
                        let val = modevalue == 'Add walls';
                        newgrid[index][cellindex] = {
                          ...newgrid[index][cellindex],
                          isWall: val,
                        };
                        setgrid(newgrid);
                        return;
                      }
                    }}
                  >
                    {grid[index][cellindex].isStart ||
                    grid[index][cellindex].isEnd ? (
                      <Image
                        className='animate-pulse'
                        src={`/assets/${imgName}.png`}
                        alt={`${imgName}`}
                        width={25}
                        height={25}
                      />
                    ) : null}
                    {algoValue === 'Dijkstra algorithm' &&
                    !grid[index][cellindex].isStart &&
                    !grid[index][cellindex].isEnd &&
                    !grid[index][cellindex].isWall
                      ? cell.weight
                      : null}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </section>
  );
}
