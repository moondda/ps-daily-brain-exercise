let input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");
const [N, R, Q] = input.shift().split(" ").map(Number);
const edgeList = input.slice(0, N - 1);
const queries = input.slice(N - 1).map(Number);

const graph = Array.from({ length: N + 1 }, () => []);
let dp = Array(N + 1).fill(1); // 자기 자신 포함해서 시작
let visited = Array(N + 1).fill(false);

for (let i = 0; i < edgeList.length; i++) {
  const [a, b] = edgeList[i].split(" ").map(Number);
  graph[a].push(b);
  graph[b].push(a);
}

const dfs = (root) => {
  visited[root] = true;
  for (let i of graph[root]) {
    if (visited[i]) continue;
    visited[i] = true;
    dfs(i);
    dp[root] += dp[i];
  }
};

dfs(R);

for (let q of queries) {
  console.log(dp[q]);
}
