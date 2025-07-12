let input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .split("\n");

const cityCount = +input.shift();

input = input.map((e) => e.split(" ").map(BigInt));

//거점에 도착했을때
//다음 거점까지의 거리까지 진행
let minPark = Infinity;
let sum = 0n;

for (let i = 0; i < input[1].length - 1; i++) {
  const park = input[1][i];
  if (park < minPark) minPark = park;
  const dist = input[0][i];
  sum += dist * minPark;
}

console.log(String(sum));
