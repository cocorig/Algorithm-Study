// https://school.programmers.co.kr/learn/courses/30/lessons/120869
// PROGRAMMERS-962 행성에 불시착한 우주비행사 머쓱이는 외계행성의 언어를 공부하려고 합니다. 알파벳이 담긴 배열 spell과 외계어 사전 dic이 매개변수로 주어집니다. spell에 담긴 알파벳을 한번씩만 모두 사용한 단어가 dic에 존재한다면 1, 존재하지 않는다면 2를 return하도록 solution 함수를 완성해주세요.

function solution(spell, dic) {
    var answer = 0;
    answer = dic.some((v) => [...v].sort().toString() === [...spell].sort().toString()) ? 1 : 2


    // 값이 같지만 배열은 서로 다른 주소 값을 가지기 때문에 무조건 false가 나옴 그래서 toString()으로 문자열로 변경하여 비교
    // some은 서로 비교하면서 하나라도 조건을 만족하면 true를 반환
    // every는 비교하는 조건 모두 만족해야 true를 반환
    dic.forEach((v) => {
        console.log([...v].sort() === [...spell].sort());
        console.log([...v].sort())
        console.log([...spell].sort())
    });
    return answer;
}

// solution(["p", "o", "s"], ["sod", "eocd", "qixm", "adio", "soo"])
solution(["z", "d", "x"], ["def", "dww", "dzx", "loveaw"])