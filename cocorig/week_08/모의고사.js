function solution(answers) {
  const method = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
  ]
  // method[0][0 % 5] === answers[0]
  const scores = [0, 0, 0];

  for(let i = 0; i < answers.length; i++) { // 정답배열 반복
   for(let j = 0; j < method.length; j++) { // method배열안에 수포자배열을 반복
  // i = 0 이고,
  // j = 0일 때 [1, 2, 3, 4, 5][0] === answers[0]  -> true
  // j = 1일 때 [2, 1, 2, 3, 2, 4, 2, 5][0] === answers[0] -> false
  // j = 2일 때 [3, 3, 1, 1, 2, 2, 4, 4, 5, 5][0] === answers[0] -> false
    // score[1,0,0]
  // i = 1 
  // j = 0일 때 [1, 2, 3, 4, 5][1] === answers[1]  -> false
  // j = 1일 때 [2, 1, 2, 3, 2, 4, 2, 5][1] === answers[1] -> false
  // j = 2일 때 [3, 3, 1, 1, 2, 2, 4, 4, 5, 5][1] === answers[1] -> true
  // score[1,0,1]

  // i = 2
  // j = 0일 때 [1, 2, 3, 4, 5][2] === answers[2]  -> false
  // j = 1일 때 [2, 1, 2, 3, 2, 4, 2, 5][2] === answers[2] ->true
  // j = 2일 때 [3, 3, 1, 1, 2, 2, 4, 4, 5, 5][2] === answers[2] -> false
  // score[1,1,1]


  // i = 3
  // j = 0일 때 [1, 2, 3, 4, 5][3] === answers[3]  -> true
  // j = 1일 때 [2, 1, 2, 3, 2, 4, 2, 5][3] === answers[3] ->false
  // j = 2일 때 [3, 3, 1, 1, 2, 2, 4, 4, 5, 5][3] === answers[3] -> false
  // score[2,1,1]

  // i = 4
  // j = 0일 때 [1, 2, 3, 4, 5][4] === answers[4]  -> false
  // j = 1일 때 [2, 1, 2, 3, 2, 4, 2, 5][4] === answers[4] ->true
  // j = 2일 때 [3, 3, 1, 1, 2, 2, 4, 4, 5, 5][4] === answers[4] -> true
  // score[2,2,2]

  

// 정답배열의 길이가 수포자의 길이를 초과했을때를 생각해서 수포자길이를 나눠 나머자를 반환하게 함 ->  [1, 2, 3, 4, 5][5 % 5] ->  [1, 2, 3, 4, 5][0] -> 초과했으면 다시 처음으로 돌아가서 검사하게된다.
    if(method[j][i % method[j].length] === answers[i]){
      scores[j]++;
    }
  }// (method[j][i % method[j].length] ?? 
  }
  // 최종 맞춘 문제 수 scores배열 -> 문제를 많이 맞춘 수포자를 오름차순으로 반환해야함
  // 여기서 scores의 인덱스 + 1한게 참가자 수 번호
  // 1번 수포자 -> 2문제 맞춤
  // 2번 수포자 -> 2문제 맞춤
  // 3번 수포자 -> 2문제 맞춤
 console.log(scores); // [ 2, 2, 2 ]
  
  // 제일 많이 맞춘 문제의 수를 구함
  const maxScore = Math.max(...scores);
  let result = []

  for (let i = 0; i < scores.length; i++) {
    if (maxScore === scores[i]) { // [ 5, 0, 0 ] , [ 2, 2, 2 ] ,[3,3,2]
      result.push(i + 1); // 여기서 이미 차례대로 넣어서 오름차 순 할 필요 x
    }
  }
  console.log(result);
  return result;
  

}
console.log(solution([1,3,3,4,2,3]));