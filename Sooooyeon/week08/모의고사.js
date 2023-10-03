function solution(answers) {

    // 수포자들이 찍은 정답 배열
    let one = [];
    let two = [];
    let three = [];

    // 맞은 갯수 변수
    let oneCount = 0;
    let twoCount = 0;
    let threeCount = 0;

    let score = [];
    let res = [];
    
    // for문을 돌면서 수포자들 답을 반복적으로 배열에 넣어준다.
    for(i=0; i<answers.length/5; i++){
        one.push(1,2,3,4,5);
    }

    for(i=0; i<answers.length/8; i++){
        two.push(2,1,2,3,2,4,2,5);
    }

    for(i=0; i<answers.length/10; i++){
        three.push(3,3,1,1,2,2,4,4,5,5);
    }

    // 정답과 수포자들 답을 비교해 답이 맞을경우 맞은 갯수를 1씩 증가시킴.
    for(i=0; i<answers.length; i++){
        if(one[i]===answers[i]){
            oneCount++;
        }
        if(two[i]===answers[i]){
            twoCount++;
        }
        if(three[i]===answers[i]){
            threeCount++;
        }
    }

    console.log(oneCount, twoCount, threeCount);

    score.push(oneCount);
    score.push(twoCount);
    score.push(threeCount);

    // 가장 높은 점수를 받은 수포자 찾기
    const maxScore = Math.max(...score);

    for(let i = 0; i < score.length; i++) {
        if(score[i] === maxScore){
            res.push(i + 1);
        }
    }

    return res;
}
