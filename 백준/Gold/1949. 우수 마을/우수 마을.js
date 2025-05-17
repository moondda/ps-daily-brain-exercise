const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0]);
const person = [0, ...input[1].split(" ").map(Number)];

const tree = Array.from({ length: N + 1 }, () => []);
const visited = Array(N + 1).fill(false);
const dp = Array.from({ length: N + 1 }, () => [0, 0]);

for (let i = 2; i < input.length; i++) {
  const [u, v] = input[i].split(" ").map(Number);
  tree[u].push(v);
  tree[v].push(u);
}

function dfs(node) {
  visited[node] = true;

  for (const next of tree[node]) {
    if (!visited[next]) {
      dfs(next);
      dp[node][0] += Math.max(dp[next][0], dp[next][1]); // 현재 노드 미선택
      dp[node][1] += dp[next][0]; // 현재 노드 선택 시 자식 노드 미선택
    }
  }

  dp[node][1] += person[node];
}

dfs(1);
console.log(Math.max(dp[1][0], dp[1][1]));
