let input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const testcaseCnt = +input.shift();
let pointer = 0;
let beerCnt = 20; //최대 20개
let result = [];

while (pointer <= input.length - 1) {
  const conviniCnt = +input[pointer];
  const [houseX, houseY] = input[pointer + 1].split(" ").map(Number);
  const conviniPos = input
    .slice(pointer + 2, pointer + 2 + conviniCnt)
    .map((e) => e.split(" ").map(Number));
  const [fesX, fesY] = input[pointer + 2 + conviniCnt].split(" ").map(Number);
  const conviniMap = new Set();
  beerCnt = 20;

  for (let [x, y] of conviniPos) {
    conviniMap.add(`${x},${y}`);
  }

  //한방에 갈 수 있음
  if (Math.abs(houseX - fesX) + Math.abs(houseY - fesY) <= 1000) {
    result.push("happy");
    pointer += 3 + conviniCnt;
    continue;
  }

  //bfs?
  //이동할 수 있는 위치로 계속 이동
  //락페 나오면 break
  //O(N + nC2) O(n^2)

  const queue = [[houseX, houseY, beerCnt]];
  let isVisited = Array(conviniPos).fill(false);
  let isHappy = false;
  while (queue.length > 0) {
    let [currX, currY, cnt] = queue.shift();

    if (currX == fesX && currY === fesY) {
      isHappy = true;
      break;
    }

    if (conviniMap.has(`${currX},${currY}`)) {
      cnt = 20; //풀충전
    }

    if (Math.abs(currX - fesX) + Math.abs(currY - fesY) <= cnt * 50) {
      queue.push([
        fesX,
        fesY,
        cnt - Math.ceil((Math.abs(currX - fesX) + Math.abs(currY - fesY)) / 50),
      ]);
      continue;
    }

    for (let i = 0; i < conviniPos.length; i++) {
      const [conviniX, conviniY] = conviniPos[i];

      if (Math.abs(currX - conviniX) + Math.abs(currY - conviniY) <= cnt * 50) {
        if (!isVisited[i]) {
          isVisited[i] = true;
          queue.push([
            conviniX,
            conviniY,
            cnt -
              Math.ceil((Math.abs(currX - fesX) + Math.abs(currY - fesY)) / 50),
          ]);
        }
      }
    }
  }

  if (isHappy) result.push("happy");
  else result.push("sad");

  pointer += 3 + conviniCnt;
}

for (let i of result) {
  console.log(i);
}
