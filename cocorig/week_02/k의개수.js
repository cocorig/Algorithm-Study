// 1부터 13까지의 수에서, 1은 1, 10, 11, 12, 13 이렇게 총 6번 등장합니다. 정수 i, j, k가 매개변수로 주어질 때, i부터 j까지 k가 몇 번 등장하는지 return 하도록 solution 함수를 완성해주세요.

//10부터 50까지 5는 15, 25, 35, 45, 50 총 5번 등장합니다. 따라서 5를 return 합니다.

//3부터 10까지 2는 한 번도 등장하지 않으므로 0을 return 합니다.

function solution(i, j, k) {
  let arr = '';
  for(let n = i; n <= j; n++){
    arr += n;
  }
   const ans = arr.split('').filter(v => {
    return v === k.toString();
  });
  return ans.length;
 }
//  테스트 1 〉	통과 (58.36ms, 48.9MB)
//  테스트 2 〉	통과 (0.06ms, 33.5MB)
//  테스트 3 〉	통과 (0.07ms, 33.4MB)
//  테스트 4 〉	통과 (3.32ms, 36.4MB)
//  테스트 5 〉	통과 (2.25ms, 36.1MB)
//  테스트 6 〉	통과 (0.10ms, 33.4MB)
//  테스트 7 〉	통과 (0.59ms, 33.6MB)
//  테스트 8 〉	통과 (10.42ms, 39.4MB)


//  console.log(solution(1,13,1));

 function solution(i, j, k) {
  let cnt = 0;
  for(let num = i; num <=j; num++){
 
    let arr = num.toString().split('');
    arr.map((n)=>{
      if(n == k){
        cnt += 1;
      
      }else{
          return 0;
      }
    })
  
 }
return cnt;
}

// 테스트 1 〉	통과 (32.36ms, 42MB)
// 테스트 2 〉	통과 (0.07ms, 33.4MB)
// 테스트 3 〉	통과 (0.06ms, 33.5MB)
// 테스트 4 〉	통과 (7.04ms, 37MB)
// 테스트 5 〉	통과 (3.50ms, 36.2MB)
// 테스트 6 〉	통과 (0.15ms, 33.4MB)
// 테스트 7 〉	통과 (0.54ms, 33.8MB)
// 테스트 8 〉	통과 (10.89ms, 38.4MB)