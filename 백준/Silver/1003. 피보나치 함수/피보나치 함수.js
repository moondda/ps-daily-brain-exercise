const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const T = input.shift();
let dp = Array(41).fill(null);
dp[0] = [1, 0];
dp[1] = [0, 1];

//count [0개수, 1개수]
const fibbo = (n) => {
  if (dp[n]) return dp[n];
  const a = fibbo(n - 1);
  const b = fibbo(n - 2);
  dp[n] = [a[0] + b[0], a[1] + b[1]];
  return dp[n];
};

for (let i of input) {
  const arr = fibbo(i);
  console.log(arr.join(" "));
}
