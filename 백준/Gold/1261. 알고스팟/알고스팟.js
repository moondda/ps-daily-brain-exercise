const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .split("\n");
const [M, N] = input.shift().split(" ").map(Number);
const status = input.map((e) => e.split("").map(Number));

//bfs 이용
const deque = [];
deque.push([0, 0, 0]);
const check = Array.from({ length: N }, () => new Array(M).fill(0)); //동일 움직임 방지
check[0][0] = 1;

const dx = [-1, 0, 1, 0];
const dy = [0, 1, 0, -1];

while (deque.length !== 0) {
  const [x, y, cnt] = deque.shift();
  if (x === N - 1 && y === M - 1) console.log(cnt);

  for (let i = 0; i < 4; i++) {
    const [nx, ny] = [x + dx[i], y + dy[i]];
    if (nx < 0 || ny < 0 || nx >= N || ny >= M) continue;
    if (check[nx][ny]) continue;
    check[nx][ny] = 1;

    if (status[nx][ny] === 1) {
      status[nx][ny] = 0;
      deque.push([nx, ny, cnt + 1]);
    } else {
      deque.unshift([nx, ny, cnt]);
    }
  }
}
