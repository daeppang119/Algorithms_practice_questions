function solution(left, right) {
  var answer = 0;
  for (let i = left; i <= right; i++) {
    console.log(Math.sqrt(i));
    if (Math.sqrt(i) % 1 === 0) {
      answer += -i;
    } else {
      answer += i;
    }
    // 약수가 짝수이면.. 더하기 홀수이면.. 빼기
  }
  return answer;
}
