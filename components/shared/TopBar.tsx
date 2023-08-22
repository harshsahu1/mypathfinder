'use client';
import React, { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { NextUIProvider } from '@nextui-org/react';
import { useParams } from '@/context/stateManager';
import Bfs from '../algorithms/bfs';
import { rows, cols } from '@/components/constants/constants';

import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from '@nextui-org/react';

function Topbar() {
  const {
    mode,
    setmode,
    algorithm,
    setalgorithm,
    maze,
    startIndex,
    endIndex,
    setmaze,
    grid,
    reset,
    setreset,
    isrunning,
    setisrunning,
    disable,
    setdisable,
    resetdisable,
    mazedisable,
    setmazedisable,
    setresetdisable,
  } = useParams();
  // Below Code To Set ALGORITHM set State :
  // const [selectAlgoKey, setselectAlgoKey] = React.useState(
  //   new Set(['Algorithms'])
  // );

  // const selectedValueAlgo = React.useMemo(
  //   () => Array.from(selectAlgoKey).join(', ').replaceAll('_', ' '),
  //   [selectAlgoKey]
  // );

  // const temp = selectedValueAlgo;

  // useEffect(() => {
  //   setalgorithm(selectedValueAlgo);
  // }, [selectedValueAlgo]);
  // --------------------------------------------------------
  // Below Code To Set MAZE set State :
  // const [selectMazekey, setselectMazekey] = React.useState(
  //   new Set(['Maze & Pattern'])
  // );

  // const selectMazeValue = React.useMemo(
  //   () => Array.from(selectMazekey).join(', ').replaceAll('_', ' '),
  //   [selectMazekey]
  // );

  // useEffect(() => {
  //   setmaze(selectMazeValue);
  // }, [selectMazeValue]);
  // --------------------------------------------------------
  // Below Code To Set MAZE set State :
  // const [selectModeKey, setselectModeKey] = React.useState(new Set(['Walls']));

  // const selectModeValue = React.useMemo(
  //   () => Array.from(selectModeKey).join(', ').replaceAll('_', ' '),
  //   [selectModeKey]
  // );

  // useEffect(() => {
  //   setmode(selectModeValue);
  // }, [selectModeValue]);
  // --------------------------------------------------------

  return (
    <NextUIProvider>
      <nav className='topbar'>
        <Link href='/' className='flex items-center gap-4'>
          <Image src='/assets/logo.png' alt='logo' width={28} height={28} />
          <p className='text-heading3-bold text-light-1 max-sx:hidden '>
            PathFinder
          </p>
        </Link>
        <div className='flex items-center flex-row'>
          {/* ALGORITHM SELECTION */}
          <div className='flex px-2'>
            <Dropdown>
              <DropdownTrigger>
                <Button
                  variant='bordered'
                  className='capitalize text-light-1'
                  isDisabled={disable}
                >
                  {algorithm}
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                aria-label='Single selection actions'
                variant='flat'
                disallowEmptySelection
                selectionMode='single'
                selectedKeys={algorithm}
                onSelectionChange={setalgorithm}
              >
                <DropdownItem key='Dijkstra algorithm'>
                  Dijkstra algorithm
                </DropdownItem>
                {/*<DropdownItem key='A* Search'>A* Search</DropdownItem> */}
                <DropdownItem key='Breadth-first Search'>
                  Breadth-first Search
                </DropdownItem>
                <DropdownItem key='Deapth-first Search'>
                  Deapth-first Search
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
          <div className='flex px-2'>
            {/* MAZE SELECTION */}
            <Dropdown>
              <DropdownTrigger>
                <Button
                  variant='bordered'
                  className='capitalize text-light-1'
                  isDisabled={disable || mazedisable}
                >
                  {maze}
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                aria-label='Single selection actions'
                variant='flat'
                disallowEmptySelection
                selectionMode='single'
                selectedKeys={maze}
                onSelectionChange={setmaze}
              >
                <DropdownItem key='Recursive Division'>
                  Recursive Division
                </DropdownItem>
                <DropdownItem key='Random Maze'>Random Maze</DropdownItem>
                {/* <DropdownItem key='Simple Start Pattern'>
                  Simple Start Pattern
                </DropdownItem> */}
              </DropdownMenu>
            </Dropdown>
          </div>
          <div className='flex px-2'>
            {/* MODE SELECTION(WALLS) */}
            <Dropdown>
              <DropdownTrigger>
                <Button
                  variant='bordered'
                  className='capitalize text-light-1'
                  isDisabled={disable}
                >
                  {mode}
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                aria-label='Single selection actions'
                variant='flat'
                disallowEmptySelection
                selectionMode='single'
                selectedKeys={mode}
                onSelectionChange={setmode}
              >
                <DropdownItem key='Add walls'>Add Walls</DropdownItem>
                <DropdownItem key='Remove walls'>Remove Walls</DropdownItem>
                <DropdownItem key='Move StartPoint'>
                  Move StartPoint
                </DropdownItem>
                <DropdownItem key='Move EndPoint'>Move EndPoint</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
          <div className='flex px-2'>
            <Button
              variant='bordered'
              className='text-light-1'
              isDisabled={true}
            >
              Add CheckPoint
            </Button>
          </div>
          <div className='flex px-2'>
            <Button
              variant='bordered'
              className='text-light-1'
              onClick={() => {
                setreset(true);
              }}
              isDisabled={resetdisable}
            >
              Reset
            </Button>
          </div>
          <div className='flex px-2'>
            <Button
              variant='solid'
              onClick={() => {
                setisrunning(true);
                setdisable(algorithm != 'Algorithms' ? true : false);
                setresetdisable(algorithm != 'Algorithms' ? true : false);
              }}
              isDisabled={disable}
              className='animate-pulse'
            >
              Launch
            </Button>
          </div>
        </div>
      </nav>
    </NextUIProvider>
  );
}

export default Topbar;
