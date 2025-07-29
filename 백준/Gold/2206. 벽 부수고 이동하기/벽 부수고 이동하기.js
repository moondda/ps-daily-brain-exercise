let input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input.shift().split(" ").map(Number);

input = input.map((e) => e.split("").map(Number));

const queue = [[0, 0, 1, 0]]; //현재x, 현재y, 지나온칸수, 벽 몇개 부쉈는지
//0 이동가능
//1 이동할수없는 벽 있음
//벽 최대 한개 뿌술 수 있음
//못가면 -1 리턴

//O(N*M)

let isVisited = Array.from({ length: N }, () =>
  Array.from({ length: M }, () => [0, 0])
); //첫번째는 벽 부수고 도착, 두번쨰는 안 부수고 도착
let canGo = false;
let pointer = 0;

while (pointer < queue.length) {
  const [currX, currY, prevCount, breakCount] = queue[pointer];

  if (currX === N - 1 && currY === M - 1) {
    canGo = true;
    console.log(prevCount);
    break;
  }

  const dx = [-1, 0, 1, 0];
  const dy = [0, -1, 0, 1];

  for (let i = 0; i < 4; i++) {
    const nextX = dx[i] + currX;
    const nextY = dy[i] + currY;

    if (nextX < 0 || nextX > N - 1 || nextY < 0 || nextY > M - 1) continue;
    if (isVisited[nextX][nextY][breakCount]) continue;

    if (input[nextX][nextY] == 0) {
      if (breakCount == 0) isVisited[nextX][nextY][0] = true;
      else isVisited[nextX][nextY][1] = true;
      queue.push([nextX, nextY, prevCount + 1, breakCount]);
    } else if (input[nextX][nextY] == 1) {
      if (breakCount == 0) {
        isVisited[nextX][nextY][1] = true;
        queue.push([nextX, nextY, prevCount + 1, breakCount + 1]);
      }
    }
  }
  pointer++;
}

if (!canGo) console.log(-1);
