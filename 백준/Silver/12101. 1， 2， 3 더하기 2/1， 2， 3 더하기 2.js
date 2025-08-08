let input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, k] = input.shift().split(" ").map(Number);

let dp = Array(N + 1).fill(1);

dp[1] = 1;
dp[2] = 2;
//1+2 2+1 3
//dp[3] = dp[2] + dp[1] + dp[0];
//1+3 2+2 3+1
//dp[4] = dp[3] + dp[2] + dp[1];
// //1+4 2+3 3+2
// dp[5] = dp[4] + dp[3] + dp[2];

for (let i = 3; i <= N; i++) {
  dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3];
}

if (dp[N] < k) console.log("-1");
else {
  let counter = 0;
  let currIndex = N;
  const result = [];
  while (counter < k) {
    for (let i = 1; i <= 3; i++) {
      counter += dp[currIndex - i];
      if (counter >= k) {
        counter -= dp[currIndex - i];
        result.push(i);
        currIndex = currIndex - i;
        break;
      }
    }
  }

  console.log(result.join("+"));
}
