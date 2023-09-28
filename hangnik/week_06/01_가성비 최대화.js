// 규영님, 하연님 풀이 참고
let orp = 10; // 가격
let org = 150; // 성능
let adp = 3; // 부품가격
let adg = [30, 70, 15, 40, 65]; // 부품성능

// 성능이 큰 부품부터 내림차순으로 반복
adg
  .sort((a, b) => b - a)
  .forEach((val) => {
    // 기존 가성비가 더 좋으면 원래 가성비 리턴
    if (org / orp > (org + val) / (orp + adp)) return;
    else {
      // 추가한 부품 가격과 성능 누적
      org += val;
      orp += adp;
    }

    return parseInt(org / orp);
  });
