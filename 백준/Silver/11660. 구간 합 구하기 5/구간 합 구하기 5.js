let input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input.shift().split(" ").map(Number);

const countArr = input.splice(-M).map((e) => e.split(" ").map(Number));

input = input.map((e) => e.split(" ").map(Number));
let sum = Array.from({ length: N + 1 }, () => Array(N + 1).fill(0));

for (let i = 1; i <= N; i++) {
  for (let j = 1; j <= N; j++) {
    sum[i][j] =
      input[i - 1][j - 1] + sum[i][j - 1] + sum[i - 1][j] - sum[i - 1][j - 1];
  }
}

for (let count of countArr) {
  const [x1, y1, x2, y2] = count;
  console.log(
    sum[x2][y2] - sum[x2][y1 - 1] - sum[x1 - 1][y2] + sum[x1 - 1][y1 - 1]
  );
}
