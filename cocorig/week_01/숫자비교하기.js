// 숫자 비교하기
// 정수 num1과 num2가 매개변수로 주어집니다. 두 수가 같으면 1 다르면 -1을 retrun하도록 solution 함수를 완성해주세요.
// 입출력 예 #############
// num1	num2	result
// 2	3	-1
// 11	11	1
// 7	99	-1

function solution(num1, num2) {
  if (num1 === num2){
      return 1
  } 
  return -1
}

// '삼항 연산자'를 이용해서 좀 더 간결하게 풀 수 있다.
// (조건) ? value1:value2
// 조건이 참인 경우 물음표 뒤에 value1이 실행되며, 거짓이면 value2가 실행된다.

function solution(num1, num2) {
  return num1 === num2 ? 1 : -1;
}