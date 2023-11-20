function solution(arr, divisor) {
  // arr에있는 숫자와 divisor숫자 하나씩 나누기
  let answer = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % divisor === 0) {
      answer.push(arr[i]);
    }
  }
  // 나누어 떨어지는게 없다면 -1
  if (answer.length === 0) {
    return [-1];
  }
  answer.sort((a, b) => a - b);
  return answer;
}
