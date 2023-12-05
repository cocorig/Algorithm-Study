// 머쓱이네 양꼬치 가게는 10인분을 먹으면 음료수 하나를 서비스로 줍니다. 양꼬치는 1인분에 12,000원, 음료수는 2,000원입니다. 정수 n과 k가 매개변수로 주어졌을 때, 양꼬치 n인분과 음료수 k개를 먹었다면 총얼마를 지불해야 하는지 return 하도록 solution 함수를 완성해보세요.

// n	k	result
// 10	3	124,000
// 64	6	768,000


// 1. 풀이 
function solution(n, k) {
  let serviceDrink = 0;
  let result=0;
  if(n >= 10){
    serviceDrink = Math.floor(n / 10);
  }
  result = (n * 12000) + (k * 2000) - (serviceDrink * 2000);
  return result;
}

// 2. 풀이
function solution(n , k){
  let serviceDrink = Math.floor(n / 10);
  let result = 
  (n * 12000) + (k * 2000) - (serviceDrink * 2000)
  return result;
}

// console.log(1 / 10); // 0.1 -> 소수점 버림 -> floor이용 -> 0
// n이 10보다 작으면 0 반환 -> serviceDrink === 0

//let serviceDrin =  Math.floor(n / 10)부분에서 n이 10보다 작을 경우엔 항상 0을 반환하기때문에 굳이 계산이 필요없다 -> 처음에 let serviceDrink = 0 으로 초기화 시킴

// n이 10이상일 경우에만 serviceDrink수를 계산해 반환한다.