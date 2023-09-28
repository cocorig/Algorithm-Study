function solution(a, b) {
  // a: 가로 길이, b : 세로 길이
  for (let i = 0; i < b; i++) {
    console.log("*".repeat(a));
  }
}

solution(5, 3);
