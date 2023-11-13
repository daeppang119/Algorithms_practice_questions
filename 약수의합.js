function solution(n) {
  var answer = 0;
  let arr = [];
  //  n을 나누어서 나머지가 0이 되어야한다.
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      arr.push(i);
    }
  }
  //  배열에 있는 숫자들 다 더하기
  for (let i = 0; i < arr.length; i++) {
    answer += arr[i];
  }
  return answer;
}
