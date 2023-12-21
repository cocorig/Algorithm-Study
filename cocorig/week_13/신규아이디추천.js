function solution(new_id) {
  new_id = new_id.toLowerCase();
  new_id = new_id.replace(/[^a-z0-9\-_.]/g, "");
  new_id = new_id.replace(/\.+/g, ".");
  new_id = new_id.replace(/^\.|\.$/g, "");
  if (new_id === "") {
    new_id = "a";
  }
  if (new_id.length >= 16) {
    new_id = new_id.slice(0, 15);
    new_id = new_id.replace(/^\.|\.$/g, "");
  }

  return new_id.length > 2
    ? new_id
    : new_id + new_id.charAt(new_id.length - 1).repeat(3 - new_id.length);

  // if (new_id.length <= 2) {
  //   const c = new_id.slice(-1);
  //   new_id = new_id.padEnd(3, c);
  // }
}

const ans = solution("z-+.^.");

console.log(ans);

//1. 대문자는 소문자로 [v]
//2. 알파벳소문자 , 숫자 , - , _ , . 를 제외한 모든 문자는 제거 [v]
//3. .. 두번 이상 연속되면 하나로 치환 [v]
//4. . 처음과 끝에 위치한다면 제거 [v]
//5. 빈 문자열이라면, new_id에 "a"를 대입 [v]
//6. 길이가 16자 이상이면 첫 15개를 제외하고 다 제거 [v]
// 6-1 만약 제거 후 마침표(.)가 new_id의 끝에 위치한다면 끝에 위치한 마침표(.) 문자를 제거 [v]
//7. 2자 이하라면, 마지막 문자를 new_id의 길이가 3이 될 때까지 반복해서 끝에 붙임 [v]

// 배운 내용정리
// padEnd()함수 string.padEnd(목표길이, 채울 값)
// padStart()함수와 동일, 값이 문자열 끝에서부터 채워짐.
// padStart()함수 string.padStart(목표길이, 채울 값)
//
