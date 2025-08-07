let input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input.shift().split(" ").map(Number);

const arr = input.shift().split(" ").map(Number);
let dp = Array(N + 1).fill(0);

for (let i = 1; i < arr.length + 1; i++) {
  dp[i] = dp[i - 1] + arr[i - 1];
}

input = input.map((e) => e.split(" ").map(Number));

for (let [x1, x2] of input) {
  console.log(dp[x2] - dp[x1 - 1]);
}
