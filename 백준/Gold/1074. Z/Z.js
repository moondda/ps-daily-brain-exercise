let [N, r, c] = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

let count = 0;

const recursive = (x, y, len) => {
  if (len == 1) {
    count += 1;
    if (x == r && y == c) {
      console.log(count - 1);
    }
    return;
  }

  const newLen = len * (1 / 2);

  for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 2; j++) {
      //console.log(i, j, "ij");
      if (
        r >= x + newLen * i &&
        r <= x + newLen * i + newLen &&
        c >= y + newLen * j &&
        c <= y + newLen * j + newLen
      ) {
        // console.log(x + newLen * i, y + newLen * j, newLen);
        recursive(x + newLen * i, y + newLen * j, newLen);
      } else {
        // console.log(newLen * newLen, "size 추가");
        count += newLen * newLen;
      }
    }
  }
};

recursive(0, 0, 2 ** N);
