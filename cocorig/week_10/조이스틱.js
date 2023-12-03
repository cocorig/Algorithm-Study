function solution(name) {
  let answer = 0;
  const ASCII_A = "A".charCodeAt(); // 'A'의 ASCII 코드: 65
  const ASCII_Z_PLUS_ONE = "Z".charCodeAt() + 1; // 'Z'의 ASCII 코드 + 1: 91

  // 문자를 'A'로 변경하는 데 필요한 최소한의 작업을 계산하는 함수
  const calculateMove = (char) => {
    const charCode = char.charCodeAt();
    return Math.min(charCode - ASCII_A, ASCII_Z_PLUS_ONE - charCode);
  };

  // 입력된 문자열의 각 문자에 대해 필요한 최소 이동 횟수 계산
  const chars = name.split("").map((c) => calculateMove(c));
  let minMove = name.length - 1; // 최소 이동 횟수를 문자열 길이 - 1로 초기화

  // 각 문자에 대한 이동 횟수를 계산하고, 문자열을 순환하는 데 필요한 최소 이동 횟수를 계산
  chars.forEach((move, idx) => {
    answer += move; // 'A'로 변경하는 데 필요한 이동 횟수를 더함

    // 다음 'A'가 아닌 문자를 찾아 최소 이동 횟수를 계산하기 위해 인덱스 이동
    let cursor = idx + 1;
    while (cursor < chars.length && chars[cursor] === 0) cursor++;

    // 순방향 및 역방향으로 문자열을 순환하는 데 필요한 최소 이동 횟수를 계산하고 업데이트
    minMove = Math.min(
      minMove,
      idx * 2 + chars.length - cursor, // 순방향으로 순환하는 경우
      idx + 2 * (chars.length - cursor) // 역방향으로 순환하는 경우
    );
  });

  // 문자를 'A'로 변경하는 데 필요한 총 작업 횟수와 최소 순환 이동 횟수를 반환
  return answer + minMove;
}

const ans = solution("JAN");
console.log(ans);
