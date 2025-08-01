const fs = require("fs");
let input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const [V, E] = input.shift().split(" ").map(Number);
const startNum = +input.shift();

input = input.map((e) => e.split(" ").map(Number));

let arr = Array.from({ length: V + 1 }, () => new Map());

for (let [u, v, w] of input) {
  if (!arr[u].get(v)) arr[u].set(v, w);
  if (arr[u].get(v) > w) arr[u].set(v, w);
}

// 최소 힙 구현
class MinHeap {
  constructor() {
    this.heap = [];
  }
  push(item) {
    this.heap.push(item);
    this._bubbleUp();
  }
  pop() {
    if (this.heap.length === 1) return this.heap.pop();
    const top = this.heap[0];
    this.heap[0] = this.heap.pop();
    this._bubbleDown();
    return top;
  }
  _bubbleUp() {
    let idx = this.heap.length - 1;
    while (idx > 0) {
      let parent = Math.floor((idx - 1) / 2);
      if (this.heap[parent][1] <= this.heap[idx][1]) break;
      [this.heap[parent], this.heap[idx]] = [this.heap[idx], this.heap[parent]];
      idx = parent;
    }
  }
  _bubbleDown() {
    let idx = 0;
    const length = this.heap.length;
    while (true) {
      let left = idx * 2 + 1;
      let right = idx * 2 + 2;
      let smallest = idx;

      if (left < length && this.heap[left][1] < this.heap[smallest][1]) {
        smallest = left;
      }
      if (right < length && this.heap[right][1] < this.heap[smallest][1]) {
        smallest = right;
      }
      if (smallest === idx) break;
      [this.heap[smallest], this.heap[idx]] = [this.heap[idx], this.heap[smallest]];
      idx = smallest;
    }
  }
  isEmpty() {
    return this.heap.length === 0;
  }
}

let minCost = new Array(V + 1).fill(Infinity);
let visited = new Array(V + 1).fill(false);

const heap = new MinHeap();
heap.push([startNum, 0]);
minCost[startNum] = 0;

while (!heap.isEmpty()) {
  const [curr, currDist] = heap.pop();

  if (visited[curr]) continue;
  visited[curr] = true;

  for (let [v, w] of arr[curr]) {
    if (minCost[v] > currDist + w) {
      minCost[v] = currDist + w;
      heap.push([v, minCost[v]]);
    }
  }
}

minCost.shift();
for (let i of minCost) {
  if (i === Infinity) console.log("INF");
  else console.log(i);
}
