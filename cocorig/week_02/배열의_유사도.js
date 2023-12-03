//두 배열이 얼마나 유사한지 확인해보려고 합니다. 문자열 배열 s1과 s2가 주어질 때 같은 원소의 개수를 return하도록 solution 함수를 완성해주세요.

// s1	                    s2	                  result
// ["a", "b", "c"]	["com", "b", "d", "p", "c"] 	2
// ["n", "omg"]	       ["m", "dot"]           	  0 


// 한쪽만 순회
function solution(s1, s2) {
  let ans = 0;
  
  s1.forEach((item) => {
      if(s2.includes(item)){
          ans++;
      }
  })
  
  return ans;
}

function solution(s1, s2){

  let ans = 0;
  for(let i=0; i<s1.length; i++){
    for(let j=0; j<s2.length; j++){
      if(s1[i] === s2[j]){
        ans++;
      }
    }
  }
  return ans;
}