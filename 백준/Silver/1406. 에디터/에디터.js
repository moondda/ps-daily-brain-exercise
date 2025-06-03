let input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

let result = input.shift().split("");

const N = input.shift();
input = input.map((e) => e.split(" "));

const leftDeque = result;
const rightDeque = [];

for (let i of input) {
  if (i.length == 2) {
    leftDeque.push(i[1]);
  } else {
    if (i[0] == "L" && leftDeque.length !== 0) rightDeque.push(leftDeque.pop());
    if (i[0] == "D" && rightDeque.length !== 0)
      leftDeque.push(rightDeque.pop());
    if (i[0] == "B") leftDeque.pop();
  }
}

console.log([...leftDeque, ...rightDeque.reverse()].join(""));
