// 문자열 s가 매개변수로 주어집니다. s에서 한 번만 등장하는 문자를 사전 순으로 정렬한 문자열을 return 하도록 solution 함수를 완성해보세요. 한 번만 등장하는 문자가 없을 경우 빈 문자열을 return 합니다.

// "abcabcadc"에서 하나만 등장하는 문자는 "d"입니다.
// "abdc"에서 모든 문자가 한 번씩 등장하므로 사전 순으로 정렬한 "abcd"를 return 합니다
// "hello"에서 한 번씩 등장한 문자는 "heo"이고 이를 사전 순으로 정렬한 "eho"를 return 합니다.


// 접근방식 
// 일단 배열로 하나하나 쪼개서 
// 앞에서부터 그 단어가 들어있는 인덱스와 뒤애서부터 그 단어가 들어있는 인덱스가 같으면 하나 밖에 없음
function solution(s) {
  let ans = [];
  let list  = s.split('');

  list.forEach((item) =>{
    // console.log(list.indexOf(item) , list.lastIndexOf(item));
      if(list.indexOf(item) === list.lastIndexOf(item)){
          ans.push(item)
      }
  })
  return(ans.sort().join(''))
}

console.log(solution("abcabcadc"));

// let a = [
//   'a', 'b', 'c',
//   'a', 'b', 'c',
//   'a', 'd', 'c'
// ].indexOf('a')
// console.log(a);
// let b = [
//   'a', 'b', 'c',
//   'a', 'b', 'c',
//   'a', 'd', 'c'
// ].lastIndexOf('a')
// console.log(b);

