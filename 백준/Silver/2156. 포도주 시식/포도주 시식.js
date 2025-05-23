let input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const N = input.shift();

//최대로 마실 수 있는 포도주의 양
//매일 달라지는 포도주의 양
//연속해서 몇잔 마셨는지

// dp[i][0] = i번째 잔을 마시지 않은 경우
// dp[i][1] = i번째 잔을 마시고 전잔은 안마심
// dp[i][2] = i번째 잔을 마시고 전잔도 마심
let dp = Array.from({ length: N }, () => [0, 0, 0]);
dp[0][0] = 0;
dp[0][1] = input[0];
dp[0][2] = input[0];

for (let i = 1; i < N; i++) {
  dp[i][0] = Math.max(...dp[i - 1]);
  dp[i][1] = dp[i - 1][0] + input[i];
  dp[i][2] = dp[i - 1][1] + input[i];
}

console.log(Math.max(...dp[N - 1]));
