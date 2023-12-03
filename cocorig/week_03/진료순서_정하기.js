// 외과의사 머쓱이는 응급실에 온 환자의 응급도를 기준으로 진료 순서를 정하려고 합니다. 정수 배열 emergency가 매개변수로 주어질 때 응급도가 높은 순서대로 진료 순서를 정한 배열을 return하도록 solution 함수를 완성해주세요.

// emergency	                result
// [3, 76, 24]	               [3, 1, 2]
// [1, 2, 3, 4, 5, 6, 7]	  [7, 6, 5, 4, 3, 2, 1]
// [30, 10, 23, 6, 100]	      [2, 4, 3, 5, 1]

// emergency가 [3, 76, 24]이므로 응급도의 크기 순서대로 번호를 매긴 [3, 1, 2]를 return합니다.
/// 접근 방식
// 
function solution(emergency){             

  let sortEmergency = [...emergency].sort((a,b)  =>  b - a);

  let ans = [];
  for(let i = 0; i < emergency.length; i++){
    let idx = sortEmergency.indexOf(emergency[i]);
    ans.push(idx + 1);
  }
  return ans;
}
//      정렬된 배열     [ 7, 6, 5, 4, 3, 2, 1]        
console.log(solution([1, 2, 3, 4, 5, 6, 7]));
///                 
                  // 인덱스 값을 줘야함

// 정렬된 배열안에서 원본 배열의 원소의 index 값을 찾아야함
// 그 값을 차례대로 결과배열에 push해줌
                
// 배열 안의 30인 원소의 index를 반환한다. -> 1 -> 배열에 넣어줌
console.log([ 100, 30, 23, 10, 6 ].indexOf(30));


