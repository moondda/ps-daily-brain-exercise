let input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, K] = input.shift().split(" ").map(Number);
//N 물품 수
//K 최대 버틸 수 있는

input = input.map((e) => e.split(" ").map(Number));
input.sort((a, b) => a[1] - b[1]);

//dp[n][k]몇번째 가방,k의 무게 = 최대 가치

let dp = Array.from({ length: N }, () => Array(K + 1).fill(0));

for (let j = 0; j <= K; j++) {
  if (input[0][0] <= j) dp[0][j] = input[0][1];
}

for (let i = 1; i < input.length; i++) {
  const [weight, value] = input[i];
  for (let j = 0; j <= K; j++) {
    if (j < weight) dp[i][j] = dp[i - 1][j];
    else {
      dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - weight] + value);
    }
  }
}

console.log(dp[N - 1][K]);
