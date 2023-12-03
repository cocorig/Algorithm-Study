//정수 배열 array와 정수 n이 매개변수로 주어질 때, array에 들어있는 정수 중 n과 가장 가까운 수를 return 하도록 solution 함수를 완성해주세요.

//    array	    n	result
// [3, 10, 28]	20	28
// [10, 11, 12]	13	12

//3, 10, 28 중 20과 가장 가까운 수는 28입니다.
//10, 11, 12 중 13과 가장 가까운 수는 12입니다.


// function solution(array, n) {
//   array.sort((a,b)=> a-b);
//   //console.log(array)
//   let arr =[]
//   let a = 0;
//   let b = 0;
//   for(let i = 0; i< array.length; i++){
//      arr.push(Math.abs(n - array[i]))
//      a =  Math.min(...arr) //가장 작은값
//      b = arr.indexOf(a) //최소값이 담긴 index를 찾아라 

//   }
//   return (array[b])
// }     


// function solution(array, n) {
//   let arr = []
//   array.sort((a,b)=> a - b);
//   for(let i=0; i< array.length; i++){
//   arr.push(Math.abs(n - array[i])) ; 
// } //arr = [ 17, 10, 8 ] -> n에 각 원소를 뺀 값이 들어있는 배열
// // 제일 작은 수를 min변수에 담음
// let min  = Math.min(...arr);  // 8
// // min값의 인덱스가 기본배열의 가까운 수가 들어있는 원소자리이기 때문에 인덱스를 찾음
// let indx =  arr.indexOf(min)
// return array[indx];
// }     
// console.log(solution(	[3, 10, 28]	,20));

// // 20과 가까운 수를 찾으려면 원소를 뺘봐여함
// // 20 - 3 = 17
// // 20 - 10 = 10
// // 28 - 20 = 8 .. 결과 값이 가장 작은게 가까운 수

// // 13과 가까운 수를 찾으려면
// // 13 - 10 = 3
// // 11 - 10 = 1 // 가까운 수
// // 12 - 10 = 2
// // 예외상황 - > 13 - 20 =  -7 이때 절대값으로 양수가 나오게 해줘야함

// function solution(array, n) {
//   let arr = []
//   array.sort((a,b) => a - b);
//   for(let i=0; i< array.length; i++){
//   arr.push(Math.abs(n - array[i])) ; 
// } 
// console.log(arr); //[ 1, 1 ]
// let min  = Math.min(...arr); 
// console.log(min);// 1
// let indx =  arr.indexOf(min) //indexOf는 처음 찾은 값을 반환하기 때문에 
// console.log(indx);// 0
// return array[indx]; // 13이 반환됨 , 작은 수를 반환해야 하므로 처음에 뱌열을 정렬시킴
// }     
// console.log(solution(	[13, 11], 12));

// 가장 가까운 수가 여러 개일 경우 더 작은 수를 return해야 하기 때문에 처음에 입력배열을 정렬시켜줘야함
// 12 - 13 = 1
// 12 - 11 = 1
// 11을 반환

// function solution(array, n) {
  
 
//       let arr  = (array.sort((a, b) => a - b)); //[ 11, 13 ]
//       let arrr = arr.map((v)=>{ //11 , 13 -> [ 1, 1 ]
//        return Math.abs(n - v) // 12 - 11 , 12 - 13 -> 1
//       })

//       let min = Math.min(...arrr) // 1
//       let idx = arrr.indexOf(min); // 0번인덱스

//       console.log(arr[idx]);
      

// }



// function solution(array, n) {
//   return array[
//       array
//           .sort((a, b) => a - b)
//           .map((v) => Math.abs(v - n))
//           .indexOf(Math.min(...array.map((v) => Math.abs(v - n))))
//   ];
// }


console.log(solution(	[13, 11], 12));
function solution(array, n) {
  let diff = 0; //두 수의 차이값
  let result = 0; //결과로 나오ㅏ야하는 값

  array.forEach((num, i) => { 
    console.log(num , i);
      let abs = Math.abs(n - num); 

      if (i === 0) {
          diff = abs; 
          result = num;
          return;
      }

      if (diff >= abs) {
          if (diff === abs) {
              result > num ? (result = num) : null;
          } else {
              diff = abs; 
              result = num; 
          }
      }
  });
  return result;
}
