let input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");
const N = +input.shift();

input = input.map((e) => e.split(" ").map(Number));

let countArr = Array(3).fill(0);

const recursive = (x, y, size) => {
  const comp = input[x][y];
  let isOne = true;
  if (size == 1) {
    countArr[comp + 1] += 1;
    return;
  }
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      if (input[x + i][y + j] !== comp) {
        const newSize = size / 3;
        for (let k = 0; k < 3; k++) {
          for (let p = 0; p < 3; p++) {
            recursive(x + newSize * k, y + newSize * p, newSize);
          }
        }
        isOne = false;
        break;
      }
    }
    if (!isOne) break;
  }
  if (isOne) countArr[comp + 1] += 1;
};
//O(N^2 + 9 ( N/3*N/3))
recursive(0, 0, N);
console.log(countArr.join("\n"));
