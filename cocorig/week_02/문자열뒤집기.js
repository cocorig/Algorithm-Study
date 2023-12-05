// 문자열 my_string이 매개변수로 주어집니다. my_string을 거꾸로 뒤집은 문자열을 return하도록 solution 함수를 완성해주세요.

// 입출력 예
// my_string	return
// "jaron"	  "noraj"
// "bread"	  "daerb"

// 풀이 1
function solution(my_string){
 
  return  my_string.split('').reverse().join('');

}
console.log('jaron'.split('')); //[ 'j', 'a', 'r', 'o', 'n' ]
console.log([ 'j', 'a', 'r', 'o', 'n' ].reverse()); /// [ 'n', 'o', 'r', 'a', 'j' ]
console.log([ 'n', 'o', 'r', 'a', 'j' ].join('')); // noraj
// split() 메서드는  문자열로 구분해 문자열 객체를 여러 개의 문자열로 이루어진 배열로 분할합니다.
// reverse() 메서드는 배열을 반전합니다. 첫 번째 배열 요소는 마지막 요소가 되고 마지막 요소는 첫 번째 요소가 된다.
// join() 메서드는 배열의 모든 요소를 문자열로 결합한다.


// 풀이 2
 function solution(my_string) {
  let str = '';

  for(let i = my_string.length-1; i >=0; i--){
      str += my_string.charAt(i)
      
  }
 return str;
}
// charAt() 메서드는 문자열의 특정 인덱스에 위치하는 문자를 반환함