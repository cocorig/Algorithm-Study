// 정수 배열 numbers가 매개변수로 주어집니다. numbers의 원소의 평균값을 return하도록 solution 함수를 완성해주세요.

// numbers	                                    result
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]	              5.5
// [89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99]   94.0

//  평균 - > number배열의 모든 원소의 합 / number배열의 원소갯수(뱌열의 길이)

// reduce 메소드 사용해 한줄 풀이 가능
function solution(numbers) {
    
  return numbers.reduce((a,b) => a + b, 0) / numbers.length;
}

// forEach문 사용
function solution(numbers) {
  let sum = 0;
  
  numbers.forEach(item => {
    sum += item;
  });
  
  return sum / numbers.length;
}


// for문 사용
function solution(numbers) {
  
  let sum =0;
  for(let i =0; i <numbers.length;i++){
  sum =  sum + numbers[i]
      
  }
  return sum / numbers.length;
}

