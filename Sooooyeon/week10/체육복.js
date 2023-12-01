// 테스트 케이스
// 1,3,7,8 체육복 2개
// 3,4,6,9 체육복 분실

1, 2, 3, 4, 5, 6, 7, 8, 9, 10
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

// 여벌 체육복 가져온사람 + 1
1, 2, 3, 4, 5, 6, 7, 8, 9, 10
[1, 0, 1, 0, 0, 0, 1, 1, 0, 0]

// 체육복 분실 - 1
1, 2, 3, 4, 5, 6, 7, 8, 9, 10
[1, 0, 0, -1, 0, -1, 1, 1, -1, 0]

// 배열을 돌다가 음수를 만나면 양쪽 값을 살펴 1일 경우 더해주고 값 변경.


function solution(n, lost, reserve){
  const count = Array(n).fill(0);
  reserve.map( v => count[v-1] = count[v-1]+ 1)
  lost.map( v => count[v-1] = count[v-1] -1)

  count.map((v,i)=>{
    if(v<0){
      if(count[i-1] > 0){
        count[i] =count[i]+ 1;
        count[i-1] =count[i-1] -1;
      } else if(count[i+1] > 0){
        count[i] =count[i]+ 1;
        count[i+1] =count[i+1] -1;
      }
    }
    return count
  })
  const answer = count.filter(v=> v>=0).length;
  return answer;
}