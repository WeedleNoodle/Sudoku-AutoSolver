import React, { useEffect, useState } from "react";
import Tile from "./Tile";
import useBoardContext from "../hooks/useBoardContext";
import { boardMaker } from "../utils/boardMaker";
import SolveButton from "./SolveButton";

const Board = () => {
  const { dispatch, state } = useBoardContext();
  const [solved, setSolved] = useState(false);

  const solve = () => {
    setSolved(true);
  };

  useEffect(() => {
    dispatch({ type: "SET-BOARD", payload: boardMaker() });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="container">
      {!solved && (
        <div className="tilesDiv">
          {state.board.map((el) => (
            <Tile key={el.id} id={el.id} x={el.x} y={el.y} odd={el.odd} />
          ))}
        </div>
      )}
      {solved && (
        <div className="tilesDiv">
          {state.board.map((el) => (
            <Tile
              key={el.id}
              id={el.id}
              x={el.x}
              y={el.y}
              odd={el.odd}
              value={el.value}
            />
          ))}
        </div>
      )}
      <SolveButton solve={solve}></SolveButton>
    </div>
  );
};

export default Board;
