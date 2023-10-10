function solution(sizes) {
  // 전체를 배열로 펼쳐서 정렬하면 테스트케이스 7개 실패,,
  // const arr = sizes.flat().sort((a, b) => a - b);
  // const width = arr[arr.length - 1];
  // const height = arr[arr.length / 2 - 1];

  // for문을 돌면서 각 배열을 정렬
  // [ [ 14, 4 ], [ 19, 6 ], [ 16, 6 ], [ 18, 7 ], [ 11, 7 ] ]
  for (let arr of sizes) {
    arr.sort((a, b) => b - a);
  }

  let width = [],
    height = [];

  // 위에서 정렬한 각 배열에서 더 큰 첫번째 원소를 width로, 작은 두번째 원소를 height로 push
  // width: [ 14, 19, 16, 18, 11 ] / height: [ 4, 6, 6, 7, 7 ]
  sizes.forEach((i) => {
    width.push(i[0]);
    height.push(i[1]);
  });

  // width와 height 배열을 정렬
  // width: [ 19, 18, 16, 14, 11 ] / height: [ 7, 7, 6, 6, 4 ]
  width.sort((a, b) => b - a);
  height.sort((a, b) => b - a);
  // 또는 Math.max 사용

  // 제일 큰 width와 hegiht 값 곱하기
  return width[0] * height[0];
}

solution([
  [14, 4],
  [19, 6],
  [6, 16],
  [18, 7],
  [7, 11],
]);

// 다른 사람 풀이
// 구조 분해 할당 사용
function solution(sizes) {
  const [hor, ver] = sizes.reduce(
    ([h, v], [a, b]) => [
      Math.max(h, Math.max(a, b)),
      Math.max(v, Math.min(a, b)),
    ],
    [0, 0]
  );
  return hor * ver;
}
