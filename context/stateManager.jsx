import { useState, useContext, createContext, useEffect } from 'react';
import getGrid from '@/components/Grid/getGrid.jsx';
import { rows, cols } from '@/components/constants/constants';

const context = createContext();

export const useParams = () => {
  return useContext(context);
};

export const ParamsProvider = ({ children }) => {
  const [mode, setmode] = useState(['Modes']); // addwall || remove wall
  const [algorithm, setalgorithm] = useState(['Algorithms']);
  const [maze, setmaze] = useState(['Maze & Pattern']);
  const [startIndex, setstartIndex] = useState([0, 0]);
  const [endIndex, setendIndex] = useState([rows - 1, cols - 1]);
  const [isrunning, setisrunning] = useState(false);
  const [disable, setdisable] = useState(false);
  const [grid, setgrid] = useState(getGrid());
  const [edit, setedit] = useState(false); // Edit Enables Edit on the screen -> Add walls, Move start and end
  const [reset, setreset] = useState(false);
  const [resetdisable, setresetdisable] = useState(false);
  const [mazedisable, setmazedisable] = useState(false);

  useEffect(() => {
    restart();
  }, [reset]);

  function restart() {
    {
      setgrid(getGrid()),
        setstartIndex([0, 0]),
        setendIndex([rows - 1, cols - 1]),
        setisrunning(false),
        setreset(false),
        setedit(false),
        setmazedisable(false),
        setmode(['Modes']),
        setdisable(false),
        setalgorithm(['Algorithms']),
        setmaze(['Maze & Pattern']);
    }
  }

  return (
    <context.Provider
      value={{
        mode,
        setmode,
        algorithm,
        setalgorithm,
        maze,
        startIndex,
        setstartIndex,
        endIndex,
        setendIndex,
        setmaze,
        isrunning,
        setisrunning,
        grid,
        setgrid,
        edit,
        setedit,
        reset,
        setreset,
        disable,
        setdisable,
        resetdisable,
        setresetdisable,
        mazedisable,
        setmazedisable,
      }}
    >
      {children}
    </context.Provider>
  );
};
