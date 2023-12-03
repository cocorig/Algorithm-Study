// 문자열 my_str과 n이 매개변수로 주어질 때, my_str을 길이 n씩 잘라서 저장한 배열을 return하도록 solution 함수를 완성해주세요.


function solution(my_str ,  n){
let arr = my_str.split("");
let ans = [ ];
while(arr.length > 0){
 ans.push(arr.splice(0, n).join("")); 
}
return ans;
}
console.log(solution("abcdef123" , 3));

// let arr =  [
//   'a', 'b', 'c', '1',
//   'A', 'd', 'd', 'f',
//   'g', 'g', 'g', '4',
//   '5', '5', '6', 'b'
// ];

// let a = arr.splice(0, 6)

// console.log(arr);
// console.log(arr.length);
// arr.splice(0, 6)

// console.log(arr);
// console.log(arr.length);
// arr.splice(0, 6)
// console.log(arr.length);