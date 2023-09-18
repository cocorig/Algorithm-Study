// A사무실에는 특정일자의 출퇴근 시간이 기록된 거대한 로그파일이 있다고 한다.
// 파일의 형식은 다음과 같다. (한 라인에서 앞부분은 출근시간(HH:MM:SS), 뒷부분은 퇴근시간이다)

// ```
// 09:12:23 11:14:35
// 10:34:01 13:23:40
// 10:34:31 11:20:10

// ```
// 특정시간을 입력(예:11:05:20)으로 주었을 때 그 시간에 총 몇 명이 사무실에 있었는지 알려주는 함수를 작성하시오.

const solution = (timeText) => {
    let sum = 0;
    let time = parseInt(timeText.replaceAll(":", ""));
    let logFile = `09:12:23 11:14:35
	10:34:01 13:23:40
	10:34:31 11:20:10`;

    let times = logFile
        .replaceAll(":", "")
        .split("\n\t")
        .map((el) => el.split(" "));
    for (let i = 0; i < times.length; i++) {
        if (time >= parseInt(times[i][0]) && time <= parseInt(times[i][1])) {
            sum += 1;
        }
    }
    console.log(sum);
		return sum;
};

solution("11:05:20");
