const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const N = +input.shift();
const M = +input.shift();

const graph = Array.from(Array(N + 1), () => []);
const visited = Array(N + 1).fill(false);
let count = 0;
visited[1] = true;

for (let i = 0; i < M; i++) {
  const [first, second] = input[i].split(" ").map(Number);
  graph[first].push(second);
  graph[second].push(first);
}

const dfs = (target) => {
  for (let i of graph[target]) {
    if (visited[i] == false) {
      visited[i] = true;
      count++;
      dfs(i);
    }
  }
};

dfs(1);
console.log(count);
