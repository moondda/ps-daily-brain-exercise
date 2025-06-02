let input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

input = input.map((e) => e.split(" ").map(Number));

const [N, M] = input.shift();

const graph = Array.from({ length: N + 1 }, () => []);
const indegree = Array(N + 1).fill(0);

for (let [a, b] of input) {
  graph[a].push(b);
  indegree[b] += 1;
}

const queue = [];

for (let i = 1; i < indegree.length; i++) {
  if (indegree[i] === 0) queue.push(i);
}
const result = [];
while (queue.length > 0) {
  const target = queue.shift();

  result.push(target);

  for (let i of graph[target]) {
    indegree[i] -= 1;

    if (indegree[i] === 0) queue.push(i);
  }
}

console.log(result.join(" "));
