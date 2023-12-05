
// x * y = yellow 라고하면 brown은  2x + 2x + 4
// x,y를 찾자
function solution(brown, yellow) {

  // 1. x * y가 yellow와 같아야 하니까, yellow의 약수인 x와 y를 먼저 찾자!
  for(let i = 1; i <= yellow; i++) {
    // 1.1 i를 1부터 시작해서 yellow의 약수인지 확인
    if(yellow % i === 0){
      // i가 약수라면 x는 yellow / x가 된다.
      const x = yellow / i;
      const y = i;
      console.log(x,y); //yellow가 24개있을때의 나올수있는 조합
// 24 1
// 12 2
// 8 3
// 6 4
      // 2. x와 y를 알았으니까 조건에 맞는지 확인함 , brown은  2x + 2x + 4
      if((2 * x)+ (2 * y) + 4 === brown){
        
        return [x + 2 , y + 2] 
      }
    }

  }
 
}

console.log(solution(24,24));