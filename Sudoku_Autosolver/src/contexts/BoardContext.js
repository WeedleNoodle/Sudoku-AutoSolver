import { createContext, useReducer } from "react";

export const BoardContext = createContext();

export const boardReducer = (state, action) => {
  switch (action.type) {
    case "SET-BOARD":
      return {
        board: action.payload,
      };
    case "FILL-FIELD":
      // console.log(state.board[action.payload.id - 1]);
      state.board[action.payload.id - 1].value = action.payload.value;
      return state;
    default:
      return state;
  }
};

export const BoardContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(boardReducer, {
    board: [],
  });

  return (
    <BoardContext.Provider value={{ state, dispatch }}>
      {children}
    </BoardContext.Provider>
  );
};

export default BoardContext;
