let input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const N = input.shift();

input = input.map((e) => e.split(" ").map(Number));
const dists = input.shift();
const prices = input.shift();

let currOil = 0;
let currCost = 0;
let currIdx = 0;
while (currIdx < prices.length - 1) {
  //도착했으면 break;
  let sumDist = 0;
  let cangoIdx = currIdx;

  for (let j = currIdx + 1; j < prices.length; j++) {
    if (prices[currIdx] > prices[j]) {
      cangoIdx = j;
      for (let k = currIdx; k < j; k++) {
        sumDist += dists[k];
      }
    }
    //앞으로 최대는 없음
    else {
      cangoIdx = prices.length - 1;
      sumDist = 0;
      for (let k = currIdx; k < dists.length; k++) {
        sumDist += dists[k];
      }
    }

    let needOil = sumDist - currOil;
    if (needOil > 0) {
      currOil += needOil;
      currCost += prices[currIdx] * currOil;
    }

    //앞으로 나가기
    //오일 소비
    currOil -= sumDist;
    //거리 갱신
    currIdx = cangoIdx;
  }
}

console.log(currCost);
