const helperFunc2 = (board, index, voidNumbers) => {
  let value = Number(board[index].value);
  const toBeLooped = 9 - value;
  for (let j = toBeLooped; j > 0; j--) {
    let numToCheck = 10 - j;
    if (!voidNumbers.includes(numToCheck)) {
      return numToCheck;
    }
  }
  return false;
};

// function thats called when no value can be inputed
const helperFunc = (board, index) => {
  const values = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const i = index - 1;
  let x = board[i].x;
  let y = board[i].y;
  let group = board[i].group;
  let voidNumbers = [];

  // what executes if the tile hasn't been inputed by the user
  if (!board[i].inputed) {
    // loop to check for void numbers
    for (let j = 0; j < 81; j++) {
      if (
        (y === board[j].y && board[j].value !== "") ||
        (x === board[j].x && board[j].value !== "") ||
        (group === board[j].group && board[j].value !== "")
      ) {
        if (voidNumbers.includes(Number(board[j].value)) === false) {
          voidNumbers.push(Number(board[j].value));
        }
      }
    }

    // what executes if it can't assign a new value to board[i]
    if (voidNumbers.length === 9) {
      board[i].value = "";
      helperFunc(board, i);
      // what executes if it possibly can assign a new value
    } else if (voidNumbers.length < 9) {
      let numToReplace = helperFunc2(board, i, voidNumbers);
      if (numToReplace) {
        board[i].value = String(numToReplace);
      } else if (!numToReplace) {
        board[i].value = "";
        helperFunc(board, i);
      }
    }
  } else if (board[i].inputed) {
    helperFunc(board, i);
  }

  let voidNumbers1 = [];
  if (!board[index].inputed) {
    for (let j = 0; j < 81; j++) {
      if (
        (board[index].y === board[j].y && board[j].value !== "") ||
        (board[index].x === board[j].x && board[j].value !== "") ||
        (board[index].group === board[j].group && board[j].value !== "")
      ) {
        if (voidNumbers1.includes(Number(board[j].value)) === false) {
          voidNumbers1.push(Number(board[j].value));
        }
      }
    }

    if (voidNumbers1.length < 9) {
      //executes if it can continue with the original tile
      for (let num of values) {
        if (!voidNumbers1.includes(num)) {
          board[index].value = String(num);
          break;
        }
      }
    } else if (voidNumbers1.length === 9) {
      helperFunc(board, index);
    }
  }
};

//
//
//
//

export const BoardSolver = (board) => {
  const values = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  //check which values the user inputed
  for (let i = 0; i < 81; i++) {
    if (board[i].value !== "") {
      board[i].inputed = true;
    }
  }

  //main loop
  for (let i = 0; i < 81; i++) {
    const inputed = board[i].inputed;
    if (!inputed) {
      let voidNumbers = [];
      let x = board[i].x;
      let y = board[i].y;
      let group = board[i].group;

      for (let j = 0; j < 81; j++) {
        if (
          (y === board[j].y && board[j].value !== "") ||
          (x === board[j].x && board[j].value !== "") ||
          (group === board[j].group && board[j].value !== "")
        ) {
          if (voidNumbers.includes(Number(board[j].value)) === false) {
            voidNumbers.push(Number(board[j].value));
          }
        }
      }
      if (voidNumbers.length < 9) {
        for (let num of values) {
          if (!voidNumbers.includes(num)) {
            board[i].value = String(num);
            break;
          }
        }
      } else if (voidNumbers.length === 9) {
        helperFunc(board, i);
      }
    }
  }
};
