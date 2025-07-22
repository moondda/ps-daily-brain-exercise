let input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((e) => e.split(" ").map(Number));

let [N, M] = input.shift(); //n명의 유저수

const graph = Array.from({ length: N + 1 }, () => []);
let dist = Array.from({ length: N + 1 }, () => Array(N + 1).fill(Infinity));

for (let [a, b] of input) {
  dist[a][b] = 1;
  dist[b][a] = 1;
}

for (let i = 1; i <= N; i++) {
  for (let j = 1; j <= N; j++) {
    for (let k = 1; k <= N; k++) {
      if (dist[j][k] > dist[j][i] + dist[i][k]) {
        dist[j][k] = dist[j][i] + dist[i][k];
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
