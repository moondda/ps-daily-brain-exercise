const N = +require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim();

let arr = Array.from({ length: N }, () => Array(N).fill(" "));

const recursive = (x, y, size) => {
  if (size === 1) {
    arr[x][y] = "*";
    return;
  }
  const div = size / 3;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (i == 1 && j == 1) continue;
      recursive(x + i * div, y + j * div, div);
    }
  }
};

recursive(0, 0, N);

console.log(arr.map((e) => e.join("")).join("\n"));
