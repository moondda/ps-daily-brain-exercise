let input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input.shift().split(" ").map(Number);

input = input.map((e) => e.split(" ").map(Number));

const emptyArr = [];
let wallCount = 3; // 3개 추가될거니까

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (input[i][j] === 0) emptyArr.push([i, j]);
    if (input[i][j] === 1) wallCount += 1;
  }
}

const combination = (arr, k) => {
  if (k == 1) return arr.map((e) => [e]);

  const result = [];

  arr.forEach((fixed, idx, origin) => {
    const rest = arr.slice(idx + 1);
    const combis = combination(rest, k - 1);
    const attached = combis.map((e) => [fixed, ...e]);
    result.push(...attached);
  });

  return result;
};

const emptyCombis = combination(emptyArr, 3);

let maxCount = -1;

for (let emptyCombi of emptyCombis) {
  let newInput = input.map((e) => [...e]);

  for (let [emptyX, emptyY] of emptyCombi) {
    newInput[emptyX][emptyY] = 1;
  }

  let isVisited = Array.from({ length: N }, () => Array(M).fill(false));
  let count = 0;

  const dfs = (x, y) => {
    count += 1;
    const dx = [-1, 0, 1, 0];
    const dy = [0, -1, 0, 1];

    for (let d = 0; d < 4; d++) {
      const nextX = x + dx[d];
      const nextY = y + dy[d];

      if (nextX < 0 || nextX > N - 1 || nextY < 0 || nextY > M - 1) continue;

      if (newInput[nextX][nextY] == 0 && !isVisited[nextX][nextY]) {
        newInput[nextX][nextY] = 2;
        isVisited[nextX][nextY] = true;
        dfs(nextX, nextY);
      }
    }
  };

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (!isVisited[i][j] && newInput[i][j] === 2) {
        isVisited[i][j] = true;
        dfs(i, j);
      }
    }
  }
  if (maxCount < N * M - wallCount - count) {
    maxCount = N * M - wallCount - count;
  }
}

console.log(maxCount);
