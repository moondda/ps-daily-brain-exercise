let input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input.shift().split(" ").map(Number);

input = input.map((e) => e.split("").map(Number));

//0 이동가능, 1 벽

let isVisited = Array.from({ length: N }, () => Array(M).fill(false));
let countArr = Array.from({ length: N }, () => Array(M).fill(Infinity));
let pointer = 0;
let countMap = new Map();

const dfs2 = (x, y) => {
  //상하좌우로 움직이기
  let dx = [-1, 0, 1, 0];
  let dy = [0, -1, 0, 1];

  let count = 1;

  for (let k = 0; k < 4; k++) {
    const nextX = x + dx[k];
    const nextY = y + dy[k];

    if (nextX < 0 || nextX > N - 1 || nextY < 0 || nextY > M - 1) continue;

    if (!isVisited[nextX][nextY] && input[nextX][nextY] == 0) {
      countArr[nextX][nextY] = String(pointer);
      isVisited[nextX][nextY] = true;
      count += dfs2(nextX, nextY);
    }
  }
  return count;
};

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (input[i][j] == 1) continue;
    if (!isVisited[i][j]) {
      isVisited[i][j] = true;
      pointer += 1;
      countArr[i][j] = String(pointer);
      const roomCnt = dfs2(i, j);
      countMap.set(String(pointer), roomCnt);
    }
  }
}

let ans = Array.from({ length: N }, () => Array(M).fill(0));

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (input[i][j] == 0) {
      continue;
    }
    let visitSet = new Set();
    let dx = [-1, 0, 1, 0];
    let dy = [0, -1, 0, 1];
    let count = 1;

    for (let k = 0; k < 4; k++) {
      const nextX = i + dx[k];
      const nextY = j + dy[k];
      if (nextX < 0 || nextX > N - 1 || nextY < 0 || nextY > M - 1) continue;
      if (input[nextX][nextY] == 0) {
        if (!visitSet.has(countArr[nextX][nextY])) {
          count += countMap.get(countArr[nextX][nextY]);
          visitSet.add(countArr[nextX][nextY]);
        }
      }
    }
    ans[i][j] = count % 10;
  }
}

ans.map((e) => console.log(e.join("")));
