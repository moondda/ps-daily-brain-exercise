const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

//숫자, 시도count
const queue = [[input[0], 0]];
const visited = new Set();

while (queue.length) {
  const target = queue.shift();
  if (target[0] === 1) {
    console.log(target[1]);
    return;
  }

  if (visited.has(target[0])) continue;
  visited.add(target[0]);

  if (target[0] % 3 === 0) queue.push([target[0] / 3, target[1] + 1]);
  if (target[0] % 2 === 0) queue.push([target[0] / 2, target[1] + 1]);
  queue.push([target[0] - 1, target[1] + 1]);
}
