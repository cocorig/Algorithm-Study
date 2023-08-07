// https://school.programmers.co.kr/learn/courses/30/lessons/120817
// 정수 배열 numbers가 매개변수로 주어집니다. numbers의 원소의 평균값을 return하도록 solution 함수를 완성해주세요.

function solution(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i]
    }
    let answer = sum / numbers.length;
    return answer;
    // let answer = numbers.reduce((a, c) => a + c, 0) / numbers.length
    // return console.log(answer)
}

solution([89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99]);


