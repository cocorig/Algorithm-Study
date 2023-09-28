function solution(arr1, arr2) {
  let answer = [];

  for (let i = 0; i < arr1.length; i++) {
    // 각 인덱스끼리 더해주는 배열
    let sum = [];
    for (let j = 0; j < arr1[i].length; j++) {
      sum.push(arr1[i][j] + arr2[i][j]);
    }
    answer.push(sum);
  }

  return answer;
}

// return A.map((arr1, idx1) => arr1.map((val, idx2) => val+B[idx1][idx2]))
