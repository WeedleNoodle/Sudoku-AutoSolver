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
    case "SOLVE":
      const values = [1, 2, 3, 4, 5, 6, 7, 8, 9];

      for (let i = 0; i < 81; i++) {
        if (state.board[i].value !== "") {
          state.board[i].inputed = true;
        }
      }

      console.log(state.board);

      //const z = state.board[0];
      //for (let i = 0; i < 81; i++) {}

      //main loop
      for (let i = 0; i < 1; i++) {
        //if (!inputed) {
        let voidNumbers = [];
        let x = state.board[i].x;
        let y = state.board[i].y;
        let group = state.board[i].group;
        console.log("The tile being compared is: ", state.board[i]);

        for (let j = 0; j < 81; j++) {
          /*if (j === 0) {
            console.log("state.board[0].value je", state.board[j].value);
            console.log("state.board[0] je", state.board[j]);
          }*/
          if (
            (y === state.board[j].y && state.board[j].value !== "") ||
            (x === state.board[j].x && state.board[j].value !== "") ||
            (group === state.board[j].group && state.board[j].value !== "")
          ) {
            console.log(state.board[j].value);
            voidNumbers.push(Number(state.board[j].value));
          }
        }
        console.log(voidNumbers);

        for (let num of values) {
          if (!voidNumbers.includes(num)) {
            state.board[i].value = String(num);
            break;
          }
        }
        console.log(state.board);
        console.log(state.board[i]);
        console.log(state.board[i].value);
      }
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
