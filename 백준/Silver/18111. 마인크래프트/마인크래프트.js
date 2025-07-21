let input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

let [N, M, B] = input.shift().split(" ").map(Number); //n줄에 m개씩. 주어진 초기 블록은 B

input = input.map((e) => e.split(" ").map(Number));

let minTime = Infinity;
let maxHeight = -1;

for (let i = 0; i <= 256; i++) {
  //목표 높이
  let time = 0;
  let currBlock = B;
  for (let j = 0; j < input.length; j++) {
    for (let k = 0; k < M; k++) {
      const currH = input[j][k];

      if (currH < i) {
        //목표보다 작다면 더 쌓아야함
        time = time + i - currH;
        currBlock = currBlock - (i - currH);
      }
      if (currH > i) {
        time = time + 2 * (currH - i);
        currBlock = currBlock + (currH - i);
      }
    }
  }

  if (currBlock >= 0) {
    if (time < minTime) {
      minTime = time;
      maxHeight = i;
    }
    if (time === minTime) {
      if (maxHeight < i) maxHeight = i;
    }
  }
}

console.log(`${minTime} ${maxHeight}`);
