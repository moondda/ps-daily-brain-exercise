//빈칸 0, 집 1, 치킨집 2
//치킨거리 = 집에서 가장 가까운 치킨집
//도시의 치킨거리 = 모든집의 치킨거리의 합
//거리는 절대 가로세로 합으로 계산
//맨위는 [1,1] 임
//M개의 치킨집만 남기고 나머진 폐업. 도시의 치킨거리가 가장 작아야함

let input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

//M은 살아남는 최대 치킨집 수
const [N, M] = input.shift().split(" ").map(Number);
input = input.map((e) => e.split(" ").map(Number));

const chickens = []; //치킨집 좌표 모음
const houses = []; //집 좌표 모음

for (let i = 0; i < input.length; i++) {
  for (let j = 0; j < input[0].length; j++) {
    if (input[i][j] === 1) houses.push([i, j]);
    else if (input[i][j] === 2) chickens.push([i, j]);
  }
}

const combination = (arr, k) => {
  if (k === 1) return arr.map((e) => [e]);

  const result = [];

  arr.forEach((fixed, idx, origin) => {
    const rest = arr.slice(idx + 1);
    const combis = combination(rest, k - 1);
    const attached = combis.map((e) => [fixed, ...e]);

    result.push(...attached);
  });
  return result;
};

let chickenFinal = combination(chickens, M);

let result = [];
for (let chicken of chickenFinal) {
  let sum = 0;
  for (let house of houses) {
    let minDist = Infinity;
    for (let ch of chicken) {
      const target = Math.abs(house[0] - ch[0]) + Math.abs(house[1] - ch[1]);
      minDist = Math.min(target, minDist);
    }
    sum += minDist;
  }
  result.push(sum);
}

console.log(Math.min(...result));
