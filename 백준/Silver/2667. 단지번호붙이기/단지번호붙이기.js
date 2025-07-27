let input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const N = +input.shift();

input = input.map((e) => e.split("").map(Number));

//하나씩 다 검사함
//600 * 600
let checked = Array.from({ length: N }, () => Array(N).fill(false));

let isDanji = (x, y) => {
  let dx = [-1, 0, 1, 0];
  let dy = [0, 1, 0, -1];

  const ans = [];

  for (let i = 0; i < 4; i++) {
    let nextX = x + dx[i];
    let nextY = y + dy[i];

    if (nextX < 0 || nextX > N - 1 || nextY < 0 || nextY > N - 1) continue;

    if (!checked[nextX][nextY] && input[nextX][nextY]) ans.push([nextX, nextY]);
  }

  return ans;
};

//n^3 200 - 300

let counts = [];

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (!checked[i][j] && input[i][j]) {
      let tempCount = 1;
      checked[i][j] = true;

      const queue = [[i, j, tempCount]];
      while (queue.length > 0) {
        const [x, y] = queue.shift();
        for (let [danX, danY] of isDanji(x, y)) {
          checked[danX][danY] = true;
          tempCount += 1;
          queue.push([danX, danY]);
        }
      }
      counts.push(tempCount);
    }
  }
}

console.log(counts.length);
console.log(counts.sort((a, b) => a - b).join("\n"));
