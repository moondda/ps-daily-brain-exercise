let input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");
input = input.map((e) => e.split(" ").map(Number));

const [N, M] = input.shift();

//0번은 비워둠
const graph = Array.from({ length: N + 1 }, () => []);
const indegree = Array(N + 1).fill(0);
const queue = [];
const result = [];

for (let [a, b] of input) {
  graph[a].push(b);
  indegree[b] += 1;
}

for (let i = 1; i <= N; i++) {
  if (indegree[i] === 0) queue.push(i);
}

while (queue.length) {
  const target = queue.shift();
  result.push(target);

  for (let i of graph[target]) {
    indegree[i] -= 1;
    if (indegree[i] === 0) queue.push(i);
  }
}

console.log(result.join(" "));
