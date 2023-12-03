//정수가 담긴 배열 array와 정수 n이 매개변수로 주어질 때, array에 n이 몇 개 있는 지를 return 하도록 solution 함수를 완성해보세요.

// array	            n	result
// [1, 1, 2, 3, 4, 5]	1	2
// [0, 2, 3, 4]	      1	0

//filter 
function solution(array, n) {
  const newArr = array.filter(item => item === n);
  return newArr.length;
}

// forEach
function solution(array, n) {
  let cnt = 0;
  
  array.forEach(item=>{
    if(item === n){
      cnt++;
    }
  })

  return cnt;
}


// map
function solution(array, n) {
  let cnt = 0;
  array.map((v)=>{
      if(v === n){
          cnt += 1;
      }
  })
  return cnt
}


// filter 메소드 반환값 : 원래의 배열을 변경하지 않고, 조건을 충족하는 모든 요소로 이루어진 새로운 배열을 생성한다.


//  forEach 와 map 차이점 정리 
// 둘다 cnt값은 같지만,  forEach는 아무런 반환값이 없다.
//forEach : 주로 배열을 순회하면서 사이드 이펙트(변수 수정, 로깅 등)를 발생시키기 위해 사용함.반환값을 생성하지 않기 때문에, 배열 내의 아이템을 수정하거나 출력하는 용도로 주로 사용된다.

// array.forEach(item => {
//   // 사이드 이펙트 발생
// });

// map: 배열의 각 아이템을 변환하여 새로운 배열을 생성하고 싶을 때 사용됩니다. 변환된 값을 모아서 새로운 배열을 만들어 반환하므로, 원본 배열을 변경하지 않고도 변환된 값을 가지는 새로운 배열을 얻을 수 있다.

// const newArray = array.map(item => {
//   // 변환된 값 반환
// });
