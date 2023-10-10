function solution(brown, yellow) {
  let sum = brown + yellow;

  // 카펫의 최소 높이는 3 (노란색이 1개 이상이기 때문에)
  // h -> 세로길이, w -> 가로길이
  for (let h = 3; h <= brown; h++) {
    // 임의의 높이로 나눌 때 나머지가 없는 경우 값을 가로 길이로 지정
    if (sum % h === 0) {
      let w = sum / h;

      // 겹치는 테두리 길이를 제외한 h와 w의 곱이 yellow와 같다면 정답
      if ((h - 2) * (w - 2) === yellow) {
        return [w, h];
      }
    }
  }
}
