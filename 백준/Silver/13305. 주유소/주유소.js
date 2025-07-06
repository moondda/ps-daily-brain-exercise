let input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const N = Number(input.shift());
const dists = input.shift().split(" ").map(Number);
const prices = input.shift().split(" ").map(Number);

let totalCost = 0;
let minPrice = prices[0];

for (let i = 0; i < N - 1; i++) {
  if (prices[i] < minPrice) {
    minPrice = prices[i];
  }
  totalCost += minPrice * dists[i];
}

console.log(totalCost);
