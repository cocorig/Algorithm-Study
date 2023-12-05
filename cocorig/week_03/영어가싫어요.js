// 영어가 싫은 머쓱이는 영어로 표기되어있는 숫자를 수로 바꾸려고 합니다. 문자열 numbers가 매개변수로 주어질 때, numbers를 정수로 바꿔 return 하도록 solution 함수를 완성해 주세요.



// function solution(numbers){
//   const number = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];

//   number.forEach((v , i)=>{
//     numbers =  (numbers.split(v).join(i)); // number원소로 구분하면 그 자리는 빈 공간이 생김 ,빈 공간을 같은 문자가 있는 number의 인덱스로 채움 -> 
    
//   })
//   return Number(numbers);
// }


// let arr = "onetwothreefourfivesixseveneightnine".split('two').join(2)
// console.log(arr);

const solution = numbers => {
  const nums_to_string = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
  const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  for (let i = 0; i < 10; i++) {
      numbers = numbers.replace(nums_to_string[i], nums[i])
  }
  return parseInt(numbers)
}   


console.log(solution("onefourzerosixsevensix"));