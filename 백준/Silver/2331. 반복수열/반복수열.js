let [num, multiply] = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

//정점 개수, 간선 개수
const numbers = new Map();

let i = 0;
let nextnum = num;
while (!numbers.has(nextnum)) {
  numbers.set(nextnum, i);

  const target = String(nextnum)
    .split("")
    .map((e) => Number(e) ** multiply);
  nextnum = 0;
  for (let i of target) {
    nextnum += i;
  }
  i++;
}

console.log(numbers.get(nextnum));
