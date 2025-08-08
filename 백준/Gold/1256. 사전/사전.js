let input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

//n개의a, M개의 z , k번째 문자열
let [N, M, K] = input.shift().split(" ").map(Number);

// const combination = (arr, k) => {
//   if (k == 1) return arr.map((e) => [e]);

//   const result = [];

//   arr.forEach((fixed, idx, origin) => {
//     const rest = arr.slice(idx + 1);
//     const combis = combination(rest, k - 1);
//     const attached = combis.map((e) => [fixed, ...e]);

//     result.push(...attached);
//   });

//   return result;
// };

// combination()

const factorial = (k) => {
  k = BigInt(k);
  let result = 1n;
  for (let i = 1n; i <= k; i++) {
    result *= i;
  }
  return result;
};

const allCount = factorial(N + M) / (factorial(N) * factorial(M));

const result = [];
let targetK = BigInt(K);
let countA = N;
let countB = M;
if (allCount < targetK) console.log("-1");
else {
  while (countA + countB > 0) {
    countA -= 1;
    //countB = M;
    const aCount =
      factorial(countA + countB) / (factorial(countA) * factorial(countB));
    if (targetK <= aCount && countA >= 0) {
      result.push("a");
    } else {
      countA += 1; //복구
      countB -= 1;
      targetK -= aCount;
      result.push("z");
    }
  }
  console.log(result.join(""));
}
