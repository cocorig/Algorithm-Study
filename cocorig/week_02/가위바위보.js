// 가위는 2 바위는 0 보는 5로 표현합니다. 가위 바위 보를 내는 순서대로 나타낸 문자열 rsp가 매개변수로 주어질 때, rsp에 저장된 가위 바위 보를 모두 이기는 경우를 순서대로 나타낸 문자열을 return하도록 solution 함수를 완성해보세요.

// rsp	result
// "2"	   "0"
// "205"	"052"

function solution(rsp) {
  let ans = '';
  for(let i=0; i < rsp.length; i++) {
  
    if(rsp[i] === '2') {
      ans += '0';
    }else if( rsp[i] === '0'){
      ans += '5';
    }else if(rsp[i] === '5'){
      ans +=  '2';
    }
  }
  return(ans);
}

// 테스트 1 〉	통과 (0.04ms, 33.4MB)
// 테스트 2 〉	통과 (0.04ms, 33.5MB)
// 테스트 3 〉	통과 (0.04ms, 33.4MB)
// 테스트 4 〉	통과 (0.05ms, 33.4MB)
// 테스트 5 〉	통과 (0.04ms, 33.5MB)
// 테스트 6 〉	통과 (0.04ms, 33.5MB)
// 테스트 7 〉	통과 (0.13ms, 33.5MB)


//  switch문을 사용한 풀이
function solution(rsp) {
  let ans = ''
  for(let i = 0; i < rsp.length; i++){
    
  switch (rsp[i]){
    case '2':
      ans += '0';
    break;
    case '0':
      ans += '5';
    break;
    case '5':
      ans += '2';
    break;

  }

  }
  console.log(ans);
}
const ans = solution('205')
// 테스트 1 〉	통과 (0.07ms, 33.4MB)
// 테스트 2 〉	통과 (0.04ms, 33.5MB)
// 테스트 3 〉	통과 (0.04ms, 33.5MB)
// 테스트 4 〉	통과 (0.04ms, 33.4MB)
// 테스트 5 〉	통과 (0.04ms, 33.5MB)
// 테스트 6 〉	통과 (0.04ms, 33.5MB)
// 테스트 7 〉	통과 (0.13ms, 33.4MB)

//  풀이 3 배열에 담아서 풀어봄
function solution(rsp) {
  const str = [];
  
  for(let i = 0; i < rsp.length; i++){
     
      if(rsp[i] == 2){
          str.push(0);
      }else if(rsp[i] == 0){
          str.push(5);
      }else if(rsp[i] == 5){
          str.push(2)
      }
     
  }
  
  return str.join('');
}
// 테스트 1 〉	통과 (0.04ms, 33.4MB)
// 테스트 2 〉	통과 (0.04ms, 33.4MB)
// 테스트 3 〉	통과 (0.04ms, 33.4MB)
// 테스트 4 〉	통과 (0.04ms, 33.5MB)
// 테스트 5 〉	통과 (0.04ms, 33.6MB)
// 테스트 6 〉	통과 (0.04ms, 33.4MB)
// 테스트 7 〉	통과 (0.15ms, 33.5MB)