//3x 마을 사람들은 3을 저주의 숫자라고 생각하기 때문에 3의 배수와 숫자 3을 사용하지 않습니다. 3x 마을 사람들의 숫자는 다음과 같습니다.

// n result
// 15	25
// 40	76

function solution(n){
  //arr배열의 길이가 n에 도달할 때까지 검사하고 추가를 반복함
  // for(let i = 1; arr.length < n; i++){
  //   if( i.toString().split('').includes('3') || i % 3 === 0 ){
  //     continue;
  //   }else{
  //     arr.push(i);
  //   }
  // }
  // return arr.pop();
  const arr = [];
  let num = 1; // 시작 숫자

  while (arr.length < n) {
    if (!num.toString().includes('3') && num % 3 !== 0) {
      arr.push(num);
    }
    num++;
  }

  return arr[n - 1];
}
  

console.log(solution(15));


// [
//   1,  2,  4,  5,  7,  8,
//  10, 11, 14, 16, 17, 19,
//  20, 22, 25
// ]