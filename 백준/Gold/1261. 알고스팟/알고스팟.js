const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .split("\n");
const [M, N] = input.shift().split(" ").map(Number);
const status = input.map((e) => e.split("").map(Number));
const isVisited = Array.from({ length: N }, () => Array(M).fill(0));

//bfs 이용
const queue = [{ x: 0, y: 0, break: 0 }];

const dx = [-1, 0, 1, 0];
const dy = [0, -1, 0, 1];

while (queue.length !== 0) {
  const q = queue.shift();
  if (q.x === M - 1 && q.y === N - 1) console.log(q.break);
  for (let i = 0; i < 4; i++) {
    const nextX = q.x + dx[i];
    const nextY = q.y + dy[i];

    if (
      nextX >= 0 &&
      nextX <= M - 1 &&
      nextY >= 0 &&
      nextY <= N - 1 &&
      isVisited[nextY][nextX] === 0
    ) {
      if (status[nextY][nextX] === 1) {
        queue.push({ x: nextX, y: nextY, break: q.break + 1 });
      } else queue.unshift({ x: nextX, y: nextY, break: q.break });
      isVisited[nextY][nextX] = 1;
    }
  }
}
