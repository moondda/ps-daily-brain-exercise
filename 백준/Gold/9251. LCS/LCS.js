let input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const [first, second] = input;

let dp = Array.from({ length: first.length + 1 }, () =>
  Array(second.length + 1).fill(0)
);

for (let i = 1; i < first.length + 1; i++) {
  for (let j = 1; j < second.length + 1; j++) {
    if (first[i - 1] === second[j - 1]) dp[i][j] = dp[i - 1][j - 1] + 1;
    else {
      dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
    }
  }
}
console.log(dp[first.length][second.length]);
