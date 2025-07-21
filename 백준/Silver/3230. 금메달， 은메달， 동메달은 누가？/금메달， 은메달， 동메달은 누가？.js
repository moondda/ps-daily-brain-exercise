let input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

let [N, M] = input.shift().split(" ");
input = input.map(Number);

//slice n번

let firstRace = input.slice(0, N);
let secondRace = input.slice(N);

let result = [];

for (let i = 0; i < firstRace.length; i++) {
  const racer = i + 1;
  const rank = firstRace[i];
  result = [...result.slice(0, rank - 1), racer, ...result.slice(rank - 1)];
}

result = result.slice(0, M);

let answer = [];

for (let i = 0; i < secondRace.length; i++) {
  const racer = result.pop();
  const rank = secondRace[i];
  answer = [...answer.slice(0, rank - 1), racer, ...answer.slice(rank - 1)];
}

const finalAnswer = answer.slice(0, 3);
for (let i of finalAnswer) {
  console.log(i);
}
