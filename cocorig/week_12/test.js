function solution(board, moves) {
  let n = board.length; // 5

  // 격자의 세로줄이 하나의 배열이 되도록 2차원 배열 방향 변경
  board = board.flat(); // 배열 품
  console.log(board);
  let rotatedBoard = Array.from({ length: n }, (i) => []);
  console.log(rotatedBoard); //자리만듬
  for (let i = 0; i < board.length; i++) {
    // board 원소가 0이 아니면

    if (board[i]) rotatedBoard[i % n].push(board[i]);
  }
  console.log(rotatedBoard);
  // moves 배열 순회하며 인형 꺼내서 stack에 집어넣기
  let stack = [];
  let cnt = 0;
  for (let move of moves) {
    // 맨앞 인형을 뽑는다
    let doll = rotatedBoard[move - 1].shift();
    if (doll === undefined) continue; // 배열이 비었을 때
    if (stack[stack.length - 1] === doll) {
      stack.pop();
      cnt += 2;
    } else {
      stack.push(doll);
    }
  }

  return cnt;
}
console.log(
  solution(
    [
      [0, 0, 0, 0, 0],
      [0, 0, 1, 0, 3],
      [0, 2, 5, 0, 1],
      [4, 2, 4, 4, 2],
      [3, 5, 1, 3, 1],
    ],
    [1, 5, 3, 5, 1, 2, 1, 4]
  )
);
