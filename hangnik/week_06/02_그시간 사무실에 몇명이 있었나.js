// 특정시간을 입력(예:11:05:20)으로 주었을 때 그 시간에 총 몇 명이 사무실에 있었는지 알려주는 함수
function solution(time) {
  const log = [
    ["09:12:23", "11:14:35"],
    ["10:34:01", "13:23:40"],
    ["10:34:31", "11:20:10"],
  ];

  let num = 0;
  const timeNum = parseInt(time.replaceAll(":", ""));

  // 각 로그를 숫자로 변환 후 입력값과 비교
  for (let i = 0; i < log.length; i++) {
    const start = parseInt(log[i][0].replaceAll(":", ""));
    const end = parseInt(log[i][1].replaceAll(":", ""));

    if (start <= timeNum && timeNum <= end) num++;
  }

  return num;
}

solution("11:05:20"); // 3명
