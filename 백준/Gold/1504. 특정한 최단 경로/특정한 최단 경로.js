let input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

let [N, E] = input.shift().split(" ").map(Number);
input = input.map((e) => e.split(" ").map(Number));
let [v1, v2] = input.pop();

const graph = Array.from({ length: N + 1 }, () => new Map());
for (let [start, end, w] of input) {
  graph[start].set(end, w);
  graph[end].set(start, w);
}

const INF = Infinity;

// ---- v1 기준 거리 ----
const distFromV1 = Array(N + 1).fill(INF);
distFromV1[v1] = 0;
const queue = [[v1, 0]];
while (queue.length) {
  const [u] = queue.shift();
  const du = distFromV1[u];
  for (const [v, w] of graph[u]) {
    const nd = du + w;
    if (nd < distFromV1[v]) {
      distFromV1[v] = nd;
      queue.push([v, nd]);
    }
  }
}

// ---- 1 기준 거리 ----
const distFrom1 = Array(N + 1).fill(INF);
distFrom1[1] = 0;
const queue2 = [[1, 0]];
while (queue2.length) {
  const [u] = queue2.shift();
  const du = distFrom1[u];
  for (const [v, w] of graph[u]) {
    const nd = du + w;
    if (nd < distFrom1[v]) {
      distFrom1[v] = nd;
      queue2.push([v, nd]);
    }
  }
}

// ---- N 기준 거리 ----
const distFromN = Array(N + 1).fill(INF);
distFromN[N] = 0;
const queue3 = [[N, 0]];
while (queue3.length) {
  const [u] = queue3.shift();
  const du = distFromN[u];
  for (const [v, w] of graph[u]) {
    const nd = du + w;
    if (nd < distFromN[v]) {
      distFromN[v] = nd;
      queue3.push([v, nd]);
    }
  }
}

// 1 -> v1 -> v2 -> N
const path1 = distFrom1[v1] + distFromV1[v2] + distFromN[v2];
// 1 -> v2 -> v1 -> N
const path2 = distFrom1[v2] + distFromV1[v2] + distFromV1[N];

const ans = Math.min(path1, path2);
console.log(Number.isFinite(ans) ? ans : -1);
