let input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

let N = +input.shift();
input = input.map((e) => e.split(" ").map(Number));
input.sort((a, b) => {
  if (b[0] !== a[0]) return a[0] - b[0];
  else return a[1] - b[1];
});

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

    while (i > 0 && heap[i] < heap[(i - 1) >> 1]) {
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

const minHeap = new MinHeap();
let count = 0;

for (let [start, end] of input) {
  if (minHeap.size() == 0) {
    minHeap.push(end);
    count += 1;
  } else {
    //제일 빨리 끝나는 회의실이 시작하는 강의보다 느리게 끝남
    if (minHeap.peek() > start) {
      minHeap.push(end);
      count += 1;
    } else {
      minHeap.pop();
      minHeap.push(end);
    }
  }
}

console.log(count);
