function solution(number, k) {
  if (k === 0) return number;

  const maxIdx = number
    .slice(0, number.length - k + 1)
    .split("")
    .reduce((maxIdx, digit, idx) => {
      if (digit > number[maxIdx]) return idx;
      return maxIdx;
    }, 0);

  return number[maxIdx] + solution(number.slice(maxIdx + 1), k - 1);
}
