function solution(arr) {
    var answer = [];
    let compareNum = -1;
    for (let i=0; i<arr.length; i++) {
        if (compareNum != arr[i]) {
            answer.push(arr[i]);
            compareNum = arr[i]
        }
    }
    return answer;
}