let input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

let str = input.shift();
let bomb = input.shift();
const stack = [];

for (let i = 0; i < str.length; i++) {
  stack.push(str[i]);
  if (stack.length >= bomb.length) {
    let isBomb = true;
    for (let j = 0; j < bomb.length; j++) {
      if (stack[stack.length - bomb.length + j] !== bomb[j]) {
        isBomb = false;
        break;
      }
    }

    if (isBomb) {
      stack.length -= bomb.length;
    }
  }
}
if (stack.length === 0) console.log("FRULA");
else console.log(stack.join(""));
