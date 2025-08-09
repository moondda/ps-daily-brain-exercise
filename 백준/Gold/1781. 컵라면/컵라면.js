let input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

let N = +input.shift();
input = input.map((e) => e.split(" ").map(Number));
input.sort((a, b) => b[0] - a[0]);

class MinHeap {
  constructor() {
    this.heap = [];
  }
  peek() {
    return this.heap[0];
  }
  size() {
    return this.heap.length;
  }
  push(v) {
    let heap = this.heap;
    let i = heap.push(v) - 1;

    while (i < heap.length && heap[i] < heap[(i - 1) >> 1]) {
      [heap[i], heap[(i - 1) >> 1]] = [heap[(i - 1) >> 1], heap[i]];
      i = (i - 1) >> 1;
    }
  }
  pop() {
    let heap = this.heap;
    if (!heap.length) return;

    let first = heap[0];
    let last = heap.pop();

    if (heap.length) {
      heap[0] = last;
      let i = 0;

      while (true) {
        let left = 2 * i + 1;
        let right = left + 1;
        let min = i;

        if (left < heap.length && heap[left] < heap[min]) min = left;
        if (right < heap.length && heap[right] < heap[min]) min = right;
        if (min === i) break;

        [heap[min], heap[i]] = [heap[i], heap[min]];
        i = min;
      }
    }
    return first;
  }
}

const maxDay = input[0][0];
const candi = new MinHeap(); //부호 반전 필요
let count = 0;
let idx = 0;
for (let i = maxDay; i >= 1; i--) {
  while (idx < input.length && input[idx][0] >= i) {
    candi.push(-input[idx][1]);
    idx++;
  }
  if (candi.size() > 0) count -= candi.pop();
}

console.log(count);
