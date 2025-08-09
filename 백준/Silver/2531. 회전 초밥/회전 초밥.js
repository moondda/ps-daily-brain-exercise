let input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

//접시 총 개수 N, 초밥 가짓수 d, 연속해서 먹는 접시 수 k, 쿠폰 번호 c
let [N, d, k, c] = input.shift().split(" ").map(Number);

input = input.map(Number);

const currMap = new Map();

for (let i = 0; i < k; i++) {
  currMap.set(input[i], (currMap.get(input[i]) || 0) + 1);
}

let maxCount = 0;

for (let i = 0; i < N; i++) {
  if (currMap.get(input[i]) == 1) {
    currMap.delete(input[i]);
  } else {
    currMap.set(input[i], currMap.get(input[i]) - 1);
  }
  currMap.set(input[(i + k) % N], (currMap.get(input[(i + k) % N]) || 0) + 1);

  if (!currMap.has(c)) maxCount = Math.max(maxCount, currMap.size + 1);
  else maxCount = Math.max(maxCount, currMap.size);
}

console.log(maxCount);
