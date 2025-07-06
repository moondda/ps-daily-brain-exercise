let input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const N = +input.shift();

input.sort((a, b) => b - a);

let max = 0;

for (let i = 0; i < N; i++) {
  max = Math.max(max, input[i] * (i + 1));
}
console.log(max);
