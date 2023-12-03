// 우주여행을 하던 머쓱이는 엔진 고장으로 PROGRAMMERS-962 행성에 불시착하게 됐습니다. 입국심사에서 나이를 말해야 하는데, PROGRAMMERS-962 행성에서는 나이를 알파벳으로 말하고 있습니다. a는 0, b는 1, c는 2, ..., j는 9입니다. 예를 들어 23살은 cd, 51살은 fb로 표현합니다. 나이 age가 매개변수로 주어질 때 PROGRAMMER-962식 나이를 return하도록 solution 함수를 완성해주세요.

// age	result
// 23	"cd"
// 51	"fb"
// 100	"baa"


//  하드코딩 느낌...
// function solution(age) {
//   let list = 'abcdefghij';
//   let answer = age.toString().split("").map(Number);
//   let result ='';
//   for(let i=0; i < answer.length; i++){
//     result +=  list[answer[i]];

//   }
//   return result;

// }

// String.fromCharCode()이용
function solution(age) {
  const ageArr = String(age).split("");
  console.log(ageArr); //[ '5', '3' ]
  let ans = "";
  
  for(let i = 0; i < ageArr.length; i++){
      ans += String.fromCharCode(Number(ageArr[i]) + 97);
  }
  
  return ans;
}

solution(53)

//String.fromCharCode()함수는 주어진 유니코드 코드 포인트에 해당하는 문자를 반환하는 JavaScript의 내장 함수
// a부터 j까지 순서대로 0부터 9까지에 대응시키기 위해 a의 코드 포인트인 97을 더해주는 것입니다.