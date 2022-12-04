export const boardMaker = () => {
  const tileList = [];
  for (let i = 1; i <= 81; i++) {
    tileList.push({
      id: i,
      x: i % 9 !== 0 ? i % 9 : (i % 9) + 9,
      y: i % 9 !== 0 ? Math.floor(i / 9 + 1) : i / 9,
      value: "",
    });
  }
  for (let i = 0; i < 81; i++) {
    if (tileList[i].x <= 3 && tileList[i].y <= 3) {
      tileList[i].group = 1;
    }
    if (4 <= tileList[i].x && tileList[i].x <= 6 && tileList[i].y <= 3) {
      tileList[i].group = 2;
    }
    if (7 <= tileList[i].x && tileList[i].x <= 9 && tileList[i].y <= 3) {
      tileList[i].group = 3;
    }
    if (tileList[i].x <= 3 && 4 <= tileList[i].y && tileList[i].y <= 6) {
      tileList[i].group = 4;
    }
    if (
      tileList[i].x >= 4 &&
      tileList[i].x <= 6 &&
      4 <= tileList[i].y &&
      tileList[i].y <= 6
    ) {
      tileList[i].group = 5;
    }
    if (
      tileList[i].x >= 7 &&
      tileList[i].x <= 9 &&
      tileList[i].y >= 4 &&
      tileList[i].y <= 6
    ) {
      tileList[i].group = 6;
    }
    if (
      tileList[i].x >= 1 &&
      tileList[i].x <= 3 &&
      tileList[i].y >= 7 &&
      tileList[i].y <= 9
    ) {
      tileList[i].group = 7;
    }
    if (
      tileList[i].x >= 4 &&
      tileList[i].x <= 7 &&
      tileList[i].y >= 7 &&
      tileList[i].y <= 9
    ) {
      tileList[i].group = 8;
    }
    if (
      tileList[i].x >= 7 &&
      tileList[i].x <= 9 &&
      tileList[i].y >= 7 &&
      tileList[i].y <= 9
    ) {
      tileList[i].group = 9;
    }
  }
  for (let i = 0; i < 81; i++) {
    if (tileList[i].group % 2 === 1) {
      tileList[i].odd = true;
    } else {
      tileList[i].odd = false;
    }
  }

  return tileList;
};
