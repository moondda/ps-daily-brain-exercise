let input = require("fs").readFileSync(0, "utf8").trim().split("\n");
let [N, M, Knum] = input[0].split(" ").map(Number);

const C = Array.from({ length: N + M + 1 }, () => Array(N + 1).fill(0n));
C[0][0] = 1n;
for (let i = 1; i <= N + M; i++) {
  C[i][0] = 1n;
  const jMax = Math.min(i, N);
  for (let j = 1; j <= jMax; j++) {
    C[i][j] = C[i - 1][j - 1] + C[i - 1][j];
  }
}

let K = BigInt(Knum);
if (C[N + M][N] < K) {
  console.log("-1");
  process.exit(0);
}

let a = N, z = M;
const out = [];
while (a + z > 0) {
  if (a === 0) { out.push("z"); z--; continue; }
  if (z === 0) { out.push("a"); a--; continue; }
  const aCount = C[a + z - 1][a - 1];
  if (K <= aCount) {
    out.push("a");
    a--;
  } else {
    out.push("z");
    K -= aCount; 
    z--;
  }
}
console.log(out.join(""));
