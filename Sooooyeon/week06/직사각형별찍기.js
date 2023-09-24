process.stdin.setEncoding('utf8');
process.stdin.on('data', data => { // 입력받은 숫자를 data에 받음
    const n = data.split(" "); // data를 배열로 변경
    const a = Number(n[0]), b = Number(n[1]);
    // a는 가로로 찍혀야하는 별의 갯수, b는 세로로 찍혀야 하는 별의 갯수
    // (a는 열, b는 행)

    for(let i=0; i<b; i++){ // 행에 해당되는 b부터 반복문 시작
        let str = ""; 
        for(let j=0; j<a; j++){ 
            str = str + "*" 
        } 
    console.log(str)
    }
});