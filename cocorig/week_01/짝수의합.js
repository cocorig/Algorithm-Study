// 정수 n이 주어질 때, n이하의 짝수를 모두 더한 값을 return 하도록 solution 함수를 작성해주세요
// 입출력 예
// n	result
// 10	30
// 4	6

//  짝수 구하기 i % 2 === 0
//  홀수 구하기 i % 2 !== 0


function solution(n){
  let result = 0;
  for(let i=1; i<=n; i++){ 
    if(i % 2 === 0){
      result += i;
    }
}
    return result;
}