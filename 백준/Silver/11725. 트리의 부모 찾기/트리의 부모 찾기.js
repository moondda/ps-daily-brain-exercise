const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const N = +input.shift();
const graph = Array.from({ length: N + 1 }, () => []);
for (let i of input) {
  const [first, second] = i.split(" ").map(Number);
  graph[first].push(second);
  graph[second].push(first);
}

const result = Array(N).fill(0);

const isVisited = Array(N + 1).fill(false);
const queue = [1];
isVisited[1] = true;

while (queue.length !== 0) {
  const item = queue.shift();

  for (let i of graph[item]) {
    if (isVisited[i] === false) {
      queue.push(i);
      isVisited[i] = true;
      result[i - 1] = item;
    }
  }
}

result.shift();
console.log(result.join("\n"));
