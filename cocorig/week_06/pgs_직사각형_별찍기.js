// process.stdin.setEncoding('utf8');
// process.stdin.on('data', data => {
//     const n = data.split(" ");
//     const a = Number(n[0]), b = Number(n[1]);
        
//     // a = 5 , b = 3
    
    for(let i = 0; i < b; i++){

        let ans = '';
        for(let j = 0; j < a; j++){ 
                ans += '*'  // '*****'
        }
        console.log(ans)
    }


// 반복하고 싶은 문자열.repeat(문자열을 반복할 횟수);
    const a = 5;
    const b = 3;
    const star = `${'*'.repeat(a)}\n`; // *****
    console.log(star.repeat(b)) // '*****'.repeat(3)
    
// });

//  결과 
// *****
// *****
// *****