let input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, C] = input.shift().split(" ").map(Number);
input = input.map(Number).sort((a, b) => a - b);

let left = 1;
let right = input[N - 1] - input[0];

while (left <= right) {
  let mid = Math.floor((left + right) / 2);
  let lastInstalled = input[0];
  let count = 1;
  for (let i = 1; i < input.length; i++) {
    if (input[i] - lastInstalled >= mid) {
      count += 1;
      lastInstalled = input[i];
    }
  }

  if (count >= C) {
    left = mid + 1;
  } else right = mid - 1;
}

console.log(left - 1);
