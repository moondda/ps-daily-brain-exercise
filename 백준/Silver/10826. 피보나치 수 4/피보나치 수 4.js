const N = +require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim();

let dp = Array(N + 1).fill(undefined);
dp[0] = 0n;
dp[1] = 1n;

const fibbo = (n) => {
  if (dp[n] !== undefined) return dp[n];
  else return (dp[n] = fibbo(n - 2) + fibbo(n - 1));
};

console.log(fibbo(N).toString());
