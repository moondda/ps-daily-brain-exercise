let [N, target] = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .split("\n")
  .map(Number);

const board = Array.from({ length: N }, () => Array(N).fill(0));

const direction = ["D", "R", "T", "L"];
let dirIndex = 0;
let value = N * N;
let [currY, currX] = [0, 0];

let targetPos = [];

while (
  currY >= 0 &&
  currY < N &&
  currX >= 0 &&
  currX < N &&
  board[currY][currX] === 0
) {
  board[currY][currX] = value;

  if (value === target) {
    targetPos.push(currY + 1, currX + 1);
  }

  if (value == 1) break; //중앙이 1이면 break;
  value--;

  const dir = direction[dirIndex % 4];

  if (dir === "D") {
    if (currY + 1 < N && board[currY + 1][currX] === 0) currY += 1;
    else {
      currX += 1;
      dirIndex++;
    }
  } else if (dir === "R") {
    if (currX + 1 < N && board[currY][currX + 1] === 0) currX += 1;
    else {
      currY -= 1;
      dirIndex++;
    }
  } else if (dir === "T") {
    if (currY - 1 >= 0 && board[currY - 1][currX] === 0) currY -= 1;
    else {
      currX -= 1;
      dirIndex++;
    }
  } else if (dir === "L") {
    if (currX - 1 >= 0 && board[currY][currX - 1] === 0) currX -= 1;
    else {
      currY += 1;
      dirIndex++;
    }
  }
}

board.forEach((row) => console.log(row.join(" ")));
console.log(...targetPos);
