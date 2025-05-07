let input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

//n날자수 k연속날짜수
const [N, K] = input.shift().split(" ").map(Number);
input = input.shift().split(" ").map(Number);
let max = 0;
let windowSum = 0;
for (let i = 0; i < K; i++) {
  max += input[i];
}
windowSum = max;

//i는 right
for (let i = K; i < N; i++) {
  windowSum = windowSum + input[i] - input[i - K];
  max = Math.max(max, windowSum);
}
console.log(max);
