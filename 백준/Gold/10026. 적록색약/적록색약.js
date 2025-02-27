let input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .split("\n");
const N = Number(input.shift());
input = input.map((e) => e.split(""));
const isVisited = Array.from({ length: N }, () => Array(N).fill(false));
const isVisitedBlind = Array.from({ length: N }, () => Array(N).fill(false));

let count = 0;
let countBlind = 0;

const dfs = (i, j, color) => {
  if (isVisited[i][j]) {
    return;
  }
  isVisited[i][j] = true;
  if (i + 1 < N && input[i + 1][j] === color) dfs(i + 1, j, input[i + 1][j]);
  if (i - 1 >= 0 && input[i - 1][j] === color) dfs(i - 1, j, input[i - 1][j]);
  if (j + 1 < N && input[i][j + 1] === color) dfs(i, j + 1, input[i][j + 1]);
  if (j - 1 >= 0 && input[i][j - 1] === color) dfs(i, j - 1, input[i][j - 1]);
};

//색약이 아닌 경우
for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (!isVisited[i][j]) {
      count++;
      dfs(i, j, input[i][j]);
    }
  }
}

let blindArr = [...input];
for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (blindArr[i][j] === "R") blindArr[i][j] = "G";
  }
}

const dfsBlind = (i, j, color) => {
  if (isVisitedBlind[i][j]) {
    return;
  }
  isVisitedBlind[i][j] = true;
  if (i + 1 < N && blindArr[i + 1][j] === color)
    dfsBlind(i + 1, j, blindArr[i + 1][j]);
  if (i - 1 >= 0 && blindArr[i - 1][j] === color)
    dfsBlind(i - 1, j, blindArr[i - 1][j]);
  if (j + 1 < N && blindArr[i][j + 1] === color)
    dfsBlind(i, j + 1, blindArr[i][j + 1]);
  if (j - 1 >= 0 && blindArr[i][j - 1] === color)
    dfsBlind(i, j - 1, blindArr[i][j - 1]);
};

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (!isVisitedBlind[i][j]) {
      countBlind++;
      dfsBlind(i, j, blindArr[i][j]);
    }
  }
}

console.log(count, countBlind);
