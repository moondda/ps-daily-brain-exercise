let input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

// 정점의 개수 N(1 ≤ N ≤ 1,000), 간선의 개수 M(1 ≤ M ≤ 10,000), 탐색을 시작할 정점의 번호 V
const [N, M, V] = input.shift().split(" ").map(Number);

let graph = Array.from({ length: N + 1 }, () => []);

for (let i = 0; i < input.length; i++) {
  const [first, second] = input[i].split(" ").map(Number);
  graph[first].push(second);
  graph[second].push(first);
}

graph = graph.map((e) => e.sort((a, b) => a - b));

const isDfsVisited = Array(N + 1).fill(false);
isDfsVisited[V] = true;
const dfsResult = [V];
const dfs = (start) => {
  for (let i of graph[start]) {
    if (isDfsVisited[i] === false) {
      isDfsVisited[i] = true;
      dfsResult.push(i);
      dfs(i);
    }
  }
};
dfs(V);

const isBfsVisited = Array(N + 1).fill(false);
isBfsVisited[V] = true;
const queue = [V];
const bfsResult = [];

while (queue.length !== 0) {
  const first = queue.shift();
  bfsResult.push(first);
  for (let i of graph[first]) {
    if (isBfsVisited[i] === false) {
      queue.push(i);
      isBfsVisited[i] = true;
    }
  }
}

console.log(dfsResult.join(" "));
console.log(bfsResult.join(" "));
