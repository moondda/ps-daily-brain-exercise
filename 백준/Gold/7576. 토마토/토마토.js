let input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input[0].split(" ").map(Number);
input = input.slice(1).map((e) => e.split(" ").map(Number));

let totalCount = 0;
let friedArr = [];
for (let i = 0; i < M; i++) {
  for (let j = 0; j < N; j++) {
    if (input[i][j] === 1) {
      totalCount++;
      friedArr.push([i, j]);
    }
    if (input[i][j] === 0) {
      totalCount++;
    }
  }
}

let isVisited = Array.from({ length: M }, () => Array(N).fill(false));
let currCount = 0;
const queue = [];

for (let [x, y] of friedArr) {
  if (!isVisited[x][y]) {
    isVisited[x][y] = true;
    currCount++;
    queue.push([x, y, 0]);
  }
}

let lastCount = 0;
let pointer = 0;
const dx = [-1, 0, 1, 0];
const dy = [0, -1, 0, 1];

while (pointer < queue.length) {
  const [x, y, count] = queue[pointer++];
  lastCount = count;

  for (let i = 0; i < 4; i++) {
    const nextX = x + dx[i];
    const nextY = y + dy[i];

    if (
      nextX >= 0 && nextX < M &&
      nextY >= 0 && nextY < N &&
      !isVisited[nextX][nextY] &&
      input[nextX][nextY] === 0
    ) {
      isVisited[nextX][nextY] = true;
      input[nextX][nextY] = 1;
      currCount++;
      queue.push([nextX, nextY, count + 1]);
    }
  }
}

if (currCount === totalCount) {
  console.log(lastCount);
} else {
  console.log(-1);
}
