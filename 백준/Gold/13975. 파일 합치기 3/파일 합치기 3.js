let input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

let T = +input.shift();

class MinHeap {
  constructor() {
    this.h = [];
  }
  size() {
    return this.h.length;
  }
  peek() {
    return this.h[0];
  }
  push(v) {
    let h = this.h,
      i = h.push(v) - 1;
    while (i && h[i] < h[(i - 1) >> 1]) {
      [h[i], h[(i - 1) >> 1]] = [h[(i - 1) >> 1], h[i]];
      i = (i - 1) >> 1;
    }
  }
  pop() {
    let h = this.h;
    if (!h.length) return;
    let r = h[0],
      last = h.pop();
    if (h.length) {
      h[0] = last;
      let i = 0;
      while (1) {
        let l = i * 2 + 1,
          rgt = l + 1,
          min = i;
        if (l < h.length && h[l] < h[min]) min = l;
        if (rgt < h.length && h[rgt] < h[min]) min = rgt;
        if (min === i) break;
        [h[i], h[min]] = [h[min], h[i]];
        i = min;
      }
    }
    return r;
  }
}

for (let i = 0; i < input.length; i += 2) {
  const pageCount = +input[i];
  const pages = input[i + 1].split(" ").map(Number);
  const heap = new MinHeap();

  for (let page of pages) {
    heap.push(page);
  }

  let currCost = 0;

  while (heap.size() > 1) {
    if (heap.size() >= 2) {
      const a = heap.pop();
      const b = heap.pop();
      heap.push(a + b);
      currCost += a + b;
    }
  }
  console.log(currCost);
}
