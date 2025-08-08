let input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

//9시 35분
let T = +input.shift();

class MinHeap {
  constructor() {
    this.heap = [];
  }
  size() {
    return this.heap.length;
  }
  peek() {
    return this.heap[0];
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
    let i = 0;

    if (heap.length) {
      let i = 0;
      heap[0] = last;

      while (true) {
        let min = i;
        let left = 2 * i + 1;
        let right = left + 1;

        if (left < heap.length && heap[left] < heap[min]) min = left;
        if (right < heap.length && heap[right] < heap[min]) min = right;
        if (min == i) break;

        [heap[min], heap[i]] = [heap[i], heap[min]];
        i = min;
      }
    }
    return first;
  }
}

for (let i = 0; i < input.length; i += 2) {
  const K = +input[i];
  const arr = input[i + 1].split(" ").map(Number);
  const heap = new MinHeap();

  for (let a of arr) {
    heap.push(a);
  }
  let cost = 0;
  while (heap.size() > 1) {
    const min1 = heap.pop();
    const min2 = heap.pop();

    heap.push(min1 + min2);
    cost += min1 + min2;
  }
  console.log(cost);
}
