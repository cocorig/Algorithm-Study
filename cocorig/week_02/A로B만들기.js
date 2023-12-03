//문자열 before와 after가 매개변수로 주어질 때, before의 순서를 바꾸어 after를 만들 수 있으면 1을, 만들 수 없으면 0을 return 하도록 solution 함수를 완성해보세요


// before	        after	      result
// "olleh"	      "hello"	    1
// "allpe"	      "apple"   	0

 solution = (b, a) => Number([...b].sort().join('') === [...a].sort().join(''));
// 같을경우 true를 반환 -> 바로 Number로 바꾸면 1 
// function solution(before, after) {

//   const Newbefore = before.split('').sort().join('');
//   const Newafter = after.split('').sort().join('');
//   console.log(Newbefore , Newafter);
//   return Newbefore === Newafter ? 1 : 0;
 
//   }

  console.log(solution("olleh"	,"hello"));

// before와 after를 둘다 똑같이 sort을 적용시켰을 때 값이 같다면 순서를 바꾸어도 after를 만들수 있다고 생각함.
  console.log([ 'a', 'l', 'l', 'p', 'e' ].sort()); 
  //[ 'a', 'e', 'l', 'l', 'p' ]
  console.log([ 'a', 'p', 'p', 'l', 'e' ].sort()); 
  //[ 'a', 'e', 'l', 'p', 'p' ]

  console.log([ 'o','l','l','e' ,'h' ].sort()); 
  //[ 'e', 'h', 'l', 'l', 'o' ]
  console.log(['h','e','l','l','o'].sort());
  //[ 'e', 'h', 'l', 'l', 'o' ]
  
  // 두 값이 같은지 확인하기 위해 join으로 문자형배열을 문자열로 합쳐줌