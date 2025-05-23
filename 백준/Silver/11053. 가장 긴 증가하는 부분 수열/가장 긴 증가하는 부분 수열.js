let input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const N = Number(input.shift());

input = input.map((e) => e.split(" ").map(Number))[0];

let dp = Array(N).fill(1);

for (let i = 1; i < N; i++) {
  for (let j = 0; j < i; j++) {
    if (input[j] < input[i]) {
      dp[i] = Math.max(dp[j] + 1, dp[i]);
    }
  }
}

console.log(Math.max(...dp));
