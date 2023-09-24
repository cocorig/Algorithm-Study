const file = ['09:12:23 11:14:35',
                '10:34:01 13:23:40',
                '10:34:31 11:20:10']


function solution(time) {

    const arr =[];

    for(i=0; i<file.length; i++){            
        arr.push(file[i].slice(0,8).replaceAll(":",""));
        arr.push(file[i].slice(9).replaceAll(":",""));
    }

    console.log(arr)

    let count = 0;
    for(let i=0; i<arr.length; i+=2){
        if(parseInt(arr[i])<parseInt(time.replaceAll(":","")) && parseInt(time.replaceAll(":",""))<parseInt(arr[i+1]))
        {
            count = count +1;
        }
    }
    
    return count;
}

const result = solution('11:05:20');
console.log(result);
