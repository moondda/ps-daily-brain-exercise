const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

input.shift();

let dp = Array(11).fill(null);
dp[0] = 1;
dp[1] = 1;
dp[2] = 2;

const getCount = (n) => {
  if (dp[n] !== null) return dp[n];
  dp[n] = getCount(n - 1) + getCount(n - 2);
  if (n >= 3) dp[n] += getCount(n - 3);
  return dp[n];
};

for (let i of input) {
  console.log(getCount(i));
}
