// 영어 점수와 수학 점수의 평균 점수를 기준으로 학생들의 등수를 매기려고 합니다. 영어 점수와 수학 점수를 담은 2차원 정수 배열 score가 주어질 때, 영어 점수와 수학 점수의 평균을 기준으로 매긴 등수를 담은 배열을 return하도록 solution 함수를 완성해주세요.

// 평균 구하기 , 정렬하기
function solution(score){
  
  const arr = score.map((v)=>{
    return ((v[0] + v[1]) / 2)
  })

  const sortArr = arr.slice().sort((a,b) => (b - a));
  return arr.map((v)=>sortArr.indexOf(v) + 1 )

} 
console.log(solution([[80, 70], [70, 80], [30, 50], [90, 100], [100, 90], [100, 100], [10, 30]]));

// [ 75, 70, 55, 65 ] arr
// [ 75, 70, 65, 55 ] sort

// arr
// [
//   75,  75, 40, 95,
//   95, 100, 20
// ]
// [4, 4, 6, 2, 2, 1, 7]
// sort
//[
//   100, 95, 95, 75,
//    75, 40, 20
// ]

