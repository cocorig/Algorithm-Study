function solution(sizes) {

  // 최대너비 * 최소 높이
  for(let i = 0; i < sizes.length; i++) {
    let w = sizes[i][0]; // 60, 30, 60 , 80
    let h = sizes[i][1]; // 50 , 70 , 30 , 40
 
    // 큰 값을 너비로 
    if(w < h){   // 만약 높이가 너비보다 크다면 높이를 너비로 옮겨줘야함
      // [w, h] = [h, w]
      [sizes[i][0], sizes[i][1]] = [sizes[i][1], sizes[i][0]];
    }
 
  }
  // 그럼 사이즈의 요소들은 w > h로 정렬된다.
  // 여기서 가로의 최대값 * 세로의 최대값 = 최소 지갑
  console.log(sizes); //[ [ 60, 50 ], [ 70, 30 ], [ 60, 30 ], [ 80, 40 ] ]

  let maxWidth = Math.max(...sizes.map(size => size[0]));
  let maxHeight = Math.max(...sizes.map(size => size[1]));

  return maxWidth * maxHeight;
 
}

console.log(solution([[10, 7], [12, 3], [8, 15], [14, 7], [5, 15]]));