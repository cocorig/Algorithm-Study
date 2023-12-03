// 문자열 my_string과 문자 letter이 매개변수로 주어집니다. my_string에서 letter를 제거한 문자열을 return하도록 solution 함수를 완성해주세요.

// my_string	letter	result
// "abcdef"	    "f"	   "abcde"
// "BCBdbe"	    "B"	   "Cdbe"

//  풀이 1
function solution(my_string, letter){
  let ans = '';
  for(let i=0; i < my_string.length; i++){
   if(my_string[i] !== letter){
     ans += my_string[i];
   }
  }
  return ans;
}

// 풀이 2
function solution(my_string, letter) {
  const ans = my_string.split(letter).join(''); //Cdbe
  return  ans;
}
const ans =  solution("BCBdbe","B")
console.log(ans);
// console.log("abcdef".split('f')); //[ 'abcde', '' ]

// "BCBdbe"..split("B") => [ '', 'C', 'dbe' ]

//[ '', 'C', 'dbe' ].join('') => Cdbe