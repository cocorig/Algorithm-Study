function solution(sizes) {

    const w  = [];
    const h = [];

    // 이중배열 안의 값을 정렬한다.(명함을 회전시켜도 됨)
    sizes.forEach(item => {
        return item.sort((a,b)=>a-b,0)
    });

    for(let i = 0; i < sizes.length; i++){        
        w.push(sizes[i][0]);
        h.push(sizes[i][1]);
    }

    return (Math.max(...w) * Math.max(...h));
}