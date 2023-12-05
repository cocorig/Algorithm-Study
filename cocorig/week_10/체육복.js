function solution(n, lost, reserve) {
  // 여기서 관건은 정렬이였숩니다!!!

  reserve.sort((a, b) => a - b);
  lost.sort((a, b) => a - b);

  let reserveSet = new Set(reserve.filter((r) => !lost.includes(r)));

  let lostSet = new Set(lost.filter((l) => !reserve.includes(l)));

  for (let student of reserveSet) {
    if (lostSet.has(student - 1)) {
      lostSet.delete(student - 1);
    } else if (lostSet.has(student + 1)) {
      lostSet.delete(student + 1);
    } else if (lostSet.size === 0) {
      return n;
    }
  }

  return n - lostSet.size;
}
