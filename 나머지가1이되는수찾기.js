function solution(n) {
  var answer = 0;
  let arr = [];
  // n을 나누어 나머지가 1이 되는 값을 구한다
  for (let i = 0; i <= n; i++) {
    if (n % i === 1) {
      arr.push(i);
    }
  }
  // 배열에 작은 수를 구한다
  const min = Math.min(...arr);
  return min;
}
