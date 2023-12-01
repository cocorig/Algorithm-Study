
// 65 a b c d e f g h i j k l m 77

// 78 n o p q r s t u v w x y z 90 

// 유니코드로 변환한 뒤 차이만큼이 조이스틱 조작 횟수
// 78 보다 크면 반대 방향으로 이동하는것이 최소 이동

function solution(name) {
  let totalMoveCount = 0;
  const nameArr = name.split("");
  const changeCode = nameArr.map((item)=> item.charCodeAt(0));
  for(let i = 0; i<changeCode.length-1; i++){
    if(changeCode[i]<78){
      const moveCount = changeCode[i]-'A'.charCodeAt(0);
      totalMoveCount = totalMoveCount + moveCount + 1;
    } else {
      const moveCount = 91 - changeCode[i];
      totalMoveCount = totalMoveCount + moveCount + 1;
    }
  }
  return totalMoveCount-1;
}

// BBBBAAAAAAABA 의 경우 왼쪽으로 돌아가는게 최소
function solution(name) {
  var answer = 0;
  let min = name.length - 1;

  for (let i = 0; i < name.length; i++) {
    let currentAlphabet = name.charCodeAt(i);

    if (currentAlPhabet < 78) {
      answer += currentAlphabet % 65;
    } else {
      answer += 91 - currentAlphabet;
    }

    let nextIndex = i + 1;

    while (nextIndex < name.length && name.charCodeAt(nextIndex) === 65) {
      nextIndex += 1;
    }
    min = Math.min(
      min,
      i * 2 + name.length - nextIndex, // 먼저 오른쪽으로 가기
      i + (name.length - nextIndex) * 2 // 처음부터 반대로 가기
    );
  }
  answer += min;
  return answer;
}

