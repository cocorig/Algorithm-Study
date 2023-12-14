//  풀이
// 1. moves길이만큼 반복하면서 board를 순회하면서 크레인 위치를 기반으로 Board에서  뽑아야하는 인형을 식별한다.
// 2. 만약 0이면 board의 다음 행으로 이동한다.
// 3. 0이 아니면 스택에 push
// 3-1 스택의 top과 현재 board[j][index]가 같다면 둘다 스택에서 빼고 count를 +2해준다
// 4. 해당 크레인 위치의 ㄴ인형을 뽑은거니까 0으로 설정하고 다음 크레인 위치로 넘어가서 다시
// 1번으로 돌아가 실행한다.
// moves길이가 끝이나면 count 값 반환.

function solution(board, moves) {
  let count = 0;
  let stack = [];
  for (let i = 0; i < moves.length; i++) {
    let index = moves[i] - 1;
    for (let j = 0; j < board.length; j++) {
      if (board[j][index] !== 0) {
        if (stack[stack.length - 1] === board[j][index]) {
          stack.pop();
          count += 2;
        } else {
          stack.push(board[j][index]);
        }
        board[j][index] = 0;
        break;
      }
    }
  }
  return count;
}
console.log(
  solution(
    [
      [0, 0, 0, 0, 0],
      [0, 0, 1, 0, 3],
      [0, 2, 5, 0, 1],
      [0, 2, 4, 4, 2],
      [0, 5, 1, 3, 1],
    ],
    [1, 5, 3, 5, 1, 2, 1, 4]
  )
);
