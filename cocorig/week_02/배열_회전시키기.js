// 정수가 담긴 배열 numbers와 문자열 direction가 매개변수로 주어집니다. 배열 numbers의 원소를 direction방향으로 한 칸씩 회전시킨 배열을 return하도록 solution 함수를 완성해주세요.

// numbers	                 direction	result
// [1, 2, 3]	                 "right"	[3, 1, 2]
// [4, 455, 6, 4, -1, 45, 6]	  "left"	[455, 6, 4, -1, 45, 6, 4]



function solution(numbers, direction) {
  let ans = [];
    if(direction == "right"){
      //  뒤의 원소를 빼서 앞으로 

      numbers.unshift( numbers.pop())
 
    } 
    else if(direction == "left"){
    //앞에 원소를 빼서 뒤로 
  
 
      numbers.push(numbers.shift());
   
    }
    ans =  numbers;
    return ans;
  }

console.log(solution([4, 455, 6, 4, -1, 45, 6] ,"left"));



// function solution(numbers, direction) {
 
//   if(direction == "right"){
//     //  뒤의 원소를 빼서 앞으로 
//    let n =  numbers.pop(); 
//     numbers.unshift(n);
//     console.log(numbers);
//   }
//   else if(direction == "left"){
//   //앞에 원소를 빼서 뒤로 

//    let n =  numbers.shift(); 
//    numbers.push(n);
//    console.log(numbers);
//   }

// }
