function solution(n) {
  const result = [];
  
//1. 제곱근을 이용한 약수 구하기
  const sqrtN = Math.floor(Math.sqrt(n));
  console.log(sqrtN);// 3
  //모든 약수는 해당 숫자의 제곱근보다 작거나 같은 범위(i <= sqrtN)에서만 찾아보면 되기 때문에 숫자를 제곱근까지만 반복문을 돌면서 약수를 찾는다.
  
  for(let i = 1; i <= sqrtN; i++){ // 1 ~ 3까지만 반복
      
      if(n % i === 0){   // 12 % 1 , 12 % 2 , 12 % 3
          result.push(i); // 1 , 2,3

          if(i !== n / i){ // 1 != 12 / 1 , 2 != 12 / 2 , 3 != 12 /3
              result.push(n / i); // 12 , 6, 4
          }
      }
  }
  //result의 값 => [ 1, 12, 2, 6, 3, 4 ]

  //2. 약수의 합 
  const ans = result.reduce((acc , v)=>{ 
    return acc + v;
  }, 0);
  return ans;
}

console.log(solution(12));