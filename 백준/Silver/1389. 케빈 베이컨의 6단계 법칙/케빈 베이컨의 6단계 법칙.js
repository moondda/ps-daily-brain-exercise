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

let answerArr = Array(N + 1).fill(0);
const countMap = new Map();

for (let j = 1; j <= N; j++) {
  for (let i = 1; i <= N; i++) {
    //같은 인물
    if (i == j) continue;

    //이미 전에 계산함
    if (j > i) {
      if (countMap.get(`${i}, ${j}`)) {
        answerArr[j] += countMap.get(`${i}, ${j}`);
        continue;
      }
    } else if (j < i) {
      if (countMap.get(`${j}, ${i}`)) {
        answerArr[j] += countMap.get(`${j}, ${i}`);
        continue;
      }
    }

    const queue = [[j, 0]];
    let isVisited = Array(N + 1).fill(false);
    isVisited[j] = true;

    while (queue.length > 0) {
      const [curr, count] = queue.shift();
      if (curr === i) {
        answerArr[j] += count;

        if (j > i) {
          countMap.set(`${i}, ${j}`, count);
        } else if (j < i) {
          countMap.set(`${j}, ${i}`, count);
        }

        break;
      }

      for (let c of graph[curr]) {
        if (!isVisited[c]) {
          isVisited[c] = true;
          queue.push([c, count + 1]);
        }
      }
    }
  }
}

let minNum = Infinity;
let minPpl = -1;
for (let i = 1; i <= N; i++) {
  const value = answerArr[i];
  if (value < minNum) {
    minNum = value;
    minPpl = i;
  }
}
console.log(minPpl);
