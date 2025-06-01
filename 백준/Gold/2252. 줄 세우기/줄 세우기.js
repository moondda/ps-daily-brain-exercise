let input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

input = input.map((e) => e.split(" ").map(Number));
//N: 학생수 , M: 키 비교 횟수
const [N, M] = input.shift();

const indegree = Array(N + 1).fill(0);
const graph = Array.from({ length: N + 1 }, () => []);

for (let [a, b] of input) {
  indegree[b] += 1;
  graph[a].push(b);
}

const queue = [];
for (let i = 1; i <= N; i++) {
  if (indegree[i] === 0) queue.push(i);
}

const result = [];
while (queue.length > 0) {
  const target = queue.shift();
  result.push(target);

  for (const next of graph[target]) {
    indegree[next]--;
    if (indegree[next] === 0) queue.push(next);
  }
}

console.log(result.join(" "));
