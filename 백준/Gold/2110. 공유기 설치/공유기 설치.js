let input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, C] = input.shift().split(" ").map(Number); //N:집의 개수 C:공유기 개수

input = input.map(Number).sort((a, b) => a - b);

let right = input[N - 1] - input[0];
let left = 0;

while (left <= right) {
  const mid = Math.floor((right + left) / 2); //최대거리
  let installedIdx = 0;
  let installedCount = 1;

  for (let i = 1; i < input.length; i++) {
    //[1,2,4,8,9]
    if (input[i] - input[installedIdx] >= mid) {
      installedIdx = i;
      installedCount++;
    }
  }

  if (installedCount >= C) {
    left = mid + 1;
  } else right = mid - 1;
}

console.log(left - 1);
