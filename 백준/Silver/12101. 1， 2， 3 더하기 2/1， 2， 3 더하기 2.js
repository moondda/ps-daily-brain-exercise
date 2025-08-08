let input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

let [N, k] = input.shift().split(" ").map(Number);

let dp = Array(N + 1).fill(1);

dp[1] = 1;
dp[2] = 2;

for (let i = 3; i <= N; i++) {
  dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3];
}

if (dp[N] < k) console.log("-1");
else {
  let counter = N;
  const result = [];
  while (counter > 0) {
    const c1 = dp[counter - 1] ?? 0;
    const c2 = dp[counter - 1] + (dp[counter - 2] ?? 0);

    if (k <= c1) {
      result.push(1);
      counter -= 1;
    } else if (k <= c2) {
      result.push(2);
      k -= c1;
      counter -= 2;
    } else {
      k -= c2;
      result.push(3);
      counter -= 3;
    }
  }

  console.log(result.join("+"));
}
