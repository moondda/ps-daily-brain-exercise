let input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const N = input.shift();

const stack = [];
const answer = [];

let pointer = 0;
let i = 1;
let isEnd = false;
while (pointer <= input.length - 1) {
  while (input[pointer] !== stack.at(-1)) {
    if (i <= N) {
      stack.push(i);
      answer.push("+");
      i++;
    } else {
      isEnd = true;
      break;
    }
  }
  if (isEnd) break;
  stack.pop();
  answer.push("-");
  pointer++;
}

if (isEnd) console.log("NO");
else console.log(answer.join("\n"));
