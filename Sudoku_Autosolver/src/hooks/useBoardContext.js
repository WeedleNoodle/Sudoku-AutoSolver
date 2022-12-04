import BoardContext from "../contexts/BoardContext";
import { useContext } from "react";

const useBoardContext = () => {
  const context = useContext(BoardContext);

  if (!context) {
    throw Error("useBoardContext must be uesd inside a BoardContextProvider");
  }

  return context;
};

export default useBoardContext;
