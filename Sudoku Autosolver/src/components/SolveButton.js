import React, { useState } from "react";
import { BoardSolver } from "../utils/boardSolver";
import useBoardContext from "../hooks/useBoardContext";
//import Tile from "./Tile";

const SolveButton = ({ solve }) => {
  const { state } = useBoardContext();
  const [solved, setSolved] = useState(false);

  const solveBtn = () => {
    //dispatch({ type: "SOLVE" });
    setSolved(!solved);
    BoardSolver(state.board);
    solve();
  };

  return (
    <div className="container">
      <button className="solveButton" onClick={solveBtn}>
        SOLVE!
      </button>
    </div>
  );
};

export default SolveButton;
