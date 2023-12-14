// 최대한 적은 보트 사용하기위해 제일 큰 수와 제일 작은 수를 합친 수를 lilt와 비교하면서 풀이 (효율적으로 남는 부붙이 변로 없어야 하기 때문 )
function solution(people, limit) {
  people.sort((a, b) => a - b);
  //[ 50, 50, 70, 80 ] 먼저 정렬해 놓고 시작
  let boat = 0; // 보트 수 초기화
  let small = 0; // 제일 적게 나가는 사람 index
  let big = people.length - 1; // 제일 몸무게 많이 나가는 사람 index

  while (small <= big) {
    if (people[small] + people[big] <= limit) {
      //만약 한계 안에 들어간다면 둘다 보트를 탈 수있다. 때문에
      small++; // 다음 순서로 이동
    } // 만약 한계에 넘었으면 제일 무거운 사람은 혼자 타야 구출가능한 상황  제일 무거운 사람만 구출
    big--; // 다음 순서로 이동  ,
    boat++; // 보트 추가
  }

  return boat; // 최소 보트 사용 횟수 반환
}
// 끝과 끝에서부터 반복하기 때문에  small이 big보다 작을 때만 반복하고 , 커지면 while문을 빠져나와 보트 수를 반환하는 로직이다.
console.log(solution([70, 50, 80, 50], 100));
