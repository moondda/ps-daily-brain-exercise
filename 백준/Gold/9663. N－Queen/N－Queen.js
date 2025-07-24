let N = +require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim();

//n개의 행 순회
//매 열을 isAvail 같은 행,열,대각선 아닌지 검사 O(n)
//O(n^3)

//dfs?
//let array = Array.from({ length: N }, () => Array(N).fill(false));
let count = 0;
let usedCol = Array(N).fill(false);
let usedDiag1 = Array(2 * N - 1).fill(false);
let usedDiag2 = Array(2 * N - 1).fill(false);
const dfs = (i) => {
  if (i === N) {
    count += 1;
    return;
  }

  for (let j = 0; j < N; j++) {
    const d1 = i + j;
    const d2 = i - j + (N - 1);

    if (!usedCol[j] && !usedDiag1[d1] && !usedDiag2[d2]) {
      usedCol[j] = usedDiag1[d1] = usedDiag2[d2] = true;
      dfs(i + 1);
      usedCol[j] = usedDiag1[d1] = usedDiag2[d2] = false;
    }
  }
};

dfs(0);
console.log(count);
