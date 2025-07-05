let input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .split("\n");

const N = input.shift(); //보드 N*N
const K = input.shift(); //사과개수

let applePos = new Set(
  input.slice(0, K).map((e) => String(e.split(" ").map((k) => k - 1)))
);

input = input.slice(K);

const changeCount = input.shift();

const dirInfo = new Map();

for (let i of input) {
  const [key, value] = i.split(" ");
  dirInfo.set(Number(key), value);
}

const snake = [[0, 0]];
let start = 0;
const snakeSet = new Set(); //겹치면 종료하기 위해
snakeSet.add("0,0");

//["T","L", "B", "R"]
// const leftSpin = [3, 0, 1, 2];
// const rightSpin = [3, 2, 1, 0];
// //왼쪽으로 회전 => [R,T,L,B]
// //오른쪽으로 회전 => [R,B,L,T]

// 방향: 0=위, 1=오른쪽, 2=아래, 3=왼쪽
const dx = [-1, 0, 1, 0];
const dy = [0, 1, 0, -1];

const queue = [[[0, 1], 1, 1]]; //현재 머리가 접근한 좌표
//bfs
//for (let i = 0; i < 11; i++) {
while (queue.length) {
  const [currPos, currDir, time] = queue.shift();
  //  console.log(currPos, currDir, snakeSet, time, currDir);
  if (currPos[0] >= N || currPos[0] < 0 || currPos[1] >= N || currPos[1] < 0) {
    console.log(time);
    break;
  }

  //자신의 몸통을 만났을 때
  if (snakeSet.has(`${currPos}`)) {
    console.log(time);
    break;
  }
  snake.push(currPos);
  // console.log(snakeSet, currPos, time);
  snakeSet.add(`${currPos}`);

  //사과에 접근했으면
  if (applePos.has(`${currPos}`)) {
    applePos.delete(`${currPos}`);
  }
  //사과가 없는 좌표이면
  else {
    snakeSet.delete(`${snake[start]}`);
    start += 1; //꼬리 한칸 이동. 편의상 앞쪽에 꼬리둠
  }
  //console.log(snakeSet, currPos, time);

  let nextDir = currDir;

  // 방향 변환 확인
  if (dirInfo.has(time)) {
    const turn = dirInfo.get(time);
    if (turn === "L") {
      // 왼쪽 회전
      nextDir = (nextDir + 3) % 4;
    } else if (turn === "D") {
      // 오른쪽 회전
      nextDir = (nextDir + 1) % 4;
    }
  }
  //console.log(nextDir, time);
  let nextX, nextY;
  nextX = dx[nextDir] + currPos[0];
  nextY = dy[nextDir] + currPos[1];

  queue.push([[nextX, nextY], nextDir, time + 1]);
}
