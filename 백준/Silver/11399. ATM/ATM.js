let input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .split("\n");

const pplCount = +input.shift();

input = input[0]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

let sum = 0;

for (let i = 0; i < input.length; i++) {
  sum += input[i] * (input.length - i);
}

console.log(sum);
