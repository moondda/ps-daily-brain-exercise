const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .split("\n")
  .map((item) => item.split(" "));

let notHeardCount = Number(input[0][0]); //듣지 못한
let notSeeCount = Number(input[0][1]); //보지 못한

let notHeardList = {};
let notSeeList = {};

for (let i = 1; i < notHeardCount + 1; i++) {
  notHeardList[input[i][0]] = 1;
}

for (let i = 1 + notHeardCount; i < input.length; i++) {
  notSeeList[input[i][0]] = 1;
}

let answer = [];
for (let i = 1; i < notHeardCount + 1; i++) {
  if (notHeardList[input[i][0]] === 1 && notSeeList[input[i][0]] === 1)
    answer.push(input[i][0]);
}
answer.sort();
console.log(answer.length + "\n" + answer.join("\n"));
