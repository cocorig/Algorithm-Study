function solution(number, k) {
  const stack = [];

  for (let i = 0; i < number.length; i++) {
    const current = number[i];

    // 스택에 남은 숫자가 있고, 현재 숫자가 스택의 맨 끝 숫자보다 크며, 아직 제거해야 할 숫자(k)가 남아있을 때
    console.log(
      `current: ${current}, top :${
        stack[stack.length - 1]
      } k: ${k} ,stack :${stack}`
    );
    while (stack.length > 0 && stack[stack.length - 1] < current && k > 0) {
      stack.pop();
      k--;
    }

    stack.push(current);
  }

  //만약 k개의 숫자를 다 제거하지 못했을 경우, 남은 k개의 숫자를 스택에서 제거
  stack.splice(stack.length - k, k);

  return stack.join("");
}
console.log(solution("1231234", 3));

// 처음 값은 스택에 push하고 , 스택의 top요소와 햔재 배열의 요소를 비교해서 이 현재 배열요소가 더 클때 top을 빼고 큰 값을 스택에 프쉬하는 식으로 풀고 제거 해야 할 수 k가 0이되었을때 빠져나와서 마지막으로 조인으로 문자열로 반환
