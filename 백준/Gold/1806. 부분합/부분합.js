let input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

//N 수열 길이 ,S 만족해야하는 합
let [N, S] = input.shift().split(" ").map(Number);
input = input[0].split(" ").map(Number);
let left = 0;
let sum = 0;
let minLen = Infinity;

for (let i = 0; i < input.length; i++) {
  sum += input[i];

  while (sum >= S) {
    minLen = Math.min(minLen, i - left + 1);
    sum -= input[left];
    left += 1;
  }
}

if (minLen === Infinity) console.log(0);
else console.log(minLen);
