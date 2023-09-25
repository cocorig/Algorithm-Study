function solution(s){
    var answer = '';
    let num = 0;
    if(s[s.length-1] === '(') {
        return answer = false;
    } 
    for(let i=0; i<s.length; i++) {
        if (s[i] === '(') {
            num++
        } else if (s[i] === ')') {
            num--
        }
        if (num === -1) {
            return answer = false
        }
    }
    if (num === 0) {
        return answer = true;
    } else {
        return answer = false;
    }

    return answer;
}