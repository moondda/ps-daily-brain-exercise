//최대한 원안에 원안에 거기서 시작
//원마다의 방문여부 boolean으로 관리 + 좌표평면
//원마다의 dfs
let input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

//원의 개수
const N = +input.shift();
input = input.map((e) => e.split(" ").map(Number));

//원 밖 또는 안에 무슨 원이 있는지 배열로 저장
//0인건 밖에 좌표평면이 있다는 것과 동일
let inCircle = Array.from({ length: N + 1 }, () => []);

for (let i = 0; i < N - 1; i++) {
  for (let j = i + 1; j < N; j++) {
    const [xi, yi, ri] = input[i];
    const [xj, yj, rj] = input[j];

    if ((xi - xj) ** 2 + (yi - yj) ** 2 < (ri - rj) ** 2) {
      //ri가 더 바깥쪽
      if (rj < ri) inCircle[j + 1].push(i + 1);
      else inCircle[i + 1].push(j + 1);
    }
  }
}

for (let i = 1; i < inCircle.length; i++) {
  if (inCircle[i].length === 0) inCircle[i].push(0);
  else if (inCircle[i].length > 1) {
    let radiuss = inCircle[i].map((e) => input[e - 1][2]);
    let parent = Math.min(...radiuss);
    inCircle[i] = [inCircle[i][radiuss.indexOf(parent)]];
  }
}

//console.log(inCircle);

let tree = Array.from({ length: N + 1 }, () => []);

for (let i = 1; i < inCircle.length; i++) {
  tree[inCircle[i][0]].push(i);
  tree[i].push(inCircle[i][0]);
}

//console.log(tree);

//원에서 다음 원으로 넘어갈 수 있는 방법

//1. 원이 멀리 떨여져 있을때
//반지름 좌표끼리의 거리 > 반지름 크기의 합
//좌표평면 또는

//2. 원 안에 원이 있을때 A -> B
//반지름 좌표끼리의 거리 < 반지름 크기의 합
//무한대로 가능 A -> B

//dfs인줄 알았는데 bfs...

let maxCount = 0;
let maxPos = -1;
let queue = [[0, 0]]; //n번째 원, count
let visited = Array(N + 1).fill(false);
visited[0] = true;

while (queue.length !== 0) {
  const [n, count] = queue.shift();
  if (maxCount < count) {
    maxCount = count;
    maxPos = n;
  }
  for (let i of tree[n]) {
    if (visited[i] === false) {
      visited[i] = true;
      queue.push([i, count + 1]);
    }
  }
}

let maxCount2 = 0;
let maxPos2 = -1;
let queue2 = [[maxPos, 0]]; //n번째 원, count
let visited2 = Array(N + 1).fill(false);
visited2[maxPos] = true;

while (queue2.length !== 0) {
  const [n, count] = queue2.shift();
  if (maxCount2 < count) {
    maxCount2 = count;
    maxPos2 = n;
  }
  for (let i of tree[n]) {
    if (visited2[i] === false) {
      visited2[i] = true;
      queue2.push([i, count + 1]);
    }
  }
}

console.log(maxCount2);
