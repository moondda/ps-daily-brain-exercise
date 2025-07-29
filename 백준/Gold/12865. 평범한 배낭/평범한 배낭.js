let input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, K] = input.shift().split(" ").map(Number);

input = input.map((e) => e.split(" ").map(Number));

//dp[인덱스(가방)][무게] = 최대가치
let dp = Array.from({ length: N }, () => Array(K + 1).fill(0));

for (let k = 0; k <= K; k++) {
  if (input[0][0] <= k) dp[0][k] = input[0][1];
}

for (let i = 1; i < N; i++) {
  let [weight, value] = input[i];

  for (let k = 0; k <= K; k++) {
    if (k >= weight)
      dp[i][k] = Math.max(dp[i - 1][k], dp[i - 1][k - weight] + value);
    else dp[i][k] = dp[i - 1][k];
  }
}

console.log(dp[N - 1][K]);
