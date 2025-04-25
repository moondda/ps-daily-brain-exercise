let input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");
input = input.map((e) => e.split(" ").map(Number));
//1번이 가장 쉬움

const [N, M] = input.shift(); //N 문제 개수
const graph = Array.from({ length: N + 1 }, () => []);
let indegree = Array(N + 1).fill(0);
const result = [];

class MinHeap {
  constructor() {
    this.heap = [null]; // 1번 인덱스부터 시작
  }

  push(value) {
    this.heap.push(value);
    let idx = this.heap.length - 1;

    while (idx > 1) {
      let parent = Math.floor(idx / 2);
      if (this.heap[parent] <= this.heap[idx]) break;
      [this.heap[parent], this.heap[idx]] = [this.heap[idx], this.heap[parent]];
      idx = parent;
    }
  }

  pop() {
    if (this.heap.length <= 1) return null;
    if (this.heap.length === 2) return this.heap.pop();

    const top = this.heap[1];
    this.heap[1] = this.heap.pop();
    let idx = 1;

    while (true) {
      let left = idx * 2;
      let right = idx * 2 + 1;
      let smallest = idx;

      if (left < this.heap.length && this.heap[left] < this.heap[smallest])
        smallest = left;
      if (right < this.heap.length && this.heap[right] < this.heap[smallest])
        smallest = right;
      if (smallest === idx) break;

      [this.heap[idx], this.heap[smallest]] = [
        this.heap[smallest],
        this.heap[idx],
      ];
      idx = smallest;
    }

    return top;
  }

  size() {
    return this.heap.length - 1;
  }
}

const queue = new MinHeap();

for (let [a, b] of input) {
  graph[a].push(b);
  indegree[b] += 1;
}

for (let i = 1; i <= N; i++) {
  if (indegree[i] === 0) queue.push(i);
}

while (queue.size()) {
  const target = queue.pop();
  result.push(target);

  for (let i of graph[target]) {
    indegree[i] -= 1;
    if (indegree[i] === 0) queue.push(i);
  }
}

console.log(result.join(" "));
