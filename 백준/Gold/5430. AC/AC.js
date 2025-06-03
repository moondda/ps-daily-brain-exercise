let input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

let N = Number(input.shift());

let func = "";
let num = NaN;
let arr;

const doFunc = (func, num, arr) => {
  const funcs = func.split("");
  let front = 0;
  let back = arr.length - 1;
  let isReverse = false;
  for (let f of funcs) {
    if (f == "R") {
      isReverse = !isReverse;
    } else if (f == "D") {
      if (front > back) return "error";

      if (isReverse) back -= 1;
      else front += 1;
    }
  }

  if (front > back) return "[]";
  else {
    let answer = arr.slice(front, back + 1);
    if (isReverse) answer.reverse();

    return `[${answer.join(",")}]`;
  }
};

for (let i = 0; i < input.length; i++) {
  if (i % 3 == 0) func = input[i];
  else if (i % 3 == 1) num = Number(input[i]);
  else if (i % 3 == 2) {
    arr = JSON.parse(input[i]);
    console.log(doFunc(func, num, arr));
  }
}
