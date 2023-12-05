//머쓱이네 피자가게는 피자를 일곱 조각으로 잘라 줍니다. 피자를 나눠먹을 사람의 수 n이 주어질 때, 모든 사람이 피자를 한 조각 이상 먹기 위해 필요한 피자의 수를 return 하는 solution 함수를 완성해보세요.

// n	result
// 7	1
// 1	1
// 15	3


// Math.ceil메소드 함수 사용
function solution(n) {
    
  return Math.ceil(n / 7);

}
//Math.ceil : 주어진 숫자를 올림하여 가장 가까운 정수를 반환
console.log(Math.ceil( 1 / 7 ));//0.1428571429 -> 1
console.log(Math.ceil( 15 / 7 ));// 2.1428571429 -> 3


function solution(n) {
    // n 이 7이하일 경우는 최소 피자 한판이기때문ㅇ에 1 반환
  if(n <= 7){
    return 1;
  }else if(n % 7 !== 0){ // 7로 나눈 나머지가 있을경우 
    return Math.floor( n / 7 + 1) //나머지 조각이 부족하기 때문에 피자 한판 추가
  }else{ //나머지가 없는 경우 
        return n / 7
  }
}
