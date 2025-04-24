const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const N = Number(input.shift());

const tree = {};

const preorder = [];
const inorder = [];
const postorder = [];

for (let i = 0; i < N; i++) {
  const [root, left, right] = input[i].split(" ");
  tree[root] = { left, right };
}

const traverse = (node) => {
  if (node === ".") return;
  preorder.push(node);
  traverse(tree[node].left);
  inorder.push(node);
  traverse(tree[node].right);
  postorder.push(node);
};

traverse("A");

console.log(preorder.join(""));
console.log(inorder.join(""));
console.log(postorder.join(""));
