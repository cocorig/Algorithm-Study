function solution(phone_book) {    
  let map = new Map();
  
  phone_book.forEach((phone) => {
    
    // map에 전화번호가 없을경우
      if(!map.has(phone)){
        // map  키-값 쌍 객체에 추가
          map.set(phone, phone);
      }
  })

// Map(3) {
//   '119' => '119',
//   '97674223' => '97674223',
//   '1195524421' => '1195524421'
// }

/// 전화번호 순회
  for(let phone of phone_book){
      let count = 0;
      let str = "";
      
      // 전화번호를 문자 하나씩 순회하면서 str에 문자추가
      for(let char of phone){
        console.log(char);
          str += char; 
          // 이미 map객체에 있다면 count +1
          if(map.has(str)){
              count++;
          }
          // count가 2이상이면 
          if(count > 1){
              return false;
          }
      }   
  }
  
  return true;
}
console.log(solution(["119", "97674223", "1195524421"]));