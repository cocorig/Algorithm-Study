const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");
const arr = input[1].split(" ").map(Number); // 테스트 케이스의 우유 리스트를 가져옴
let cnt = 0;

for (const i of arr) {
  if (i === cnt % 3) cnt++;
}

console.log(cnt);
