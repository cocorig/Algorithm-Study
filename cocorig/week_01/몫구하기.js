// 몫 구하기
// num1이 10, num2가 5이므로 10을 5로 나눈 몫 2를 return 합니다.

//풀이 1
function solution(num1, num2) {
  const answer = parseInt(num1 / num2)
  return answer
}
solution(10,5)

//풀이 2
function solution(num1, num2) {
  var answer = Math.floor(num1 / num2);
  return answer;
}