let input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((e) => e.split(" ").map(Number));

let [N, M] = input.shift(); //n명의 유저수

const graph = Array.from({ length: N + 1 }, () => []);

for (let [a, b] of input) {
  graph[a].push(b);
  graph[b].push(a);
}

let dist = Array.from({ length: N + 1 }, () => Array(N + 1).fill(Infinity));

for (let i = 1; i <= N; i++) {
  const queue = [[i, 0]];
  let isVisited = Array(N + 1).fill(false);
  isVisited[i] = true;

  while (queue.length > 0) {
    const [curr, count] = queue.shift();
    if (dist[i][curr] > count) {
      dist[i][curr] = count;
      dist[curr][i] = count;
    }

    for (let c of graph[curr]) {
      if (!isVisited[c]) {
        isVisited[c] = true;
        queue.push([c, count + 1]);
      }
    }
  }
}

let minNum = Infinity;
let minPpl = -1;
for (let i = 1; i < dist.length; i++) {
  let value = 0;
  for (let j = 1; j < dist[i].length; j++) {
    value += dist[i][j];
  }
  if (value < minNum) {
    minNum = value;
    minPpl = i;
  }
}
console.log(minPpl);
