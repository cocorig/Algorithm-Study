/* function solution(s) {
  // s를 배열로 변환
  const strArr = [...s];
  // 여는괄호와 닫는괄호 갯수를 0으로 초기화
  let open = 0;
  let close = 0;

  // 괄호 각각 forEach를 돌면서 갯수 카운트
  strArr.forEach((v) => (v.includes("(") ? open++ : null));
  strArr.forEach((v) => (v.includes(")") ? close++ : null));
  console.log(strArr[strArr.length / 2 - 1], strArr[strArr.length / 2]);

  for (let i = 0; i < strArr.length; i++) {
    // ")" 로 시작하거나 "("로 끝나면 false 반환
    if (strArr[0] === ")" || strArr[strArr.length - 1] === "(") {
      return false;
      // 여는 괄호와 닫는 괄호의 갯수가 같고 ")"로 끝나면 true 반환
    } else if (open === close && strArr[strArr.length - 1] === ")") {
      return true;
    } else if (
      strArr[strArr.length / 2] === ")" &&
      strArr[strArr.length / 2 + 1] === "("
    ) {
      return false;
    } else {
      false;
    }
  }
}

solution("())(()");
 */
// 반례1 : (())())
// ( 의 갯수와 ) 의 갯수 구해서 같은지 비교?

// 5, 11번 실패
// 반례2 : ())(() / ()))((()

// 정답1 -> 효율성 테스트 1번 실패
function solution(s) {
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    if (s[0] === "(" && s[i] === ")") {
      stack.pop();
    } else {
      stack.push(s[i]);
    }
  }

  // stack 안의 값이 모두 소거되었다면 true, 아니면 반환
  return stack.length === 0;
}

// 정답2
function solution(s) {
  const stack = [];

  [...s].map((string) => {
    if (string === ")" && stack[stack.length - 1] === "(") {
      stack.pop();
    } else {
      stack.push(string);
    }
  });

  return stack.length === 0;
}
