const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [n, input] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");
// 딸기 -> 초코 -> 바나나
// 0 -> 1 -> 2 -> 0
// console.log(input); // 0 1 2 0 1 2 0
const array = input.split(" ").map(Number);

let cnt = 0;
let milk = 0;

for (let i = 0; i < n; i++) {
  const current = array[i];
  if (current === milk) {
    cnt++;
    //다음으로 넘어감
    milk = (milk + 1) % 3;
  }
}

console.log(cnt);
