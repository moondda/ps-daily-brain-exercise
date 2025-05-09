let input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, C] = input.shift().split(" ").map(Number);
input = input.map(Number).sort((a, b) => a - b);

let left = 1;
let right = input[input.length - 1] - input[0];

while (left <= right) {
  const mid = Math.floor((left + right) / 2); //인접한 두 공유기 최대 거리
  let lastInstalled = input[0]; //1개 일단 설치
  let installCount = 1;
  for (let i = 1; i < input.length; i++) {
    if (mid <= input[i] - lastInstalled) {
      installCount += 1;
      lastInstalled = input[i];
    }
  }
  if (installCount >= C) {
    left = mid + 1;
  } else right = mid - 1;
}

console.log(right);
