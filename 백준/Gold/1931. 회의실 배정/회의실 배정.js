let input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const N = +input.shift(); //회의수
input = input
  .map((e) => e.split(" ").map(Number))
  .sort((a, b) => {
    if (a[1] !== b[1]) return a[1] - b[1];
    return a[0] - b[0];
  });

let lastMeeting = input[0][1]; //마지막 회의가 끝난 시간
let count = 1;
for (let i = 1; i < input.length; i++) {
  if (input[i][0] >= lastMeeting) {
    lastMeeting = input[i][1];
    count++;
  }
}
console.log(count);
