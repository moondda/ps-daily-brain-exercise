let input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const N = Number(input.shift());
let dp = Array.from({ length: N + 2 }, () => 0);

input = input.map((e) => e.split(" ").map(Number));
input.unshift([0, 0]);
//뒷날짜부터

//[상담시간,상담금액]
if (input[N][0] === 1) dp[N] = input[N][1];
for (let i = N - 1; i >= 1; i--) {
  const sumDay = input[i][0] + i;
  //가능
  if (sumDay <= N + 1) dp[i] = Math.max(dp[i + 1], dp[sumDay] + input[i][1]);
  else dp[i] = dp[i + 1];
}

console.log(dp[1]);
